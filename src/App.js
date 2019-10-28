import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
const data =
[
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];



class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state= {
      todo: data
    }
  }
  render() {
    return (
      <div className= "App">
        <div className= "header">
          <h1>Sam's Todo App!</h1>
          <TodoForm />
        </div>
        <TodoList todo= {this.state.todo}/>
      </div>
    );
  }
}

export default App;
