const jwt = require('jsonwebtoken');
const db = require('../db/models');
const ValidateError = require('../middlewares/ValidateError');


const productService = {
  async create(req, data) {
    const header = req.headers
    const {email} = jwt.decode(header.authorization);
    const dataValues = await db.users.findOne({
      where: { email }, raw: true,
    });
    if (!dataValues) throw new ValidateError(400, 'Permission denied');



    const result = await db.products.create(data);
    return result;
  },
  
  async read(req, res) {
    const header = req.headers
    const {email} = jwt.decode(header.authorization);
    const dataValues = await db.users.findOne({
      where: { email }, raw: true,
    });
    if (!dataValues) throw new ValidateError(400, 'Permission denied');


  
    const result =  await db.products.findAll();
    return result;
  },
}

module.exports = productService;