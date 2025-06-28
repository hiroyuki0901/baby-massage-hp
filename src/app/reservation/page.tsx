import { Metadata } from 'next'
import ReservationCalendar, { AvailableTimeSlots } from '@/components/ReservationCalendar'
import ReservationButton from '@/components/ReservationButton'

export const metadata: Metadata = {
  title: '予約・お申し込み | はぐたっち - ベビーマッサージ教室',
  description: 'ベビーマッサージ教室「はぐたっち」の予約・お申し込みページ。カレンダーから空いている日程をお選びいただけます。',
  keywords: 'ベビーマッサージ,予約,申し込み,カレンダー,清瀬,体験レッスン',
  openGraph: {
    title: '予約・お申し込み | はぐたっち',
    description: 'ベビーマッサージ教室の予約・お申し込み。カレンダーから日程選択可能。清瀬駅徒歩1分。',
    url: 'https://hugtouch-sayu.com/reservation',
    type: 'website',
    images: [{
      url: '/hero-baby-massage.jpg',
      width: 1200,
      height: 630,
      alt: '予約・お申し込み - はぐたっち ベビーマッサージ教室',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '予約・お申し込み | はぐたっち',
    description: 'ベビーマッサージ教室の予約・お申し込み。カレンダーから日程選択可能。清瀬駅徒歩1分。',
    images: ['/hero-baby-massage.jpg'],
  },
  alternates: {
    canonical: 'https://hugtouch-sayu.com/reservation',
  },
}

const lessonTypes = [
  {
    id: 'trial',
    title: '体験レッスン',
    price: '1,500円',
    duration: '60分',
    description: '初回限定のお得な体験レッスン',
    color: 'pink',
    popular: true
  },
  {
    id: 'basic',
    title: 'ベーシック3回コース',
    price: '7,500円',
    duration: '60分 × 3回',
    description: '全身マッサージを習得する人気コース',
    color: 'green',
    popular: false
  },
  {
    id: 'private',
    title: 'プライベートレッスン',
    price: '4,000円',
    duration: '75分',
    description: '個別対応、兄弟同席OK',
    color: 'purple',
    popular: false
  },
  {
    id: 'okurumicare',
    title: 'おくるみタッチケア',
    price: '3,000円',
    duration: '45分',
    description: '新生児期から始められる',
    color: 'blue',
    popular: false
  },
  {
    id: 'skincare',
    title: 'ベビースキンケア',
    price: '3,000円',
    duration: '45分',
    description: 'デリケートな肌を守る方法',
    color: 'orange',
    popular: false
  }
]

function getColorClasses(color: string) {
  const colors = {
    pink: 'border-pink-200 bg-pink-50',
    blue: 'border-blue-200 bg-blue-50',
    green: 'border-green-200 bg-green-50',
    purple: 'border-purple-200 bg-purple-50',
    orange: 'border-orange-200 bg-orange-50'
  }
  return colors[color as keyof typeof colors] || colors.pink
}

export default function ReservationPage() {
  return (
    <div className="min-h-screen hugtouch-bg-soft">
      <div className="container mx-auto px-4 py-8">
        {/* ヒーローセクション */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            予約・お申し込み
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            お好きなレッスンと日程をお選びください
          </p>
          <div className="text-4xl mb-6">📅✨</div>
        </div>

        {/* レッスン選択セクション */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8">
            レッスンを選択
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {lessonTypes.map((lesson) => (
              <div key={lesson.id} className={`relative hugtouch-card p-6 ${getColorClasses(lesson.color)}`}>
                {lesson.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      人気No.1
                    </span>
                  </div>
                )}
                
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{lesson.title}</h3>
                  <p className="text-2xl font-bold text-gray-800 mb-2">{lesson.price}</p>
                  <p className="text-sm text-gray-600 mb-3">{lesson.duration}</p>
                  <p className="text-sm text-gray-700 mb-4">{lesson.description}</p>
                  
                  <ReservationButton 
                    lessonType={lesson.id as 'trial' | 'basic' | 'private' | 'okurumicare' | 'skincare'}
                    className="w-full hugtouch-btn hugtouch-btn-primary py-3 px-6 font-bold hugtouch-tap-target"
                  >
                    この日程で予約
                  </ReservationButton>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 予約カレンダーセクション */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8">
            予約カレンダー
          </h2>
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="lg:col-span-2">
              <ReservationCalendar />
            </div>
            <div>
              <AvailableTimeSlots />
            </div>
          </div>
        </section>

        {/* 予約の流れ */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8">
            予約の流れ
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center hugtouch-card p-6">
              <div className="text-4xl mb-4">1️⃣</div>
              <h3 className="font-bold text-gray-800 mb-2">レッスン選択</h3>
              <p className="text-sm text-gray-600">お好みのレッスンを選択</p>
            </div>
            <div className="text-center hugtouch-card p-6">
              <div className="text-4xl mb-4">2️⃣</div>
              <h3 className="font-bold text-gray-800 mb-2">日程選択</h3>
              <p className="text-sm text-gray-600">カレンダーから空き日程を選択</p>
            </div>
            <div className="text-center hugtouch-card p-6">
              <div className="text-4xl mb-4">3️⃣</div>
              <h3 className="font-bold text-gray-800 mb-2">お支払い</h3>
              <p className="text-sm text-gray-600">STORES予約で事前決済</p>
            </div>
            <div className="text-center hugtouch-card p-6">
              <div className="text-4xl mb-4">4️⃣</div>
              <h3 className="font-bold text-gray-800 mb-2">予約完了</h3>
              <p className="text-sm text-gray-600">当日お会いできるのを楽しみに♪</p>
            </div>
          </div>
        </section>

        {/* 注意事項 */}
        <section className="mb-12">
          <div className="hugtouch-card p-6 sm:p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
              📋 ご予約前にご確認ください
            </h3>
            <div className="space-y-4 text-gray-700">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-pink-600 mb-2">🎯 対象年齢</h4>
                  <ul className="text-sm space-y-1">
                    <li>• 生後2ヶ月～（首すわり前OK）</li>
                    <li>• 妊娠中の方も参加可能</li>
                    <li>• 上のお子様同伴OK</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-600 mb-2">🎒 お持ち物</h4>
                  <ul className="text-sm space-y-1">
                    <li>• バスタオル1枚</li>
                    <li>• いつものお出かけセット</li>
                    <li>• ※オイルは教室でご用意</li>
                  </ul>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-green-600 mb-2">🕒 キャンセル</h4>
                  <ul className="text-sm space-y-1">
                    <li>• 前日まで：無料</li>
                    <li>• 当日：キャンセル料あり</li>
                    <li>• 体調不良時はご連絡ください</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-600 mb-2">💳 お支払い</h4>
                  <ul className="text-sm space-y-1">
                    <li>• STORES予約（推奨）</li>
                    <li>• 現金・カード・PayPay</li>
                    <li>• 銀行振込も対応</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 最終CTA */}
        <div className="text-center hugtouch-bg-warm hugtouch-curved-xl p-8 sm:p-12 shadow-xl max-w-4xl mx-auto">
          <div className="text-4xl sm:text-5xl mb-6">🌟</div>
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
            まずは体験レッスンから始めませんか？
          </h3>
          <div className="hugtouch-price-highlight text-3xl sm:text-4xl font-bold text-pink-600 mb-6 hugtouch-cta-urgent">
            体験レッスン 1,500円
          </div>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <ReservationButton 
              lessonType="trial"
              className="hugtouch-btn hugtouch-btn-primary hugtouch-cta-urgent py-4 px-8 text-lg w-full sm:w-auto hugtouch-tap-target"
            >
              🚀 今すぐ体験予約
            </ReservationButton>
            <ReservationButton 
              lessonType="trial"
              className="hugtouch-btn bg-green-500 hover:bg-green-600 text-white py-4 px-8 text-lg w-full sm:w-auto hugtouch-tap-target"
            >
              💬 LINE で相談
            </ReservationButton>
          </div>
        </div>
      </div>
    </div>
  )
}