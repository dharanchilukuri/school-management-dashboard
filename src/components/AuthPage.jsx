import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Input, Select, Typography } from 'antd';
import { useAuth } from '../context/AuthContext';

const { Title } = Typography;
const { Option } = Select;

const AuthPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [role, setRole] = useState(null);

  const handleLogin = () => {
    if (role) {
      login(role);
      if (role === 'student') navigate('/student-dashboard');
      else if (role === 'teacher') navigate('/teacher-dashboard');
      else if (role === 'admin') navigate('/admin-dashboard');
    } else {
      alert('Please select a role');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-6">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
        <Title level={2} className="text-center">School Management System</Title>
        <Select
          placeholder="Select your role"
          onChange={setRole}
          className="w-full"
        >
          <Option value="student">Student</Option>
          <Option value="teacher">Teacher</Option>
          <Option value="admin">Admin</Option>
        </Select>
        <Button type="primary" block onClick={handleLogin}>
          Log In
        </Button>
      </div>
    </div>
  );
};

export default AuthPage;
