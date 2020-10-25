import React from "react";
import "./style.css";

function SearchForm(props) {
  return (
    <div className="row search">
      <div className="offset-md-4 col-md-4">
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="term"
          list="term"
          type="text"
          className="form-control"
          placeholder="Filter by name"
          id="term"
        />
      </div>
    </div>
  );
}

export default SearchForm;
