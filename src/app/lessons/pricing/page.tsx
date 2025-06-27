import { Metadata } from 'next'
import ReservationButton from '@/components/ReservationButton'

export const metadata: Metadata = {
  title: '料金・スケジュール | はぐたっち - ベビーマッサージ教室',
  description: 'ベビーマッサージ教室「はぐたっち」の各レッスン料金とスケジュールをご案内。体験レッスンや回数券など、お得なプランもあります。',
  keywords: 'ベビーマッサージ,料金,スケジュール,体験レッスン,清瀬,価格',
  openGraph: {
    title: '料金・スケジュール | はぐたっち',
    description: 'ベビーマッサージ教室の料金プランとスケジュール。体験レッスン1,500円から。',
    url: 'https://hugtouch-sayu.com/lessons/pricing',
    images: [
      {
        url: 'https://hugtouch-sayu.com/lesson-massage.jpg',
        width: 1200,
        height: 630,
        alt: 'ベビーマッサージレッスン料金',
      },
    ],
  },
  alternates: {
    canonical: 'https://hugtouch-sayu.com/lessons/pricing',
  },
}

const lessonPlans = [
  {
    title: '体験会',
    subtitle: '初回限定',
    price: '1,500円',
    duration: '60分',
    includes: [
      'オイルテスト',
      'お腹・足タッチ体験',
      'ティータイム',
      '悩み相談'
    ],
    color: 'pink',
    popular: false
  },
  {
    title: 'ベーシック3回',
    subtitle: '一番人気',
    price: '7,500円',
    duration: '60分 × 3回',
    includes: [
      '全身マッサージ習得',
      'おうちケアシート付き',
      'オイル付き',
      '毎回ティータイム'
    ],
    color: 'green',
    popular: true
  },
  {
    title: 'プライベート',
    subtitle: '兄弟同席OK',
    price: '4,000円',
    duration: '75分',
    includes: [
      '個別対応レッスン',
      '兄弟同席OK',
      '出張可能',
      'オイル付き'
    ],
    color: 'purple',
    popular: false
  }
]

const specialPrograms = [
  {
    title: 'おくるみタッチケア',
    price: '3,000円',
    duration: '45分',
    target: '妹娠中～生後3ヶ月',
    description: '新生児期から始められるやさしいタッチケア'
  },
  {
    title: 'ベビースキンケア',
    price: '3,000円',
    duration: '45分',
    target: '生後1ヶ月～',
    description: '赤ちゃんのデリケートなお肌を守る方法を学びます'
  }
]

const weeklySchedule = [
  {
    day: '月曜日',
    sessions: [
      { time: '10:30-11:30', lesson: 'ベビーマッサージ', available: true },
      { time: '13:30-14:30', lesson: 'ベビーマッサージ', available: true }
    ]
  },
  {
    day: '火曜日',
    sessions: [
      { time: '10:30-11:15', lesson: 'おくるみタッチケア', available: true },
      { time: '13:30-14:30', lesson: 'ベビーマッサージ', available: false }
    ]
  },
  {
    day: '水曜日',
    sessions: [
      { time: '10:30-11:30', lesson: 'ベビーマッサージ', available: true },
      { time: '13:30-14:15', lesson: 'ベビースキンケア', available: true }
    ]
  },
  {
    day: '木曜日',
    sessions: [
      { time: '10:30-11:30', lesson: 'ベビーマッサージ', available: true },
      { time: '13:30-14:30', lesson: 'ベビーマッサージ', available: true }
    ]
  },
  {
    day: '金曜日',
    sessions: [
      { time: '10:30-11:15', lesson: 'おくるみタッチケア', available: true },
      { time: '13:30-14:30', lesson: 'ベビーマッサージ', available: true }
    ]
  }
]

function getColorClasses(color: string) {
  const colors = {
    pink: 'border-pink-200 bg-pink-50',
    blue: 'border-blue-200 bg-blue-50',
    green: 'border-green-200 bg-green-50',
    purple: 'border-purple-200 bg-purple-50'
  }
  return colors[color as keyof typeof colors] || colors.pink
}

