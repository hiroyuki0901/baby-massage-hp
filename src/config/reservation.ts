// 予約システム設定ファイル
// 実際の運用時は環境変数(.env.local)に設定することを推奨

export const RESERVATION_CONFIG = {
  // STORES予約設定
  stores: {
    // 実際のSTORES店舗IDに置き換えてください
    storeId: 'hugtouch-sayu',
    baseUrl: 'https://hugtouch-sayu.stores.jp',
    
    // 各レッスンの商品URL
    products: {
      trial: '/items/trial-lesson',
      basic: '/items/basic-course-3sessions',
      private: '/items/private-lesson',
      okurumicare: '/items/okurumicare-touchcare',
      skincare: '/items/baby-skincare'
    }
  },

  // LINE公式アカウント設定
  line: {
    // 実際のLINE IDに置き換えてください
    officialId: 'YOUR_LINE_ID',
    url: 'https://lin.ee/YOUR_LINE_ID'
  },

  // 営業時間設定
  businessHours: {
    weekdays: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
    timeSlots: [
      { start: '10:30', end: '11:30' },
      { start: '13:30', end: '14:30' }
    ],
    specialTimeSlots: {
      tuesday: [
        { start: '10:30', end: '11:15', type: 'okurumicare' }
      ],
      friday: [
        { start: '10:30', end: '11:15', type: 'okurumicare' }
      ],
      wednesday: [
        { start: '13:30', end: '14:15', type: 'skincare' }
      ]
    }
  },

  // Google Analytics設定（イベント追跡用）
  analytics: {
    events: {
      reservationClick: 'reservation_click',
      lineClick: 'line_click',
      storesClick: 'stores_click'
    }
  },

  // 連絡先情報
  contact: {
    phone: 'xxx-xxxx-xxxx',
    email: 'contact@hugtouch-sayu.com',
    businessHours: '平日 10:00-15:00'
  }
}

// 予約URL生成ヘルパー関数
export function getReservationUrl(lessonType: keyof typeof RESERVATION_CONFIG.stores.products): string {
  return RESERVATION_CONFIG.stores.baseUrl + RESERVATION_CONFIG.stores.products[lessonType]
}

// LINE URL取得ヘルパー関数
export function getLineUrl(): string {
  return RESERVATION_CONFIG.line.url
}

// レッスンタイプの日本語名取得
export function getLessonName(lessonType: string): string {
  const names: Record<string, string> = {
    trial: '体験レッスン',
    basic: 'ベーシック3回コース',
    private: 'プライベートレッスン',
    okurumicare: 'おくるみタッチケア',
    skincare: 'ベビースキンケア'
  }
  return names[lessonType] || lessonType
}