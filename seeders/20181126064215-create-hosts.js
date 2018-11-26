"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Hosts",
      [
        {
          name: "John Doe Host1",
          company: "John Company1",
          email: "john1@gmail.com",
          accountId: 9,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "John Doe Host2",
          company: "John Company2",
          email: "john2@gmail.com",
          accountId: 10,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "John Doe Host3",
          company: "John Company3",
          email: "john3@gmail.com",
          accountId: 11,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "John Doe Host4",
          company: "John Company4",
          email: "john4@gmail.com",
          accountId: 12,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "John Doe Host5",
          company: "John Company5",
          email: "john5@gmail.com",
          accountId: 13,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "John Doe Host6",
          company: "John Company6",
          email: "john6@gmail.com",
          accountId: 14,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "John Doe Host7",
          company: "John Company7",
          email: "john7@gmail.com",
          accountId: 15,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "John Doe Host8",
          company: "John Company8",
          email: "john8@gmail.com",
          accountId: 16,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Hosts", null, {});
  }
};
