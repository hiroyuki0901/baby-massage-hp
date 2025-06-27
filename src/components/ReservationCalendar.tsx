'use client'

import { useEffect, useState } from 'react'

interface ReservationCalendarProps {
  storeId?: string
  className?: string
}

export default function ReservationCalendar({ 
  storeId = 'hugtouch-sayu', 
  className = '' 
}: ReservationCalendarProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // STORES予約のスクリプトを動的に読み込み
    const script = document.createElement('script')
    script.src = 'https://stores.jp/js/widget.js'
    script.async = true
    script.onload = () => {
      setIsLoaded(true)
      // STORESウィジェットの初期化（実際のAPI仕様に応じて調整）
      if ((window as any).STORESWidget) {
        (window as any).STORESWidget.init({
          storeId: storeId,
          containerId: 'stores-reservation-widget'
        })
      }
    }
    document.head.appendChild(script)

    return () => {
      // クリーンアップ
      const existingScript = document.querySelector('script[src="https://stores.jp/js/widget.js"]')
      if (existingScript) {
        document.head.removeChild(existingScript)
      }
    }
  }, [storeId])

  return (
    <div className={`hugtouch-card p-6 ${className}`}>
      <div className="text-center mb-6">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
          📅 予約カレンダー
        </h3>
        <p className="text-gray-600">
          空いている日程からお選びください
        </p>
      </div>

      {/* STORES予約ウィジェット埋め込みエリア */}
      <div id="stores-reservation-widget" className="min-h-[400px]">
        {!isLoaded && (
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-pink-500 mb-4"></div>
              <p className="text-gray-600">予約カレンダーを読み込み中...</p>
            </div>
          </div>
        )}
      </div>

      {/* STORES予約が利用できない場合の代替手段 */}
      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h4 className="font-bold text-blue-800 mb-2">📞 その他の予約方法</h4>
        <div className="space-y-2 text-sm text-blue-700">
          <p>• <strong>LINE公式アカウント:</strong> 24時間受付</p>
          <p>• <strong>電話:</strong> xxx-xxxx-xxxx（平日10:00-15:00）</p>
          <p>• <strong>メール:</strong> contact@hugtouch-sayu.com</p>
        </div>
      </div>
    </div>
  )
}

// 予約可能時間のスケジュール表示コンポーネント
export function AvailableTimeSlots() {
  const timeSlots = [
    { day: '月曜日', times: ['10:30-11:30', '13:30-14:30'] },
    { day: '火曜日', times: ['10:30-11:15', '13:30-14:30'] },
    { day: '水曜日', times: ['10:30-11:30', '13:30-14:15'] },
    { day: '木曜日', times: ['10:30-11:30', '13:30-14:30'] },
    { day: '金曜日', times: ['10:30-11:15', '13:30-14:30'] }
  ]

  return (
    <div className="hugtouch-card p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
        ⏰ 開講時間
      </h3>
      <div className="space-y-3">
        {timeSlots.map((slot, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="font-medium text-gray-700">{slot.day}</span>
            <div className="flex space-x-2">
              {slot.times.map((time, timeIndex) => (
                <span 
                  key={timeIndex}
                  className="px-2 py-1 bg-pink-100 text-pink-700 text-sm rounded"
                >
                  {time}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
        <p className="text-sm text-yellow-800">
          ※ スケジュールは変更になる場合があります。最新情報はLINEでお知らせします。
        </p>
      </div>
    </div>
  )
}