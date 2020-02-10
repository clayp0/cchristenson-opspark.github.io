/**
 * Operators
 * 
 * Javascript uses symbols called operators. These operators are built into the code, 
 * and are useful for giving the code commands. Operators fall into two basic categories
 * of unary or binary. Most operators are binary which means they need something on either side 
 * of them to work like so: operand operator operand. Unary operators are a special kind 
 * which only need one operand to work properly. After these two distinctions, operators 
 * are broken down into further categories that will be designated below.
 */
 
 /**
  * 0. Assignment operators
  * This type of operator takes the operand on the left and gives it the value of 
  * operand on the right. It is how Javascript is able to carry big loads in small 
  * packages. The basic assignment operator "=" can also be combined with other operators
  * to all sorts of effects 
  */
  
  //EXAMPLES//
  
  var x = 3; //gives x the value of 3 
  var y = 5; //gives y the value of 5
  
  x += y; //takes the value of x and y and adds them together, so that the value of 
  //x is now 8
  
  /**
   * 1. Arithmetic operators
   * These variables take in two numbers, or variables with numerical values, and returns 
   * a single result from them. They allow us to perform math equations in code without 
   * overtly declaring some new function. They look like their arithmatic counterparts.
   * They can also be put together to make some special mathmatical things happen. As shown 
   * below.
   */
   
   //EXAMPLES//
 
 1 + 2; // equals 3
 2 - 1; // equals 1
 4 / 2; // equals 2
 4 * 2; // equals 8
 -3; //equals negative three when used in this context, and functions as a unary operator
 x = 0;
 x++; //this unary operator increments a value by one, meaning that x now equals 4
 x--; //also unary, this operator de-increments a value by one, which means x equals 3 again
 16 % 1; //this binary operator returns the remainder of the operands, in this case 1.
 2 ** 4; //this operator functions calculates the exponent value, in this case 16.
 
 /**
  * 2. Comparison operators 
  * These operators compare values in different ways. They fall into the categories 
  * of strict, and type-converting. Type-converting operators do the work of converting
  * different types of data to the same type of data, for instance a string and a number, 
  * before they are compared. Strict operators must match exactly, down to the data type.
  * There are also in this group some Relational operators that also resolve to boolean values 
  * based on their determination of the operands.
  */
  
  //EXAMPLES//
  
  "1" == 1; // resolves to true, because the Equality operator does a type conversion
  "1" === 1; // resolves to false, because the Identity operator takes into consideration
  //the data types of the operands before rendering a verdict
  "1" != 2; //resolves to true, because the Inequality operator decides if two values ARE NOT 
  //equal, regardless of data type.
  "1" !== 1; //resolves to true, because the Non-identity operator determines if two values 
  //ARE NOT equal, including data type
  1 > 2; // greater/less than. This case resolves to false, because 1 is not greater than 2.
  1 >= 1; //greater/less than or equal to. This caseresolves to true, because 1 IS greater than or equal 2.
  
  /**
   * 3. Logical operators
   * Typically these are used to evaluate conditional statements more succinctly. 
   * They add other conditions for the computer to consider before rendering a verdict.
   */
   
   2 > 1 && 1 < 5; //this example using the Logical AND operator will resolve to true
   //because both of the conditions are true 
   4 != 2 || 2 > 3; //this example of the Logical OR operator will also resolve to true
   //because even though 2 is not greater than three, 4 is NOT equal to 2. The Logical OR 
   //demands that only one of the conditions be true to render a verdict of true concerning
   //the whole statement. 
   
   /**
    * 4. Other Unary Operators 
    * As said above, these operators only need one operand stated after them to render a value 
    * they do not necessarily resolve to true or false, but they can depending on context. There
    * are many unary operators, but a couple more will be exemplified below
    */
    
    //EXAMPLES//
    
    var obj = {};
    
    typeof obj; //the Typeof operater will retrn "object" because it evaluates the type of its operand
    
    !(2 == 3); // the Negation operator takes the value of its operand and reverses it. 
    //this case would resolve to true because 2 is NOT equal to 3, and the value of NOT false 
    //is true!
    
    /**
     * 4. Ternary Operators 
     * This is the only type of JS operator that needs three operands. Basically it asked
     * if an initial operand is true or false, and then carries two additional operands 
     * for if the value is true, or if it is false. 
     */
    
    //EXAMPLES//
    
     function entrance(cool){
         return (cool ? "Come on in!" : "Get lost, punk!");
     }
     
    //The above function takes in an argument and inserts the argument into a ternary 
    //operator. It determines whether the argument "cool" resolves to true or false. 
    //If it resolves to true, then the first message will be returned, if false, the second.
