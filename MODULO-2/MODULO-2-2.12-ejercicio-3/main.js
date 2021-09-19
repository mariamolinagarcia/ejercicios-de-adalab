'use strict';

const infoArray = [
    {
    name:'Cris',
    lastname:'Fernández',
    phone:'555-589',
},
{
    name:'María',
    lastname:'Molina',
    phone:'555-8954',
},
{
    name: 'usuaria',
    lastname:'apellido',
    phone:'555-82365',
},
];
const form = document.querySelector('.js_form');
const select = document.querySelector('.js_input_name');


function getOptionsValue (){

    for (const eachInfoArray of infoArray) {

    const formOption = document.createElement ('option');

    const formOptionText = document.createTextNode(eachInfoArray.name);

    formOption.appendChild(formOptionText);

    select.appendChild(formOption);
    
}
return select;
}
//const OptionsValue = getOptionsValue();

function getValue (ev){

    console.log(ev.target);
    console.log(ev.currentTarget);

    }

    //OptionsValue.addEventListener ('change' , getValue)




    

