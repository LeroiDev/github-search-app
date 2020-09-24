import React, { useState } from "react";
import PropTypes from "prop-types";

const Search = ({ searchUsers, showClearBtn, clearUsers, setAlert }) => {
  const [text, setText] = useState("");

  const onChangeSearch = (e) => {
    setText(e.target.value);
  };

  const onSubmitSearch = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter a username", "light");
    } else {
      searchUsers(text);
      setText("");
    }
  };
  return (
    <div>
      <form onSubmit={onSubmitSearch} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search users..."
          value={text}
          onChange={onChangeSearch}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {showClearBtn && (
        <button onClick={clearUsers} className="btn btn-light btn-block">
          Clear users...
        </button>
      )}
    </div>
  );
};
Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClearBtn: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default Search;
