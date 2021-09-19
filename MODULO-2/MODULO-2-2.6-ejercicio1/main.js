'use strict';

//ejercicio 1 y 3
 const adalaber1 = {
     name:'Susana ',
     edad:'34 años ',
     profesion: 'periodista',
     showBio: function (){
         return this.name + this.edad + this.profesion;

     }
 };
console.log(adalaber1.showBio());

 const adalaber2 =  {
    name:'Rocio',
    edad:'25 años',
    profesion: 'actriz',

 }
console.log(adalaber2.name, adalaber2.edad, adalaber2.profesion);

//ejercicio 2
const adalaber = {};

adalaber.run = phrase => `Estoy corriendo`;
adalaber.runAMarathon = distance => `${distance} kms`;

console.log(adalaber.runAMarathon( 7 ))

// ejercicio 5

const input ={};
    input.text = document.querySelector('.js_text');
console.dir(input);

//ejercicio 6

const cestaPeras ={
    minPeras:1,
    maxPeras:5,
    actualPeras:3,
    inicialPeras:2,
    addPera: function (a){
        const total= a + this.actualPeras;
        return total;
    },
    restPera: function (a){
        const total= this.actualPeras - a;
        return total;
    },
    iniPera: function () {
       this.actualPeras = this.inicialPeras;
       return this.actualPeras;
    }

};
cestaPeras.actualPeras=4;

    console.log(cestaPeras);
    console.log(cestaPeras.addPera(1));
    console.log(cestaPeras.restPera(1));
    console.log(cestaPeras.iniPera());


//EJERCICIO 7
const job = 'developer'
const userInfo={
   firstName: 'Carmencita',
   lastName: 'Menganita',
   age: 8,
   job: `${job}`, 

};
console.dir(userInfo); 
