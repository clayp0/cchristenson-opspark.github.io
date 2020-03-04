// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("lodown-cchristenson-opspark");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    //return a function that will sort the argument
    return _.filter(array, function(customerObj){
        //return only those customers who are male
        return customerObj.gender === 'male';
        //since we just need a number, return the length of the array
    }).length;
};

var femaleCount = function(array){
    //return a function that will reduce my collection
    return _.reduce(array, function(n, customerObj){
        //since a number is required, start with a seed of zero and use 
        //truthy values as a counter to add to our seed
        return n + (customerObj.gender === "female");
    }, 0);

    
};

var oldestCustomer = function(array){
  let oldestA = 0
//   for (let i = 0; i <= array.length - 1; i++){
       
//       if (array[i].age > oldestA){
//           oldestN = array[i].name;
//           oldestA = array[i].age;
//       }
//   }
//   return oldestN;
//return a function that will reduce my collection to a single value
return _.reduce(array, function(x, object){
    //reduce according to a test whether the age being tested is greater than 
    //the number represented by oldestA
    if (object.age > oldestA){
        //if the condition is met, update the seed with the value of that object's
        //name property 
        x = object.name;
        //also, update the oldestA value to the age value of the current object
        oldestA = object.age;
    }
    //return whatever name the seed has become 
    return x;
})
};

var youngestCustomer = function(array){
    //set a value equal to y that is bigger than any number
    let y = Infinity;
    //return a function that will reduce my collection to a single value
    return _.reduce(array, function(n, object){
        //this conditional works the same as the previous one, but with the condition
        //being set as true when the age value of the object is less than the value 
        //of y. 
        if (object.age < y){
            n = object.name;
            y = object.age;
        }
        return n;
    })
};

var averageBalance = function(array){
    //return a function that will reduce the collection to a single value
    return _.reduce(array, function(n, element){
        //the function will start with a numerical seed of 0, and will add the 
        //value of each customer's balance after removing symbols and changing the 
        //string to a floating point number
        return n + parseFloat(element.balance.replace(/\$|,/g,'')); 
        //the function will return the collective balance of all the customers, 
        //so, divide to find average balance
    }, 0) / array.length;
};

var firstLetterCount = function(array, letter){
    //return a function that will reduce the collection to a single value
    return _.reduce(array, function(n, element){
        //start with a seed of zero, and count truthy values according to the criteria
        //that the first letter of the customer's name matches the letter argument
        return n + (element.name[0].toLowerCase(
            ) === letter.toLowerCase())
    }, 0)
};

var friendFirstLetterCount = function(array, name, letter){
//create an array to hold the object of the customer with the name provided
//and filter the collection to fill the array with the object
let filtered = array.filter(function(object, index, collection) {
    if (object.name === name){
        return true
    }
})
//return a function that will reduce the array of friend objects within the customer object at the 
//0th (and also only) index in the array
return filtered[0].friends.reduce(function(n, element){
    //reduce according the criteria that if the name property within the object 
    //matches the letter argument, increase the seed by one
    if (element.name[0].toLowerCase() === letter.toLowerCase()){
        n++
    }
    return n;
}, 0)
};

var friendsCount = function(array, name){
//     //provide array
//     let isFriends = [];
// //loop through outer array, 
//     _.each(array, function(element, index, array){
//         //access the friend property and loop through the array of friend objects
//         _.filter(element.friends, function(element1, index, array){
//         //test for our given name and if a match is found, 
//             if(element1.name === name){
//                 isFriends.push(element.name);
//             }
//         });
//     });
//             //push the name of that customer object to a new array
//     return isFriends;  
//Alternate solution:
//make a container to hold my values
let friends = [];
//look through each index in the array
array.forEach(x => {
    //stop and look through each indexes' friends array
  x.friends.forEach(y => {
      //if the name argument exists, push the original indexes' name to the container
    if(y.name === name){
      friends.push(x.name);
    }
  });
});
//return the container
return friends;
 };

var topThreeTags = function(array){
    
//     //set an empty array to hold the total number of tags within the collection
//     let allTags = [];
//     //loop through first the customer array
//     // for (let i = 0; i <= array.length - 1; i++){
//     //     //then loop through each tags array within each customer object
//     //     for (let j = 0; j <= array[i]["tags"].length - 1; j++){
//     //         //push all the tags into the array
//     //         allTags.push(array[i]["tags"][j])
//     //     } 
//     // }
//     //actually fuck those for loops. Instead, use forEach twice to access each of 
//     //the tags and push them into the array 
//     array.forEach(element =>{
//         element["tags"].forEach(tag => {
//           allTags.push(tag)
//         })
//     })
//     //reduce my array to an object where each tag is a key, and its occurences
//     //is the value
//     let obj = allTags.reduce((accObj, tag) => {
//     //check to see if the tag occurred 
//     //if the tag is a key in our object 
//     if(accObj[tag]){
//       //increment its value 
//       accObj[tag] += 1
//       //return accObj;
//     } else {
//     //if the tag is not a property in the obj
//       //make the key/val pair with val of 1
//     accObj[tag] = 1;
//     }
//     return accObj
    
//   }, {})
//   //make a new container
//   let sortTags = [];
//   //loop through the object
//   for (let key in obj){
//       //make each key value pair a unique object within my container 
//     sortTags.push({tagName: key, occurence: obj[key]})  
//   }
//   //sort the array so that the objects with most occurences are on top 
//   sortTags.sort((a, b) => {
//       return b.occurence - a.occurence;
//   })
//   //return an array of the first three indexes' names in a new array
//   return [sortTags[0].tagName, sortTags[1].tagName, sortTags[2].tagName]

//ALTERNATE SOLUTION:
//create a container and fill it with all the total number of tags
let tags = array.reduce((acc, next) =>{
  return [...acc, ...next.tags];
}, []);
//make an object that contains each tag as a key, and its occurences the value
let sorted = tags.reduce((accu, nex)=>{
  if (accu[nex]){
    accu[nex] +=1;
  } else {accu[nex] = 1;
  }
  return accu;
}, {});

//sort the object into an array of tag names, with the most occured first
let arr = Object.keys(sorted).sort((a,b) => {return sorted[b]-sorted[a]});
//return a slice of the first three indexes of that array
return arr.slice(0,3);
};

var genderCount = function(array){
    //create an object to hold my values
    let gObj = {};
    //set keys in the object with values equal to function calls of maleCount and 
    //femaleCount, made above.
    gObj.male = maleCount(array);
    gObj.female = femaleCount(array);
    //set non-binary customers to a function that will filter my customer object
    //according to the relevant string, and bring back the length of that array
    gObj['non-binary'] =  _.reduce(array, function(n, element){
        return n + (element.gender === "non-binary")
    }, 0)
    
    // _.filter(array, function(customerObj){
    //     return customerObj.gender === 'non-binary';
    // }).length;
    //return that object
    return gObj;
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
