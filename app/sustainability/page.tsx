import type { Metadata } from 'next';
import { CorporateFooter, CorporateHeader } from '../_components/CorporateChrome';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const asset = (path: string) => `${basePath}${path}`;

export const metadata: Metadata = {
  title: 'サステナビリティ | CREST VOLT株式会社',
  description: '環境、社会、ガバナンスの視点から、責任あるエネルギーの未来を構築するCREST VOLTの取り組み。',
  openGraph: { title: 'サステナビリティ | CREST VOLT株式会社', description: 'Responsible Energy Future — 技術と長期運用で、持続可能な社会基盤を。', images: [] },
  twitter: { card: 'summary', images: [] },
};

export default function SustainabilityPage() {
  return (
    <main className="corporate-page">
      <CorporateHeader active="sustainability" />
      <section className="page-hero sustainability-page-hero">
        <div className="page-hero-copy"><p><span>05</span> SUSTAINABILITY</p><h1>サステナビリティ</h1><h2>責任あるエネルギーで、<br />より良い未来へ。</h2><p className="page-lead">環境、社会、ガバナンスを事業運営の基盤に置き、長期的に信頼されるエネルギーインフラを構築します。</p></div>
        <div className="page-hero-image"><img src={asset('/images/hero-vision-v2.png')} alt="自然と共生する再生可能エネルギー" /></div>
        <div className="page-breadcrumb"><a href={asset('/')}>HOME</a><span>／</span><b>SUSTAINABILITY</b></div>
      </section>

      <section className="esg-official formal-shell">
        <div className="formal-label"><span>01</span><b>ESG COMMITMENT</b></div>
        <div className="formal-intro"><p>RESPONSIBLE ENERGY FUTURE</p><h2>社会を支える責任を、<br />すべての事業に。</h2><div><p>エネルギーは、暮らしと産業を支える社会基盤です。</p><p>CREST VOLTは、環境負荷の低減、エネルギー安全性の向上、透明性ある運営を、事業と技術の両面から推進します。</p></div></div>
        <div className="esg-grid"><article><span>E</span><b>ENVIRONMENT</b><h3>環境</h3><p>再生可能エネルギーの普及、蓄電による利用効率向上、ライフサイクルでの環境負荷低減。</p></article><article><span>S</span><b>SOCIAL</b><h3>社会</h3><p>エネルギー安全性、地域レジリエンス、安全な設備運用、長期的なパートナーシップ。</p></article><article><span>G</span><b>GOVERNANCE</b><h3>ガバナンス</h3><p>透明性ある事業運営、リスク管理、法令遵守、責任ある投資・調達・データ管理。</p></article></div>
      </section>

      <section className="quality-policy formal-shell">
        <div className="formal-label"><span>02</span><b>QUALITY &amp; SAFETY</b></div>
        <div className="quality-layout"><div><p>QUALITY FIRST</p><h2>長期運用を見据えた、<br />品質と安全。</h2></div><div className="quality-list"><article><span>01</span><h3>システム設計</h3><p>運用条件・保守性・拡張性を踏まえた設計。</p></article><article><span>02</span><h3>設備選定</h3><p>安全性、信頼性、ライフサイクルコストを重視。</p></article><article><span>03</span><h3>安全管理</h3><p>建設から運転まで、一貫した安全基準を適用。</p></article><article><span>04</span><h3>ライフサイクル管理</h3><p>遠隔監視、予知保全、更新計画で長期価値を維持。</p></article></div></div>
      </section>

      <section className="formal-next"><div><span>NEXT</span><p>お問い合わせ</p><h2>CONTACT</h2></div><a href={asset('/contact')}>CONTACT US <b>↗</b></a></section>
      <CorporateFooter />
    </main>
  );
}
