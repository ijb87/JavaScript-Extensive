/* jshint esversion: 6 */

const user = {
  name: 'Peter',
  age: 30
}
const clone = {} // the new empty object
// let's copy all user properties into it
for (const key in user) {
  clone[key] = user[key]
}
// now clone is a fully independent clone
clone.name = 'Pete' // changed the data in it - from Peter to Pete
window.alert(user.name) // still John in the original object
