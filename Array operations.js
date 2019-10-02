// jshint esversion: 6
// jshint asi: true
const styles = ['Jazz', 'Blues', 'Pop']
styles.push('Rock-n-Roll')
const middleOfArray = Math.floor(styles.length / 2)
styles[middleOfArray] = 'Classics' // Pop gets replaced by Classics
window.alert(styles.shift())
styles.unshift('Reggae')
styles.unshift('Rap')
window.alert(styles)
