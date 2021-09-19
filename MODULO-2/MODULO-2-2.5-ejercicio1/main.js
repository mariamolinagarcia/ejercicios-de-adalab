'use strict';



/* // elemento de HTML
const button = document.querySelector('.alert');

// handler
function showAlert() {
  console.log('Alerta');
}

// listener sobre el elemento, con tipo de evento y handler
button.addEventListener('click', showAlert); */

//ejercicio 1
const text = document.querySelector('.js_text');
const button = document.querySelector('.js_button');

function showText(){
    text.innerHTML= 'Mi primer click, ¡ole yo y la mujer que me parió!';
}

button.addEventListener('click', showText)

// ejercicio 2
const button1 = document.querySelector('.js_button_1');
const inputName = document.querySelector('.js_name')




function message (){
    console.log (`'Hola ' ${inputName.value}`)
}

button1.addEventListener('click', message);

//ejercicio 3

const parrafo = document.querySelector('.js_parrafo');
const paragraph2 = document.querySelector('.js_parrafo2');

function newParrafo (){
  console.log ('estoy en newparrafo');
  const addedParagraph = `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem doloribus reprehenderit blanditiis, vero voluptate harum vel voluptatibus sed ullam aperiam officia consequatur perspiciatis expedita praesentium, tenetur voluptates laboriosam eaque odit?</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem doloribus reprehenderit blanditiis, vero voluptate harum vel voluptatibus sed ullam aperiam officia consequatur perspiciatis expedita praesentium, tenetur voluptates laboriosam eaque odit?</p>`;
    paragraph2.innerHTML +=  addedParagraph;
 

};

parrafo.addEventListener('mouseover',  newParrafo);







