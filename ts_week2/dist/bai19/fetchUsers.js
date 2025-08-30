"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fetchUser_1 = require("../bai18/fetchUser");
async function fetchUsers(ids) {
    return await Promise.all(ids.map(fetchUser_1.fetchUser));
}
fetchUsers([1, 2, 3, 4, 5]).then(console.log);
