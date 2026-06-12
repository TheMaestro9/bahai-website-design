import assert from 'node:assert';
import { getBadiDate, toArabicNumerals, getHolyDaysForYear } from './badiCalendar.js';

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

// Test getHolyDaysForYear calculation for B.E. 183 (2026-2027)
const holyDays183 = getHolyDaysForYear(183);
assert.strictEqual(holyDays183.length, 11);

// Check if Naw-Rúz is March 21, 2026
const nawRuz183 = holyDays183.find(h => h.name.includes('النوروز'));
assert.strictEqual(nawRuz183.gregorianDate, '2026-03-21');
assert.strictEqual(nawRuz183.workSuspended, true);

// Check if first day of Ridván is April 21, 2026
const ridvan183 = holyDays183.find(h => h.name.includes('الأول من عيد الرضوان'));
assert.strictEqual(ridvan183.gregorianDate, '2026-04-21');

// Check Twin Birthdays for 2026 (Birth of Báb: Nov 10, Birth of Bahá'u'lláh: Nov 11)
const birthBab183 = holyDays183.find(h => h.name.includes('مولد الباب'));
assert.strictEqual(birthBab183.gregorianDate, '2026-11-10');

const birthBaha183 = holyDays183.find(h => h.name.includes('مولد بهاء الله'));
assert.strictEqual(birthBaha183.gregorianDate, '2026-11-11');

// Check Day of the Covenant is November 26, 2026 (March 21 + 250 days)
const covenant183 = holyDays183.find(h => h.name.includes('الميثاق'));
assert.strictEqual(covenant183.gregorianDate, '2026-11-26');
assert.strictEqual(covenant183.workSuspended, false);

console.log('✓ getHolyDaysForYear tests passed.');

console.log('All tests passed successfully!');
