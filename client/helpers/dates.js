import { months } from '../constants/constants'

function createTextDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  return months[month] + ' ' + day + ', ' + year;
}

function getNonArrayMonth(month) {
  return months[month - 1]
}

function getOrdinalIndicator(date) {
  if (date === '01' || date === '21' || date === '31') return 'st'
  if (date === '02' || date === '22') return 'nd'
  if (date === '03' || date === '23') return 'rd'

  return 'th'
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
