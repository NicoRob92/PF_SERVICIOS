const sequelize = require("../Database");
const { DataTypes } = require("sequelize");

const Category = sequelize.define("Category", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Category;
