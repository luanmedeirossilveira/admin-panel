'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('categories', [
      {
        name: 'Category 1',
        description: 'Category 1 description',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Category 2',
        description: 'Category 2 description',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Category 3',
        description: 'Category 3 description',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('categories', null, {})
  }
};
