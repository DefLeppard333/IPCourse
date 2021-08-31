'use strict';





let personalMovieDB = {
   count: 0,
   movies: {},
   actors: {},
   genres: [],
   privat: false,
   start: function () {

      personalMovieDB.count = +prompt('How many films have you watched');

      while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
         personalMovieDB.count = +prompt('How many films have you watched');
      }
   },

   rememberMyFilms: function () {
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
   },

   detectPersonalLevel: function () {
      if (personalMovieDB.count < 10) {
         console.log('not enough films you have watched');
      } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
         console.log('you are cool');
      } else if (personalMovieDB.count >= 30) {
         console.log(' you love films');
      } else {
         console.log('error');
      }
   },

   showMyDB: function () {
      if (!this.privat) {
         console.log(personalMovieDB);
      }
   },

   writeYouGenres: function () {
      for (let i = 1; i <= 3; i++) {
         personalMovieDB.genres[i - 1] = prompt(`Your favorite genre of films by number ${i}`, '');
         if (personalMovieDB.genres[i - 1] == null || personalMovieDB.genres[i - 1] == '') {
            alert('You must to write answer');
            i--;
         }

      }
      personalMovieDB.genres.forEach((element, index) => {
         console.log(`favorite genre #${index + 1} - this is ${element}`);
      });
   },

   toggleVisibleMyDB: function () {
      if (this.privat) {
         this.privat = false;
      } else {
         this.privat = true;
      }
   }
};

personalMovieDB.showMyDB();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();
personalMovieDB.writeYouGenres();



