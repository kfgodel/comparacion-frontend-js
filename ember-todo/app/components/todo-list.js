import Component from '@ember/component';
import {A} from '@ember/array';
import EmberObject from '@ember/object';

export default Component.extend({
  todoItems: A(),
  editedItem: EmberObject.create(),

  actions: {
    addItem(){
      let createdItem = this.get('editedItem');
      createdItem.set('key', Date.now());
      this.get('todoItems').addObject(createdItem);
      this.set('editedItem', EmberObject.create({text: '', key: ''}));
    }
  }

});