function getBadgeClasses(color: string) {
  const colors = {
    pink: 'bg-pink-500',
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    purple: 'bg-purple-500'
  }
  return colors[color as keyof typeof colors] || colors.pink
}

export default function PricingPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "ベビーマッサージレッスン",
    "description": "清瀬駅徒歩1分で開催するベビーマッサージ教室の料金プラン",
    "provider": {
      "@type": "LocalBusiness",
      "name": "はぐたっち",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "下清戸2-515-6 スタジオラビット",
        "addressLocality": "清瀬市",
        "addressRegion": "東京都",
        "postalCode": "204-0003",
        "addressCountry": "JP"
      }
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "体験レッスン",
        "description": "初回限定のベビーマッサージ体験レッスン（60分）",
        "price": "1500",
        "priceCurrency": "JPY",
        "availability": "https://schema.org/InStock",
        "validFrom": "2025-01-01",
        "category": "ベビーマッサージ"
      },
      {
        "@type": "Offer",
        "name": "ベーシック3回コース",
        "description": "全身マッサージを習得する3回コース（60分×3回）",
        "price": "7500",
        "priceCurrency": "JPY",
        "availability": "https://schema.org/InStock",
        "validFrom": "2025-01-01",
        "category": "ベビーマッサージ"
      },
      {
        "@type": "Offer",
        "name": "プライベートレッスン",
        "description": "個別対応レッスン、兄弟同席OK（75分）",
        "price": "4000",
        "priceCurrency": "JPY",
        "availability": "https://schema.org/InStock",
        "validFrom": "2025-01-01",
        "category": "ベビーマッサージ"
      }
    ],
    "areaServed": "東京都清瀬市"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-orange-50">
      <div className="container mx-auto px-4 py-8">
        {/* ヒーローセクション */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            料金・スケジュール
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            あなたにぴったりのプランをお選びください
          </p>
          <div className="text-4xl mb-6">📅💰✨</div>
        </div>

        {/* ベビーマッサージ料金 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">ベビーマッサージ料金</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {lessonPlans.map((plan, index) => (
              <div key={index} className={`relative bg-white border-2 rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300 ${getColorClasses(plan.color)}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      人気No.1
                    </span>
                  </div>
                )}
                
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{plan.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{plan.subtitle}</p>
                  
                  <div className="mb-4">
                    {plan.originalPrice && (
                      <p className="text-sm text-gray-500 line-through">{plan.originalPrice}</p>
                    )}
                    <p className={`text-3xl font-bold text-gray-800 ${plan.popular ? 'hugtouch-price-highlight hugtouch-cta-urgent' : ''}`}>{plan.price}</p>
                    <p className="text-sm text-gray-600">{plan.duration}</p>
                  </div>
                  
                  <ul className="text-left space-y-2 mb-6">
                    {plan.includes.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">✓</span>
                        <span className="text-sm text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <ReservationButton 
                    lessonType={plan.title === '体験会' ? 'trial' : plan.title === 'ベーシック3回' ? 'basic' : 'private'}
                    className={`w-full ${getBadgeClasses(plan.color)} hover:opacity-90 text-white font-bold py-3 px-6 rounded-full transition duration-300 hugtouch-tap-target ${plan.popular ? 'hugtouch-cta-urgent' : ''}`}
                  >
                    {plan.popular ? '人気！今すぐ予約' : '予約する'}
                  </ReservationButton>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 特別プログラム */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">特別プログラム</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {specialPrograms.map((program, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{program.title}</h3>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-orange-600">{program.price}</span>
                  <span className="text-sm text-gray-600">{program.duration}</span>
                </div>
                <p className="text-sm text-orange-600 font-semibold mb-2">対象: {program.target}</p>
                <p className="text-gray-700 mb-4">{program.description}</p>
                <ReservationButton 
                  lessonType={program.title === 'おくるみタッチケア' ? 'okurumicare' : 'skincare'}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full transition duration-300"
                >
                  予約する
                </ReservationButton>
              </div>
            ))}
          </div>
        </section>

        {/* スケジュール */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">今週のスケジュール</h2>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">曜日</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">時間</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">レッスン</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">状態</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {weeklySchedule.map((day, dayIndex) => (
                    day.sessions.map((session, sessionIndex) => (
                      <tr key={`${dayIndex}-${sessionIndex}`} className="hover:bg-gray-50">
                        {sessionIndex === 0 && (
                          <td rowSpan={day.sessions.length} className="px-6 py-4 text-sm font-medium text-gray-900 border-r">
                            {day.day}
                          </td>
                        )}
                        <td className="px-6 py-4 text-sm text-gray-700">{session.time}</td>
                        <td className="px-6 py-4 text-sm text-gray-700">{session.lesson}</td>
                        <td className="px-6 py-4">
                          {session.available ? (
                            <span className="inline-flex px-2 py-1 text-xs font-semibold bg-green-100 text-green-800 rounded-full">
                              空きあり
                            </span>
                          ) : (
                            <span className="inline-flex px-2 py-1 text-xs font-semibold bg-red-100 text-red-800 rounded-full">
                              満席
                            </span>
                          )}
                        </td>
                      </tr>
                    ))
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-center text-sm text-gray-600 mt-4">
            ※ スケジュールは変更になる場合があります。最新情報はLINEでお知らせします。
          </p>
        </section>

        {/* 教室の特徴 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">教室の特徴</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="text-3xl mb-4">👥</div>
              <h3 className="font-bold text-gray-800 mb-2">4組まで</h3>
              <p className="text-sm text-gray-600">少人数制で丁寧なレッスン</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="text-3xl mb-4">🏆</div>
              <h3 className="font-bold text-gray-800 mb-2">RTAメソッド</h3>
              <p className="text-sm text-gray-600">認定講師による確かな技術</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="text-3xl mb-4">🛡️</div>
              <h3 className="font-bold text-gray-800 mb-2">賠償保険加入</h3>
              <p className="text-sm text-gray-600">安心安全なレッスン環境</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="text-3xl mb-4">😊</div>
              <h3 className="font-bold text-gray-800 mb-2">ゆるふわ</h3>
              <p className="text-sm text-gray-600">泣いても授乳してもOK</p>
            </div>
          </div>
        </section>

        {/* 注意事項 */}
        <section className="mb-12">
          <div className="bg-blue-50 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-blue-800 mb-4">お申し込み・お支払いについて</h3>
            <ul className="space-y-2 text-sm text-blue-700">
              <li>• 公式LINEから「ベビマ希望」とメッセージしてください</li>
              <li>• 日程確定のご連絡をお送りします</li>
              <li>• 料金は現金、カード、PayPay、銀行振込に対応</li>
              <li>• 体調不良の場合は無理せずお休みください</li>
              <li>• 授乳・おむつ替えはいつでもどうぞ</li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center hugtouch-bg-warm hugtouch-curved-xl p-8 sm:p-12 shadow-xl">
          <div className="text-4xl sm:text-5xl mb-4 sm:mb-6">👋</div>
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">
            一緒に素敵な時間を過ごしませんか？
          </h3>
          <div className="hugtouch-price-highlight text-3xl sm:text-4xl font-bold text-orange-600 mb-4 sm:mb-6 hugtouch-cta-urgent">
            🎯 体験レッスン 1,500円
          </div>
          <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8">
            LINE友だち追加で<span className="font-bold text-orange-600">さらに特典あり</span>！
          </p>
          <div className="space-y-3 sm:space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
            <ReservationButton 
              lessonType="trial"
              className="hugtouch-btn hugtouch-btn-primary hugtouch-cta-urgent py-3 sm:py-4 px-6 sm:px-8 text-base sm:text-lg w-full md:w-auto hugtouch-tap-target"
            >
              🚀 今すぐ体験予約
            </ReservationButton>
            <ReservationButton 
              lessonType="trial"
              className="hugtouch-btn bg-green-500 hover:bg-green-600 text-white py-3 sm:py-4 px-6 sm:px-8 text-base sm:text-lg w-full md:w-auto hugtouch-tap-target"
            >
              💬 LINE で相談する
            </ReservationButton>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}
