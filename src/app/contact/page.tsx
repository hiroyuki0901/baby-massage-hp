import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'お問い合わせ・予約 | はぐたっち - ベビーマッサージ教室',
  description: 'ベビーマッサージ教室「はぐたっち」へのお問い合わせ・予約フォーム。LINEでのコンタクトも可能です。体験レッスンの予約もこちらから。',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      <div className="container mx-auto px-4 py-8">
        {/* ヒーローセクション */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            お問い合わせ・予約
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            お気軽にお問い合わせください。LINEでのやりとりも大歓迎です。
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* お問い合わせ方法 */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* LINEでのお問い合わせ */}
            <div className="bg-green-500 text-white rounded-lg p-8 text-center">
              <div className="text-4xl mb-4">📱</div>
              <h2 className="text-2xl font-bold mb-4">LINE でお問い合わせ</h2>
              <p className="mb-6 text-green-100">
                最もスピーディーなお問い合わせ方法です。写真や動画も送信できます。
              </p>
              <button className="bg-white text-green-500 font-bold py-3 px-8 rounded-full hover:bg-green-50 transition duration-300 w-full">
                LINE で問い合わせる
              </button>
              <p className="text-sm text-green-200 mt-3">
                ※ タップして友だち追加後、メッセージをお送りください
              </p>
            </div>

            {/* 電話でのお問い合わせ */}
            <div className="bg-blue-500 text-white rounded-lg p-8 text-center">
              <div className="text-4xl mb-4">📞</div>
              <h2 className="text-2xl font-bold mb-4">電話でお問い合わせ</h2>
              <p className="mb-6 text-blue-100">
                直接お話ししたい方はこちら。不在の場合は折り返しいたします。
              </p>
              <div className="bg-white text-blue-500 font-bold py-3 px-8 rounded-full mb-4">
                042-XXX-XXXX
              </div>
              <p className="text-sm text-blue-200">
                受付時間: 9:00～18:00（土日祉日を除く）
              </p>
            </div>
          </div>

          {/* お問い合わせフォーム */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              お問い合わせフォーム
            </h2>
            
            <form className="space-y-6">
              {/* お名前 */}
              <div>
                <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-500"
                  placeholder="山田 花子"
                  required
                />
              </div>

              {/* メールアドレス */}
              <div>
                <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-500"
                  placeholder="example@email.com"
                  required
                />
              </div>

              {/* 電話番号 */}
              <div>
                <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
                  電話番号
                </label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-500"
                  placeholder="090-1234-5678"
                />
              </div>

              {/* 赤ちゃんの情報 */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="babyAge">
                    赤ちゃんの月齢
                  </label>
                  <select 
                    id="babyAge" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-500"
                  >
                    <option value="">選択してください</option>
                    <option value="妹娠中">妹娠中</option>
                    <option value="0ヶ月">新生児（0ヶ月）</option>
                    <option value="1ヶ月">1ヶ月</option>
                    <option value="2ヶ月">2ヶ月</option>
                    <option value="3ヶ月">3ヶ月</option>
                    <option value="4ヶ月">4ヶ月</option>
                    <option value="5ヶ月">5ヶ月</option>
                    <option value="6ヶ月">6ヶ月</option>
                    <option value="7ヶ月以上">7ヶ月以上</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="inquiryType">
                    お問い合わせ内容
                  </label>
                  <select 
                    id="inquiryType" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-500"
                  >
                    <option value="">選択してください</option>
                    <option value="体験レッスン">体験レッスンの予約</option>
                    <option value="ベビーマッサージ">ベビーマッサージレッスン</option>
                    <option value="おくるみタッチケア">おくるみタッチケア</option>
                    <option value="ベビースキンケア">ベビースキンケア</option>
                    <option value="資格取得">資格取得について</option>
                    <option value="その他">その他</option>
                  </select>
                </div>
              </div>

              {/* メッセージ */}
              <div>
                <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
                  メッセージ <span className="text-red-500">*</span>
                </label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-500"
                  placeholder="ご質問やご相談内容をお書きください。体験レッスンを希望の場合は、ご希望の日時もあわせてお知らせください。"
                  required
                />
              </div>

              {/* 送信ボタン */}
              <div className="text-center">
                <button 
                  type="submit"
                  className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 px-12 rounded-full transition duration-300"
                >
                  メッセージを送信する
                </button>
              </div>
              
              <p className="text-sm text-gray-600 text-center">
                ※ 送信後24時間以内に返信いたします。土日祕日は翌営業日の返信となります。
              </p>
            </form>
          </div>

          {/* アクセス情報 */}
          <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              教室へのアクセス
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-gray-700 mb-4">教室情報</h3>
                <div className="space-y-2 text-gray-600">
                  <p>🏠 東京都清瀬市松山X-X-X</p>
                  <p>🚆 清瀬駅南口徒步10分</p>
                  <p>🚗 駐車場あり（無料・3台）</p>
                  <p>🚼 ベビーカーでのお越しOK</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-700 mb-4">熶境・設備</h3>
                <div className="space-y-2 text-gray-600">
                  <p>• 授乳・おむつ替えスペース</p>
                  <p>• 給湯器・電子レンジ完備</p>
                  <p>• ベビーベッド・おもちゃあり</p>
                  <p>• 空気清浄機・加湿器完備</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
