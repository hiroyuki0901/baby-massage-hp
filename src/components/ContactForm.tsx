'use client'

import { useState, FormEvent } from 'react'
import { analytics } from './GoogleAnalytics'

interface FormData {
  name: string
  email: string
  phone: string
  babyAge: string
  lessonType: string
  preferredDate: string
  message: string
  privacyConsent: boolean
}

interface FormErrors {
  [key: string]: string
}

const LESSON_TYPES = [
  { value: '', label: '選択してください' },
  { value: 'trial', label: '体験レッスン（1,500円）' },
  { value: 'basic', label: 'ベーシック3回コース（7,500円）' },
  { value: 'private', label: 'プライベートレッスン（4,000円）' },
  { value: 'okurumicare', label: 'おくるみタッチケア（3,000円）' },
  { value: 'skincare', label: 'ベビースキンケア（3,000円）' },
  { value: 'consultation', label: '相談のみ' }
]

const BABY_AGE_OPTIONS = [
  { value: '', label: '選択してください' },
  { value: 'pregnancy', label: '妊娠中' },
  { value: '0-2months', label: '0-2ヶ月' },
  { value: '2-6months', label: '2-6ヶ月' },
  { value: '6-12months', label: '6ヶ月-1歳' },
  { value: '1-2years', label: '1-2歳' },
  { value: 'over2years', label: '2歳以上' }
]

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    babyAge: '',
    lessonType: '',
    preferredDate: '',
    message: '',
    privacyConsent: false
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  // バリデーション関数
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'お名前は必須です'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'メールアドレスは必須です'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '正しいメールアドレスを入力してください'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = '電話番号は必須です'
    } else if (!/^[\d-()+ ]+$/.test(formData.phone)) {
      newErrors.phone = '正しい電話番号を入力してください'
    }

    if (!formData.lessonType) {
      newErrors.lessonType = 'ご希望のレッスンを選択してください'
    }

    if (!formData.privacyConsent) {
      newErrors.privacyConsent = 'プライバシーポリシーに同意してください'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // フォーム送信処理
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Google Analytics追跡
      analytics.formSubmit('contact_form')

      // フォームデータの送信（実際の実装では適切なエンドポイントに送信）
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        // フォームをリセット
        setFormData({
          name: '',
          email: '',
          phone: '',
          babyAge: '',
          lessonType: '',
          preferredDate: '',
          message: '',
          privacyConsent: false
        })
        
        // 成功追跡
        analytics.trackEvent('form_submit_success', {
          event_category: 'engagement',
          form_type: 'contact_form',
          lesson_type: formData.lessonType
        })
      } else {
        throw new Error('送信に失敗しました')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      
      // エラー追跡
      analytics.trackEvent('form_submit_error', {
        event_category: 'error',
        form_type: 'contact_form',
        error_message: error instanceof Error ? error.message : 'Unknown error'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // 入力値変更処理
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))

    // エラーをクリア
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  return (
    <div className="hugtouch-card p-6 sm:p-8 max-w-2xl mx-auto">
      <div className="text-center mb-6 sm:mb-8">
        <div className="text-3xl sm:text-4xl mb-4">📝</div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
          お問い合わせ・ご相談
        </h2>
        <p className="text-gray-600">
          お気軽にお問い合わせください。24時間以内にご返信いたします。
        </p>
      </div>

      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center">
            <div className="text-green-500 text-xl mr-3">✅</div>
            <div>
              <h3 className="text-green-800 font-semibold">送信完了</h3>
              <p className="text-green-700 text-sm">
                お問い合わせありがとうございます。24時間以内にご返信いたします。
              </p>
            </div>
          </div>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex items-center">
            <div className="text-red-500 text-xl mr-3">❌</div>
            <div>
              <h3 className="text-red-800 font-semibold">送信エラー</h3>
              <p className="text-red-700 text-sm">
                申し訳ございません。送信に失敗しました。しばらく時間をおいて再度お試しください。
              </p>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} data-form-type="contact_form" className="space-y-6">
        {/* お名前 */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            お名前 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 hugtouch-tap-target ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="田中 花子"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        {/* メールアドレス */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            メールアドレス <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 hugtouch-tap-target ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="hanako@example.com"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        {/* 電話番号 */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            電話番号 <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 hugtouch-tap-target ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="090-1234-5678"
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>

        {/* 赤ちゃんの月齢 */}
        <div>
          <label htmlFor="babyAge" className="block text-sm font-medium text-gray-700 mb-2">
            赤ちゃんの月齢
          </label>
          <select
            id="babyAge"
            name="babyAge"
            value={formData.babyAge}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 hugtouch-tap-target"
          >
            {BABY_AGE_OPTIONS.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* ご希望のレッスン */}
        <div>
          <label htmlFor="lessonType" className="block text-sm font-medium text-gray-700 mb-2">
            ご希望のレッスン <span className="text-red-500">*</span>
          </label>
          <select
            id="lessonType"
            name="lessonType"
            value={formData.lessonType}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 hugtouch-tap-target ${
              errors.lessonType ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            {LESSON_TYPES.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.lessonType && <p className="text-red-500 text-sm mt-1">{errors.lessonType}</p>}
        </div>

        {/* ご希望日時 */}
        <div>
          <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">
            ご希望日時
          </label>
          <input
            type="text"
            id="preferredDate"
            name="preferredDate"
            value={formData.preferredDate}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 hugtouch-tap-target"
            placeholder="例：来週の火曜日午前中、○月○日10:30〜など"
          />
        </div>

        {/* メッセージ */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            ご質問・ご要望
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 hugtouch-tap-target"
            placeholder="ご質問やご要望がございましたらお聞かせください"
          />
        </div>

        {/* プライバシーポリシー同意 */}
        <div>
          <label className="flex items-start space-x-3">
            <input
              type="checkbox"
              name="privacyConsent"
              checked={formData.privacyConsent}
              onChange={handleChange}
              className="mt-1 hugtouch-tap-target"
            />
            <span className="text-sm text-gray-700">
              <span className="text-red-500">*</span> 
              <a href="/privacy" className="text-pink-600 hover:text-pink-800 underline">
                プライバシーポリシー
              </a>
              に同意します
            </span>
          </label>
          {errors.privacyConsent && <p className="text-red-500 text-sm mt-1">{errors.privacyConsent}</p>}
        </div>

        {/* 送信ボタン */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-colors duration-200 hugtouch-tap-target ${
            isSubmitting
              ? 'bg-gray-400 cursor-not-allowed'
              : 'hugtouch-btn hugtouch-btn-primary hover:scale-105'
          }`}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              送信中...
            </span>
          ) : (
            '送信する'
          )}
        </button>

        {/* 補足情報 */}
        <div className="text-center text-sm text-gray-600 pt-4 border-t">
          <p>📞 お急ぎの場合は直接お電話ください：xxx-xxxx-xxxx</p>
          <p>💬 LINEでもお気軽にお問い合わせいただけます</p>
        </div>
      </form>
    </div>
  )
}