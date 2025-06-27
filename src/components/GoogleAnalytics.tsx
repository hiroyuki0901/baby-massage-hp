'use client'

import Script from 'next/script'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

// Google Analytics設定
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX'

// Google Tag Manager設定
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-XXXXXXX'

// GA4の初期化とページビュー追跡
export function GoogleAnalytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_title: document.title,
        page_location: window.location.href,
      })
    }
  }, [pathname, searchParams])

  return (
    <>
      {/* Google Analytics 4 */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_title: document.title,
            page_location: window.location.href,
            // 拡張eコマース測定を有効化
            enhanced_ecommerce: true,
            // カスタムディメンション設定
            custom_map: {
              'custom_parameter_1': 'lesson_type',
              'custom_parameter_2': 'reservation_method'
            }
          });
          
          // ベビーマッサージ教室用のカスタムイベント設定
          gtag('event', 'page_view', {
            page_title: document.title,
            page_location: window.location.href,
            site_type: 'baby_massage_school'
          });
        `}
      </Script>
    </>
  )
}

// Google Tag Manager
export function GoogleTagManager() {
  return (
    <>
      {/* Google Tag Manager (Head) */}
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
        `}
      </Script>

      {/* Google Tag Manager (Body) - NoScript */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
    </>
  )
}

// カスタムイベント追跡用のヘルパー関数
export const trackEvent = (eventName: string, parameters: Record<string, any> = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      ...parameters,
      timestamp: new Date().toISOString(),
      user_agent: navigator.userAgent,
      page_location: window.location.href,
      page_title: document.title
    })
  }
}

// ベビーマッサージ教室用のカスタムイベント関数
export const analytics = {
  // 予約関連イベント
  reservationStart: (lessonType: string) => {
    trackEvent('reservation_start', {
      event_category: 'engagement',
      lesson_type: lessonType,
      value: 1
    })
  },

  reservationComplete: (lessonType: string, method: 'stores' | 'line', price: number) => {
    trackEvent('purchase', {
      event_category: 'ecommerce',
      transaction_id: `res_${Date.now()}`,
      value: price,
      currency: 'JPY',
      items: [{
        item_id: lessonType,
        item_name: getLessonName(lessonType),
        category: 'baby_massage_lesson',
        quantity: 1,
        price: price
      }],
      lesson_type: lessonType,
      reservation_method: method
    })
  },

  // LINE関連イベント
  lineClick: (lessonType: string, location: string) => {
    trackEvent('line_click', {
      event_category: 'social_engagement',
      lesson_type: lessonType,
      click_location: location,
      value: 1
    })
  },

  // ページ滞在時間
  pageEngagement: (timeOnPage: number) => {
    trackEvent('page_engagement', {
      event_category: 'engagement',
      engagement_time_msec: timeOnPage,
      value: Math.round(timeOnPage / 1000) // 秒単位
    })
  },

  // フォーム送信
  formSubmit: (formType: string) => {
    trackEvent('form_submit', {
      event_category: 'engagement',
      form_type: formType,
      value: 1
    })
  },

  // 電話クリック
  phoneClick: () => {
    trackEvent('phone_click', {
      event_category: 'engagement',
      contact_method: 'phone',
      value: 1
    })
  },

  // メールクリック
  emailClick: () => {
    trackEvent('email_click', {
      event_category: 'engagement',
      contact_method: 'email',
      value: 1
    })
  },

  // ページスクロール
  scrollDepth: (percentage: number) => {
    trackEvent('scroll', {
      event_category: 'engagement',
      scroll_depth: percentage,
      value: percentage
    })
  }
}

// レッスン名を取得するヘルパー関数
function getLessonName(lessonType: string): string {
  const names: Record<string, string> = {
    trial: '体験レッスン',
    basic: 'ベーシック3回コース',
    private: 'プライベートレッスン',
    okurumicare: 'おくるみタッチケア',
    skincare: 'ベビースキンケア'
  }
  return names[lessonType] || lessonType
}

// TypeScript用のWindow拡張
declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
  }
}