import Service from '@ember/service';
import {resolve} from 'rsvp';
import {A} from '@ember/array';

export default Service.extend({
  todoItems: A(),

  findAllTodoItems(){
    return resolve(this.get('todoItems'));
  },

  addNewItem(todoItem){
    this.get('todoItems').addObject(todoItem);
  },

  removeItem(todoItem){
    this.get('todoItems').removeObject(todoItem);
  }
});
