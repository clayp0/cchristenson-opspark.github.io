/*
* VARIABLES:
*
* 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
* are named identifiers that can point to values of a particular type, like a Number, String,
* Boolean, Array, Object or another data-type.  Variables are called so because once created, we
* can CHANGE the value (and type of value) to which they point.
*
* 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
* variable.
*
* 2. There are 2 phases of using variables: declaration and initialization (or assignment).
*/

// 1. declaration //
var myName;

/*
* At the declaration phase, the variable myName is undefined because we have NOT initialized
* it to anything
*/
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

/**
 * VAR, LET, CONST:
 * 
 * These three represent different ways to declare things in Javascript. They each 
 * contain their own properties, and should be used at different times to maximize
 * the succinctness and organization of our code. 
 * 
 * 0. Var 
 * 
 * Var is the most basic type of variable, meaning that it has the least amount of 
 * rules that apply to it. Var variables can be redeclared after they are assigned 
 * and may be reassigned at any time. Var variables are either scoped globally, or 
 * to a function. They cannot be scoped to an if statement or codeblock. That means 
 * that if a variable is declared inside a code block, it wil still accessible outside
 * the code block. It is also hoisted to the top of the code after declaration. I'll 
 * explain more about that below. 
 * For now, let's look at some examples of Var variables.
 */
 
 //EXAMPLES//
 
 var x; //declares the variable, but does not assign it a value.
 
 x = "a value"; //now x has been assigned the value of a string.
 
 x = "new value"; //this has reassigned x a new value of a different string.
 
 function funk(){
     var x = "different value";
        if (x === "new value") {
            //some code
        }
 }
 
 //In the above function, I've declared a new variable x within my function. This 
 //means that my function x is a unique variable, and exists only within my function.
 //However, the x within my if statement does refer to the x declared at function 
 //scope for definition.
 
 /**
  * 1. Let 
  * 
  * 
  * This type of function is very useful for locating a variable in a specific scope.
  * Let wil stay at the scope it is declared, and will not move outside of them, 
  * including functions, blocks, and if statements.
  * Let is reassignable, but is not hoistd to the top of the scope upon running.
  */
  
  //EXAMPLES//
  
  let y = 0; //declares a variable y, with a numerical value.
  
  y = "one"; //reassigns the value of y to a new string value.
  
  //this function is absolutely wonky and useless, but it shows how Let behaves within
  //scopes. 
  function funk2(){
      let y = 2;//This y is stuck at function scope and retains its value as different 
      //from the y declared at global scope
      if (x > 9){
          let y = "another value"; //In the same way, this if block scope y retains
          //it's value as different from both of the other y's that have already 
          //been declared.
      }
  }
 
 /**
  * 2. Const 
  * 
  * Const is the last type of variable that needs to be covered here. It mirrors the same
  * rules about declaration as Let, but unlike Let, it cannot be reassigned after it 
  * has been declared. It also MUST be declared and assigned at the same time.
  */
  
  //EXAMPLES//
  
  // const z; //This will throw an error, because a const variable must be assigned
  //when it is declared
  
  const z = "zee";//now z has a value. This is the way to use const, remembering to 
  //it will only be available at its current scope.
  
  //const z = "em"; //This would also throw an error because const variables cannot be
  //reassigned after declaration.
  
  
  
  
  
  /**
   * HOISTING 
   * 
   * Javascript, for reasons of efficiency, when functions and some variables are 
   * declared, they are hoisted to the top of their relative scope. That means that 
   * the code knows their names before it actually gets to the lines of code that 
   * run them. In the case of var variables, their name is hoisted to the top of scope, 
   * but their value is not. In the case of Let, and Const: they are not available
   * in name or in value until the code reaches the lines that contain them.
   */
   
   //EXAMPLES//
   
   
   console.log(a); //at this point in the code, the computer can tell that a variable 
   //with the name a has been declared, but since the value isn't hoisted, the console
   //will print "undefined".
   var a = "a";
   
   var func = function(){
       console.log(a); //this console log will also return undefined, but it will not
       //throw a reference because it knows that there is a variable a that has been
       //hoisted to the top of the functino scope, it just doesn't know what the value
       //of the variable is. 
       var a = "Ayyyyyyy";
   };
   
   //console.log(b);
   //console.log(c);
   //Both of these would throw a reference error because Let and Const variables aren't
   //hoisted to the top of their scope, so at this point the computer will look for
   //variables with the name b and c and come back shaking it's head.
   let b = "b";
   
   const c = "c";
  
  
  
  