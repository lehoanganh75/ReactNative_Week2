"use strict";
function rejectError() {
    return new Promise((_, reject) => {
        setTimeout(() => reject("Something went wrong"), 1000);
    });
}
rejectError().catch(x => console.log(x));
