// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    // I need a new function that is going to work with my initial base number
 var val = function (value){
    //now i need to evaluate my initial base against my new value
     if (value > base) {
    //if it's true, tell it so!
         return true;
    //if it isn't, then evaluate if value is less than base
     } else if (value < base){
    //tell it so!
         return false;
     }

 };
    //return the whole sub function when the initial function is called
    return val;
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    //learning from last time, all I need is to return a function, so i'm doing just that
 return function (value){
    //pass my initial base in and compare it to my new value
     if (value < base){
    //return true, if the value is less than the base
         return true;
    //if it isn't, return false
     } else {
         return false;
     }
 };
 
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
  //when the above function is called, i want to bring back a function that will 
//   test my startsWith letter against the first letter of my givenString
  return function (givenString) {
//then i can compare them with a comparison operator
//then i return the value of the comparison of the two letters, also forcing them to lower case
    return  startsWith.toLowerCase() === givenString[0].toLowerCase(); 
    
  } ; 
  
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    // give the return of the original function a function
    return function (string) {
    //this function is going to force my character, and the character of my string 
    //to the same case, and then test them against each other. 
        return endsWith.toLowerCase() === string[string.length-1].toLowerCase();
    };
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    //make an array container for my strings, once they're modified 
    let arr = [];
    //make a loop that will iterate through all my strings
 for (let i = 0; i < strings.length; i++){
     //put all my strings into my new box, AND modify them as they're going in
    arr.push(modify(strings[i]));
    //return my new array of modified strings!
 }   return arr;
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    
   //create a loop that will iterate through all my strings 
    for (let i = 0; i < strings.length; i++){
    //add conditional that will tell me if any of them don't pass the test
        if (test(strings[i]) === false) {
            return false; 
        } 
            
    //if none of them fail, return the whole thing as true.     
    }  return true;
    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}