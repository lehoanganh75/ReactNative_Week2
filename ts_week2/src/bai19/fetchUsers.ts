import { fetchUser } from "../bai18/fetchUser";

async function fetchUsers(ids:number[]) {
    return await Promise.all(
        ids.map(fetchUser)
    );
}

fetchUsers([1, 2, 3, 4, 5]).then(console.log);