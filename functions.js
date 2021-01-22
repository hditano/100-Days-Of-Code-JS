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

const impuesto = {
  iva (num) {
    console.log(`El total en pesos argentinos es $${(parseFloat((num * 87) *  1.21).toFixed(2))}`);
  } 
}

impuesto.iva(20);