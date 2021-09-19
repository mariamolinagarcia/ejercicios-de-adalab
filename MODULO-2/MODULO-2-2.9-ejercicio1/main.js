'use strict';

function getDogImage1() {
    fetch("https://dog.ceo/api/breed/chihuahua/images/random")
      .then(response => response.json())
      .then(data => {
        const img1 = document.querySelector(".js-img-1");
        img1.src = data.message;
        img1.alt = "Un perro";
      });
  }
  const btn = document.querySelector(".js-dog");
  btn.addEventListener("click", getDogImage1);

  function getDogImage2() {
    fetch("https://dog.ceo/api/breed/chihuahua/images/random")
      .then(response => response.json())
      .then(data => {
        const img2 = document.querySelector(".js-img-2");
        img2.src = data.message;
        img2.alt = "Un perro";
      });
  }
  const btn2 =document.querySelector('.js-dog-2');
  btn2.addEventListener('click' , getDogImage2);
