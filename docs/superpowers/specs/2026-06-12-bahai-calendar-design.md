# Spec: Baha'i Calendar Integration Design

This document details the implementation design for adding the current Baha'i (Badíʿ) calendar date to the website header in Arabic and supporting future calculations for important Baha'i dates.

## Background & Rules of the Badíʿ Calendar
1. **Year Structure**: 19 months of 19 days each, with 4 or 5 intercalary days (Ayyám-i-Há) inserted between the 18th month (*Mulk*) and the 19th month (*'Alá'*).
2. **Start of Year (Naw-Rúz)**: Occurs at the astronomical vernal equinox calculated for Tehran. Typically falls on March 20 or March 21 Gregorian.
3. **Leap Years**: A year is 366 days long if the next Naw-Rúz falls 366 days after the current one. This determines whether Ayyám-i-Há has 4 or 5 days.
4. **Sunset Transition**: The Baha'i day transitions at sunset. For our implementation, we approximate this at **6:00 PM local time**.
5. **Epoch**: The calendar began in 1844 AD (B.E. 1). The current year as of mid-2026 is **183 B.E.**

---

## 1. Custom Baha'i Calendar Utility
We will create a lightweight utility file: `src/utils/badiCalendar.js`.

### Lookup Table (2015 to 2035)
To support fully accurate astronomical dates without the heavy calculations of celestial positions, we include a lookup table mapping Gregorian years to their corresponding B.E. year start and Twin Birthdays.

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
```

### Arabic Names
```javascript
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
```

### Core Conversion Logic
We will write `getBadiDate(date)` which:
1. Adjusts the input date if the hour is $\ge 18$ (adds 1 day).
2. Looks up the appropriate Naw-Rúz date of the current or previous year depending on whether the adjusted date falls before the current year's Naw-Rúz.
3. Computes the day-of-year since Naw-Rúz.
4. Checks leap-year status using the difference between current and next Naw-Rúz dates to determine the size of Ayyám-i-Há.
5. Computes day, month index, and year.
6. Returns formatted Arabic strings and numeral translations (e.g. converting `12` to `١٢`).

---

## 2. Header UI Integration
We will modify `src/components/Header.jsx` to render the date next to the logo.

### Code Structure
- Call `getBadiDate(new Date())` within a `useState`/`useEffect` hook to calculate the date on component mount.
- Add a tiny timer that refreshes the date at midnight and at 6:00 PM (or simply checks every minute).
- Render `<div className="header-date-badge">` containing the Baha'i date in Arabic numerals.
- Provide a `title` attribute in Arabic explaining the sunset transition: `"يتم تحديث التاريخ البهائي يومياً في تمام الساعة 6:00 مساءً"` (The Baha'i date is updated daily at 6:00 PM).

### Responsive Design
- For screens larger than `768px`, show the badge next to the logo.
- For smaller screens, hide it from the header bar to avoid layout shifting/clutter, and display it as an elegant card or header inside the mobile navigation menu.

---

## 3. Important Dates Support
To make sure we can easily display the list of Holy Days on a future page, the utility will export `getHolyDaysForYear(gregorianYear)` returning an array of objects:
- `name`: Arabic name of the Holy Day
- `badiDate`: The fixed Baha'i date (e.g., `١٣ جلال`)
- `gregorianDate`: The calculated Gregorian date for that year (e.g. `2026-04-21` or `2026-11-10` for Twin Birthdays).
- `workSuspended`: A boolean indicating if work is suspended.

This meets all requirements cleanly, dynamically, and with zero dependencies.
