/*class Person {
   // constructor(firstname, lastname) {
       // this.firstname = firstname;
       // this.lastname = lastname;

        // Create a new instance of Person with both firstname and lastname
       // let p = new Person('Maike', 'Smith'); // Provide both arguments
       // console.log("hi", p.firstname, p.lastname);
 //   }
//}

// Example of creating a Person instance
//let person = new Person('John', 'Doe');*/
// methods -> we dont use the function keywords
/*class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    greet() {
        console.log("hi there", this.firstname);
    }
}

// Create a new instance of Person with both firstname and lastname
let p = new Person('Maike', 'Smith'); // Provide both arguments
p.greet(); // Call the greet method*/
/*class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    greet() {
        console.log("hi there", this.firstname);
    }

    compliment(name, object) {
        return "that is wonderful " + object + ", " + name; // Corrected string concatenation
    }
}

// Create an instance of Person
let p = new Person('Maike', 'Smith');

// Call the compliment method
let compliment = p.compliment("Harry", "hat");
console.log(compliment);*/
/*class person{
    #firstname;
    #lastname;
    constructor(firstname, lastname){
        this.#firstname=firstname;
        this.#lastname=lastname;
        let p= new person("maria a","saga")

    }
}*/
// getter and setter
/* person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };*/
  //let p = new Person ("maria", "saga")
  //console.log(p.firstname);
  
  // inheritance-> rresusability of code;
  /*class vehicle{
    constructor (color , currentSpeed, maxSpeed){
        this.color=color;
        this.currentSpeed=currentSpeed;
        this.maxSpeed=maxSpeed;
    }
    move(){
        console.log('moving at', this.currentSpeed);
    }
    
  accelerate(amount){
    this.currentSpeed+=amount;

  }}

  class Motorcycle extends vehicle{
    constructor(color ,currentSpeed,maxSpeed,fule){
        super(color, currentSpeed,maxSpeed);
        this.fuel=this.fuel;

    }
    doWheelie(){
        console.log("driving on wheel !");

    }
  }
let motor = new Motorcycle("black", 0,250,"gasoline");

console.log(motor.color);
motor.accelerate(50);
motor.move();*/

