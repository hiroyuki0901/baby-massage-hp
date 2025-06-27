import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'おくるみタッチケア | はぐたっち - ベビーマッサージ教室',
  description: '妊娠中から生後3ヶ月まで参加できるおくるみタッチケア。新生児期から始められるやさしいタッチケアで親子の絆を深めます。',
}

const benefits = [
  {
    icon: '🤱',
    title: '新生児期から始められる',
    description: '生まれたばかりの赤ちゃんにもやさしく触れることができます'
  },
  {
    icon: '😴',
    title: '安眠効果',
    description: 'おくるみの安心感とタッチケアでぐっすり眠れるようになります'
  },
  {
    icon: '💕',
    title: '親子の絆が深まる',
    description: 'スキンシップを通じて愛着形成を促進します'
  },
  {
    icon: '🌱',
    title: '成長発達をサポート',
    description: '感覚統合や運動発達を優しく促します'
  },
  {
    icon: '😊',
    title: 'ママの心も安定',
    description: '赤ちゃんが落ち着くことでママの心も穏やかになります'
  },
  {
    icon: '👶',
    title: '泣き止み効果',
    description: '正しいおくるみとタッチで赤ちゃんが落ち着きます'
  }
]

const lessonFlow = [
  {
    step: 1,
    title: 'ウェルカムタイム',
    duration: '5分',
    content: '自己紹介とその日の赤ちゃんの様子をお聞きします'
  },
  {
    step: 2,
    title: 'おくるみの基本',
    duration: '10分',
    content: '正しいおくるみの巻き方をお人形で練習します'
  },
  {
    step: 3,
    title: 'タッチケア実践',
    duration: '20分',
    content: 'おくるみの上からできるやさしいタッチケア'
  },
  {
    step: 4,
    title: '質問・相談タイム',
    duration: '10分',
    content: '新生児期の不安や疑問をなんでもご相談ください'
  }
]

const ageGuide = [
  {
    period: '妊娠中',
    content: [
      'おくるみの準備と練習',
      '新生児期の心構え',
      '産後の生活リズムについて',
      'ママ同士の交流'
    ],
    note: 'お人形を使って練習します'
  },
  {
    period: '生後0-1ヶ月',
    content: [
      '基本のおくるみタッチ',
      '抱っこの仕方',
      '授乳後のタッチケア',
      '夜泣き対策'
    ],
    note: '赤ちゃんの様子を見ながら進めます'
  },
  {
    period: '生後2-3ヶ月',
    content: [
      'おくるみからの卒業準備',
      '首すわり前のタッチケア',
      '表情が豊かになる時期のコミュニケーション',
      '成長に合わせたタッチ'
    ],
    note: '発達段階に応じてアレンジします'
  }
]

