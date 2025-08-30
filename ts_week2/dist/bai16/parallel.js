"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const numberMul3_1 = require("../bai14/numberMul3");
async function parallel() {
    const results = await Promise.all([
        await (0, numberMul3_1.numberMul3)(2),
        await (0, numberMul3_1.numberMul3)(3),
        await (0, numberMul3_1.numberMul3)(4),
    ]);
    console.log("Para: " + results);
}
parallel();
