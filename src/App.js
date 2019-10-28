import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css'
const data =
[
  {
    task: 'Feed Luke',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Change Lukes Diaper',
    id: 1528817084358,
    completed: false
  },
  {
    task: 'Do a code challenge',
    id: 1522251551,
    completed: false,
  },
  {
    task: 'Read TK or Watch TK Videos',
    id: 1555550000,
    completed: false
  },
  {
    task: "Watch Lecture",
    id: 155555000044,
    completed: false
  },
  {
    task: "Exercise and Eat Lunch",
    id: 15555500008888,
    completed: false
  },
  {
    task: "Do afternoon project",
    id: 15555500009999,
    completed: false
  },
  {
    task: "Fill out airtable",
    id: 15555500001455558,
    completed: false
  },
  {
    task: 'Attend Evening Standup',
    id: 1555550000877778777,
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
  addTask = task => {
    const newTask = {
      task: task,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todo: [...this.state.todo, newTask]
    })
  }
  toggleCompleted = id => {
    //loop through tasks
    // find grocery we clicked on and toggle list on or off
    this.setState({
      todo: this.state.todo.map(todo => {
        if (todo.id === id){
          return {
            ...todo, 
            completed: !todo.completed
          }
        } else{
            return todo;
          }
      })
    })
  }
  clearCompleted = () => {
    let todo= this.state.todo.filter(todo=> !todo.completed);
    this.setState({todo})
  }
  render() {
    return (
      <div className= "App">
        <div className= "header">
          <h1>Sam's Todo App!</h1>
          <TodoForm addTask={this.addTask} />
        </div>
        <TodoList toggleCompleted={this.toggleCompleted} clearCompleted={this.clearCompleted}todo= {this.state.todo}/>
      </div>
    );
  }
}

export default App;