export default function OkurumiCarePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50">
      {/* ヒーローセクション */}
      <section className="relative py-20 bg-gradient-to-r from-purple-100 to-pink-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              おくるみタッチケア
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              妊娠中〜生後3ヶ月まで<br />
              新生児期から始められるやさしいタッチケア
            </p>
            <div className="text-6xl mb-8">🤱✨</div>
            <div className="bg-white rounded-2xl p-6 shadow-lg inline-block">
              <div className="flex items-center justify-center space-x-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">3,000円</div>
                  <div className="text-sm text-gray-600">45分</div>
                </div>
                <div className="text-gray-300">|</div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-gray-700">妊娠中〜生後3ヶ月</div>
                  <div className="text-sm text-gray-600">対象年齢</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* おくるみタッチケアとは */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
              おくるみタッチケアとは
            </h2>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2">
                  <img 
                    src="/lesson-okurumicare.jpg" 
                    alt="おくるみタッチケアの様子"
                    className="w-full h-64 object-cover rounded-xl"
                  />
                </div>
                <div className="md:w-1/2">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    おくるみタッチケアは、新生児期の赤ちゃんに特化したやさしいタッチケアです。
                    おくるみで包まれた安心感の中で、ママの温かい手で触れることで
                    赤ちゃんの心身の発達を促進します。
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    妊娠中から参加いただくことで、出産後すぐに実践できる技術を身につけられます。
                    新生児期特有の不安や疑問にもお答えし、ママの心も支えます。
                  </p>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">こんな方におすすめ</h4>
                    <ul className="text-sm text-purple-700 space-y-1">
                      <li>• 初めての出産で不安な方</li>
                      <li>• 新生児期の関わり方を知りたい方</li>
                      <li>• 夜泣きや寝つきが悪くてお困りの方</li>
                      <li>• 産後すぐから親子の絆を深めたい方</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 効果・メリット */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            期待できる効果
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition duration-300">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* レッスンの流れ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            レッスンの流れ（45分）
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {lessonFlow.map((flow, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">
                      {flow.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-800">{flow.title}</h3>
                        <span className="bg-purple-100 text-purple-700 text-sm px-3 py-1 rounded-full">
                          {flow.duration}
                        </span>
                      </div>
                      <p className="text-gray-600">{flow.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 月齢別ガイド */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            月齢別レッスン内容
          </h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
            {ageGuide.map((guide, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-center text-purple-600 mb-4">
                  {guide.period}
                </h3>
                <ul className="space-y-3 mb-4">
                  {guide.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="text-purple-500 mr-2 mt-1">✓</span>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <p className="text-xs text-purple-700">
                    <span className="font-semibold">Note:</span> {guide.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* お持ちいただくもの */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
              お持ちいただくもの
            </h2>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">必須アイテム</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-3">✓</span>
                      <span className="text-gray-700">おくるみ（モスリンガーゼ推奨）</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-3">✓</span>
                      <span className="text-gray-700">バスタオル（敷物用）</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-3">✓</span>
                      <span className="text-gray-700">おむつ・着替え</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-3">✓</span>
                      <span className="text-gray-700">ミルク・哺乳瓶（必要な場合）</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">あると便利</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="text-blue-500 mr-3">○</span>
                      <span className="text-gray-700">お気に入りのおもちゃ</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-500 mr-3">○</span>
                      <span className="text-gray-700">ママの飲み物</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-500 mr-3">○</span>
                      <span className="text-gray-700">筆記用具（メモ用）</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-500 mr-3">○</span>
                      <span className="text-gray-700">カメラ（記録用）</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <span className="font-semibold">📝 Note:</span> 
                  おくるみをお持ちでない場合は、教室で購入もできます（2,500円〜）。
                  妊娠中の方にはお人形をお貸しします。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 料金・予約 */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
              料金・ご予約
            </h2>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-8">
                <div className="bg-purple-50 inline-block px-8 py-6 rounded-2xl">
                  <div className="text-4xl font-bold text-purple-600 mb-2">3,000円</div>
                  <div className="text-gray-600">45分／1回</div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">開催日時</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-700">火曜日</span>
                      <span className="text-gray-600">10:30-11:15</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">金曜日</span>
                      <span className="text-gray-600">10:30-11:15</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    ※ 月2-3回開催（詳細はLINEでご案内）
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">お支払い方法</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="text-purple-500 mr-2">•</span>
                      <span className="text-gray-700">現金</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-purple-500 mr-2">•</span>
                      <span className="text-gray-700">クレジットカード</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-purple-500 mr-2">•</span>
                      <span className="text-gray-700">PayPay</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-purple-500 mr-2">•</span>
                      <span className="text-gray-700">銀行振込</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
                  <button className="w-full md:w-auto bg-purple-500 hover:bg-purple-600 text-white font-bold py-4 px-8 rounded-full transition duration-300 shadow-lg text-lg">
                    今すぐ予約する
                  </button>
                  <button className="w-full md:w-auto bg-white border-2 border-purple-500 text-purple-500 hover:bg-purple-50 font-bold py-4 px-8 rounded-full transition duration-300 shadow-lg text-lg">
                    LINE で相談する
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* よくある質問 */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
              よくある質問
            </h2>
            <div className="space-y-4">
              <div className="bg-white rounded-lg shadow-lg">
                <details className="group">
                  <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-50 rounded-lg transition duration-200">
                    <h3 className="text-lg font-semibold text-gray-800">
                      妊娠中でも参加できますか？
                    </h3>
                    <svg className="w-6 h-6 text-gray-400 group-open:rotate-45 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="text-gray-700">
                        はい、妊娠安定期（16週〜）から参加いただけます。お人形を使って練習し、
                        出産後すぐに実践できる技術を身につけられます。
                      </p>
                    </div>
                  </div>
                </details>
              </div>

              <div className="bg-white rounded-lg shadow-lg">
                <details className="group">
                  <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-50 rounded-lg transition duration-200">
                    <h3 className="text-lg font-semibold text-gray-800">
                      新生児期を過ぎても効果はありますか？
                    </h3>
                    <svg className="w-6 h-6 text-gray-400 group-open:rotate-45 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="text-gray-700">
                        生後4ヶ月以降の赤ちゃんには、通常のベビーマッサージをおすすめします。
                        月齢に合わせた最適なタッチケアをご提案させていただきます。
                      </p>
                    </div>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}