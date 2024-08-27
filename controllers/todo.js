class TodoController {
  constructor(todoRepository) {
    this.todoRepository = todoRepository;
  }

  getTodoById(id) {
    return this.todoRepository.getTodoById(id);
  }
  addTodo(todo) {
    return this.todoRepository.addTodo(todo);
  }
}

module.exports = TodoController;
