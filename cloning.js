/* jshint esversion: 6 */

const user = {
  name: 'John',
  age: 30
}
const clone = {} // the new empty object
// let's copy all user properties into it
for (const key in user) {
  clone[key] = user[key]
}
// now clone is a fully independent clone
clone.name = 'Pete' // changed the data in it
