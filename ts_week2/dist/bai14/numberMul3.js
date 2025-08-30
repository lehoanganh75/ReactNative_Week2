"use strict";
async function numberMul3(num) {
    await new Promise(resolve => {
        setTimeout(resolve, 1000);
    });
    return num * 3;
}
numberMul3(10).then(console.log);
