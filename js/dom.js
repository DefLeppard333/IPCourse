'use strict';

const box = document.getElementById('box'),
   buttons = document.getElementsByTagName('button'),
   circle = document.getElementsByClassName('circle'),
   hearts = document.querySelectorAll('.heart'),
   oneHeart = document.querySelector('.heart'),
   wrapper = document.querySelector('.wrapper');


console.dir(box);


box.style.background = 'Green';
box.style.cssText = " background-color: yellow; width: 200px; heigth: 200px";


for (let i = 0; i < hearts.length; i++) {
   hearts[i].style.backgroundColor = "green";
}


hearts.forEach(element => {
   element.style.backgroundColor = "green";
});


const div = document.createElement('div');
const div2 = document.createElement('div');

div.classList.add('black');
div2.classList.add('black');


wrapper.append(div);
wrapper.prepend(div2);

hearts[1].before(div);


div.innerHTML = "<h1>Hello</h1>";
// div2.textContent = "hello";

div.insertAdjacentHTML('beforebegin', "<h2>Hello</h2>")




