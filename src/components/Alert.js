import React, { useEffect } from "react";
import PropTypes from "prop-types";

const Alert = ({ type, msg, removeAlert, list }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [list]);
  return <p className={` alert alert-${type}`}> {msg}</p>;
};

Alert.prototype = {
  type: PropTypes.string,
  msg: PropTypes.string,
  removeAlert: PropTypes.func,
};

export default Alert;
