import React from "react";
import './SearchPanel.css'

const SearchPanel = ({onChange}) => {
  return <input
    className={"form-control search-input"}
    placeholder={"type to search"}
    onChange={onChange}
  />
}

export default SearchPanel