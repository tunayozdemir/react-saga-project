import React, { useState } from "react";
import { Button } from '../'
import { Form, Radio } from 'antd';

const ServiceSelection = () => {
  const [value, setValue] = useState();
  const [form] = Form.useForm();

  const onChange = ({ target: { value } }) => {
    setValue(value);
  };

  const onFinishForm = (values) => {
    localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9obiBEb2UiLCJjb21wYW55IjoiVGVzdCBDb21wYW55IiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOjE3NjExODE2ODF9.1J-974ec2z16NjeOsywM5cf7Lm7HU5s5feIZPjxcqno')
    document.location.href = "/";
    console.log('Success:', values);
  };

  const options = [
    {
      label: 'FÇM',
      value: 'FÇM',
    },
    {
      label: 'DÇM',
      value: 'DÇM',
    },
    {
      label: 'EÇM',
      value: 'EÇM',
    }
  ];

  return <>
    <h3>Servis Seçimi</h3>
    <Form form={form} onFinish={onFinishForm} className="login__service-selection">
      <Form.Item name="service-selection"
        rules={[
          {
            required: true,
            message: 'Servis seçimi yapınız.',
          },
        ]}>
        <Radio.Group options={options} onChange={onChange} value={value} optionType="button" />
      </Form.Item>
      <Button block size="large" htmlType="submit">Onayla</Button>
    </Form>

  </>
}

export default ServiceSelection;
