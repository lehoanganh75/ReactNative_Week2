export async function fetchUser(id:number) {
    await new Promise(resolve => {setTimeout(resolve, 1000)});
    return {id, name: `User${id}`};
}

fetchUser(1).then(console.log);