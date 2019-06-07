import React, {Component} from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

class TodoList extends Component {
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <TextField
            autoFocus={true}
            placeholder="Describir tarea ..."
            value={this.props.currentItem.text}
            onChange={this.props.handleInput}
          />
          <Button variant="contained" color="primary" onClick={this.props.addItem} > Agregar</Button>
        </div>

      </div>
    )
  }
}

export default TodoList