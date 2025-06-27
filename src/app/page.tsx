import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-12">
      {/* メインビジュアルセクション */}
      <section className="relative text-center">
        <div className="relative h-64 md:h-96 w-full">
          <Image
            src="/placeholder-hero.jpg" // 仮の画像パス
            alt="赤ちゃんと母親がふれあう様子"
            layout="fill"
            objectFit="cover"
            className="opacity-70"
          />
          <div className="absolute inset-0 bg-pink-100 bg-opacity-50 flex flex-col justify-center items-center p-4">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              ママの手は、魔法の手。
            </h2>
            <p className="text-lg md:text-xl text-gray-700">
              ふれあいで育む、親子の深い絆。にこにこベビーマッサージ教室
            </p>
          </div>
        </div>
      </section>

      {/* 教室についてセクション */}
      <section className="text-center px-4">
        <h3 className="text-2xl font-bold text-pink-500 mb-4">当教室について</h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          「にこにこベビーマッサージ」は、赤ちゃんとママ・パパのための特別な場所です。
          肌と肌のふれあいを通じて、赤ちゃんの健やかな心と体の成長を促し、ご家族の笑顔あふれる毎日をサポートします。
        </p>
      </section>

      {/* お知らせセクション */}
      <section className="bg-yellow-50 p-8 rounded-lg">
        <h3 className="text-2xl font-bold text-yellow-800 text-center mb-4">お知らせ</h3>
        <ul className="space-y-2 max-w-2xl mx-auto">
          <li className="border-b pb-2">
            <span className="font-bold">2025.07.01:</span> 夏の特別クラスの予約受付を開始しました！
          </li>
          <li className="border-b pb-2">
            <span className="font-bold">2025.06.20:</span> ホームページをリニューアルしました。
          </li>
        </ul>
      </section>

      {/* 行動喚起 (CTA) セクション */}
      <section className="text-center py-8">
        <h3 className="text-xl font-bold text-gray-800 mb-4">体験クラスに参加してみませんか？</h3>
        <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full transition duration-300">
          ご予約・お問い合わせはこちら
        </button>
      </section>
    </div>
  );
}
