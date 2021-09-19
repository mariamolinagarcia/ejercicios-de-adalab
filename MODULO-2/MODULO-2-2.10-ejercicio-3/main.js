'use strict';

const input = document.querySelector('.js-input');
const button = document.querySelector('.js-button');
const info = document.querySelector('.js-info');



function handledData(){
const username = input.value;    
fetch (`https://api.github.com/users/${username}`)

.then(response => response.json())
.then(data => info.innerHTML = `<li>${data.name}</li><li>${data.public_repos}</li><li><img src="${data.avatar_url}" alt="Avatar"</li>`

);

}console.log(fetch());
button.addEventListener ('click' , handledData());


    

