import React, {Component} from 'react'
import TodoItemEditor from "./TodoItemEditor";
import TodoItemList from "./TodoItemList";
import Container from "@material-ui/core/Container";

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
    }
  }

  addItem = (createdItem) => {
    const items = [...this.state.items, createdItem];
    this.setState({
      items: items,
    })
  };

  deleteItem = (key) => {
    const nonDeletedItems = this.state.items.filter(item => {
      return item !== key
    });
    this.setState({
      items: nonDeletedItems,
    })
  };

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