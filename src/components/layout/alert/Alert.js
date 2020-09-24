import React from "react";

const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div style={{ color: "#fff" }} className={`alert ${alert.type}`}>
        <i className="fas fa-info-circle"></i>
        {alert.msg}
      </div>
    )
  );
};

export default Alert;
