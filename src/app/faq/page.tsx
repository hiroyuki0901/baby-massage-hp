import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'よくある質問 | はぐたっち - ベビーマッサージ教室',
  description: 'ベビーマッサージ教室「はぐたっち」へよくいただくご質問をまとめました。初めての方も安心してお越しください。',
  keywords: 'ベビーマッサージ,よくある質問,FAQ,清瀬,赤ちゃん,月齢,持ち物',
  openGraph: {
    title: 'よくある質問 | はぐたっち',
    description: 'ベビーマッサージ教室についてのよくある質問と回答。',
    url: 'https://hugtouch-sayu.com/faq',
  },
  alternates: {
    canonical: 'https://hugtouch-sayu.com/faq',
  },
}

const faqData = [
  {
    category: 'レッスンについて',
    items: [
      {
        question: '生後何ヶ月から参加できますか？',
        answer: '生後2ヶ月から参加いただけます。また、妹娠中の方も交流目的でレッスンに参加いただけます。'
      },
      {
        question: '男の子でも参加できますか？',
        answer: 'もちろんです！男の子・女の子問わず、すべての赤ちゃんを歓迎しています。'
      },
      {
        question: '上の子を連れていっても大丈夫ですか？',
        answer: 'はい、大歓迎です。おもちゃや絵本もご用意していますので、お姉ちゃん・お兄ちゃんも一緒に楽しめます。'
      },
      {
        question: 'パパも一緒に参加できますか？',
        answer: 'もちろんです！パパさんの参加も大歓迎です。ご家族みなさんでベビーマッサージを楽しんでください。'
      }
    ]
  },
  {
    category: '料金・予約について',
    items: [
      {
        question: '体験レッスンはありますか？',
        answer: 'はい、初回限定で2,500円で体験レッスンを受けていただけます。気軽にお試しください。'
      },
      {
        question: 'キャンセル料はかかりますか？',
        answer: '前日24時間以内のキャンセルはキャンセル料をいただいております。詳細はお問い合わせの際にご説明します。'
      },
      {
        question: '支払い方法は何がありますか？',
        answer: '現金、クレジットカード、PayPay、銀行振込に対応しています。事前決済も可能です。'
      }
    ]
  },
  {
    category: '教室・設備について',
    items: [
      {
        question: '駐車場はありますか？',
        answer: 'はい、無料駐車場を3台分ご用意しています。ベビーカーでのお越しも大歓迎です。'
      },
      {
        question: '授乳やおむつ替えはできますか？',
        answer: 'もちろんです。授乳・おむつ替えスペースをご用意しています。給湯器もご利用いただけます。'
      },
      {
        question: 'アクセス方法を教えてください',
        answer: '清瀬駅南口から徒步10分です。詳細な道順は予約時にご案内します。'
      }
    ]
  },
  {
    category: '安全・衛生について',
    items: [
      {
        question: 'コロナ等の感染対策はどうしていますか？',
        answer: '定期的な換気、アルコール消毒、少人数制でのレッスンを実施しています。体調不良の場合は無理せず休んでください。'
      },
      {
        question: 'オイルは安全なものですか？',
        answer: 'はい、赤ちゃんのお肌にやさしい植物性オイルを使用しています。アレルギーが心配な場合は事前にご相談ください。'
      }
    ]
  },
  {
    category: '資格取得について',
    items: [
      {
        question: '資格取得に必要な経験はありますか？',
        answer: '特別な経験は必要ありません。初心者の方でも丁寧に指導しますので、安心して始めていただけます。'
      },
      {
        question: '資格取得後のサポートはありますか？',
        answer: 'はい、教室開業のサポートや定期的なフォローアップを行っています。一人ではありません。'
      }
    ]
  }
]

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      <div className="container mx-auto px-4 py-8">
        {/* ヒーローセクション */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            よくある質問
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            はぐたっちへよくいただくご質問をまとめました
          </p>
          <div className="text-4xl mb-6">❓👶💬</div>
        </div>

        {/* FAQコンテンツ */}
        <div className="max-w-4xl mx-auto">
          {faqData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="bg-white rounded-lg shadow-lg">
                    <details className="group">
                      <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-50 rounded-lg transition duration-200">
                        <h3 className="text-lg font-semibold text-gray-800 pr-4">
                          Q. {item.question}
                        </h3>
                        <div className="flex-shrink-0">
                          <svg className="w-6 h-6 text-gray-400 group-open:rotate-45 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                        </div>
                      </summary>
                      <div className="px-6 pb-6">
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <p className="text-gray-700 leading-relaxed">
                            <span className="font-semibold text-blue-600">A. </span>
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </details>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* お問い合わせセクション */}
        <div className="text-center bg-gradient-to-r from-blue-100 to-green-100 rounded-2xl p-8 mt-12">
          <div className="text-4xl mb-4">📧</div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            こちらに答えがない場合は、お気軽にお問い合わせください
          </h3>
          <p className="text-gray-600 mb-6">
            何でもご相談ください。丁寧にお答えします。
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
            <button className="w-full md:w-auto bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition duration-300">
              LINE で相談する
            </button>
            <button className="w-full md:w-auto bg-white border-2 border-green-500 text-green-500 hover:bg-green-50 font-bold py-3 px-8 rounded-full transition duration-300">
              お問い合わせフォーム
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
