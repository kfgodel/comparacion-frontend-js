import Component from '@ember/component';
import {A} from '@ember/array';
import EmberObject from '@ember/object';
import {inject} from '@ember/service';

export default Component.extend({
  todoService: inject('todo-service'),

  todoItems: A(),
  editedItem: EmberObject.create(),

  init(){
    this._super(...arguments);
    this.get('todoService').findAllTodoItems().then(items =>{
      this.set('todoItems', items)
    });
  },

  actions: {
    addItem(){
      let createdItem = this.get('editedItem');
      createdItem.set('key', Date.now());
      this.get('todoService').addNewItem(createdItem);
      this.set('editedItem', EmberObject.create({text: '', key: ''}));
    },

    deleteItem(item){
      this.get('todoService').removeItem(item);
    }
  }

});
