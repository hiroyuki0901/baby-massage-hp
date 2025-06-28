import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'ブログ | はぐたっち - ベビーマッサージ教室',
  description: 'ベビーマッサージ教室「はぐたっち」のブログです。子育てのヒントやベビーマッサージの効果など、役立つ情報をお届けします。',
}

const blogPosts = [
  {
    id: 1,
    title: 'ベビーマッサージで赤ちゃんの成長をサポート',
    excerpt: 'ベビーマッサージが赤ちゃんの身体的・精神的発達に与える効果について詳しくご紹介します。',
    date: '2024年6月25日',
    category: 'ベビーマッサージ',
    image: '/lesson-massage.jpg',
    readTime: '5分'
  },
  {
    id: 2,
    title: '夜泣きに効果的！リラックスマッサージ',
    excerpt: '夜泣きでお困りのママ必見！リラックス効果の高いマッサージテクニックをご紹介します。',
    date: '2024年6月20日',
    category: '子育てヒント',
    image: '/hero-baby-massage.jpg',
    readTime: '4分'
  },
  {
    id: 3,
    title: 'おくるみタッチケアで新生児期を穏やかに',
    excerpt: '新生児期から始められるおくるみタッチケア。赤ちゃんの安心感を高める方法をお教えします。',
    date: '2024年6月15日',
    category: 'おくるみタッチケア',
    image: '/lesson-okurumicare.jpg',
    readTime: '3分'
  },
  {
    id: 4,
    title: '季節に合わせたベビースキンケア',
    excerpt: '梅雨時期の湿気や夏の紫外線から赤ちゃんのデリケートなお肌を守るスキンケア方法。',
    date: '2024年6月10日',
    category: 'ベビースキンケア',
    image: '/lesson-skincare.jpg',
    readTime: '4分'
  },
  {
    id: 5,
    title: 'パパも一緒に！家族で楽しむベビーマッサージ',
    excerpt: 'パパにもできる簡単なベビーマッサージで、家族の絆を深めませんか？',
    date: '2024年6月5日',
    category: 'パパ向け',
    image: '/classroom.jpg',
    readTime: '3分'
  },
  {
    id: 6,
    title: '清瀬でママ友作り！地域での子育て',
    excerpt: '清瀬でのママ友作りや地域の子育て支援について、講師の体験談をお話しします。',
    date: '2024年6月1日',
    category: '地域情報',
    image: '/instructor.jpg',
    readTime: '4分'
  }
]

const categories = [
  { name: 'すべて', count: 6 },
  { name: 'ベビーマッサージ', count: 2 },
  { name: '子育てヒント', count: 1 },
  { name: 'おくるみタッチケア', count: 1 },
  { name: 'ベビースキンケア', count: 1 },
  { name: 'パパ向け', count: 1 }
]

function getCategoryColor(category: string) {
  const colors: { [key: string]: string } = {
    'ベビーマッサージ': 'bg-pink-100 text-pink-800',
    '子育てヒント': 'bg-blue-100 text-blue-800',
    'おくるみタッチケア': 'bg-purple-100 text-purple-800',
    'ベビースキンケア': 'bg-green-100 text-green-800',
    'パパ向け': 'bg-orange-100 text-orange-800',
    '地域情報': 'bg-yellow-100 text-yellow-800'
  }
  return colors[category] || 'bg-gray-100 text-gray-800'
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-8">
        {/* ヒーローセクション */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            ブログ
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            子育てのヒントやベビーマッサージの効果など、役立つ情報をお届けします
          </p>
          <div className="text-4xl mb-6">📝👶💕</div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* メインコンテンツ */}
            <div className="lg:w-2/3">
              {/* ブログ記事一覧 */}
              <div className="space-y-8">
                {blogPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <Image 
                          src={post.image} 
                          alt={post.title}
                          width={300}
                          height={192}
                          className="w-full h-48 md:h-full object-cover"
                        />
                      </div>
                      <div className="md:w-2/3 p-6">
                        <div className="flex items-center justify-between mb-2">
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(post.category)}`}>
                            {post.category}
                          </span>
                          <span className="text-sm text-gray-500">{post.readTime}で読める</span>
                        </div>
                        
                        <h2 className="text-xl font-bold text-gray-800 mb-3 hover:text-pink-600 transition duration-200">
                          <a href={`/blog/${post.id}`}>
                            {post.title}
                          </a>
                        </h2>
                        
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">{post.date}</span>
                          <a 
                            href={`/blog/${post.id}`}
                            className="inline-flex items-center text-pink-600 hover:text-pink-700 font-semibold transition duration-200"
                          >
                            続きを読む
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* ページネーション */}
              <div className="flex justify-center mt-12">
                <nav className="flex space-x-2">
                  <button className="px-4 py-2 bg-white rounded-lg shadow border text-gray-700 hover:bg-gray-50 transition duration-200">
                    前へ
                  </button>
                  <button className="px-4 py-2 bg-pink-500 text-white rounded-lg shadow hover:bg-pink-600 transition duration-200">
                    1
                  </button>
                  <button className="px-4 py-2 bg-white rounded-lg shadow border text-gray-700 hover:bg-gray-50 transition duration-200">
                    2
                  </button>
                  <button className="px-4 py-2 bg-white rounded-lg shadow border text-gray-700 hover:bg-gray-50 transition duration-200">
                    次へ
                  </button>
                </nav>
              </div>
            </div>

            {/* サイドバー */}
            <div className="lg:w-1/3">
              <div className="space-y-8">
                {/* カテゴリー */}
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">カテゴリー</h3>
                  <ul className="space-y-2">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <a 
                          href={`/blog?category=${category.name}`}
                          className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition duration-200"
                        >
                          <span className="text-gray-700">{category.name}</span>
                          <span className="bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded-full">
                            {category.count}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 人気記事 */}
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">人気記事</h3>
                  <div className="space-y-4">
                    {blogPosts.slice(0, 3).map((post) => (
                      <div key={post.id} className="flex space-x-3">
                        <Image 
                          src={post.image} 
                          alt={post.title}
                          width={64}
                          height={64}
                          className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-semibold text-gray-800 line-clamp-2 mb-1">
                            <a href={`/blog/${post.id}`} className="hover:text-pink-600">
                              {post.title}
                            </a>
                          </h4>
                          <p className="text-xs text-gray-500">{post.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl p-6 shadow-lg">
                  <div className="text-center">
                    <div className="text-3xl mb-4">💕</div>
                    <h3 className="text-lg font-bold text-gray-800 mb-3">
                      体験レッスン受付中
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      初回限定2,500円でベビーマッサージを体験できます
                    </p>
                    <button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-full transition duration-300">
                      体験予約はこちら
                    </button>
                  </div>
                </div>

                {/* LINE友達追加 */}
                <div className="bg-green-50 rounded-2xl p-6 shadow-lg border border-green-200">
                  <div className="text-center">
                    <div className="text-3xl mb-4">📱</div>
                    <h3 className="text-lg font-bold text-gray-800 mb-3">
                      LINE公式アカウント
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      お得な情報やブログ更新情報をお届け
                    </p>
                    <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition duration-300">
                      友だち追加
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}