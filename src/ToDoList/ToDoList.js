import React, {Component, Fragment} from 'react';
import ToDoListItem from './ToDoListItem';
import AddToDoItem from './AddToDoItem';

class ToDoList extends Component{
    state={
        
    }

    render(){
        return(
            <Fragment>
                <AddToDoItem />
                <ToDoListItem />
            </Fragment>
        )
    }
}

export default ToDoList;