// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Reversed Words
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/51c8991dee245d7ddf00000e


// INSTRUCTIONS
/* 
Complete the solution so that it reverses all of the words within the string passed in.

Example(Input --> Output):

"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
*/


// ~*~*~*~*~*~* MY SOLUTION

const reverseWords = str => str.split(" ").reverse().join(' ')
    
/* ~*~*~*~*~*~* TOP CODE WARS SOLUTION
   
const reverseWords = (str) => str.split(" ").reverse().join(" ");

*/
  

/* ~*~*~*~*~*~*  COMMENTS:

str.split("") splits the string into an array of characters
str.split(" ") splits the string into an array words

str.join('') will join without spaces
str.join(' ') will join with spaces

*/