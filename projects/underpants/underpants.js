// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';
var _ = {};
/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/
/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
_.identity = function(value){
    
    return value;
};
/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

//I: a value
//O: a string with the type of that value 
//C/E: arrays, undefined, and null should all print their type
_.typeOf = function (value) {
    //let's test for our constrained cases first
    if (typeof value === undefined){
        return "undefined";
    } else if (value === null) {
        return "null";
    } else if (Array.isArray(value)){
        return "array";
    //then we can just bring back a string of the value passed in using typeof
    } else {
        return typeof value;
    }
};
/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/
//I: an array and a number
//O: a new array
_.first = function (array, num){
    //let's make a container to hold our new values
    let newArray = [];
    //then let's make sure we're working with the right type of thing
    if (Array.isArray(array) === false || num < 0){
        return [];
    //then let's make sure we know what to do if a num argument isn't passed in
    } else if (typeof num !== "number" || num === null){
         return array[0];
    } else {
    //then we can return a slice of our original array from the first index up to the given number
      newArray = array.slice(0, num);
    }
return newArray;
}
/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
//I: an array and a number
//O: an updated array
_.last = function (array, num) {
    //like last time, lets make sure we're working with the right type of data
    if (Array.isArray(array) === false || num < 0){
        return [];
    //if a nmber isn't given, return the last element in the array
    } else if (typeof num !== "number" || num === null){
         return array[array.length - 1];
    } else {
    //we can then return a slice of our array starting at the end of our array 
    //and counting back to our number
        return array.slice(-num, array.length)
    }
}
/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
//I:an array, and a value
//O: the index of the value
_.indexOf = function(array, value) {
    //loop through the array
    for (let i = 0; i <= array.length - 1; i++) {
    //if the index being checked matched the value, return the index
        if (array[i] === value) {
            return i;
        }
    //if no match is found, return -1
    } return -1;
}
/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/
//I: an array, and a value 
//O: a boolean
//C: use a ternary operator to check 
_.contains = function(array, value) {
    //return the result of a check whether the array includes the value
    return (array.includes(value) ? true : false);
}
/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/
//I: a collection, and a test function
//O: the result of the test 
//C: only run the test on collections
_.each = function(collection, test) {
    //first, test if the collection is an array
    if (Array.isArray(collection)) {
    //if so, loop through and run the test on each index
       for (let i = 0; i <= collection.length - 1; i++) {
           test(collection[i], i, collection);
       } 
    //if it isn't an array, test if its an object
    } else if (typeof collection === "object") {
    //if so, loop through and run the test on each object key in the collection
        for (let key in collection) {
            test(collection[key], key, collection);
        }       
   }
} 
/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/
//I: an array
//I: an array without duplicates
_.unique = function (array){
    let arr = [];
    //loop through my argument
    for (let i = 0; i <= array.length-1; i++) {
    //check if arr includes the current i from the argument, if it doesn't, push the index into arr
        if (arr.indexOf(array[i]) === -1) {
    //
          arr.push(array[i]); 
        }
    }
    //return the array
    return arr;

}
/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/
//I: An array, and a function
//O:a new array


_.filter = function(array, test) {
    //make container to hold filtered values
    var resultArray = [];
    //then pass the array to a function that tests every element in the function 
    //according to the constraints of our internal function expression 
    _.each(array, function(element, index, array) {
        //if the test returns true, push the element into my updated array
        if (test(element, index, array)) {
            resultArray.push(element);
        }
    });
    //when the loop is done, return the new array
    return resultArray;
};




/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/
//I: array, and a function
//O: an new array
_.reject = function(array, test) {
    //make a container for my values
    var resultArray = [];
    //pass the array to a test that will measure each element in my array
    _.each(array, function(element, index, array) {
    //if the element returns false, add it to my resultArray
        if (test(element, index, array) === false) {
            resultArray.push(element);
        }
    });
    //return that array
    return resultArray;
};




/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
//I: array and a function 
//O: an array made of two sub arrays

_.partition = function(array, tOrF) {
    //make containers for respective value groups
    let all = [];
    let truthies = [];
    let falsies = [];
    //loop through array running the test at each index with respective routing
    for(let i = 0; i <= array.length - 1; i++) {
        if (tOrF(array[i], array[i]["key"], array)) {
            truthies.push(array[i]);
        } else {
            falsies.push(array[i]);
        }
    }
    //push the two sub arrays into my final array
    all.push(truthies, falsies);
    //return final array
    return all;
}



