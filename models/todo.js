const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    text:{
        type: String,
        required: true
    }
}, {timestamps: true});

const TodoItem = mongoose.model("todoitem", todoSchema);

// Now to be able to use this JS module in other files:
module.exports = TodoItem;