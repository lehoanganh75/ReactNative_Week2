import { numberMul3 } from "../bai14/numberMul3";

async function parallel() {
    const results = await Promise.all([
        await numberMul3(2),
        await numberMul3(3),
        await numberMul3(4),
    ]);

    console.log("Para: " + results);
}

parallel();