import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
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
    <nav
  className={`fixed max-w-[30rem] w-[95%] top-5 left-1/2 transform -translate-x-1/2 z-50 header-card transition-all duration-300 bg-white/80 ${
    isScrolled ? 'bg-dark/10 backdrop-blur-md shadow-lg' : 'bg-transparent'
  } hover:shadow-xl shadow-black ` }
>
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8" >
        <div className="flex justify-between h-14">
          <div className="flex items-center">
            <Link to="/" onClick={() => setIsOpen(!isOpen)} className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-black">
                Pooja Enterprises
              </span>
            </Link>
          </div>

          <div className=" flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-black"
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
              transition={{ duration: 0.5 }}
            >
              <div className="px-2 pb-3 space-y-1 sm:px-3">
             
                <Link to="/projects" onClick={() => setIsOpen(!isOpen)} className="block pb-2 font-bold  text-black/80 hover:text-primary rounded-md">
                  What We Did
                </Link>
                <Link to="/products" onClick={() => setIsOpen(!isOpen)} className="block py-2 font-bold text-black/80 hover:text-primary rounded-md">
                  What We Offer
                </Link>
                <Link to="/team" onClick={() => setIsOpen(!isOpen)} className="block py-2 font-bold text-black/80 hover:text-primary rounded-md">
                  Our Teams
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