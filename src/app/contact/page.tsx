import { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'お問い合わせ | はぐたっち - ベビーマッサージ教室',
  description: 'ベビーマッサージ教室「はぐたっち」へのお問い合わせページ。レッスンのご予約やご質問など、お気軽にお問い合わせください。',
  keywords: 'お問い合わせ,ベビーマッサージ,予約,相談,清瀬,質問',
  openGraph: {
    title: 'お問い合わせ | はぐたっち',
    description: 'ベビーマッサージ教室へのお問い合わせ・ご相談はこちらから。',
    url: 'https://hugtouch-sayu.com/contact',
  },
  alternates: {
    canonical: 'https://hugtouch-sayu.com/contact',
  },
}

export default function ContactPage() {
  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "お問い合わせ - はぐたっち",
    "description": "ベビーマッサージ教室「はぐたっち」へのお問い合わせページ",
    "url": "https://hugtouch-sayu.com/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "はぐたっち",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+81-xxx-xxxx-xxxx",
        "contactType": "customer service",
        "areaServed": "JP",
        "availableLanguage": "Japanese"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <div className="min-h-screen hugtouch-bg-soft">
        <div className="container mx-auto px-4 py-8">
          {/* ヒーローセクション */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              お問い合わせ
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-6">
              ご質問やご相談など、お気軽にお問い合わせください
            </p>
            <div className="text-4xl mb-6">💬📞✉️</div>
          </div>

          {/* お問い合わせ方法の選択 */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="hugtouch-card p-6 text-center">
              <div className="text-3xl mb-4">📝</div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">フォーム</h3>
              <p className="text-sm text-gray-600 mb-4">
                24時間受付<br />
                詳細なご相談に
              </p>
              <div className="text-pink-600 font-semibold">推奨</div>
            </div>
            
            <div className="hugtouch-card p-6 text-center">
              <div className="text-3xl mb-4">💬</div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">LINE</h3>
              <p className="text-sm text-gray-600 mb-4">
                チャット形式で<br />
                気軽にご質問
              </p>
              <a 
                href="https://lin.ee/YOUR_LINE_ID" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-green-600 font-semibold hover:text-green-800"
              >
                友だち追加
              </a>
            </div>
            
            <div className="hugtouch-card p-6 text-center">
              <div className="text-3xl mb-4">📞</div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">お電話</h3>
              <p className="text-sm text-gray-600 mb-4">
                平日 10:00-15:00<br />
                直接お話しできます
              </p>
              <a 
                href="tel:xxx-xxxx-xxxx" 
                className="text-blue-600 font-semibold hover:text-blue-800"
              >
                xxx-xxxx-xxxx
              </a>
            </div>
          </div>

          {/* お問い合わせフォーム */}
          <ContactForm />

          {/* よくある質問への誘導 */}
          <div className="mt-12 text-center">
            <div className="hugtouch-card p-6 sm:p-8 max-w-2xl mx-auto">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
                💡 まずはよくある質問をご確認ください
              </h3>
              <p className="text-gray-600 mb-6">
                多くのご質問にお答えしています。お問い合わせ前にぜひご覧ください。
              </p>
              <a
                href="/faq"
                className="hugtouch-btn hugtouch-btn-primary py-3 px-6 hugtouch-tap-target"
              >
                よくある質問を見る
              </a>
            </div>
          </div>

          {/* 教室情報 */}
          <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="hugtouch-card p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="text-2xl mr-2">📍</span>
                教室情報
              </h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>教室名：</strong>はぐたっち（Hug Touch Sayu）</p>
                <p><strong>講師：</strong>Sayu（長野 小由奈）</p>
                <p><strong>開催場所：</strong>清瀬駅北口すぐ「スタジオラビット」</p>
                <p><strong>住所：</strong>清瀬市下清戸2-515-6</p>
                <p><strong>駐車場：</strong>あり（無料）</p>
              </div>
            </div>

            <div className="hugtouch-card p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="text-2xl mr-2">⏰</span>
                営業時間
              </h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>レッスン時間：</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• 月〜金：10:30-11:30、13:30-14:30</li>
                  <li>• 土日祝：要相談</li>
                </ul>
                <p><strong>お問い合わせ受付：</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• フォーム：24時間</li>
                  <li>• LINE：24時間</li>
                  <li>• 電話：平日 10:00-15:00</li>
                </ul>
              </div>
            </div>
          </div>

          {/* プライバシーポリシーへの誘導 */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              お問い合わせの際は、
              <a href="/privacy" className="text-pink-600 hover:text-pink-800 underline">
                プライバシーポリシー
              </a>
              をご確認ください。
            </p>
          </div>
        </div>
      </div>
    </>
  )
}