# Baha'i Calendar Integration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add the current Baha'i (Badíʿ) calendar date to the website header near the logo in Arabic, transitioning to the next Baha'i day at 6:00 PM local time.

**Architecture:** Create a self-contained, pure JS calendar converter `badiCalendar.js` with a lookup table (2015-2035) for vernal equinox (Naw-Rúz) and Twin Birthday dates. Integrate it into the `Header` component with real-time updates and responsive glassmorphic styling.

**Tech Stack:** React (ESM), Vanilla CSS, Native Node.js (for testing)

---

### Task 1: Create Baha'i Calendar Utility and Tests

**Files:**
- Create: `src/utils/badiCalendar.js`
- Create: `src/utils/testBadiCalendar.js`

- [ ] **Step 1: Write the tests for date conversion and numeral formatting**
  Create `src/utils/testBadiCalendar.js` with Node's built-in `node:assert` testing assertions covering standard dates, leap years, and the 6:00 PM sunset rollover.

  ```javascript
  import assert from 'node:assert';
  import { getBadiDate, toArabicNumerals } from './badiCalendar.js';

  console.log('Running Baha\'i Calendar tests...');

  // Test Arabic numeral formatting
  assert.strictEqual(toArabicNumerals(183), '١٨٣');
  assert.strictEqual(toArabicNumerals(1), '١');
  assert.strictEqual(toArabicNumerals(0), '٠');
  console.log('✓ Arabic numerals formatting passed.');

  // Test date conversion for Naw-Rúz 2026 (starts March 21, 2026 Gregorian)
  // March 21, 2026 at 12:00 PM (before 6 PM) -> 1 Bahá 183 B.E.
  const dateNawRuzDay = new Date('2026-03-21T12:00:00');
  const resultNawRuz = getBadiDate(dateNawRuzDay);
  assert.strictEqual(resultNawRuz.day, 1);
  assert.strictEqual(resultNawRuz.monthName, 'البهاء');
  assert.strictEqual(resultNawRuz.year, 183);
  console.log('✓ Naw-Rúz day conversion passed.');

  // Test 6:00 PM transition (Sunset)
  // March 20, 2026 at 7:00 PM -> 1 Bahá 183 B.E. (shifted to next Baha'i day)
  const dateNawRuzEve = new Date('2026-03-20T19:00:00');
  const resultNawRuzEve = getBadiDate(dateNawRuzEve);
  assert.strictEqual(resultNawRuzEve.day, 1);
  assert.strictEqual(resultNawRuzEve.monthName, 'البهاء');
  assert.strictEqual(resultNawRuzEve.year, 183);
  console.log('✓ 6:00 PM Sunset transition passed.');

  // Test middle of the Baha'i Year (e.g. today June 12, 2026, before 6 PM)
  // Naw-Rúz 2026 is March 21.
  // March has 31 days. March 21 to March 31 = 11 days.
  // April has 30 days.
  // May has 31 days.
  // June 1 to June 12 = 12 days.
  // Total elapsed days = 11 + 30 + 31 + 12 = 84 days since March 20.
  // Baha'i day of year: 84.
  // 84 / 19 = 4 months elapsed (4 * 19 = 76 days). Day of 5th month = 8.
  // 5th month is 'النور' (Núr). Day of month is 8.
  const dateMiddle = new Date('2026-06-12T12:00:00');
  const resultMiddle = getBadiDate(dateMiddle);
  assert.strictEqual(resultMiddle.day, 8);
  assert.strictEqual(resultMiddle.monthName, 'النور');
  assert.strictEqual(resultMiddle.year, 183);
  console.log('✓ Mid-year conversion passed.');

  // Test Ayyám-i-Há in a leap Baha'i year (B.E. 182, starts March 20, 2025; B.E. 183 starts March 21, 2026 -> 366 days)
  // Days 1-342 are Months 1-18.
  // Days 343-347 are Ayyám-i-Há (5 days because of leap year).
  // Days 348-366 is Month 19 ('Alá').
  // Day 343: Feb 25, 2026 (before 6 PM) -> 1 Ayyám-i-Há 182
  const dateAyyamStart = new Date('2026-02-25T12:00:00');
  const resultAyyamStart = getBadiDate(dateAyyamStart);
  assert.strictEqual(resultAyyamStart.day, 1);
  assert.strictEqual(resultAyyamStart.monthName, 'أيام الهاء');
  console.log('✓ Ayyám-i-Há start passed.');

  // Day 347: March 1, 2026 (before 6 PM) -> 5 Ayyám-i-Há 182
  const dateAyyamEnd = new Date('2026-03-01T12:00:00');
  const resultAyyamEnd = getBadiDate(dateAyyamEnd);
  assert.strictEqual(resultAyyamEnd.day, 5);
  assert.strictEqual(resultAyyamEnd.monthName, 'أيام الهاء');
  console.log('✓ Ayyám-i-Há leap length passed.');

  // Day 348: March 2, 2026 (before 6 PM) -> 1 'Alá' 182
  const dateAlaStart = new Date('2026-03-02T12:00:00');
  const resultAlaStart = getBadiDate(dateAlaStart);
  assert.strictEqual(resultAlaStart.day, 1);
  assert.strictEqual(resultAlaStart.monthName, 'العلاء');
  console.log('✓ Month 19 (\'Alá\') start passed.');

  console.log('All tests passed successfully!');
  ```

