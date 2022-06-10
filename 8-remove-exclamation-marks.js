// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Remove exclamation marks
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/57a0885cbb9944e24c00008e


// INSTRUCTIONS
/* 
Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
*/


// ~*~*~*~*~*~* MY SOLUTION

function removeExclamationMarks(s) {
    const arr = s.split('')
    const newArr = arr.filter(e => e != '!')
    return newArr.join('')
  }
    
/* ~*~*~*~*~*~* TOP CODE WARS SOLUTION
   


*/
  

/* ~*~*~*~*~*~*  OTHER SOLUTIONS

function removeExclamationMarks(s) {
  return s.split('!').join('');
}

*/