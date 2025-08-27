export function rejectError(): Promise<string>{
    return new Promise((_, reject) => {
        setTimeout(()=> reject("Something went wrong"), 1000);
    });
}

rejectError().catch(x => console.error(x));