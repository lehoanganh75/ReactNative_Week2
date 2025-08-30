"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const numberMul3_1 = require("../bai14/numberMul3");
async function sequential() {
    const a = await (0, numberMul3_1.numberMul3)(5);
    const b = await (0, numberMul3_1.numberMul3)(a);
    console.log("A: " + a + "B: " + b);
}
sequential();
