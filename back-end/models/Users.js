module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    'Users',
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      favorites: DataTypes.JSON,
    },
    { timestamps: false },
  );

  return Users;
};
