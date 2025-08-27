"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const simulateTask_1 = require("../bai5/simulateTask");
Promise.all([
    (0, simulateTask_1.simulateTask)(1000),
    (0, simulateTask_1.simulateTask)(2000),
    (0, simulateTask_1.simulateTask)(3000),
]).then(console.log);
