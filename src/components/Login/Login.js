import React from "react";
import PropTypes from "prop-types";
import { Button, Input } from '..'
import { Form, Checkbox } from 'antd';

const Login = ({onFinish}) => {
  const [form] = Form.useForm();

  const onFinishForm = (values) => {
    console.log('Success:', values);
    onFinish(values)
  };

  return <>
    <h3>Oturumunuzu Başlatın</h3>
    <Form form={form} onFinish={onFinishForm}>
      <Form.Item
        name="userName"
        rules={[
          {
            required: true,
            message: 'Kullanıcı adınızı giriniz.',
          },
        ]}
      >
        <Input placeholder="Kullanıcı Adınız" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Şifrenizi giriniz.',
          },
        ]}
      >
        <Input placeholder="Şifreniz" type="password" />
      </Form.Item>
      <Button block size="large" htmlType="submit">Giriş</Button>
      <Form.Item
        name="checkbox"
        valuePropName="checked"
      >
        <Checkbox>Beni Hatırla</Checkbox>
      </Form.Item>
    </Form>
  </>
}

export default Login;

Login.propTypes = {
  onFinish: PropTypes.func
};
