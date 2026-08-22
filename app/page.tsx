const businesses = [
  {
    number: '01',
    title: 'Energy Development',
    jp: '再生可能エネルギー開発',
    image: '/images/c-ess-grid.png',
    className: 'business-development',
    items: ['太陽光発電', '蓄電池併設型発電所', 'PPA事業', 'エネルギー施設開発'],
  },
  {
    number: '02',
    title: 'Energy Storage',
    jp: '蓄電システム',
    image: '/images/c-ess-family.png',
    className: 'business-storage',
    items: ['C-ESS HOME', 'C-ESS C&I', 'C-ESS GRID', '電力最適化・BCP'],
  },
  {
    number: '03',
    title: 'EV Infrastructure',
    jp: 'EVエネルギーインフラ',
    image: '/images/c-charge-station.png',
    className: 'business-ev',
    items: ['C-CHARGE', '急速充電設備', '企業充電ネットワーク', '光・蓄・充一体化'],
  },
  {
    number: '04',
    title: 'Energy Technology',
    jp: 'エネルギー技術開発',
    image: '',
    className: 'business-tech',
    items: ['C-EMS', 'AI Energy Cloud', 'VPP Technology', '資産運用最適化'],
  },
];

const stages = [
  ['01', 'DISCOVER', '機会を見つける', '土地・系統・市場を読み解き、持続可能な事業機会を発見。'],
  ['02', 'DEVELOP', '価値を設計する', '技術計画と収益モデルを統合し、実現性の高い事業へ。'],
  ['03', 'INVEST', '未来に投資する', '自己投資・共同投資・SPCを通じ、成長を長期で支える。'],
  ['04', 'INTEGRATE', '技術でつなぐ', '蓄電・EMS・AIを組み合わせ、資産の可能性を拡張。'],
  ['05', 'OPERATE', '価値を育てる', 'データに基づく運用で、20年先の信頼と価値を守る。'],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="CREST VOLT ホーム">
          <span className="brand-mark" aria-hidden="true" />
          <span className="brand-name">CREST <b>VOLT</b></span>
        </a>
        <nav className="main-nav" aria-label="メインナビゲーション">
          <a href="#about">私たちについて</a>
          <a href="#business">事業領域</a>
          <a href="#technology">テクノロジー</a>
          <a href="#strategy">成長戦略</a>
        </nav>
        <a className="header-cta" href="#contact">PARTNER WITH US <span>↗</span></a>
        <details className="mobile-menu">
          <summary>MENU <span>＋</span></summary>
          <div>
            <a href="#about">私たちについて</a>
            <a href="#business">事業領域</a>
            <a href="#technology">テクノロジー</a>
            <a href="#strategy">成長戦略</a>
            <a href="#contact">お問い合わせ</a>
          </div>
        </details>
      </header>

      <section className="hero" id="top">
        <img className="hero-image" src="/images/hero-vision-v2.png" alt="富士山、太陽光発電、風力発電、蓄電設備、EV充電をつなぐCREST VOLTのエネルギービジョン" />
        <div className="hero-shade" />
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow"><span /> ENERGY DEVELOPMENT · INVESTMENT · TECHNOLOGY</p>
          <h1>エネルギーの力で、<br /><em>未来価値</em>を創造する。</h1>
          <p className="hero-copy">
            再生可能エネルギーの可能性を、<br className="desktop-only" />
            次世代を支える長期資産へ。
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#business">事業を見る <span>→</span></a>
            <a className="text-link" href="#about">CREST VOLTについて <span>↓</span></a>
          </div>
        </div>
        <div className="hero-index" aria-hidden="true">
          <span>JP</span><span className="index-line" /><span>01</span>
        </div>
        <div className="hero-pillars">
          {['DEVELOPMENT', 'INVESTMENT', 'TECHNOLOGY', 'OPERATION'].map((item, index) => (
            <div key={item}><span>0{index + 1}</span>{item}</div>
          ))}
        </div>
      </section>

      <section className="intro section-pad" id="about">
        <div className="section-kicker"><span>01</span> OUR PURPOSE</div>
        <div className="intro-main">
          <p>山の頂〈CREST〉を目指し、</p>
          <h2>クリーンエネルギーの<br />新しい価値基準をつくる。</h2>
        </div>
        <div className="intro-copy">
          <p>CREST VOLTは、再生可能エネルギーの可能性を最大限に引き出し、持続可能な社会を支えるエネルギープラットフォーム企業です。</p>
          <p>開発・投資・技術・運用をひとつにつなぎ、20年先も社会に価値を生み続けるエネルギー資産を創造します。</p>
        </div>
      </section>

      <section className="values">
        <div className="values-heading">
          <div className="section-kicker light"><span>02</span> OUR PHILOSOPHY</div>
          <p>私たちの判断を支える、<br />3つの価値観。</p>
        </div>
        <article>
          <span className="value-number">01</span>
          <div className="value-symbol shield-symbol" aria-hidden="true" />
          <h3>信頼 <small>TRUST</small></h3>
          <p>安全、品質、責任。長期運用を前提に、ひとつひとつの信頼を未来へつなぎます。</p>
        </article>
        <article>
          <span className="value-number">02</span>
          <div className="value-symbol spark-symbol" aria-hidden="true">✦</div>
          <h3>革新 <small>INNOVATION</small></h3>
          <p>AI、EMS、蓄電技術。継続的な革新で、エネルギー資産の可能性を高めます。</p>
        </article>
        <article>
          <span className="value-number">03</span>
          <div className="value-symbol orbit-symbol" aria-hidden="true" />
          <h3>持続 <small>SUSTAINABILITY</small></h3>
          <p>環境と経済性を両立し、次の世代により良いエネルギー環境を残します。</p>
        </article>
      </section>

      <section className="model section-pad">
        <div className="model-heading">
          <div className="section-kicker"><span>03</span> VALUE CREATION</div>
          <h2>設備をつくるだけではない。<br /><em>資産価値を、育て続ける。</em></h2>
          <p>エネルギー機会の発見から長期運用までを、一貫した視点でつなぎます。</p>
        </div>
        <div className="stage-list">
          {stages.map(([number, en, jp, copy], index) => (
            <article className="stage" key={number}>
              <div className="stage-top">
                <span>{number}</span>
                <b>{en}</b>
                {index < stages.length - 1 && <i>→</i>}
              </div>
              <h3>{jp}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
        <div className="model-result">
          <span>CREST VOLT MODEL</span>
          <strong>LONG-TERM ENERGY VALUE</strong>
          <p>未来20年以上、価値を生み出し続けるエネルギー資産へ。</p>
        </div>
      </section>

      <section className="business section-pad" id="business">
        <div className="business-header">
          <div>
            <div className="section-kicker light"><span>04</span> BUSINESS PORTFOLIO</div>
            <h2>エネルギーの未来を支える、<br />4つの事業領域。</h2>
          </div>
          <p>発電する。蓄える。動かす。つなぐ。<br />領域を横断する力で、エネルギー価値を最大化します。</p>
        </div>
        <div className="business-grid">
          {businesses.map((item) => (
            <article className={'business-card ' + item.className} key={item.number}>
              {item.image && <img src={item.image} alt="" />}
              <div className="business-overlay" />
              <div className="business-card-content">
                <span className="business-number">{item.number}</span>
                <div>
                  <p>{item.title}</p>
                  <h3>{item.jp}</h3>
                </div>
                <ul>
                  {item.items.map((listItem) => <li key={listItem}>{listItem}</li>)}
                </ul>
                <span className="card-arrow" aria-hidden="true">↗</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="storage-focus">
        <div className="storage-visual">
          <img src="/images/c-charge-120.png" alt="C-CHARGE 120 急速充電システム" />
        </div>
        <div className="storage-content">
          <div className="section-kicker"><span>05</span> ENERGY INFRASTRUCTURE</div>
          <p className="product-label">C-ESS / C-CHARGE</p>
          <h2>蓄える力と、<br />つなぐ力を、ひとつに。</h2>
          <p>再生可能エネルギー、蓄電システム、EV充電をC-EMSで統合。企業・地域・モビリティをつなぐ次世代インフラを構築します。</p>
          <div className="focus-features">
            <div><b>GENERATE</b><span>再エネ発電</span></div>
            <div><b>STORE</b><span>C-ESS</span></div>
            <div><b>CHARGE</b><span>C-CHARGE</span></div>
            <div><b>CONTROL</b><span>C-EMS</span></div>
          </div>
        </div>
      </section>

      <section className="technology section-pad" id="technology">
        <div className="tech-copy">
          <div className="section-kicker light"><span>06</span> TECHNOLOGY CONCEPT</div>
          <p className="tech-formula">Energy <i>×</i> Digital <i>×</i> Asset</p>
          <h2>分散するエネルギーを、<br />ひとつの知性へ。</h2>
          <p>発電予測、蓄電制御、需要最適化、資産分析。C-EMSとAI Energy Cloudが、複数のエネルギー資産をつなぎ、状況に応じた最適な判断を導きます。</p>
          <div className="tech-tags">
            <span>C-EMS</span><span>AI ENERGY CLOUD</span><span>VPP</span>
          </div>
        </div>
        <div className="tech-orbit" aria-label="Smart Energy Platform 概念図">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit orbit-three" />
          <span className="orbit-node node-one">ASSET</span>
          <span className="orbit-node node-two">DATA</span>
          <span className="orbit-node node-three">CONTROL</span>
          <div className="tech-core"><small>CREST VOLT</small><strong>SMART<br />ENERGY<br />PLATFORM</strong></div>
        </div>
      </section>

      <section className="strategy section-pad" id="strategy">
        <div className="strategy-head">
          <div className="section-kicker"><span>07</span> JAPAN ENERGY STRATEGY</div>
          <h2>地域の可能性を、<br />次世代のインフラへ。</h2>
          <p>再エネ資源、電力需要、地域産業。それぞれの特性を見極め、日本各地で持続可能なエネルギー事業を育てます。</p>
        </div>
        <div className="strategy-map">
          <div className="map-line" aria-hidden="true" />
          {['北海道', '東北', '関東', '九州'].map((region, index) => (
            <div className={'region region-' + (index + 1)} key={region}>
              <span>0{index + 1}</span><strong>{region}</strong>
            </div>
          ))}
          <div className="map-caption">FOCUS REGIONS<br /><b>JAPAN</b></div>
        </div>
        <div className="strategy-points">
          {[
            ['01', '再エネ資源開発', '地域の自然資源と系統条件を踏まえた事業開発。'],
            ['02', '蓄電インフラ', '安定供給と需給調整を支える蓄電拠点。'],
            ['03', '企業エネルギー', '脱炭素と経済性を両立するエネルギーサービス。'],
            ['04', 'EVネットワーク', '再エネと連動するスマート充電ネットワーク。'],
          ].map(([no, title, copy]) => (
            <article key={no}><span>{no}</span><h3>{title}</h3><p>{copy}</p></article>
          ))}
        </div>
      </section>

      <section className="roadmap section-pad">
        <div className="roadmap-title">
          <div className="section-kicker light"><span>08</span> GROWTH ROADMAP</div>
          <h2>日本から、<br />未来のエネルギー企業へ。</h2>
        </div>
        <div className="roadmap-line">
          <article>
            <span>PHASE 01</span><strong>2026—2028</strong><h3>日本市場の基盤構築</h3>
            <p>蓄電プロジェクト、太陽光開発、EVインフラ</p>
          </article>
          <article>
            <span>PHASE 02</span><strong>2028—2030</strong><h3>資産ポートフォリオ拡大</h3>
            <p>多地域運用、エネルギープラットフォーム</p>
          </article>
          <article>
            <span>PHASE 03</span><strong>2030＋</strong><h3>エネルギーテクノロジー</h3>
            <p>AIエネルギー、VPP、国際パートナーシップ</p>
          </article>
        </div>
      </section>

      <section className="responsibility section-pad">
        <div className="responsibility-intro">
          <div className="section-kicker"><span>09</span> RESPONSIBLE ENERGY FUTURE</div>
          <h2>社会とともに、<br />価値を積み重ねる。</h2>
        </div>
        <div className="esg-grid">
          <article><span>E</span><p>ENVIRONMENT</p><h3>環境</h3><b>01</b><small>クリーンエネルギーの普及と、炭素排出の低減。</small></article>
          <article><span>S</span><p>SOCIAL</p><h3>社会</h3><b>02</b><small>地域のエネルギー安全と、持続可能な産業基盤。</small></article>
          <article><span>G</span><p>GOVERNANCE</p><h3>ガバナンス</h3><b>03</b><small>透明性、説明責任、長期視点に基づく事業運営。</small></article>
        </div>
        <div className="partnership">
          <div>
            <p>CO-CREATION PARTNERS</p>
            <h3>エネルギーの未来は、<br />共創から生まれる。</h3>
          </div>
          <ul>
            <li>政府・自治体 <span>地域エネルギー計画</span></li>
            <li>金融機関 <span>プロジェクトファイナンス</span></li>
            <li>土地所有者 <span>エネルギー資産開発</span></li>
            <li>企業・技術パートナー <span>ソリューション・共同研究</span></li>
          </ul>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-grid" aria-hidden="true" />
        <div className="contact-mark" aria-hidden="true" />
        <div className="section-kicker light"><span>10</span> PARTNER WITH CREST VOLT</div>
        <h2>ともに、未来価値を<br />創造しませんか。</h2>
        <p>開発・投資・技術・地域連携に関するご相談をお待ちしています。</p>
        <a className="contact-button" href="mailto:info@crestvolt.co.jp">
          <span>お問い合わせ</span><b>CONTACT US</b><i>↗</i>
        </a>
      </section>

      <footer>
        <div className="footer-brand">
          <span className="brand-mark dark" aria-hidden="true" />
          <span className="brand-name">CREST <b>VOLT</b></span>
          <small>CREST VOLT 株式会社</small>
        </div>
        <div className="footer-message">Creating Future Value<br />Through Energy.</div>
        <div className="footer-links">
          <a href="#about">会社概要</a><a href="#business">事業領域</a><a href="#contact">お問い合わせ</a>
          <p>© 2026 CREST VOLT. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </main>
  );
}
