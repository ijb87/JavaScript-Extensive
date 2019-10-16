// jshint esversion: 6
// jshint asi: true

function getSecondsToday () {
  const today = new Date()
  const year = today.getFullYear()
  const month = today.getMonth()
  const first = new Date(year, month, 1)
  const ms = today - first
  const seconds = ms / 1000
  return seconds
}

getSecondsToday()
