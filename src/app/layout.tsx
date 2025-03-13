import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'ポートフォリオサイト | インテリアデザイナー',
  description: 'インテリアデザイナーのポートフォリオサイトです。住宅、オフィス、商業施設など、様々な空間デザインを手がけています。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

// next.config.jsに以下の設定を追加することで、画像が見つからない場合のエラーを防ぐことができます
// module.exports = {
//   images: {
//     unoptimized: true,
//   },
// };
