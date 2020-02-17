// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
//I: array of arrays
//O: flat array
function flatten(arrays) {
  //make a container for our flat arra
  let current = [];
  //loop through the elements in our array of arrays
  for (let element of arrays) {
  //at each iteration, current equals a concatonation of our current array, plus the 
  //next element in our array of arrays
    current = current.concat(element);
  }
  //return our new flat array
  return current;
  
}
// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
//I: a given value, a test of that value, a function that updates that value, and 
//something to do each time the updated value comes back true
function loop(value, testF, updateF, bodyF) {
  //make a loop that passes a function in as the parameter for each stage of the loop
  for (let i = value; testF(i); i = updateF(i)) {
    bodyF(i);
  }
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
//I: an array, and a test function
//O: a boolean
function every(array, test) {
  //loop through each element in my array 
  for (let element of array) {
  //for each element run the test as the condition, if the test returns false, hop
  //out and return false, 
    if (!test(element)){
      return false;
    }
  }
  //if we get through all our elements without a false, return true.
    return true;
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

//I: a string of different texts
//O: string(indicicating the dominate direction)
//C
//E: we don't want to include symbols in our count 
function dominantDirection(text) {
  
//lets keep a count of each etter in our tesxt for the dominant direction 
let arrayOfScripts = countBy(text, function(characterInText){
  const objOfScripts = characterScript(characterInText.charCodeAt())
    //check if our character belongs to a writing direction
    //if it belongs to a writing direction, return it in our callback function
    //if it doesn't belong to a script, return "non-alphabetic"
    if(objOfScripts !== null) {
      return objOfScripts.direction
    } 
    return "non-alphabetic"
});
//sort array to find the highest count value 
  //find the script for each letter that we come across
 arrayOfScripts.sort(function(a, b){
   return b.count - a.count;
 }) 
 return arrayOfScripts[0].name
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
