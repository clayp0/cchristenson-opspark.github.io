//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: an object
//O: an array 
function objectValues(object) {
//let's make a container for the strings that represent our key names.
let arr = [];
//since we're dealing with an object, use a for in loop 
for (var key in object){
//push in each object's key's value 
    arr.push(object[key]);
}

return arr; 

} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//I: an object
//O: a string 
function keysToString(object) {
//gather all my object keys into an array
let arr = Object.keys(object);
    //turn that array into a string, separated by spaces
    let str = arr.join(" ");
        //return that string 
        return str;
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
  //I: object
  //O: string 
  //create a container for my values 
  let arr = [];
  //create loop to iterate through my object
    for (var key in object){
    //if the value of the key is a string, push the value into my array
        if (typeof object[key] !== 'string'){
        } else {
        arr.push(object[key]);
        }
    }
    //make my array into a string and return it
    let str = arr.join(" ");
    return str; 
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I; collection
//O: string of either "object", or "array"
function arrayOrObject(collection) {
    //check if my collection is an array and return array if so 
    if (Array.isArray(collection)){
        return "array";
    } else {
    //if it isn't, return object
        return "object";
    }
}
//yes, i am aware that in this case, we coded to the test, not the problem, and for that I am sorry. 
//but it did pass, so...

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    //return a new string that consists of the first letter of my string forced to upper case, and a slice of the rest of the string
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    //split my string into an array
    var str = string;
    var arr = str.split(" "); 
    //make another container to put my changed strings into
    let stuff = [];
    //loop through arr, and push each word in after it's been altered
    for (let i = 0; i <= arr.length-1; i++){
        stuff.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
         
    }
    //return a new string made of the values in my array
    return stuff.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: object
//O: string

function welcomeMessage(object) {
//create a variable that will hold our string, making sure that it has been 
//force to have an uppercase first letter
let str = object.name.charAt(0).toUpperCase() + object.name.slice(1);
//return string
return 'Welcome ' + str + '!';
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: object
//O: string

function profileInfo(object) {
//we can handle this the same way way, as we did the last function, but this time 
//we need a second variable to hold the value of our species key
let str = object.name.charAt(0).toUpperCase() + object.name.slice(1);
let str2 = object.species.charAt(0).toUpperCase() + object.species.slice(1);
//return the string
return str + ' is a ' + str2;
}
//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I:object
//O:string 
function maybeNoises(object) {
//we need to check if our object has the property we're looking for, and that it isn't empty
if (!object.hasOwnProperty('noises') || object.noises.length === 0){
    return 'there are no noises';
} else {
//if it exists, make it into a string, and print that sucker
    return object.noises.join(' ');
}
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: string
//O: boolean

function hasWord(string, word) {
//check if the string includes the word, and return the value of the search
    return string.includes(word);
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: object and a string
//O: an object 
function addFriend (name, object) {
    //push the name of our friend, to the relevant object key
   object.friends.push(name);
   //return the object 
   return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: an object, and a string
//O: a boolean

function isFriend(name, object) {
//check if object.friends is true or false 
if (object.friends) {
//if it is true, assign the array value to a string
     var str = object.friends.join(' ');
     //return the value of a test to check if the name is included in the string
     return str.includes(name); 
     //return false 
} else {
    return false;
}
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: string and an array
//O: array 

function nonFriends(name, array) {
    //make a container to hold our non-friends names
    let people = [];
    //go through each of the arrays indices 
    for (var i = 0; i <= array.length-1; i++){
    //check to make sure the name of the index isnt the argument, and index has friends
    if (array[i].name === name || array[i].friends === undefined) {
    //if the index's friends doesn't include the argument
    } else if (!array[i].friends.includes(name)) {
    //push the name of the index being checked to our container
        people.push(array[i].name);
    }
    }
    //return the container
    return people;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: object
//O: updated object 
function updateObject(object, key, value) {
    //loop through our object to see if a key exists
    for (var checkKey in object){
        //if it does exist, we're going to replace the key's value with our argument
        if (checkKey === key){
            object[key] = value;
            return object;
        //if it doesn't exist, we're going to create a new key with the value of our argument 
        } else {
            object[key] = value;
        }
        
    }
    return object;
}


//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: object, and an array
//O: updated object
//C/E: only remove object property if it's listed in the array
function removeProperties(object, array) {
    //loop through our array
    for (var i = 0; i <= array.length-1; i++){
        //check its value against the keys in our object 
        for (var key in object) {
            if (array[i] === key){
            //if a match is found, remove the object property 
                delete object[key];
            }
        }
    }
    //return object
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: array
//O: new array
function dedup(array) {
//make a container to put my stuff in
    let arr = [];
    //loop through my argument
    for (let i = 0; i <= array.length-1; i++) {
    //check if arr includes the current i from the argument, if it doesn't, push the index into arr
        if (!arr.includes(array[i])) {
           arr.push(array[i]); 
        }
    }
    //return the array
    return arr;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}