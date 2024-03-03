const db = require('../db/models');


const productService = {
  async getAll(req, res) {
   const result =  await db.products.findAll();
   console.log(result);
   return result;
  },

  /* async getByName(name) {
    const result =  await db..findOne({
      where: { name }, raw: true,
    });
   return result;
  } */
}

module.exports = productService;