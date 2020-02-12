/** 
 * Control Flow
 * 
 * Javascript has some special commands that help direct the flow of code within 
 * blocks. These statements are tremendously helpful for helping the computer, which 
 * is very stupid, understand how it should proceed under certain or other conditions.
 * Below are examples of the most common commands used to control the flow of code.
 */
 
 /**
  * 0. If Statements
  * 
  *this is the most basic type of conditional, and lets the computer know what to do 
  * if it finds a condition is true. 
  */
  
  //EXAMPLES//
  
  var condition = 2 < 3;
  
  if (condition){
      console.log("thumbs up!") ;
  } 
  //right now, the if statement WILL return "thumbs up!" because my condition resolves
  // true. If my condition resolved to false, it wouldn't do anything, because I haven't
  //specified anything for the computer to do in that event.
  
  /**
   * 1. Else Statements
   * These statements specify what the computer should do if the condition comes up false 
   * they need to be tacked onto the end of an If statement if they're going to work. Else 
   * statements do not need a condition, as they are a kind of contigency for the computer to 
   * spit out if it reaches that else statement.
   */
   
   //EXAMPES//
   
   if (condition) {
       console.log("thumbs up!");
   } else {
        console.log("thumbs down!");
   }
   //since this statement has an else statement, the computer will always be able to do something
   //as long as condition exists, and can be evaluated as true or false. 
   //in the event that my condition comes up false, it's going to return "thumbs down!"
   
   /**
    * 2. Else-if Statements
    * 
    * To add even more possibilities to our If statements, we can add Else-if statements
    * that give the computer more options if other conditions are true. An If statement 
    * may contain an unlimited amount of Else-if statements.
    */
    
    //EXAMPLES//
    
    var newCond = false;
    
    if (newCond) {
       console.log("thumbs up!");
   } else if (newCond || condition){
       console.log("thumbs in the middle");
   } else {
       console.log("thumbs down!");
   }
   
   /**
    * In the above sequence, the computer is going to see that newCond is false, so 
    * it will continue on down to the next Else-if statement. When it sees that if
    * newCond OR condition (which, from above we know resolves to true) resolvs to true, 
    * it's going to stop there and run the code block after that conditional. The computer
    * won't ever get to that final else statement, because it will hop out of the conditional, 
    * and into that corresponding code blockk as soon as it finds an Else-if that resolves to 
    * true. 
    */
    
    /**
     * 3. Switch statements
     * 
     * This is a rarer type of control flow statement that uses very specific criteria
     * to determine what it should do. It takes in a "case" and tests if it adheres
     * to a some very specific criteria. If it doesn't adhere it moves on down the line
     * until it reaches the default statement. The default is the catch all, like the Else
     * statement above. 
     * 
     * Switch statements are best if you have an extremely specific, like to the string, 
     * case that you want to test, and also you have some very specific choices you want 
     * to test against. Because they don't resolve to a simple true or false, you had better
     * know exactly what you want to test. Otherwise, an if statement will be easier.
     */
     
     //EXAMPLES//
     
     var carColor = "magenta";
     
     switch (carColor) {
        case "red" :
            console.log("The car is red!");
             break;
        case "black":
            console.log("The car is black!");
            break;
        case "pink":
        case "fuscia":
            console.log("The car is Pink!");
        default :
            console.log("That car isn't a color I know!");
        
     }
    /**
     * the above Switch statement looks at the variabe carColor, to see what it contains.
     * It then lists what the computer should do in the event that carColor represents
     * the same string as the case statement. Notice how switch statements are also able to 
     * print the same outcome for multiple cases, in case "pink" and case "fuscia". However, 
     * it's close but no cigar in this case since the switch statement did not have a case for 
     * the exact string represented by carColor. Because of this, the computer would run through 
     * the options and then go with the default, printing "That car isn't a color I know!" to
     * the console.
     */
     
     
      