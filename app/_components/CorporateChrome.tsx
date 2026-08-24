const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const route = (path: string) => `${basePath}${path}`;

type Section = 'company' | 'business' | 'technology' | 'investment' | 'sustainability' | 'contact';

export function CorporateHeader({ active }: { active: Section }) {
  const links: Array<[Section, string, string]> = [
    ['company', '企業情報', '/company'],
    ['business', '事業領域', '/business'],
    ['technology', '技術開発', '/technology'],
    ['investment', '投資・成長戦略', '/investment'],
  ];

  return (
    <header className="site-header subpage-nav">
      <a className="brand" href={route('/')} aria-label="CREST VOLT ホーム"><img src={route('/images/crest-volt-logo-horizontal.png')} alt="CREST VOLT" /></a>
      <nav className="main-nav" aria-label="メインナビゲーション">
        {links.map(([key, label, href]) => <a className={active === key ? 'active' : ''} href={route(href)} key={key}>{label}</a>)}
      </nav>
      <div className="header-meta"><span>JP</span><i />日本語</div>
      <a className={'header-cta ' + (active === 'contact' ? 'active' : '')} href={route('/contact')}><span>CONTACT</span><b>↗</b></a>
      <details className="mobile-menu">
        <summary>MENU <span>＋</span></summary>
        <div>{links.map(([key, label, href]) => <a href={route(href)} key={key}>{label}</a>)}<a href={route('/sustainability')}>サステナビリティ</a><a href={route('/contact')}>お問い合わせ</a></div>
      </details>
    </header>
  );
}

export function CorporateFooter() {
  return (
    <footer className="corporate-footer">
      <div className="footer-brand"><img src={route('/images/crest-volt-logo-horizontal.png')} alt="CREST VOLT" /><p>CREST VOLT株式会社<br />クレストヴォルト株式会社</p></div>
      <div className="footer-statement">エネルギーの未来を、<br />確かな技術で。</div>
      <div className="footer-links"><a href={route('/company')}>企業情報</a><a href={route('/business')}>事業領域</a><a href={route('/technology')}>技術開発</a><a href={route('/investment')}>成長戦略</a><a href={route('/sustainability')}>サステナビリティ</a><a href={route('/contact')}>お問い合わせ</a></div>
      <p className="copyright">© 2026 CREST VOLT INC. ALL RIGHTS RESERVED.</p>
    </footer>
  );
}
