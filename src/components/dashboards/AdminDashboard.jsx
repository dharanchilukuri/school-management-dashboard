import React from 'react';
import { Layout, Menu } from 'antd';
import { Link, Routes, Route } from 'react-router-dom'; // Import Link and Routes
import { DashboardIcons } from '../common/DashboardIcons'; // Import icons

// Import Admin Pages
import AdminProfile from '../pages/Admin/Profile'; // Assuming Admin Profile page
import StudentsOverview from '../pages/Admin/StudentsOverview'; // Assuming Students Overview page
import TeachersOverview from '../pages/Admin/TeachersOverview'; // Assuming Teachers Overview page
import Timetables from '../pages/Admin/Timetables'; // Assuming Timetables page
import Announcements from '../pages/Announcements'; // Assuming shared Announcements page

const { Sider, Content, Footer } = Layout;

const AdminDashboard = () => {
  const menuItems = [
    {
      key: '1',
      icon: DashboardIcons.Profile,
      label: <Link to="/admin-dashboard/profile">Admin-Profile</Link>, // Link to Admin Profile
    },
    {
      key: '2',
      icon: DashboardIcons.StudentsOverview,
      label: <Link to="/admin-dashboard/students-overview">Students Overview</Link>, // Link to Students Overview
    },
    {
      key: '3',
      icon: DashboardIcons.TeachersOverview,
      label: <Link to="/admin-dashboard/teachers-overview">Teachers Overview</Link>, // Link to Teachers Overview
    },
    {
      key: '4',
      icon: DashboardIcons.Timetable,
      label: <Link to="/admin-dashboard/timetables">Timetables</Link>, // Link to Timetables
    },
    {
      key: '5',
      icon: DashboardIcons.Announcements,
      label: <Link to="/admin-dashboard/announcements">Announcements</Link>, // Link to Announcements
    },
  ];

  return (
    <Layout className="min-h-screen">
      <Sider theme="dark" className="bg-gray-900">
        <div className="text-white text-center py-4 text-lg font-semibold">
          School Logo
        </div>
        
        <Menu theme="dark" mode="inline" items={menuItems} className="bg-gray-900" />
      </Sider>
      
      <Layout>
        <Content className="p-6 text-center mt-28 font-bold text-lg">          
          <Routes>
          <Route path="/" element={   <h1 className="text-2xl font-bold text-center">Welcome to the Student Dashboard</h1> } />
            <Route path="/profile" element={<AdminProfile />} />
            <Route path="/students-overview" element={<StudentsOverview />} />
            <Route path="/teachers-overview" element={<TeachersOverview />} />
            <Route path="/timetables" element={<Timetables />} />
            <Route path="/announcements" element={<Announcements />} />
          </Routes>
          {/* Additional components for displaying admin data can go here */}
        </Content>
        
        <Footer className="text-center bg-gray-200 py-4">
          School Management Dashboard ©2024
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AdminDashboard;
