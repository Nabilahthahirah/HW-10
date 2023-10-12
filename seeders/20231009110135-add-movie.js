'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Movies", [
      {
        title: "Dilan",
        genres: "Romance",
        year: "1997",
        photo: "",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Bumi",
        genres: "Action",
        year: "2020",
        photo: "",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Langit",
        genres: "Horor",
        year: "2017",
        photo: "",
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
    await queryInterface.bulkDelete('Movies', null, {
    })
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
