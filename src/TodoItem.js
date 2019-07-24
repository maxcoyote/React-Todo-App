import React from "react"

function TodoItem(props) {
    const completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }

    return (
        <div className="todo-item">
            <label style={props.item.completed ? completedStyle: null}>
              <input
                  type="checkbox"
                  checked={props.item.completed}
                  onChange={() => props.handleChange(props.item.id)}
              />
              {props.item.text}
            </label>
        </div>
    )
}

export default TodoItem
