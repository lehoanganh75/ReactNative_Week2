"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const simulateTask_1 = require("../bai5/simulateTask");
async function simulateTaskAsync() {
    console.log(await (0, simulateTask_1.simulateTask)(2000));
}
simulateTaskAsync();
