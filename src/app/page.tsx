import Image from "next/image";
import Link from "next/link";

// プレースホルダー画像のパス
const placeholderImage = "/images/placeholders/placeholder.jpg";

export default function Home() {
  return (
    <div className="w-full">
      {/* ヒーローセクション */}
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero-image.jpg" 
            alt="ヒーロー画像" 
            fill 
            className="object-cover"
            priority
            unoptimized // 開発中は最適化をオフにする
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl md:text-6xl font-playfair mb-6">
              暮らしとデザインの調和
            </h1>
            <p className="text-xl mb-8 leading-relaxed">
              空間とライフスタイルを繋ぐデザインで、日常に新しい価値を創造します。
            </p>
            <Link 
              href="/works" 
              className="inline-block bg-white text-gray-900 px-8 py-3 font-medium transition-all hover:bg-gray-100"
            >
              作品を見る
            </Link>
          </div>
        </div>
      </section>

      {/* 最新の作品セクション */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-playfair mb-12 text-center">最新の作品</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group">
                <Link href={`/works/project-${item}`} className="block">
                  <div className="relative aspect-[4/3] mb-4 overflow-hidden">
                    <Image 
                      src={`/images/project-${item}.jpg`} 
                      alt={`プロジェクト ${item}`} 
                      fill 
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      unoptimized // 開発中は最適化をオフにする
                    />
                  </div>
                  <h3 className="text-xl font-medium mb-2">プロジェクト {item}</h3>
                  <p className="text-gray-600">インテリアデザイン / 2023</p>
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/works" 
              className="inline-block border border-gray-900 text-gray-900 px-8 py-3 font-medium transition-all hover:bg-gray-900 hover:text-white"
            >
              すべての作品を見る
            </Link>
          </div>
        </div>
      </section>

      {/* ジャーナルセクション */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-playfair mb-12 text-center">ジャーナル</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item}>
                <Link href={`/journal/post-${item}`} className="block">
                  <div className="relative aspect-[16/9] mb-4 overflow-hidden">
                    <Image 
                      src={`/images/journal-${item}.jpg`} 
                      alt={`ジャーナル記事 ${item}`} 
                      fill 
                      className="object-cover"
                      unoptimized // 開発中は最適化をオフにする
                    />
                  </div>
                  <h3 className="text-xl font-medium mb-2">デザインと生活の融合</h3>
                  <p className="text-gray-600 mb-3">2023年12月15日</p>
                  <p className="text-gray-700">現代の暮らしにおけるデザインの役割と、空間が人々の生活に与える影響について考察します。</p>
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/journal" 
              className="inline-block border border-gray-900 text-gray-900 px-8 py-3 font-medium transition-all hover:bg-gray-900 hover:text-white"
            >
              すべての記事を読む
            </Link>
          </div>
        </div>
      </section>

      {/* アバウトセクション */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative aspect-square">
                <Image 
                  src="/images/profile.jpg" 
                  alt="大塚 渉" 
                  fill 
                  className="object-cover"
                  unoptimized // 開発中は最適化をオフにする
                />
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-playfair mb-6">大塚 渉について</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                インテリアデザイナーとして10年以上の経験を持ち、住宅やオフィス、商業施設など様々な空間デザインに携わってきました。
                人々の暮らしや働き方に寄り添い、機能性と美しさを兼ね備えた空間づくりを心がけています。
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                デザインを通じて、人々の日常に小さな喜びや発見をもたらすことが私の目標です。
              </p>
              <Link 
                href="/about" 
                className="inline-block border border-gray-900 text-gray-900 px-8 py-3 font-medium transition-all hover:bg-gray-900 hover:text-white"
              >
                詳しく見る
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* お問い合わせセクション */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <h2 className="text-3xl font-playfair mb-6">お問い合わせ</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            プロジェクトのご相談やお問い合わせは、お気軽にご連絡ください。
            あなたの理想の空間づくりをサポートいたします。
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-gray-900 px-8 py-3 font-medium transition-all hover:bg-gray-100"
          >
            お問い合わせをする
          </Link>
        </div>
      </section>
    </div>
  );
}
