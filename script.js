// console.log("hi HI!");
// console.log("before Conditional");
// if (1 + 2 === 2) {
//   console.log("Math still works");
// } else {
//   console.log("Math out of order");
// }
// console.log("After Conditional");

const password = prompt("please enter new password");

if (password.length >= 6) {
  if (password.indexOf(" ") === -1) {
    console.log("Valid password");
  } else {
    console.log("Password cannot contain spaces ");
  }
} else {
  console.log("PASSWORD TOO SHORT! Must be 6+ characters");
}
