////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//I: two numbers
//0: an Array
//C/E: if my step is a negative number, return an empty array
function range(start, end, step = 1) {
  //make a container 
  const arr = [];
  //if the step is less than one, or if the start and end are the same, save yourself the trouble
  if (step < 1 || start === end){
    return [];
  }
  //if the startis smaller than the end...
  if(start < end){
    //loop from the start to the end, pushing each iterated number into my container
    //according to the step
    for(let i = start; i <= end; i += step){
      arr.push(i);
    }
    //now another loop for if the start is larger than the end.
  }else {
    for(let i = start; i >= end; i -= step){
      arr.push(i);
    }
  }
  //return the array
  return arr;
}  

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//I: array
//O: a number 
function sum(arr) {
  //return the array reduced to a single number using .reduce with the condition 
  //inside .reduce being a function that tells the reduce to do so by adding one number
  //to the next, starting at 0
 return arr.reduce((a, b) => a + b, 0);
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//I: array
//O: a new array
function reverseArray(arr) {
  //make a new container
let nArr = [];
//loop through my array and pull indexes starting with the last one
  for (var i = arr.length-1; i >= 0; i--){
 //push each index into the container 
    nArr.push(arr[i]);
  }
  //return the array
  return nArr;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//I: array
//O: array
function reverseArrayInPlace(arr) {
  //loop through my array, starting with the last index
  for (var i = arr.length-1; i >= 0; i--){
  //push the last one back in, and then splice it off
    arr.push(arr[i]);
    arr.splice(i,1)
  }
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//I: Array of values
//O: object 
//C: name the keys value and rest. rest will contain the nested object value
function arrayToList(array) {
  //make a container to hold my list, and set it equal to null which will end up being the final value of our list
//   var list = null;
//   //starting with the first element in the array, make that our first "value"'s value
//   //loop through my array, starting with the last index
  
//   for (var i = array.length - 1; i >= 0; i --){
//   //each loop will take the list as it is, set it equal to rest, and put the current array index as the value of the first key, which is called value. then the loop will set that loop result equal to the variable list. In this way the loop will build up a list of objects within objects starting with the innermost one first
//     list = {value: array[i], rest: list};
//   }
//   return list; 
// }


//recursive version of arrayToLIist
//if there are no elements in the array, return null
if (!array.length) {
  return null;
}
//if the array has a length of one, return an object with the first key named value
//equal to the 0th index in the array, and a second key name rest equal to null
if (!array.length === 1){
  return {value: array[0], rest: null}
}
// before the array gets to one, return an object with a key named value set equal 
//to the 0th index in the array, and a second key name rest set equal to a function 
//call of arrayToList, passing my array from the 1st index onward as the argument
return {value: array[0], rest: arrayToList(array.slice(1))
}
}
////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list) {
  //make array to hold values
 let arr = [];
//now, let's make a first conditional that will return our array when it's done working
 if (typeof list === "undefined" || list.value === undefined || list.rest === undefined){
   return arr;
//if our argument still has a value:
 } else {
//push in the first value. Then,
   arr.push(list.value);
//now we need to deal with the object inside rest. let's make a while loop that will do a couple things
//first, it keep going as long as my list has a property of rest that isn't null
   while (list.hasOwnProperty("rest") && list.rest !== null) {
//then, trickily, it's going to set our original argument equal to a new value of just the 
//rest value of the original argument
     list = list.rest;
//then it's going to check the new value of list for a property of value
      if (list.hasOwnProperty("value")) {
//and push it to the array. then the loop is going to repeat itself again on the new list
//that it, itself just made, until there aren't anymore hasOwnPropertys of "value"
        arr.push(list.value);
      }
   }
 }
//if it gets through all that, return the array
 return arr;
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//I: a value element, and a list of nested objects
//O: object
function prepend(element, list) {
//return a final object shell with the first element in the object as the first argument, 
//and the list of nested objects as the second argument
  return {
    value: element, 
    rest: list
  };
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//I: a list of nested objects, and the number of a desired index
//O: the element in what has become that array
function nth(list, number) {
//return a function that takes a list and converts it to an array, along with a 
//the index number as the second argument
  return listToArray(list)[number];
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(a, b) {
  // if (a === b) {
  //   // items are identical
  //   return true;
  // } else if (typeof a === 'object' && a !== null && typeof b === 'object' && b !== null) {
  // 	// items are objects - do a deep property value compare
  //   // join keys from both objects together in one array
  //   let keys = Object.keys(a).concat(Object.keys(b));
  //   // filter out duplicate keys
  //   keys = keys.filter(
  //     function (value, index, self) { 
  //       return self.indexOf(value) === index;
	 // }
  //   );
  //   for (var p of keys) {
  //     if (typeof a[p] === 'object' && typeof b[p] === 'object') {
  //       if (deepEqual(a[p], b[p]) === false) {
  //         return false;
  //       }
  //     } else if (a[p] !== b[p]) {
  //       return false;
  //     }
  //   }
  //   return true;
  // } else {
  // return false; 
  // }
//let's make this a little more simple. Let's just turn both objects into JSON strings
 let str1 = JSON.stringify(a);
 let str2 = JSON.stringify(b);
//now we'll be able to see if their are absolutely equal to eachother or not very easily.
return str1 === str2;
}
////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
