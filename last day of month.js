// jshint esversion: 6
// jshint asi: true

function getLastDayOfMonth (year, month) {
  const d = new Date(year, month + 1, 0)
  return d.getDate()
}
getLastDayOfMonth(2019, 8)
