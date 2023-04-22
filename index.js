const express = require('express')
var bodyParser = require('body-parser')
const User = require('./models/user')
const Contact = require('./models/contact')
const app = express()
var userCtrl = require('./controller/userController')
app.use(bodyParser.json())

app.get('/',function (req,res)
{
    res.send('Hello World')
})

app.get('/add',userCtrl.addUser)

// User.sync({force:true});
// Contact.sync({force:true});

app.listen(3000,()=>{
    console.log('App will run on: http://localhost:3000')
})