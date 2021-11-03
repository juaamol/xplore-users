function sortUsersByName(users = []) {
    return users.sort((userA, userB) => userA.name > userB.name ? 1 : -1);
}

function sortUsersByScore(users = []) {
    return users.sort((userA, userB) => userA.score - userB.score);
}

function getUsersPage(users = [], page, pageSize) {
    return users.slice(page * pageSize, (page + 1) * pageSize);
}

function filterByName(users = [], name) {
    return users.filter((user) => {
        return user.name.toLowerCase().includes(name.toLowerCase());
    });
}

module.exports = {
    sortUsersByName,
    sortUsersByScore,
    getUsersPage,
    filterByName,
}