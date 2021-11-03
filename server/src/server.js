const express = require('express');
const options = require('./rest/users/options');
const post = require('./rest/users/post');

const app = express();

app.use(express.json())
app.options('/users', options.optionsUsers);
app.post('/users', post.postUsers);
app.listen('8081')

exports = module.exports = app;