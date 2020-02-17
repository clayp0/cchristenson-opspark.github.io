////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//I: two numbers
//O: one number
//C/E: Only return a number if one is smaller, otherwise return 0
function min(a, b) {
  //test if the first is smaller, and if so return that one
  if (a < b){
    return a;
  //test if the second number is smaller, if so return that one
  } else if (a > b){
    return b;
  } else { 
  //if they are the same number return 0
    return 0;
  }
}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//I: one number
//O: a boolean value 
//C: recursive, should work with positive AND negative whole numbers
//E: Zero, 1

function isEven(num) {
  //start with condiional that tests if the argument is a negative number
  if (num < 0){
  //if so, run the function on the opposite of the number
    return isEven(-num);
  //further conditions, true if the number is 0, false if the number is 1
  } else if (num == 0){
    return true;
  } else if (num == 1){
    return false;
  //if the argument isn't either one of those numbers, run the function again on the 
  //argument - 2. That way the loop will eventually produce a 0 (true), or a 1(false)
  } else {
    return isEven(num - 2);
  }
}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//I: a number, and a letter
//O: a number
//C: 
function countChars(str, l) {
  //start with a variable holding the number 0
  let count = 0;
  //loop through the str argument
  for (let i = 0; i <= str.length-1; i++){
    //if the index being checked isnt the same as argument l, do nothing
    if (str[i] !== l){
    } else {
    //if it is the same, add one to the count
      count++;
    }
    //return the count
  } return count; 
}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//I: string
//O: a number 
//C/E: only add to number when string finds a capital b 
// function countBs(str) {
//   let count = 0;
//   for (let i = 0; i <= str.length-1; i++){
//     if (str[i] !== "B"){
//     } else {
//       count++;
//     }
//   } return count;
// }

function countBs(str){
  //return a function which tests a string for a given letter
  return countChars(str, "B");
}
////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
