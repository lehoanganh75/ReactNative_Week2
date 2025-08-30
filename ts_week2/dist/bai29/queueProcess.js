"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const simulateTask_1 = require("../bai5/simulateTask");
async function queueProcess() {
    const tasks = [1000, 2000, 1500];
    for (const t of tasks) {
        const r = await (0, simulateTask_1.simulateTask)(t);
        console.log(r);
    }
}
queueProcess();
