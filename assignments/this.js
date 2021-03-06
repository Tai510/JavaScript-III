/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding in a global context this method will refer to the window always.

* 2. Implicit Binding links to objects and methods.

* 3. New Binding creates another object for you.
   
* 4. Explicit Binding are used on functions only
*
* write out a code example of each explanation above
*/

// Principle 1
function helloWorld (name) {
    // "use strict";
    return ` helloWorld : ${this.name} `;
    } 
    console.log(helloWorld("my first code"));
// code example for Window Binding

// Principle 2
const avengers = {
    name: "Iron Man" ,
    age: 38 ,
    networth: "100 billion dollars",
    hobby: function() {
    return `${this.name} like to have fun with his ${this.networth}`;
    }
    }
    console.log(avengers.hobby()); 
// code example for Implicit Binding

// Principle 3
function movie(movieName, movieMake) {
    this.movieName = movieName;
    this.movieMake = movieMake;
    this.boxOffice = function() {
      console.log(`Name: ${this.movieName} made ${this.movieMake}`);
    };
  }
  const blackPanther = new movie("Black Panther", "1 Billion");
  const Avengers = new movie("Infinity War", "2 Billion");
  const deadPool = new movie("DeadPool", "800 Million");

  Avengers.boxOffice();
// code example for New Binding

// Principle 4
const person = {
    "name":"Spider-man"
  }

  function abilities(power1,power2,power3){
    return `Hello, my name is ${this.name} and my abilities are: ${power1},${power2},${power3}`;
  }
  const skills = ["Super Strength","Shooting Web","Spider sense"];
  console.log(abilities.call(person,...skills));
// code example for Explicit Binding