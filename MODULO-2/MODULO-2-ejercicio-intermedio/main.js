'use strict';

const face = document.querySelector('.js_title');
const select = document.querySelector('.js_select');
const updateButton = document.querySelector('.js_update_button');
const backgroundColors = document.querySelector('.container');


function selectFace (){
    face.innerHTML= select.value;

    return face.innerHTML;
}




function bgColor(){
    const randomNumbers = Math.round(Math.random() * 100);
    
    console.log(randomNumbers);
     if(randomNumbers % 2 === 0){
        
        backgroundColors.classList.remove('orange');
        console.log('es par');
    }
    else{
        backgroundColors.classList.add('orange');
        console.log('es impar');
    }


}


function handledButtonUpdate(event){
event.preventDefault();
selectFace();
bgColor();

}

updateButton.addEventListener('click'  , handledButtonUpdate )