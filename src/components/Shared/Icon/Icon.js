import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Index = ({ icon, className, onClick, color, size, ...props }) => {
  return (
    <i
      onClick={onClick}
      className={classNames("icon", "icon-" + icon, className)}
      style={{ fontSize: `${size}px`, color: `${color}` }}
      {...props}
    ></i>
  );
};

Index.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.string,
  size: PropTypes.string,
};
Index.defaultProps = {
  className: "",
  onClick: () => { },
  // color: "inherit",
  // size: "inherit",
};
export default Index;
