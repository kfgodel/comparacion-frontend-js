import React, {Component} from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

class TodoItemEditor extends Component {

  constructor(props) {
    super(props);
    this.state = {
      editedText: '',
    }
  }

  handleInput = event => {
    const changedText = event.target.value;
    this.setState({
      editedText: changedText,
    })
  };

  completeItem = event => {
    let createdItem = {text: this.state.editedText, key: Date.now()};
    this.props.addItem(createdItem);
    this.setState({
      editedText: '',
    })
  };

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <TextField
            autoFocus={true}
            placeholder="Describir tarea ..."
            value={this.state.editedText}
            onChange={this.handleInput}
          />
          <Button variant="contained" color="primary" onClick={this.completeItem} > Agregar</Button>
        </div>

      </div>
    )
  }
}

export default TodoItemEditor