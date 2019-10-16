// jshint esversion: 6
// jshint asi: true
// Create a function getDateAgo(date, days) to return the day of month days ago from the date.
function getDateAgo (date, days) {
  const dateCopy = new Date(date)

  dateCopy.setDate(date.getDate() - days)
  return dateCopy.getDate()
}

const date = new Date(2015, 0, 2)

window.alert(Date.setTime(getDateAgo(date, 1)))
window.alert(Date.setTime(getDateAgo(date, 2)))
window.alert(Date.setTime(getDateAgo(date, 365)))
