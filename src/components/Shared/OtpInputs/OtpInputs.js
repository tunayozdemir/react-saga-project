import React, { useRef, useEffect, useState } from "react";
import classNames from "classnames";
import { Input as AntdInput } from 'antd';
import PropTypes from "prop-types";
import './OtpInputs.scss';

const OtpInputs = ({ length, className, onChange }) => {
  const inputs = useRef([]);
  /* eslint-disable*/
  const [values, setValues] = useState([]);

  const onKeyDown = (e, slot) => {
    const key = e.keyCode;
    if (e.target.value.length > 0 && key !== 8 && key !== 46) {
      if (inputs.current[slot + 1]) {
        inputs.current[slot + 1].focus();
      }
    }
    else if (e.target.value.length <= 0 && key === 8) {
      if (inputs.current[slot - 1]) {
        inputs.current[slot - 1].focus();
      }
    }
  }

  useEffect(() => {
    inputs.current[0].focus();
  }, []);

  function onChangeXX(e, index) {

    setValues((prevState)=>{
      let xxx = [...prevState];
      xxx[index]=e.target.value
      onChange(xxx.join(""))
      return xxx
    })

  }

  return (
    <div className={classNames("otp-inputs", className)}>
        {length && length.map((item, key) => {
          return <AntdInput
                        key={key}
                        maxLength={1}
                        type="text"
                        onKeyUp={e => onKeyDown(e, item)}
                        onChange={e => onChangeXX(e,key)}
                        ref={ref => inputs.current.push(ref)}
          />
        })}
    </div>
  );
};

OtpInputs.propTypes = {
  length: PropTypes.array,
  onChange: PropTypes.func,
  className: PropTypes.string
};

export default OtpInputs;
