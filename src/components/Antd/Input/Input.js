/* eslint-disable */
import React from "react";
import { Input as AntdInput } from "antd";
import PropTypes from "prop-types";
import classNames from "classnames";
// import { FloatLabel, MaskedInput } from "../../../../components";
import { FloatLabel, MaskedInput } from "../../";
import "./Input.scss";

const Input = ({ value, placeholder, className, ...props }) => {
  return (
    <FloatLabel label={placeholder} name={placeholder} value={value} className={classNames(className)}>
      <AntdInput {...props} value={value}>
      </AntdInput>
    </FloatLabel>

  );
};

const MaskInput = ({ mask, title, value, className, ...props }) => {

  return (
    <FloatLabel label={title} name={title} value={value} className={classNames(className)}>
      <MaskedInput  {...props}  value={value} mask={mask} />
    </FloatLabel>
  );
};


Input.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
};
MaskInput.propTypes = {
  mask: PropTypes.any,
  className: PropTypes.string,
  value: PropTypes.string,
  title: PropTypes.string
};

MaskInput.defaultProps = {
  mask: "00/00/0000",
};

Input.MaskInput = MaskInput;
export default Input;