- [ ] **Step 2: Run tests to verify they fail (since implementation doesn't exist yet)**
  Run command in the workspace:
  `node src/utils/testBadiCalendar.js`
  Expected output: Error because `./badiCalendar.js` cannot be resolved.

- [ ] **Step 3: Implement `src/utils/badiCalendar.js`**
  Write the core calculations, lookup table (2015-2035), and Arabic formatting functions.

  ```javascript
  export const BADI_YEARS_DATA = {
    2015: { nawRuz: '2015-03-21', birthBab: '2015-11-13', birthBaha: '2015-11-14', yearBE: 172 },
    2016: { nawRuz: '2016-03-20', birthBab: '2016-11-01', birthBaha: '2016-11-02', yearBE: 173 },
    2017: { nawRuz: '2017-03-20', birthBab: '2017-10-21', birthBaha: '2017-10-22', yearBE: 174 },
    2018: { nawRuz: '2018-03-21', birthBab: '2018-11-08', birthBaha: '2018-11-09', yearBE: 175 },
    2019: { nawRuz: '2019-03-21', birthBab: '2019-10-28', birthBaha: '2019-10-29', yearBE: 176 },
    2020: { nawRuz: '2020-03-20', birthBab: '2020-10-17', birthBaha: '2020-10-18', yearBE: 177 },
    2021: { nawRuz: '2021-03-20', birthBab: '2021-11-05', birthBaha: '2021-11-06', yearBE: 178 },
    2022: { nawRuz: '2022-03-21', birthBab: '2022-10-25', birthBaha: '2022-10-26', yearBE: 179 },
    2023: { nawRuz: '2023-03-21', birthBab: '2023-10-15', birthBaha: '2023-10-16', yearBE: 180 },
    2024: { nawRuz: '2024-03-20', birthBab: '2024-11-02', birthBaha: '2024-11-03', yearBE: 181 },
    2025: { nawRuz: '2025-03-20', birthBab: '2025-10-21', birthBaha: '2025-10-22', yearBE: 182 },
    2026: { nawRuz: '2026-03-21', birthBab: '2026-11-10', birthBaha: '2026-11-11', yearBE: 183 },
    2027: { nawRuz: '2027-03-21', birthBab: '2027-10-30', birthBaha: '2027-10-31', yearBE: 184 },
    2028: { nawRuz: '2028-03-20', birthBab: '2028-10-19', birthBaha: '2028-10-20', yearBE: 185 },
    2029: { nawRuz: '2029-03-20', birthBab: '2029-11-06', birthBaha: '2029-11-07', yearBE: 186 },
    2030: { nawRuz: '2030-03-20', birthBab: '2030-10-27', birthBaha: '2030-10-28', yearBE: 187 },
    2031: { nawRuz: '2031-03-21', birthBab: '2031-10-16', birthBaha: '2031-10-17', yearBE: 188 },
    2032: { nawRuz: '2032-03-20', birthBab: '2032-11-03', birthBaha: '2032-11-04', yearBE: 189 },
    2033: { nawRuz: '2033-03-20', birthBab: '2033-10-23', birthBaha: '2033-10-24', yearBE: 190 },
    2034: { nawRuz: '2034-03-20', birthBab: '2034-10-12', birthBaha: '2034-10-13', yearBE: 191 },
    2035: { nawRuz: '2035-03-21', birthBab: '2035-10-31', birthBaha: '2035-11-01', yearBE: 192 }
  };

  export const BADI_MONTHS_AR = [
    'البهاء', 'الجلال', 'الجمال', 'العظمة', 'النور', 'الرحمة',
    'الكلمات', 'الكمال', 'الأسماء', 'العزة', 'المشيئة', 'العلم',
    'القدرة', 'القول', 'المسائل', 'الشرف', 'السلطان', 'الملك',
    'العلاء'
  ];

  export const BADI_WEEKDAYS_AR = {
    0: 'الجمال',      // Sunday
    1: 'الكمال',      // Monday
    2: 'الفضال',      // Tuesday
    3: 'العدال',      // Wednesday
    4: 'الاستجلال',    // Thursday
    5: 'الاستقلال',    // Friday
    6: 'الجلال'       // Saturday
  };

  export function toArabicNumerals(num) {
    const arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    return num.toString().replace(/[0-9]/g, (w) => arabicDigits[+w]);
  }

  export function getBadiDate(date = new Date()) {
    // 1. Shift by 1 day if hour >= 18 (6:00 PM local time)
    const adjustedDate = new Date(date.getTime());
    if (adjustedDate.getHours() >= 18) {
      adjustedDate.setDate(adjustedDate.getDate() + 1);
    }

    // Zero out hours/minutes/seconds for day-level calculations
    adjustedDate.setHours(0, 0, 0, 0);

    const yearGregorian = adjustedDate.getFullYear();

    // 2. Determine Baha'i year start (Naw-Ruz of current Gregorian year)
    let currentNawRuzData = BADI_YEARS_DATA[yearGregorian];
    if (!currentNawRuzData) {
      throw new Error(`Data for year ${yearGregorian} is not in the Baha'i calendar lookup table.`);
    }

    let currentNawRuz = new Date(currentNawRuzData.nawRuz);
    currentNawRuz.setHours(0, 0, 0, 0);

    let nawRuzYear = yearGregorian;
    // If adjusted date falls before this year's Naw-Rúz, use previous year's Naw-Rúz
    if (adjustedDate < currentNawRuz) {
      nawRuzYear = yearGregorian - 1;
      currentNawRuzData = BADI_YEARS_DATA[nawRuzYear];
      if (!currentNawRuzData) {
        throw new Error(`Data for year ${nawRuzYear} is not in the Baha'i calendar lookup table.`);
      }
      currentNawRuz = new Date(currentNawRuzData.nawRuz);
      currentNawRuz.setHours(0, 0, 0, 0);
    }

    // Determine the next Naw-Ruz to compute year length (leap year detection)
    const nextNawRuzData = BADI_YEARS_DATA[nawRuzYear + 1];
    if (!nextNawRuzData) {
      throw new Error(`Data for next year ${nawRuzYear + 1} is not in the lookup table.`);
    }
    const nextNawRuz = new Date(nextNawRuzData.nawRuz);
    nextNawRuz.setHours(0, 0, 0, 0);

    // Baha'i Year length
    const totalDaysInYear = Math.round((nextNawRuz - currentNawRuz) / (1000 * 60 * 60 * 24));
    const ayyamIHaLength = totalDaysInYear - 361; // 4 or 5 days

    // Day of the Baha'i year (1-indexed)
    const elapsedDays = Math.round((adjustedDate - currentNawRuz) / (1000 * 60 * 60 * 24));
    const dayOfYear = elapsedDays + 1;

    let day = 1;
    let monthIndex = 0; // 0-based index for BADI_MONTHS_AR
    let monthName = '';

    if (dayOfYear <= 18 * 19) {
      // Standard months 1 to 18
      monthIndex = Math.floor((dayOfYear - 1) / 19);
      day = ((dayOfYear - 1) % 19) + 1;
      monthName = BADI_MONTHS_AR[monthIndex];
    } else if (dayOfYear <= 18 * 19 + ayyamIHaLength) {
      // Ayyám-i-Há
      day = dayOfYear - 18 * 19;
      monthName = 'أيام الهاء';
      monthIndex = -1; // Special indicator
    } else {
      // Month 19 ('Alá)
      day = dayOfYear - 18 * 19 - ayyamIHaLength;
      monthName = BADI_MONTHS_AR[18];
      monthIndex = 18;
    }

    const year = currentNawRuzData.yearBE;
    const weekdayName = BADI_WEEKDAYS_AR[adjustedDate.getDay()];

    return {
      day,
      monthIndex,
      monthName,
      year,
      weekdayName,
      formatted: `${toArabicNumerals(day)} ${monthName} ${toArabicNumerals(year)} ب.هـ`,
      fullFormatted: `${weekdayName}، ${toArabicNumerals(day)} ${monthName} ${toArabicNumerals(year)} ب.هـ`
    };
  }
  ```

- [ ] **Step 4: Run tests to verify they pass**
  Run command:
  `node src/utils/testBadiCalendar.js`
  Expected output: "All tests passed successfully!"

---

### Task 2: Integrate Baha'i Date into Header Component

**Files:**
- Modify: `src/components/Header.jsx`
- Modify: `src/components/Header.css`

- [ ] **Step 1: Update `src/components/Header.jsx` with date logic and render badge**
  Import the conversion function, calculate the Baha'i date in a React Hook, and insert the container next to the logo.

  Code changes:
  ```diff
  + import { getBadiDate } from '../utils/badiCalendar';
  ```
  ```diff
    export default function Header() {
      const [isOpen, setIsOpen] = useState(false);
      const [isScrolled, setIsScrolled] = useState(false);
  +   const [badiDate, setBadiDate] = useState('');
  
      const location = useLocation();
  
      useEffect(() => {
        const handleScroll = () => {
          setIsScrolled(window.scrollY > 60);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
  
  +   useEffect(() => {
  +     // Initial check
  +     const updateDate = () => {
  +       try {
  +         const dateInfo = getBadiDate(new Date());
  +         setBadiDate(dateInfo.formatted);
  +       } catch (error) {
  +         console.error('Error calculating Baha\'i date:', error);
  +       }
  +     };
  +     updateDate();
  +
  +     // Set up interval to check/update date every minute
  +     const interval = setInterval(updateDate, 60000);
  +     return () => clearInterval(interval);
  +   }, []);
  ```
  And render the badge within the header logo container:
  ```diff
            <div className="header-logo">
              <Link to="/" className="logo-link">
                <div className="logo-text">
                  <span className="logo-main">الجامعة البهائية في مصر</span>
                  <span className="logo-sub">الموقع الرسمي</span>
                </div>
              </Link>
  +           {badiDate && (
  +             <div 
  +               className="header-badi-date" 
  +               title="يتم تحديث التاريخ البهائي في تمام الساعة 6:00 مساءً بالتوقيت المحلي"
  +             >
  +               <span className="badi-label">التاريخ البهائي:</span>
  +               <span className="badi-value">{badiDate}</span>
  +             </div>
  +           )}
            </div>
  ```
  And also render it inside the **Mobile Nav** drawer list so that it's accessible on mobile devices:
  ```diff
        {/* Mobile Nav Drawer */}
        <div className={`mobile-nav ${isOpen ? 'open' : ''}`} id="mobile-nav">
  +       {badiDate && (
  +         <div className="mobile-badi-date">
  +           <span className="badi-label">التاريخ البهائي:</span>
  +           <span className="badi-value">{badiDate}</span>
  +         </div>
  +       )}
          <ul>
  ```

- [ ] **Step 2: Update `src/components/Header.css` with responsive & dynamic styling**
  Add styles to transition text colors from white (transparent header state) to deep blue/gray (scrolled header state), and style the mobile drawer presentation.

  ```css
  /* Baha'i Date Badge */
  .header-logo {
      display: flex;
      align-items: center;
      gap: 1.5rem;
  }
  
  .header-badi-date {
      display: flex;
      flex-direction: column;
      gap: 0.15rem;
      padding: 0.25rem 0.75rem;
      border-radius: 6px;
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid rgba(255, 255, 255, 0.15);
      font-family: var(--font-sans);
      transition: all 0.3s ease;
      cursor: help;
  }
  
  .site-header.scrolled .header-badi-date {
      background: var(--blue-pale, #f0f7ff);
      border-color: rgba(0, 102, 204, 0.15);
  }
  
  .header-badi-date .badi-label {
      font-size: 0.62rem;
      color: rgba(255, 255, 255, 0.7);
      font-weight: 600;
  }
  
  .site-header.scrolled .header-badi-date .badi-label {
      color: var(--text-light, #666);
  }
  
  .header-badi-date .badi-value {
      font-size: 0.85rem;
      font-weight: 700;
      color: var(--white);
      white-space: nowrap;
  }
  
  .site-header.scrolled .header-badi-date .badi-value {
      color: var(--blue-deep, #004488);
  }
  
  /* Mobile Nav Date Display */
  .mobile-badi-date {
      padding: 0.75rem 1rem;
      background: #f8fafc;
      border-radius: 8px;
      border: 1px solid #e2e8f0;
      margin-bottom: 1.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-family: var(--font-sans);
  }
  
  .mobile-badi-date .badi-label {
      font-size: 0.75rem;
      color: #64748b;
      font-weight: 600;
  }
  
  .mobile-badi-date .badi-value {
      font-size: 0.9rem;
      font-weight: 700;
      color: #0f172a;
  }
  
  /* Responsive Header adaptation */
  @media (max-width: 991px) {
      .header-badi-date {
          display: none; /* Hide in header on tablet/mobile to avoid layout issues */
      }
      .header-logo {
          gap: 0.8rem;
      }
  }
  ```

- [ ] **Step 3: Verify execution and styles locally**
  Check the browser output using the running `npm run dev` server at http://localhost:5173. Confirm the date displays correctly, shifts to the scrolled styling when scrolling down, and displays correctly in the mobile navigation drawer when resizing the browser.
