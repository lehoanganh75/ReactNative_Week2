"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const simulateTask_1 = require("../bai5/simulateTask");
async function batchProcess() {
    const tasks = Array.from({ length: 5 }, (_, i) => (0, simulateTask_1.simulateTask)((i + 1) * 1000));
    const results = await Promise.all(tasks);
    console.log(results);
}
batchProcess();
