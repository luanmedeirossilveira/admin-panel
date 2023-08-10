'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('products', [
      {
        name: 'Product 1',
        description: 'Product 1 description',
        price: 10,
        category_id: 1,
        quantity: 10,
        brand_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Product 2',
        description: 'Product 2 description',
        price: 20,
        category_id: 2,
        quantity: 20,
        brand_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Product 3',
        description: 'Product 3 description',
        price: 30,
        category_id: 3,
        quantity: 30,
        brand_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('products', null, {});
  }
};
