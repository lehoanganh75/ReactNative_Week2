import { numberMul3 } from "../bai14/numberMul3";

async function forAwaitPromise() {
    const promise = [
        numberMul3(2),
        numberMul3(3),
        numberMul3(4),
    ];

    for await (const result of promise){
        console.log("Result: " + result);
    }
}