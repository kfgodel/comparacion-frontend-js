export const STORAGE_KEY = 'vue-todos';

export const mutations = {
  addTodoMutation (state, todoItem) {
    state.todos.push(todoItem)
  },

  removeTodoMutation (state, todoItem) {
    let index = state.todos.indexOf(todoItem);
    if(index > -1){
      state.todos.splice(index, 1)
    }
  }
};