'use strict';
//ejercicio 1
    function mult(a,b) {
        return a * b;

    }
    const total = mult(75, 5)
    console.log('total', total);
//ejercicio 2
    function media(a,b,c,d){
        return (a+b+c+d)/4;

    }
    const mediaFunc= media(5,6,20,8);
    console.log (mediaFunc);
//ejercicio 3
    function number (a,b) {
        const sinIva = a;
        const iva = a * b / 100;
        const totalConIva = iva + a;

        const message = ("Precio sin iva " + sinIva) + (" IVA " + iva) + (" Total " + totalConIva) ;
        return  message;
    

    }
    // const superTotal = number(15, 21);
    const contenedor = document.querySelector('.btn');
    contenedor.innerHTML = number (20,10);
    //console.log(superTotal);
    
    //ejercicio 4

    // function paresYNones(a){
    //     const par = a % 2 ;
    //     const tru = par === 0 ;
        
    //     return tru;
        
    // }
    // const result = paresYNones (67);
    // console.log('el número es ' + result);

    //arrow functions en ejercicio 4
    const result = a => {
        const par = a % 2 ;
        const tru = par === 0 ;
        
       return tru;
    };
    
    console.log(result (68));

    //ejercicio 5
    
   function getEl(a){
        const sufixDocument = document.querySelector(a);
        return sufixDocument;


    } 

   const btnEl = getEl('.user');
console.log(btnEl);

    // // modificamos una variable de ámbito global


//ejercicio 8
// let secretLetter = 'y';
// function mySecretLetter() {
//   secretLetter = 'x';
//   return secretLetter;
// }

// console.log(mySecretLetter()); 
// console.log(secretLetter); 

//ejercicio 9
const secretLetter = y => `la letra secreta es  ${y} `;
console.log(secretLetter('h'));

//ejercicio 10



function box (borderBox, width, padding, borderSize )
{
    if (borderBox) {
        console.log (`El ancho de la caja es ${width} y el ancho total es ${width}`);

    } else {
        const result = width + padding * 2 + borderSize * 2;
        console.log (`el ancho es ${width} y el ancho total es ${result}`);
    }
    
  
}  
console.log(box(true, 200, 20, 3));

