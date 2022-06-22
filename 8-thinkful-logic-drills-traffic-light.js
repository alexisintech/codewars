// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Thinkful - Logic Drills: Traffic Light
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/58649884a1659ed6cb000072


// INSTRUCTIONS
/* 
You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

For example, when the input is green, output should be yellow.
*/


// ~*~*~*~*~*~* MY SOLUTION

function updateLight(current) {
  
    switch (current) {
        case 'green':
          return 'yellow';
          break;
        case 'yellow':
          return 'red';
          break;
        case 'red':
          return 'green';
          break;
    }
  
  }
    
/* ~*~*~*~*~*~* TOP CODE WARS SOLUTION
   
function updateLight(current) {
  
  return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';

}

*/
  

/* ~*~*~*~*~*~*  COMMENTS:

could refactor as:

const updateLight = current => current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green'

*/