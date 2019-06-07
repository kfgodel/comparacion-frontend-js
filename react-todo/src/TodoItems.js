import React, {Component} from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/Inbox'

class TodoItems extends Component {

  singleTask(item) {
    return (
      <ListItem button key={item.key} onClick={() => this.props.deleteItem(item.key)}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary={item.text} />
      </ListItem>
    )
  }

  render() {
    const todoEntries = this.props.entries
    const listItems = todoEntries.map((item)=> this.singleTask(item))
    return (
      <List>{listItems}</List>
    )
  }
}

export default TodoItems