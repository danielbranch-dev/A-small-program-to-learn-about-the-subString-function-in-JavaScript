//! Lets learn about subStrings in a Dynamic way//!
let enterNumber = prompt("Enter a 7 digit number");
alert ('We are going to return the substring of the 2nd and 6th index');
let returnedSubstring = enterNumber.substring(2,6);

let message = `In order to learn about the subString function in JavaScript, you entered the 7 digit number ${enterNumber}. The subString function includes the indexes of 2 and 6 because we specified it to do so in our program. The substring function works by returning the "2nd index", "6th index" and the characters between the "2nd" and "6th" index So the returnedSubstring final output is ${returnedSubstring}`;

alert(message);
