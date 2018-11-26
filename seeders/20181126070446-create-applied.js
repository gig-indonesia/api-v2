"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "AppliedGigs",
      [
        {
          status: "pending",
          artistId: 2,
          createGigsId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          status: "approved",
          artistId: 3,
          createGigsId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          status: "reject",
          artistId: 4,
          createGigsId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          status: "approved",
          artistId: 5,
          createGigsId: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          status: "reject",
          artistId: 6,
          createGigsId: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          status: "pending",
          artistId: 6,
          createGigsId: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("AppliedGiga", null, {});
  }
};
