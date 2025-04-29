/*const fruits = new Map([
    ["apples", 500],
    ["oranges", 500],
    ["banana", 500]
]);

console.log(fruits);
console.log(fruits.size);

let text = ""; // Initialize the text variable
fruits.forEach(function(value, key) {
    text += key + '=' + value + ', '; // Use 'text' instead of 'test' and add a separator
});

// Optionally, remove the trailing comma and space
text = text.slice(0, -2); // Remove the last comma and space

console.log(text); // Log the final result
//map.entries()*/
/*let text = ""; // Initialize the text variable
for (const [key, value] of fruits.entries()) { // Destructure key and value from the entry
    text += key + '=' + value + ', '; // Concatenate key-value pairs with a separator
}

// Optionally, remove the trailing comma and space
text = text.slice(0, -2); // Remove the last comma and space

console.log(text); // Log the final result*/
// let total =0;
// for (const x of fruits.values()){
//     total+=x;

// }
// console.log(total);
// const apples= {name :'apples'}
// const bananas={name:'bananas'}
// const oranges={name: 'oranges'}

// destructuring 
// const person ={
//     firstName:"john",
//     lastname:"doe",
//     age:50
// };
// let{firstName,lastname}=person;
// console.log(firstName);
// console.log(lastname);
// alias creation

//const person = {
  //  firstName: "john",
    //lastname: "doe",
    //age: 50
//};

// Destructure lastname and rename it to name
//let { lastname: name, firstName } = person; // Also destructure firstName

//console.log(firstName); // Log firstName
//console.log(name); // Log the renamed lastname
// let name ="gurukuls the schpool";
// let [a1,a2,a3,a4,a5]=name;
// console.log(a1)
// console.log(a2)
// console.log(a3)
// console.log(a4)
// console.log(a5)
// const fruits =["banana", "oranges","apples", "mangoes"];
// let [fruit1,,, fruit2]=fruits;
// console.log(fruit1)
// console.log(fruit2)
// const fruits =["banana", "oranges","apples", "mangoes"];
// let {[0]:fruit1,[1]:fruit2}=fruits;
// console.log(fruits)
// const numbers =  [10,20,30,40,50,60,70];
// const [ a,b,...rest]= numbers
// console.log(numbers)
// constfruits = new Map([
//     ["apples", 500],
//     ["bananas", 500],
//     ["oranges", 500],
// ])
// let firstName="john";
// let lastName="doe";
// [firstName,lastName]=[lastName,firstName];
// console.log(firstName);
// console.log(lastName);
// let x=5;
// let z=Math.pow(x,2);
// console.log(z)
// let x= 5;
// x**=2;
// console.log(x)
//First declaration of the fruits array
// const fruits = ["banana", "apple", "mangoes"];
// console.log(fruits.includes("mangoes")); // Check if "mangoes" is included
// console.log(fruits); // Output the fruits array

// // Modify the existing array or use a different variable name
// const moreFruits = ["banana", "oranges", "apple", "mangoes"];
// console.log(moreFruits.includes("banana", 3)); // Check if "banana" is included starting from index 3
// console.log(moreFruits); // Output the moreFruits array
// const arr =[
//     "one",
//     "two",
//     "three",,

// ];
// console.log(arr.length)
// const sparseArray=[1,,,4,5,,];
// const arr =[,];
// const person={
//     firstName:"john",
//     ,
//     age :30,
// }

