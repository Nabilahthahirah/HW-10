'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", [
      {
        email: "Nabilah@mail.com",
        gender: "Women",
        password: "Nabilah123",
        role: "Admin",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: "Thahirah@mail.com",
        gender: "Romance",
        password: "Thahirah123",
        role: "User",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: "Kasim@mail.com",
        gender: "Man",
        password: "Kasim123",
        role: "User",
        createdAt: new Date(),
        updatedAt: new Date()

      }
    ], {});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {
    })
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
