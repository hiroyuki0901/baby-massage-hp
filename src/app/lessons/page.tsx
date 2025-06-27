import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'レッスン一覧 | はぐたっち - ベビーマッサージ教室',
  description: 'ベビーマッサージ、おくるみタッチケア、ベビースキンケアの各レッスンをご紹介。親子の絆を深める特別な時間をお過ごしください。',
}

export default function LessonsPage() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-4 text-gray-800">
          レッスン一覧
        </h1>
        <p className="text-center text-lg text-pink-600 font-semibold mb-8">
          妊娠期から産後まで、長くサポートする各種レッスン
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* ベビーマッサージ */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4 text-pink-600">ベビーマッサージ</h2>
            <p className="text-gray-600 mb-4">
              赤ちゃんとの肌と肌のふれあいで、深い絆を育みます。
            </p>
            <a 
              href="/lessons/baby-massage" 
              className="inline-block bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition"
            >
              詳細を見る
            </a>
          </div>

          {/* おくるみタッチケア */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4 text-blue-600">おくるみタッチケア</h2>
            <p className="text-gray-600 mb-4">
              新生児期から始められる、やさしいタッチケアです。
            </p>
            <a 
              href="/lessons/okurumicare" 
              className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              詳細を見る
            </a>
          </div>

          {/* ベビースキンケア */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4 text-green-600">ベビースキンケア</h2>
            <p className="text-gray-600 mb-4">
              赤ちゃんのデリケートなお肌を守るスキンケアを学びます。
            </p>
            <a 
              href="/lessons/baby-skincare" 
              className="inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
            >
              詳細を見る
            </a>
          </div>
        </div>

        {/* 料金・スケジュール */}
        <div className="text-center mt-12">
          <a 
            href="/lessons/pricing" 
            className="inline-block bg-yellow-500 text-white px-8 py-3 rounded-lg text-lg font-bold hover:bg-yellow-600 transition"
          >
            料金・スケジュールを確認
          </a>
        </div>
      </div>
    </div>
  )
}
