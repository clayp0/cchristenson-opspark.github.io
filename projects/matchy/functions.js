/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: array and a string
//O: an index in our array
//C/E: only return the index in our array if it exists, and if its the one that was searched

function search(animals, name){
    //let's make a container 
    let x = {};
    //loop over my array to look for a specific name
    for (var i = 0; i <= animals.length-1; i++){
        if (name === animals[i].name){
    //If we find one, return it
            return animals[i];
        }
    }
    //if we don't, return null to let us know our query doesn't exist
        return null;
    
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: an array, a string, and an object
//O: replacing old entry with new one
//C/E: Only replace if the name is exactly equal to the name of the argument

function replace(animals, name, replacement){
    
 //loop to check my array   
    for (let i = 0; i <= animals.length-1; i++){
        if (name === animals[i].name){
    //if we find a match, splice off at index, and place in our replacement
            return animals.splice(i, 1, replacement);
        }
    } 
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: Array, string
//O: n/a
//C/E: only remove if it matches the name passed in


function remove(animals, name){
    //loop over our array
    for (let i = 0; i <= animals.length-1; i++){
        if (name === animals[i].name){
    //if we find a match, remove it. 
            return animals.splice(i, 1);
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Create ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Input: Array
//Output: n/a
//C/E: if the name string is 0 then don't push it
//if the species string is 0 then don't push it
//if the name does not exist then don't push it 

function add(animals, animal){
    //loop over my array
    for (let i = 0; i <= animals.length-1; i++){
    //if any of my constraints come back true, hop out and do notthing
        if (!(animals[i].name.length > 0) || !(animals[i].species.length > 0) || animal.name === animals[i].name){
            return null; 
        }
           
        }
  //if our new animal doesn't get tossed out by our if, add it.  
    animals.push(animal);
}
    



/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
