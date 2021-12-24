const { TABLES, FIELD_LENGTHS } = require("../constants");

module.exports = {
  down: queryInterface => queryInterface.dropTable(TABLES.USERS),
  up: (queryInterface, DataTypes) => queryInterface.createTable(TABLES.USERS, {
    authId: {
      allowNull: false,
      type: DataTypes.STRING(FIELD_LENGTHS.AUTH_ID),
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    email: DataTypes.STRING(FIELD_LENGTHS.EMAIL),
    firstName: DataTypes.STRING(FIELD_LENGTHS.FIRST_NAME),
    id: {
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      type: DataTypes.UUID,
      unique: true,
    },
    lastName: DataTypes.STRING(FIELD_LENGTHS.LAST_NAME),
    photoUrl: DataTypes.STRING,
    provider: {
      allowNull: false,
      type: DataTypes.STRING(FIELD_LENGTHS.PROVIDER),
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  }),
};
