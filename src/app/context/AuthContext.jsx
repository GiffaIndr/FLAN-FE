import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../api/config";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({
    username: '',
    photo_profile: '',
    caption: '',
    description: '',
    role: '',
    name: '',
    email: '',
});
  const navigate = useNavigate();

  const clearMessages = () => {
    setTimeout(() => {
      setError(null);
      setSuccess(null);
    }, 3000);
  };

  const register = async (values, form) => {
    setLoading(true);
    try {
      const response = await axios.post(`${API_URL}/auth/register`, values);
      setSuccess(response.data.message);
      form.resetFields();
      clearMessages();
    } catch (error) {
      setError(error.response?.data || "Ada yang salah, silahkan cek kembali");
      clearMessages();
    } finally {
      setLoading(false);
    }
  };
  
  const googleLogin = async (token) => {
    setLoading(true);
    try {
      const response = await axios.post(`${API_URL}/auth/google`, { token });
      const { token: jwtToken } = response.data;
      localStorage.setItem("token", jwtToken);
      setSuccess("Sukses login dengan google");
      navigate("/home");
    } catch (error) {
      setError(
        error.response?.data?.message || "Ada yang salah, silahkan cek kembali"
      );
      clearMessages();
    } finally {
      setLoading(false);
    }
  };

  const login = async (values) => {
    setLoading(true);
    try {
      const response = await axios.post(`${API_URL}/auth/login`, values);
      const { token } = response.data.data;
      console.log("Token yang diterima:", token); 
      localStorage.setItem("token", token);
      setSuccess("Sukses login");
      navigate("/home");
    } catch (error) {
      setError(
        error.response?.data?.message || "Ada yang salah, silahkan cek kembali"
      );
      clearMessages();
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        `${API_URL}/logout`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      localStorage.removeItem("token"); // Hapus token dari localStorage
      setUserInfo({}); // Kosongkan informasi user
      setSuccess("Sukses logout");
      navigate("/login"); // Redirect ke halaman login setelah logout
    } catch (error) {
      setError(
        error.response?.data?.message || "Ada yang salah, silahkan cek kembali"
      );
      clearMessages();
    } finally {
      setLoading(false);
    }
  };  
  
  const userInf = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      console.log("Token yang digunakan untuk permintaan:", token); 
      const response = await axios.get(`${API_URL}/user`, {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });
      const {
        username,
        name,
        email,
        photo_profile,
        description,
        caption,
        role,
      } = response.data.data.user;
      setUserInfo({
        username,
        name,
        email,
        photo_profile,
        description,
        caption,
        role,
      });
    } catch (error) {
      console.error("API Error:", error.response?.data || error);
      setError(
        error.response?.data?.message || "Ada yang salah, silahkan cek kembali"
      );
      clearMessages();
    } finally {
      setLoading(false);
    }
  };
  
  
  

  useEffect(() => {
    userInf();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        register,
        login,
        logout, 
        googleLogin,
        userInfo,
        error,
        success,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
export default AuthContext;