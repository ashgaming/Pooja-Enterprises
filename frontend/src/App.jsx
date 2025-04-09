import { useEffect , lazy , Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
const Projects = lazy(()=>import('./pages/Projects'));
const Products = lazy(()=>import('./pages/Products'));
const Team = lazy(()=>import('./pages/Team'));
const LandingPage = lazy(()=>import('./pages/LandingPage'));
import Aos from 'aos';
import 'aos/dist/aos.css';
import PageLoader from './components/PageLoader';

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: 'ease-in-out',
    });
  } , []);
  return (
    <Router>
      <div className="min-h-screen overflow-x-hidden">
        <Suspense fallback={ <PageLoader /> }>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/products" element={<Products />} />
          <Route path="/team" element={<Team />} />
        </Routes>
        <Footer />
        </Suspense>
      </div>
    </Router>
  );
}

export default App;