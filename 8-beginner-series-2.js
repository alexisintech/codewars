// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Beginner Series #2 Clock
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a


// INSTRUCTIONS
/* 
Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

Example:
h = 0
m = 1
s = 1

result = 61000
Input constraints:

0 <= h <= 23
0 <= m <= 59
0 <= s <= 59
*/


// ~*~*~*~*~*~* MY SOLUTION

function past(h, m, s){
    if (0 <= h <= 23 && 0 <= m <= 59 && 0 <= s <= 59) {
      h = h*60*60*1000
      m = m*60*1000
      s = s*1000
      return h+m+s
    }
  }
    
/* ~*~*~*~*~*~* TOP CODE WARS SOLUTION
   
function past(h, m, s){
  return ((h*3600)+(m*60)+s)*1000;
}

*/
  

/* ~*~*~*~*~*~*  OTHER SOLUTIONS

const past = (h,m,s) => 1000 * (3600 * h + 60 * m + s);

*/