import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./GithubContext";
import GithubReducer from "./GithubReducer";
import {
  SEARCH_USERS,
  GET_USER,
  GET_REPOS,
  CLEAR_USERS,
  SET_LOADING,
  SET_ALERT,
  REMOVE_ALERT,
} from "../Types";

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    alert: null,
  };
  const [state, dispatch] = useReducer(GithubReducer, initialState);
  // Search Users

  // Get User

  // get Repos

  // Clear Users Button

  // Set Loading?

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
