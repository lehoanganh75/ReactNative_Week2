"use strict";
const numbers = [1, 2, 3, 4, 5, 6];
new Promise(resolve => {
    setTimeout(() => resolve(numbers.filter(x => x % 2 == 0)), 2000);
}).then(console.log);
