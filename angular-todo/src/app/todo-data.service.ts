import {Injectable} from '@angular/core';
import {Todo} from "./todo";

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  todos: Array<Todo> = [];

  constructor() { }

  addTodo(newTodo: Todo) {
    this.todos.push(newTodo)
  }

  toggleTodoComplete(todo: any) {

  }

  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index > -1) {
      this.todos.splice(index, 1);
    }
  }

  getAllTodos() {
    return this.todos
  }
}
