const operations = require("./database-operations");
const database = require("./users/mock-users");

const PAGE_SIZE = 8;
const USERS_GENERATED = 120;

const SORT_BY = {
    name: 'name',
    score: 'score',
}

function getUsers(page, sortBy, name) {
    const users = database.generateUsers(USERS_GENERATED);
    const filtered = operations.filterByName(users, name);
    const filteredPage = operations.getUsersPage(filtered, 0, PAGE_SIZE);
    const sorted = sortBy == SORT_BY.score
        ? operations.sortUsersByScore(filteredPage)
        : operations.sortUsersByName(filteredPage);

    return sorted;
}

module.exports = {
    SORT_BY,
    getUsers
}