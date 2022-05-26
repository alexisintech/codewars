// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Convert a Boolean to a String
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/551b4501ac0447318f0009cd/javascript


// INSTRUCTIONS
/* 
Implement a function which convert the given boolean value into its string representation.

Note: Only valid inputs will be given.
*/


// ~*~*~*~*~*~* MY SOLUTION

const booleanToString = b => {return b = `${b}`}
    
/* ~*~*~*~*~*~* TOP CODE WARS SOLUTION
   
function booleanToString(b){
  return b.toString();
}

*/
  

/* ~*~*~*~*~*~*  OTHER SOLUTIONS

function booleanToString(b){
  return b ? 'true' : 'false';
}

function booleanToString(b){
  return String(b);
}

*/