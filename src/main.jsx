import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx';
import Invoice from './pages/Invoice.jsx';

function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/invoice/:invoiceId" element={<Invoice />} />
      </Routes>
    </Router>
  );
}

export default Main;
