import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const closeMenu = (e) => {
      if (isOpen && e.target.closest('.mobile-menu-button') === null && 
          e.target.closest('.mobile-menu') === null) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('click', closeMenu);
    return () => document.removeEventListener('click', closeMenu);
  }, [isOpen]);

  return (
    <nav className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-gradient-to-r from-purple-900/90 to-blue-900/90 shadow-lg backdrop-blur-md py-2' 
        : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 transition-transform duration-300 hover:scale-105">
            <a 
              href="/" 
              className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-400 
                         bg-clip-text text-transparent hover:from-blue-500 hover:to-green-500 
                         transition-all duration-300"
            >
              Feedback Tracker
            </a>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-1">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/contact">Contact</NavLink>
            <NavLink href="/feedback" isHighlighted={true}>Add Feedback</NavLink>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(!isOpen);
              }}
              className="mobile-menu-button inline-flex items-center justify-center p-2 
                         rounded-md text-white hover:text-green-400 focus:outline-none
                         transition-colors duration-200"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <div className="relative w-6 h-5">
                <span className={`absolute h-0.5 w-full bg-current transform transition-all duration-300 ${
                  isOpen ? 'rotate-45 top-2' : 'top-0'
                }`}></span>
                <span className={`absolute h-0.5 w-full bg-current transform transition-all duration-300 ${
                  isOpen ? 'opacity-0' : 'top-2'
                }`}></span>
                <span className={`absolute h-0.5 w-full bg-current transform transition-all duration-300 ${
                  isOpen ? '-rotate-45 top-2' : 'top-4'
                }`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`mobile-menu md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'max-h-64 opacity-100 visible' 
            : 'max-h-0 opacity-0 invisible'
        }`}
      >
        <div className="px-4 py-3 space-y-1 bg-gradient-to-b from-purple-900/95 to-blue-900/95 backdrop-blur-lg rounded-b-lg shadow-lg">
          <MobileNavLink href="/" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
          <MobileNavLink href="/about" onClick={() => setIsOpen(false)}>About</MobileNavLink>
          <MobileNavLink href="/contact" onClick={() => setIsOpen(false)}>Contact</MobileNavLink>
          <MobileNavLink href="/feedback" onClick={() => setIsOpen(false)} isHighlighted={true}>
            Add Feedback
          </MobileNavLink>
        </div>
      </div>
    </nav>
  );
};

// Desktop navigation link component
const NavLink = ({ href, children, isHighlighted = false }) => {
  return (
    <a 
      href={href} 
      className={`px-4 py-2.5 rounded-lg text-base font-medium relative group transition-all duration-200 ${isHighlighted ? 'bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white': 'text-white hover:bg-white/10'}`}
    >
      {children}
      {!isHighlighted && (
        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
      )}
    </a>
  );
};

// Mobile navigation link component
const MobileNavLink = ({ href, onClick, children, isHighlighted = false }) => {
  return (
    <a 
      href={href} 
      onClick={onClick}
      className={`block px-4 py-2.5 rounded-lg transition-all duration-200 ${isHighlighted ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white font-medium': 'text-white hover:bg-white/10'}`}>
      {children}
    </a>
  );
};

export default Navbar;
