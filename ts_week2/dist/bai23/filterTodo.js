"use strict";
async function filterTodo() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    const filter = data.filter((t) => t.completed);
    console.log(filter);
}
filterTodo();