/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

//I: collection, either arrays or objects, and a function
//O: an array of updated values 
_.map = function(collection, test){
    //make a container to hold updated values
    let result = [];
    //check if the collection is an array
    if(Array.isArray(collection)){
    //if so, loop through and run the function on each element in the array
    //pushing the updated result into my array
        for (let i = 0; i <= collection.length - 1; i++){
            result.push(test(collection[i], i, collection));
        }
    } else {
    //if not an array, loop through the object and run the function on each element
    //push the results into the result array
        for (let key in collection){
            result.push(test(collection[key], key, collection));
        }
    }
    //return result array
    return result;
};




/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.pluck = function(array, key){
    //return a function that takes the array and does something to each element in the array
   return _.map(array, function(element, index, collection){
       //make the function being executed on each element return the value associated
       //with the key argument passed in
       return element[key];
    });
    
};


/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
//I: collection, array or object
//O: boolean
_.every = function(collection, test) {
    //determine the type of our collection
     if (Array.isArray(collection)) {
         //loop through the array
       for (let i = 0; i <= collection.length - 1; i++) {
          //if the function isn't given but the collection contains all truthy
          //values, return true
           if (test === undefined && collection[i]) {
                //if the test isn't given, but there are falsy elements, return false
           } else if (test === undefined && !collection[i]) {
               return false;
               //if the test is given, and a given index fails, return false 
           } else if(!test(collection[i], i, collection)) {
               return false;
           }
       } return true;
       //now, run the same steps for an object
    } else if (typeof collection === "object") {
        for (let key in collection) {
            if(test === undefined && collection[key]) {
            } else if (test === undefined && !collection[key]) {
                return false;    
            } else if (!test(collection[key], key, collection)) {
                return false;
            }
        }
        return true;
   }   
}




/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
//I: collection, either array or object
//O: boolean
_.some = function(collection, test) {
    //determine the type of the collection
     if (Array.isArray(collection)) {
    //loop through collection
       for (let i = 0; i <= collection.length - 1; i++) {
        //if the function isn't given and there is a single truthy element, return true
           if (test === undefined && collection[i]) {
               return true;
            //if the test isn't given, and the test comes back false once, return false
           } else if (test === undefined && !collection[i]) {
               return false;
            //if the test is given, and finds a truthy value, return true
           } else if(test(collection[i], i, collection)) {
               return true;
           }
           //if the loop finishes without a truthy value, return false
       } return false;
       //now, run the same steps in the event that the collection is an object
    } else if (typeof collection === "object") {
        for (let key in collection) {
            if(test === undefined && collection[key]) {
                return true;    
            } else if (test === undefined && !collection[key]) {
                return false;    
            } else if (test(collection[key], key, collection)) {
                return true;
            }
        }
        return false;
   } 
}




/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

_.reduce = function(array, test, seed) {
    // assign previousResult to the value of the seed
    let previousResult = seed;
    // if the seed is undefined
    if (seed === undefined) {
        // set previousResult equal to the first element in the array
        previousResult = array[0];
    // using a for loop, loop through the array starting at the 1st index 
    for(let i = 1; i <= array.length - 1; i++) {
        // for each iteration set the previousResult variable equal to the result of the test
        previousResult = test(previousResult, array[i], i);
    } 
    // otherwise, use a for loop to loop over the array 
    } else {
      for(let i = 0; i <= array.length - 1; i++) {
        // for each iteration, set the previousReult equal to the result of the test 
        previousResult = test(previousResult, array[i], i);
        }   
    }
    // return previousResult
    return previousResult;
}



/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/
//I: a lead object, and as many more objects as needed
//O: the lead object filled with the data from the rest of the objects
_.extend = function(object1, ...arrOfObjects){
   // since my rest parameter forms an array of my argument objects, I can loop through 
   for(let i = 0; i <= arrOfObjects.length - 1; i++) {
       //then loop through each property in the object represented by that array index
       for(let key in arrOfObjects[i]) {
           //assign the property to my lead object 
           object1[key] = arrOfObjects[i][key];
       }
   } 
   //return lead object
   return object1;
}


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}