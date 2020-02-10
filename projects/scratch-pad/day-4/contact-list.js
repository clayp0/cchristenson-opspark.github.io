// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following API:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 * 
 * BONUS : add a printAllContactNames() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
//return object containing contact information
return {"id": id, "nameFirst": nameFirst, "nameLast": nameLast};

}


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
     //make contacts a container for all my entries 
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        //addContact is going to be a key in my object with the value being a function 
        // that pushes the argument into the container i just made above
        addContact: function(contact){
            return contacts.push(contact);
        },
        //to find contacts, set the name of my API equal to another function
        findContact: function(fullName){
        // introduce a name container that will hold a value for me
            var testName;
        //loop over my contacts container, filling my name container with a trial value
            for (var i = 0; i <= contacts.length-1; i++){
                testName = contacts[i].nameFirst + " " + contacts[i].nameLast;
        //check to see if my trial value is the same as my argument value 
                if (testName === fullName) {
        //if they are the same, return that entire contact entry
                    return contacts[i];
                }
            }
        },
        removeContact: function(contact){
        //loop over all the entries in my contacts container
            for (var i = 0; i <= contacts.length-1; i++){
        //test to see if my argument is the same as the entry from the container that
        //my loop just picked up
                if (contact === contacts[i]){
        //if they are the same, splice my array at that entry, removing it, only 
                    contacts.splice(i, 1);
                }
            }
        },
        printAllContactNames: function (){
            //make a container for a value i'm going to hold, that can have stuff
            // added to it.
            var arr = [];
            //go through my contacts
            for (var i = 0; i < contacts.length; i++){
            //take the first and last name of each one, and put it into the container i made
                    arr.push(contacts[i].nameFirst + " " + contacts[i].nameLast);
            //when that's done, they need to be changed to a string, instead of a container
            // and that string needs a new designation, obv
            var allNames = arr.join('\n');
            //return the value of that new string
        } return allNames; 
        
        }
    };



}
// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
