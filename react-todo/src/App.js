import React, {Component} from 'react'
import 'typeface-roboto';
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import TodoList from './TodoList'
import TodoItems from './TodoItems'
import './App.css'

class App extends Component {

  constructor() {
    super()
    this.state = {
      items: [],
      currentItem: {text:'', key:''},
    }
  }

  handleInput = e => {
    const itemText = e.target.value
    const currentItem = { text: itemText, key: Date.now() }
    this.setState({
      currentItem,
    })
  }

  addItem = (e) => {
    e.preventDefault()
    const newItem = this.state.currentItem
    if (newItem.text === '') {
      // Don't add empty tasks
      return;
    }
    const items = [...this.state.items, newItem]
    this.setState({
      items: items,
      currentItem: {text: '', key: ''},
    })
  }

  deleteItem = (key) => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    })
    this.setState({
      items: filteredItems,
    })
  }

  render() {
    return (
      <React.Fragment>
        <CssBaseline />

        <Container maxWidth="sm">
          <TodoList
            addItem={this.addItem}
            handleInput={this.handleInput}
            currentItem={this.state.currentItem}
          />
          <TodoItems
            entries={this.state.items}
            deleteItem={this.deleteItem}
          />
        </Container>

      </React.Fragment>
    )
  }
}

export default App