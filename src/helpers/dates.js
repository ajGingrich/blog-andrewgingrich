import { months } from 'constants/constants'

function createTextDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const ordinalIndicator = getOrdinalIndicator(day);

  return months[month] + ' ' + day + ordinalIndicator + ', ' + year;
}

function getNonArrayMonth(month) {
  return months[month - 1]
}

function getOrdinalIndicator(date) {
  if (typeof date === 'number') date = convertNumberDatetoString(date)

  if (date === '01' || date === '21' || date === '31') return 'st'
  if (date === '02' || date === '22') return 'nd'
  if (date === '03' || date === '23') return 'rd'

  return 'th'
}

function convertNumberDatetoString(num) {
  if (num < 10) return '0' + num.toString()

  return num.toString()
}

function getSingleDigitDate(date) {
  if (parseInt(date) < 10) return date.slice(1)

  return date
}

export {
  createTextDate,
  getNonArrayMonth,
  getOrdinalIndicator,
  getSingleDigitDate,
}
