'use strict';


let numberOfFilms = +prompt('How many films have you watched');

let personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false,
};

let key = prompt("last film youэму been watched");

personalMovieDB.movies[key] = prompt("How you grade this film");


console.log(personalMovieDB);

key = prompt("last film youэму been watched");

personalMovieDB.movies[key] = prompt("How you grade this film");

console.log(personalMovieDB);





















// let numberOfFilms = +prompt("How many films have you seen?");


// let personalMovieDB = {
//    count: numberOfFilms,
//    movies: {},
//    actors: {},
//    genres: [],
//    privat: false,
// };
// for (let i = 0; i < 2; i++) {

//    if (personalMovieDB.count < 10) {
//       console.log('not enough films you have watched');
//       break;
//    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//       console.log('you are cool');
//    } else if (personalMovieDB.count >= 30) {
//       console.log(' you love films');
//    } else {
//       console.log('error');
//    }

//    let a = prompt("what a two last films have you watched", ""),
//       b = prompt("what a rating of this film");


//    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//       personalMovieDB.movies[a] = b;
//       console.log('done');
//    } else {
//       console.log('error');
//       i--;
//    }
// }

// console.log(personalMovieDB);





