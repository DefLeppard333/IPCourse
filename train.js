'use strict';

// function first(callback) {
//    setTimeout(function () {
//       console.log('Macarena with time out');
//       callback();
//    }, 500);
// }

// function second() {

//    console.log("Without timeout");

// }





// first(second);



let car = {
   firm: "Renault",
   model: "sandero",
   color: 'white',
   wheels: {
      protector: "country",
      radius: 15,
      height: 175,
      width: 75,
   },
   type: "hachback",
   engine: function () {
      console.log('vruum');
   }
};

for (let key in car) {
   if (typeof (car[key]) == 'object') {
      for (let i in car[key]) {
         console.log(`This key ${key} has option ${car[key][i]}`);
      }
   } else {
      console.log(`This key ${key} has option ${car[key]}`);
   }
}

console.log(Object.keys(car).length);

car.engine();