import type { Metadata } from 'next';
import { CorporateFooter, CorporateHeader } from '../_components/CorporateChrome';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const asset = (path: string) => `${basePath}${path}`;

export const metadata: Metadata = {
  title: '企業情報 | CREST VOLT株式会社',
  description: 'CREST VOLT株式会社の企業理念、存在意義、使命、ビジョン、会社概要をご紹介します。',
  openGraph: {
    title: '企業情報 | CREST VOLT株式会社',
    description: 'エネルギー資産の開発・投資・建設・制御・運用を一貫して担う、次世代エネルギーインフラ企業。',
    images: [],
  },
  twitter: { card: 'summary', images: [] },
};

export default function CompanyPage() {
  return (
    <main className="corporate-page">
      <CorporateHeader active="company" />

      <section className="page-hero company-hero">
        <div className="page-hero-copy">
          <p><span>01</span> COMPANY</p>
          <h1>企業情報</h1>
          <h2>エネルギーの未来を、<br />確かな技術で。</h2>
          <p className="page-lead">山の頂〈CREST〉を目指し、最高水準の品質と信頼性で、日本の次代を支えるエネルギー基盤を構築します。</p>
        </div>
        <div className="page-hero-image"><img src={asset('/images/hero-vision-v2.png')} alt="富士山と再生可能エネルギーインフラ" /></div>
        <div className="page-breadcrumb"><a href={asset('/')}>HOME</a><span>／</span><b>COMPANY</b></div>
      </section>

      <section className="company-purpose formal-shell">
        <div className="formal-label"><span>01</span><b>OUR PURPOSE</b></div>
        <div className="purpose-heading"><p>存在意義</p><h2>持続可能で強靭な、<br />社会インフラをつくる。</h2></div>
        <div className="purpose-copy"><p>CREST VOLTは、発電・蓄電・充電・制御を統合し、より安全で効率的なエネルギー環境を実現します。</p><p>設備を販売するだけではなく、エネルギー資産の開発、投資、建設、制御、長期運用までを担い、社会と事業に持続的な価値を生み出します。</p></div>
      </section>

      <section className="philosophy-official formal-shell">
        <div className="formal-label"><span>02</span><b>PHILOSOPHY</b></div>
        <div className="official-principles">
          <article><span>PURPOSE</span><small>存在意義</small><h3>社会基盤を構築する。</h3><p>エネルギー技術を通じて、持続可能で強靭な社会インフラを構築する。</p></article>
          <article><span>MISSION</span><small>使命</small><h3>発電・蓄電・充電・制御を統合する。</h3><p>より安全で効率的なエネルギー環境を、技術と運用の両面から実現する。</p></article>
          <article><span>VISION</span><small>目指す姿</small><h3>日本を代表する企業へ。</h3><p>日本の次代を支える、信頼されるエネルギーインフラ企業を目指す。</p></article>
        </div>
      </section>

      <section className="company-profile formal-shell">
        <div className="formal-label"><span>03</span><b>COMPANY PROFILE</b></div>
        <div className="profile-heading"><p>会社概要</p><h2>CREST VOLT株式会社</h2></div>
        <dl>
          <div><dt>会社名</dt><dd>CREST VOLT株式会社</dd></div>
          <div><dt>英文名称</dt><dd>CREST VOLT Inc.</dd></div>
          <div><dt>読み方</dt><dd>クレストヴォルト株式会社</dd></div>
          <div><dt>企業定位</dt><dd>次世代エネルギーインフラ企業</dd></div>
          <div><dt>事業領域</dt><dd>太陽光発電／蓄電システム／EV充電インフラ／エネルギーEPC／エネルギー開発・投資／技術開発</dd></div>
          <div><dt>お問い合わせ</dt><dd><a href="mailto:info@crestvolt.co.jp">info@crestvolt.co.jp</a></dd></div>
        </dl>
      </section>

      <section className="formal-next"><div><span>NEXT</span><p>事業領域</p><h2>BUSINESS</h2></div><a href={asset('/business')}>VIEW BUSINESS <b>↗</b></a></section>
      <CorporateFooter />
    </main>
  );
}
