import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import VidecLanding from './pages/VidecLanding';
import ShofuLanding from './pages/ShofuLanding';
import SolutionLanding from './pages/SolutionLanding';
import AdminDashboard from './pages/admin/AdminDashboard';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShofuLanding />} />
        <Route path="/videc2026" element={<VidecLanding />} />
        {/* Admin CMS Portal */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/*" element={<AdminDashboard />} />
        {/* 301 Permanent Redirect for legacy link */}
        <Route 
          path="/giai-phap/phuc-hinh-truc-tiep" 
          element={<Navigate to="/giai-phap/phuc-hoi-truc-tiep" replace />} 
        />
        <Route path="/giai-phap/:slug" element={<SolutionLanding />} />
      </Routes>
    </Router>
  );
}
