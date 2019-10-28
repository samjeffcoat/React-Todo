import React from 'react';

const Todo = props => {
    return (
        <div className= "hold"> 
            <p>{props.todo.name}</p>
        </div>
    )
}

export default Todo;


// {`task${props.task.completed ? 'completed' : ' '}`}