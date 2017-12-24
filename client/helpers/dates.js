const arrayOfMonths = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July',
                      'August', 'September', 'October', 'November', 'December']

function createTextDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  return arrayOfMonths[month] + ' ' + day + ', ' + year;
}

export {
  createTextDate,
}
