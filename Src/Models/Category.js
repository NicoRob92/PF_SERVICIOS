const sequelize = require("../Database");
const { DataTypes } = require("sequelize");
const Product = require("./Product");

const Category = sequelize.define("category", {
  name: {
    type: DataTypes.STRING,
  },
});

module.exports = Category;
