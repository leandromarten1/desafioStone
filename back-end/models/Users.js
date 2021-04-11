module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    'Users',
    {
      nome: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      favorites: DataTypes.JSON,
    },
    { timestamps: false },
  );

  return Users;
};
