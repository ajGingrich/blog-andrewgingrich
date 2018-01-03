import { months } from '../constants/constants'

function createTextDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  return months[month] + ' ' + day + ', ' + year;
}

function getNonArrayMonth(month) {
  return arrayOfMonths[month - 1]
}

export {
  createTextDate,
  getNonArrayMonth,
}
