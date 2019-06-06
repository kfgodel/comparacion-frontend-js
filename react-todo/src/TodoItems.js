import React, {Component} from 'react'

class TodoItems extends Component {

  singleTask(item) {
    return (
      <li key={item.key} onClick={() => this.props.deleteItem(item.key)}>
        {item.text}
      </li>
    )
  }

  render() {
    const todoEntries = this.props.entries
    const listItems = todoEntries.map((item)=> this.singleTask(item))
    return <ul className="theList">{listItems}</ul>
  }
}

export default TodoItems