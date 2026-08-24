import type { Metadata } from 'next';
import { CorporateFooter, CorporateHeader } from '../_components/CorporateChrome';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const asset = (path: string) => `${basePath}${path}`;

export const metadata: Metadata = {
  title: '技術開発 | CREST VOLT株式会社',
  description: 'C-EMS、AI Energy Cloud、VPP、Energy IoTを軸とするCREST VOLT LABの技術開発。',
  openGraph: { title: '技術開発 | CREST VOLT株式会社', description: '発電・蓄電・充電をデータでつなぎ、エネルギー資産を最適制御します。', images: [] },
  twitter: { card: 'summary', images: [] },
};

export default function TechnologyPage() {
  return (
    <main className="corporate-page">
      <CorporateHeader active="technology" />
      <section className="page-hero technology-page-hero">
        <div className="page-hero-copy"><p><span>03</span> TECHNOLOGY</p><h1>技術開発</h1><h2>設備をつなぎ、<br />エネルギーを知能化する。</h2><p className="page-lead">データ、予測、制御、運用を統合し、エネルギー資産の安全性・効率・収益性を継続的に高めます。</p></div>
        <div className="page-hero-image"><img src={asset('/images/hero-vision-v2.png')} alt="日本の再生可能エネルギーインフラ" /></div>
        <div className="page-breadcrumb"><a href={asset('/')}>HOME</a><span>／</span><b>TECHNOLOGY</b></div>
      </section>

      <section className="lab-official formal-shell">
        <div className="formal-label"><span>01</span><b>CREST VOLT LAB</b></div>
        <div className="formal-intro"><p>TECHNOLOGY DEVELOPMENT CENTER</p><h2>Energy × Digital × Asset</h2><div><p>エネルギーの未来は、単一の設備ではつくれません。</p><p>エネルギー資産、データシステム、智能制御、長期運用を統合し、Smart Energy Platformを構築します。</p></div></div>
        <div className="lab-official-grid">
          <article><span>01</span><b>C-EMS</b><h3>Energy Management System</h3><p>発電・需要予測、蓄電制御、ピーク制御、運転計画を一体化。</p></article>
          <article><span>02</span><b>AI ENERGY CLOUD</b><h3>Energy Data Platform</h3><p>AI予測、遠隔監視、異常検知、資産パフォーマンスをクラウドで統合。</p></article>
          <article><span>03</span><b>VPP</b><h3>Virtual Power Plant</h3><p>分散する発電・蓄電・EV設備を束ね、ひとつの電力資源として制御。</p></article>
          <article><span>04</span><b>ENERGY IoT</b><h3>Connected Infrastructure</h3><p>現場設備を安全につなぎ、予知保全とライフサイクル最適化を実現。</p></article>
        </div>
      </section>

      <section className="control-platform formal-shell">
        <div className="control-copy"><div className="formal-label"><span>02</span><b>C-EMS CONTROL PLATFORM</b></div><p className="formal-kicker">FORECAST × CONTROL × OPTIMIZE</p><h2>エネルギー資産を、<br />ひとつの知能へ。</h2><p>太陽光、蓄電池、電力系統、EV、需要設備をリアルタイムで把握。予測と制御を組み合わせ、運用価値を最大化します。</p></div>
        <div className="control-diagram">
          <div className="control-center"><small>CREST VOLT LAB</small><strong>C-EMS</strong><span>AI ASSET CONTROL</span></div>
          <div className="control-node cn1"><b>PV</b><span>GENERATE</span></div><div className="control-node cn2"><b>ESS</b><span>STORE</span></div><div className="control-node cn3"><b>GRID</b><span>EXCHANGE</span></div><div className="control-node cn4"><b>EV</b><span>CHARGE</span></div>
        </div>
      </section>

      <section className="technology-roadmap formal-shell">
        <div className="formal-label"><span>03</span><b>R&amp;D ROADMAP</b></div>
        <div className="formal-intro"><p>FROM CONTROL TO PLATFORM</p><h2>分散エネルギーから、<br />社会の電力基盤へ。</h2><div><p>現在のC-EMSを起点に、AI予測、VPP、デマンドレスポンス、V2Gへ。</p><p>実際のエネルギー資産で得られる運用データを、次の技術開発へ循環させます。</p></div></div>
        <div className="rd-phases"><article><span>PHASE 01</span><b>2026—2028</b><h3>CONNECTED ASSETS</h3><p>C-EMS、遠隔監視、蓄電最適制御</p></article><article><span>PHASE 02</span><b>2028—2030</b><h3>AI ENERGY CLOUD</h3><p>AI予測、予知保全、資産最適化</p></article><article><span>PHASE 03</span><b>2030＋</b><h3>VPP / V2G</h3><p>分散電源、EV、電力市場の統合</p></article></div>
      </section>

      <section className="formal-next"><div><span>NEXT</span><p>投資・成長戦略</p><h2>INVESTMENT</h2></div><a href={asset('/investment')}>VIEW INVESTMENT <b>↗</b></a></section>
      <CorporateFooter />
    </main>
  );
}
