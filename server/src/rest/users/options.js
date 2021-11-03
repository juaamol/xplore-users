function optionsUsers(_, res) {
    res.type('application/json')
        .set('Access-Control-Allow-Origin', '*')
        .set('Access-Control-Allow-Methods', 'POST')
        .set('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token')
        .send()
}

module.exports = {
    optionsUsers
};