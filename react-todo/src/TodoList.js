import React, {Component} from 'react'
import TodoItemEditor from "./TodoItemEditor";
import TodoItemList from "./TodoItemList";
import Container from "@material-ui/core/Container";
import AppContext from "./AppContext";

class TodoList extends Component {
  static contextType = AppContext;

  constructor(props) {
    super(props);
    this.state = {
      items: [],
    }
  }

  componentDidMount() {
    this.updateTodoList();
  }

  addItem = (createdItem) => {
    this.context.todoService.addNewItem(createdItem).then(()=>{
      this.updateTodoList();
    });
  };

  deleteItem = (deletedItem) => {
    this.context.todoService.removeItem(deletedItem).then(()=>{
      this.updateTodoList();
    });
  };

  updateTodoList() {
    this.context.todoService.findAllTodoItems().then(items  => {
      this.setState({ items })
    });
  }

  render() {
    return (
      <Container maxWidth="sm">
        <TodoItemEditor
          addItem={this.addItem}
        />
        <TodoItemList
          items={this.state.items}
          deleteItem={this.deleteItem}
        />
      </Container>
    )
  }
}

export default TodoList