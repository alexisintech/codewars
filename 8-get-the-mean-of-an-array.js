// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Get the mean of an array
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/563e320cee5dddcf77000158


// INSTRUCTIONS
/* 
It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.
*/


// ~*~*~*~*~*~* MY SOLUTION

const getAverage = marks => Math.floor( marks.reduce((a,c) => a + c, 0) / marks.length )
    
/* ~*~*~*~*~*~* TOP CODE WARS SOLUTION
   
function getAverage(marks){
  return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);
}

*/
  

/* ~*~*~*~*~*~*  COMMENT:

.reduce((a,c) => a+c,0)
Math.floor() rounds a number down to the nearest integer.

*/