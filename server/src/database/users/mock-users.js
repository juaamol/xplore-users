const user = require("./user");

function generateUsers(quantity) {
    const users = [];

    for (let i = 0; i < quantity; i++) {
        users.push(user.generateUser(i + 1));
    }

    return users;
}

module.exports = {
    generateUsers
}