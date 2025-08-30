"use strict";
async function fetchMultiple() {
    const urls = [1, 2, 3].map((id) => `https://jsonplaceholder.typicode.com/todos/${id}`);
    const results = await Promise.all(urls.map((u) => fetch(u).then((r) => r.json())));
    console.log(results);
}
fetchMultiple();
