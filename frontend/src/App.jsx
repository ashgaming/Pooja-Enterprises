// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Projects from './pages/Projects';
import Products from './pages/Products';
import Team from './pages/Team';
import LandingPage from './pages/LandingPage';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: 'ease-in-out',
    });
  } , []);
  return (
    <Router>
      <div className="min-h-screen bg-dark text-gray-100 overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/products" element={<Products />} />
          <Route path="/team" element={<Team />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;