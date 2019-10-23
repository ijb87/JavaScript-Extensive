function makeArmy () {
  const shooters = []

  for (var i = 0; i < 10; i++) {
    const shooter = function () { // shooter function
      window.alert(i) // should show its number
    }
    shooters.push(shooter)
  }

  return shooters
}

const army = makeArmy()

army[0]() // the shooter number 0 shows 10
army[5]() // and number 5 also outputs 10...
// ... all shooters show 10 instead of their 0, 1, 2, 3...

// every time the code block in for (let i=0...) {...} is executed, a new Lexical Environment is created for it, with the corresponding variable i.
