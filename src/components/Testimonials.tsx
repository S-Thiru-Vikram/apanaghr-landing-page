'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight, FaUser } from 'react-icons/fa';
import Image from 'next/image';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  location: string;
  rating: number;
  review: string;
  avatar?: string;
  pgName: string;
  stayDuration: string;
}

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Software Engineer",
      location: "Koramangala, Bangalore",
      rating: 5,
      review: "Finding my perfect PG was so easy with ApanaGhr! The detailed listings and genuine reviews helped me make the right choice. The verification process gave me confidence, and I found a safe, comfortable place within days.",
      pgName: "Green Valley PG",
      stayDuration: "8 months"
    },
    {
      id: 2,
      name: "Rahul Kumar",
      role: "MBA Student",
      location: "Indiranagar, Bangalore",
      rating: 5,
      review: "ApanaGhr made my transition to Bangalore seamless. The platform's detailed filters helped me find a PG near my college with all the amenities I needed. Great roommate matching feature too!",
      pgName: "Scholar's Den",
      stayDuration: "1 year"
    },
    {
      id: 3,
      name: "Sneha Patel",
      role: "Digital Marketing Specialist",
      location: "Whitefield, Bangalore",
      rating: 4,
      review: "Excellent service! The app interface is user-friendly and the customer support team was very helpful. Found my ideal PG with amazing amenities and friendly roommates. Highly recommended!",
      pgName: "Tech Hub Residency",
      stayDuration: "6 months"
    },
    {
      id: 4,
      name: "Arjun Singh",
      role: "Data Analyst",
      location: "Electronic City, Bangalore",
      rating: 5,
      review: "The detailed verification process and genuine reviews on ApanaGhr gave me peace of mind. Found a great PG with excellent food and Wi-Fi. The virtual tour feature was incredibly helpful!",
      pgName: "Metro Connect PG",
      stayDuration: "10 months"
    },
    {
      id: 5,
      name: "Kavya Reddy",
      role: "UI/UX Designer",
      location: "HSR Layout, Bangalore",
      rating: 5,
      review: "ApanaGhr simplified my PG hunting experience. The platform's transparency, verified listings, and easy booking process made everything hassle-free. Found my dream PG in just 2 days!",
      pgName: "Designer's Paradise",
      stayDuration: "1.5 years"
    },
    {
      id: 6,
      name: "Vikram Joshi",
      role: "Consultant",
      location: "Marathahalli, Bangalore",
      rating: 4,
      review: "Great platform with authentic reviews and detailed property information. The customer service team was responsive and helped me throughout the process. Found a perfect PG for my work location.",
      pgName: "Executive Suites",
      stayDuration: "7 months"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlay, currentTestimonial]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className={`${
          index < rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'
        } text-sm`}
      />
    ));
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-teal-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(56,189,248,0.3),transparent)] dark:bg-[radial-gradient(circle_at_30%_50%,rgba(56,189,248,0.1),transparent)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(168,85,247,0.3),transparent)] dark:bg-[radial-gradient(circle_at_70%_50%,rgba(168,85,247,0.1),transparent)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center justify-center mb-6">
            <div className="flex items-center space-x-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full px-8 py-4 shadow-xl border border-teal-100 dark:border-gray-600">
              <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center">
                <FaQuoteLeft className="text-white text-sm" />
              </div>
              <span className="text-teal-600 dark:text-teal-400 font-bold tracking-wider text-lg">TESTIMONIALS</span>
            </div>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          >
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600 dark:from-teal-400 dark:to-blue-400">Happy Users</span> Say
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Discover why thousands of students and professionals trust ApanaGhr to find their perfect accommodation
          </motion.p>
        </motion.div>

        {/* Main Testimonial Slider */}
        <div className="relative mb-12">
          <div 
            className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20 dark:border-gray-700/20"
            onMouseEnter={() => setIsAutoPlay(false)}
            onMouseLeave={() => setIsAutoPlay(true)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="grid lg:grid-cols-3 gap-8 items-center"
              >
                {/* User Info */}
                <div className="lg:col-span-1 text-center lg:text-left">
                  <div className="relative inline-block mb-6">
                    <div className="w-24 h-24 md:w-32 md:h-32 mx-auto lg:mx-0 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-xl">
                      {testimonials[currentTestimonial].avatar ? (
                        <Image
                          src={testimonials[currentTestimonial].avatar}
                          alt={testimonials[currentTestimonial].name}
                          width={128}
                          height={128}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center">
                          <FaUser className="text-white text-3xl md:text-4xl" />
                        </div>
                      )}
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-teal-500 text-white rounded-full p-2 shadow-lg">
                      <FaQuoteLeft className="text-sm" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {testimonials[currentTestimonial].name}
                  </h3>
                  <p className="text-lg text-teal-600 dark:text-teal-400 font-semibold mb-1">
                    {testimonials[currentTestimonial].role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {testimonials[currentTestimonial].location}
                  </p>
                  
                  <div className="flex items-center justify-center lg:justify-start space-x-1 mb-4">
                    {renderStars(testimonials[currentTestimonial].rating)}
                    <span className="ml-2 text-gray-600 dark:text-gray-300 font-medium">
                      {testimonials[currentTestimonial].rating}.0
                    </span>
                  </div>
                </div>

                {/* Review Content */}
                <div className="lg:col-span-2">
                  <div className="bg-gradient-to-br from-teal-50 via-blue-50 to-indigo-50 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded-2xl p-6 md:p-8 border border-teal-100 dark:border-gray-600 shadow-lg">
                    <div className="mb-6">
                      <FaQuoteLeft className="text-3xl text-teal-500 dark:text-teal-400 mb-4 opacity-50" />
                      <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 leading-relaxed font-medium italic">
                        {testimonials[currentTestimonial].review}
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 border-t border-teal-200 dark:border-gray-600">
                      <div className="bg-white/70 dark:bg-gray-600/30 rounded-xl p-4">
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1 font-medium">PG Name</p>
                        <p className="font-bold text-gray-800 dark:text-gray-200 text-lg">
                          {testimonials[currentTestimonial].pgName}
                        </p>
                      </div>
                      <div className="bg-white/70 dark:bg-gray-600/30 rounded-xl p-4">
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1 font-medium">Stay Duration</p>
                        <p className="font-bold text-gray-800 dark:text-gray-200 text-lg">
                          {testimonials[currentTestimonial].stayDuration}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-center items-center mt-8 space-x-4">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-white dark:bg-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-600 hover:bg-teal-50 dark:hover:bg-gray-600 group"
              >
                <FaChevronLeft className="text-gray-600 dark:text-gray-300 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors" />
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? 'bg-teal-600 dark:bg-teal-400 w-8'
                        : 'bg-gray-300 dark:bg-gray-600 hover:bg-teal-400 dark:hover:bg-teal-500'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-white dark:bg-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-600 hover:bg-teal-50 dark:hover:bg-gray-600 group"
              >
                <FaChevronRight className="text-gray-600 dark:text-gray-300 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors" />
              </button>
            </div>
          </div>
        </div>

        {/* Statistics Row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {[
            { number: "10,000+", label: "Happy Users", icon: "👥" },
            { number: "4.8/5", label: "Average Rating", icon: "⭐" },
            { number: "500+", label: "Verified PGs", icon: "🏠" },
            { number: "50+", label: "Cities Covered", icon: "📍" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 dark:border-gray-700/20 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-teal-600 dark:text-teal-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
