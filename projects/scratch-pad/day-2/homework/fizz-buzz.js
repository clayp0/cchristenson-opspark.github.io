// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
// create loop that will count to a hundred 
for (var i = 1; i < 101; i++){
// after the number is assigned to the variable, it needs to be checked if it's 
// a multiple of 5 and 3, or said another way, divisible by 15. 
// my condition inside my statement creates a unique console log for any number 
// that when divided by 15 leaves a remainder of 0.
    if (i % 15 == 0){
// give the console a unique message to print for these numbers.
        console.log("FizzBuzz");
// create another condition that will separate out numbers that when divided by 
// 3 leave a remainder of 0.
    } else if (i % 3 == 0){
// provide a unique console print out for these numbers
        console.log("Fizz");
// further condition for numbers that when divided by 5 leave a remainder of 0
    } else if (i % 5 == 0){
// provide unique console print for these numbers
        console.log("Buzz");
// a final statement for the remaining numbers passed in by my loop that won't 
// be touched by the previous conditions
    } else {
// print these untouched numbers to the console. 
        console.log(i);
    }
}

    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}