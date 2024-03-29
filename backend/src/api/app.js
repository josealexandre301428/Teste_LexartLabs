const express = require('express');
require('express-async-errors');
require('dotenv').config();
const { createPool } = require('@vercel/postgres');
const cors = require('cors');
const loginRouter = require('../router/loginRouter');
const registerRouter = require('../router/registerRouter');
const productsRouter = require('../router/productRouter');
const clientRouter = require('../router/clientRouter');

const app = express();
app.use(express.json());
app.use(cors());


const pool = new createPool({
  connectionString: process.env.POSTGRES_URL,
});

app.use((req, _res, next) => {
  req.db = pool;
  next();
});

app.use('/', loginRouter);
app.use('/', registerRouter);
app.use('/', productsRouter);
app.use('/client', clientRouter);

module.exports = app;