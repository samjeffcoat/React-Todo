import React from 'react';

class TodoForm extends React.Component{
    constructor(){
        super();
        this.state = {
            newTodo: ' '
        }
    }
    render(){
        return(
            <form>
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