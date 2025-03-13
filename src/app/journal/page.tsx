import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: 'ジャーナル | 暮らしとデザイン',
  description: 'デザインや暮らしに関する考え方、プロジェクトの裏側、インスピレーションなどをご紹介します。',
}

// ダミーの記事データ
const posts = [
  {
    id: 1,
    title: "デザインと生活の融合",
    excerpt: "現代の暮らしにおけるデザインの役割と、空間が人々の生活に与える影響について考察します。",
    date: "2023年12月15日",
    category: "デザイン思考",
    thumbnail: "/images/journal-1.jpg",
    slug: "post-1"
  },
  {
    id: 2,
    title: "素材選びの重要性",
    excerpt: "インテリアデザインにおける素材選びの重要性と、経年変化を楽しむ設計について解説します。",
    date: "2023年11月28日",
    category: "素材",
    thumbnail: "/images/journal-2.jpg",
    slug: "post-2"
  },
  {
    id: 3,
    title: "照明計画の基本と応用",
    excerpt: "空間の印象を大きく左右する照明計画について、基本的な考え方から実践的なテクニックまでご紹介します。",
    date: "2023年10月10日",
    category: "照明デザイン",
    thumbnail: "/images/journal-3.jpg",
    slug: "post-3"
  },
  {
    id: 4,
    title: "小さな空間を最大限に活かす",
    excerpt: "限られた空間を効率的かつ美しく活用するための工夫とアイデアをご紹介します。",
    date: "2023年9月5日",
    category: "空間活用",
    thumbnail: "/images/journal-4.jpg",
    slug: "post-4"
  },
  {
    id: 5,
    title: "自然と調和する住まい",
    excerpt: "自然環境と調和し、持続可能な暮らしを実現するための住空間デザインについて考えます。",
    date: "2023年8月22日",
    category: "サステナブルデザイン",
    thumbnail: "/images/journal-5.jpg",
    slug: "post-5"
  },
  {
    id: 6,
    title: "色彩が与える心理的影響",
    excerpt: "インテリアにおける色彩選択が人の心理や行動にどのような影響を与えるかを探ります。",
    date: "2023年7月14日",
    category: "色彩心理",
    thumbnail: "/images/journal-6.jpg",
    slug: "post-6"
  },
];

export default function Journal() {
  return (
    <div className="py-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <header className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-playfair mb-6">ジャーナル</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            デザインや暮らしに関する考え方、プロジェクトの裏側、インスピレーションなどをご紹介します。
          </p>
        </header>

        {/* カテゴリーフィルター */}
        <div className="mb-12">
          <ul className="flex flex-wrap justify-center gap-4">
            <li>
              <button className="px-6 py-2 bg-gray-900 text-white">すべて</button>
            </li>
            <li>
              <button className="px-6 py-2 bg-white text-gray-900 border border-gray-200 hover:border-gray-900 transition-colors">デザイン思考</button>
            </li>
            <li>
              <button className="px-6 py-2 bg-white text-gray-900 border border-gray-200 hover:border-gray-900 transition-colors">素材</button>
            </li>
            <li>
              <button className="px-6 py-2 bg-white text-gray-900 border border-gray-200 hover:border-gray-900 transition-colors">照明デザイン</button>
            </li>
            <li>
              <button className="px-6 py-2 bg-white text-gray-900 border border-gray-200 hover:border-gray-900 transition-colors">空間活用</button>
            </li>
          </ul>
        </div>

        {/* 記事一覧 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {posts.map((post) => (
            <article key={post.id} className="flex flex-col h-full">
              <Link href={`/journal/${post.slug}`} className="block group">
                <div className="relative aspect-[16/9] mb-6 overflow-hidden">
                  <Image 
                    src={post.thumbnail} 
                    alt={post.title} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    unoptimized // 開発中は最適化をオフにする
                  />
                </div>
                
                <div className="flex-grow">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <span className="text-sm px-3 py-1 bg-gray-100 text-gray-700">{post.category}</span>
                  </div>
                  
                  <h2 className="text-xl font-medium mb-3 group-hover:text-gray-600 transition-colors">{post.title}</h2>
                  <p className="text-gray-600">{post.excerpt}</p>
                </div>
                
                <div className="mt-4">
                  <span className="inline-flex items-center text-gray-900 font-medium group-hover:underline">
                    続きを読む
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
        
        {/* ページネーション */}
        <div className="mt-16 flex justify-center">
          <div className="inline-flex">
            <button className="px-4 py-2 border border-gray-300 text-gray-700 bg-white hover:bg-gray-50">前へ</button>
            <button className="px-4 py-2 border-t border-b border-r border-gray-300 text-white bg-gray-900">1</button>
            <button className="px-4 py-2 border-t border-b border-r border-gray-300 text-gray-700 bg-white hover:bg-gray-50">2</button>
            <button className="px-4 py-2 border-t border-b border-r border-gray-300 text-gray-700 bg-white hover:bg-gray-50">3</button>
            <button className="px-4 py-2 border-t border-b border-r border-gray-300 text-gray-700 bg-white hover:bg-gray-50">次へ</button>
          </div>
        </div>
      </div>
    </div>
  );
} 