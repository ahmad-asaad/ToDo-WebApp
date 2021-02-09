const { static, urlencoded } = require("express");
const express = require("express");
const mongoose = require('mongoose');
const routes = require('./routes/todoRoutes');


// Initialize our server
const server = express();

// Initialize MongoDB
mongoose.connect('mongodb+srv://todo:todo123@cluster0.cycei.mongodb.net/todo-list?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() =>{
    console.log("Connected to MongoDB")
    // Listen to port 3000
    server.listen(3000);
}).catch((err)=> console.log(err));


// Register the view engine EJS
server.set("view engine", "ejs");

// For static files
// use functions are middleware that will run at every request
server.use(static(__dirname + '/public'));
server.use(urlencoded({extended: true}));


// Use the routes module for a better organized code
server.use(routes);

// Sending the 404-Page not found error
server.use( (req, res)=>{
    res.status(404).render("404")
});