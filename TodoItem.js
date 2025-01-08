import React from "react"

function ToDoItems(props) {
    const completedStyle = {
        fontStyle: "italic",
        color: "grey",
        textDecoration: "line-through"
    }




    return (
        <div className="todo-item">

            <input
                type="checkbox"
                checked={props.item.completed}
                onChange={() => props.handleChange(props.item.id)}
            />

            <p style={props.item.completed ? completedStyle : null}>
                {props.item.text}
            </p>

            <hr />


        </div>

    )
}

export default ToDoItems;