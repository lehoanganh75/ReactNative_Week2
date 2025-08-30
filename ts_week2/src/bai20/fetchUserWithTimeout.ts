async function fetchUserWithTimeout(id: number) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject("Timeout!"), 2000);
    setTimeout(() => {
      clearTimeout(timer);
      resolve({ id, name: `User${id}` });
    }, 1500);
  });
}

fetchUserWithTimeout(1)
  .then(console.log)
  .catch(console.error);
