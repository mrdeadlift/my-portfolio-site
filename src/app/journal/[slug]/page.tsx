import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// ダミーの記事データ
const posts = [
  {
    id: 1,
    title: "デザインと生活の融合",
    excerpt: "現代の暮らしにおけるデザインの役割と、空間が人々の生活に与える影響について考察します。",
    date: "2023年12月15日",
    category: "デザイン思考",
    author: "大塚 渉",
    content: `
      <p>現代社会において、デザインは単なる装飾や見た目の美しさを超え、私たちの生活の質を向上させる重要な要素となっています。特に住空間やワークスペースのデザインは、人々の行動パターン、心理状態、そして全体的な幸福感に大きな影響を与えます。</p>
      
      <h2>空間が人に与える影響</h2>
      <p>私たちが日々過ごす空間は、意識的にも無意識的にも私たちの気分や行動に影響を与えています。例えば、自然光が豊富に入る明るい空間は、セロトニンの分泌を促進し、気分を向上させる効果があります。また、適切な配色や素材の選択は、リラックス効果や集中力の向上につながります。</p>
      <p>特に住宅空間では、家族の関係性や日常の過ごし方にまで影響を及ぼします。オープンなリビングダイニングは家族のコミュニケーションを促進し、適切に区切られたプライベート空間は個人の時間を大切にする文化を育みます。</p>
      
      <h2>機能性と美しさの両立</h2>
      <p>優れたデザインとは、機能性と美しさを高いレベルで両立させるものです。使いやすさや実用性を犠牲にした見た目だけの美しさは、長期的には使い手の不満を生み出します。逆に、美しさを無視した機能一辺倒の空間は、心理的な満足感や愛着を生み出しにくいものです。</p>
      <p>例えば、キッチンデザインでは、効率的な作業動線と収納計画という機能面と、空間全体との調和や素材の質感という美的側面の両方を考慮する必要があります。この両立こそが、長く愛される空間を生み出す鍵となります。</p>
      
      <h2>持続可能なデザインの重要性</h2>
      <p>現代のデザインにおいては、環境への配慮も欠かせない要素となっています。資源の有効活用、エネルギー効率の向上、そして長く使い続けられる耐久性など、持続可能性を考慮したデザインが求められています。</p>
      <p>また、時代や流行に左右されない普遍的な美しさを持つデザインは、頻繁な改装や買い替えの必要性を減らし、結果として環境負荷の低減にもつながります。「一時的なトレンド」ではなく「長く愛される普遍性」を持つデザインを目指すことが、これからのデザイナーには求められています。</p>
      
      <h2>人間中心のデザイン思考</h2>
      <p>最終的に、デザインの目的は人々の生活をより豊かにすることにあります。そのためには、使い手の行動パターンや心理、文化的背景などを深く理解し、それに基づいた設計を行うことが重要です。</p>
      <p>私自身のデザイン哲学も、常に「人間中心」であることを心がけています。美しさや機能性、持続可能性といった要素は、すべて人々の幸福につながるものでなければなりません。</p>
      <p>これからも、人々の暮らしに寄り添い、日常に小さな喜びをもたらすようなデザインを追求していきたいと考えています。</p>
    `,
    thumbnail: "/images/journal-1.jpg",
    images: [
      {
        src: "/images/journal-1-detail.jpg",
        alt: "デザインと生活",
        caption: "機能性と美しさを両立した住空間"
      },
      {
        src: "/images/journal-1-detail2.jpg",
        alt: "自然光を取り入れた空間",
        caption: "自然光を最大限に活かした明るいリビング"
      }
    ],
    slug: "post-1"
  },
  {
    id: 2,
    title: "素材選びの重要性",
    excerpt: "インテリアデザインにおける素材選びの重要性と、経年変化を楽しむ設計について解説します。",
    date: "2023年11月28日",
    category: "素材",
    author: "大塚 渉",
    content: `
      <p>インテリアデザインにおいて、素材選びは空間の印象を決定づける重要な要素です。色や形だけでなく、素材の持つ質感や経年変化の特性を理解し、適切に選択することで、長く愛される空間を作り出すことができます。</p>
      
      <h2>素材が空間に与える影響</h2>
      <p>素材は視覚的な美しさだけでなく、触感や香り、音の反響など、多様な感覚に訴えかけます。例えば、無垢材の床は足触りの良さと温かみを、石材は冷たさと重厚感を空間にもたらします。これらの特性を理解し、空間の用途や求める雰囲気に合わせて素材を選ぶことが大切です。</p>
      
      <h2>経年変化を楽しむ設計</h2>
      <p>現代の消費社会では「新品の状態」が美しいとされがちですが、本当に価値のある素材は時間とともに味わいを増していくものです。無垢材の色の深まり、真鍮の緑青、レザーのパティーナなど、使い込むほどに美しくなる素材を選ぶことで、時間の経過とともに愛着が増す空間を作ることができます。</p>
      <p>このような「経年変化を楽しむ」という考え方は、日本の伝統的な「侘び・寂び」の美意識にも通じるものがあります。完璧さよりも、時間の流れが生み出す自然な変化に美を見出す価値観は、持続可能な社会においてますます重要になっていくでしょう。</p>
      
      <h2>素材の組み合わせと調和</h2>
      <p>一つの空間に複数の素材を用いる場合、それらの調和も重要な要素となります。対比的な素材の組み合わせ（例：柔らかい木材と硬質な石材）は、互いの特性を引き立て合い、空間に奥行きを生み出します。一方で、あまりに多くの素材を使用すると、空間が落ち着かない印象になることもあるため、バランスが重要です。</p>
      
      <h2>地域性と持続可能性</h2>
      <p>素材選びにおいては、地域で採れる材料を優先的に使用することも一つの視点です。輸送による環境負荷を減らすだけでなく、その土地の風土や文化に根ざした空間づくりにつながります。また、再生可能な資源から作られた素材や、リサイクル素材の活用も、持続可能なデザインの観点から重要です。</p>
      
      <h2>まとめ</h2>
      <p>素材選びは、単なる見た目の問題ではなく、空間の質や持続可能性、そして使い手との長期的な関係性を左右する重要な決断です。一時的なトレンドに流されず、素材の本質的な特性を理解し、時間とともに成熟していく空間づくりを心がけたいものです。</p>
    `,
    thumbnail: "/images/journal-2.jpg",
    images: [
      {
        src: "/images/journal-2-detail.jpg",
        alt: "無垢材の経年変化",
        caption: "10年使用した無垢材のダイニングテーブル"
      },
      {
        src: "/images/journal-2-detail2.jpg",
        alt: "素材の組み合わせ",
        caption: "木材、石材、金属を調和させたキッチン"
      }
    ],
    slug: "post-2"
  },
  // 他の記事データも同様に定義...
];

