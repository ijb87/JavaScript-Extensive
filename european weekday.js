// jshint esversion: 6
// jshint asi: true
// European countries have days of week starting with Monday (number 1), then Tuesday (number 2) and till Sunday (number 7). Write a function getLocalDay(date) that returns the “European” day of week for date.

const date = new Date(2012, 0, 3)
function getWeekDay (date) {
  let day = date.getDay()
  if (day === 0) {
    day = 7
  }
  return day
}
window.alert(getWeekDay(date))
