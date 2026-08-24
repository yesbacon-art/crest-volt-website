import type { Metadata } from 'next';
import { CorporateFooter, CorporateHeader } from '../_components/CorporateChrome';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const asset = (path: string) => `${basePath}${path}`;

export const metadata: Metadata = {
  title: '投資・成長戦略 | CREST VOLT株式会社',
  description: '再生可能エネルギー、蓄電、EVインフラ、エネルギーマネジメントを対象とするCREST VOLTの投資・成長戦略。',
  openGraph: { title: '投資・成長戦略 | CREST VOLT株式会社', description: '次世代のためのエネルギー資産を、長期視点で開発・投資・運用します。', images: [] },
  twitter: { card: 'summary', images: [] },
};

export default function InvestmentPage() {
  return (
    <main className="corporate-page">
      <CorporateHeader active="investment" />
      <section className="page-hero investment-page-hero">
        <div className="page-hero-copy"><p><span>04</span> INVESTMENT</p><h1>投資・成長戦略</h1><h2>次世代のための、<br />エネルギー資産を。</h2><p className="page-lead">安定性、成長性、社会価値を備えたエネルギーインフラを、長期視点で開発・投資・運用します。</p></div>
        <div className="page-hero-image"><img src={asset('/images/hero-vision-v2.png')} alt="富士山と再生可能エネルギー資産" /></div>
        <div className="page-breadcrumb"><a href={asset('/')}>HOME</a><span>／</span><b>INVESTMENT</b></div>
      </section>

      <section className="investment-thesis formal-shell">
        <div className="formal-label"><span>01</span><b>INVESTMENT THESIS</b></div>
        <div className="formal-intro"><p>ENERGY ASSETS FOR THE NEXT GENERATION</p><h2>社会価値を、<br />長期の資産価値へ。</h2><div><p>エネルギー転換は、設備の導入だけでは実現しません。</p><p>CREST VOLTは、技術・資本・運用を統合し、社会に必要とされ続けるインフラを、持続的な投資対象へ育てます。</p></div></div>
        <div className="thesis-grid"><article><span>01</span><b>STABILITY</b><h3>安定性</h3><p>長期運用と電力需要に基づく、安定的なキャッシュフロー。</p></article><article><span>02</span><b>GROWTH</b><h3>成長性</h3><p>再エネ、蓄電、EV、電力デジタル化が生む構造的な需要。</p></article><article><span>03</span><b>SOCIAL VALUE</b><h3>社会価値</h3><p>脱炭素、エネルギー安全保障、地域レジリエンスへの貢献。</p></article></div>
      </section>

      <section className="asset-classes formal-shell">
        <div className="formal-label"><span>02</span><b>INVESTMENT FIELDS</b></div>
        <h2>投資対象</h2>
        <div className="asset-class-grid"><article><span>01</span><h3>Solar Power</h3><p>太陽光発電・自家消費・PPA資産</p></article><article><span>02</span><h3>Battery Storage</h3><p>系統用・産業用・光蓄一体型BESS</p></article><article><span>03</span><h3>EV Infrastructure</h3><p>急速充電・企業フリート・施設ネットワーク</p></article><article><span>04</span><h3>Energy Management</h3><p>EMS・VPP・エネルギーデータ基盤</p></article></div>
      </section>

      <section className="development-process formal-shell">
        <div className="formal-label"><span>03</span><b>PROJECT DEVELOPMENT</b></div>
        <div className="formal-intro"><p>FROM OPPORTUNITY TO ASSET VALUE</p><h2>案件を見つけ、<br />資産として育てる。</h2><div><p>土地・系統・需要から事業機会を発見し、技術・収益・リスクを設計。</p><p>投資後もデータと運用で資産価値を高め、長期的な成果につなげます。</p></div></div>
        <div className="development-flow">{[['01','DISCOVER','機会発見'],['02','PLAN','事業設計'],['03','INVEST','投資・組成'],['04','BUILD','建設・統合'],['05','OPERATE','長期運用']].map(([no,en,jp],i)=><div key={no}><span>{no}</span><b>{en}</b><small>{jp}</small>{i<4 ? <i>→</i> : null}</div>)}</div>
      </section>

      <section className="partnership-official formal-shell">
        <div className="formal-label"><span>04</span><b>CO-CREATION PARTNERSHIP</b></div>
        <div className="formal-intro"><p>BUILDING ENERGY ECOSYSTEMS</p><h2>共創で、<br />エネルギーの未来をつくる。</h2><div><p>一社だけでエネルギーの未来はつくれません。</p><p>自治体、金融機関、土地所有者、企業顧客、技術パートナーと、地域に根ざした持続可能な事業を構築します。</p></div></div>
        <div className="partner-list"><div><span>01</span><b>政府・自治体</b><p>地域エネルギー計画</p></div><div><span>02</span><b>金融機関</b><p>プロジェクトファイナンス</p></div><div><span>03</span><b>土地所有者</b><p>エネルギー資産開発</p></div><div><span>04</span><b>企業顧客</b><p>エネルギーソリューション</p></div><div><span>05</span><b>技術パートナー</b><p>共同研究・システム統合</p></div></div>
      </section>

      <section className="formal-next"><div><span>NEXT</span><p>サステナビリティ</p><h2>SUSTAINABILITY</h2></div><a href={asset('/sustainability')}>VIEW SUSTAINABILITY <b>↗</b></a></section>
      <CorporateFooter />
    </main>
  );
}
