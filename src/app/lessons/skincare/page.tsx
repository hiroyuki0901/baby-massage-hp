import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ベビースキンケア | はぐたっち - ベビーマッサージ教室',
  description: '生後1ヶ月から始められるベビースキンケア。赤ちゃんのデリケートなお肌を守る正しい方法を学びませんか？',
}

const benefits = [
  {
    icon: '🌿',
    title: 'お肌トラブル予防',
    description: '正しいケアでアトピーや湿疹などのトラブルを予防します'
  },
  {
    icon: '☀️',
    title: '季節に応じたケア',
    description: '夏の紫外線、冬の乾燥など季節に合わせたケア方法'
  },
  {
    icon: '🧴',
    title: '安全な製品選び',
    description: '赤ちゃんに安全なスキンケア製品の選び方がわかります'
  },
  {
    icon: '👶',
    title: 'デリケートゾーンケア',
    description: 'おむつかぶれ予防や清潔なケア方法を学べます'
  },
  {
    icon: '💕',
    title: 'スキンシップ',
    description: 'ケアを通じて赤ちゃんとのコミュニケーションが深まります'
  },
  {
    icon: '📚',
    title: '正しい知識習得',
    description: '間違った情報に惑わされない正しいケア知識が身につきます'
  }
]

const lessonFlow = [
  {
    step: 1,
    title: 'お肌チェック',
    duration: '5分',
    content: 'その日の赤ちゃんのお肌の状態を一緒にチェックします'
  },
  {
    step: 2,
    title: '基本のスキンケア理論',
    duration: '10分',
    content: '赤ちゃんのお肌の特徴と正しいケア方法の基本'
  },
  {
    step: 3,
    title: '実践ケア',
    duration: '20分',
    content: '洗浄・保湿・UVケアの実際の方法を体験'
  },
  {
    step: 4,
    title: '質問・製品相談',
    duration: '10分',
    content: 'お肌の悩みや製品選びについてなんでもご相談ください'
  }
]

const carePoints = [
  {
    category: '洗浄ケア',
    icon: '🧼',
    points: [
      '泡で優しく洗う（こすらない）',
      'ぬるま湯（38℃程度）で洗浄',
      '洗いすぎ注意（1日1回まで）',
      'すすぎは丁寧に行う'
    ]
  },
  {
    category: '保湿ケア',
    icon: '🧴',
    points: [
      'お風呂上がり5分以内に保湿',
      '全身をくまなく保湿',
      '季節に応じて保湿剤を選択',
      '1日2-3回の保湿が理想'
    ]
  },
  {
    category: 'UVケア',
    icon: '☀️',
    points: [
      '生後3ヶ月からUVクリーム使用可',
      'SPF15-30程度で十分',
      'お出かけ30分前に塗布',
      '帰宅後は優しく洗い流す'
    ]
  },
  {
    category: 'トラブル対応',
    icon: '🩹',
    points: [
      'おむつかぶれの予防と対処',
      '湿疹・あせもの見分け方',
      '受診のタイミング',
      '自宅でできる応急処置'
    ]
  }
]

const seasonalCare = [
  {
    season: '春',
    characteristics: '花粉・気温変化',
    care: [
      '花粉から肌を守る保湿',
      '外出後の洗浄を丁寧に',
      '急な気温変化に注意',
      'UVケア開始'
    ],
    products: 'セラミド配合保湿剤'
  },
  {
    season: '夏',
    characteristics: '汗・紫外線・エアコン',
    care: [
      'しっかりとしたUVケア',
      'あせも予防の通気性',
      'エアコンによる乾燥対策',
      '汗をこまめに拭き取る'
    ],
    products: 'さっぱりタイプ保湿剤'
  },
  {
    season: '秋',
    characteristics: '乾燥開始・寒暖差',
    care: [
      '保湿レベルをアップ',
      '寒暖差による肌荒れ注意',
      'UVケア継続',
      '暖房による乾燥対策'
    ],
    products: 'しっとりタイプ保湿剤'
  },
  {
    season: '冬',
    characteristics: '乾燥・暖房',
    care: [
      '徹底的な保湿ケア',
      '暖房による乾燥対策',
      '静電気対策',
      'お風呂の温度に注意'
    ],
    products: 'こってりタイプ保湿剤'
  }
]

