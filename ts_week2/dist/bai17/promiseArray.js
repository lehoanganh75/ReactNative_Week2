"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const numberMul3_1 = require("../bai14/numberMul3");
async function forAwaitPromise() {
    const promise = [
        (0, numberMul3_1.numberMul3)(2),
        (0, numberMul3_1.numberMul3)(3),
        (0, numberMul3_1.numberMul3)(4),
    ];
    for await (const result of promise) {
        console.log("Result: " + result);
    }
}
