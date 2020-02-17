/*
*DATA TYPES:
*
* In Javascript there are different types of value that we can store inside of 
* our variables. These value types are broken into the two major groups of simple/primitive
* and complex. Understanding how and when to use each of these value or Data Types
* will allow us to structure our code in clear and succinct ways that the computer
* will be able to read and execute correctly. 
* 
* Strings, booleans, numbers and null/undefined comprise our simple data types.
* These data types earn the title "simple"because they are immutable, they cannot 
* change once they have been created. Simple data types are compared by value, and
* are said to be strictly equal if they have the same value. When any of these data
* types are passed to a function, they are passed "BY COPY". This means that their 
* value is copied by the computer at each new instance. 
*
* Following is an explanation of each Simple Data Type, proceeded by an example.
*/

/* SIMPLE DATA TYPES
*
* 0. NUMBERS
* Javascript accepts positive, negative, and decimal numbers as valid data, and 
* are recognized according to their symbol. 
*/

//EXAMPLES//

0; 
228910;
-345;
1.271;

/* 1. Strings 
* Data strings are any litany of characters written in Javascript in which is 
* held some value. Data strings are delineated by placing single quotes (''), or 
* double quotes ("") around them. Strings are all the words we use to fill up our 
* code. Strings have a zero-index which means each of their characters is assigned
* an address starting with 0 and ascending upwards. 
*/

//EXAMPLES//

var string = "string";

var sString = 'This is a string with single quotes';

var numString = "1, 3, 5, and 7";

var explainString = "Above numbers ^^^ are a string now because I've encased them in quotes at declaration";

//if I use bracket notation to refer to the address of my strings, I can summon it BY COPY. If I;

console.log(string[0])

// s will print to the console, because it's the character at index 0 in my string


/* 2. Booleans 
* This data type assigns a by copy value of true or false. Javascript, when reading
* a boolean value will always assign their value according. They can be thought of
* as a switch being turned on, or off. There are only two boolean values: true and 
* false. Using operators, it is also possible to coerce a boolean result.
*/

//EXAMPLES//

true;
false;

var compare = 2 > 1; // will hold the boolean value of this comparison so that,

console.log(compare); //will print true and 

console.log(compare === false); //will print false because compare resolves to true



/*COMPLEX DATA TYPES 
* 
* Now that we have covered the primitive, simple, or BY COPY types of data in Javascript, 
* we can move to the complex or BY REFERENCE data types. These types of data are 
* mutable. They are able to be changed and manipulated after they are created. They 
* may be called BY REFERENCE data types because when they are passed to a function,
* the computer will REFER back to the place where the data was originally collected 
* and stored. BY REFERENCE data types collect their data DYNAMICALLY.They will only
* be considered strictly equal if they refer to the same underlying object. 
*/



/* 3. null/undefined 
* So this is the default data type that will be given as a placeholder when necessary
* in the absence of any other type of data. It is, like the vacuum of space, what
* is there when there is nothing there. 
*/

//EXAMPLES//

var empty;

//Since I have declared my variable "empty", but haven't put anything in it when I...
console.log(empty);

//undefined will print to the console log. Javascript knows it exists, but nothing more.

empty = []; //when I set my variable equal to an empty array and then, 

console.log(empty[0] == null); //I'm asking the console to check if there's anything 
//at the first index of my array. the console will print true, because there isn't anything
//at that index.





/* 4. NaN 
* This data type, while slightly more rare, is extremely important. This data type 
* is immutably derived by Javascript when it expects a number, but is given something 
* that isn't a number. 
*/

//EXAMPLES//

//This function takes in one parameter (x) and determines if it is a number or not. 
function faker(x) {
    if (isNaN(x)) {
        return "not a number!";
    } else return "It's a number!";
}
//When I console.log my function, and pass as an argument something 
 //like the string of "orange" for instance, like so:
 
 console.log(faker("orange"));
 
 //the console will print NaN because it 
 //knows it hasn't been given a number.

/* 5. Inifinity and -Infinity
* Javascript includes in its global object a variable which holds the value of 
* infinity. This variable is equal to infinity, and can be used in any mathmatical 
* equation. Infinity and its opposite -Infinity are respectively are larger, and smaller 
* than any other number. 
*/

// EXAMPLES //

//adding any number to infinity will equal to infinity:

console.log(Infinity + 1);

//In Javascript's log, 0 has the value of no value which is the same as -Inifinity
// so, if we:

console.log(Math.log(0));

// it will print a value of -Infinity. 
// To the grader: I am sorry that I'm using math.log without knowing exactly what 
// it's for. I could not figure out another way to produce -Infinity, and am happy
// to be redirected.



/* 6. Arrays 
* This data type holds values assigned to it after it has been declared within braces,
* and separated by commas. An array is an ordered list with a zero-index, meaning 
* that they can be accessed according to their position within the array. It is 
* referred to as a collection because it holds other types of value within it. 
* Arrays may hold any other type of value within it. Unlike strings, Arrays are 
* indexed per element starting with 0. That means that accessing the index of an
* item in an array will access the entire item set off by commas, not an individual
* character. Because the values in an Array are passed BY REFERENCE, it is possible 
* to add elements to an array using bracket notation at any time, from anywhere.
* I will show the most common ways to change the values stored in an Array below.
*/

// EXAMPLES //

var myArr = []; //this is an Array Literal. It's the box, without anything in it.

myArr.push("Second Item"); //will push this item onto the end of my array

myArr.unshift("First Item"); //will place this item at the front of my array

console.log(myArr[0]); //will print "first item" to the console, because it the item at the index 0

myArr.pop(); //will remove the final element from my array

