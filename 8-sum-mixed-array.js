// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Sum Mixed Array
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/57eaeb9578748ff92a000009


// INSTRUCTIONS
/* 
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.
*/


// ~*~*~*~*~*~* MY SOLUTION

const sumMix = x => {return x.reduce((a,c) => a + (c*1), 0)}
    
/* ~*~*~*~*~*~* TOP CODE WARS SOLUTION
   


*/
  

/* ~*~*~*~*~*~*  OTHER SOLUTIONS

const sumMix = x => x.reduce((a,c) => a + (c*1), 0) //if you remove curly brackets, you can remove return

*/