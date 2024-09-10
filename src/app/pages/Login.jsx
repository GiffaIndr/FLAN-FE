import React from 'react'
import {AuthProvider} from '../context/AuthContext.jsx';
import Index from '../components/auth/Login/Index.jsx';
export default function Login() {
  return (
    <>
      <AuthProvider>
        <Index/>
      </AuthProvider>
    </>
  )
}
