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
