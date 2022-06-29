// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Double Char
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/56b1f01c247c01db92000076


// INSTRUCTIONS
/* 
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
Good Luck!
*/


// ~*~*~*~*~*~* MY SOLUTION

function doubleChar(str) {
    str = str.split('')
    for (let i = 0; i < str.length; i++) {
      str[i] = str[i] + str[i]
    }
    str = str.join('')
    return str
  }
  
    
/* ~*~*~*~*~*~* TOP CODE WARS SOLUTION
   
const doubleChar = (str) => str.split("").map(c => c + c).join("");

*/
  

/* ~*~*~*~*~*~*  COMMENTS:



*/