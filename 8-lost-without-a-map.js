// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Lost without a map
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/57f781872e3d8ca2a000007e


// INSTRUCTIONS
/* 
Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]
*/


// ~*~*~*~*~*~* MY SOLUTION

function maps(x){
    const newMaps = x.map(e => e * 2);
    return newMaps;
  }
    
/* ~*~*~*~*~*~* TOP CODE WARS SOLUTION
   
function maps(x){
  return x.map(n => n * 2);
}

*/
  

/* ~*~*~*~*~*~*  OTHER SOLUTIONS

const maps = arr => arr.map( x => x * 2 )

*/