import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Building2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-dark/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-white">
                Pooja Enterprises
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/projects" className="text-gray-300 hover:text-primary transition-colors">
              Projects
            </Link>
            <Link to="/products" className="text-gray-300 hover:text-primary transition-colors">
              Products
            </Link>
            <Link to="/team" className="text-gray-300 hover:text-primary transition-colors">
              Team
            </Link>
            <Link to="/contact" className="bg-primary text-dark px-4 py-2 rounded-md hover:bg-primary-dark transition-colors">
              Contact Us
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden bg-dark-light rounded-lg shadow-lg mt-2"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link to="/" className="block px-3 py-2 text-gray-300 hover:text-primary rounded-md">
                  Home
                </Link>
                <Link to="/about" className="block px-3 py-2 text-gray-300 hover:text-primary rounded-md">
                  About
                </Link>
                <Link to="/projects" className="block px-3 py-2 text-gray-300 hover:text-primary rounded-md">
                  Projects
                </Link>
                <Link to="/products" className="block px-3 py-2 text-gray-300 hover:text-primary rounded-md">
                  Products
                </Link>
                <Link to="/team" className="block px-3 py-2 text-gray-300 hover:text-primary rounded-md">
                  Team
                </Link>
                <Link to="/contact" className="block px-3 py-2 bg-primary text-dark rounded-md">
                  Contact Us
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;