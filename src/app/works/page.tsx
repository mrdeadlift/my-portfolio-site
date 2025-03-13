import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: '作品一覧 | 暮らしとデザイン',
  description: '大塚渉のデザインプロジェクト一覧です。住宅、オフィス、商業施設などの空間デザインをご覧いただけます。',
}

// ダミーのプロジェクトデータ
const projects = [
  {
    id: 1,
    title: "東京都内マンションリノベーション",
    category: "住宅",
    year: "2023",
    thumbnail: "/images/project-1.jpg",
    slug: "project-1"
  },
  {
    id: 2,
    title: "カフェ「Slow Life」",
    category: "商業施設",
    year: "2022",
    thumbnail: "/images/project-2.jpg",
    slug: "project-2"
  },
  {
    id: 3,
    title: "IT企業オフィスデザイン",
    category: "オフィス",
    year: "2022",
    thumbnail: "/images/project-3.jpg",
    slug: "project-3"
  },
  {
    id: 4,
    title: "京都の町家リノベーション",
    category: "住宅",
    year: "2021",
    thumbnail: "/images/project-4.jpg",
    slug: "project-4"
  },
  {
    id: 5,
    title: "ブティックホテル「KAZE」",
    category: "ホテル",
    year: "2021",
    thumbnail: "/images/project-5.jpg",
    slug: "project-5"
  },
  {
    id: 6,
    title: "ミニマリストのための小さな家",
    category: "住宅",
    year: "2020",
    thumbnail: "/images/project-6.jpg",
    slug: "project-6"
  },
];

export default function Works() {
  return (
    <div className="py-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <header className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-playfair mb-6">作品一覧</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            住宅、オフィス、商業施設など、様々な空間デザインのプロジェクトをご紹介します。
            それぞれの空間に合わせた、機能性と美しさを兼ね備えたデザインを心がけています。
          </p>
        </header>

        {/* フィルターメニュー */}
        <div className="mb-12">
          <ul className="flex flex-wrap justify-center gap-4">
            <li>
              <button className="px-6 py-2 bg-gray-900 text-white">すべて</button>
            </li>
            <li>
              <button className="px-6 py-2 bg-white text-gray-900 border border-gray-200 hover:border-gray-900 transition-colors">住宅</button>
            </li>
            <li>
              <button className="px-6 py-2 bg-white text-gray-900 border border-gray-200 hover:border-gray-900 transition-colors">オフィス</button>
            </li>
            <li>
              <button className="px-6 py-2 bg-white text-gray-900 border border-gray-200 hover:border-gray-900 transition-colors">商業施設</button>
            </li>
            <li>
              <button className="px-6 py-2 bg-white text-gray-900 border border-gray-200 hover:border-gray-900 transition-colors">ホテル</button>
            </li>
          </ul>
        </div>

        {/* プロジェクト一覧 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group">
              <Link href={`/works/${project.slug}`} className="block">
                <div className="relative aspect-[4/3] mb-4 overflow-hidden">
                  <Image 
                    src={project.thumbnail} 
                    alt={project.title} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    unoptimized // 開発中は最適化をオフにする
                  />
                </div>
                <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.category} / {project.year}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 