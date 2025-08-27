import { simulateTask } from "../bai5/simulateTask";

Promise.all([
    simulateTask(1000),
    simulateTask(2000),
    simulateTask(3000),
]).then(console.log);
