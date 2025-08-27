function callNumber10(): Promise<number>{
    return new Promise((resolve) => {
        setTimeout(()=> resolve(10), 1000);
    })
}

callNumber10().then(console.log);