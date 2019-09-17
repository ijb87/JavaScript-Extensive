// let message;

// message = 'Hello'; // store the string



// let message;
// message = 'Hello';

// alert(message); // shows the variable content



// let message = 'Hello'; // define the variable and assign the value

// alert(message); // Hello!



// let user = 'John', age = 25, message = 'Hello'; //declaring multiple variables in one line



//multiline variant is a bit longer, but easier to red:
// let user = 'John';
// let age = 25;
// let message = 'Hello';



//some people also define multiple variables in this multiline style:
// let user = 'John',
//     age = 25,
//     message = 'Hello';



//or even in the "comma-first" style:
// let user = 'John'
//     , age = 25
//     , message = 'Hello';



// let message;

// message = 'Hello';

// message = 'World'; // value changed

// alert(message);



//we can declare two variables and copy data from one into the other
// let hello = 'Hello world!';

// let message;

//copy 'Hello world' from hellon into message
message = hello;

//now two variables hold the same data
// alert(hello); // Hello world!
// alert(message); // Hello world!

//examples of valid names:
let userName;
let test123;

//these names are valid:
let $ = 1; // declared a variable with the name "$"
let _ = 2; // and now a variable with the name "_"

alert($ + _); // 3



//examples of incorrect variable names:
let 1a; //cannot start with a digit

let my-name; // hyphens '-' arent' allowed in the name



let let = 5; //can't name a variable "let", error!
let return = 5; // also can't name it "return", error!



const myBirthday = '18.04.1982';

myBirthday = '01.01.2001'; // error, can't reassign the constant!

const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...when we need to pick a color
let color = COLOR_ORANGE;
alert(color); // #FF7F00

/*
Benefits:
- COLOR_ORANGE is much easier to remember than "#FF7F00"
- It is much easier to mistype "#FF7F00" than COLOR_ORANGE
- When reading the code, COLOR_ORANGE is much more meaningful than #FF7F00
*/

const pageLoadTime = /* time taken by a webpage to load */ 
//value of pageLoadTime is not known prior to the page load, so it's named normally. But it's still a constant because it doesn't change after assignment. In other words, capital-named constants are only used as aliases for "hard-coded" values.