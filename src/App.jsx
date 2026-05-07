import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import JibiPage from './pages/JibiPage';
import JibiPrivacy from './pages/JibiPrivacy';
import TakortPage from './pages/TakortPage';
import TayssirPage from './pages/TayssirPage';

function App() {
  return (
    <Router basename="/houssain-apps">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jibi" element={<JibiPage />} />
        <Route path="/jibi/privacy" element={<JibiPrivacy />} />
        <Route path="/takort" element={<TakortPage />} />
        <Route path="/tayssir" element={<TayssirPage />} />
      </Routes>
    </Router>
  );
}

export default App;
