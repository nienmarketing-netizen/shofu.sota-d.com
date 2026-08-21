import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VidecLanding from './pages/VidecLanding';
import ShofuLanding from './pages/ShofuLanding';
import SolutionLanding from './pages/SolutionLanding';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShofuLanding />} />
        <Route path="/videc2026" element={<VidecLanding />} />
        <Route path="/giai-phap/:slug" element={<SolutionLanding />} />
      </Routes>
    </Router>
  );
}
