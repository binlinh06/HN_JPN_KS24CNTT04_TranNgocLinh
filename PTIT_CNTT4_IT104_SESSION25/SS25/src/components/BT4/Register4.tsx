import React from "react";
import { Form, Input, Button, Typography, Card } from "antd";

const { Title, Text } = Typography;

const Register4: React.FC = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#f5f5f5",
      }}
    >
      <Card style={{ width: 400, borderRadius: 8, boxShadow: "0 2px 8px #f0f1f2" }}>
        <Title level={3} style={{ textAlign: "center" }}>
          Create account
        </Title>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Your email"
            name="email"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "Invalid email format!" },
            ]}
          >
            <Input placeholder="name@company.com" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="••••••••" />
          </Form.Item>

          <Form.Item
            label="Confirm password"
            name="confirmPassword"
            dependencies={["password"]}
            rules={[
              { required: true, message: "Please confirm your password!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("Passwords do not match!")
                  );
                },
              }),
            ]}
          >
            <Input.Password placeholder="••••••••" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Create an account
            </Button>
          </Form.Item>
        </Form>

        <div style={{ textAlign: "center" }}>
          <Text>Already have an account? </Text>
          <a href="/login">Login here</a>
        </div>
      </Card>
    </div>
  );
};

export default Register4;
