const faker = require('faker');

function generateUser(id) {

    return {
        id,
        name: faker.name.findName(),
        birthday: faker.date.between('1980-01-01', '2010-01-05'),
        score: faker.datatype.number(9999),
        avatarUrl: `https://robohash.org/${id}`,
    }
}

module.exports = {
    generateUser,
}