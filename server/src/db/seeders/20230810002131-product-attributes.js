'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('productAttributes', [
      {
        product_id: 1,
        attribute_id: 1,
        value: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_id: 1,
        attribute_id: 2,
        value: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_id: 1,
        attribute_id: 3,
        value: 30,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('productAttributes', null, {})
  }
};
