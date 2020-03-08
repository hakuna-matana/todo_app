import AppHeader from "../AppHeader";
import SearchPanel from "../SearchPanel";
import ItemStatusFilter from "../ItemStatusFilter";
import TodoList from "../TodoList";
import React from "react";
import './App.css'
import AddItem from "../AddItem";

class App extends React.Component {

  constructor() {
    super();
    this.maxId = this.todoData.reduce((previousValue, {id}) => {
      if (id > previousValue) return id;
    }, 0);
  }

  todoData = [
    {id: 1, title: "Learn React", important: true, done: false},
    {id: 2,title: "Build Awesome App", important: false, done: false},
    {id: 3,title: "Update github", important: false, done: false},
    {id: 4,title: "Drink Coffee", important: false, done: false}
  ];

  state = {
    todoData: this.todoData
  }

  createTodoItem = (title) => {
    return {
      title,
      id: ++this.maxId,
      important: false,
      done: false
    }
  }

  deleteItem = (id) => {
    this.setState(({todoData}) => {
      let newData = todoData.filter((item) => item.id !== id)
      return {
        todoData: newData
      }
    })
  }

  addItem = (text) => {
    this.setState(({todoData}) => {
      let newItem = this.createTodoItem(text)
      return {
        todoData: [...todoData, newItem]
      }
    })
  }

  onToggleDone = (id) => {
    this.setState(({todoData}) => {
      let newArr = this.toggleProperty(todoData, id, "done")
      return {
        todoData: newArr
      }
    })
  }

  onToggleImportant = (id) => {
    this.setState(({todoData}) => {
      let newArr = this.toggleProperty(todoData, id, "important")
      return {
        todoData: newArr
      }
    })
  }

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const newItem = {...oldItem, [propName]: !oldItem[propName]};
    return [...arr.slice(0,idx), newItem, ...arr.slice(idx + 1)]
  }

  render() {
    let {todoData} = this.state;

    const doneCount = todoData.filter((item) => item.done).length;
    const todoCount = todoData.filter((item) => !item.done).length;
;
    return <div className={"todo-app"}>
      <AppHeader toDo={todoCount} done={doneCount}/>
      <div className={"top-panel d-flex"}>
        <SearchPanel/>
        <ItemStatusFilter/>
      </div>
      <TodoList
        todos={todoData}
        onDeleted={this.deleteItem}
        onToggleImportant={this.onToggleImportant}
        onToggleDone={this.onToggleDone}
      />
      <AddItem onItemAdded={this.addItem} />
    </div>
  }

}
export default App;