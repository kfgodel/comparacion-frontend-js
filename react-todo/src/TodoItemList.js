import React, {Component} from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/Inbox'

class TodoItemList extends Component {

  renderTodoItem(item) {
    return (
      <ListItem button key={item.key} onClick={() => this.props.deleteItem(item)}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary={item.text} />
      </ListItem>
    )
  }

  render() {
    const listItems = this.props.items.map((item)=> this.renderTodoItem(item));
    return (
      <List>{listItems}</List>
    )
  }
}

export default TodoItemList