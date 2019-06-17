import React, {Component} from 'react'
import 'typeface-roboto';
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import TodoItemEditor from './TodoItemEditor'
import TodoItemList from './TodoItemList'
import './App.css'

class App extends Component {

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
      <React.Fragment>
        <CssBaseline />

        <Container maxWidth="sm">

          <TodoItemEditor
            addItem={this.addItem}
          />
          <TodoItemList
            items={this.state.items}
            deleteItem={this.deleteItem}
          />
        </Container>

      </React.Fragment>
    )
  }
}

export default App