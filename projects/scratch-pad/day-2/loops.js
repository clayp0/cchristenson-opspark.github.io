// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  //First, I'm going to create a for loop to iterate forward over the stuff inside my array
  for (var i = 0; i <= array.length-1; i++){
  //next, i need to tell the console to print all the stuff that my loop iterated over
    console.log(array[i]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  //first, i need to make a loop that is going to start at the end of my array and iterate backwards
  for(var i = array.length-1; i >= 0; i--){
  //next, i need the console to print all the stuff that my reverse loop picks up
    console.log(array[i]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  //first, I need a container for the keys in my object
  var myArray = [];
  //then i need a loop that's going to go and find all the keys in my object 
  for (var key in object){
  //add all the object keys to the container i made above
    myArray.push(key);
    
    
}
  //then bring back the new container i made, which is now filled
  return myArray;
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  //make loop to iterate over my object
  for(var key in object){
  //print all my keys to the log!
    console.log(key);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  //make a container for the stuff in my object!
  var myArray = [];
  //make a loop to iterate through my object
  for(var key in object){
  //put the iterated things into my new container 
  myArray.push(object[key]);
  }
  return myArray;
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  //make a loop to gather all my object values
  for (var key in object){
  //print each one to the console!
  console.log(object[key]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the length of its key/value pairs
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  //first, make something to count with 
  var sum = 0;
  //loop over the array, gathering all my key/value pairs
  for (var key in object){
  //make sure my counter is recieving the input from my loop
     sum++;
  }
  //return my counter filled with all the pairs from my object
  return sum;
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  //make an ordered container, since my object isn't ordered
  var myArr = [];
  //iterate through my object, grabbing all my object's keys 
  for(var key in object){
  //put all my object's keys into my new container
  myArr.push(object[key]);
  }
  //new loop that will iterate through my new, ordered container
  for(var i = myArr.length-1; i >= 0; i--){
  //print my my original object's keys backwards to the console log
  console.log(myArr[i]);
  }
  
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
