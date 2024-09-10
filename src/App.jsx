import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './app/pages/Landing';
import Login from './app/pages/Login';
import Register from './app/pages/Register';
import Main from './app/pages/Main';
import Group from './app/pages/Group';
import ProtectedRoute from './app/routes/ProtectedRoute';
import { AuthProvider } from './app/context/AuthContext';
import Profilepict from './app/pages/Profilepict';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          
          {/* Protected Routes */}
            <Route path="/home" element={<Main />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/home/group/:id" element={<Group />} />
            <Route path="/profilepict" element={<Profilepict />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
