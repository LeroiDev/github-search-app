import React, { useState, Fragment } from "react";
import Navbar from "./components/layout/Navbar";
// USERS
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import Alert from "./components/layout/alert/Alert";
// single user
import User from "./components/users/User";
// page
import About from "./components/pages/About";
import axios from "axios";
// routing
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// CONTEXT STATE MANAGEMENT
import GithubState from "./context/github/GithubState";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  // search users GitHub - moved to context

  // get single github user
  const getUser = async (userName) => {
    setLoading(true);
    const response = await axios.get(
      `https://api.github.com/users/${userName}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setUser(response.data);
    setLoading(false);
  };
  // get user REPOS
  const getUserRepos = async (userName) => {
    setLoading(true);
    const response = await axios.get(
      `https://api.github.com/users/${userName}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setRepos(response.data);
    setLoading(false);
  };

  // Clear users button
  const clearUsersBtn = () => {
    setUsers([]);
    setLoading(false);
  };
  // handle alert popup for empty search api error
  const setAlertHandler = (msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  return (
    <GithubState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Fragment>
                    <Search
                      clearUsers={clearUsersBtn}
                      showClearBtn={users.length > 0 ? true : false}
                      setAlert={setAlertHandler}
                    />
                    <Users users={users} loading={loading} />
                  </Fragment>
                )}
              />
              <Route path="/about" component={About} />
              <Route
                exact
                path="/user/:login"
                render={(props) => (
                  <User
                    {...props}
                    getUser={getUser}
                    user={user}
                    loading={loading}
                    getUserRepos={getUserRepos}
                    repos={repos}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
