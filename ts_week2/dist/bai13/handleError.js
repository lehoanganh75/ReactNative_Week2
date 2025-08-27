"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rejectError_1 = require("../bai3/rejectError");
async function handleError() {
    try {
        return (0, rejectError_1.rejectError)();
    }
    catch (e) {
        console.error(e);
    }
}
handleError();
