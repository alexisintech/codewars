// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// WeIrD StRiNg CaSe
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/52b757663a95b11b3d00062d/javascript


// INSTRUCTIONS
/* 
Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

Examples:
toWeirdCase( "String" );//=> returns "StRiNg"
toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"
*/


// ~*~*~*~*~*~* MY SOLUTION

function toWeirdCase(string){
    let str = string.split(" ")
    for (let i = 0; i < str.length; i++){
      for(let j = 0; j < string.length; j++){
        if (j % 2 === 0){
          string[j].toUpperCase();
        }
      }
    }
    return str.join(' ');
  }

  /* VERY INCORRECT ): UNLOCKING SOLUTIONS..... */
    
/* ~*~*~*~*~*~* TOP CODE WARS SOLUTION
   
function toWeirdCase(string){
  return string.split(' ').map(function(word){
    return word.split('').map(function(letter, index){
      return index % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase()
    }).join('');
  }).join(' ');
}

*/
  

/* ~*~*~*~*~*~*  OTHER SOLUTIONS



*/