// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
function length(string) {
    // YOUR CODE BELOW HERE //
    //I'm using the "return" of the function to bring back the length of the function with string.length
 return string.length


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //
    /*using the return of the function, I've attached my parameter "string" to
    the .toLowerCase which will force any argument passed in to the function to 
    lower case*/
    
    return string.toLowerCase()

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //
//return string uppercased
    return string.toUpperCase();


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
    //return parameter in lowercase
    var lCase = string.toLowerCase();
    //split string at each space
    var jSplit = lCase.split(" ");
    //concatonate string with dashes
    var jJoin = jSplit.join("-");
    //return concatonated string 
    return jJoin;

    
    
    
    
    
    


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
    //make sure that string is all lower case
   var lower = string.toLowerCase();
   //make sure that my character is lower case
   var bLower = char.toLowerCase();
   //compare my string with my character to determine if they are the same
    if (lower[0] === bLower){
        return true;
    } else {
        return false;
    }
        
    
        
    
    

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //
     //make sure that my string is all lower case
   var nLower = string.toLowerCase();
   //make sure that my character is lower case
   var xLower = char.toLowerCase();
   //if statement that grabs the last character in my nLower string, and compares to my character
   if (nLower[nLower.length-1] == xLower){
       return true;
   } else {
       return false;
   }


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    //i'm concatonating my first parameter with my second
var myConcat = stringOne.concat(stringTwo);
    //i'm brining back my new string that is filled with both parameters
    return myConcat;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments);
    //concatonate all the stuff inside my array called args without anything between them
    return args.join("");


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    //prepare some variables equal to the length of my strings
    var x = stringOne.length;
    var y = stringTwo.length;
    //if the first one is longer, bring it back from the function
        if (x > y) {
            return stringOne;
    //if my second is longer, bring that one back instead
        } else if (x < y) {
            return stringTwo; 
        }


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    //first i'm going to place my parameters in an array so i can sort them
    var myArray = [];
    myArray.push(stringOne);
    myArray.push(stringTwo);
    //then i'm gunna sort them
    myArray.sort();
    //then i'm going to evaluate them based on their rank in the alphabet. 
    if (stringOne < stringTwo) {
        return 1;
    } else if (stringOne > stringTwo) {
        return -1;
    } else if (stringOne == stringTwo) {
        return 0;
    }
    
    


    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    //first i'm going to make a new array and then place my parameters in an array so i can sort them
var myNewArray = [];
    myNewArray.push(stringOne);
    myNewArray.push(stringTwo);
    //then i'm gunna sort them using this method which will rank them in ascending order beginning with.
    myNewArray.sort();
    //then i'm going to evaluate them based on their rank in the alphabet. 
    if (stringOne > stringTwo) {
        return 1;
    } else if (stringOne < stringTwo) {
        return -1;
    } else if (stringOne == stringTwo) {
        return 0;
    }



    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}
