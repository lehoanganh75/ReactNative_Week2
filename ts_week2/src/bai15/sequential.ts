import { numberMul3 } from "../bai14/numberMul3";

async function sequential() {
    const a = await numberMul3(5);
    const b = await numberMul3(a);
    console.log("A: " + a + "B: " + b);
}

sequential();