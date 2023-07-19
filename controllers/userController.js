var db = require('../models')
const User = db.user;

const addUser = async (req,res)=>
{
    const jane = await User.create({firstName:'Arpita',lastName:'Sawant'});
    console.log(jane instanceof User);//true
    console.log(jane.firstName);//arpita
    // await jane.save();
    // jane.set({firstName:'himani',lastName:'Sheregar'});
        jane.update({firstName:'Himani',lastName:'Sheregar'});

    console.log("Himani was saved to the database!");
    console.log(jane.toJSON());
    res.status(200).json(jane.toJSON());
}

var getUsers = async(req,res)=>{
    const data = await User.findAll({}); 
    res.status(200).json({data:data});
}

var getUser = async(req,res)=>{
    const data = await User.findOne({ 
    where:{
        id:req.params.id
    }
    
});res.status(200).json({data:data})
}

var postUsers = async(req,res)=>{
    var postData = req.body;
    // const data = await User.create({firstName:postData.firstName,lastName:postData.lastName}); 
    const data = await User.create(postData);
    res.status(200).json({data:data});
}

var deleteUser = async(req,res)=>{

    const data = await User.destroy({
        where:{
            id:req.params.id
        }
    }); 
    
    res.status(200).json({data:data});
}

var patchUser = async(req,res)=>{
    var updatedData = req.body;

    const data = await User.update(updatedData,{
        where:{
            id:req.params.id
        }
    }); 
    
    res.status(200).json({data:data});
}

module.exports={
    addUser,
    getUsers,
    getUser,
    postUsers,
    deleteUser,
    patchUser
}

// var db = require("../models");

// const User = db.user;
// const Contact = db.contacts;

// var addUser = async (req, res) => {
  
//   var data = await User.create({
//     firstName: "Arpichu",
//     lastName: "Sawant",
//   });

//   if (data && data.id) {
//     await Contact.create({
//       permanentAdd: "Supreme Nigdi",
//       currentAdd: "Faltu Moshi",
//       UserId : data.id,
//     });
//   }

//   var data = User.findOne({
//     where : {
//       id : 1
//     },
//     include: [{
//       model: Contact
//     }]
//   })

//   res.status(200).json({ data: data });
// };

// module.exports = {
//   addUser,
// };
