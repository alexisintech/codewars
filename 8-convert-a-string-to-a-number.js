// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Convert a string to a number!
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/544675c6f971f7399a000e79


// INSTRUCTIONS
/* Description
We need a function that can transform a string into a number. What ways of achieving this do you know?

Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

Examples
"1234" --> 1234
"605"  --> 605
"1405" --> 1405
"-7" --> -7

*/


// ~*~*~*~*~*~* MY SOLUTION

var stringToNumber = function(str){
    return Number(str);
  }
    
/* ~*~*~*~*~*~* TOP CODE WARS SOLUTION
   
var stringToNumber = function(str){
  return parseInt(str);
}

*/
  

/* ~*~*~*~*~*~*  OTHER SOLUTIONS

var stringToNumber = function(str){
  return +str;
}

*/