const faker = require('faker');

function generateUser(id) {

    return {
        id,
        name: faker.name.findName(),
        birthday: birthday(faker.date.between('1980-01-01', '2010-01-05')),
        score: faker.datatype.number(9999),
        avatarUrl: `https://robohash.org/${id}`,
    }
}

function birthday(date) {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

module.exports = {
    generateUser,
}