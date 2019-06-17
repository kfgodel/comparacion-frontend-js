import React, {Component} from 'react'
import 'typeface-roboto';
import CssBaseline from '@material-ui/core/CssBaseline'
import './App.css'
import TodoList from "./TodoList";
import AppContext from "./AppContext";
import TodoService from "./TodoService";

let injectedDependencies = {
  todoService: new TodoService()
};

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <CssBaseline />

        <AppContext.Provider value={injectedDependencies} >
          <TodoList />
        </AppContext.Provider>

      </React.Fragment>
    )
  }
}

export default App