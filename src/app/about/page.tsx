import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: '講師紹介・教室の想い | はぐたっち - ベビーマッサージ教室',
  description: 'ベビーマッサージ教室「はぐたっち」の講師紹介と教室への想い。親子の絆を大切にし、一組一組に寄り添ったレッスンを心がけています。',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* ヒーローセクション */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            講師紹介・教室の想い
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            すべてのママと赤ちゃんが笑顔で過ごせるように
          </p>
        </div>

        {/* 講師プロフィール */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="md:flex md:items-center md:space-x-8">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1594824706885-f3e07626bb3c?w=300&h=300&fit=crop&crop=face"
                  alt="講師プロフィール写真"
                  width={192}
                  height={192}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold text-pink-600 mb-4">講師プロフィール</h2>
              <h3 className="text-xl font-bold text-gray-800 mb-2">田中 花子（仮名）</h3>
              <p className="text-gray-600 mb-4">
                ベビーマッサージインストラクター / 保育士資格保有
              </p>
              <div className="space-y-3 text-gray-700">
                <p>
                  ● 2人の子育てを経験し、自分自身もベビーマッサージに救われた一人
                </p>
                <p>
                  ● 清瀬市在住15年、地域のママたちとの繋がりを大切にしています
                </p>
                <p>
                  ● 「一人じゃないよ」を合言葉に、安心できる空間づくりを心がけています
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 教室の想い */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">教室の想い</h2>
          <div className="max-w-3xl mx-auto">
            <div className="text-gray-700 space-y-4 leading-relaxed">
              <p>
                「はぐたっち」は、赤ちゃんとママ・パパがハグ（抱きしめ）、タッチ（ふれあい）でつながる特別な場所です。
              </p>
              <p>
                初めての子育てで不安な気持ち、「これでいいのかな？」と悩む気持ち、私も同じでした。そんな時に出会ったベビーマッサージが、私と子どもたちの絆を深めてくれました。
              </p>
              <p>
                マッサージを通じて、赤ちゃんの「今」を大切にし、親子の時間をゆったりと楽しんでほしい。そして、同じ想いを持つママたちとの繋がりを通じて、子育ての喜びを分かち合えるコミュニティを作っていきたいと思っています。
              </p>
            </div>
          </div>
        </div>

        {/* 教室情報 */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-green-600 mb-4">アクセス</h3>
            <div className="space-y-2 text-gray-700">
              <p>● 清瀬駅南口徒步10分</p>
              <p>● 駐車場あり（無料）</p>
              <p>● ベビーカーでお越しOK</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-orange-600 mb-4">設備・サービス</h3>
            <div className="space-y-2 text-gray-700">
              <p>● 授乳・おむつ替えスペース</p>
              <p>● 給湯器・電子レンジ完備</p>
              <p>● ベビーベッド・おもちゃあり</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-pink-100 to-blue-100 rounded-lg p-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            お気軽にお問い合わせください
          </h3>
          <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
            <button className="w-full md:w-auto bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition duration-300">
              LINE で相談する
            </button>
            <button className="w-full md:w-auto bg-white border-2 border-green-500 text-green-500 hover:bg-green-50 font-bold py-3 px-8 rounded-full transition duration-300">
              体験レッスンを予約
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
