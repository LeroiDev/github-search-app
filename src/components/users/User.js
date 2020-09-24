import React, { useEffect, Fragment } from "react";
import Spinner from "../layout/spinner/Spinner";
import PropTypes from "prop-types";
import Repos from "../repos/Repos";
import { Link } from "react-router-dom";

const User = ({ user, loading, getUser, getUserRepos, match, repos }) => {
  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    company,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;
  return (
    <div className="container">
      {loading && <Spinner />}
      <h2>Name: {name}</h2>
      <Link to="/" className="btn btn-block btn-dark">
        Back to search...
      </Link>
      Hireable:
      {hireable ? (
        <i className="fas fa-check text-success" />
      ) : (
        <i className="fas fa-times-circle text-danger" />
      )}
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            className="round-img"
            style={{ width: "160px" }}
            alt=""
          />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} className="btn btn-light my-1">
            Visit this profile on GitHub
          </a>
          <ul>
            <li>{login && <strong>Username: {login}</strong>}</li>
            <li>{company && <strong>Company: {company}</strong>}</li>
            <li>{blog && <strong>Website: {blog}</strong>}</li>
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">Followers: {followers}</div>
        <div className="badge badge-success">Following: {following}</div>
        <div className="badge badge-dark">Public Repos: {public_repos}</div>
        <div className="badge badge-danger">Public Gists: {public_gists}</div>
      </div>
      <Repos repos={repos} />
    </div>
  );
};

// PropTypes
User.propTypes = {
  user: PropTypes.object.isRequired,
  getUser: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  getUserRepos: PropTypes.func.isRequired,
};

export default User;
