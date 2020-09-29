import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/alert/AlertContext";

const Search = () => {
  const githubContext = useContext(GithubContext);
  const [text, setText] = useState("");
  const alertContext = useContext(AlertContext);
  const { setAlertHandler } = alertContext;

  const onChangeSearch = (e) => {
    setText(e.target.value);
  };

  const onSubmitSearch = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlertHandler("Please enter a username", "light");
    } else {
      githubContext.searchUsers(text);
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
      {githubContext.users.length > 0 && (
        <button
          onClick={githubContext.clearUsersBtn}
          className="btn btn-light btn-block"
        >
          Clear users...
        </button>
      )}
    </div>
  );
};

export default Search;
