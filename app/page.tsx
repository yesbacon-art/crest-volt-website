const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const asset = (path: string) => `${basePath}${path}`;

const lifecycle = [
  ['01', 'DISCOVER', '事業機会の発見', '土地・系統・市場性を精査'],
  ['02', 'DEVELOP', '事業価値の設計', '技術・収益モデルを統合'],
  ['03', 'INVEST', '長期視点の投資', '自己投資・共同投資・SPC'],
  ['04', 'INTEGRATE', '技術による最適化', '蓄電・EMS・AIを実装'],
  ['05', 'OPERATE', '資産価値の運用', 'データで性能と収益を管理'],
];

const businessAreas = [
  {
    number: '01',
    en: 'ENERGY DEVELOPMENT',
    title: '再生可能エネルギー開発',
    copy: '地域資源と事業性を見極め、太陽光・蓄電池併設型発電所・PPAを長期資産として開発します。',
    image: asset('/images/hero-vision-v2.png'),
    className: 'area-development',
    tags: ['SOLAR', 'PPA', 'PROJECT DEVELOPMENT'],
  },
  {
    number: '02',
    en: 'ENERGY STORAGE',
    title: '蓄電システム',
    copy: '家庭から系統規模まで。電力調整、ピークカット、BCP、再エネ活用を支えるC-ESSを展開します。',
    image: asset('/images/c-ess-grid.png'),
    className: 'area-storage',
    tags: ['C-ESS HOME', 'C-ESS C&I', 'C-ESS GRID'],
  },
  {
    number: '03',
    en: 'EV INFRASTRUCTURE',
    title: 'EVエネルギーインフラ',
    copy: '急速充電、企業ネットワーク、商業施設のエネルギー管理を、再エネ・蓄電と一体で設計します。',
    image: asset('/images/c-charge-station.png'),
    className: 'area-ev',
    tags: ['C-CHARGE', 'FAST CHARGE', 'ENERGY NETWORK'],
  },
  {
    number: '04',
    en: 'ENERGY TECHNOLOGY',
    title: 'エネルギー技術開発',
    copy: 'C-EMS、AI Energy Cloud、VPPを通じ、分散するエネルギー資産の運用と価値を最適化します。',
    image: '',
    className: 'area-technology',
    tags: ['C-EMS', 'AI ENERGY CLOUD', 'VPP'],
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="CREST VOLT ホーム">
          <img src={asset('/images/crest-volt-logo-horizontal.png')} alt="CREST VOLT" />
        </a>
        <nav className="main-nav" aria-label="メインナビゲーション">
          <a href="#about"><span>ABOUT</span>私たちについて</a>
          <a href="#business"><span>BUSINESS</span>事業領域</a>
          <a href="#technology"><span>TECHNOLOGY</span>技術開発</a>
          <a href="#strategy"><span>STRATEGY</span>成長戦略</a>
        </nav>
        <a className="header-cta" href="#contact"><span>CONTACT</span>お問い合わせ <b>↗</b></a>
        <details className="mobile-menu">
          <summary>MENU <span>＋</span></summary>
          <div>
            <a href="#about">私たちについて</a>
            <a href="#business">事業領域</a>
            <a href="#technology">技術開発</a>
            <a href="#strategy">成長戦略</a>
            <a href="#contact">お問い合わせ</a>
          </div>
        </details>
      </header>

      <section className="hero" id="top">
        <img className="hero-image" src={asset('/images/hero-vision-v2.png')} alt="富士山、太陽光発電、風力発電、蓄電設備、EV充電をつなぐCREST VOLTのエネルギービジョン" />
        <div className="hero-shade" />
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow"><span /> JAPAN ENERGY ASSET PLATFORM</p>
          <p className="hero-jp-line">次世代エネルギー価値を創造する。</p>
          <h1>未来のエネルギーを、<br /><em>価値ある資産</em>へ。</h1>
          <p className="hero-copy">
            再生可能エネルギーの開発・投資・技術・運用をつなぎ、<br className="desktop-only" />
            日本の未来を支えるエネルギー資産を創造します。
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#business"><small>OUR BUSINESS</small>事業領域を見る <span>→</span></a>
            <a className="text-link" href="#about">CREST VOLTについて <span>↓</span></a>
          </div>
        </div>
        <div className="hero-caption">
          <span>INTEGRATED ENERGY INFRASTRUCTURE</span>
          <b>JAPAN / 35.3606° N</b>
        </div>
        <div className="hero-pillars">
          {['DEVELOPMENT', 'INVESTMENT', 'TECHNOLOGY', 'OPERATION'].map((item, index) => (
            <div key={item}><span>0{index + 1}</span><strong>{item}</strong></div>
          ))}
        </div>
      </section>

      <section className="identity section-shell" id="about">
        <div className="section-label"><span>01</span><b>ABOUT CREST VOLT</b></div>
        <div className="identity-logo">
          <img src={asset('/images/crest-volt-logo-stacked.png')} alt="CREST VOLT ブランドロゴ" />
          <p>ENERGY FOR<br />A BETTER TOMORROW</p>
        </div>
        <div className="identity-statement">
          <p className="jp-intro">「山の頂〈CREST〉」を目指し、<br />クリーンエネルギーの力で未来を切り拓く。</p>
          <h2>設備ではなく、<br />未来価値を生む<br /><em>エネルギー資産</em>を。</h2>
        </div>
        <div className="identity-copy">
          <p>CREST VOLTは、日本発の次世代エネルギー開発・投資・技術企業です。</p>
          <p>再生可能エネルギーの可能性を最大限に引き出し、開発から長期運用までを一貫して担うことで、持続可能な社会を支えるエネルギープラットフォームを構築します。</p>
        </div>
        <div className="identity-fields">
          {[
            ['01', 'RENEWABLE ENERGY', '再生能源开发'],
            ['02', 'ENERGY INVESTMENT', '能源资产投资'],
            ['03', 'ENERGY OPERATION', '能源运营管理'],
            ['04', 'ENERGY TECHNOLOGY', '能源技术研发'],
          ].map(([no, en, cn]) => (
            <div key={no}><span>{no}</span><strong>{en}</strong><small>{cn}</small></div>
          ))}
        </div>
      </section>

      <section className="asset-platform">
        <div className="asset-grid" aria-hidden="true" />
        <div className="section-shell asset-inner">
          <div className="section-label light"><span>02</span><b>ENERGY VALUE CREATION</b></div>
          <div className="asset-heading">
            <div>
              <p>DEVELOPMENT × INVESTMENT × TECHNOLOGY × OPERATION</p>
              <h2>エネルギーを、<br />長期資産へ変える。</h2>
            </div>
            <p>CREST VOLTは、単に設備を建設する会社ではありません。事業機会を見つけ、投資し、技術で価値を高め、長期にわたり運用することで、社会と資本の双方に価値を生み出します。</p>
          </div>
          <div className="lifecycle">
            {lifecycle.map(([no, en, title, copy], index) => (
              <article key={no}>
                <div className="cycle-top"><span>{no}</span>{index < lifecycle.length - 1 && <i>→</i>}</div>
                <b>{en}</b>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
          <div className="asset-result">
            <span>CREST VOLT VALUE</span>
            <strong>LONG-TERM ENERGY ASSET</strong>
            <p>20年先も価値を生み続ける、持続可能なエネルギー資産へ。</p>
          </div>
        </div>
      </section>

      <section className="business section-shell" id="business">
        <div className="section-label"><span>03</span><b>BUSINESS PORTFOLIO</b></div>
        <div className="section-heading">
          <h2>日本のエネルギー転換を支える、<br /><em>4つの事業領域。</em></h2>
          <p>発電する。蓄える。動かす。つなぐ。<br />領域を横断する事業力で、エネルギー資産の価値を最大化します。</p>
        </div>
        <div className="area-grid">
          {businessAreas.map((area) => (
            <article className={'area-card ' + area.className} key={area.number}>
              {area.image && <img src={area.image} alt="" />}
              <div className="area-screen" />
              <div className="area-content">
                <span className="area-number">{area.number}</span>
                <p className="area-en">{area.en}</p>
                <h3>{area.title}</h3>
                <p className="area-copy">{area.copy}</p>
                <div className="area-tags">{area.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="ess-feature">
        <div className="feature-photo">
          <img src={asset('/images/c-ess-grid.png')} alt="CREST VOLT C-ESS 大型蓄電システム" />
          <div className="photo-tag"><span>01 / CORE ASSET</span><b>GRID SCALE STORAGE</b></div>
        </div>
        <div className="feature-copy">
          <div className="section-label"><span>04</span><b>C-ESS ENERGY STORAGE</b></div>
          <p className="feature-kicker">GENERATE × STORE × CONTROL</p>
          <h2>電力を蓄え、<br />事業の可能性を拓く。</h2>
          <p>発電量と需要の変動を吸収し、再生可能エネルギーを最大限に活用。住宅・産業・系統、それぞれに最適な蓄電資産を設計します。</p>
          <div className="product-family">
            <div><span>HOME</span><strong>C-ESS HOME</strong><small>5–15kWh / Residential</small></div>
            <div><span>C&amp;I</span><strong>C-ESS C&amp;I</strong><small>215kWh– / Commercial</small></div>
            <div><span>GRID</span><strong>C-ESS GRID</strong><small>Grid Scale / Utility</small></div>
          </div>
        </div>
      </section>

      <section className="charge-feature">
        <div className="charge-copy">
          <div className="section-label light"><span>05</span><b>C-CHARGE INFRASTRUCTURE</b></div>
          <p className="feature-kicker">EV × RENEWABLE ENERGY × STORAGE</p>
          <h2>充電から、<br />未来のエネルギーへ。</h2>
          <p>充電設備だけではなく、再エネ、蓄電、施設エネルギー管理を統合。企業・地域・モビリティをつなぐ、新しいエネルギーネットワークを構築します。</p>
          <ul>
            <li><span>01</span>高出力急速充電</li>
            <li><span>02</span>企業フリート管理</li>
            <li><span>03</span>商業施設エネルギー管理</li>
            <li><span>04</span>光・蓄・充一体化</li>
          </ul>
        </div>
        <div className="charge-photo">
          <img src={asset('/images/c-charge-station.png')} alt="CREST VOLT C-CHARGE EV急速充電ステーション" />
          <div className="photo-tag dark"><span>02 / ENERGY NETWORK</span><b>C-CHARGE</b></div>
        </div>
      </section>

      <section className="technology section-shell" id="technology">
        <div className="tech-copy">
          <div className="section-label"><span>06</span><b>TECHNOLOGY CONCEPT</b></div>
          <p className="tech-formula">Energy <i>×</i> Digital <i>×</i> Asset</p>
          <h2>分散するエネルギーを、<br />ひとつの知性へ。</h2>
          <p>C-EMSとAI Energy Cloudが、発電予測、蓄電制御、需要最適化、資産分析を統合。複数のエネルギー資産をリアルタイムにつなぎ、最適な運用判断を導きます。</p>
          <div className="tech-tags"><span>C-EMS</span><span>AI ENERGY CLOUD</span><span>VPP</span></div>
        </div>
        <div className="energy-console" aria-label="C-EMS エネルギー管理概念図">
          <div className="console-head"><span>C-EMS / LIVE ASSET CONTROL</span><b>ONLINE</b></div>
          <div className="console-core">
            <div className="energy-node node-solar"><span>PV</span><b>GENERATE</b></div>
            <div className="energy-node node-storage"><span>ESS</span><b>STORE</b></div>
            <div className="energy-node node-grid"><span>GRID</span><b>EXCHANGE</b></div>
            <div className="energy-node node-ev"><span>EV</span><b>CHARGE</b></div>
            <div className="control-core"><small>AI CONTROL</small><strong>OPTIMIZE</strong><i>99.8</i></div>
          </div>
          <div className="console-foot">
            <div><span>FORECAST</span><b>AI</b></div>
            <div><span>CONTROL</span><b>AUTO</b></div>
            <div><span>ASSET STATUS</span><b>NORMAL</b></div>
          </div>
        </div>
      </section>

      <section className="strategy section-shell" id="strategy">
        <div className="section-label"><span>07</span><b>JAPAN ENERGY STRATEGY</b></div>
        <div className="strategy-heading">
          <h2>地域の可能性を、<br />次世代インフラへ。</h2>
          <p>再エネ資源、電力需要、地域産業。それぞれの特性を見極め、日本各地で持続可能なエネルギー事業を育てます。</p>
        </div>
        <div className="region-line">
          {[
            ['01', '北海道', '再エネ資源開発'],
            ['02', '東北', '蓄電インフラ'],
            ['03', '関東', '企業エネルギー'],
            ['04', '九州', 'EVネットワーク'],
          ].map(([no, region, focus]) => (
            <article key={region}><span>{no}</span><strong>{region}</strong><small>{focus}</small></article>
          ))}
        </div>
        <div className="roadmap">
          <div className="roadmap-title"><span>GROWTH ROADMAP</span><h3>日本から、未来のエネルギー企業へ。</h3></div>
          <div className="phase"><span>PHASE 01</span><b>2026—2028</b><strong>日本市場の基盤構築</strong><p>蓄電・太陽光・EVインフラ</p></div>
          <div className="phase"><span>PHASE 02</span><b>2028—2030</b><strong>エネルギー資産の拡大</strong><p>多地域運用・プラットフォーム</p></div>
          <div className="phase"><span>PHASE 03</span><b>2030＋</b><strong>エネルギーテクノロジー</strong><p>AI・VPP・国際連携</p></div>
        </div>
      </section>

      <section className="principles">
        <div className="section-shell">
          <div className="section-label light"><span>08</span><b>TRUSTED ENERGY PARTNER</b></div>
          <div className="principle-heading"><h2>信頼を積み重ね、<br />未来へつなぐ。</h2><p>エネルギー事業は、数十年にわたる責任です。安全・品質・透明性・共創を、すべての事業判断の基準とします。</p></div>
          <div className="principle-grid">
            <article><span>01</span><b>TRUST</b><h3>信頼</h3><p>長期運用を前提とした安全、品質、責任。</p></article>
            <article><span>02</span><b>INNOVATION</b><h3>革新</h3><p>AI・EMS・蓄電技術による継続的な進化。</p></article>
            <article><span>03</span><b>SUSTAINABILITY</b><h3>持続</h3><p>環境、地域、経済性をつなぐ事業運営。</p></article>
            <article><span>04</span><b>PARTNERSHIP</b><h3>共創</h3><p>自治体、金融、企業、技術パートナーとの連携。</p></article>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-pattern" aria-hidden="true" />
        <img src={asset('/images/crest-volt-logo-stacked.png')} alt="" />
        <div>
          <div className="section-label light"><span>09</span><b>PARTNER WITH CREST VOLT</b></div>
          <h2>エネルギーで、<br />ともに未来価値を。</h2>
          <p>事業開発、投資、技術、地域連携に関するご相談をお待ちしています。</p>
          <a href="mailto:info@crestvolt.co.jp"><span>お問い合わせ</span><b>CONTACT US</b><i>↗</i></a>
        </div>
      </section>

      <footer>
        <div className="footer-top">
          <img src={asset('/images/crest-volt-logo-horizontal.png')} alt="CREST VOLT" />
          <p>CREST VOLT 株式会社</p>
        </div>
        <div className="footer-message">Creating Future Value<br />Through Energy.</div>
        <div className="footer-links"><a href="#about">会社概要</a><a href="#business">事業領域</a><a href="#technology">技術開発</a><a href="#contact">お問い合わせ</a></div>
        <p className="copyright">© 2026 CREST VOLT. ALL RIGHTS RESERVED.</p>
      </footer>
    </main>
  );
}
