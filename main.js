'use strict';
let numberOfFilms = +prompt("How many films have you seen?");
let personalMoiveDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false,
};

const a = prompt("One of the last film have you watched", ""),
   b = prompt("what a rating of this film");
personalMoiveDB.movies[a] = b;

console.log(personalMoiveDB);





