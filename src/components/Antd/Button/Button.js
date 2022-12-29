import React from 'react';
import './Button.scss';
import classNames from "classnames";
import { Button as ButtonAntd } from "antd";
import PropTypes from "prop-types";
// import { Icon } from "../../../../components"
import { Icon } from "../../"

const Button = ({ iconLeft, iconRight, outline, ...props }) => {

  const extraSizes = {
    'xsmall': 'ant-btn-xs',
    'xlarge': 'ant-btn-xl'
  }

  return <ButtonAntd {...props}
    className={classNames(
      props.className,
      extraSizes[props.size],
      {
        'ant-btn--left-icon': iconLeft,
        'ant-btn--right-icon': iconRight,
        'ant-btn--no-text': !props.children,
        'ant-btn-outline': outline
      },
    )}>
    {iconLeft ? <Icon icon={iconLeft} /> : null}
    {props.children}
    {iconRight ? <Icon icon={iconRight} /> : null}
  </ButtonAntd>
}

Button.propTypes = {
  className: PropTypes.string,
  iconLeft: PropTypes.string,
  iconRight: PropTypes.string,
  size: PropTypes.any,
  children: PropTypes.any,
  type: PropTypes.oneOf(['info', 'success', 'basic', 'danger', 'warning', 'outline', 'primary', 'icon']),
  outline: PropTypes.bool
};

Button.defaultProps = {
  iconLeft: null,
  iconRight: null,
  outline: false
}

export default Button;
