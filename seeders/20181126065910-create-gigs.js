"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "CreateGigs",
      [
        {
          title: "John Doe9",
          budget: 1000000,
          date: new Date(),
          description: "just a gig",
          photo: "gigs.jpg",
          location: "jalan jalan",
          latLng: "-2829820,829280",
          hostId: 9,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "John Doe10",
          budget: 1000000,
          date: new Date(),
          description: "just a gig",
          photo: "gigs.jpg",
          location: "jalan jalan",
          latLng: "-28210820,8210280",
          hostId: 10,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "John Doe11",
          budget: 1000000,
          date: new Date(),
          description: "just a gig",
          photo: "gigs.jpg",
          location: "jalan jalan",
          latLng: "-28211820,8211280",
          hostId: 11,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "John Doe12",
          budget: 1000000,
          date: new Date(),
          description: "just a gig",
          photo: "gigs.jpg",
          location: "jalan jalan",
          latLng: "-28212820,8212280",
          hostId: 12,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "John Doe13",
          budget: 1000000,
          date: new Date(),
          description: "just a gig",
          photo: "gigs.jpg",
          location: "jalan jalan",
          latLng: "-28213820,8213280",
          hostId: 13,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "John Doe14",
          budget: 1000000,
          date: new Date(),
          description: "just a gig",
          photo: "gigs.jpg",
          location: "jalan jalan",
          latLng: "-28214820,8214280",
          hostId: 14,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "John Doe15",
          budget: 1000000,
          date: new Date(),
          description: "just a gig",
          photo: "gigs.jpg",
          location: "jalan jalan",
          latLng: "-28215820,8215280",
          hostId: 15,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "John Doe16",
          budget: 1000000,
          date: new Date(),
          description: "just a gig",
          photo: "gigs.jpg",
          location: "jalan jalan",
          latLng: "-28215820,8215280",
          hostId: 16,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("CreateGigs", null, {});
  }
};
