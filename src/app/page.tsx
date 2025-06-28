import Image from "next/image";
import { Metadata } from 'next';
import ReservationButton from '@/components/ReservationButton';

export const metadata: Metadata = {
  title: 'はぐたっち - 清瀬駅徒歩1分のベビーマッサージ教室 | 体験レッスン1,500円',
  description: '清瀬駅北口徒歩1分「スタジオラビット」で開催するベビーマッサージ教室。RTA認定講師による丁寧なレッスン。体験レッスン1,500円で開催中。妊娠期から通える安心の教室です。',
  keywords: 'ベビーマッサージ,清瀬,体験レッスン,RTA認定,妊娠期,産後,親子,ふれあい,スタジオラビット',
  authors: [{ name: 'Sayu（長野 小由奈）', url: 'https://hugtouch-sayu.com' }],
  creator: 'Sayu（長野 小由奈）',
  publisher: 'はぐたっち',
  robots: 'index, follow',
  openGraph: {
    title: 'はぐたっち - 清瀬駅徒歩1分のベビーマッサージ教室',
    description: '清瀬駅北口徒歩1分「スタジオラビット」で開催するベビーマッサージ教室。RTA認定講師による丁寧なレッスン。',
    url: 'https://hugtouch-sayu.com',
    siteName: 'はぐたっち',
    images: [
      {
        url: 'https://hugtouch-sayu.com/hero-baby-massage.jpg',
        width: 1200,
        height: 630,
        alt: 'ベビーマッサージ教室はぐたっち',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'はぐたっち - 清瀬駅徒歩1分のベビーマッサージ教室',
    description: '清瀬駅北口徒歩1分「スタジオラビット」で開催するベビーマッサージ教室。',
    images: ['https://hugtouch-sayu.com/hero-baby-massage.jpg'],
  },
  alternates: {
    canonical: 'https://hugtouch-sayu.com',
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function Home() {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://hugtouch-sayu.com",
    "name": "はぐたっち（Hug Touch Sayu）",
    "alternateName": "ベビーマッサージ教室はぐたっち",
    "description": "清瀬駅北口徒歩1分で開催するベビーマッサージ教室。RTA認定講師による丁寧なレッスン。",
    "url": "https://hugtouch-sayu.com",
    "telephone": "+81-xxx-xxxx-xxxx",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "下清戸2-515-6 スタジオラビット",
      "addressLocality": "清瀬市",
      "addressRegion": "東京都",
      "postalCode": "204-0003",
      "addressCountry": "JP"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 35.78373,
      "longitude": 139.5264
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "10:00",
        "closes": "15:00"
      }
    ],
    "serviceArea": {
      "@type": "Place",
      "name": "清瀬市、東久留米市、小平市、西東京市"
    },
    "priceRange": "¥1500-¥7500",
    "image": [
      "https://hugtouch-sayu.com/hero-baby-massage.jpg",
      "https://hugtouch-sayu.com/instructor.jpg"
    ],
    "founder": {
      "@type": "Person",
      "name": "長野 小由奈",
      "alternateName": "Sayu",
      "jobTitle": "RTA認定ベビーマッサージ・タッチケア講師",
      "description": "3児のママとして、延べ300組の親子をサポートしてきたベビーマッサージ講師"
    },
    "areaServed": "東京都清瀬市",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "ベビーマッサージレッスン",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "体験レッスン",
            "description": "初回限定のベビーマッサージ体験レッスン"
          },
          "price": "1500",
          "priceCurrency": "JPY"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "ベーシック3回コース",
            "description": "全身マッサージを習得する3回コース"
          },
          "price": "7500",
          "priceCurrency": "JPY"
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <div className="min-h-screen hugtouch-bg-soft">
      <div className="space-y-12 pb-12">
        {/* メインビジュアルセクション */}
        <section className="relative text-center">
          <div className="relative h-80 sm:h-96 md:h-[500px] w-full overflow-hidden">
            {/* 背景画像 */}
            <div className="absolute inset-0">
              <Image
                src="/hero-baby-massage.jpg"
                alt="赤ちゃんとママの温かいふれあいの様子"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
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
            <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
              <div className="text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6">👶💕</div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 drop-shadow-lg hugtouch-mobile-text-2xl">
                ふれるたび &quot;ほっ&quot; と笑顔
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow px-2">
                清瀬駅徒歩１分「スタジオラビット」で開催する<br className="hidden sm:block" />
                <span className="sm:hidden"> </span>ベビーマッサージ教室<br />
                <span className="text-yellow-200 font-semibold">Hug Touch Sayu</span>
              </p>
              <div className="space-y-3 sm:space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center px-4 sm:px-0">
                <ReservationButton 
                  lessonType="trial" 
                  className="hugtouch-btn hugtouch-btn-primary hugtouch-btn-mobile py-3 sm:py-4 px-6 sm:px-8 text-base sm:text-lg w-full md:w-auto hugtouch-tap-target"
                >
                  体験レッスンを予約する
                </ReservationButton>
                <ReservationButton 
                  lessonType="trial" 
                  className="hugtouch-btn bg-white border-2 border-white text-pink-500 hover:bg-pink-50 hugtouch-btn-mobile py-3 sm:py-4 px-6 sm:px-8 text-base sm:text-lg w-full md:w-auto hugtouch-tap-target"
                >
                  LINE で相談する
                </ReservationButton>
              </div>
            </div>
          </div>
        </section>

        {/* 教室についてセクション */}
        <section className="text-center px-4 py-8 sm:py-12 hugtouch-mobile-padding">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-pink-600 mb-6 sm:mb-8 hugtouch-mobile-text-xl">「はぐたっち」について</h2>
            <div className="hugtouch-card p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 hugtouch-floating hugtouch-card-mobile">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
                「はぐたっち」は、<strong>妊娠期から通えるママと赤ちゃんのふれあいの場</strong>です。<br className="hidden sm:block" />
                <span className="sm:hidden"> </span>肌と肌のふれあいを通じて、赤ちゃんの健やかな心と体の成長を促し、<br className="hidden sm:block" />
                <span className="sm:hidden"> </span>ご家族の笑顔あふれる毎日をサポートします。
              </p>
              <div className="text-4xl mb-4">🤰🤱👶✨</div>
              <p className="text-md text-pink-600 font-semibold text-center">
                プレママから産後まで、長くお付き合いできる安心の教室です
              </p>
            </div>
          </div>
        </section>

        {/* レッスン紹介セクション */}
        <section className="px-4 py-8 sm:py-12 hugtouch-bg-warm hugtouch-curved-xl mx-2 sm:mx-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8 sm:mb-12 hugtouch-mobile-text-xl">人気のレッスン</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              <div className="hugtouch-card">
                <div className="relative h-48">
                  <Image
                    src="/lesson-massage.jpg"
                    alt="ベビーマッサージの様子"
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-4 sm:p-6 text-center">
                  <h3 className="text-lg sm:text-xl font-bold text-pink-600 mb-2 sm:mb-3">ベビーマッサージ</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">赤ちゃんとの絆を深める優しいマッサージ</p>
                  <a href="/lessons/baby-massage" className="text-pink-500 font-semibold hover:text-pink-700 hugtouch-tap-target">詳細を見る →</a>
                </div>
              </div>
              <div className="hugtouch-card">
                <div className="relative h-48">
                  <Image
                    src="/lesson-okurumicare.jpg"
                    alt="おくるみタッチケアの様子"
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-4 sm:p-6 text-center">
                  <h3 className="text-lg sm:text-xl font-bold text-blue-600 mb-2 sm:mb-3">おくるみタッチケア</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">新生児期から始められる優しいケア</p>
                  <a href="/lessons/okurumicare" className="text-blue-500 font-semibold hover:text-blue-700">詳細を見る →</a>
                </div>
              </div>
              <div className="hugtouch-card">
                <div className="relative h-48">
                  <Image
                    src="/lesson-skincare.jpg"
                    alt="ベビースキンケアの様子"
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-4 sm:p-6 text-center">
                  <h3 className="text-lg sm:text-xl font-bold text-green-600 mb-2 sm:mb-3">ベビースキンケア</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">デリケートな赤ちゃんの肌を守る方法</p>
                  <a href="/lessons/skincare" className="text-green-500 font-semibold hover:text-green-700">詳細を見る →</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* お知らせセクション */}
        <section className="px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="hugtouch-bg-warm p-8 hugtouch-curved-lg shadow-lg">
              <h3 className="text-2xl font-bold text-orange-800 text-center mb-6">📢 お知らせ</h3>
              <ul className="space-y-4 max-w-2xl mx-auto">
                <li className="bg-white p-4 hugtouch-curved shadow-md hover:shadow-lg transition-shadow duration-300">
                  <span className="font-bold text-orange-600">2025.07.01:</span> 
                  <span className="ml-2 text-gray-700">夏の特別クラスの予約受付を開始しました！</span>
                </li>
                <li className="bg-white p-4 hugtouch-curved shadow-md hover:shadow-lg transition-shadow duration-300">
                  <span className="font-bold text-orange-600">2025.06.20:</span> 
                  <span className="ml-2 text-gray-700">ホームページをリニューアルしました。</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* お客様の声 */}
        <section className="px-4 py-12 hugtouch-bg-cool hugtouch-curved-xl mx-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">お客様の声</h2>
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <div className="text-4xl mb-4">💬</div>
              <p className="text-lg text-gray-700 italic mb-4">
                &quot;初めての子育てで不安でしたが、マッサージを始めてから息子がよく笑うようになりました。
                私自身もリラックスできて、他のママさんたちとお話できるのも楽しみです。&quot;
              </p>
              <p className="text-sm text-gray-500">M.Kさん（4ヶ月・清瀬市）</p>
            </div>
            <a href="/voice" className="inline-block bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-8 rounded-full transition duration-300">
              もっと見る
            </a>
          </div>
        </section>

        {/* 最終CTA */}
        <section className="px-4 py-8 sm:py-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="hugtouch-bg-warm p-6 sm:p-8 md:p-12 hugtouch-curved-xl shadow-xl hugtouch-floating">
              <div className="text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6">🌟</div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 hugtouch-mobile-text-xl">
                体験レッスンで特別な時間を始めませんか？
              </h3>
              <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
                初回限定で特別価格にてご体験いただけます
              </p>
              <div className="hugtouch-price-highlight text-3xl sm:text-4xl font-bold text-pink-600 mb-6 sm:mb-8 hugtouch-cta-urgent">
                体験レッスン 1,500円
              </div>
              <div className="space-y-3 sm:space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
                <ReservationButton 
                  lessonType="trial" 
                  className="hugtouch-btn hugtouch-btn-primary hugtouch-btn-mobile py-3 sm:py-4 px-6 sm:px-8 text-base sm:text-lg w-full md:w-auto hugtouch-tap-target"
                >
                  体験レッスンを予約する
                </ReservationButton>
                <ReservationButton 
                  lessonType="trial" 
                  className="hugtouch-btn bg-green-500 hover:bg-green-600 text-white hugtouch-btn-mobile py-3 sm:py-4 px-6 sm:px-8 text-base sm:text-lg w-full md:w-auto hugtouch-tap-target"
                >
                  LINE で相談する
                </ReservationButton>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      {/* 浮動CTA（LINE） */}
      <div className="hugtouch-floating-cta" title="LINEで相談する">
        <span className="text-2xl">💬</span>
      </div>
      
      {/* 固定CTA（体験レッスン） */}
      <div className="hugtouch-fixed-cta show">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          <div className="text-white">
            <div className="text-lg font-bold">体験レッスン受付中</div>
            <div className="text-sm opacity-90">初回限定 1,500円</div>
          </div>
          <ReservationButton 
            lessonType="trial" 
            className="hugtouch-btn bg-white text-pink-500 hover:bg-gray-50 py-2 px-6 font-bold hugtouch-tap-target"
          >
            今すぐ予約
          </ReservationButton>
        </div>
      </div>
      </div>
    </>
  );
}
