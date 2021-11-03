const database = require('../../database/database');

function postUsers(req, res) {
    const query = fillEmptyValuesQuery(req.body || {});
    const users = database.getUsers(query.page, query.sortBy, query.name);

    res.type('application/json')
        .status('200')
        .set('Access-Control-Allow-Origin', '*')
        .set('Access-Control-Allow-Methods', 'POST')
        .set(
            'Access-Control-Allow-Headers',
            'Origin, Content-Type, X-Auth-Token'
        )
        .send(JSON.stringify(users))
}

function fillEmptyValuesQuery(query) {
    const defaultValues = defaultQuery();

    return {
        name: query.name || defaultValues.name,
        page: query.page || defaultValues.page,
        sortBy: query.sortBy || defaultValues.sortBy,
    }
}

function defaultQuery() {
    return {
        name: '',
        page: 0,
        sortBy: database.SORT_BY.name
    };
}

module.exports = {
    postUsers
};