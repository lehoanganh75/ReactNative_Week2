import { simulateTask } from "../bai5/simulateTask";

async function batchProcess() {
  const tasks = Array.from({length:5}, (_,i)=>simulateTask((i+1)*1000));
  const results = await Promise.all(tasks);
  console.log(results);
}
batchProcess();
