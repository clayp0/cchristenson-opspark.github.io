/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};
//adding key of species w value of dog into animal obj w dot notation 
animal.species = "dog";
animal.name = "Mono";
animal.noises = [];
console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
noises[0] = "woof";
noises.push("quack");
noises.unshift("bark bark");
//must use noises.length, not .length-1, in order to avoid replacing existent index.
noises[noises.length] = "RUFF";
console.log(noises);
console.log(noises[noises.length-1]);
console.log(noises);


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal.noises = noises;
//at my address, add my string
animal.noises[animal.noises.length] = "bow wow";

console.log(animal);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];
//I now have a new array that needs entries. each one should be an object
//and after each one is declared I want to add it to my array
animals.push(animal);
console.log(animals);
var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };
animals.push(duck);
var cat = {
    species: "cat",
    name: "pickles",
    noises: ["meow", "purr"]
};
animals.push(cat);
var bird = {
    species: "bird",
    name: "Sandy",
    noises: ["tweet", "tweeter"]
};
animals.push(bird);


//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I need a container for my friends
var friends = [];
//declare a function that returns a random integer within the index of our 
//animals array
function getRandom(animals){
//return a statement that produces a random number between 0 and 1, and then multiply 
//number by the number of indexes in our array.
//make our random number an integer
    return Math.floor(Math.random() * animals.length);
}



//assign our random number to a new variable that we can access
var num = getRandom(animals);
console.log(num);
//push the value of the name key of the random index in our array to our friends array
friends.push(animals[num].name);

console.log(friends);
//create a new variable at a specific index with the key friends, and the value of our 
//friends
animals[0].friends = friends;





/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
