
class TodoService {
  todoItems = [];

  findAllTodoItems() {
    return this.todoItems;
  }

  addNewItem(todoItem){
    this.todoItems = [...this.todoItems, todoItem];
  }

  removeItem(todoItem){
    this.todoItems =  this.todoItems.filter(item => {
      return item !== todoItem
    });
  }

}

export default TodoService;