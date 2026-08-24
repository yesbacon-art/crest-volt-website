const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const asset = (path: string) => `${basePath}${path}`;

const lifecycle = [
  ['01', 'DEVELOP', '事業を開発する', '地域・系統・需要から機会を発見'],
  ['02', 'INVEST', '資本を組成する', '自己投資・共同投資・SPC'],
  ['03', 'ENGINEER', '設備を構築する', '設計・調達・施工・試運転'],
  ['04', 'CONTROL', '技術で制御する', 'EMS・AI・VPPを実装'],
  ['05', 'OPERATE', '資産を運用する', 'O&Mとデータで価値を高める'],
];

const businessAreas = [
  {
    number: '01',
    en: 'SOLAR ENERGY SOLUTIONS',
    title: '太陽光発電事業',
    copy: '産業用屋根・地上設置・自家消費型・PPAから高圧／特別高圧まで、開発・EPC・O&Mを一貫して提供します。',
    image: asset('/images/hero-vision-v2.png'),
    className: 'area-solar',
    tags: ['SOLAR', 'PPA', 'EPC / O&M'],
  },
  {
    number: '02',
    en: 'CREST VOLT STORAGE',
    title: '蓄電システム',
    copy: '系統用BESS、産業用蓄電、光蓄一体化から需給調整まで。電力の安定性と事業価値を同時に高めます。',
    image: asset('/images/c-ess-grid.png'),
    className: 'area-storage',
    tags: ['C-ESS HOME', 'C-ESS C&I', 'C-ESS GRID'],
  },
  {
    number: '03',
    en: 'EV CHARGING INFRASTRUCTURE',
    title: 'EV充電インフラ事業',
    copy: '設計・機器・電気工事・エネルギー管理・保守まで。商業施設、物流、集合住宅、企業フリートを一体で支えます。',
    image: asset('/images/c-charge-station.png'),
    className: 'area-ev',
    tags: ['C-CHARGE', 'FAST CHARGE', 'ENERGY NETWORK'],
  },
  {
    number: '04',
    en: 'ENERGY EPC',
    title: 'エネルギーEPC事業',
    copy: 'Engineering、Procurement、Construction、Commissioning、O&M。長期運用を見据えた品質で、設備を社会インフラへ変えます。',
    image: '',
    className: 'area-epc',
    tags: ['ENGINEERING', 'CONSTRUCTION', 'O&M'],
  },
  {
    number: '05',
    en: 'INVESTMENT & DEVELOPMENT',
    title: 'エネルギー開発・投資事業',
    copy: '太陽光・BESS・PPAなどのエネルギー資産を、案件開発、SPC組成、共同投資、M&Aまで長期視点で推進します。',
    image: asset('/images/hero-vision-v2.png'),
    className: 'area-investment',
    tags: ['ASSET DEVELOPMENT', 'SPC / M&A', 'CO-INVESTMENT'],
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
          <a href="#technology"><span>CREST VOLT LAB</span>技術開発</a>
          <a href="#strategy"><span>STRATEGY</span>成長戦略</a>
        </nav>
        <a className="header-cta" href="#contact"><span>CONTACT</span>お問い合わせ <b>↗</b></a>
        <details className="mobile-menu">
          <summary>MENU <span>＋</span></summary>
          <div>
            <a href="#about">私たちについて</a>
            <a href="#business">事業領域</a>
            <a href="#technology">CREST VOLT LAB</a>
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
          <p className="eyebrow"><span /> NEXT-GENERATION ENERGY INFRASTRUCTURE</p>
          <p className="hero-jp-line">次世代エネルギーインフラ企業</p>
          <h1>エネルギーの未来を、<br /><em>確かな技術で。</em></h1>
          <p className="hero-copy">
            発電・蓄電・充電・制御をひとつにつなぎ、<br className="desktop-only" />
            持続可能で強靭な日本の社会インフラを構築します。
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
          {['SOLAR', 'STORAGE', 'EV INFRA', 'ENERGY EPC', 'INVESTMENT'].map((item, index) => (
            <div key={item}><span>0{index + 1}</span><strong>{item}</strong></div>
          ))}
        </div>
      </section>

      <section className="identity section-shell" id="about">
        <div className="section-label"><span>01</span><b>ABOUT CREST VOLT</b></div>
        <div className="identity-logo">
          <img src={asset('/images/crest-volt-logo-stacked.png')} alt="CREST VOLT ブランドロゴ" />
          <p>ENGINEERING THE<br />FUTURE OF ENERGY.</p>
        </div>
        <div className="identity-statement">
          <p className="jp-intro">最高水準の品質と信頼性を追求し、<br />高度な技術で、エネルギーの未来をつくる。</p>
          <h2>日本を代表する、<br /><em>次世代エネルギー</em><br />インフラ企業へ。</h2>
        </div>
        <div className="identity-copy">
          <p className="company-id"><strong>CREST VOLT株式会社</strong><span>クレストヴォルト株式会社 / CREST VOLT Inc.</span></p>
          <p>エネルギー資産の開発、投資、建設、制御、運用を一貫して担う、日本発の次世代エネルギーインフラ企業です。</p>
          <p>CRESTは最高基準と信頼品質を、VOLTは電力・蓄電・系統・EV・制御技術を象徴します。</p>
        </div>
        <div className="identity-fields">
          {[
            ['01', 'RELIABILITY', '信頼性'],
            ['02', 'TECHNOLOGY', '技術'],
            ['03', 'ENERGY', 'エネルギー'],
            ['04', 'INFRASTRUCTURE', '社会基盤'],
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
              <p>DEVELOPMENT × INVESTMENT × EPC × CONTROL × OPERATION</p>
              <h2>エネルギーを、<br />社会インフラへ変える。</h2>
            </div>
            <p>CREST VOLTは、設備を販売するだけの会社ではありません。案件開発から投資、EPC、デジタル制御、長期運用までを統合し、安全で効率的なエネルギー環境を実現します。</p>
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
            <strong>INTEGRATED ENERGY INFRASTRUCTURE</strong>
            <p>発電・蓄電・充電・制御が連携する、強靭な社会基盤へ。</p>
          </div>
        </div>
      </section>

      <section className="business section-shell" id="business">
        <div className="section-label"><span>03</span><b>BUSINESS PORTFOLIO</b></div>
        <div className="section-heading">
          <h2>日本の次代を支える、<br /><em>5つの事業基盤。</em></h2>
          <p>太陽光、蓄電、EV、EPC、投資開発。<br />技術・工程・資本をつなぎ、インフラとしての価値を最大化します。</p>
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
          <div className="section-label"><span>06</span><b>CREST VOLT LAB / 技術開発センター</b></div>
          <p className="tech-formula">C-EMS <i>×</i> AI <i>×</i> VPP</p>
          <h2>エネルギーを制御し、<br />インフラを進化させる。</h2>
          <p>負荷予測、蓄電制御、光蓄充協調、遠隔監視、予知保全を実装。分散するエネルギー設備をデータでつなぎ、安全性・効率・資産価値を継続的に高めます。</p>
          <div className="tech-tags"><span>EMS</span><span>AI LOAD FORECAST</span><span>ENERGY IoT</span><span>DEMAND RESPONSE</span><span>VPP / V2G</span></div>
        </div>
        <div className="energy-console" aria-label="C-EMS エネルギー管理概念図">
          <div className="console-head"><span>CREST VOLT LAB / LIVE ASSET CONTROL</span><b>ONLINE</b></div>
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
          <div className="section-label light"><span>08</span><b>CORPORATE PHILOSOPHY</b></div>
          <div className="principle-heading"><h2>社会を支える責任を、<br />技術の力で果たす。</h2><p>エネルギーは、暮らしと産業を支える基盤です。CREST VOLTは、確かな技術と長期視点で、その責任に向き合います。</p></div>
          <div className="principle-grid">
            <article><span>01</span><b>PURPOSE / 存在意義</b><h3>強靭な社会基盤をつくる。</h3><p>エネルギー技術を通じて、持続可能で強靭な社会インフラを構築する。</p></article>
            <article><span>02</span><b>MISSION / 使命</b><h3>発電・蓄電・充電・制御を統合する。</h3><p>より安全で効率的なエネルギー環境を、技術と運用の両面から実現する。</p></article>
            <article><span>03</span><b>VISION / 目指す姿</b><h3>日本を代表する企業へ。</h3><p>日本の次代を支える、信頼されるエネルギーインフラ企業を目指す。</p></article>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-pattern" aria-hidden="true" />
        <img src={asset('/images/crest-volt-logo-stacked.png')} alt="" />
        <div>
          <div className="section-label light"><span>09</span><b>PARTNER WITH CREST VOLT</b></div>
          <h2>次のエネルギー基盤を、<br />ともにつくる。</h2>
          <p>太陽光、蓄電、EVインフラ、EPC、投資開発、技術連携に関するご相談をお待ちしています。</p>
          <a href="mailto:info@crestvolt.co.jp"><span>お問い合わせ</span><b>CONTACT US</b><i>↗</i></a>
        </div>
      </section>

      <footer>
        <div className="footer-top">
          <img src={asset('/images/crest-volt-logo-horizontal.png')} alt="CREST VOLT" />
          <p>CREST VOLT株式会社 / クレストヴォルト株式会社</p>
        </div>
        <div className="footer-message">Engineering the Future<br />of Energy.</div>
        <div className="footer-links"><a href="#about">会社概要</a><a href="#business">事業領域</a><a href="#technology">技術開発</a><a href="#contact">お問い合わせ</a></div>
        <p className="copyright">© 2026 CREST VOLT. ALL RIGHTS RESERVED.</p>
      </footer>
    </main>
  );
}