export default function SkincarePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
      {/* ヒーローセクション */}
      <section className="relative py-20 bg-gradient-to-r from-green-100 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              ベビースキンケア
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              生後1ヶ月〜<br />
              赤ちゃんのデリケートなお肌を守る正しい方法を学びませんか？
            </p>
            <div className="text-6xl mb-8">🧴✨</div>
            <div className="bg-white rounded-2xl p-6 shadow-lg inline-block">
              <div className="flex items-center justify-center space-x-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">3,000円</div>
                  <div className="text-sm text-gray-600">45分</div>
                </div>
                <div className="text-gray-300">|</div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-gray-700">生後1ヶ月〜</div>
                  <div className="text-sm text-gray-600">対象年齢</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* ベビースキンケアとは */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
              ベビースキンケアとは
            </h2>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2">
                  <img 
                    src="/lesson-skincare.jpg" 
                    alt="ベビースキンケアの様子"
                    className="w-full h-64 object-cover rounded-xl"
                  />
                </div>
                <div className="md:w-1/2">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    赤ちゃんのお肌は大人の約半分の厚さしかなく、とてもデリケートです。
                    正しいスキンケアを早期から行うことで、アトピー性皮膚炎や
                    様々な肌トラブルを予防することができます。
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    ベビースキンケア講座では、洗浄・保湿・UVケアの基本から、
                    季節や肌質に応じたケア方法、安全な製品の選び方まで、
                    科学的根拠に基づいた正しい知識をお伝えします。
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">こんなお悩みはありませんか？</h4>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• いつから何をすればいいかわからない</li>
                      <li>• おむつかぶれを繰り返してしまう</li>
                      <li>• 製品がたくさんあって選べない</li>
                      <li>• 湿疹やあせもが心配</li>
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
            学べること・期待できる効果
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
                    <div className="flex-shrink-0 w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
                      {flow.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-800">{flow.title}</h3>
                        <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full">
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

        {/* スキンケアのポイント */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            スキンケアの基本ポイント
          </h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {carePoints.map((point, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-center mb-4">
                  <div className="text-3xl mb-2">{point.icon}</div>
                  <h3 className="text-lg font-bold text-gray-800">{point.category}</h3>
                </div>
                <ul className="space-y-2">
                  {point.points.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1 text-xs">●</span>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 季節別ケア */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            季節別スキンケア
          </h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {seasonalCare.map((season, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-center text-blue-600 mb-3">
                  {season.season}
                </h3>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2 text-sm">季節の特徴</h4>
                  <p className="text-xs text-gray-600 bg-gray-50 p-2 rounded">
                    {season.characteristics}
                  </p>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2 text-sm">ケアのポイント</h4>
                  <ul className="space-y-1">
                    {season.care.map((care, careIndex) => (
                      <li key={careIndex} className="flex items-start">
                        <span className="text-blue-500 mr-1 mt-1 text-xs">•</span>
                        <span className="text-gray-700 text-xs">{care}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-1 text-xs">おすすめ製品</h4>
                  <p className="text-xs text-blue-700">{season.products}</p>
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
                      <span className="text-gray-700">普段使っているスキンケア用品</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-3">✓</span>
                      <span className="text-gray-700">バスタオル</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-3">✓</span>
                      <span className="text-gray-700">おむつ・着替え</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-3">✓</span>
                      <span className="text-gray-700">母子手帳（心配なことがある場合）</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">あると便利</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="text-blue-500 mr-3">○</span>
                      <span className="text-gray-700">気になる製品（相談用）</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-500 mr-3">○</span>
                      <span className="text-gray-700">お肌の写真（記録用）</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-500 mr-3">○</span>
                      <span className="text-gray-700">筆記用具</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-500 mr-3">○</span>
                      <span className="text-gray-700">質問メモ</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <span className="font-semibold">📝 Note:</span> 
                  スキンケア用品をお持ちでない場合は、教室で体験用製品をご用意しています。
                  お肌の状態によっては、おすすめ製品もご案内できます。
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
                <div className="bg-green-50 inline-block px-8 py-6 rounded-2xl">
                  <div className="text-4xl font-bold text-green-600 mb-2">3,000円</div>
                  <div className="text-gray-600">45分／1回</div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">開催日時</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-700">水曜日</span>
                      <span className="text-gray-600">13:30-14:15</span>
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
                      <span className="text-green-500 mr-2">•</span>
                      <span className="text-gray-700">現金</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">•</span>
                      <span className="text-gray-700">クレジットカード</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">•</span>
                      <span className="text-gray-700">PayPay</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">•</span>
                      <span className="text-gray-700">銀行振込</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
                  <button className="w-full md:w-auto bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full transition duration-300 shadow-lg text-lg">
                    今すぐ予約する
                  </button>
                  <button className="w-full md:w-auto bg-white border-2 border-green-500 text-green-500 hover:bg-green-50 font-bold py-4 px-8 rounded-full transition duration-300 shadow-lg text-lg">
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
                      アレルギーがあっても参加できますか？
                    </h3>
                    <svg className="w-6 h-6 text-gray-400 group-open:rotate-45 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="text-gray-700">
                        はい、アレルギーをお持ちの赤ちゃんも参加いただけます。
                        事前にアレルギーの詳細をお教えいただければ、適切な製品選びをアドバイスいたします。
                      </p>
                    </div>
                  </div>
                </details>
              </div>

              <div className="bg-white rounded-lg shadow-lg">
                <details className="group">
                  <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-50 rounded-lg transition duration-200">
                    <h3 className="text-lg font-semibold text-gray-800">
                      どんな製品を使いますか？
                    </h3>
                    <svg className="w-6 h-6 text-gray-400 group-open:rotate-45 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="text-gray-700">
                        基本的にはご持参いただいた製品を使用します。
                        教室では無添加・低刺激の製品を体験用としてご用意しており、
                        赤ちゃんのお肌に合うかテストも可能です。
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