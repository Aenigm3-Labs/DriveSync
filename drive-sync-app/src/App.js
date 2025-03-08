import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import SignUp from './pages/SignUp';
import PurposeRoleSelection from './pages/PurposeRoleSelection';
import UISettings from './pages/UISettings';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/purpose" element={<PurposeRoleSelection />} />
        <Route path="/ui" element={<UISettings />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;