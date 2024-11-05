import React from 'react';
import { Layout, Menu } from 'antd';
import { DashboardIcons } from '../common/DashboardIcons'; // Import icons
import { Link, Routes, Route } from 'react-router-dom';

// Import Student Pages
import Profile from '../pages/Student/Profile';
import Timetable from '../pages/Student/Timetable';
import Attendance from '../pages/Student/Attendance';
import Announcements from '../pages/Announcements';

const { Sider, Content, Footer } = Layout;

const StudentDashboard = () => {
    const menuItems = [
        {
            key: '1',
            icon: DashboardIcons.Profile,
            label: <Link to="profile">Profile</Link>,  // Removed the leading slash
        },
        {
            key: '2',
            icon: DashboardIcons.Timetable,
            label: <Link to="timetable">Timetable</Link>, 
        },
        {
            key: '3',
            icon: DashboardIcons.Announcements,
            label: <Link to="announcements">Announcements</Link>,
        },
        {
            key: '4',
            icon: DashboardIcons.Attendance,
            label: <Link to="attendance">Attendance</Link>, 
        },
    ];

    return (
        <Layout className="h-screen">
            <Sider theme="dark" className="bg-gray-800">
                <div className="text-white text-center py-4 text-lg font-semibold">School Logo</div>
                <Menu theme="dark" mode="inline" className="bg-gray-800" items={menuItems} />
            </Sider>
            <Layout>
                <Content className="p-6 text-center mt-28 font-bold text-lg">
                    <Routes>
                        <Route path="/" element={   <h1 className="text-2xl font-bold text-center">Welcome to the Student Dashboard</h1> } />
                        <Route path="profile" element={<Profile />} />
                        <Route path="timetable" element={<Timetable />} />
                        <Route path="attendance" element={<Attendance />} />
                        <Route path="announcements" element={<Announcements />} />
                    </Routes>
                </Content>
                <Footer className="text-center">School Management Dashboard ©2024</Footer>
            </Layout>
        </Layout>
    );
};

export default StudentDashboard;
