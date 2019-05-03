import React, { createContext, Component } from 'react';
import './App.css';
import Header from './Header';
import ToDoList from './ToDoList/ToDoList';

const MyContext = createContext();

class MyProvider extends Component {
  state = {
    task: '',
    list: []
  }

  render() {
    return (
      <MyContext.Provider value={{
        state: this.state
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

function App() {
  return (
    <MyProvider>
      <div className="App">
        <Header />
        <ToDoList />
      </div>
    </MyProvider>
  );
}

export default App;
