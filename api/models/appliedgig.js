"use strict";
module.exports = (sequelize, DataTypes) => {
  const AppliedGig = sequelize.define("AppliedGig", {
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM("pending", "approve", "reject"),
      allowNull: false
    },
    artistId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      references: {
        model: "Artists",
        key: "id"
      }
    },
    createGigsId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      references: {
        model: "CreateGigs",
        key: "id"
      }
    }
  });

  return AppliedGig;
};
