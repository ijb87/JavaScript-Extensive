// jshint esversion: 6
// jshint asi: true
// Write a function getWeekDay(date) to show the weekday in short format: ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’.

const date = new Date(2012, 0, 3)
function getWeekDay (date) {
  const day = date.getDay()
  switch (day) {
    case 0:
      return 'SU'
    case 1:
      return 'MO'
    case 2:
      return 'TU'
    case 3:
      return 'WE'
    case 4:
      return 'TH'
    case 5:
      return 'FR'
    case 6:
      return 'SA'
    default:
  }
}
window.alert(getWeekDay(date))
