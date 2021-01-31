/* getElementByID */

// const image = document.getElementById('unicorn');
// const heading = document.getElementById('mainheading');

/* getElementByTagName */

// const allImages = document.getElementsByTagName('img')

// for (let images of allImages) {
//   console.log(images.src);
// }

/* querySelector Exercise 52 */

// const doneTodos = document.querySelectorAll('.done');
// const checkbox = document.querySelector('#scales');

/* InnerText/textContent/innerHTML */

// const newText = document.querySelector('span').textContent = 'Disgusting';

/* Attributes Exercise 54 */

// const newImage = document.querySelector('#egg');
// newImage.setAttribute('src', 'https://www.flaticon.com/svg/static/icons/svg/3523/3523063.svg');
// newImage.setAttribute('alt', 'chicken');

/* Changing Style Exercise 55 */

// const newStyle = document.querySelector('#container');
// newStyle.style.textAlign = 'center';

// const newImage = document.querySelector('img');
// newImage.style.width = '150px';
// newImage.style.borderRadius = '50%';

/* Changing Syle Exercise 56 */

// const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// const span = document.querySelectorAll('span');

// for (let i = 0; i < span.length; i++) { 
//     span[i].style.color = colors[i];
// }

// const arrayNames = ['Hernan', 'Zoe', 'Run']

// const result = arrayNames.map(item => item.length);

// const final = result.reduce((a,b) => a + b, 0);

// console.log(final)

/* Filter Exercise */

// let users = [
//   {id: 1, name: 'Hernan'},
//   {id: 2, name: 'Admin'},
// ]

// let newUsers = users.filter(item => item.id < 3);

// console.log(newUsers);