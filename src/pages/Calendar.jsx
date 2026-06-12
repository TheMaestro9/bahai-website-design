import { useState, useEffect } from 'react';
import { getBadiDate, getHolyDaysForYear, toArabicNumerals, BADI_YEARS_DATA } from '../utils/badiCalendar';
import './Calendar.css';

export default function Calendar() {
  const [todayBadi, setTodayBadi] = useState(null);
  const [selectedYear, setSelectedYear] = useState(183); // Defaults to B.E. 183 (2026)
  const [holyDays, setHolyDays] = useState([]);

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
    
    // Set today's date
    try {
      const todayInfo = getBadiDate(new Date());
      setTodayBadi(todayInfo);
      setSelectedYear(todayInfo.year);
    } catch (error) {
      console.error('Error getting today\'s Baha\'i date:', error);
    }
  }, []);

  useEffect(() => {
    // Load Holy Days for selected year
    try {
      const list = getHolyDaysForYear(selectedYear);
      setHolyDays(list);
    } catch (error) {
      console.error('Error getting Baha\'i Holy Days:', error);
    }
  }, [selectedYear]);

  // Extract available B.E. years from metadata
  const availableYears = Object.values(BADI_YEARS_DATA)
    .map((y) => y.yearBE)
    .sort((a, b) => a - b);

  // Format Gregorian date in Arabic
  const formatGregorianInArabic = (dateStr) => {
    const d = new Date(dateStr + 'T00:00:00');
    return d.toLocaleDateString('ar-EG', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  // 19 Months static metadata (with meanings and standard starting days)
  const monthsData = [
    { num: 1, name: 'البهاء', meaning: 'Splendour', dateRange: '٢١ مارس - ٨ أبريل' },
    { num: 2, name: 'الجلال', meaning: 'Glory', dateRange: '٩ أبريل - ٢٧ أبريل' },
    { num: 3, name: 'الجمال', meaning: 'Beauty', dateRange: '٢٨ أبريل - ١٦ مايو' },
    { num: 4, name: 'العظمة', meaning: 'Grandeur', dateRange: '١٧ مايو - ٤ يونيو' },
    { num: 5, name: 'النور', meaning: 'Light', dateRange: '٥ يونيو - ٢٣ يونيو' },
    { num: 6, name: 'الرحمة', meaning: 'Mercy', dateRange: '٢٤ يونيو - ١٢ يوليو' },
    { num: 7, name: 'الكلمات', meaning: 'Words', dateRange: '١٣ يوليو - ٣١ يوليو' },
    { num: 8, name: 'الكمال', meaning: 'Perfection', dateRange: '١ أغسطس - ١٩ أغسطس' },
    { num: 9, name: 'الأسماء', meaning: 'Names', dateRange: '٢٠ أغسطس - ٧ سبتمبر' },
    { num: 10, name: 'العزة', meaning: 'Might', dateRange: '٨ سبتمبر - ٢٦ سبتمبر' },
    { num: 11, name: 'المشيئة', meaning: 'Will', dateRange: '٢٧ سبتمبر - ١٥ أكتوبر' },
    { num: 12, name: 'العلم', meaning: 'Knowledge', dateRange: '١٦ أكتوبر - ٣ نوفمبر' },
    { num: 13, name: 'القدرة', meaning: 'Power', dateRange: '٤ نوفمبر - ٢٢ نوفمبر' },
    { num: 14, name: 'القول', meaning: 'Speech', dateRange: '٢٣ نوفمبر - ١١ ديسمبر' },
    { num: 15, name: 'المسائل', meaning: 'Questions', dateRange: '١٢ ديسمبر - ٣٠ ديسمبر' },
    { num: 16, name: 'الشرف', meaning: 'Honour', dateRange: '٣١ ديسمبر - ١٨ يناير' },
    { num: 17, name: 'السلطان', meaning: 'Sovereignty', dateRange: '١٩ يناير - ٦ فبراير' },
    { num: 18, name: 'الملك', meaning: 'Dominion', dateRange: '٧ فبراير - ٢٥ فبراير' },
    { num: null, name: 'أيام الهاء', meaning: 'Intercalary Days', dateRange: '٢٦ فبراير - ١ مارس / ٢ مارس' },
    { num: 19, name: 'العلاء', meaning: 'Loftiness', dateRange: '٢ مارس / ٣ مارس - ٢٠ مارس' }
  ];

  return (
    <div className="calendar-page" id="main-content">
      {/* Hero Header */}
      <section className="calendar-hero">
        <div className="hero-overlay"></div>
        <div className="hero-container">
          <h1 className="hero-title">التقويم البهائي (البديع)</h1>
          <p className="hero-subtitle">
            تقويم شمسي أسسه الباب، يتكون من ١٩ شهراً، في كل شهر ١٩ يوماً، بالإضافة إلى أيام الهاء الاستثنائية.
          </p>
        </div>
      </section>

      <div className="calendar-body-wrapper">
        {/* Today's Card */}
        {todayBadi && (
          <section className="today-card-section">
            <div className="today-card">
              <span className="card-tag">تاريخ اليوم</span>
              <h2 className="today-badi-text">{todayBadi.fullFormatted}</h2>
              <div className="today-meta">
                <div className="meta-item">
                  <span className="meta-label">الموافق ميلادياً</span>
                  <span className="meta-value">
                    {formatGregorianInArabic(new Date().toISOString().split('T')[0])}
                  </span>
                </div>
                <div className="meta-separator"></div>
                <div className="meta-item">
                  <span className="meta-label">الغروب</span>
                  <span className="meta-value">
                    يبدأ اليوم البهائي التالي عند الساعة ٦:٠٠ مساءً
                  </span>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Holy Days Section */}
        <section className="holydays-section">
          <div className="section-header">
            <div className="header-info">
              <h2 className="section-title">الأيام المقدسة والذكرى السنوية</h2>
              <p className="section-desc">عرض الأيام والاحتفالات البهائية الرسمية والتواريخ الميلادية المقابلة لها.</p>
            </div>
            
            <div className="year-selector-container">
              <label htmlFor="year-select" className="year-label">العام البهائي:</label>
              <select
                id="year-select"
                className="year-dropdown"
                value={selectedYear}
                onChange={(e) => setSelectedYear(Number(e.target.value))}
              >
                {availableYears.map((yr) => (
                  <option key={yr} value={yr}>
                    {toArabicNumerals(yr)} ب.هـ
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="holydays-list">
            {holyDays.map((hd, idx) => (
              <div className="holyday-card" key={idx}>
                <div className="holyday-header">
                  <div className="holyday-title-area">
                    <h3 className="holyday-name">{hd.name}</h3>
                    <span className="holyday-badi-date">{hd.badiDate}</span>
                  </div>
                  <span className={`suspension-badge ${hd.workSuspended ? 'suspended' : 'non-suspended'}`}>
                    {hd.workSuspended ? 'عطلة رسمية (يوقف العمل)' : 'يوم تذكاري (لا يوقف العمل)'}
                  </span>
                </div>
                <p className="holyday-desc">{hd.desc}</p>
                <div className="holyday-gregorian">
                  <span className="gregorian-label">التاريخ الميلادي:</span>
                  <span className="gregorian-value">{formatGregorianInArabic(hd.gregorianDate)}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Baha'i Months Reference */}
        <section className="months-reference-section">
          <h2 className="section-title text-center">أشهر السنة البهائية</h2>
          <p className="section-desc text-center">
            تسمى أشهر السنة البهائية بأسماء صفات الله الحسنى.
          </p>

          <div className="months-grid">
            {monthsData.map((m, idx) => (
              <div className="month-grid-item" key={idx}>
                <div className="month-num">
                  {m.num !== null ? toArabicNumerals(m.num) : '★'}
                </div>
                <div className="month-info">
                  <h3 className="month-name-ar">{m.name}</h3>
                  <span className="month-meaning">{m.meaning}</span>
                  <span className="month-range">{m.dateRange}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="months-note">
            * ملاحظة: التواريخ الميلادية المقابلة للأشهر تقريبية وتتأثر بيوم عطلة رأس السنة (النوروز) إذا صادف ٢٠ أو ٢١ مارس ميلادياً.
          </p>
        </section>
      </div>
    </div>
  );
}
