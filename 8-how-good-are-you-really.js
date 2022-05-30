// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// How good are you really?
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/5601409514fc93442500010b


// INSTRUCTIONS
/* 
There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!

Note:
Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!
*/


// ~*~*~*~*~*~* MY SOLUTION

//PREP
// Parameters: I will write a function that takes in two parameters: one parameter is an array of my peers' test scores, and the other parameter is my test score. All these values will be numbers, correct? And then I will be comparing my test score to the total class average. So I will need to get the average of the test scores from that array of my peer's test scores, is this correct?
// Return: And you would like me to return true if my test score is greater than the class average test score. And you would like me to return false if it's not greater than.
// Example:

// function betterThanAverage (myTestScore, arrOfPeersScores) = {

// }

// betterThanAverage(96, [88, 90, 92, 98, 99])     // 96 > 93.4 ... this would return true

// Pseudo code
//Okay, so I will create a function, and it looks like I will be comparing two values. So I think I can do this in one line of code.
//First, I will create my function with arrow function syntax.
// const betterThanAverage = () => {}
//Then, I will create my parameters.
// const betterThanAverage = (myTestScore, arrOfPeersScores) => {}    I will be passing in a value that is my test score, and I will pass in an array of many test scores - the test scores of my peers.
//Now I can write my function body. I know I am comparing my test score to a class average, so I can begin writing a conditional. I prefer using ternary syntax when there is only two conditions (if, else).
// const betterThanAverage = (myTestScore, arrOfPeersScores) => {myTestScore > __ ? : } my test score should be greater than the class average, so we use the greater than symbol
//So I have my test score, but there is the underlined blank there because I do not have the class average. I know I need to do some math to be able to get the average. The information I have is the test scores of all my peers, and each of those values are stored in an array. And because I'm using an array and I  need to get the elements of the array math'd down to one single value, I can use the reduce method.
// const betterThanAverage = (myTestScore, arrOfPeersScores) => {myTestScore > classPoints.reduce((a,c) => a + c, 0) ? : } so here I am taking the array and applying the reduce method. This would add all the values in the array and give me the sum of those values. However, I need the average of those values. To get an average, the formula is the sum of the values divided by the total number of values. So I can code that further as:
// const betterThanAverage = (myTestScore, arrOfPeersScores) => {myTestScore > classPoints.reduce((a,c) => a + c, 0) / classPoints.length ? : } classPoints.length will give me the length of the array, aka the total number of values in that array.
//So looking at my function, I have compared my test score to the average test score, and I have said my test score needs to be greater than the average. The conditional should settle as either true or false. However, that result disappears into thin air as the function is written. If I called this function, passed in my arguments, and looked for a result, there wouldn't be one. I have to return the result outside of the function so that it's stored, and so that it continues exisiting after the function is run.
// const betterThanAverage = (myTestScore, arrOfPeersScores) => {return myTestScore > classPoints.reduce((a,c) => a + c, 0) / classPoints.length ? true : false}
//So I have added the return and told my conditional to give its result. And because this is a conditional, a boolean, it can only give us a boolean answer. So we can further refactor this code as:
// const betterThanAverage = (myTestScore, arrOfPeersScores) => {return myTestScore > classPoints.reduce((a,c) => a + c, 0) / classPoints.length}
// because the conditional will settle as either true or false, since it is a boolean, and we have added the return so that we return that result outside of the function, and our result can continue to exist once the function has run, so that we can actually know the result.

const betterThanAverage = (classPoints, yourPoints) => {return yourPoints > classPoints.reduce((a,c) => a + c, 0) / classPoints.length ? true : false}
    
/* ~*~*~*~*~*~* TOP CODE WARS SOLUTION
   
function betterThanAverage(classPoints, yourPoints) {
  return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
}

*/
  

/* ~*~*~*~*~*~*  OTHER SOLUTIONS



*/