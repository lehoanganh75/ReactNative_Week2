const randomNumber = new Promise<number>((resolve) => {
    const numberRan = Math.random();
    resolve(numberRan);
})

randomNumber
    .then(x => console.log("Number random: ", x))
    .catch(console.log);

