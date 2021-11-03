const express = require('express');
const options = require('./rest/users/options');
const post = require('./rest/users/post');
const env = require('./environment/environment');

const app = express();

app.use(express.json())
app.options('/users', options.optionsUsers);
app.post('/users', post.postUsers);
app.listen(env.PORT)

exports = module.exports = app;