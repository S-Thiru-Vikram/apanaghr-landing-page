'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaSearchLocation, FaHandshake, FaRegClock } from 'react-icons/fa';
import type { ReactElement } from 'react';

interface Reason {
  icon: ReactElement;
  title: string;
  description: string;
  lightColor: string;
  darkStyle: string;
  iconColor: string;
}

const WhyApnaGhr: React.FC = () => {
  const reasons: Reason[] = [
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "Verified Properties",
      description: "All properties are thoroughly verified for your safety and comfort",
      lightColor: "bg-teal-50",
      darkStyle: "dark:bg-teal-900/30",
      iconColor: "text-teal-600 dark:text-teal-400"
    },
    {
      icon: <FaSearchLocation className="w-8 h-8" />,
      title: "Smart Location",
      description: "Find accommodations near your workplace or institution",
      lightColor: "bg-green-50",
      darkStyle: "dark:bg-green-900/30", 
      iconColor: "text-green-600 dark:text-green-400"
    },
    {
      icon: <FaHandshake className="w-8 h-8" />,
      title: "Trusted Partners",
      description: "Work with verified property owners and reliable partners",
      lightColor: "bg-blue-50",
      darkStyle: "dark:bg-blue-900/30",
      iconColor: "text-blue-600 dark:text-blue-400"
    },
    {
      icon: <FaRegClock className="w-8 h-8" />,
      title: "Quick Process",
      description: "Streamlined booking process to save your valuable time",
      lightColor: "bg-orange-50",
      darkStyle: "dark:bg-orange-900/30",
      iconColor: "text-orange-600 dark:text-orange-400"
    }
  ];

  return (
    <section className="relative py-16 bg-white dark:bg-[#121212] transition-colors duration-300">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-[#f8ffff] dark:from-[#121212] dark:to-[#121212] transition-colors duration-300" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose ApnaGhr?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We make finding your perfect accommodation simple and secure
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative rounded-xl p-4 md:p-6 
                         ${reason.lightColor} ${reason.darkStyle}
                         shadow-md hover:shadow-lg
                         dark:shadow-lg dark:shadow-black/40
                         dark:backdrop-blur-sm
                         dark:border dark:border-white/5
                         hover:scale-[1.02] hover:-translate-y-1
                         transition-all duration-300`}
            >
              {/* Card gradient overlay */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-current/5 to-transparent
                            opacity-0 group-hover:opacity-20
                            transition-opacity duration-300" />
              <div className="relative z-10 flex flex-col items-center text-center space-y-3">
                <span className="p-3 rounded-full bg-white dark:bg-black/25
                               shadow-sm dark:shadow-none backdrop-blur-sm
                               group-hover:scale-110
                               transition-all duration-300">
                  <div className={`${reason.iconColor} transition-colors duration-300`}>
                    {reason.icon}
                  </div>
                </span>
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 dark:text-white">
                  {reason.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyApnaGhr;