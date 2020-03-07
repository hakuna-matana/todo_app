import React from "react";
import TodoListItem from "../TodoListItem";
import './TodoList.css'

const TodoList = ({todos}) => {
  let list = todos.map((item) => {
    let {id, ...opts} = item;
    return <li key={id} className={"list-group-item list-group-item-action list-group-item-light"}>
      <TodoListItem {...opts} />
    </li>
  });
  return <ul className={"list-group todo-list"}>
    {list}
  </ul>
}

export default TodoList