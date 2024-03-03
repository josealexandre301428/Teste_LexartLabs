const productService = require('../services/productServices');

const registerServices = {

  async getAll(req, res) {
    try {
      const response = await productService.getAll(req, res);

      return res.status(201).json(response);
    } catch (error) {
      return error.status
        ? res.status(error.status).json({error: error.status, message: error.message })
        : res.status(500).json({error: error.status ,message: error.message });
    }
  },
}

module.exports = registerServices;