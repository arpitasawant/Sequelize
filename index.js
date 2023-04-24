const express = require('express')
const bodyParser = require('body-parser')
require('./models')
var userCtrl=require('./controllers/userController')
// const User = require('./models/user')
// const Contact = require('./models/contact')
const app = express()

app.use(bodyParser.json())

// app.use(express.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.send("Hello")
})

app.get('/add',userCtrl.addUser)

app.get('/users',userCtrl.getUsers)
app.get('/users/:id',userCtrl.getUser)

app.post('/users',userCtrl.postUsers)

app.patch('/users/:id',userCtrl.patchUser)

app.delete('/users/:id',userCtrl.deleteUser)
// User.drop();

// Contact.sync({force:true});

app.listen(3000, () => {
    console.log("App will run on:http://localhost:3000")
})