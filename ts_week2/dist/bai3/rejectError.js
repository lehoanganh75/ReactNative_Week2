"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rejectError = rejectError;
function rejectError() {
    return new Promise((_, reject) => {
        setTimeout(() => reject("Something went wrong"), 1000);
    });
}
rejectError().catch(x => console.error(x));
