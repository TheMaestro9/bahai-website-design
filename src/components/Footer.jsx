import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-logo">
          <span className="logo-main">الجامعة البهائية في مصر</span>
        </div>
        <nav className="footer-nav">
          <Link to="/#about">البهائيون في مصر</Link>
          <Link to="/#beliefs">ما يؤمنون به</Link>
          <Link to="/#contributions">مساهماتنا</Link>
          <Link to="/history">التاريخ</Link>
          <Link to="/#faq">الأسئلة الشائعة</Link>
          <Link to="/#contact">تواصل معنا</Link>
          <a href="https://www.bahai.org/ar" target="_blank" rel="noopener">
            الموقع العالمي
          </a>
        </nav>
        <div className="footer-divider"></div>
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} الجامعة البهائية في مصر — جميع الحقوق محفوظة
        </p>
      </div>
    </footer>
  );
}
