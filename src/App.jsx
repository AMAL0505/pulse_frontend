import React from 'react'
import RegisterPage from './pages/RegisterPage.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx';
import InsHomePage from './pages/instructor/InsHomePage.jsx';
import InsCoursePage from './pages/instructor/InsCoursePage.jsx';
import { Navigate } from "react-router-dom";
import StudHomePage from './pages/student/StudHomePage.jsx';
import StudCoursePage from './pages/student/StudCoursePage.jsx';
import UnauthorizedPage from './pages/error/UnauthorizedPage.jsx';
import NotFoundPage from './pages/error/NotFoundPage.jsx';
import AddNewCoursePage from './pages/instructor/AddNewCoursePage.jsx';
import InsProfilePage from './pages/instructor/InsProfilePage.jsx';
import AddNewLesson from './pages/instructor/AddNewLesson.jsx';


function App() {

  function PrivateRoute({ children, role }) {
    const token = localStorage.getItem('accessToken');
    const userRole = localStorage.getItem('userRole');

    if (!token) return <Navigate to="/" />;
    if (userRole !== role) return <Navigate to="/unauthorized" />;
    return children;
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="register/" element={<RegisterPage />} />

          {/* Instructor Routes */}
          <Route path="instructor/home" element={
            <PrivateRoute role="instructor">
              <InsHomePage />
            </PrivateRoute>
          } />
          <Route path="instructor/courses" element={
            <PrivateRoute role="instructor">
              <InsCoursePage />
            </PrivateRoute>
          } />
          <Route path="instructor/addcourse" element={
            <PrivateRoute role="instructor">
              <AddNewCoursePage />
            </PrivateRoute>
          } />
          <Route path="instructor/profile" element={
            <PrivateRoute role="instructor">
              <InsProfilePage />
            </PrivateRoute>
          } />
          <Route path='instructor/addlesson' element = {
            <PrivateRoute role="instructor">
              <AddNewLesson />
            </PrivateRoute>
          } />
          {/* Student Routes */}
          <Route path="student/home" element={
            <PrivateRoute role="student">
              <StudHomePage />
            </PrivateRoute>
          } />
          <Route path="student/courses" element={
            <PrivateRoute role="student">
              <StudCoursePage />
            </PrivateRoute>
          } />

          {/* Fallback route */}
          <Route path="unauthorized" element={<UnauthorizedPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App