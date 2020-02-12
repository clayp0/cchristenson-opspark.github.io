/** 
 * Sring Manipulation
 * 
 * In JS, strings are very mutable. They are all technically objects, but there are 
 * different rules that apply to string literals versus strings stored in variables.
 * String literals can be altered using operators, but not methods because their value 
 * is stored BY COPY. Variables that represent strings can be altered using methods because
 * their value is stored BY REFERENCE, and are all basically objects. Below are examples of
 * both types of ways strings can be manipulated. Strings are also zero indexed, like Arrays
 * so they can be accessed using bracket notation.
 */
 
 //EXAMPLES//
 
 //this example takes 3 string literals and turns them into one string
 
 console.log("string1" + " " + "string2"); 
 
 //prints:
 
 "string1 string2";

//since strings are indexed if we:

console.log("string1"[0]);

//s will print to the console, because it is the character at the [0] of the string 
//in question
 
//strings stored inside variables have basically become objects, so thy have properties
//and methods that can be performed on them. For instance:

var string = "This is all stored inside string";
var pos = string.indexOf("stored");
//This has declared a variable that is a string, and then stored a number referring to the 
//index of a specific word inside a string inside of a second variable by performing the
// .indexOf() method on the first string so that:
console.log(pos); //prints the number 12

//Here is another example of using a method to manipulate a string 
var editStr = string.slice(0, 4);
//This .slice method is a function that takes two numbers as parameters and uses them 
//to know where to start cutting indexes from the string, and where to stop. So then, 
console.log(editStr); //will print the value assigned to the editStr variable which is now
// "This"

var y = string.toUpperCase();
//This method will take each index in the string, and make it a capital letter  So...
console.log(y); //will bring back a string of "THIS IS ALL STORED INSIDE STRING"

var replace = string.replace("stored", "shmored"); 
//this is a method that creates a new string where the first parameter is the word to be replaced
//and the second word is the string to be the replacement. So...
console.log(replace); //will print "This is all shmored inside string"

console.log(string.concat("." + " " + replace));//this is an instance of the .concat() method of strings that will in this case combine the string string with the string replace printing "This is all stored inside string. This is all shmored inside string" 
var x = y.toLowerCase();//this method of strings will take each index and force it to lowercase. So...
console.log(x);//a string of "this is all stored inside string" will print to the consolce


 