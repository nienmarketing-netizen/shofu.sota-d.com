import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import VidecLanding from './pages/VidecLanding';
import ShofuLanding from './pages/ShofuLanding';
import SolutionLanding from './pages/SolutionLanding';
import AdminDashboard from './pages/admin/AdminDashboard';
import DirectRestorationEditor from './pages/admin/DirectRestorationEditor';
import IndirectRestorationEditor from './pages/admin/IndirectRestorationEditor';
import PreventiveDentistryEditor from './pages/admin/PreventiveDentistryEditor';

import ThanksPage from './pages/ThanksPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShofuLanding />} />
        <Route path="/videc2026" element={<VidecLanding />} />
        <Route path="/thanks" element={<ThanksPage />} />
        {/* Admin CMS Portal */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/editor/phuc-hoi-truc-tiep" element={<DirectRestorationEditor />} />
        <Route path="/admin/editor/phuc-hinh-gian-tiep" element={<IndirectRestorationEditor />} />
        <Route path="/admin/editor/nha-khoa-phong-ngua" element={<PreventiveDentistryEditor />} />
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
