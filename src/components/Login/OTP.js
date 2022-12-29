import React from 'react'
import PropTypes from "prop-types";
import { Form } from 'antd';
import { Button, OtpInputs } from '../'

const OTP = ({ onFinish }) => {
  const [form] = Form.useForm();
  const onFinishForm = (values) => {
    console.log('Success:', values);
    onFinish(values)
  };
  return (
    <>
      <h3>Sms Onay</h3>
      <Form form={form} onFinish={onFinishForm}
      >
        <Form.Item name="otp-inputs"
          rules={[
            { required: true, min: 6, pattern: /^\d{6,}$/, message: "Please input your otp pass!", },
          ]}
        >
          <OtpInputs length={[0, 1, 2, 3, 4, 5]} />
        </Form.Item>
        <Button block size="large" className="mt-65" htmlType="submit">Onayla</Button>
      </Form>
    </>
  )
}
OTP.propTypes = {
  onFinish: PropTypes.func
};

export default OTP