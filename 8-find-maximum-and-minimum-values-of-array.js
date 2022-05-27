// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Find Maximum and Minimum Values of a List
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/577a98a6ae28071780000989


// INSTRUCTIONS
/* 
Your task is to make two functions (max and min, or maximum and minimum, etc., depending on the language)
that receive a list of integers as input and return, respectively, the largest and lowest number in that list.

Examples (Input -> Output)
* [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
* [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
* [42, 54, 65, 87, 0]             -> min = 0, max = 87
* [5]                             -> min = 5, max = 5
Notes
You may consider that there will not be any empty arrays/vectors.
*/


// ~*~*~*~*~*~* MY SOLUTION

//PREP
//Parameters: Create two functions. Both will receive the same list as a parameter. One function
// will find the largest number in that list, the second function will find the lowest number in that list.
//Will the list always be an array? Yes.
//And this array will strictly have numbers (no strings booleans etc)? Yes.
//Will the array ever be empty? No.
//If the array consists of one number, is it safe to assume that number is the max and min? Yes.

//Return: Would it be acceptable to console log the answer? No, return.

//Example:

min([-52, 56, 30, 29, -54, 0, -110]) //-110
min([42, 54, 65, 87, 0]) //0
max([4,6,2,1,9,63,-134,566]) //566
max([5]) //5

//Pseudocode:

// Create a function that takes in an array; we will be looking for the lowest number in the array.
// const min = list => {}
// The function will return the lowest number in the array, using the array method Math.min()
const min = list => {return Math.min(...list)}

//Create a function that takes in an array
// const max = list => {}
// The function will return the highest number in the array, using the array method Math.max()
const max = list => {return Math.max(...list)}
    
/* ~*~*~*~*~*~* TOP CODE WARS SOLUTION
   


*/
  

/* ~*~*~*~*~*~*  OTHER SOLUTIONS



*/