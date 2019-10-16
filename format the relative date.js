// jshint esversion: 6
// jshint asi: true

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
