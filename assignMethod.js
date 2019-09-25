// jshint esversion: 6
// jshint asi: true
const user = { age: '12' }

// overwrite age, add isAdmin
Object.assign(user, { age: '18', isAdmin: true })

// now user = { age: 18, isAdmin: true }
