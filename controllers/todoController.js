// Importing the ToDo model
const Todo = require("../models/todo");

// Getting the index page
const todoIndex = (req, res)=>{
    Todo.find().sort({createdAt: 1}).then((result)=>{
        res.render("index", {todoitems: result});
    }).catch((error)=>{
    console.log(error);
    });
};

// Adding a ToDo item
const todoAdd = (req, res)=>{
    const todoItem = new Todo({
        text: req.body.add
    });
    todoItem.save().then((result)=>{
        res.redirect("/");
    });
};

// Deleting a ToDo item
const todoDelete = (req,res)=>{
    const id = req.params.id;
    Todo.findByIdAndDelete(id).then((result)=>{
        res.redirect("/");
    }).catch((error)=>{
        res.status(404).render("404");
    });
};

module.exports = {todoIndex, todoAdd, todoDelete}