
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(number) {
//make a variable to put my string into
  let str = "";
//Make a loop that prints a string after each iteration
for (var i = 0; i < number; i++){
//add one pound sign to each print of the console 
str += "#";
console.log(str);
}
}
console.log(triangles);
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz(start, end) {
  //make a loop to produce the numbers between my start and end
  for (var i = start; i <= end; i++){
  //pull out numbers that when divided by 15 have a remainder of zero and replace them 
    if (i % 15 == 0){
      console.log("fizzbuzz");
  //pull out numbers that have a zero remainder when divided by 5
    } else if (i % 5 == 0) {
      console.log("buzz");
  //pull out numbers that have a zero remainder when divided by 3
    } else if (i % 3 == 0) {
      console.log("fizz");
  //if none of these conditions are true, just print the number
    } else {
      console.log(i);
    }
  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(size) {
//make a string that i'm going to populate with a string
let line = "";


//there should be a loop to make the amount of lines required
for (let i = 0; i < size; i++){
//then I need another loop to make the entries for each line
  for (let o = 0; o < size; o++){
//if the sum of both the counters in my loops evaluate to an even number add a space
    if ((i + o) % 2 == 0){
      line += " ";
//if they eval to odd, add #
    } else {
      line += "#";
    }
    
  }
//add a break when i get to the appropriate amount of characters
 line += "\n";
  

 
}console.log(line); 
}
////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
