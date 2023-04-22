module.exports = (sequelize ,DataTypes) => {
    const User = sequelize.define(
      "User",
      {
        firstName: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        lastName: {
          type: DataTypes.STRING,
        },
        UserID:DataTypes.INTEGER
      },
      {
        tableName: "users",
        timestamps: false,
      }
    );
    return User;
  };