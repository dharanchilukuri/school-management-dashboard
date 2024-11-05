import React from 'react';
import { Menu, Button } from 'antd';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <Menu mode="horizontal" theme="dark">
      <Menu.Item key="home" onClick={() => navigate('/')}>
        Home
      </Menu.Item>
      <Menu.Item key="logout">
        <Button type="primary" onClick={handleLogout}>Logout</Button>
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
