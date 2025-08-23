'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaUserCircle, FaRobot, FaHandshake, FaHome } from 'react-icons/fa';
import type { ReactElement } from 'react';

interface Step {
  title: string;
  description: string;
  icon: ReactElement;
  color: string;
}

const HowItWorks: React.FC = () => {
  const steps: Step[] = [
    {
      title: "Create Profile",
      description: "Set up your preferences and requirements for the perfect living space.",
      icon: <FaUserCircle className="w-10 h-10" />,
      color: "text-blue-500 dark:text-[#26A69A]"
    },
    {
      title: "AI Matching",
      description: "Our AI system finds compatible roommates and PGs based on your profile.",
      icon: <FaRobot className="w-10 h-10" />,
      color: "text-green-500 dark:text-[#80CBC4]"
    },
    {
      title: "Connect & Visit",
      description: "Connect with matches and schedule visits to your potential new home.",
      icon: <FaHandshake className="w-10 h-10" />,
      color: "text-purple-500 dark:text-[#26A69A]"
    },
    {
      title: "Move In",
      description: "Complete the booking process and move into your new home.",
      icon: <FaHome className="w-10 h-10" />,
      color: "text-indigo-500 dark:text-[#80CBC4]"
    }
  ];

  return (
    <section className="py-16 relative">
      {/* Main background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f8ffff] to-white dark:from-[#121212] dark:to-[#1E1E1E] transition-colors duration-300" />
      
      {/* Gradient overlay - only visible in dark mode */}
      <div className="absolute inset-0 opacity-0 dark:opacity-100 bg-gradient-to-b dark:from-[#121212] dark:via-[#1E1E1E] dark:to-[#121212] transition-all duration-300" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 dark:text-white max-w-2xl mx-auto">
            Find your perfect living space in just a few simple steps
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-white dark:bg-[#1E1E1E] rounded-xl p-4 lg:p-6 
                          shadow-md hover:shadow-lg transition-all duration-300 h-full 
                          border border-transparent dark:border-[#2A2A2A]
                          dark:hover:border-[#26A69A]/20">
                <div className="flex flex-col items-center text-center space-y-3">
                  <span className={`text-2xl sm:text-3xl mb-2 ${step.color}`}>
                    {step.icon}
                  </span>
                  <span className="inline-block px-3 py-1 bg-[#003D3D]/10 dark:bg-[#26A69A]/10 
                                rounded-full text-xs font-medium text-[#003D3D] dark:text-[#26A69A]">
                    Step {index + 1}
                  </span>
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;