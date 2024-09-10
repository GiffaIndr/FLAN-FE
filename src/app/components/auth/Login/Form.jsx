import React, { useContext, useEffect } from "react";
import { LockOutlined, MailOutlined, GoogleOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, notification } from "antd";
import { GoogleLogin } from "react-google-login";
import AuthContext from "../../../context/AuthContext";
import "./style.css";

const CLIENT_ID = '491286289015-ii424hlsmj0d675u9tom681h94fm721v.apps.googleusercontent.com';

export default function Formlogin() {
  const { login, success, error, loading, googleLogin } = useContext(AuthContext);
  const [form] = Form.useForm();

  const openNotification = (type, message, description) => {
    notification[type]({
      message,
      description,
      placement: "topRight",
    });
  };

  useEffect(() => {
    if (success) {
      openNotification("success", "Success", success);
    }
    if (error) {
      openNotification("error", "Error", error);
    }
  }, [success, error]);

  const onFinish = (values) => {
    login(values);
  };

  const onGoogleSuccess = async (response) => {
    const token = response.tokenId;
    googleLogin(token);
  };

  const onGoogleFailure = async (response) => {
    openNotification('error', 'Google login gagal', 'Gagal login dengan Google');
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
              <h1 className="text-white text-[30px] font-extrabold">Masuk</h1>
              <p className="font-medium text-[18px] text-white">
                Selamat datang kembali!!
              </p>
              <p className="font-medium text-[14px] text-white">
                Tidak memiliki akun?{" "}
                <a href="/register" className="italic">
                  Daftar!
                </a>
              </p>
            </Form.Item>
          </div>
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
                <LockOutlined className="site-form-item-icon text-gray-300 text-[23px]" />
              }
              type="password"
              className="h-11 text-[15px]"
              placeholder="Kata Sandi"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item>
              <Button
                size={"large"}
                type=""
                loading={loading}
                htmlType="submit"
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
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox className="text-white font-medium mt-3">
                  Remember me
                </Checkbox>
              </Form.Item>
              <Form.Item>
                <div className="flex items-center ">
                  <div className="border-t border-1 border-white flex-grow"></div>
                  <div className="px-3 text-white font-bold text-medium text-[18px]">
                    Atau
                  </div>
                  <div className="border-t border-1 border-white flex-grow"></div>
                </div>
                <div className="text-center">
                  <GoogleLogin 
                    clientId={CLIENT_ID}
                    buttonText="Masuk dengan Google"
                    onSuccess={onGoogleSuccess}
                    onFailure={onGoogleFailure}
                    cookiePolicy={'single_host_origin'}
                    uxMode="redirect" 
                    render={renderProps => (
                      <GoogleOutlined
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                        size={4}
                        className="text-white text-[50px] hover:text-[#6df5ff]"
                      />
                    )}
                  />
                </div>
              </Form.Item>
            </Form.Item>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}
