// const {DataTypes} = require('sequelize')
// const sequelize = require('./index')

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
            // defaultValue:'John'
        },
        lastName: {
            type: DataTypes.STRING,
            defaultValue: 'Singh'
        }
    },
        {
            tableName: 'users',
            timestamps: false
        }

    )
    return User;
    // console.log(User === sequelize.models.User);

    // module.exports = User
}
