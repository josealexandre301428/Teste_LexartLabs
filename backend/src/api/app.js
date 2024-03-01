const express = require('express');
require('express-async-errors');
const cors = require('cors');
const loginRouter = require('../router/loginRouter');

const app = express();
app.use(express.json());

app.use(cors());

app.use('/', loginRouter);

module.exports = app;