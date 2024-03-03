const { Router } = require('express');
const productsController = require('../controller/productsController');

const productsRouter = Router();

productsRouter.get('/products', productsController.getAll);

module.exports = productsRouter;