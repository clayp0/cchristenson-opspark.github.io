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
var editStr = string.slice(0, 3);
//This .slice method is a function that takes two numbers as parameters and uses them 
//to know where to start cutting indexes from the string, and where to stop. So then, 
console.log(editStr); //will print the value assigned to the editStr variable which is now
// "inside string"
 