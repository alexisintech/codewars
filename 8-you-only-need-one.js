// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// You only need one - Beginner
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/57cc975ed542d3148f00015b


// INSTRUCTIONS
/* 
You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.
*/


// ~*~*~*~*~*~* MY SOLUTION

//PREP
//Parameter: pass in an array and a value. check to see if the value is in the array.
//Can the array be any types of values (strings, numbers, booleans, etc)? No, will contain only numbers or strings.
//Can the value be any type of value?? Yes.
//Return: return true if the array contains the value, return false if not.
//Example:

function valueInArray(array, value){
}

valueInArray([1,4,103,43,47,12,72], 44) // should return false
valueInArray(['red',40,'apple',12,92], false) // should return false

//Pseudo code:

//create a function
//create my parameters: an array, and a value
//return a result
//check if array includes value... array has method .includes() to check if an array contains a specific element
//includes() will return true or false

const check = (a, x) => {return a.includes(x)}


    
/* ~*~*~*~*~*~* TOP CODE WARS SOLUTION
   
const check = (a,x) => a.includes(x);

*/
  

/* ~*~*~*~*~*~*  OTHER SOLUTIONS



*/