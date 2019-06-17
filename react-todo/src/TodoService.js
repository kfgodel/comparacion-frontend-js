
const STORAGE_KEY = 'react-todo-items';

class TodoService {
  todoItems = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]');

  findAllTodoItems() {
    return Promise.resolve(this.todoItems);
  }

  addNewItem(todoItem){
    this.storeItems([...this.todoItems, todoItem]);
    return Promise.resolve();
  }

  removeItem(todoItem){
    this.storeItems(this.todoItems.filter(item => {
      return item !== todoItem
    }));
    return Promise.resolve();
  }

  storeItems(newItems) {
    this.todoItems = newItems;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(this.todoItems));
  }
}

export default TodoService;