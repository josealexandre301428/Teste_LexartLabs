const { Router } = require('express');
const loginController = require('../controller/loginController');

const loginRouter = Router();

loginRouter.get('/users', loginController.login);
loginRouter.post('/login', loginController.login);

module.exports = loginRouter;