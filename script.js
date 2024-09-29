//your JS code here. If required.
function daysOfAYear(year) {
    // A leap year is:
    // - Divisible by 4
    // - Not divisible by 100, unless also divisible by 400
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return 366; // Leap year
    } else {
        return 365; // Non-leap year
    }
}