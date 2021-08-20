'use strict';



let numberOfFilms;

function start() {

   numberOfFilms = +prompt('How many films have you watched');

   while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
      numberOfFilms = +prompt('How many films have you watched');
   }
}

start();

let personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false,
};

function rememberMyFilms() {


   for (let i = 0; i < 2; i++) {
      const key = prompt("What a film you've been watched", ''),
         prop = prompt("How you grade this film", '');

      if (key != null && prop != null && key != '' && prop != '' && key.length < 50) {
         personalMovieDB.movies[key] = prop;
         console.log('done');
      } else {
         console.log('error');
         i--;
      }
   }
}

rememberMyFilms();

function detectPersonalLevel() {
   if (personalMovieDB.count < 10) {
      console.log('not enough films you have watched');
   } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log('you are cool');
   } else if (personalMovieDB.count >= 30) {
      console.log(' you love films');
   } else {
      console.log('error');
   }
}

detectPersonalLevel();


function showMyDB(param) {
   if (!param) {
      console.log(personalMovieDB);
   }
}

showMyDB(personalMovieDB.privat);

function writeYouGenres() {
   for (let i = 1; i <= 3; i++) {
      personalMovieDB.genres[i - 1] = prompt(`Your favorite genre of films by number ${i}`, '');
   }
}

writeYouGenres();





