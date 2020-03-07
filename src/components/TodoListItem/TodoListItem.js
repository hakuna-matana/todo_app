import React from "react";
import './TodoListItem.css'

const TodoListItem = ({title, important = false}) => {
  const style = {
    color: important ? '#547d9a' : 'black',
    fontWeight: important ? 'bold' : 'normal'
  }
  return <div className={"todo-list-item"}>
    <span
      className={"todo-list-item-title"}
      style={style}
    >
      {title}
    </span>
    <button
      type="button"
      className="btn btn-outline-success btn-sm float-right"
    >
      <i className="fa fa-exclamation" />
    </button>

    <button
      type="button"
      className="btn btn-outline-danger btn-sm float-right"
    >
      <i className="fa fa-trash-o" />
    </button>
  </div>
}

export default TodoListItem