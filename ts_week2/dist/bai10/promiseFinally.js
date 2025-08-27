"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const simulateTask_1 = require("../bai5/simulateTask");
(0, simulateTask_1.simulateTask)(1000)
    .then(x => console.log(x))
    .catch(e => console.error(e))
    .finally(() => console.log("Done"));
