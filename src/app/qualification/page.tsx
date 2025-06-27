import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: '資格取得スクール | はぐたっち - インストラクター養成講座',
  description: 'ベビーマッサージインストラクター資格を取得して、あなたも教室を開いてみませんか？初心者から始められる丁寧な指導でプロへ。清瀬駅徒歩1分。',
  keywords: '資格取得,インストラクター,ベビーマッサージ,養成講座,清瀬,副業,在宅ワーク,起業',
  openGraph: {
    title: '資格取得スクール | はぐたっち',
    description: 'ベビーマッサージインストラクター資格を取得して、あなたも教室を開いてみませんか？初心者から始められる丁寧な指導でプロへ。',
    url: 'https://hugtouch-sayu.com/qualification',
    type: 'website',
    images: [{
      url: '/instructor.jpg',
      width: 1200,
      height: 630,
      alt: '資格取得スクール - はぐたっち インストラクター養成講座',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '資格取得スクール | はぐたっち',
    description: 'ベビーマッサージインストラクター資格を取得して、あなたも教室を開いてみませんか？初心者から始められる丁寧な指導でプロへ。',
    images: ['/instructor.jpg'],
  },
  alternates: {
    canonical: 'https://hugtouch-sayu.com/qualification',
  },
}

const coursePlan = {
  basic: {
    title: 'ベビーマッサージベーシック資格',
    duration: '全5回（約1ヶ月半）',
    price: '150,000円（税込）',
    includes: [
      'テキスト・教材一式',
      '実技練習用オイル',
      '修了証書',
      'アフターサポート付き'
    ],
    curriculum: [
      '第1回: ベビーマッサージの基本理論',
      '第2回: タッチケアの実技（下半身）',
      '第3回: タッチケアの実技（上半身）',
      '第4回: レッスンの進め方・指導法',
      '第5回: 実技試験・修了式'
    ]
  }
}

const benefits = [
  {
    icon: '👩‍🏫',
    title: '副業・在宅ワーク',
    description: '自宅でベビーマッサージ教室を開くことができます'
  },
  {
    icon: '🤝',
    title: 'コミュニティ形成',
    description: '地域のママたちとのつながりを深められます'
  },
  {
    icon: '✨',
    title: 'スキルアップ',
    description: '子育ての経験を活かした専門技術を習得'
  },
  {
    icon: '💼',
    title: '起業サポート',
    description: '教室開業から集客まで全面サポート'
  }
]

const graduates = [
  {
    name: 'A.Mさん',
    area: '東久留米市',
    period: '2024年4月修了',
    comment: '子育てをしながら自宅で教室を開くことができました。今では月に10組以上の親子さんに来ていただいています。'
  },
  {
    name: 'K.Sさん',
    area: '清瀬市',
    period: '2024年6月修了',
    comment: '先生のサポートが手厚く、初心者の私でも安心して始められました。今では地域のママたちの憧れの存在です。'
  },
  {
    name: 'R.Tさん',
    area: '新座市',
    period: '2024年8月修了',
    comment: '資格取得後、地域の子育てサポートセンターでもレッスンを担当しています。多くの親子さんと関われることができています。'
  }
]

export default function QualificationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-8">
        {/* ヒーローセクション */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            資格取得スクール
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            ベビーマッサージインストラクターとして新しい一歩を踏み出しませんか？
          </p>
          <div className="text-4xl mb-6">🎓👶✨</div>
        </div>

        {/* 資格のメリット */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">資格取得のメリット</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition duration-300">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* コース詳細 */}
        <section className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-center text-purple-600 mb-8">{coursePlan.basic.title}</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">コース概要</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-semibold">期間:</span>
                    <span>{coursePlan.basic.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">料金:</span>
                    <span className="text-purple-600 font-bold text-lg">{coursePlan.basic.price}</span>
                  </div>
                </div>
                
                <h4 className="text-lg font-bold text-gray-800 mt-6 mb-3">含まれるもの</h4>
                <ul className="space-y-2">
                  {coursePlan.basic.includes.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">カリキュラム</h3>
                <div className="space-y-3">
                  {coursePlan.basic.curriculum.map((lesson, index) => (
                    <div key={index} className="bg-purple-50 p-3 rounded-lg">
                      <p className="text-gray-700">{lesson}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center">
              <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-4 px-8 rounded-full transition duration-300 shadow-lg text-lg mr-4">
                無料説明会へ参加
              </button>
              <button className="bg-white border-2 border-purple-500 text-purple-500 hover:bg-purple-50 font-bold py-4 px-8 rounded-full transition duration-300 shadow-lg text-lg">
                資料請求
              </button>
            </div>
          </div>
        </section>

        {/* 卒業生の声 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">卒業生の声</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {graduates.map((graduate, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
                <div className="mb-4">
                  <div className="text-2xl mb-2">🎓</div>
                  <h3 className="font-bold text-gray-800">{graduate.name}</h3>
                  <p className="text-sm text-gray-600">{graduate.area} • {graduate.period}</p>
                </div>
                <p className="text-gray-700 text-sm italic leading-relaxed">
                  「{graduate.comment}」
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 受講フロー */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">受講フロー</h2>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">1</span>
                </div>
                <h3 className="font-bold mb-2">無料説明会</h3>
                <p className="text-sm text-gray-600">コース内容や疾問にお答えします</p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">2</span>
                </div>
                <h3 className="font-bold mb-2">お申し込み</h3>
                <p className="text-sm text-gray-600">受講料のお支払いで正式に開始</p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">3</span>
                </div>
                <h3 className="font-bold mb-2">全5回受講</h3>
                <p className="text-sm text-gray-600">理論から実技までしっかり学習</p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">4</span>
                </div>
                <h3 className="font-bold mb-2">資格取得</h3>
                <p className="text-sm text-gray-600">修了証書とアフターサポート</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-purple-200 to-pink-200 rounded-3xl p-12">
          <div className="text-5xl mb-6">🎆</div>
          <h3 className="text-3xl font-bold text-gray-800 mb-6">
            あなたもベビーマッサージのプロとして活動しませんか？
          </h3>
          <p className="text-lg text-gray-700 mb-8">
            初心者でも安心の手厚いサポートでプロのインストラクターへ
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
            <button className="w-full md:w-auto bg-purple-500 hover:bg-purple-600 text-white font-bold py-4 px-8 rounded-full transition duration-300 shadow-lg text-lg">
              無料説明会に参加する
            </button>
            <button className="w-full md:w-auto bg-white border-2 border-purple-500 text-purple-500 hover:bg-purple-50 font-bold py-4 px-8 rounded-full transition duration-300 shadow-lg text-lg">
              LINE で相談する
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
