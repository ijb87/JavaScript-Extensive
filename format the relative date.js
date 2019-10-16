// jshint esversion: 6
// jshint asi: true

// Write a function formatDate(date) that should format date as follows:
//
// If since date passed less than 1 second, then "right now".
// Otherwise, if since date passed less than 1 minute, then "n sec. ago".
// Otherwise, if less than an hour, then "m min. ago".
// Otherwise, the full date in the format "DD.MM.YY HH:mm". That is: "day.month.year hours:minutes", all in 2-digit format, e.g. 31.12.16 10:00.

function formatDate (date) {
  const today = new Date()
  const difference = today - date
  if (difference < 1000) {
    return 'right now'
  } else if (difference < 60000) {
    const seconds = difference / 1000
    return (seconds + ' sec. ago')
  } else if (difference < 3600000) {
    const minutes = difference / 60000
    return (minutes + ' min. ago')
  } else {
    const fullYear = date.getFullYear().toString()
    const year = fullYear.slice(-2)
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minutes = date.getMinutes()
    return (day + '.' + month + '.' + year + ',' + ' ' + hour + ':' + minutes)
  }
}

window.alert(formatDate(new Date(new Date() - 1))) // 'right now'
window.alert(formatDate(new Date(new Date() - 30 * 1000))) // '30 sec. ago'
window.alert(formatDate(new Date(new Date() - 5 * 60 * 1000))) // '5 min. ago'
window.alert(formatDate(new Date(new Date() - 86400 * 1000))) // yesterday's date
