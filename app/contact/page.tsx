import type { Metadata } from 'next';
import { CorporateFooter, CorporateHeader } from '../_components/CorporateChrome';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const asset = (path: string) => `${basePath}${path}`;

export const metadata: Metadata = {
  title: 'お問い合わせ | CREST VOLT株式会社',
  description: '太陽光、蓄電、EV充電インフラ、EPC、投資開発、技術連携に関するCREST VOLTへのお問い合わせ。',
  openGraph: { title: 'お問い合わせ | CREST VOLT株式会社', description: '次のエネルギー基盤を、ともにつくる。', images: [] },
  twitter: { card: 'summary', images: [] },
};

export default function ContactPage() {
  return (
    <main className="corporate-page contact-page">
      <CorporateHeader active="contact" />
      <section className="contact-official formal-shell">
        <div className="contact-official-intro"><div className="formal-label"><span>06</span><b>CONTACT</b></div><h1>次のエネルギー基盤を、<br />ともにつくる。</h1><p>太陽光、蓄電、EV充電インフラ、EPC、投資開発、技術連携に関するご相談をお待ちしています。</p></div>
        <div className="contact-categories"><p>お問い合わせ分野</p><div><span>01</span><b>再生可能エネルギー開発</b></div><div><span>02</span><b>蓄電システム・C-ESS</b></div><div><span>03</span><b>EV充電インフラ・C-CHARGE</b></div><div><span>04</span><b>エネルギーEPC・O&amp;M</b></div><div><span>05</span><b>共同投資・事業開発</b></div><div><span>06</span><b>技術連携・CREST VOLT LAB</b></div></div>
        <div className="contact-channel"><span>EMAIL</span><h2>info@crestvolt.co.jp</h2><p>お問い合わせ内容を確認後、担当者よりご連絡いたします。</p><a href="mailto:info@crestvolt.co.jp?subject=CREST%20VOLTへのお問い合わせ">メールで問い合わせる <b>↗</b></a></div>
      </section>
      <section className="contact-company formal-shell"><div><img src={asset('/images/crest-volt-logo-stacked.png')} alt="CREST VOLT" /></div><div><span>COMPANY</span><h2>CREST VOLT株式会社</h2><p>クレストヴォルト株式会社<br />次世代エネルギーインフラ企業</p><a href={asset('/company')}>企業情報を見る ↗</a></div></section>
      <CorporateFooter />
    </main>
  );
}
