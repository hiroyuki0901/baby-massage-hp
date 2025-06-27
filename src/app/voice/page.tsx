import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'お客様の声 | はぐたっち - ベビーマッサージ教室',
  description: 'ベビーマッサージレッスンを受講されたママたちの実際の声をご紹介。親子の絆が深まった、赤ちゃんの笑顔が増えたなど、実体験をお聞かせください。',
}

const testimonials = [
  {
    id: 1,
    name: 'M.Kさん',
    babyAge: '4ヶ月',
    area: '清瀬市',
    comment: '初めての子育てで不安でしたが、マッサージを始めてから息子がよく笑うようになりました。私自身もリラックスできて、他のママさんたちとお話できるのも楽しみです。',
    tags: ['初めての子育て', 'リラックス', '友達づくり']
  },
  {
    id: 2,
    name: 'A.Tさん',
    babyAge: '2ヶ月',
    area: '新座市',
    comment: '夜泣きがひどくて困っていましたが、マッサージをするとぐっすり眠ってくれるように！こんなに効果があるなんて思いませんでした。先生もとても優しくて安心できます。',
    tags: ['夜泣き改善', '睡眠の質向上', '信頼できる先生']
  },
  {
    id: 3,
    name: 'R.Sさん',
    babyAge: '6ヶ月',
    area: '東久留米市',
    comment: '二人目で余裕がなかったのですが、マッサージの時間は上の子も一緒に楽しめて、家族みんなでリラックスできました。お姉ちゃんも「赤ちゃんが嬉しそう！」と言っています。',
    tags: ['二人目', 'きょうだいの参加', '家族の絆']
  },
  {
    id: 4,
    name: 'Y.Mさん',
    babyAge: '3ヶ月',
    area: '清瀬市',
    comment: '便秘がちで悔んでいたのですが、お腹のマッサージを教えていただいてから毎日出るように！本当に助かりました。家でも続けられるので嬉しいです。',
    tags: ['便秘改善', 'お家で続けられる', '実用的']
  },
  {
    id: 5,
    name: 'H.Nさん',
    babyAge: '5ヶ月',
    area: '新座市',
    comment: '産後うつで家にこもりがちでしたが、月一回のレッスンがすごく良い気分転換になりました。同じ悩みを持つママさんたちと話すことで、一人じゃないんだと実感できました。',
    tags: ['産後うつ', '気分転換', '一人じゃない']
  },
  {
    id: 6,
    name: 'K.Oさん',
    babyAge: '7ヶ月',
    area: '東久留米市',
    comment: 'パパも一緒に参加させていただきました。最初は恐る恐るでしたが、今では家でも積極的にマッサージしてくれるようになりました。夫婦で子育てを楽しめています。',
    tags: ['パパも参加', '夫婦で子育て', '積極的な参加']
  }
]

export default function VoicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        {/* ヒーローセクション */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            お客様の声
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            ベビーマッサージを体験されたママたちのリアルな声をお聞かせください
          </p>
        </div>

        {/* 統計情報 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-pink-600 mb-2">98%</div>
            <div className="text-gray-600">お客様満足度</div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">85%</div>
            <div className="text-gray-600">リピート率</div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">200+</div>
            <div className="text-gray-600">累計参加組数</div>
          </div>
        </div>

        {/* お客様の声一覧 */}
        <div className="grid gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex flex-col md:flex-row md:items-start md:space-x-6">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <div className="bg-pink-100 rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">👶</div>
                    <div className="font-bold text-gray-800">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">赤ちゃん: {testimonial.babyAge}</div>
                    <div className="text-sm text-gray-600">{testimonial.area}</div>
                  </div>
                </div>
                <div className="md:w-3/4">
                  <div className="mb-4">
                    <p className="text-gray-700 leading-relaxed italic">
                      「{testimonial.comment}」
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {testimonial.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="bg-pink-200 text-pink-800 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg p-8 mt-12">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            あなたも素敵なベビーマッサージ体験を始めてみませんか？
          </h3>
          <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
            <button className="w-full md:w-auto bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full transition duration-300">
              体験レッスンを予約
            </button>
            <button className="w-full md:w-auto bg-white border-2 border-pink-500 text-pink-500 hover:bg-pink-50 font-bold py-3 px-8 rounded-full transition duration-300">
              LINE で相談する
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
