import React from 'react';
import './AddItem.css'

class AddItem extends React.Component {

  state = {
    title: ''
  }

  onChange = (e) => {
    this.setState({
      title: e.target.value,
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.onItemAdded(this.state.title);
    this.setState({
      title: "",
    })
  }

  render() {
    return (
      <form
        className={'bottom-block d-flex'}
        onSubmit={this.onSubmit}
        >
        <input
          type="text"
          className={"form-control"}
          onChange={this.onChange}
          placeholder={"What needs to be done"}
          value={this.state.title}
        />
        <button
          type="submit"
          className="btn btn-primary"
          >
          Add Item
        </button>
      </form>
    )
  }
}

export default AddItem;