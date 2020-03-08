import React from "react";
import TodoListItem from "../TodoListItem";
import './TodoList.css'

const TodoList = ({todos, onDeleted, onToggleImportant, onToggleDone}) => {
  let list = todos.map((item) => {
    return <li key={item.id} className={"list-group-item list-group-item-action list-group-item-light"}>
      <TodoListItem
        {...item}
        onDeleted={onDeleted}
        onToggleImportant={onToggleImportant}
        onToggleDone={onToggleDone}
      />
    </li>
  });
  return <ul className={"list-group todo-list"}>
    {list}
  </ul>
}

export default TodoList