// Write an "if" condition to check that age is between 14 and 90 inclusively.
if (age <= 90 && age >= 14);

// Write an if condition to check that age is NOT between 14 and 90 inclusively.
if (!(age >= 14 && age <= 90));
if (age < 14 || age > 90);

//Write the code which asks for a login with prompt.

// If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.
//
// The password is checked as follows:
//
// If it equals “TheMaster”, then show “Welcome!”,
// Another string – show “Wrong password”,
// For an empty string or cancelled input, show “Canceled”
let login = prompt("Please enter a login.", "Cancel, Other or Admin");
if (login == "Cancel" || login == "" || login == null) {
  alert("Canceled");
}
else if (login == "Other") {
  alert("I don't know you");
}
else if (login == "Admin"); {
  let password = prompt("Please enter a password.");
  if (password == "Cancel" || password == "" || password == null) {
    alert("Canceled");
  }
  else if (password == "Other") {
    alert("Wrong password");
  }
  else if (password == "TheMaster") {
    alert("Welcome!");
  }
}
