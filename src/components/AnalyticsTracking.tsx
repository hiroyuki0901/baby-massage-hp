'use client'

import { useEffect } from 'react'
import { analytics } from './GoogleAnalytics'

// ページエンゲージメント追跡コンポーネント
export function AnalyticsTracking() {
  useEffect(() => {
    const startTime = Date.now()
    let maxScrollDepth = 0
    let scrollTracked = new Set<number>()

    // スクロール深度追跡
    const trackScrollDepth = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = Math.round((scrollTop / docHeight) * 100)
      
      if (scrollPercent > maxScrollDepth) {
        maxScrollDepth = scrollPercent
      }

      // 25%, 50%, 75%, 100%のマイルストーンで追跡
      const milestones = [25, 50, 75, 100]
      milestones.forEach(milestone => {
        if (scrollPercent >= milestone && !scrollTracked.has(milestone)) {
          analytics.scrollDepth(milestone)
          scrollTracked.add(milestone)
        }
      })
    }

    // 電話番号クリック追跡
    const trackPhoneClicks = () => {
      const phoneLinks = document.querySelectorAll('a[href^="tel:"]')
      phoneLinks.forEach(link => {
        link.addEventListener('click', () => {
          analytics.phoneClick()
        })
      })
    }

    // メールクリック追跡
    const trackEmailClicks = () => {
      const emailLinks = document.querySelectorAll('a[href^="mailto:"]')
      emailLinks.forEach(link => {
        link.addEventListener('click', () => {
          analytics.emailClick()
        })
      })
    }

    // フォーム送信追跡
    const trackFormSubmissions = () => {
      const forms = document.querySelectorAll('form')
      forms.forEach(form => {
        form.addEventListener('submit', () => {
          const formType = form.getAttribute('data-form-type') || 'unknown'
          analytics.formSubmit(formType)
        })
      })
    }

    // イベントリスナーの設定
    const handleScroll = () => {
      requestAnimationFrame(trackScrollDepth)
    }

    const handleBeforeUnload = () => {
      const timeOnPage = Date.now() - startTime
      if (timeOnPage > 5000) { // 5秒以上滞在した場合のみ追跡
        analytics.pageEngagement(timeOnPage)
      }
    }

    // イベントリスナーを追加
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('beforeunload', handleBeforeUnload)
    
    // 初期化時の追跡設定
    trackPhoneClicks()
    trackEmailClicks()
    trackFormSubmissions()

    // 10秒後に中間滞在時間を追跡
    const intermediateTimer = setTimeout(() => {
      analytics.pageEngagement(10000)
    }, 10000)

    // クリーンアップ
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('beforeunload', handleBeforeUnload)
      clearTimeout(intermediateTimer)
      
      // 最終的な滞在時間を送信
      const finalTimeOnPage = Date.now() - startTime
      if (finalTimeOnPage > 5000) {
        analytics.pageEngagement(finalTimeOnPage)
      }
    }
  }, [])

  return null // このコンポーネントは何もレンダリングしない
}

// 特定の要素のクリック追跡用HOC
export function withClickTracking<T extends React.ComponentProps<HTMLElement>>(
  Component: React.ComponentType<T>,
  eventName: string,
  eventParams?: Record<string, unknown>
) {
  return function ClickTrackedComponent(props: T) {
    const handleClick = (e: React.MouseEvent) => {
      analytics.trackEvent(eventName, eventParams)
      
      // 元のonClickがあれば実行
      if (props.onClick) {
        props.onClick(e)
      }
    }

    return <Component {...props} onClick={handleClick} />
  }
}

// 外部リンククリック追跡
export function useTrackExternalLinks() {
  useEffect(() => {
    const handleExternalLinkClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      if (target.tagName === 'A' && target.href) {
        const isExternal = target.hostname !== window.location.hostname
        if (isExternal) {
          analytics.trackEvent('external_link_click', {
            event_category: 'engagement',
            link_url: target.href,
            link_text: target.textContent || '',
            value: 1
          })
        }
      }
    }

    document.addEventListener('click', handleExternalLinkClick)
    return () => {
      document.removeEventListener('click', handleExternalLinkClick)
    }
  }, [])
}