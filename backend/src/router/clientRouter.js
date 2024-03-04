const { Router } = require('express');
const clientController = require('../controller/clientController');

const clientRouter = Router();

// CREAT para unico produto ou multiplos produtos
clientRouter.post('/create/:est', clientController.create);
// READ
clientRouter.get('/products', clientController.read);

module.exports = clientRouter;