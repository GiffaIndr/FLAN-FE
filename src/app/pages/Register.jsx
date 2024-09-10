import React from "react";
import {AuthProvider} from '../context/AuthContext.jsx'
import Index from "../components/auth/Register/Index.jsx";
export default function Register() {
  return (
    <>
      <AuthProvider>
        <Index />
      </AuthProvider>
    </>
  );
}
