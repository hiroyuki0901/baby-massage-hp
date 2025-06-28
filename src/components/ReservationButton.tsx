'use client'

import { useState } from 'react'
import { getReservationUrl, getLineUrl } from '@/config/reservation'
import { analytics } from '@/components/GoogleAnalytics'

interface ReservationButtonProps {
  lessonType: 'trial' | 'basic' | 'private' | 'okurumicare' | 'skincare'
  className?: string
  children: React.ReactNode
}

export default function ReservationButton({ lessonType, className = '', children }: ReservationButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleReservation = () => {
    // 予約プロセス開始を追跡
    analytics.reservationStart(lessonType)
    setIsModalOpen(true)
  }

  const handleSTORESReservation = () => {
    const reservationUrl = getReservationUrl(lessonType)
    
    // STORES予約クリックを追跡
    const lessonPrices = { trial: 1500, basic: 7500, private: 4000, okurumicare: 3000, skincare: 3000 }
    analytics.reservationComplete(lessonType, 'stores', lessonPrices[lessonType])
    
    window.open(reservationUrl, '_blank')
    setIsModalOpen(false)
  }

  const handleLINEReservation = () => {
    const lineUrl = getLineUrl()
    
    // LINEクリックを追跡
    analytics.lineClick(lessonType, 'reservation_modal')
    
    window.open(lineUrl, '_blank')
    setIsModalOpen(false)
  }

  return (
    <>
      <button
        onClick={handleReservation}
        className={`${className} transition-all duration-300 transform hover:scale-105 active:scale-95`}
      >
        {children}
      </button>

      {/* 予約方法選択モーダル */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-md w-full mx-4 hugtouch-floating">
            <div className="text-center mb-6">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
                予約方法を選択してください
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                お好みの方法でご予約いただけます
              </p>
            </div>

            <div className="space-y-4">
              {/* STORES予約 */}
              <button
                onClick={handleSTORESReservation}
                className="w-full hugtouch-btn hugtouch-btn-primary py-3 px-6 text-left flex items-center hugtouch-tap-target"
              >
                <div className="text-2xl mr-4">🛒</div>
                <div>
                  <div className="font-bold">STORES予約（推奨）</div>
                  <div className="text-sm opacity-90">事前決済で安心・確実</div>
                </div>
              </button>

              {/* LINE予約 */}
              <button
                onClick={handleLINEReservation}
                className="w-full hugtouch-btn bg-green-500 hover:bg-green-600 text-white py-3 px-6 text-left flex items-center hugtouch-tap-target"
              >
                <div className="text-2xl mr-4">💬</div>
                <div>
                  <div className="font-bold">LINE相談・予約</div>
                  <div className="text-sm opacity-90">質問しながら予約</div>
                </div>
              </button>
            </div>

            {/* 閉じるボタン */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="w-full mt-6 text-gray-500 hover:text-gray-700 py-2 hugtouch-tap-target"
            >
              キャンセル
            </button>
          </div>
        </div>
      )}
    </>
  )
}