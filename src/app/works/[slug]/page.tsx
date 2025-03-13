import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// ダミーのプロジェクトデータ
const projects = [
  {
    id: 1,
    title: "東京都内マンションリノベーション",
    category: "住宅",
    year: "2023",
    client: "K様",
    location: "東京都渋谷区",
    area: "85㎡",
    description: "都心に住む共働き夫婦のためのマンションリノベーション。限られた空間を最大限に活用し、機能性と美しさを兼ね備えた住空間を実現しました。自然素材を多く取り入れ、都会の喧騒から解放される落ち着いた空間づくりを心がけました。",
    longDescription: "都心に住む共働き夫婦のためのマンションリノベーション。限られた空間を最大限に活用し、機能性と美しさを兼ね備えた住空間を実現しました。\n\n自然素材を多く取り入れ、都会の喧騒から解放される落ち着いた空間づくりを心がけました。キッチンとダイニングは一体的に設計し、料理好きな施主の要望に応えて、使い勝手の良い動線と十分な収納を確保。リビングは大きな窓からの採光を活かし、明るく開放的な空間に。寝室は落ち着いた色調でまとめ、質の高い睡眠環境を整えました。\n\n既存の間取りを大幅に見直し、無駄なスペースを削減することで、コンパクトながらも広がりを感じる住空間を実現しています。",
    images: [
      {
        src: "/images/project-1.jpg",
        alt: "リビングルーム",
        caption: "自然光が差し込む明るいリビングルーム"
      },
      {
        src: "/images/project-1-2.jpg",
        alt: "キッチン",
        caption: "機能性を重視したオープンキッチン"
      },
      {
        src: "/images/project-1-3.jpg",
        alt: "寝室",
        caption: "落ち着いた色調の寝室"
      },
      {
        src: "/images/project-1-4.jpg",
        alt: "バスルーム",
        caption: "シンプルで使いやすいバスルーム"
      }
    ],
    thumbnail: "/images/project-1.jpg",
    slug: "project-1"
  },
  {
    id: 2,
    title: "カフェ「Slow Life」",
    category: "商業施設",
    year: "2022",
    client: "Slow Life LLC",
    location: "神奈川県鎌倉市",
    area: "120㎡",
    description: "鎌倉の自然に囲まれた立地を活かした、ゆったりとした時間を過ごせるカフェの設計。地元の素材を活かした内装と、周囲の自然環境と調和するデザインを心がけました。",
    longDescription: "鎌倉の自然に囲まれた立地を活かした、ゆったりとした時間を過ごせるカフェの設計。地元の素材を活かした内装と、周囲の自然環境と調和するデザインを心がけました。\n\n店内は大きな窓から自然光を取り入れ、四季の移ろいを感じられる空間に。カウンター席、テーブル席、テラス席と多様な座席を用意し、お客様の気分や利用シーンに合わせて選べるようにしています。\n\n地元の木材を使用したカウンターや家具は、経年変化を楽しめる素材選びにこだわりました。照明計画も昼と夜で異なる雰囲気を演出し、一日を通して居心地の良い空間となるよう配慮しています。",
    images: [
      {
        src: "/images/project-2.jpg",
        alt: "カフェ内装",
        caption: "自然光あふれる店内"
      },
      {
        src: "/images/project-2-2.jpg",
        alt: "カウンター席",
        caption: "地元の木材を使用したカウンター"
      },
      {
        src: "/images/project-2-3.jpg",
        alt: "テラス席",
        caption: "緑を感じられるテラス席"
      },
      {
        src: "/images/project-2-4.jpg",
        alt: "夜の照明",
        caption: "夜は落ち着いた照明で異なる雰囲気に"
      }
    ],
    thumbnail: "/images/project-2.jpg",
    slug: "project-2"
  },
  // 他のプロジェクトデータも同様に定義...
];

export async function generateMetadata({ params }: { params: { slug: string } }) {
  // paramsを非同期で扱う
  const slug = params.slug;
  const project = projects.find(p => p.slug === slug);
  
  if (!project) {
    return {
      title: 'プロジェクトが見つかりません | 暮らしとデザイン',
      description: 'お探しのプロジェクトは見つかりませんでした。',
    };
  }
  
  return {
    title: `${project.title} | 暮らしとデザイン`,
    description: project.description,
  };
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  // paramsを非同期で扱う
  const slug = params.slug;
  const project = projects.find(p => p.slug === slug);
  
  if (!project) {
    notFound();
  }
  
  return (
    <div className="py-24">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* プロジェクト概要 */}
        <header className="mb-16">
          <div className="mb-6">
            <Link href="/works" className="text-gray-500 hover:text-gray-900 transition-colors flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              作品一覧に戻る
            </Link>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-playfair mb-6">{project.title}</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                {project.description}
              </p>
              
              <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                <div>
                  <h3 className="text-sm text-gray-500 uppercase mb-1">カテゴリー</h3>
                  <p className="font-medium">{project.category}</p>
                </div>
                <div>
                  <h3 className="text-sm text-gray-500 uppercase mb-1">年</h3>
                  <p className="font-medium">{project.year}</p>
                </div>
                <div>
                  <h3 className="text-sm text-gray-500 uppercase mb-1">クライアント</h3>
                  <p className="font-medium">{project.client}</p>
                </div>
                <div>
                  <h3 className="text-sm text-gray-500 uppercase mb-1">場所</h3>
                  <p className="font-medium">{project.location}</p>
                </div>
                <div>
                  <h3 className="text-sm text-gray-500 uppercase mb-1">面積</h3>
                  <p className="font-medium">{project.area}</p>
                </div>
              </div>
            </div>
            
            <div className="relative aspect-[4/3]">
              <Image 
                src={project.thumbnail} 
                alt={project.title} 
                fill 
                className="object-cover"
                priority
                unoptimized // 開発中は最適化をオフにする
              />
            </div>
          </div>
        </header>
        
        {/* プロジェクト詳細 */}
        <div className="mb-16">
          <div className="max-w-3xl mx-auto">
            {project.longDescription.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-gray-700 mb-6 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        
        {/* プロジェクト画像ギャラリー */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {project.images.map((image, index) => (
            <div key={index} className="space-y-3">
              <div className="relative aspect-[4/3]">
                <Image 
                  src={image.src} 
                  alt={image.alt} 
                  fill 
                  className="object-cover"
                  unoptimized // 開発中は最適化をオフにする
                />
              </div>
              <p className="text-gray-600 text-sm">{image.caption}</p>
            </div>
          ))}
        </div>
        
        {/* 次のプロジェクトへのナビゲーション */}
        <div className="mt-24 pt-12 border-t border-gray-100">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-sm text-gray-500 uppercase mb-2">前のプロジェクト</h3>
              <Link href={`/works/${project.id > 1 ? `project-${project.id - 1}` : 'project-6'}`} className="text-xl font-medium hover:underline">
                {project.id > 1 
                  ? projects.find(p => p.id === project.id - 1)?.title || '前のプロジェクト' 
                  : projects.find(p => p.id === 6)?.title || '前のプロジェクト'}
              </Link>
            </div>
            
            <div className="text-right">
              <h3 className="text-sm text-gray-500 uppercase mb-2">次のプロジェクト</h3>
              <Link href={`/works/${project.id < 6 ? `project-${project.id + 1}` : 'project-1'}`} className="text-xl font-medium hover:underline">
                {project.id < 6 
                  ? projects.find(p => p.id === project.id + 1)?.title || '次のプロジェクト' 
                  : projects.find(p => p.id === 1)?.title || '次のプロジェクト'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 