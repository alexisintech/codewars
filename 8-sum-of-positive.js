// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Sum of positive
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/5715eaedb436cf5606000381


// INSTRUCTIONS
/* You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
*/


// MY SOLUTION

function positiveSum(arr) {
  return arr.reduce( (a,b) => a + (b > 0 ? b : 0), 0 );
}
  
  
/* TOP CODE WARS SOLUTION
 
function positiveSum(arr) {
  var total = 0;    
  for (i = 0; i < arr.length; i++) {    // setup loop to go through array of given length
    if (arr[i] > 0) {                   // if arr[i] is greater than zero
      total += arr[i];                  // add arr[i] to total
    }
  }
  return total;                         // return total
}

*/

/* OTHER SOLUTIONS ~*~*~*~*~*~*~*~*~*~*~*~*~*

function positiveSum(arr) {
  return arr.reduce((a,b) => a + (b > 0 ? b : 0), 0);
}

~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*

function positiveSum(arr) {
  return arr.filter( x => x > 0).reduce((a,b) => a+b, 0);
}

*/