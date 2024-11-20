import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input, Form, message } from "antd";
import styled from "styled-components";

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5;
`;

const LoginForm = styled(Form<LoginFormValues>)`
  max-width: 300px;
  width: 100%;
  padding: 24px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

interface LoginFormValues {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = (values: LoginFormValues) => {
    setLoading(true);

    const { username, password } = values;

    if (username === "ikmaslahat" && password === "ikmaslahat123!") {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      message.success("Login successful!");
      setLoading(false);
      navigate("/admin/manager");
    } else {
      message.error("Invalid username or password");
      setLoading(false);
    }
  };

  return (
    <LoginContainer>
      <LoginForm name="login" onFinish={handleLogin}>
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input placeholder="Username" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block loading={loading}>
            Log in
          </Button>
        </Form.Item>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
