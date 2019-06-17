export default {

  addTodoAction ({ commit }, todoItem) {
    commit('addTodoMutation', todoItem)
  },

  removeTodoAction ({ commit }, todoItem) {
    commit('removeTodoMutation', todoItem)
  }
}