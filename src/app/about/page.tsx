import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: 'About | デザイナーのプロフィールと哲学',
  description: 'デザイナーとしての経歴、デザイン哲学、そして私が大切にしている価値観についてご紹介します。',
}

export default function About() {
  return (
    <div className="py-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <header className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-playfair mb-6">About</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            デザイナーとしての経歴、デザイン哲学、そして私が大切にしている価値観についてご紹介します。
          </p>
        </header>

        {/* プロフィールセクション */}
        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/5] w-full">
              <Image 
                src="/images/profile.jpg" 
                alt="デザイナーのプロフィール写真" 
                fill 
                className="object-cover"
                unoptimized // 開発中は最適化をオフにする
              />
            </div>
            <div>
              <h2 className="text-3xl font-playfair mb-6">佐藤 美咲</h2>
              <p className="text-lg mb-6">
                東京を拠点に活動するインテリアデザイナー。空間が人々の生活や感情に与える影響に着目し、
                機能性と美しさを兼ね備えた空間づくりを追求しています。
              </p>
              <p className="text-lg mb-6">
                多摩美術大学デザイン学科卒業後、国内外のデザイン事務所での経験を経て、2018年に独立。
                住宅、商業施設、オフィスなど様々な空間のデザインを手がけています。
              </p>
              <p className="text-lg">
                「暮らしを豊かにするデザイン」をモットーに、クライアントの想いや生活スタイルを丁寧にヒアリングし、
                一人ひとりに寄り添った空間を提案しています。
              </p>
            </div>
          </div>
        </section>

        {/* デザイン哲学セクション */}
        <section className="mb-24">
          <h2 className="text-3xl font-playfair mb-12 text-center">デザイン哲学</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8">
              <h3 className="text-xl font-medium mb-4">人と空間の調和</h3>
              <p className="text-gray-700">
                空間は人々の生活を包み込む「器」です。その器が使う人の生活リズムや習慣と調和することで、
                自然と心地よい暮らしが生まれると考えています。機能性だけでなく、感情的な繋がりを大切にした
                デザインを心がけています。
              </p>
            </div>
            <div className="bg-gray-50 p-8">
              <h3 className="text-xl font-medium mb-4">素材の持つ力</h3>
              <p className="text-gray-700">
                自然素材が持つ温かみや経年変化の美しさを大切にしています。木、石、土、布など、
                それぞれの素材が持つ特性を活かし、時間とともに深まる味わいを楽しめる空間づくりを
                目指しています。
              </p>
            </div>
            <div className="bg-gray-50 p-8">
              <h3 className="text-xl font-medium mb-4">持続可能なデザイン</h3>
              <p className="text-gray-700">
                一時的なトレンドではなく、長く愛される空間づくりを大切にしています。
                環境への配慮はもちろん、メンテナンス性や可変性も考慮し、時代や生活の変化に
                柔軟に対応できるデザインを提案しています。
              </p>
            </div>
          </div>
        </section>

        {/* 経歴セクション */}
        <section className="mb-24">
          <h2 className="text-3xl font-playfair mb-12 text-center">経歴</h2>
          <div className="max-w-3xl mx-auto">
            <div className="relative border-l-2 border-gray-200 pl-8 pb-8">
              <div className="absolute w-4 h-4 bg-gray-900 rounded-full -left-[9px] top-0"></div>
              <div className="mb-4">
                <span className="text-sm text-gray-500">2018年 - 現在</span>
                <h3 className="text-xl font-medium">Misaki Design Studio 設立</h3>
              </div>
              <p className="text-gray-700">
                独立後、住宅や商業施設など様々なプロジェクトを手がける。「暮らしを豊かにするデザイン」をモットーに、
                クライアントの想いや生活スタイルに寄り添った空間づくりを実践。
              </p>
            </div>
            
            <div className="relative border-l-2 border-gray-200 pl-8 pb-8">
              <div className="absolute w-4 h-4 bg-gray-900 rounded-full -left-[9px] top-0"></div>
              <div className="mb-4">
                <span className="text-sm text-gray-500">2015年 - 2018年</span>
                <h3 className="text-xl font-medium">株式会社モダンスペース</h3>
              </div>
              <p className="text-gray-700">
                インテリアデザイナーとして、主に商業施設やオフィスのデザインを担当。
                チームプロジェクトの中で、コンセプト立案から施工管理まで幅広い経験を積む。
              </p>
            </div>
            
            <div className="relative border-l-2 border-gray-200 pl-8 pb-8">
              <div className="absolute w-4 h-4 bg-gray-900 rounded-full -left-[9px] top-0"></div>
              <div className="mb-4">
                <span className="text-sm text-gray-500">2013年 - 2015年</span>
                <h3 className="text-xl font-medium">Studio Ambiente（ミラノ）</h3>
              </div>
              <p className="text-gray-700">
                イタリア・ミラノのデザインスタジオにてアシスタントデザイナーとして勤務。
                ヨーロッパのデザイン思想や素材使いを学ぶ。
              </p>
            </div>
            
            <div className="relative border-l-2 border-gray-200 pl-8">
              <div className="absolute w-4 h-4 bg-gray-900 rounded-full -left-[9px] top-0"></div>
              <div className="mb-4">
                <span className="text-sm text-gray-500">2009年 - 2013年</span>
                <h3 className="text-xl font-medium">多摩美術大学 デザイン学科</h3>
              </div>
              <p className="text-gray-700">
                空間デザインを専攻。卒業制作では「記憶を紡ぐ住まい」をテーマに、
                三世代が共に暮らす住宅のデザインを提案し、学科最優秀賞を受賞。
              </p>
            </div>
          </div>
        </section>

        {/* 受賞歴セクション */}
        <section className="mb-24">
          <h2 className="text-3xl font-playfair mb-12 text-center">受賞歴</h2>
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-6">
              <li className="flex gap-6">
                <span className="text-gray-500 w-24 flex-shrink-0">2022年</span>
                <div>
                  <h3 className="text-xl font-medium">グッドデザイン賞</h3>
                  <p className="text-gray-700">「森の中の書斎」プロジェクト</p>
                </div>
              </li>
              <li className="flex gap-6">
                <span className="text-gray-500 w-24 flex-shrink-0">2020年</span>
                <div>
                  <h3 className="text-xl font-medium">JCD デザインアワード 優秀賞</h3>
                  <p className="text-gray-700">「KIGI Cafe」プロジェクト</p>
                </div>
              </li>
              <li className="flex gap-6">
                <span className="text-gray-500 w-24 flex-shrink-0">2019年</span>
                <div>
                  <h3 className="text-xl font-medium">住宅建築賞 奨励賞</h3>
                  <p className="text-gray-700">「光と風の家」プロジェクト</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* お問い合わせセクション */}
        <section className="text-center">
          <h2 className="text-3xl font-playfair mb-6">お問い合わせ</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            プロジェクトのご相談やお問い合わせは、下記リンクからお気軽にご連絡ください。
            あなたの想いをカタチにするお手伝いをさせていただきます。
          </p>
          <Link href="/contact" className="inline-block px-8 py-3 bg-gray-900 text-white hover:bg-gray-800 transition-colors">
            お問い合わせはこちら
          </Link>
        </section>
      </div>
    </div>
  );
} 