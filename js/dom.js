'use strict'


const box = document.getElementById('box');
console.log(box);

const buttons = document.getElementsByTagName('button');

console.log(buttons[1]);

const circle = document.getElementsByClassName('circle');

console.log(circle);

const hearts = document.querySelectorAll('.heart');

hearts.forEach(element => console.log(element));

const oneHeart = document.querySelector('.heart');

console.log(oneHeart);



