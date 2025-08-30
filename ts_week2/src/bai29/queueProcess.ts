import { simulateTask } from "../bai5/simulateTask";

async function queueProcess() {
  const tasks = [1000,2000,1500];
  for (const t of tasks) {
    const r = await simulateTask(t);
    console.log(r);
  }
}
queueProcess();
