const express = require('express');
const person = require('./personRoute.js');
const course = require('./courseRoute.js');
const category = require('./categoryRoute.js');

module.exports = app => {
    app.use(
        express.json(),
        person,
        category,
        course
    )
}