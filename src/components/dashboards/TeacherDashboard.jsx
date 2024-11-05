import React from 'react';
import { Layout, Menu } from 'antd';
import { Link, Routes, Route } from 'react-router-dom'; // Import Link and Routes
import { DashboardIcons } from '../common/DashboardIcons'; // Import icons

// Import Teacher Pages
import Profile from '../pages/Teacher/Profile';
import Timetable from '../pages/Teacher/Timetable';
import Announcements from '../pages/Announcements'; // Assuming this is shared
import StudentsOverview from '../pages/Teacher/StudentsOverview'; // Add path for Students Overview

const { Sider, Content, Footer } = Layout;

const TeacherDashboard = () => {
  const menuItems = [
    {
      key: '1',
      icon: DashboardIcons.Profile,
      label: <Link to="/teacher-dashboard/profile">Profile</Link>, // Link to Profile
    },
    {
      key: '2',
      icon: DashboardIcons.Timetable,
      label: <Link to="/teacher-dashboard/timetable">Timetable</Link>, // Link to Timetable
    },
    {
      key: '3',
      icon: DashboardIcons.Announcements,
      label: <Link to="/teacher-dashboard/announcements">Announcements</Link>, // Link to Announcements
    },
    {
      key: '4',
      icon: DashboardIcons.StudentsOverview,
      label: <Link to="/teacher-dashboard/students-overview">Students Overview</Link>, // Link to Students Overview
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
            <Route path="/" element={   <h1 className="text-2xl font-bold text-center">Welcome to the Teacher Dashboard</h1> } />
            <Route path="/profile" element={<Profile />} />
            <Route path="/timetable" element={<Timetable />} />
            <Route path="/announcements" element={<Announcements />} />
            <Route path="/students-overview" element={<StudentsOverview />} />
          </Routes>
          {/* Additional components for displaying teacher data can go here */}
        </Content>
        
        <Footer className="text-center bg-gray-200 py-4">
          School Management Dashboard ©2024
        </Footer>
      </Layout>
    </Layout>
  );
};

export default TeacherDashboard;
