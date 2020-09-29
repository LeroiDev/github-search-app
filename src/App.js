import React, { Fragment } from "react";
import Navbar from "./components/layout/Navbar";
// USERS
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import Alert from "./components/layout/alert/Alert";
// single user
import User from "./components/users/User";
// page
import About from "./components/pages/About";
// routing
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// CONTEXT STATE MANAGEMENT
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";
import "./App.css";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route
                  exact
                  path="/"
                  render={(props) => (
                    <Fragment>
                      <Search />
                      <Users />
                    </Fragment>
                  )}
                />
                <Route path="/about" component={About} />
                <Route exact path="/user/:login" component={User} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
