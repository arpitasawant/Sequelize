var db = require("../models");
const User = db.user;
const Contact = db.contacts;

var addUser = async (req, res) => {
    var data = await User.create({
      firstName: "John",
      lastName: "Saw",
    });
    if (data && data.id) {
        await Contact.create({
          permanentAdd: "Moshi",
          currentAdd: "Nigdi",
          UserId : data.id,
        });
      }
    
      res.status(200).json({ data: data });
    };
    
    module.exports = {
      addUser,
    };