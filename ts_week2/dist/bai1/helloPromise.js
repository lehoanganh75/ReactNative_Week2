"use strict";
const helloPromise = new Promise((resolve) => {
    setTimeout(() => resolve("Hello Async"), 2000);
});
helloPromise.then(console.log);
