"use strict";
const randomNumber = new Promise((resolve) => {
    const numberRan = Math.random();
    resolve(numberRan);
});
randomNumber
    .then(x => console.log("Number random: ", x))
    .catch(console.log);
