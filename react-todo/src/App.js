import React, {Component} from 'react'
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

  inputElement = React.createRef()

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
    console.log(newItem)
    const items = [...this.state.items, newItem]
    this.setState({
      items: items,
      currentItem: {text: '', key: ''},
    })
  }

  render() {
    return (
      <div className="App">
        <TodoList
          addItem={this.addItem}
          inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
        />
        <TodoItems entries={this.state.items} />
      </div>
    )
  }
}

export default App