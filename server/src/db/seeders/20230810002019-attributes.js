'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('attributes', [
      {
        name: 'Color',
        type: 'string',
        values: ['Red', 'Blue', 'Green', 'White', 'Black'],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Size',
        type: 'string',
        values: ['S', 'M', 'L', 'XL', 'XXL'],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Material',
        type: 'string',
        values: ['Polyester', 'Cotton', 'Leather'],
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('attributes', null, {});
  }
};
