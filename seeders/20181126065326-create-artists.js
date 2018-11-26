"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Artists",
      [
        {
          name: "John Doe",
          type: "solo",
          photo: "john.jpg",
          video: "youtube.com",
          about: "i am solo",
          email: "johni@gmail.com",
          phone: "0829183901",
          accountId: 17,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "John Doe18",
          type: "solo",
          photo: "john.jpg",
          video: "youtube.com",
          about: "i am solo",
          email: "johni18@gmail.com",
          phone: "0829183901",
          accountId: 18,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "John Doe19",
          type: "solo",
          photo: "john.jpg",
          video: "youtube.com",
          about: "i am solo",
          email: "johni19@gmail.com",
          phone: "0829183901",
          accountId: 19,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "John Doe20",
          type: "solo",
          photo: "john.jpg",
          video: "youtube.com",
          about: "i am solo",
          email: "johni20@gmail.com",
          phone: "0829203901",
          accountId: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "John Doe21",
          type: "solo",
          photo: "john.jpg",
          video: "youtube.com",
          about: "i am solo",
          email: "johni21@gmail.com",
          phone: "0829183901",
          accountId: 21,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "John Doe22",
          type: "solo",
          photo: "john.jpg",
          video: "youtube.com",
          about: "i am solo",
          email: "johni22@gmail.com",
          phone: "0829223901",
          accountId: 22,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Artists", null, {});
  }
};
