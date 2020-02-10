/** 
 * Loops
 * 
 * Javascript includes different ways to complete a set of directions multiple times. 
 * These ways are specific to different data types, but they all do the same thing essentially:
 * do this set of directions until some condition is met. Each type of Loop has its own form
 * that will be described and enacted below. 
 */
 
 /**
  * 0. For Loops
  * 
  * This type of loop is most useful when we know how many times we would like our 
  * loop to run. Because of that quality, they work best and are used most often 
  * on Arrays, since Arrays are 0 indexed objects. The form of a For loop includes
  * a Start Condition, a Stop Condition, and an increment that tells the loop what 
  * to do when it gets done with each loop. 
  */
  
  //EXAMPLES//
  
  var num = 30; 
  //within my for loop condition, the variable i is set equal to the number 0; my start
  //condition. Then the Stop Condition is set as when the variable i becomes equal to 
  //the variable num which was declared and assigned the value 30. The increment is
  //set to add 1 to i after each loop. 

  for (var i = 0; i <= num; i++){ 
   //after each iteration of the loop, the console will print the ascending value of i. 
      console.log(i);
  }
  
  //now let's go backwards. This time, i is going to be equal to num, and will stop 
  //i gets all the way down to 0.
  
  for (var i = num; i > 0; i--){
      console.log(i);
  }
  
  //We said that these work best with Arrays, right? So, now let's use a for loop
  //to go forwards and backwards over a given Array.
  
  //first, an array to use a for loop on
  var arr = ["one", "two", "three", "four"]
  //now, I'll set my stop condition as less than or equal to the amount of indexes
  //in the array I made
  for (var i = 0; i <= arr.length-1; i++){
      //in this case, the console will print all the entries, one at a time in the array by 
      //accessing them at their index within the array.
      console.log(arr[i])
  }
  
  //Let's now start at the end of the Array, and print them in reverse.
  //I set my start condition as equal to the length of the array, and stop condition
  //as greater than or equal to zero. After each loop, i will de-increment.
  for (var i = arr.length-i; i >= 0; i--){
      console.log(arr[i]);
  }
  
  /**
   * 1. For In Loops
   * 
   * This kind of loop works best on objects, because it takes in as conditions a
   * container, and key in that container. The loop will continue until it has iterated
   * through all the keys it can find in the object in question. 
   */
   
   //EXAMPLES//
   
   //To exemplify this type of loop, we'll first need to make an object to iterate over
   
   var myObj = {
       name: "Clayton",
       age: 27,
       height: "6 feet, 2 inches",
       fromNewOrleans: false
       
   };
   
   //now, let's make a loop that takes in each key of the object, and prints its
   //value to the console.
   for (var key in myObj){
       console.log(myObj[key]);
   }
   //because objects' key/value pairs aren't numbered, it won't be possible to go 
   //backwards over the object, unless the object were placed in a different type 
   //of storage container that does have a numbered index. 
   
   /** 
    * 2. While loops
    * This type of loop basically takes in a boolean condition, and continues to iterate
    * until the condition becomes false. In this way while loops are slightly more 
    * flexible. 
    */
    
    //EXAMPLES//
    //because while loops have only one conditional, let's create a couple variables
    //that we can use our loop to operate on.
    var count = ["one", "two", "three", "four"];
    var number = 1; 
    //now I can set my condition to be that as long as it is true that i is less than 
    //or equal to the length of my array, it should keep iterating.
    while(number <= count.length){
    //until my condition comes back false, the console is going to print the number of
    //iterations.
     console.log(number);
    //importantly, then the variable number is going to be incremented so that the loop
    //will not run forever. 
     number++;
    }