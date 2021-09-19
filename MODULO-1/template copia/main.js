'use strict';

// avatar por defecto
const DEFAULT_AVATAR = 'http://placehold.it/300x300';
// avatar que eligió el usuario al registrarse
let userAvatar = '';
const avatar = document.querySelector('.js_avatar');

const mainAvatar = userAvatar || DEFAULT_AVATAR ;

avatar.setAttribute("src", mainAvatar);

let nombre = 'Lucía';

if(nombre === 'María' || nombre ==='Lucía'){
    console.log(`bienvenida ${nombre}`);
} else {
    console.log('Lo siento pero el usuario que has introducido no está registrado');
};

let numero= 32

if (numero===0) {
    console.log('El número es 0')
  } else if (numero=== - 1) {
    console.log('El número es negativo')
  } else if ((numero + 2) > 13 && (numero + 2) <= 20 ) {
    console.log('El número más 2 es mayor que 13 pero menor o igual que 20')
  } else if (20< numero < 50) {
    console.log('El número es mayor que 20 pero menor que 50')
  } else {
    console.log('el número no es 123123125')
  }


  
