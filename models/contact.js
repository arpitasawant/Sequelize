module.exports = (sequelize,DataTypes) => {
  const Contact = sequelize.define(
    "contacts",
    {
      permanentAdd: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      currentAdd: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: "contacts",
    }
  );
  return Contact;
};
