Promise.resolve(2)
.then(
    x => {
    console.log(x); 
    return x * x}
)
.then(
    x => {
    console.log(x); 
    return x * 2}
)
.then(
     x => {
    console.log(x); 
    return x * 5}
)
.then(console.log);