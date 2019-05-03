import React from 'react';

const ToDoListItem = (props) => {
    return (
        <div>
            <input type="radio" />
            <p>{props.task}</p>
            <img src="" alt="Delete"/>
        </div>
    )
}

export default ToDoListItem;