async function fetchWithRetry(url: string, retries: number) {
  for (let i=0; i<=retries; i++) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Bad");
      return await res.json();
    } catch (e) {
      if (i === retries) throw e;
      console.log("Loi...");
    }
  }
}
fetchWithRetry("https://jsonplaceholder.typicode.com/todos/1", 3)
  .then(console.log)
  .catch(console.error);
