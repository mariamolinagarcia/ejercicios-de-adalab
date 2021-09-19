'use strict';

const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];
const longNames = names.filter(name => name.length > 5);

console.log(longNames);


//EJERCICIO 6 
const users = [
    { name: 'María', isPremium: false, pin: 2389 },
    { name: 'Lucía', isPremium: true, pin: 2384 },
    { name: 'Susana', isPremium: true, pin: 2837 },
    { name: 'Rocío', isPremium: false, pin: 5232 },
    { name: 'Inmaculada', isPremium: false, pin: 8998 }
  ];

  const usersTrue = users.filter(premium => 
premium.isPremium === true && premium.pin%2 === 0);
console.log(usersTrue);




const names1 = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];
const longName = names1.find(name => name.length > 5);

console.log(longName);

//EJERCICIO 10


const users2 = [
    { name: 'María', isPremium: false, pin: 2389 },
    { name: 'Lucía', isPremium: true, pin: 2384 },
    { name: 'Susana', isPremium: true, pin: 2837 },
    { name: 'Rocío', isPremium: false, pin: 5232 },
    { name: 'Inmaculada', isPremium: false, pin: 8998 }
  ];

  const findUserX = users2.find(user => user.pin === 5232);

  console.log(findUserX);

  

  const findUserPosition = users2.findIndex(user => user.pin === 5232);
console.log(findUserPosition);

users2.splice(3,1);

console.log(users2);