myArr.shift(); //will remove the first element in my array.

// now that my array is empty, I can push any new elements that I want in. 

myArr.push(123, "A String", false);

var myLast = myArr[myArr.length-1]; //will assign myLast the value of the last element in my array.

console.log(myArr.length); //will print non-zero-indexed number of elements in my array.




/**
 * 7. Objects
 * Javascript is mostly made up of these little puppies. Objects in JS are collections 
 * of data or functionalities that are kept in an unordered list of key/value pairs encased
 * within curly braces: {}, and separated by commas.
 * These key/value pairs are accessible by both dot, and bracket notation. Because 
 * object collections are unordered and associative, they are usually used to hold bodies of information 
 * or code that will be called by name, not by rank. Objects also have many methods, or 
 * latent functions within them that will modify the object accordingly. Below are 
 * examples of how to declare, fill, and call an object as a collection. Because objects
 * are complex, their data is held BY REFERENCE, which means that when they are accessed, 
 * the computer refers back to the original object to produce the value. Key/value pairs 
 * can be made of any data type that we have discussed so far, and also functions. 
 * Because JS is an "object oriented" language, there are other things such as functions,
 * Dates, null, and Arrays, that are really objects with fancy attributes called constructors.
 * Right here, I'm only going to talk about objects as collections which match my definition
 * above. 
 * 
 */
 
// EXAMPLES //
 
 var obj = {}; //declares an object literal with nothing inside of it. 
 
 obj.name = "Steve"; //declares a new key in obj with the value "Clayton".
 
 obj.name = "Clayton"; //will change the value of the key "name" to "Steve".
 
 obj.age = 27; //will add a new key with the value of a number
 
 obj.isTall = true; //will add a boolean as the value of the key isTall
 
 obj.interests = ["running", "music", "coding"]; 
 //will add to the object an key with the value of an array containing strings
 
 obj.moneyPerMonth = function(hrs){
     let pay = hrs * 15;
     return pay;
 }; //is now a key/value pair with the value being a function that takes the numbers 
 //of hours worked, and multiplies it by an hourly rate, and returns the new number
 
 console.log(obj); //will now print entire thing, and it'll look like this:
 
//  { name: 'Clayton',
//   age: 27,
//   isTall: true,
//   interests: [ 'running','music', 'coding' ],
//   moneyPerMonth: [Function] };

//You may be wondering why [Function] printed to the console instead of the code
//block itself. The console will produce the function, because that is not its job.
// if I want to use the function, i need to call it, putting in an argument like so:

obj.moneyPerMonth(17); //which will pass the number into the function and return a 
// new number.



/**
 * 8. Functions
 * 
 * As noted above, in JS functions are a type of object that have unique properties
 * and methods. A function is basically a factory in code that is made of a code block
 * of other data types. Functions begin to work when a value is given to them. After 
 * it recieves a value, the function will send the value through its block of code, and
 * produce a new value. The placeholder for the value passed into a function is called 
 * the function's parameter. When the function is called, the new value that takes the 
 * parameter's place is called an argument. The functionality of a function is limited onnly 
 * by the code block that resides inside it. A function can be declared through a function 
 * statement. This way demands the function recieve a name when it is declared. A function 
 * can also be declared through a function expression. This can be done anonymously, and is useful
 * if the function is residing in a larger object, or assigned to a variable.
 * 
 */

//EXAMPLES//

function swap(value){ //this first line is the declaration. Here the function is named, and given parameters.
    let newVal = value;
    newVal = "googlymoogly"; //this is the function's code block, or the part that does
    // the functioning. In this case, my function is going to change the value of whatever is passed in
    // and change it to a string of "googlymoogly"
    return newVal; //this line tells the function to bring back the updated value. 
    //without a return statement, the code block of the function would run, but the 
    //result would be stuck inside with no way out. 
}

swap("Clayton"); //this will return "googlymoogly"

var myFunc = function (word1, word2){ //this is an example of an anonymous function expression 
    let newWord = word1.concat(word2); //the codeblock here takes the two parameters and makes a 
    //new word made of the two separate words. 
    return newWord;
};

myFunc("googly", "moogly"); //this will return a value of "googlymoogly"

//however, unlike swap(), because this second function was declared as an expression, 
//it can be renamed at any time like so:

var sameFunc = myFunc; //means that the above function now has a new name, but will 
//run the same, and return the same result when:

sameFunc("googly", "moogly");

/**
 * 9. BY COPY AND BY REFERENCE EXAMPLES
 * 
 * We've already talked about data processed by copy, and data copied by reference.
 * Now, let's take a look more closely at what is actually happening
 */
 
 //EXAMPLES//
 
 var str = "A string";
 
 //in this case, the computer passes the value of each character in the string by 
 //copying it. It is passed by copy because the computer already knows what to do with
 //each of those letters.
 
 var str2 = str;
 
 //now I've assigned the value of my new variable str2 equal to the value of my first variable 
 //str. In order to fill the variable with the value I've designated, the computer 
 //copies each of the values into the new variable.
 
 var arr = [1, 2, 3, 4, 5, 6, 7, 8];
 
 
 var newArr = arr;
 
 //in this case, I've made a complex data type that could be any size. When I rename
 //the data something else, or whenever I want to do anything with it, the computer
 //goes back to the time the data was written the first time, wherever that is. 
 //It is very important to note that when I create newArr, the computer does not 
 //recreate the data from arr. Instead, newArr now points to the data held by arr.
 //same if I:
 
 console.log(newArr); //the console goes back and looks at where the code was written
 //when it was declared arr. It needs to look at the place where the literal data
 //exists in order to access and print it.