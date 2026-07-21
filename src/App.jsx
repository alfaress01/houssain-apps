import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import JibiPage from './pages/JibiPage';
import JibiPrivacy from './pages/JibiPrivacy';
import TakortPage from './pages/TakortPage';
import TayssirPage from './pages/TayssirPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jibi" element={<JibiPage language="ar" />} />
        <Route path="/jibi/en" element={<JibiPage language="en" />} />
        <Route path="/jibi/es" element={<JibiPage language="es" />} />
        <Route path="/jibi/fr" element={<JibiPage language="fr" />} />
        <Route path="/jibi/privacy" element={<JibiPrivacy />} />
        <Route path="/takort" element={<TakortPage />} />
        <Route path="/tayssir" element={<TayssirPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
