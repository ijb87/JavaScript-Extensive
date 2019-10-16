// jshint esversion: 6
// jshint asi: true

function getSecondsUntilTomorrow () {
  const today = new Date()
  const year = today.getFullYear()
  const month = today.getMonth()
  const day = today.getDate()
  const tomorrow = new Date(year, month, day + 1)
  const ms = tomorrow - today
  const seconds = ms / 1000
  return seconds
}

getSecondsUntilTomorrow()
