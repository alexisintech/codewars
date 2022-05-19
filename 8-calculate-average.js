// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Calculate average
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921


// INSTRUCTIONS
/* 
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
*/


// ~*~*~*~*~*~* MY SOLUTION

function find_average(array) {
    let sum = 0;
    
    if (array) {
      for(let i = 0; i < array.length; i++) {
        sum += array[i];
      }
    } else { return 0 }

    return sum / array.length;
  }
    
/* ~*~*~*~*~*~* TOP CODE WARS SOLUTION
   
var find_average = (array) => {  
  return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
}

*/
  

/* ~*~*~*~*~*~*  OTHER SOLUTIONS

function find_average(arr) {
    return arr.length > 0? arr.reduce((a, b) => a + b) / arr.length : 0;
}

*/