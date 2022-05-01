// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Remove First and Last Character
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0


// INSTRUCTIONS
/* It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. 
You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
*/


// MY SOLUTION

function removeChar(str){
    return (str.slice(1,-1)); // Starts at index 1, and ends at index -1 (- means moving backwards in the array.)
    // So -1 is that last element in the array and we are telling it to slice starting at index 1 and going to the last
    // character of the string, but not include the last character of the string.
    // Therefore, we will get a new array starting from index 1 until the end of the array, not including the last element of the array.
   };
  
  
/* TOP CODE WARS SOLUTION
 
function removeChar(str) {
  return str.slice(1, -1);
}

*/