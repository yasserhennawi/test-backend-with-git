const TodoRepository = require('../todo');

class TodoInmemoryRepository extends TodoRepository {
  constructor() {
    super();
    this.todos = [
      {
        id: '1',
        todo: 'my first todo',
      },
      {
        id: '2',
        todo: 'my second todo',
      },
    ];
  }

  getTodoById(id) {
    return this.todos.find(({ id: todoId }) => id === todoId).todo;
  }

  addTodo(todo) {
    this.todos.push(todo)
  }
}

module.exports = TodoInmemoryRepository;
