import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  // const { login, avatar_url, html_url } = props.user;
  return (
    <div className="card text-center">
      <img src={avatar_url} style={{ width: "75px" }} alt="" />
      <h3>{login}</h3>
      <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
        Profile
      </Link>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
