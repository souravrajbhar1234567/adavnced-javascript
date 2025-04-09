/*function add(a,b){
    return a+b;

}
console.log(add(5,10));*/
/*function sayHello(){
    let you=prompt("your name?");
    console.log("Hello", you+"!");

}
sayHello();*/
/*let varContainingFunction = function(){
     let varInfunction ="i am in a function";
     console.log("hi there ", varInfunction);

};
varContainingFunction();*/
// parametres and argurments
/*function tester(para1 ,para2){
    return para1 +" "+ para2;
}
const arg1 ="argument 1";
const arg2 ="argument 2";
 
console.log(tester(arg1,arg2));
*/
/*function addTwoNumbers(x,y){
    console.log(x+y);

}
addTwoNumbers(10,55);*/
/*function addTwoNumbers(x,y){
    console.log(x+y);

}
addTwoNumbers(10,55);
let a=parseInt(prompt("enter one number "));
let  b =parseInt(prompt("enter second number"));

addTwoNumbers(a,b);*/
/*function addTwoNumbers(x=2, y=3)
{
    console.log(x+y);
}
addTwoNumbers(2)
addTwoNumbers(6,6);
addTwoNumbers(10);
addTwoNumbers(1,2,3,4)*/
//arrow function are great for sending function and shorting notations
//(param1, param2)=> body of the function;
//function doingStuff(x){
  //  console.log(x);
//}
//  doingArroStuff= x=> console.log(x);
//doingArroStuff("sourab");
//let addTwoNumbers = (x,y) => console.log(x+y);
//addTwoNumbers(5,3);
//const arr = ["squireel","alpaca", "buddy"];
//arr.forEach(e=> console.log(e));
// special operator
//let spread =["so","much","fun"];
//let message=["javascript","id",...spread, "and","very"];
//console.log(message);
//function addTwoNumbers(x,y){
 //   console.log(x+y);
//}
//let arr =[5,9];
//addTwoNumbers(...arr);
//function addFourNumbers(x, y,z,a){
  //  console.log(x+y+z+a)
//}
//let arr1= [5,9]
//let arr2= [6,7];
//addFourNumbers(...arr1, ...arr2);
/*function someFunction(param1 ,param2){
    console.log(param1,param2);
    
}
someFunction("hi", "there", "how are you");
function someFunction(param1,...param2){
    console.log(param1 ,param2);

}
someFunction("hi", "there",  "how are you");*/

/*let doingArroStuff=x=>console.log(x);
doingArroStuff("great")
let spread =["sp ", "much", "fun"];
let message =["javascript"," is", "and ", "very", "powerful"];
console.log(spread)
console.log(message)
function addTwoNumbers(x, y){
    console.log(x+y);
}
let arr= [5,9];
addTwoNumbers(...arr);
addTwoNumbers(5,9)*/
//function addFourNumbers(x, y, z, a) {
  //  console.log(x + y + z + a);
//}

//let arr1 = [5, 9];
//let arr2 = [6, 7];

// Corrected the variable name from arr to arr1
//addFourNumbers(...arr1, ...arr2);
//addFourNumbers(5, 9, 6, 7);
/*function someFunction(...params) {
    console.log(...params);
}

someFunction("hi", "there", "how are you");

console.log(someFunction);*/
//function addTwoNumbers(x, y) {
  //  return x + y; // Return the sum of x and y
//}

//let result = addTwoNumbers(4, 5); // Call the function with arguments 4 and 5
//console.log(result); // Log the result
/*function addTwoNumbers(x, y) {
    return x + y; 
}

let resultArr = [];
for (let i = 0; i < 10; i++) {
    let result = addTwoNumbers(i, 2 * i); 
    resultArr.push(result); 
}

console.log(resultArr); */
/// variables scope in functions
//let x; // Declare x in a broader scope

//function testAvailability(value) {
  //  x = value; // Assign the value to x
   // console.log("available here", x);
///}

///testAvailability("hi");
//console.log("not available here", x); // Now this will work

/*function testAvailability() {
    let y = "I will return";
    console.log("available here:", y);
    return y;
}

let z = testAvailability();
console.log("outside the function:", z);*/

/*function doingStuff(){
    if (true){
        var  x= "local";
    }
    console.log(x);
}
doingStuff();*/
/*function doingStuff() {
    let x; // Declare x in the function scope

    if (true) {
        console.log(x); 
        x = "local";    
    }
}

doingStuff();*/
/*let globalVar = "accessible everywhere";
console.log("access to global variables inside the function:", globalVar);

function creatingNewScope(x) {
    console.log("access to global vars inside the function:", globalVar);
}

creatingNewScope("some parameter");
console.log("still available:", globalVar);*/
/*let x= "global";
function  doingStuff(){
    let   x= "local";
    console.log(x);
}
doingStuff();
console.log(x);*/
/*let x = "global";
function doingStuff(x){
    console.log(x);
}
doingStuff("param");*/
/*function confuseReader (){
    x = "Guess my scope";
    console.log("inside the fucntion   :", x);
} 
confuseReader();
console.log("outside of function:",x)*/
// immediately invoked the funcion -IIFE  expression =>design pattern, public variables 
//( function (){
 //   console.log("Iife!");

//})();
//(() =>{
   // console.log("run right away");


//}
//)();
//recursive fucntion  => want to call the same function from inside the function 
/*function getRecursive(nr){
    console.log(nr);
    getRecursive(--nr);

}
getRecursive(3);*/
//function getRecursive(nr) {
    // Base condition to stop recursion
    /*if (nr <= 0) {
        return; // Exit the function when nr is 0 or less
    }
    
    console.log(nr);
    getRecursive(--nr); // Recursive call with decremented nr
}

getRecursive(3);*/
/*function logRecursive(nr){
    console.log("started function " , nr);
    if(nr>0){
        logRecursive(nr-1);

    }
    else {
        console.log("done with recursion");

    }
    console.log("ended function:", nr);

}
logRecursive(3);*/
