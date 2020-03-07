import AppHeader from "../AppHeader";
import SearchPanel from "../SearchPanel";
import ItemStatusFilter from "../ItemStatusFilter";
import TodoList from "../TodoList";
import React from "react";
import './App.css'

const App = () => {
  const todoData = [
    {id: 1, title: "Learn React", important: true},
    {id: 2,title: "Build Awesome App"},
    {id: 3,title: "Update github"},
    {id: 4,title: "Drink Coffee"}
  ];

  return <div className={"todo-app"}>
    <AppHeader toDo={1} done={3}/>
    <div className={"top-panel d-flex"}>
      <SearchPanel/>
      <ItemStatusFilter/>
    </div>
    <TodoList todos={todoData}/>
  </div>
};

export default App;