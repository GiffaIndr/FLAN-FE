import React, { useContext, useEffect } from "react";
import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, notification, Alert } from "antd";
import Marquee from "react-fast-marquee";
import AuthContext from "../../../context/AuthContext";
import "./style.css";

export default function Formregister() {
  const { register, error, success, loading } = useContext(AuthContext);
  const [form] = Form.useForm();

  const openNotification = (type, message, description) => {
    notification[type]({
      message,
      description,
      placement: 'topRight',
    });
  };

  useEffect(() => {
    if (success) {
      openNotification('success', 'Success', success);
    }
    if (error) {
      openNotification('error', 'Error', 'Email atau username telah digunakan');
    }
  }, [success, error]);

  const onFinish = (values) => {
    register(values, form);
  };

  return (
    <>
      <div className="text-center">
        <Form
          form={form}
          name="normal_login"
          className="login-form w-96"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <div>
            <Form.Item>
              <h1 className="text-white text-[30px] font-extrabold">Daftar</h1>
              <p className="font-medium text-[18px] text-white">
                Jangan lupa cek kembali kata sandinya ya!!
              </p>
              <p className="font-medium text-[14px] text-white">
                sudah memiliki akun?{" "}
                <a href="/login" className="italic">
                  masuk!
                </a>
              </p>
            </Form.Item>
          </div>
          <Form.Item
            name="name"
            rules={[
              {
                required: true,
                message: "Tolong isi namanya!",
              },
            ]}
          >
            <Input
              prefix={
                <UserOutlined className="site-form-item-icon text-gray-300 text-[23px]" />
              }
              className="h-11 ext-[15px]"
              placeholder="Nama"
            />
          </Form.Item>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Tolong isi usernamennya!",
              },
            ]}
          >
            <Input
              prefix={
                <UserOutlined className="site-form-item-icon text-gray-300 text-[23px]" />
              }
              className="h-11 ext-[15px]"
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Tolong isi Emailnya!",
              },
            ]}
          >
            <Input
              prefix={
                <MailOutlined className="site-form-item-icon text-gray-300 text-[23px]" />
              }
              type="email"
              className="h-11 ext-[15px]"
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Tolong isi kata sandinya!",
              },
            ]}
          >
            <Input
              prefix={
                <LockOutlined className="site-form-item-icon  text-gray-300 text-[23px]" />
              }
              type="password"
              className="h-11 text-[15px]"
              placeholder="Kata Sandi"
            />
          </Form.Item>
            <Alert
              showIcon
              className="bg-transparent border-transparent text-white"
              message={
                <Marquee pauseOnHover gradient={false}>
                  kata sandi harus lebih dari 8 huruf, tidak boleh
                  menggunakan email yang sudah terdaftar...
                </Marquee>
              }
            />
            <Form.Item>
              <Button
                size={"large"}
                type=""
                htmlType="submit"
                loading={loading}
                className="login-form-button
                 bg-transparent text-white-600 
                 text-white align-center
                 font-bold border-[2px] border-white-solid rounded
                  hover:bg-red-600 hover:text-white hover:border-transparent
                   transition ease-in duration-200 transform hover:-translate-y-1
                    active:translate-y-0"
                block
              >
                Masuk
              </Button>
            </Form.Item>
        </Form>
      </div>
    </>
  );
}
