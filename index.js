const express = require('express');
const todoRouter = require('./routes/todo');
const TodoController = require('./controllers/todo');
const TodoInmemoryRepository = require('./repositories/Inmemory/todo');

const app = express();
const PORT = 3000;

const todoRepository = new TodoInmemoryRepository();
const todoController = new TodoController(todoRepository);

app.use(express.json());
app.use('/todo', todoRouter(todoController));

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
