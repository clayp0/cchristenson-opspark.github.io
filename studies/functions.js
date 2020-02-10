/** 
 * Functions 
 * 
 * These are the bread and butter of Javascript's ability to complete tasks. They 
 * are factories inside of which blocks of code are run. Functions are created with 
 * a certain amount of parameters that act as placeholders for value. When functions 
 * are accessed by the computer a real value, or argument, is entered and run through 
 * the function, and a new value will emerge. 
 */
 
 /**
  *0. The two phases to using functions: Function declaration, and invocation.
  * 
  * To make a function usable, it needs to be declared and defined according to the 
  * form of a Javascript function. The function will not be useful, however, until 
  * it is invoked after declaration. 
  */
  
  //EXAMPLES//
  
  //first, let's declare a new function, give it some parameters, and something to 
  //do with those parameters.
  function add(a, b){
    return a + b;
  }
 //at this point, the function has been declared, but it will just sit there forever 
 //without doing anything, until the function is called, or invoked
 
 console.log(add(5, 6));
 
 //now, the function has been invoked, and given arguments to pass in as its parameters
 //and can give us back the result (11), or in this case, print it to the console. 
 
 

 /**
  * 1. What is the difference between a function's parameters and the arguments
  * passed into a function?
  * 
  * Looking at the above example, the parameters of the function are a and b. They 
  * take the place of the future arguments the function will recieve. In our example
  * the numbers 5 and 6 are the arguments that have been passed into the function.
  */ 
  
  /**
   * 2. What is the syntax for a named function?
   * 
   * The example above represents the syntax for a named function. In more overt terms:
   */
   
   function functionName(parameter){
       //function code body
       return; //is necessary, because otherwise the modified value would never leave
       //the function
   }
   
   /**
    * 3. How do we assign a function to a variable?
    * 
    * When we assign a function a variable we are writing a function expression.
    * To assign a function to a variable means that basically instead of the function
    * having a hard coded name, it will live inside the house of the variable that 
    * can be changed if we want it to be changed. 
    */
    
    var myFunc = function(parameter){
        //do something to the argument passed in as the paremeter
        return; //the modified value of the argument.
    };
    
    var noMyFunc = myFunc; //now the function is held within the new name noMyFunc. 
    //the expression will run exactly the same way, but it is called differently.
    
    /**
     * 4. Functions can optionally take inputs, and optionally return a single value.
     * How do we specify inputs/outputs?
     * 
     *Functions are extremely flexible, and can use values found not within themselves
     *to work on. As long as the values it is working with are real, it will be able to 
     * return any number of outputs after recieving any number of inputs
     */
     
     var x = 1;
     var y = 2;
     var z = 3;
     
     function addFromBeyond(){
         return x + y + z && x - 2;
     } 
     //In the above case, the function isn't being given anything as a parameter.
     //Instead, when it is invoked, it will print out two values derived from performing
     //operations on variables that exist outside of itself.
     
     addFromBeyond();
     
     
     /**
      * 5 and 6. Function scope and closures 
      * 
      * Functions use scope to allow functions to keep parameters separate from 
      * one another. Parameters from the parent, or global scope can be used by 
      * interior functions, but the values of parameters of functions that live inside other 
      * functions cannot be accessed by the parent scope. 
      * 
      * These values that are held in child scopes are called closures. They represent
      * live data that accessed and used in child scope without the value ever being 
      * known by the larger function surrounding
      */
      
      //to demonstrate this, let's set up a function with another function as the return
      //of our parent function. The parent function will take in a value, and add five to it. 
      //This value + 5 will be given the name newVal. 
      function addItAgain(value){
          let newVal = value + 5;
        //once newVal is assigned, it gets passed to the return of the function which
        //is a function expression that has been declared with the parameter secretVal
          return function(secretVal){
        //this internal function itself adds the two values together and returns them
        //the way that this internal function uses data from the external funtion and
        //produces a new value represents a closure.
              secretVal = 42;
              return newVal + secretVal;
          };
      }
    
     //because secretVal is assigned at child scope, it will not be accessible from the 
     //parent scope of the function. Effectively, addItAgain won't ever get to know what
     //secretVal is, and doesn't need to in order to bring back the value of newVal +
     //secretVal. That's the magic of scope. 
    