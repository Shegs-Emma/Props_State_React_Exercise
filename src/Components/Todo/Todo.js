import React from 'react';
import classes from './Todo.module.css';

const Todo = (props) => {
    return (
        <tr>
            <td className={classes.TodoData}>+</td>
            <td className={classes.TodoData}>{props.title}</td>
            <td className={classes.TodoData}>{props.desc}</td>
        </tr>
    )
}

export default Todo;