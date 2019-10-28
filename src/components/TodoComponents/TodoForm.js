import React from 'react';

class TodoForm extends React.Component{
    constructor(){
        super();
        this.state = {
            newTodo: ' '
        }
    }
    handleChanges = e => {
        this.setState({
            newTodo: e.target.value 
        })
    }
    handleSubmit = e => {
        e.preventDefault();
        console.log("It's Working!");
        this.props.addTask(this.state.newTodo);
        this.setState({newTodo : ' '})
    }
    render(){
        return(
            <form onSubmit= {this.handleSubmit}>
                <label htmlFor = "todo">New Todo</label>
                <input
                type= "text"
                name = "todo"
                id= "item"
                value = {this.state.newTodo}
                onChange= {this.handleChanges}
                />
                <button>Add</button>
            </form>
        )
    }

}

export default TodoForm;