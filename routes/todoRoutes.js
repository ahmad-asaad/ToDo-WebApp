const express = require("express");
const router = express.Router();

const todoController = require("../controllers/todoController");

router.get('/', todoController.todoIndex);
router.post('/add', todoController.todoAdd);
router.get('/delete/:id', todoController.todoDelete);



module.exports = router;