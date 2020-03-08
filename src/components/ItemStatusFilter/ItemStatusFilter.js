import React from "react";
import "./ItemStatusFilter.css"

class ItemStatusFilter extends React.Component {

  render() {
    let buttons = this.props.filters.map(({name, key}) => {
      let classNames = this.props.activeFilter === key ? 'btn-dark' : 'btn-outline-secondary';
      return (
        <button
          key={key}
          type="button"
          className={`btn ${classNames}`}
          onClick={() => this.props.onChangeFilter(key)}
        >
          {name}
        </button>
      )
    });

    return <div className="btn-group">
      {buttons}
    </div>
  }
}

export default ItemStatusFilter;