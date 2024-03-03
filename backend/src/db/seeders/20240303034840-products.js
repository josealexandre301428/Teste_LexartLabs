const { DATE } = require("sequelize");

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('products', [
      {
        name: "Xiaomi Redmi 9",
        brand: "Xiaomi",
        model: "Redmi 9",
        price:  10000,
        color: "red",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },
  down: async (queryInterface) => {
    await queryInterface.bulkDelete('products', null, {});
  },
};
