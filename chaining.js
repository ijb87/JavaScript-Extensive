// jshint esversion: 6
// jshint asi: true
const ladder = {
  step: 0,
  up () {
    this.step++
    return this
  },
  down () {
    this.step--
    return this
  },
  showStep: function () { // shows the current step
    window.alert(this.step)
    return this
  }
}
ladder.up().up().down().showStep()
