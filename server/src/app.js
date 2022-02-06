const express = require('express');

const planetRouter = require('./routes/planets/planets.router');

const app = express();
app.use(express.json());

app.use(planetRouter);

module.exports = app;