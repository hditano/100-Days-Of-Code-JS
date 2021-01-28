//**** Functions *****/


// printHeart() {
//   console.log("<3");
// }

// printHeart()

// function rant(message) {
//   console.log(message.toUpperCase());
// }

// rant('i hate bees')

// function isSnakeEyes(dice1, dice2) {
//   if (dice1 === 1 && dice2 === 1) {
//       console.log('Snake Eyes!')
//   } else {
//       console.log('Not Snake Eyes!')
//   }
// }

// isSnakeEyes(1,1)

// function multiply (num1, num2) {
//   let multi = num1 * num2
//   return multi;
// }

// multiply(2,3);

// function isShortsWeather(temperature) {
//   if (temperature >= 75) {
//     return true;
//   } else {
//     return false;
//   }
// }

// isShortsWeather(80)

// function lastElement(myArray) {
//   if (myArray.length === 0) {
//     return null;
//   } else {
//     return myArray[myArray.length -1]
//   }
// }

// lastElement([3,4,5])

// function capitalize(myString) {
//   let newString = myString[0].toUpperCase();
//   myString = myString.slice(1);
//   return newString + myString;
  
// }

// function sumArray(numArray) {
//   let total = 0;
//   for(let i = 0; i < numArray.length; i++) {
//     total += numArray[i];
//   }
//   return total;
// }

// function returnDay(number) {
//   if (number < 1 || number > 7) {
//     return null;
//   } else {
//     daysArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
//     return daysArray[number - 1]
//   }
// }

// function returnDay(number) {
//   if (number < 1 || number > 7) {
//     return null;
//   } else {
//     const myDaysObject = {
//       1 : 'Monday',
//       2 : 'Tuesday',
//       3 : 'Wednesday',
//       4 : 'Thursday', 
//       5 : 'Friday', 
//       6 : 'Saturday', 
//       7 : 'Sunday',
//     }
//     return myDaysObject[number];
//   }
// }

/** Function Expressions  */

// const pi = function (num) {
//   console.log(`PI es ${num}`)
// }

// pi(123);

// const square = function (num) {
//   return num * num
// }

// square(5);

// const myObject = {
//   PI: 3.14,
//   sum: function (a, b) {
//     return a + b;
//   }
// }

// const myObject = {
//   PI: 3.14,
//   sum(a, b) {
//     return a + b;
//   }
// }

// console.log(myObject.sum(2,3))

// const square = {
//   area(a) {
//     return a*a;
//   },
//   perimeter(b) {
//     return b * 4;
//   },
// }

// console.log(square.perimeter(2))

/** Exercise 217 */

// const hen = {
//   name : 'Helen',
//   eggCount : 0,
//   layAnEgg () {
//     this.eggCount++;
//     return 'EGG';
//   },
// }

// const peliculas = [
//   {
//   Title: 'Batman',
//   Score: 50,
//   MamaCora: 100,
// },
//  {
//    Title: 'Superman',
//    Score: 40,
//  },
// ]

// for (let i of peliculas) {
//   console.log(`La Pelicula se llama ${i.Title} y su Score es ${i.Score}`)
// }

/* MAP */

// const titulos = peliculas.map(function (t) {
//   return t.Title;
// })

// for (let element of titulos) {
//   console.log(element)
// }

/* Exercise 47 - Map*/


// cleanNames = [" Hernan ", " Sebastian", " Zoe ", " Gimena "];

// const newClean = cleanNames.map (function (t) {
//   return t.trim();
// })

// for (let i of newClean) {
//   console.log(i)
// }


/* Arrow Functions */

// const newClean = cleanNames.map(t => {
//   return t.trim();
// })

// for (let i of newClean) {
//   console.log(i);
// }


/* Exercise 48 */

// const greet = name => {
//   return `Hey ${name}!`;
// }

/* Arrow Functions Peliculas array */

// const newMovies = peliculas.map(t => {
//   return console.log(`La Pelicula es ${t.Title}`);
// })

/* SetTimeOut */

// const esperar = (t) => { setTimeout(() => {
//   console.log(`Espere un total de ${t} milisegundos`)
// }, t)}

// esperar(3000)


/* Filter */

// const score70 = peliculas.filter(n => {
//   return n.Score >= 70;
// })

/* Exercise 49 */

// const asde = [{
//   Pelicula: 'Batman',
//   Score: 70,
//   Director: 'DiTano',
// },
// {
//   Pelicula: 'La Carroza',
//   Score: 56,
//   Director: 'Rios',
// },
// {
//   Pelicula: 'Mama mia', 
//   Score: 98,
//   Director: 'Fernandez',
// },]

// function validUserNames(x) {
//   return x.filter (n => n.length < 4)
// }

// validUserNames(userNames)

// function ScoreMovies(x){
//   return x.filter (n => n.Score < 99)
// }

// ScoreMovies(asd)

/* Every and Some */

// asde.some(x => x.Score >= 30)

/* Exercise 50 */

// const allEvens = x => {
//   let newArray = x.every(num => num % 2 === 0);
//   return newArray;
// }

/* Reduce */
// const asde = [{
//   Pelicula: 'Batman',
//   Score: 70,
//   Director: 'DiTano',
// },
// {d
//   Pelicula: 'La Carroza',
//   Score: 56,
//   Director: 'Rios',
// },
// {
//   Pelicula: 'Mama mia', 
//   Score: 98,
//   Director: 'Fernandez',
// },]

// const newScore = asde.reduce((min, currentValue) => {
//   if (min.Score < currentValue.Score) {
//     return console.log(currentValue);
//   } else {
//     return min;
//   }
// })

/* Spread with Objects */

// const user = {
//   userName : 'hditano',
//   password : 123,
//   firstName : 'Hernan',
//   lastName : 'Di Tano',
//   City : 'Buenos Aires'
// }

// const newUser = {...user, secretID: 3030, country: 'Argentina'}

// console.log(newUser);

/* Rest Params */
/* La cantidad de parametros que le pasamos a una funcion, los convierte en un array y en este caso hace la suma total, para luego
   ponerlo en otro array.
   Basicamente estamos agarrando todos los argumentos en un solo parametro (...nums) */

// function sum (...nums) {
//   return nums.reduce((total, currentValue) => total + currentValue)
// }

// const newSum = sum(2,3,4);

// console.log(newSum);

/* Destructuring Arrays/Objects/Params*/
/* Tomar los elementos de un array por ejemplo, para posterior asignarlos a una nueva variable, sin modificar el array original */

// const nombres = ['Hernan', 'Sebastian', 'Zoe', 'Gimena', 'Run']

// const [Primero, Segundo, Tercero, Cuarto, ...losQueQuedan] = nombres;

// console.log(Primero);

const newObject = {
  firstName : 'Hernan',
  lastName : 'Di Tano',
  Born : 1983,
  City : 'Buenos Aires',
  Country : 'Argentina',
}

const { firstName, lastName, City, Country } = newObject;
console.log(City);