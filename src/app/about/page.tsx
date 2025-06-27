import { Metadata } from 'next'
import Image from 'next/image'
import ReservationButton from '@/components/ReservationButton'

export const metadata: Metadata = {
  title: '講師紹介・教室の想い | はぐたっち - ベビーマッサージ教室',
  description: 'ベビーマッサージ教室「はぐたっち」の講師紹介と教室への想い。親子の絆を大切にし、一組一組に寄り添ったレッスンを心がけています。',
  keywords: 'ベビーマッサージ,講師紹介,RTA認定,長野小由奈,Sayu,清瀬,3児のママ,延べ300組',
  openGraph: {
    title: '講師紹介・教室の想い | はぐたっち',
    description: 'RTA認定講師 Sayu（長野 小由奈）の紹介。3児のママとして延べ300組の親子をサポート。',
    url: 'https://hugtouch-sayu.com/about',
    images: [
      {
        url: 'https://hugtouch-sayu.com/instructor.jpg',
        width: 1200,
        height: 630,
        alt: '講師 Sayu（長野 小由奈）',
      },
    ],
  },
  alternates: {
    canonical: 'https://hugtouch-sayu.com/about',
  },
}

export default function AboutPage() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "長野 小由奈",
    "alternateName": "Sayu",
    "jobTitle": "RTA認定ベビーマッサージ・タッチケア講師",
    "description": "3児のママとして、延べ300組の親子をサポートしてきたベビーマッサージ講師。清瀬駅徒歩1分のスタジオラビットでレッスンを開催。",
    "image": "https://hugtouch-sayu.com/instructor.jpg",
    "worksFor": {
      "@type": "LocalBusiness",
      "name": "はぐたっち",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "下清戸2-515-6 スタジオラビット",
        "addressLocality": "清瀬市",
        "addressRegion": "東京都",
        "postalCode": "204-0003",
        "addressCountry": "JP"
      }
    },
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "RTA認定ベビーマッサージ講師",
        "credentialCategory": "certification"
      },
      {
        "@type": "EducationalOccupationalCredential", 
        "name": "RTA認定タッチケア講師",
        "credentialCategory": "certification"
      }
    ],
    "knowsAbout": ["ベビーマッサージ", "タッチケア", "おくるみタッチケア", "ベビースキンケア", "育児サポート"],
    "memberOf": {
      "@type": "Organization",
      "name": "ロイヤルセラピスト協会（RTA）"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <div className="min-h-screen hugtouch-bg-soft">
      <div className="container mx-auto px-4 py-6 sm:py-8">
        {/* ヒーローセクション */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 hugtouch-mobile-text-2xl">
            講師紹介・教室の想い
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-3 sm:mb-4 px-2">
            すべてのママと赤ちゃんが笑顔で過ごせるように
          </p>
          <p className="text-base sm:text-lg text-pink-600 font-semibold px-2">
            ふれるたび "ほっ" と笑顔<br />
            清瀬駅徒歩１分「スタジオラビット」で開催
          </p>
        </div>

        {/* 講師プロフィール */}
        <div className="hugtouch-card p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 hugtouch-floating hugtouch-card-mobile">
          <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
            <div className="md:w-1/3 mb-4 sm:mb-6 md:mb-0">
              <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto rounded-full overflow-hidden shadow-lg">
                <Image
                  src="/instructor.jpg"
                  alt="講師プロフィール写真"
                  width={192}
                  height={192}
                  className="object-cover w-full h-full"
                  loading="lazy"
                  sizes="(max-width: 768px) 128px, (max-width: 1024px) 160px, 192px"
                />
              </div>
            </div>
            <div className="md:w-2/3 text-center md:text-left">
              <h2 className="text-xl sm:text-2xl font-bold text-pink-600 mb-3 sm:mb-4 hugtouch-mobile-text-xl">講師プロフィール</h2>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">Sayu（長野 小由奈）</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                RTA認定ベビーマッサージ・タッチケア講師 / 3児のママ
              </p>
              <div className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-700">
                <p>
                  ● <span className="font-semibold text-pink-600">延べ300組</span>の親子をサポートしてきました
                </p>
                <p>
                  ● 3児のママとして、子育ての喜びと悩みを共感できる講師です
                </p>
                <p>
                  ● モットー：<span className="font-semibold text-blue-600">「ママの"できた！"を増やすお手伝い」</span>
                </p>
                <p>
                  ● RTA（ロイヤルセラピスト協会）認定の確かな技術と知識
                </p>
                <p>
                  ● 少人数制でひとりひとりに寄り添う丁寧なレッスン
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 教室の想い */}
        <div className="hugtouch-card p-8 mb-8 hugtouch-floating">
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
          <div className="hugtouch-card p-6">
            <h3 className="text-xl font-bold text-green-600 mb-4">アクセス</h3>
            <div className="space-y-2 text-gray-700">
              <p>● 清瀬駅北口すぐ「スタジオラビット」</p>
              <p>● 住所：清瀬市下清戸2-515-6</p>
              <p>● 駐車場あり（無料）</p>
              <p>● ベビーカーでお越しOK</p>
            </div>
          </div>
          <div className="hugtouch-card p-6">
            <h3 className="text-xl font-bold text-orange-600 mb-4">教室の特徴</h3>
            <div className="space-y-2 text-gray-700">
              <p>● 4組までの少人数制</p>
              <p>● RTAメソッド・賠償保険加入</p>
              <p>● 泣いても授乳してもOKの"ゆるふわレッスン"</p>
              <p>● 衛生管理を徹底</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center hugtouch-bg-warm hugtouch-curved-lg p-6 sm:p-8">
          <div className="text-3xl sm:text-4xl mb-4">👋</div>
          <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">
            お気軽にお問い合わせください
          </h3>
          <div className="hugtouch-price-highlight text-2xl sm:text-3xl font-bold text-green-600 mb-4 sm:mb-6 hugtouch-cta-urgent">
            体験レッスン 1,500円
          </div>
          <div className="space-y-3 sm:space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
            <ReservationButton 
              lessonType="trial"
              className="hugtouch-btn bg-green-500 hover:bg-green-600 text-white py-3 px-6 sm:px-8 w-full md:w-auto hugtouch-tap-target"
            >
              💬 LINE で相談する
            </ReservationButton>
            <ReservationButton 
              lessonType="trial"
              className="hugtouch-btn hugtouch-btn-primary hugtouch-cta-urgent py-3 px-6 sm:px-8 w-full md:w-auto hugtouch-tap-target"
            >
              🚀 体験レッスンを予約
            </ReservationButton>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}
