// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  BONUS: If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */
function range(start, end) {
    // YOUR CODE GOES BELOW HERE //
    // I need to make a container to push my values in
    let arr = [];
    //i need a conditional to figure out if the first number is bigger than the second one
    if (start < end) {
    //since it's smaller, it needs to push all the numbers in between into my array
         for(start; start <= end; start++) {
        arr.push(start);
    //then it should bring back the new array filled with the all the numbers
    } return arr;
    //i need to reverse the process, in case the first number is bigger
    } else if (start > end){
    //this loop is going to count down integers instead of up
        for (start; start >= end; start--){
    //then it'll push all those descending numbers to the array
            arr.push(start);
    //and bring that sucker back        
        }return arr;
    }
    
    
   
    
    
    
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}