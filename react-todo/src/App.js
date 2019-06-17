import React, {Component} from 'react'
import 'typeface-roboto';
import CssBaseline from '@material-ui/core/CssBaseline'
import './App.css'
import TodoList from "./TodoList";

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <CssBaseline />

        <TodoList />

      </React.Fragment>
    )
  }
}

export default App