import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: 'お問い合わせ | プロジェクトのご相談',
  description: 'デザインプロジェクトのご相談やお問い合わせはこちらから。あなたの想いをカタチにするお手伝いをいたします。',
}

export default function Contact() {
  return (
    <div className="py-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <header className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-playfair mb-6">お問い合わせ</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            プロジェクトのご相談やお問い合わせはこちらから。あなたの想いをカタチにするお手伝いをいたします。
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* お問い合わせフォーム */}
          <div>
            <h2 className="text-2xl font-playfair mb-8">メッセージを送る</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">お名前（姓）<span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    id="firstName" 
                    className="w-full px-4 py-2 border border-gray-300 focus:border-gray-900 focus:outline-none" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">お名前（名）<span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    id="lastName" 
                    className="w-full px-4 py-2 border border-gray-300 focus:border-gray-900 focus:outline-none" 
                    required 
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">メールアドレス<span className="text-red-500">*</span></label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-gray-300 focus:border-gray-900 focus:outline-none" 
                  required 
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">電話番号（任意）</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-2 border border-gray-300 focus:border-gray-900 focus:outline-none" 
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">件名<span className="text-red-500">*</span></label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-2 border border-gray-300 focus:border-gray-900 focus:outline-none" 
                  required 
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">メッセージ<span className="text-red-500">*</span></label>
                <textarea 
                  id="message" 
                  rows={6} 
                  className="w-full px-4 py-2 border border-gray-300 focus:border-gray-900 focus:outline-none" 
                  required
                ></textarea>
              </div>
              
              <div>
                <button 
                  type="submit" 
                  className="px-8 py-3 bg-gray-900 text-white hover:bg-gray-800 transition-colors"
                >
                  送信する
                </button>
              </div>
            </form>
          </div>
          
          {/* 連絡先情報 */}
          <div>
            <h2 className="text-2xl font-playfair mb-8">連絡先情報</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium mb-2">住所</h3>
                <p className="text-gray-600">
                  〒150-0001<br />
                  東京都渋谷区神宮前5-1-1<br />
                  デザインスタジオビル 3F
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">電話番号</h3>
                <p className="text-gray-600">03-1234-5678</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">メールアドレス</h3>
                <p className="text-gray-600">info@example.com</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">営業時間</h3>
                <p className="text-gray-600">
                  月曜日〜金曜日: 10:00 - 18:00<br />
                  土曜日・日曜日・祝日: 休業
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">SNS</h3>
                <div className="flex gap-4">
                  <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* 地図セクション */}
        <section className="mb-24">
          <h2 className="text-3xl font-playfair mb-8 text-center">アクセス</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-[4/3] w-full">
              <Image 
                src="/images/map.jpg" 
                alt="スタジオの地図" 
                fill 
                className="object-cover"
                unoptimized // 開発中は最適化をオフにする
              />
            </div>
            <div>
              <h3 className="text-xl font-medium mb-4">スタジオへのアクセス</h3>
              <p className="text-gray-600 mb-6">
                最寄り駅の明治神宮前駅から徒歩5分。表参道駅からも徒歩10分の場所にあります。
                緑豊かな神宮前エリアに位置し、閑静な環境の中でデザインについてじっくりとお話しできる空間をご用意しています。
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="text-gray-900 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">明治神宮前駅からのアクセス</h4>
                    <p className="text-gray-600">
                      2番出口を出て、表参道方面に向かって徒歩5分。
                      デザインスタジオビルの3階がスタジオです。
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-gray-900 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">表参道駅からのアクセス</h4>
                    <p className="text-gray-600">
                      A2出口を出て、明治通り沿いを北へ徒歩10分。
                      神宮前交差点を右折し、50mほど進んだ左手のビルです。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* よくある質問 */}
        <section>
          <h2 className="text-3xl font-playfair mb-12 text-center">よくある質問</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h3 className="text-xl font-medium mb-3">どのようなプロジェクトを手がけていますか？</h3>
              <p className="text-gray-600">
                住宅、オフィス、商業施設、カフェ・レストラン、ホテルなど、様々な空間のデザインを手がけています。
                規模の大小を問わず、クライアントの想いに寄り添ったデザインを提案いたします。
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-3">料金はどのように決まりますか？</h3>
              <p className="text-gray-600">
                プロジェクトの規模や内容によって異なります。初回のご相談時に、ご要望をお伺いした上で
                お見積りをご提示いたします。まずはお気軽にご相談ください。
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-3">遠方でも対応可能ですか？</h3>
              <p className="text-gray-600">
                はい、日本全国どこでも対応可能です。オンラインでの打ち合わせも行っておりますので、
                まずはお問い合わせください。現地調査が必要な場合は、別途交通費をいただく場合があります。
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-3">プロジェクトの期間はどのくらいですか？</h3>
              <p className="text-gray-600">
                プロジェクトの規模や内容によって異なりますが、一般的な住宅リノベーションの場合、
                設計期間が1〜2ヶ月、施工期間が2〜3ヶ月程度です。詳細はご相談時にお伝えいたします。
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 