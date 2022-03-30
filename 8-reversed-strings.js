// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Reversed Strings
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/5168bb5dfe9a00b126000018


// INSTRUCTIONS
/* Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
*/


// MY SOLUTION

function solution(str){
    let reverseString = ""
    for (i = str.length - 1; i >= 0; i--){
    reverseString += str[i]
    }
    return reverseString
    }
  
  
/* TOP CODE WARS SOLUTION
 
function solution(str){
  return str.split('').reverse().join('');  
}

*/