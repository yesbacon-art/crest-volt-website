import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CREST VOLT株式会社 | 未来価値を創造するエネルギー企業',
  description: '再生可能エネルギーの開発・投資・技術・運用を通じ、持続可能な未来価値を創造するCREST VOLT株式会社。',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://crestvolt.co.jp'),
  openGraph: {
    title: 'CREST VOLT | エネルギーの力で、未来価値を創造する。',
    description: '再生可能エネルギーの開発・投資・技術・運用をつなぐ、日本発の次世代エネルギー企業。',
    type: 'website',
    locale: 'ja_JP',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'CREST VOLT' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CREST VOLT | エネルギーの力で、未来価値を創造する。',
    description: '再生可能エネルギーの開発・投資・技術・運用をつなぐ、日本発の次世代エネルギー企業。',
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
