const {Sequelize, DataTypes, Model} = require('sequelize')

// Here Passing the parameters separately (other dialects)

const sequelize = new Sequelize('employeedb','root','arpita@3006',{
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});


// Testing the connection
// You can use the .authenticate() function to test if the connection is OK:

try{
    sequelize.authenticate();
    console.log('Connection has been established successfully');
}
catch(error){
    console.error('Unable to connect to the database',error)
}

const db = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.contacts=require('./contact')(sequelize,DataTypes)
db.user=require('./user')(sequelize,DataTypes)

db.sequelize.sync({force:false});

module.exports = db
