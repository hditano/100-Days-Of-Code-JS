// const dia = "Lunes"

// let usuario = prompt("Que dia es?")

// if (dia === usuario) {
//   console.log(`el dia es ${dia}`)
// } else {
//   console.log("El dia es otro")
// }

// const edad = 66;

// if (edad > 5 && edad < 65) {
//   console.log("La edad es mayor a 5 y menor que 65")
// } else {
//   console.log("la edad es menor a 5 o mayor a 65")
// }

// let myArray = ['Hernan', 'Sebastian', 'Gimena']

// myArray.push('Zoe');

// console.log(myArray)

// myArray.pop();

// console.log(myArray)

// myArray.shift();
// console.log(myArray);

// myArray.unshift('Run');

// console.log(myArray);


// let myArray2 = myArray.slice(1);
// console.log(myArray2);

// for (let i = 25; i >= 0; i -= 5) {
//   console.log(i)
// }

// let myArray = ['Hernan', 'Sebatian', 'Zoe', 'Gimena', 'Run']

// for (let i = 0; i < myArray.length; i++) {
//   console.log(myArray[i])
// }

// const people = [
//   ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"],
//   ['Hernan', 'Sebastian', 'Gimena', 'Zoe'],
//   ['Run', 'Romina', 'Alen'],
//   ]; //DONT TOUCH THIS LINE!

// // WRITE YOUR LOOP BELOW THIS LINE:

// for (let i = 0; i < people.length; i++) {
//     console.log(people[i].toUpperCase)
// }

// for (let i = 1; i < people.length; i++) {
//   console.log(`outter loop is ${people[i]}`)
//   for (let j = 1; j < people.length; j++) {
//     console.log(`inner loop is ${j}`)
//   }
// }

// for (let i = 0; i < people.length; i++) {
//   console.log(people[i])
//   let row = people[i]
//   for (let j = 0; j < row.length; j++) {
//     console.log(row[j]);
//   }
// }

// const numbers = [1,2,3,4,5,6,7,8,9]; //DON'T CHANGE THIS LINE PLEASE!

// WRITE YOUR LOOP BELOW THIS LINE:

// for (let number of numbers) {
//     console.log(number * number)
// }

// console.log("Welcome to the TODO List App")

// let myArray = [];
// let userInput;

// while (userInput !== 'q') {
//   userInput = prompt("What would you like to do?")
//   if (userInput === 'add') {
//     let myAdd = prompt('What you want to add to the TODO List')
//     myArray.push(myAdd);
//     console.log("Adding a TODO ")
//   } else if (userInput == 'list') {
//     for (let i = 0; i < myArray.length; i++) {
//       console.log(`Index ${i} Value: ${myArray[i]}`)  
//     }
//   } else if (userInput == 'remove') {
//     let myRemove = prompt("What line would you like to remove")
//     myArray.splice(myRemove,1);
//     console.log("removing list")
//   }
// }
