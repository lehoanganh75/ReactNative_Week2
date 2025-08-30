"use strict";
async function multiAPI() {
    const urls = [
        "https://jsonplaceholder.typicode.com/todos/1",
        "https://jsonplaceholder.typicode.com/todos/2",
        "https://wrong.url"
    ];
    const results = await Promise.allSettled(urls.map(u => fetch(u)));
    results.forEach((res, i) => console.log(`API ${i + 1}:`, res.status));
}
multiAPI();
