const express = require('express');

const router = express.Router();

const todoRouter = (todoController) => {
  router.get('/:id', (req, res) => {
    try {
      const id = req.params.id;
      const todo = todoController.getTodoById(id);
      res.send(todo);
    } catch (error) {
      console.log('error: ', error);
      // res.status(error?.statusCode).send(error?.message)
    }
  });
  router.post('/', (req, res) => {
    try {
      const { id, todo } = req.body;
      todoController.addTodo({ id, todo });
      res.send(todo);
    } catch (error) {
      console.log('error: ', error);
      // res.status(error?.statusCode).send(error?.message)
    }
  });

  return router;
};
module.exports = todoRouter;
