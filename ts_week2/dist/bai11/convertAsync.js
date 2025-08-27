"use strict";
async function convertAsync() {
    await new Promise((resolve) => {
        setTimeout(resolve, 1000);
    });
    return "Hello Async";
}
convertAsync().then(console.log);
