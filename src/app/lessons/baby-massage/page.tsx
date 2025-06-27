import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'ベビーマッサージレッスン | はぐたっち - 清瀬駅徒歩1分',
  description: '赤ちゃんとママ・パパの絆を深めるベビーマッサージ。肌と肌のふれあいで愛情を伝え、健やかな成長をサポート。清瀬駅徒歩1分のスタジオで開催。',
  keywords: 'ベビーマッサージ,清瀬,親子,絆,体験レッスン,夜泣き改善,免疫力向上',
  openGraph: {
    title: 'ベビーマッサージレッスン | はぐたっち',
    description: '赤ちゃんとママ・パパの絆を深めるベビーマッサージ。肌と肌のふれあいで愛情を伝え、健やかな成長をサポート。',
    url: 'https://hugtouch-sayu.com/lessons/baby-massage',
    type: 'website',
    images: [{
      url: '/lesson-massage.jpg',
      width: 1200,
      height: 630,
      alt: 'ベビーマッサージレッスンの様子 - はぐたっち',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ベビーマッサージレッスン | はぐたっち',
    description: '赤ちゃんとママ・パパの絆を深めるベビーマッサージ。肌と肌のふれあいで愛情を伝え、健やかな成長をサポート。',
    images: ['/lesson-massage.jpg'],
  },
  alternates: {
    canonical: 'https://hugtouch-sayu.com/lessons/baby-massage',
  },
}

export default function BabyMassagePage() {
  return (
    <div className="min-h-screen bg-pink-50">
      <div className="container mx-auto px-4 py-8">
        {/* ヒーローセクション */}
        <div className="relative mb-12">
          <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-2xl">
            <Image
              src="/lesson-massage.jpg"
              alt="ベビーマッサージレッスンの様子"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-pink-500/60 flex flex-col justify-center items-center text-center p-8">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                ベビーマッサージ
              </h1>
              <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto drop-shadow">
                ママの手は魔法の手。やさしいタッチで赤ちゃんの心と体を育みます。
              </p>
            </div>
          </div>
        </div>

        {/* レッスン内容 */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-pink-600 mb-6">レッスン内容</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-3 text-gray-800">基本のマッサージ手技</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 足のマッサージ（血行促進・リラックス効果）</li>
                <li>• お腹のマッサージ（消化促進・便秘解消）</li>
                <li>• 胸のマッサージ（呼吸を深める）</li>
                <li>• 背中のマッサージ（筋肉の緊張をほぐす）</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-3 text-gray-800">期待できる効果</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 親子の愛着形成の促進</li>
                <li>• 赤ちゃんの免疫力向上</li>
                <li>• 夜泣きの軽減・質の良い睡眠</li>
                <li>• ママのリラックス効果</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 対象年齢・料金 */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-pink-600 mb-4">対象年齢</h3>
            <p className="text-gray-700">生後2ヶ月～1歳頃まで</p>
            <p className="text-sm text-gray-600 mt-2">
              ※ハイハイが活発になる前の赤ちゃんが対象です
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-pink-600 mb-4">レッスン料金</h3>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-pink-700">3,500円 / 回</p>
              <p className="text-sm text-gray-600">（オイル・ティータイム付き）</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-pink-100 rounded-lg p-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            体験レッスンで赤ちゃんとの特別な時間を始めませんか？
          </h3>
          <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
            <button className="w-full md:w-auto bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full transition duration-300">
              LINE で予約する
            </button>
            <button className="w-full md:w-auto bg-white border-2 border-pink-500 text-pink-500 hover:bg-pink-50 font-bold py-3 px-8 rounded-full transition duration-300">
              電話で問い合わせ
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
