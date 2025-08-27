import { simulateTask } from "../bai5/simulateTask";

simulateTask(1000)
    .then(x => console.log(x))
    .catch(e => console.error(e))
    .finally(() => console.log("Done"));