import { simulateTask } from "../bai5/simulateTask";

async function simulateTaskAsync() {
    console.log(await simulateTask(2000));
}

simulateTaskAsync();