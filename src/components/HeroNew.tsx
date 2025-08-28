'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaPlay } from 'react-icons/fa';


interface SlideData {
  id: number;
  
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
}

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Sample slides data - you can replace with your images
  const slides: SlideData[] = [
    {
      id: 1,
      
      title: "Find Your Perfect PG",
      subtitle: "Premium Living Spaces",
      description: "Discover verified PGs with all amenities in prime locations",
      buttonText: "Explore PGs"
    },
    {
      id: 2,
      
      title: "Comfortable Rooms",
      subtitle: "Affordable & Safe",
      description: "Browse through thousands of rooms with flexible rent options",
      buttonText: "Find Rooms"
    },
    {
      id: 3,
      
      title: "Smart Roommate Matching",
      subtitle: "AI-Powered Compatibility",
      description: "Get matched with compatible roommates based on your preferences",
      buttonText: "Get Matched"
    },
    {
      id: 4,
      
      title: "Prime Locations",
      subtitle: "Near IT Hubs & Universities",
      description: "Stay close to your workplace or college with easy commute",
      buttonText: "View Locations"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlay, currentSlide]);

  return (
    <section className="relative h-[65vh] overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      {/* Image Slider Container */}
      <div
        className="relative w-full h-full"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            {/* Background Image */}
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="relative h-20 w-20 md:h-32 md:w-32 mb-4">
               
              </div>
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-center justify-center -mt-8">
              <div className="text-center text-white px-4 max-w-4xl">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-base md:text-lg font-medium mb-2 text-teal-300"
                >
                  {slides[currentSlide].subtitle}
                </motion.p>
                
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3"
                >
                  {slides[currentSlide].title}
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-sm md:text-base mb-4 text-gray-200 max-w-2xl mx-auto"
                >
                  {slides[currentSlide].description}
                </motion.p>
                
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg text-base font-semibold transition-colors duration-300 flex items-center gap-2 mx-auto"
                >
                  <FaPlay className="w-4 h-4" />
                  {slides[currentSlide].buttonText}
                </motion.button>
              </div>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-white scale-110'
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                  onMouseEnter={() => setIsAutoPlay(false)}
                  onMouseLeave={() => setIsAutoPlay(true)}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 md:p-4 rounded-full transition-all duration-300 backdrop-blur-sm"
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
        >
          <FaChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 md:p-4 rounded-full transition-all duration-300 backdrop-blur-sm"
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
        >
          <FaChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
