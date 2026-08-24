const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const asset = (path: string) => `${basePath}${path}`;

const valueChain = [
  ['01', 'DEVELOP', '事業開発'],
  ['02', 'INVEST', '投資・組成'],
  ['03', 'ENGINEER', '設計・建設'],
  ['04', 'CONTROL', '統合制御'],
  ['05', 'OPERATE', '長期運用'],
];

const businessIndex = [
  ['01', 'SOLAR', '太陽光発電'],
  ['02', 'STORAGE', '蓄電システム'],
  ['03', 'EV INFRA', 'EV充電インフラ'],
  ['04', 'ENERGY EPC', 'エネルギーEPC'],
  ['05', 'INVESTMENT', '開発・投資'],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="CREST VOLT ホーム">
          <img src={asset('/images/crest-volt-logo-horizontal.png')} alt="CREST VOLT" />
        </a>
        <nav className="main-nav" aria-label="メインナビゲーション">
          <a href="#about">企業情報</a><a href="#business">事業領域</a><a href="#technology">技術開発</a><a href="#strategy">投資・成長戦略</a>
        </nav>
        <div className="header-meta"><span>JP</span><i />日本語</div>
        <a className="header-cta" href="#contact"><span>CONTACT</span><b>↗</b></a>
        <details className="mobile-menu">
          <summary>MENU <span>＋</span></summary>
          <div><a href="#about">企業情報</a><a href="#business">事業領域</a><a href="#technology">技術開発</a><a href="#strategy">投資・成長戦略</a><a href="#contact">お問い合わせ</a></div>
        </details>
      </header>

      <section className="hero" id="top">
        <img className="hero-image" src={asset('/images/hero-vision-v2.png')} alt="富士山、太陽光発電、風力発電、蓄電設備、EV充電をつなぐCREST VOLTのエネルギービジョン" />
        <div className="hero-shade" /><div className="hero-grid" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow"><span>CREST VOLT / JAPAN</span><b>NEXT-GENERATION ENERGY INFRASTRUCTURE</b></p>
          <h1>エネルギーの未来を、<br /><em>確かな技術で。</em></h1>
          <p className="hero-copy">発電・蓄電・充電・制御を統合し、<br />日本の次代を支えるエネルギー基盤をつくる。</p>
          <div className="hero-actions"><a className="primary-button" href="#business"><small>OUR BUSINESS</small>事業領域を見る <span>↗</span></a><a className="text-link" href="#about">SCROLL TO DISCOVER <span>↓</span></a></div>
        </div>
        <div className="hero-caption" aria-hidden="true"><span>ENGINEERING THE FUTURE OF ENERGY</span><b>35.3606° N / JAPAN</b></div>
        <div className="hero-pillars">{businessIndex.map(([no, item, jp]) => <a href="#business" key={item}><span>{no}</span><div><strong>{item}</strong><small>{jp}</small></div><i>↗</i></a>)}</div>
      </section>

      <section className="manifesto section-shell" id="about">
        <div className="section-marker"><span>01</span><b>ABOUT CREST VOLT</b></div>
        <div className="manifesto-title">
          <p>CREST VOLT株式会社<br /><small>クレストヴォルト株式会社</small></p>
          <h2>設備をつくるだけではない。<br />エネルギーを、<em>未来の資産</em>へ。</h2>
        </div>
        <div className="manifesto-copy">
          <p className="lead">CREST VOLTは、エネルギー資産の開発、投資、建設、制御、運用を一貫して担う、日本発の次世代エネルギーインフラ企業です。</p>
          <p>短期的な設備導入ではなく、20年を超えて社会と事業に価値を生み続けるインフラを構築する。そのために、資本・工程・デジタル技術・運用知見をひとつにつなぎます。</p>
        </div>
        <div className="brand-principles">
          {[
            ['01', 'RELIABILITY', '長期の信頼'], ['02', 'TECHNOLOGY', '確かな技術'], ['03', 'ENERGY', '統合する力'], ['04', 'INFRASTRUCTURE', '社会を支える責任'],
          ].map(([no, en, jp]) => <div key={no}><span>{no}</span><strong>{en}</strong><small>{jp}</small></div>)}
        </div>
      </section>

      <section className="value-platform">
        <div className="value-aura" aria-hidden="true" />
        <div className="section-shell value-inner">
          <div className="section-marker light"><span>02</span><b>INTEGRATED VALUE CREATION</b></div>
          <div className="value-heading"><div><p>ENERGY × CAPITAL × ENGINEERING × DIGITAL</p><h2>エネルギーを、<br />社会インフラへ変える。</h2></div><p>案件の発見から投資、EPC、制御、長期運用まで。分断されがちな工程を統合することで、設備を持続的な資産価値へ変えていきます。</p></div>
          <div className="value-chain">{valueChain.map(([no, en, jp], index) => <div key={no} className="value-step"><span>{no}</span><b>{en}</b><small>{jp}</small>{index < valueChain.length - 1 && <i>→</i>}</div>)}</div>
          <div className="value-outcome"><span>LONG-TERM VALUE</span><strong>20+ YEARS ENERGY ASSET DESIGN</strong><p>長期視点で価値を生み続ける、エネルギー資産へ。</p></div>
        </div>
      </section>

      <section className="business section-shell" id="business">
        <div className="section-marker"><span>03</span><b>BUSINESS PORTFOLIO</b></div>
        <div className="business-heading"><h2>日本の次代を支える、<br /><em>5つの事業基盤。</em></h2><p>単一の設備や工事に留まらず、発電、蓄電、充電、工程、資本を統合。事業ごとの専門性と、全体をつなぐ力を両立します。</p></div>

        <article className="business-lead">
          <div className="lead-image"><img src={asset('/images/c-ess-grid.png')} alt="CREST VOLT C-ESS 系統用蓄電システム" /><span>CORE BUSINESS / 02</span></div>
          <div className="lead-copy">
            <div className="business-no">02 <span>STORAGE</span></div><p className="super">CREST VOLT STORAGE</p><h3>電力を蓄え、<br />事業の可能性を拓く。</h3>
            <p>系統用BESS、産業用蓄電、光蓄一体化から需給調整まで。設計・投資・制御・運用を統合し、電力の安定性と資産価値を高めます。</p>
            <div className="tag-row"><span>C-ESS HOME</span><span>C-ESS C&amp;I</span><span>C-ESS GRID</span></div><a href="#technology">STORAGE TECHNOLOGY <i>↗</i></a>
          </div>
        </article>

        <div className="business-editorial">
          <article className="editorial-image solar-business">
            <img src={asset('/images/hero-vision-v2.png')} alt="日本の自然と太陽光・風力発電" /><div className="editorial-overlay" /><div><span>01 / SOLAR</span><h3>太陽光発電事業</h3><p>自家消費型・PPA・高圧／特別高圧まで。開発、EPC、O&amp;Mを一貫して提供。</p><b>VIEW BUSINESS ↗</b></div>
          </article>
          <article className="editorial-image ev-business">
            <img src={asset('/images/c-charge-station.png')} alt="CREST VOLT EV急速充電インフラ" /><div className="editorial-overlay" /><div><span>03 / EV INFRASTRUCTURE</span><h3>EV充電インフラ事業</h3><p>機器販売ではなく、再エネ・蓄電・施設制御まで含む充電インフラを構築。</p><b>C-CHARGE ↗</b></div>
          </article>
          <article className="editorial-plain epc-business">
            <div className="business-no">04 <span>ENERGY EPC</span></div><h3>長期運用から逆算する、<br />エネルギーEPC。</h3><p>設計・調達・建設・試運転・O&amp;M。安全性とライフサイクル品質を、すべての工程に実装します。</p>
            <div className="epc-flow"><span>ENGINEERING</span><i>→</i><span>PROCUREMENT</span><i>→</i><span>CONSTRUCTION</span><i>→</i><span>O&amp;M</span></div>
          </article>
          <article className="editorial-plain investment-business">
            <div className="business-no">05 <span>INVESTMENT &amp; DEVELOPMENT</span></div><p className="super">ENERGY ASSET MANAGEMENT</p><h3>資本の力で、<br />エネルギーの未来を実装する。</h3><p>案件開発、SPC組成、共同投資、M&amp;A、PPA資産。長期視点でエネルギーインフラを育てます。</p>
            <div className="tag-row dark"><span>SPC</span><span>CO-INVESTMENT</span><span>M&amp;A</span><span>PPA ASSETS</span></div>
          </article>
        </div>
      </section>

      <section className="product-stage">
        <div className="product-image"><img src={asset('/images/c-ess-family.png')} alt="CREST VOLT C-ESS家庭用・産業用蓄電システム" /></div>
        <div className="product-copy">
          <div className="section-marker"><span>04</span><b>C-ESS PRODUCT FAMILY</b></div><p className="super">GENERATE × STORE × CONTROL</p><h2>用途に合わせて、<br />電力を最適化する。</h2><p>住宅から企業、電力系統まで。導入目的と運用条件に合わせ、ハードウェアと制御を一体で設計します。</p>
          <div className="product-list"><div><span>01</span><strong>C-ESS HOME</strong><small>住宅用 / 5–15kWh</small></div><div><span>02</span><strong>C-ESS C&amp;I</strong><small>工業・商業用 / 215kWh–</small></div><div><span>03</span><strong>C-ESS GRID</strong><small>系統用 / Grid Scale</small></div></div>
        </div>
      </section>

      <section className="technology" id="technology">
        <div className="tech-watermark" aria-hidden="true">ENERGY<br />INTELLIGENCE</div>
        <div className="section-shell tech-inner">
          <div className="section-marker light"><span>05</span><b>CREST VOLT LAB / 技術開発センター</b></div>
          <div className="tech-heading"><div><p>C-EMS × AI ENERGY CLOUD × VPP</p><h2>設備をつなぎ、<br />エネルギーを知能化する。</h2></div><p>発電予測、蓄電制御、光蓄充協調、遠隔監視、予知保全。分散するエネルギー資産をデータでつなぎ、安全性・効率・収益性を継続的に高めます。</p></div>
          <div className="tech-system">
            <div className="system-core"><small>CREST VOLT LAB</small><strong>C-EMS</strong><span>AI ASSET CONTROL</span><i>ONLINE</i></div>
            <div className="system-node n1"><b>PV</b><span>GENERATE</span></div><div className="system-node n2"><b>ESS</b><span>STORE</span></div><div className="system-node n3"><b>GRID</b><span>EXCHANGE</span></div><div className="system-node n4"><b>EV</b><span>CHARGE</span></div>
          </div>
          <div className="lab-index">{[
            ['01', 'ENERGY MANAGEMENT', 'C-EMS / エネルギー最適制御'], ['02', 'AI ENERGY CLOUD', '予測・監視・資産最適化'], ['03', 'VPP / DEMAND RESPONSE', '分散電源の統合運用'], ['04', 'ENERGY IoT', '遠隔監視・予知保全'],
          ].map(([no, en, jp]) => <div key={no}><span>{no}</span><strong>{en}</strong><small>{jp}</small></div>)}</div>
        </div>
      </section>

      <section className="strategy section-shell" id="strategy">
        <div className="section-marker"><span>06</span><b>JAPAN ENERGY STRATEGY</b></div>
        <div className="strategy-heading"><h2>地域の可能性を、<br />次世代インフラへ。</h2><p>再エネ資源、系統条件、電力需要、地域産業。それぞれの特性を見極め、日本各地で長期的なエネルギー事業を育てます。</p></div>
        <div className="region-index">{[
          ['HOKKAIDO', '北海道', '再エネ資源開発'], ['TOHOKU', '東北', '蓄電インフラ'], ['KANTO', '関東', '企業エネルギー'], ['KYUSHU', '九州', 'EVエネルギーネットワーク'],
        ].map(([en, jp, focus], index) => <div key={en}><span>0{index + 1}</span><b>{en}</b><strong>{jp}</strong><small>{focus}</small></div>)}</div>
        <div className="roadmap">
          <div className="roadmap-intro"><span>2026—2030</span><h3>BUILDING JAPAN&apos;S<br />NEXT ENERGY ERA.</h3><p>インフラ企業から、エネルギーテクノロジー企業へ。</p></div>
          <div className="phase"><span>PHASE 01 / 2026—2028</span><strong>日本市場の基盤構築</strong><p>蓄電・太陽光・EVインフラ</p></div><div className="phase"><span>PHASE 02 / 2028—2030</span><strong>エネルギー資産の拡大</strong><p>多地域運用・資産プラットフォーム</p></div><div className="phase"><span>PHASE 03 / 2030＋</span><strong>エネルギーテクノロジー</strong><p>AI・VPP・国際連携</p></div>
        </div>
      </section>

      <section className="philosophy">
        <div className="philosophy-line" aria-hidden="true" /><div className="section-shell">
          <div className="section-marker light"><span>07</span><b>PURPOSE / MISSION / VISION</b></div><div className="philosophy-lead"><p>OUR COMMITMENT</p><h2>社会を支える責任を、<br />技術の力で果たす。</h2></div>
          <div className="philosophy-grid"><article><span>01 / PURPOSE</span><h3>強靭な社会基盤をつくる。</h3><p>エネルギー技術を通じて、持続可能で強靭な社会インフラを構築する。</p></article><article><span>02 / MISSION</span><h3>発電・蓄電・充電・制御を統合する。</h3><p>より安全で効率的なエネルギー環境を、技術と運用の両面から実現する。</p></article><article><span>03 / VISION</span><h3>日本を代表する企業へ。</h3><p>日本の次代を支える、信頼されるエネルギーインフラ企業を目指す。</p></article></div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-brand"><img src={asset('/images/crest-volt-logo-stacked.png')} alt="CREST VOLT" /><p>ENGINEERING THE<br />FUTURE OF ENERGY.</p></div>
        <div className="contact-content"><div className="section-marker light"><span>08</span><b>PARTNER WITH CREST VOLT</b></div><h2>次のエネルギー基盤を、<br />ともにつくる。</h2><p>太陽光、蓄電、EVインフラ、EPC、投資開発、技術連携に関するご相談をお待ちしています。</p><a href="mailto:info@crestvolt.co.jp"><span>お問い合わせ</span><b>CONTACT US</b><i>↗</i></a></div>
      </section>

      <footer>
        <div className="footer-brand"><img src={asset('/images/crest-volt-logo-horizontal.png')} alt="CREST VOLT" /><p>CREST VOLT株式会社<br />クレストヴォルト株式会社</p></div>
        <div className="footer-statement">エネルギーの未来を、<br />確かな技術で。</div><div className="footer-links"><a href="#about">企業情報</a><a href="#business">事業領域</a><a href="#technology">技術開発</a><a href="#strategy">成長戦略</a><a href="#contact">お問い合わせ</a></div><p className="copyright">© 2026 CREST VOLT INC. ALL RIGHTS RESERVED.</p>
      </footer>
    </main>
  );
}
