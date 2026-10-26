import { Link } from 'react-router-dom';
import './Footer.css';

const WORLD_BAHAI_LINKS = [
  { name: 'الموقع الرسمي Bahai.org', url: 'https://www.bahai.org/ar/' },
  { name: 'مكتب الأمم المتحدة', url: 'https://www.bic.org/about/about-us-ar' },
  { name: 'مكتبة المراجع البهائية', url: 'https://reference.bahai.org/ar/' },
  { name: 'المكتبة الإعلامية البهائية', url: 'https://media.bahai.org/' },
  { name: 'معهد روحي', url: 'https://www.ruhi.org/' },
  { name: 'طليعة النور', url: 'https://www.bahai.org/dawn-of-the-light/ar' },
  { name: 'نورٌ للعالمين', url: 'https://www.bahai.org/light-to-the-world/ar' },
  { name: 'احتضانٌ وسيعُ الرِّحاب', url: 'https://www.bahai.org/widening-embrace/ar' },
];

const ARABIC_BAHAI_LINKS = [
  { name: 'البهائيون في المغرب', url: 'https://www.bahai-ma.org/' },
  { name: 'البهائيون في تونس', url: 'http://www.bahaitn.org/' },
  { name: 'البهائيون في الأردن', url: 'http://www.bahaijo.org/' },
  { name: 'البهائيون في لبنان', url: 'https://www.bahaileb.org/' },
  { name: 'البهائيون في الكويت', url: 'https://www.bahaikw.org/' },
  { name: 'البهائيون في البحرين', url: 'https://www.bahaibh.org/' },
  { name: 'البهائيون في العراق', url: 'http://bahaisiniraq.org/' },
  { name: 'البهائيون في الإمارات', url: 'http://www.bahaiae.org/' },
  { name: 'البهائيون في اليمن', url: 'http://www.bahaiye.org/' },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-logo">
          <span className="logo-main">الجامعة البهائية في مصر</span>
        </div>

        <nav className="footer-nav" aria-label="روابط الموقع">
          <Link to="/#about">البهائيون في مصر</Link>
          <Link to="/figures">نماذج بارزة</Link>
          <Link to="/beliefs">ما يؤمنون به</Link>
          <Link to="/beliefs/covenant">الميثاق الإلهي</Link>
          <Link to="/contributions">مساهماتهم</Link>
          <Link to="/history">التاريخ</Link>
          <Link to="/calendar">التقويم</Link>
          <Link to="/#contact">تواصل معنا</Link>
        </nav>

        <div className="footer-divider"></div>

        <div className="footer-references">
          <div className="footer-ref-col">
            <h3 className="footer-ref-title">الجامعة البهائية حول العالم</h3>
            <span className="footer-ref-line"></span>
            <ul className="footer-ref-list">
              {WORLD_BAHAI_LINKS.map((link) => (
                <li key={link.name}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-ref-col">
            <h3 className="footer-ref-title">مواقع بهائية عربية</h3>
            <span className="footer-ref-line"></span>
            <ul className="footer-ref-list">
              {ARABIC_BAHAI_LINKS.map((link) => (
                <li key={link.name}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-divider"></div>

        <p className="footer-copy">
          &copy; {new Date().getFullYear()} الجامعة البهائية في مصر — جميع الحقوق محفوظة
        </p>
      </div>
    </footer>
  );
}
