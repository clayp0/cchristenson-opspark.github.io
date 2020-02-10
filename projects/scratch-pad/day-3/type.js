// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    //I need something that I'm going to compare my value to
    let x = [1,2,3];
    //then i need to compare the constructor, or object prototype of my value with 
    if (value === null){
        return false;
    } else if (Object.getPrototypeOf(value) === Object.getPrototypeOf(x)){
    // the object prototype of my specific sample
    //if that condition resolves to true, return true, if not, return false
    return true; 
  } else {
    return false; 
  }
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    
    //i need to declare some "objects" with constructors that are going to sharpen up my comparison
    //the first one should carry the prototype that i'm trying to compare against
    var x = {name: "c",
    age: 27};
    //declare edge case that could confuse my comparison
    var y = new Date;
    //use a conditional to first test simply whether the argument passed is null, 
    //if it isn't, the test can move on 
   if(value === null){
    return false;
    //further else statement for the edge case I declared above
  } else if (Object.getPrototypeOf(value) === Object.getPrototypeOf(y)){
    return false;
    //this is the statement that should resolve to true and return truw
  } else if (Object.getPrototypeOf(value) === Object.getPrototypeOf(x)){
    return true;
    //final else condition that will keep any other data types from confusing my 
    //comparison
  } else {
    return false; 
  }

    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
//within my function, i'm going to need some cases to test against
 let x = {name: "c", age: 27};
 let y = [1, 2, 3];
//then i need a first conditional that's going to keep me from throwing an error for null inputs
    if (value === null){
        return false;
//then i need a conditional that contains a ternary operator to grant true if an object
//with either of my prototypes are passed in
    } else if (Object.getPrototypeOf(value) === Object.getPrototypeOf(x) || 
   Object.getPrototypeOf(value) === Object.getPrototypeOf(y)){
       return true;
//then I should have a final conditional that's going to block any other cases
   } else {
       return false;
   }
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    /**
     * if I'm going to parse objects according to what kind of constructor they are 
     * built with, that is, what kind of prototype they are, then I'm going to need 
     * and instance of each one declared first to test my value against 
     */
     
    let x = [1,2,3];
    let y = {name: 'C', age: 27};
    let z = new Date();
    let a = function(){};
    /**
     * now I can start making conditional statements to determine what kind of primitive 
     * if my value is a primitive data type. I can do this kind of if statement for undefined,
     * null, number, string, and boolean. I can test number, string and boolean by their type. 
     */
     
  if (value === undefined){
      return "undefined";
  } else if (value === null){
      return "null";
  } else if (typeof(value) === typeof(true)){
      return "boolean";
  } else if (typeof(value) === typeof('a')){
      return "string";
  } else if (typeof(value) === typeof(1)){
      return "number"; 
    /**
     * now i'm going to test my object cases by comparing my prototype of my value
     * against the prototype of the variables i declared above.
     */
     
  } else if(Object.getPrototypeOf(value) === Object.getPrototypeOf(x)){
      return "array";
  } else if(Object.getPrototypeOf(value) === Object.getPrototypeOf(y)){
      return "object";
  } else if(Object.getPrototypeOf(value) === Object.getPrototypeOf(z)){
      return "date";
  } else if (Object.getPrototypeOf(value) === Object.getPrototypeOf(a)){
      return "function";
  }
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
