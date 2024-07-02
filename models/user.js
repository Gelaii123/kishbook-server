"use strict";
const { Model, UUIDV4, UUID } = require("sequelize");
const bcrypt = require("bcrypt");

const saltRounds = 10;
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Post, {
        foreignKey: "userid",
        as: "post",
      });
    }
  }
  User.init(
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "User",
      hooks: {
        beforeCreate: async (user, options) => {
          console.log("Options", options);
          if (user.password) {
            const hashpassword = await bcrypt.hash(user.password, saltRounds);

            user.password = hashpassword;
          }
        },
      },
    }
  );
  return User;
};
