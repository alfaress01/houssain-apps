import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import JibiPage from './pages/JibiPage';
import JibiPrivacy from './pages/JibiPrivacy';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jibi" element={<JibiPage />} />
        <Route path="/jibi/privacy" element={<JibiPrivacy />} />
      </Routes>
    </Router>
  );
}

export default App;
