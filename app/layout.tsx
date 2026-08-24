import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CREST VOLT株式会社 | エネルギーの未来を、確かな技術で。',
  description: '発電・蓄電・充電・制御を統合し、持続可能で強靭な社会基盤を構築する次世代エネルギーインフラ企業、CREST VOLT株式会社。',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://crestvolt.co.jp'),
  openGraph: {
    title: 'CREST VOLT | エネルギーの未来を、確かな技術で。',
    description: '太陽光、蓄電、EVインフラ、EPC、投資開発をつなぐ、日本発の次世代エネルギーインフラ企業。',
    type: 'website',
    locale: 'ja_JP',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'CREST VOLT — エネルギーの未来を、確かな技術で。' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CREST VOLT | エネルギーの未来を、確かな技術で。',
    description: '太陽光、蓄電、EVインフラ、EPC、投資開発をつなぐ、日本発の次世代エネルギーインフラ企業。',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
