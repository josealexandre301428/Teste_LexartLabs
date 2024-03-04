const productService = require('../services/productServices');
const { response } = require('express');

const registerServices = {

  async create(req, res) {
    try {
    const num = req.params
    const est1 = 1;
    const est2 = 2;
    const est3 = 3;

    if(num.est == est1) return await productService.create(req.body);

    if(num.est == est2){
        const {name, details, price} = req.body;
        const {brand, model, color} = details;
        await productService.create({name, brand, model, price, color});
    }

    if(num.est == est3){
      const products = [];
            for (const productData of req.body) {
                const { name, brand, model, data } = productData;
                for (const item of data) {
                    const { price, color } = item;
                    const product = await productService.create({ name, brand, model, price, color });
                    products.push(product);
                }
            }
    }

      res.status(201).json(response);
  } catch (error) {
      res.status(400).json({ message: error.message });
  }
  },


  async read(req, res) {
    try {
      const response = await productService.read(req, res);

      return res.status(201).json(response);
    } catch (error) {
      return error.status
        ? res.status(error.status).json({error: error.status, message: error.message })
        : res.status(500).json({error: error.status ,message: error.message });
    }
  },

  async update(req, res) { 
    const productId = req.params.id;
    try {
      const product = await productService.update(productId, req.body);

      return res.json({message: 'Produto atualizado com sucesso',product: product});
    } catch (error) {
      return error.status
        ? res.status(error.status).json({error: error.status, message: error.message })
        : res.status(500).json({error: error.status, message: error.message });
    }
  },

  async delete(req, res) {
    const productId = req.params.id;
    try {
      const product = await productService.delete(productId);

      return res.json({message: 'Produto deletado com sucesso', product: product});
    } catch (error) {
      return error.status
        ? res.status(error.status).json({error: error.status, message: error.message })
        : res.status(500).json({error: error.status, message: error.message });
    } 
  },
}

module.exports = registerServices;