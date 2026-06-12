import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import { getBadiDate } from '../utils/badiCalendar';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [badiDate, setBadiDate] = useState('');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateDate = () => {
      try {
        const dateInfo = getBadiDate(new Date());
        setBadiDate(dateInfo.formatted);
      } catch (error) {
        console.error('Error calculating Baha\'i date:', error);
      }
    };
    updateDate();
    const interval = setInterval(updateDate, 60000);
    return () => clearInterval(interval);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Helper for hash links or page links
  const NavLink = ({ to, children, hash }) => {
    const isHomePage = location.pathname === '/';
    if (isHomePage && hash) {
      return <li><a href={hash} onClick={closeMenu}>{children}</a></li>;
    }
    return <li><Link to={to} onClick={closeMenu}>{children}</Link></li>;
  };

  return (
    <>
      <a href="#main-content" className="skip-link">تخطى إلى المحتوى الرئيسي</a>
      <header className={`site-header ${isScrolled ? 'scrolled' : ''}`} id="site-header">
        <div className="header-inner">
          <div className="header-logo">
            <Link to="/" className="logo-link">
              <div className="logo-text">
                <span className="logo-main">الجامعة البهائية في مصر</span>
                <span className="logo-sub">الموقع الرسمي</span>
              </div>
            </Link>
            {badiDate && (
              <div 
                className="header-badi-date" 
                title="يتم تحديث التاريخ البهائي في تمام الساعة 6:00 مساءً بالتوقيت المحلي"
              >
                <span className="badi-label">التاريخ البهائي</span>
                <span className="badi-value">{badiDate}</span>
              </div>
            )}
          </div>
          <nav className="header-nav">
            <ul>
              <NavLink to="/#about" hash="#about">البهائيون في مصر</NavLink>
              <NavLink to="/#beliefs" hash="#beliefs">ما يؤمنون به</NavLink>
              <NavLink to="/#contributions" hash="#contributions">مساهماتهم</NavLink>
              <NavLink to="/history">التاريخ</NavLink>
              <NavLink to="/#faq" hash="#faq">الأسئلة الشائعة</NavLink>
              <NavLink to="/#contact" hash="#contact">تواصل معنا</NavLink>
            </ul>
          </nav>
          <button 
            className={`hamburger ${isOpen ? 'active' : ''}`} 
            id="hamburger" 
            aria-label={isOpen ? "إغلاق القائمة" : "فتح القائمة"} 
            aria-expanded={isOpen} 
            aria-controls="mobile-nav"
            onClick={toggleMenu}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>

      {/* Mobile Nav Drawer */}
      <div className={`mobile-nav ${isOpen ? 'open' : ''}`} id="mobile-nav">
        {badiDate && (
          <div className="mobile-badi-date">
            <span className="badi-label">التاريخ البهائي:</span>
            <span className="badi-value">{badiDate}</span>
          </div>
        )}
        <ul>
          <NavLink to="/#about" hash="#about">البهائيون في مصر</NavLink>
          <NavLink to="/#beliefs" hash="#beliefs">ما يؤمنون به</NavLink>
          <NavLink to="/#contributions" hash="#contributions">مساهماتهم</NavLink>
          <NavLink to="/history">التاريخ</NavLink>
          <NavLink to="/#faq" hash="#faq">الأسئلة الشائعة</NavLink>
          <NavLink to="/#contact" hash="#contact">تواصل معنا</NavLink>
        </ul>
      </div>
      <div
        className={`mobile-nav-overlay ${isOpen ? 'open' : ''}`}
        id="mobile-nav-overlay"
        onClick={closeMenu}
      ></div>
    </>
  );
}
