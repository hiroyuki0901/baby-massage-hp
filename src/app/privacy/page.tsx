import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'プライバシーポリシー | はぐたっち - ベビーマッサージ教室',
  description: 'ベビーマッサージ教室「はぐたっち」のプライバシーポリシー。個人情報の取り扱いについて説明しています。',
  robots: 'noindex, nofollow',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen hugtouch-bg-soft">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8 text-center">
            プライバシーポリシー
          </h1>

          <div className="hugtouch-card p-6 sm:p-8 mb-8">
            <p className="text-gray-700 leading-relaxed mb-6">
              ベビーマッサージ教室「はぐたっち」（以下「当教室」）は、お客様の個人情報の重要性を認識し、
              個人情報保護法及び関連法令等を遵守し、以下のプライバシーポリシーに従って
              個人情報を適切に取り扱います。
            </p>
          </div>

          <div className="space-y-8">
            {/* 第1条 */}
            <div className="hugtouch-card p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">第1条（個人情報の定義）</h2>
              <p className="text-gray-700 leading-relaxed">
                本プライバシーポリシーにおいて「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、
                生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、
                連絡先その他の記述等により特定の個人を識別できる情報を指します。
              </p>
            </div>

            {/* 第2条 */}
            <div className="hugtouch-card p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">第2条（個人情報の収集方法）</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                当教室は、以下の場合に個人情報を収集いたします：
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>レッスンのお申し込み時</li>
                <li>お問い合わせフォームからのご連絡時</li>
                <li>LINE公式アカウントでのやり取り時</li>
                <li>電話でのお問い合わせ時</li>
                <li>その他、当教室のサービス利用時</li>
              </ul>
            </div>

            {/* 第3条 */}
            <div className="hugtouch-card p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">第3条（個人情報を収集・利用する目的）</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                当教室が個人情報を収集・利用する目的は、以下のとおりです：
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>レッスンの予約管理および実施</li>
                <li>お客様への連絡、お問い合わせへの回答</li>
                <li>レッスン料金の請求および決済処理</li>
                <li>レッスン内容の改善、新サービスの開発</li>
                <li>重要なお知らせの配信</li>
                <li>メンテナンス、重要なお知らせなど必要に応じたご連絡</li>
              </ul>
            </div>

            {/* 第4条 */}
            <div className="hugtouch-card p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">第4条（個人情報の第三者提供）</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                当教室は、以下の場合を除いて、あらかじめお客様の同意を得ることなく、
                第三者に個人情報を提供することはありません：
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>個人情報保護法その他の法令により認められる場合</li>
                <li>人の生命、身体または財産の保護のために必要がある場合</li>
                <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合</li>
                <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合</li>
              </ul>
            </div>

            {/* 第5条 */}
            <div className="hugtouch-card p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">第5条（個人情報の開示）</h2>
              <p className="text-gray-700 leading-relaxed">
                当教室は、お客様ご本人から個人情報の開示を求められたときは、
                お客様ご本人に対し、遅滞なくこれを開示します。ただし、開示することにより次のいずれかに該当する場合は、
                その全部または一部を開示しないこともあり、開示しない決定をした場合には、その旨を遅滞なく通知します。
              </p>
            </div>

            {/* 第6条 */}
            <div className="hugtouch-card p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">第6条（個人情報の訂正および削除）</h2>
              <p className="text-gray-700 leading-relaxed">
                お客様は、当教室の保有する自己の個人情報が誤った情報である場合には、
                当教室が定める手続きにより、当教室に対して個人情報の訂正、追加または削除（以下「訂正等」といいます。）を求めることができます。
              </p>
            </div>

            {/* 第7条 */}
            <div className="hugtouch-card p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">第7条（Cookieの使用）</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                当教室のウェブサイトでは、サービス向上のためにCookieを使用する場合があります：
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Google Analyticsによるアクセス解析</li>
                <li>ウェブサイトの利用状況の把握</li>
                <li>ユーザー体験の向上</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Cookieの無効化は、ブラウザの設定から行うことができます。
              </p>
            </div>

            {/* 第8条 */}
            <div className="hugtouch-card p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">第8条（個人情報保護方針の変更）</h2>
              <p className="text-gray-700 leading-relaxed">
                本ポリシーの内容は、法令その他本ポリシーに別段の定めのある事項を除いて、
                お客様に通知することなく、変更することができるものとします。
                当教室が別途定める場合を除いて、変更後のプライバシーポリシーは、
                本ウェブサイトに掲載したときから効力を生じるものとします。
              </p>
            </div>

            {/* 第9条 */}
            <div className="hugtouch-card p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">第9条（お問い合わせ窓口）</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                本ポリシーに関するお問い合わせは、下記の窓口までお願いいたします：
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-800">ベビーマッサージ教室「はぐたっち」</p>
                <p className="text-gray-700">講師：Sayu（長野 小由奈）</p>
                <p className="text-gray-700">メール：contact@hugtouch-sayu.com</p>
                <p className="text-gray-700">電話：xxx-xxxx-xxxx</p>
                <p className="text-gray-700">LINE公式アカウント：@hugtouch-sayu</p>
              </div>
            </div>

            {/* 制定日 */}
            <div className="text-center text-gray-600 text-sm mt-8">
              <p>制定日：2025年1月1日</p>
              <p>最終改訂日：2025年1月1日</p>
            </div>
          </div>

          {/* 戻るボタン */}
          <div className="text-center mt-12">
            <a
              href="/contact"
              className="hugtouch-btn hugtouch-btn-primary py-3 px-6 hugtouch-tap-target"
            >
              お問い合わせページに戻る
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}