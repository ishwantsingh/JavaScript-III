/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 
* 2. 
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1
//if any context for this isnt provided, it will be using the window itself as the context
// code example for Window Binding
const okay = {
   'name': 'snowy' 
}
console.log(this.name);

// Principle 2

//if u invocate a function and then use 'this' , then this will properly use that function as the reference or context

// code example for Implicit Binding

const workout = {
    'time': '15 minutes',
    'rohan': function() {
        console.log(`Rohan worked out for ${this.time}.`)
    }
}
workout.rohan();
// Principle 3
//when we use a method to manually control the binding of the 'this' keyword

// code example for Explicit Binding
const read = {
    'time': "30 minutes",
    'whoReads': function(name) {
      console.log(`${name} reads nice books for ${this.time} daily.`)
    }
  }
  read.whoReads('Snowy');

// Principle 4
// When we use a constructor function to provide the context and use the 'new' keyword to provide that data to new objects so then when called they use that particular object as the context

// code example for New Binding
 function SayHello(name1,name2) {
     this.saying = 'Hello';
     this.sayer = name1;
     this.reciever = name2;


     this.saying1 = function() {
        console.log(`${this.sayer} says ${this.saying} to ${this.reciever}.`)
     }
}
const doIt = new SayHello('Snowy','Samar');

doIt.saying1();