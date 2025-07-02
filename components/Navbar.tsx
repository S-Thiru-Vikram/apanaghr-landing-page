'use client';

import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { ParticleButton } from './ui/particle-button';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="w-full bg-background/80 backdrop-blur-md border-b border-border/20 px-6 py-4 transition-all duration-300 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <div className="text-2xl font-bold text-primary hover:text-accent transition-colors duration-300 cursor-pointer">
            ApanaGhr
          </div>
        </div>

        {/* Right Section - Log In + Sign In + Theme Toggle */}
        <div className="flex items-center space-x-3">
          {/* Log In Button */}
          <ParticleButton 
            variant="outline"
            className="px-6 py-2 text-sm font-medium text-primary border-border/40 rounded-full hover:bg-primary hover:text-white transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
          >
            Log In
          </ParticleButton>

          {/* Sign In Button */}
          <ParticleButton 
            variant="outline"
            className="px-6 py-2 text-sm font-medium text-primary border-border/40 rounded-full hover:bg-primary hover:text-white transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
          >
            Sign In
          </ParticleButton>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="relative w-16 h-8 theme-toggle-track rounded-full p-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background hover:opacity-70"
            aria-label="Toggle theme"
          >
            {/* Toggle Button */}
            <div
              className={`
                w-6 h-6 bg-white rounded-full shadow-lg transform transition-transform duration-300 ease-in-out flex items-center justify-center
                ${theme === 'dark' ? 'translate-x-8' : 'translate-x-0'}
              `}
            >
              {/* Icon */}
              {theme === 'light' ? (
                <svg
                  className="w-4 h-4 text-highlight"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  className="w-4 h-4 text-accent"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
