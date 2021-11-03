const operations = require("./database-operations");
const database = require("./users/mock-users");

const PAGE_SIZE = 8;
const USERS_GENERATED = 120;

const SORT_BY = {
    name: 'name',
    score: 'score',
}

const DB_USERS = database.generateUsers(USERS_GENERATED);

function getUsers(page, sortBy, name) {
    const filtered = operations.filterByName(DB_USERS, name);
    const sorted = sortBy == SORT_BY.score
        ? operations.sortUsersByScore(filtered)
        : operations.sortUsersByName(filtered);
    const usersPage = operations.getUsersPage(sorted, page, PAGE_SIZE);

    return usersPage;
}

module.exports = {
    SORT_BY,
    getUsers
}