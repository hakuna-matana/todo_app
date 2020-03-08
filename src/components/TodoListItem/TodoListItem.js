import React from "react";
import './TodoListItem.css'

class TodoListItem extends React.Component {
  render() {
    let {id, title, onDeleted, onToggleImportant, onToggleDone, important, done} = this.props;

    let classNames = `todo-list-item`;
    if (done) {
      classNames += ' done'
    }
    if (important) {
      classNames += ' important'
    }

    let importantClassName = important ? 'btn-success' : 'btn-outline-success';

    return (
      <div className={classNames}>
        <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id={`customControlAutosizing_${id}`} />
            <label
              className="custom-control-label size-lg"
              htmlFor={`customControlAutosizing_${id}`}
              onClick={() => onToggleDone(id)}
            />
        </div>
        <span
          className={"todo-list-item-title"}
        >
          {title}
        </span>
        <div className={"btn-group"}>
          <button
            type="button"
            className="btn btn-outline-danger btn-sm"
            onClick={() => onDeleted(id)}
          >
            <i className="fa fa-trash-o" />
          </button>
          <button
            type="button"
            className={`btn ${importantClassName} btn-sm`}
            onClick={() => onToggleImportant(id)}
          >
            <i className="fa fa-exclamation" />
          </button>
        </div>
      </div>
    )
  }
}

export default TodoListItem