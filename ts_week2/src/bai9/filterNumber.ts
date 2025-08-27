const numbers = [1, 2, 3, 4, 5, 6];

new Promise<number[]>(resolve => {
    setTimeout(()=> resolve(numbers.filter(x => x % 2 == 0)), 1000);
}).then(console.log);

