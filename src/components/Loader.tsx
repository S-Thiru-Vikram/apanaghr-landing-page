'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface LoaderProps {
  onComplete?: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Find Your Perfect Living Space.";
  
  useEffect(() => {
    let currentIndex = 0;
    const typeInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typeInterval);
        // Wait 1 second after typing completes, then call onComplete
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 1000);
      }
    }, 80); // Typing speed

    return () => clearInterval(typeInterval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 z-50 flex flex-col items-center justify-center">
      {/* Logo */}
      <div className="mb-8 animate-pulse">
        <div className="relative h-24 w-24 md:h-32 md:w-32">
          <Image
            src="/images/Apanaghr. (2).gif"
            alt="ApanaGhr Logo"
            fill
            priority
            className="object-contain"
          />
        </div>
      </div>
      
      {/* Typewriter Text */}
      <div className="text-center px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 h-12">
          {displayText}
          <span className="animate-pulse">|</span>
        </h2>
      </div>
      
      {/* Loading dots */}
      <div className="mt-8 flex space-x-2">
        <div className="w-3 h-3 bg-teal-500 rounded-full animate-bounce"></div>
        <div className="w-3 h-3 bg-teal-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
        <div className="w-3 h-3 bg-teal-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
      </div>
    </div>
  );
};

export default Loader;
