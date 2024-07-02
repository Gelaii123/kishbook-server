"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association her
      Post.belongsTo(models.User, {
        foreignKey: {
          name: "userid",
          type: DataTypes.UUID, // Ensure this matches the type of User.id
          allowNull: false, // Adjust as necessary
        },
        as: "user",
      });
    }
  }
  Post.init(
    {
      post: DataTypes.STRING,
      userid: {
        type: DataTypes.UUID, // Ensure this matches the type of User.id
        allowNull: false,
      },
    },

    {
      sequelize,
      modelName: "Post",
    }
  );
  return Post;
};