export async function generateMetadata({ params }: { params: { slug: string } }) {
  // paramsを非同期で扱う
  const slug = params.slug;
  const post = posts.find(p => p.slug === slug);
  
  if (!post) {
    return {
      title: '記事が見つかりません | 暮らしとデザイン',
      description: 'お探しの記事は見つかりませんでした。',
    };
  }
  
  return {
    title: `${post.title} | 暮らしとデザイン`,
    description: post.excerpt,
  };
}

export default function PostDetail({ params }: { params: { slug: string } }) {
  // paramsを非同期で扱う
  const slug = params.slug;
  const post = posts.find(p => p.slug === slug);
  
  if (!post) {
    notFound();
  }
  
  return (
    <div className="py-24">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* 記事ヘッダー */}
        <header className="mb-12">
          <div className="mb-6">
            <Link href="/journal" className="text-gray-500 hover:text-gray-900 transition-colors flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              ジャーナル一覧に戻る
            </Link>
          </div>
          
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm text-gray-500">{post.date}</span>
            <span className="text-sm px-3 py-1 bg-gray-100 text-gray-700">{post.category}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-playfair mb-6">{post.title}</h1>
          
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <Image 
                src="/images/profile-small.jpg" 
                alt={post.author} 
                fill 
                className="object-cover"
                unoptimized // 開発中は最適化をオフにする
              />
            </div>
            <div>
              <p className="font-medium">{post.author}</p>
              <p className="text-sm text-gray-500">インテリアデザイナー</p>
            </div>
          </div>
        </header>
        
        {/* メイン画像 */}
        <div className="relative aspect-[16/9] mb-12">
          <Image 
            src={post.thumbnail} 
            alt={post.title} 
            fill 
            className="object-cover"
            priority
            unoptimized // 開発中は最適化をオフにする
          />
        </div>
        
        {/* 記事本文 */}
        <div className="prose prose-lg max-w-none mb-16" dangerouslySetInnerHTML={{ __html: post.content }} />
        
        {/* 画像ギャラリー */}
        {post.images && post.images.length > 0 && (
          <div className="my-16">
            <h2 className="text-2xl font-playfair mb-8">関連画像</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {post.images.map((image, index) => (
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
          </div>
        )}
        
        {/* 関連記事 */}
        <div className="mt-24 pt-12 border-t border-gray-100">
          <h2 className="text-2xl font-playfair mb-8">関連記事</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts
              .filter(p => p.id !== post.id)
              .slice(0, 3)
              .map((relatedPost) => (
                <div key={relatedPost.id}>
                  <Link href={`/journal/${relatedPost.slug}`} className="block group">
                    <div className="relative aspect-[16/9] mb-4 overflow-hidden">
                      <Image 
                        src={relatedPost.thumbnail} 
                        alt={relatedPost.title} 
                        fill 
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        unoptimized // 開発中は最適化をオフにする
                      />
                    </div>
                    <h3 className="text-lg font-medium mb-2 group-hover:text-gray-600 transition-colors">{relatedPost.title}</h3>
                    <p className="text-sm text-gray-500">{relatedPost.date}</p>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
} 