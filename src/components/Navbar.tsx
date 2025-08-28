'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FaSun, FaMoon, FaUser, FaUserPlus } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

interface NavItem {
  name: string;
  href: string;
}

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const { isDarkMode, toggleTheme } = useTheme();

  const navItems: NavItem[] = [
    { name: 'Home', href: '#home' },
    { name: 'Properties', href: '#properties' },
    { name: 'Top Places', href: '#top-places' },
    { name: 'Top PGs', href: '#recommended-pgs' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  // Track scroll position to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[var(--nav-bg)] nav-blur shadow-md backdrop-blur-md' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between h-20">
            {/* Logo with Title */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-4"
            >
              {/* Logo */}
              <div className="relative w-14 h-14">
                <Image
                  src="/logo.png"
                  alt="ApanaGhr Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              {/* Title */}
              <div className="flex items-center">
                <h1 className="nav-title text-3xl tracking-wider font-black">
                  Apana
                  <span className="font-black">Ghr</span>
                </h1>
              </div>
            </motion.div>

            {/* Desktop Navigation and Theme Toggle */}
            <div className="hidden md:flex items-center space-x-8">
              {/* Navigation Items */}
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`nav-link text-muted hover:text-brand transition-colors duration-300 text-lg font-medium ${
                    activeSection === item.href.substring(1) ? 'nav-link-active text-brand' : ''
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.a>
              ))}

              {/* Authentication Buttons */}
              <div className="flex items-center space-x-3 ml-6">
                <motion.button
                  className="flex items-center space-x-2 px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    // Add your login logic here
                    console.log('Login clicked');
                  }}
                >
                  <FaUser className="w-4 h-4" />
                  <span>Login</span>
                </motion.button>
                
                <motion.button
                  className="flex items-center space-x-2 px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-colors duration-300 font-medium shadow-md hover:shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    // Add your sign up logic here
                    console.log('Sign up clicked');
                  }}
                >
                  <FaUserPlus className="w-4 h-4" />
                  <span>Sign Up</span>
                </motion.button>
              </div>

              {/* Theme Toggle Button */}
              <motion.button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-[var(--hover-bg)] transition-colors duration-300 ml-4"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                <motion.div
                  initial={false}
                  animate={{ rotate: isDarkMode ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  {isDarkMode ? (
                    <FaSun className="w-5 h-5 text-[var(--brand-color)]" />
                  ) : (
                    <FaMoon className="w-5 h-5 text-muted" />
                  )}
                </motion.div>
              </motion.button>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center space-x-2">
              {/* Mobile Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-[var(--hover-bg)] transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                <motion.div
                  initial={false}
                  animate={{ rotate: isDarkMode ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  {isDarkMode ? (
                    <FaSun className="w-5 h-5 text-[var(--brand-color)]" />
                  ) : (
                    <FaMoon className="w-5 h-5 text-muted" />
                  )}
                </motion.div>
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-muted hover:text-brand p-2 rounded-lg hover:bg-[var(--hover-bg)] transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-20 left-0 right-0 z-40 bg-[var(--nav-bg)] nav-blur backdrop-blur-md border-t border-[var(--border-color)] md:hidden"
          >
            <div className="px-6 py-4 space-y-2">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`nav-link-mobile block px-4 py-3 rounded-lg text-lg font-medium transition-all duration-300 ${
                    activeSection === item.href.substring(1) 
                      ? 'text-brand bg-[var(--hover-bg)]' 
                      : 'text-muted hover:text-brand'
                  }`}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.a>
              ))}
              
              {/* Mobile Authentication Buttons */}
              <div className="pt-4 mt-4 border-t border-[var(--border-color)] space-y-3">
                <motion.button
                  className="w-full flex items-center justify-center space-x-2 px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 font-medium border border-gray-300 dark:border-gray-600"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    console.log('Login clicked');
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <FaUser className="w-4 h-4" />
                  <span>Login</span>
                </motion.button>
                
                <motion.button
                  className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-colors duration-300 font-medium shadow-md hover:shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    console.log('Sign up clicked');
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <FaUserPlus className="w-4 h-4" />
                  <span>Sign Up</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;