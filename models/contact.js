//Contacts

module.exports = (sequelize,DataTypes)=>{
   const Contact = sequelize.define('contacts',{
    CurrentAdd: {
        type:DataTypes.STRING,
        allowNull: false
    },
    PermanentAdd:{
        type:DataTypes.STRING
    }

}) ;
return Contact;
}


// module.exports = Contact
