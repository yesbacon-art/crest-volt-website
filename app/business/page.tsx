import type { Metadata } from 'next';
import { CorporateFooter, CorporateHeader } from '../_components/CorporateChrome';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const asset = (path: string) => `${basePath}${path}`;

export const metadata: Metadata = {
  title: '事業領域 | CREST VOLT株式会社',
  description: '太陽光発電、蓄電システム、EV充電インフラ、エネルギーEPC、エネルギー開発・投資を展開するCREST VOLTの事業領域。',
  openGraph: { title: '事業領域 | CREST VOLT株式会社', description: '5つの事業基盤を統合し、長期的なエネルギー資産価値を創造します。', images: [] },
  twitter: { card: 'summary', images: [] },
};

const businesses = [
  ['01', 'SOLAR ENERGY SOLUTIONS', '太陽光発電事業', '産業用屋根・地上設置・自家消費型・PPAから、高圧／特別高圧まで。開発・EPC・O&Mを一貫して提供します。'],
  ['02', 'CREST VOLT STORAGE', '蓄電システム事業', '系統用BESS、工業・商業用蓄電、光蓄一体化、需給調整。電力の安定性と事業価値を同時に高めます。'],
  ['03', 'EV CHARGING INFRASTRUCTURE', 'EV充電インフラ事業', '設計・設備・電気工事・エネルギー管理・保守まで。施設とモビリティを統合して支えます。'],
  ['04', 'ENERGY EPC', 'エネルギーEPC事業', '設計、調達、建設、試運転、O&M。長期運用を見据えた品質で、設備を社会インフラへ変えます。'],
  ['05', 'INVESTMENT & DEVELOPMENT', 'エネルギー開発・投資事業', '案件開発、SPC、共同投資、M&A、PPA資産。資本と技術でエネルギーインフラを育てます。'],
];

export default function BusinessPage() {
  return (
    <main className="corporate-page">
      <CorporateHeader active="business" />
      <section className="page-hero business-page-hero">
        <div className="page-hero-copy"><p><span>02</span> BUSINESS</p><h1>事業領域</h1><h2>設備から資産へ。<br />5つの事業を、ひとつに。</h2><p className="page-lead">発電・蓄電・充電・工程・資本を統合し、エネルギーインフラの価値を最大化します。</p></div>
        <div className="page-hero-image"><img src={asset('/images/c-ess-grid.png')} alt="CREST VOLT 系統用蓄電システム" /></div>
        <div className="page-breadcrumb"><a href={asset('/')}>HOME</a><span>／</span><b>BUSINESS</b></div>
      </section>

      <section className="business-overview formal-shell">
        <div className="formal-label"><span>01</span><b>BUSINESS PORTFOLIO</b></div>
        <div className="formal-intro"><p>5 BUSINESS DOMAINS</p><h2>事業の専門性を、<br />統合する力。</h2><div><p>CREST VOLTは、単一設備の販売会社でも、施工だけを担う会社でもありません。</p><p>事業開発、投資、EPC、デジタル制御、長期運用を横断し、地域・企業・電力系統に最適なエネルギー基盤を構築します。</p></div></div>
        <div className="business-list-official">{businesses.map(([no,en,jp,copy]) => <article key={no}><span>{no}</span><div><b>{en}</b><h3>{jp}</h3></div><p>{copy}</p><i>↗</i></article>)}</div>
      </section>

      <section className="storage-official">
        <div className="storage-photo"><img src={asset('/images/c-ess-grid.png')} alt="C-ESS GRID 大型蓄電システム" /></div>
        <div className="storage-content"><div className="formal-label"><span>02</span><b>CORE BUSINESS / STORAGE</b></div><p className="formal-kicker">CREST VOLT STORAGE</p><h2>Generate × Store × Control</h2><h3>電力を蓄え、事業の可能性を拓く。</h3><p>再生可能エネルギーの変動を吸収し、電力を必要な時に、必要な場所へ。ハードウェア、C-EMS、運用を一体で設計します。</p></div>
        <div className="storage-products formal-shell">
          <article><span>01 / RESIDENTIAL</span><h3>C-ESS HOME</h3><p>住宅用蓄電システム</p><b>5–15kWh</b></article>
          <article><span>02 / COMMERCIAL</span><h3>C-ESS C&amp;I</h3><p>工業・商業用蓄電システム</p><b>215kWh–</b></article>
          <article><span>03 / UTILITY</span><h3>C-ESS GRID</h3><p>系統用大型蓄電システム</p><b>GRID SCALE</b></article>
        </div>
      </section>

      <section className="ev-official formal-shell">
        <div className="ev-official-copy"><div className="formal-label"><span>03</span><b>EV ENERGY INFRASTRUCTURE</b></div><p className="formal-kicker">C-CHARGE</p><h2>充電から、<br />未来のエネルギーへ。</h2><p>充電設備だけではなく、再生可能エネルギー、蓄電、施設エネルギー管理を統合。企業・地域・モビリティをつなぐエネルギーネットワークを構築します。</p><ul><li>高出力急速充電</li><li>企業フリート管理</li><li>商業施設エネルギー管理</li><li>光・蓄・充一体化</li></ul></div>
        <div className="ev-official-photo"><img src={asset('/images/c-charge-station.png')} alt="CREST VOLT C-CHARGE EV急速充電ステーション" /></div>
      </section>

      <section className="epc-official formal-shell">
        <div className="formal-label"><span>04</span><b>ENERGY EPC / QUALITY</b></div>
        <div className="formal-intro"><p>LIFECYCLE QUALITY</p><h2>一度つくって、<br />長く支える。</h2><div><p>長期運用から逆算し、安全性、品質、保守性、更新性を設計段階から組み込みます。</p><p>設備選定から試運転、データを活用したO&Mまで、ライフサイクル全体に責任を持ちます。</p></div></div>
        <div className="epc-stages">{['ENGINEERING','PROCUREMENT','CONSTRUCTION','COMMISSIONING','O&M'].map((item,index)=><div key={item}><span>0{index+1}</span><strong>{item}</strong>{index<4 ? <i>→</i> : null}</div>)}</div>
      </section>

      <section className="formal-next"><div><span>NEXT</span><p>技術開発</p><h2>TECHNOLOGY</h2></div><a href={asset('/technology')}>VIEW TECHNOLOGY <b>↗</b></a></section>
      <CorporateFooter />
    </main>
  );
}
