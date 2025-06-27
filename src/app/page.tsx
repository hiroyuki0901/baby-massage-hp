import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-blue-50">
      <div className="space-y-12 pb-12">
        {/* メインビジュアルセクション */}
        <section className="relative text-center">
          <div className="relative h-96 md:h-[500px] w-full overflow-hidden">
            {/* 背景画像 */}
            <div className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=600&fit=crop&crop=center"
                alt="赤ちゃんとママの温かいふれあいの様子"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-pink-200/80 to-blue-200/80"></div>
            </div>
            
            {/* 背景装飾 */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-10 left-10 w-20 h-20 bg-white/30 rounded-full opacity-60"></div>
              <div className="absolute top-32 right-16 w-16 h-16 bg-white/20 rounded-full opacity-50"></div>
              <div className="absolute bottom-20 left-20 w-24 h-24 bg-white/25 rounded-full opacity-40"></div>
              <div className="absolute bottom-32 right-10 w-12 h-12 bg-white/30 rounded-full opacity-60"></div>
            </div>
            
            {/* メインコンテンツ */}
            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <div className="text-6xl mb-6">👶💕</div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
                ママの手は、魔法の手。
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow">
                ふれあいで育む、親子の深い絆。<br />
                <span className="text-yellow-200 font-semibold">はぐたっち</span> ベビーマッサージ教室
              </p>
              <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
                <button className="w-full md:w-auto bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 px-8 rounded-full transition duration-300 shadow-lg">
                  体験レッスンを予約する
                </button>
                <button className="w-full md:w-auto bg-white border-2 border-white text-pink-500 hover:bg-pink-50 font-bold py-4 px-8 rounded-full transition duration-300 shadow-lg">
                  LINE で相談する
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 教室についてセクション */}
        <section className="text-center px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-pink-600 mb-8">「はぐたっち」について</h2>
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                「はぐたっち」は、赤ちゃんとママ・パパのための特別な場所です。<br />
                肌と肌のふれあいを通じて、赤ちゃんの健やかな心と体の成長を促し、<br />
                ご家族の笑顔あふれる毎日をサポートします。
              </p>
              <div className="text-4xl mb-4">🤱👶✨</div>
            </div>
          </div>
        </section>

        {/* レッスン紹介セクション */}
        <section className="px-4 py-12 bg-gradient-to-r from-pink-50 to-blue-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">人気のレッスン</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                <div className="relative h-48">
                  <Image
                    src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=center"
                    alt="ベビーマッサージの様子"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-pink-600 mb-3">ベビーマッサージ</h3>
                  <p className="text-gray-600 mb-4">赤ちゃんとの絆を深める優しいマッサージ</p>
                  <a href="/lessons/baby-massage" className="text-pink-500 font-semibold hover:text-pink-700">詳細を見る →</a>
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                <div className="relative h-48">
                  <Image
                    src="https://images.unsplash.com/photo-1566004100631-35d015d6a491?w=400&h=300&fit=crop&crop=center"
                    alt="おくるみタッチケアの様子"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-blue-600 mb-3">おくるみタッチケア</h3>
                  <p className="text-gray-600 mb-4">新生児期から始められる優しいケア</p>
                  <a href="/lessons/okurumicare" className="text-blue-500 font-semibold hover:text-blue-700">詳細を見る →</a>
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                <div className="relative h-48">
                  <Image
                    src="https://images.unsplash.com/photo-1587393855524-087f83d95bc9?w=400&h=300&fit=crop&crop=center"
                    alt="ベビースキンケアの様子"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-green-600 mb-3">ベビースキンケア</h3>
                  <p className="text-gray-600 mb-4">デリケートな赤ちゃんの肌を守る方法</p>
                  <a href="/lessons/baby-skincare" className="text-green-500 font-semibold hover:text-green-700">詳細を見る →</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* お知らせセクション */}
        <section className="px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-orange-800 text-center mb-6">📢 お知らせ</h3>
              <ul className="space-y-4 max-w-2xl mx-auto">
                <li className="bg-white p-4 rounded-lg shadow">
                  <span className="font-bold text-orange-600">2025.07.01:</span> 
                  <span className="ml-2 text-gray-700">夏の特別クラスの予約受付を開始しました！</span>
                </li>
                <li className="bg-white p-4 rounded-lg shadow">
                  <span className="font-bold text-orange-600">2025.06.20:</span> 
                  <span className="ml-2 text-gray-700">ホームページをリニューアルしました。</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* お客様の声 */}
        <section className="px-4 py-12 bg-gradient-to-r from-purple-50 to-pink-50">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">お客様の声</h2>
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <div className="text-4xl mb-4">💬</div>
              <p className="text-lg text-gray-700 italic mb-4">
                "初めての子育てで不安でしたが、マッサージを始めてから息子がよく笑うようになりました。
                私自身もリラックスできて、他のママさんたちとお話できるのも楽しみです。"
              </p>
              <p className="text-sm text-gray-500">M.Kさん（4ヶ月・清瀬市）</p>
            </div>
            <a href="/voice" className="inline-block bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-8 rounded-full transition duration-300">
              もっと見る
            </a>
          </div>
        </section>

        {/* 最終CTA */}
        <section className="px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-pink-200 to-blue-200 p-12 rounded-3xl shadow-xl">
              <div className="text-5xl mb-6">🌟</div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                体験レッスンで特別な時間を始めませんか？
              </h3>
              <p className="text-lg text-gray-700 mb-8">
                初回限定で特別価格にてご体験いただけます
              </p>
              <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
                <button className="w-full md:w-auto bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 px-8 rounded-full transition duration-300 shadow-lg text-lg">
                  体験レッスンを予約する
                </button>
                <button className="w-full md:w-auto bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full transition duration-300 shadow-lg text-lg">
                  LINE で相談する
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
