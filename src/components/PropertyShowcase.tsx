'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';

interface PropertyCard {
  id: number;
  count: string;
  title: string;
  description: string;
  buttonText: string;
  image: string;
  gradient: string;
  textColor: string;
}

const PropertyShowcase: React.FC = () => {
  const propertyCards: PropertyCard[] = [
    {
      id: 1,
      count: "2500+",
      title: "Premium PGs",
      description: "Fully furnished PGs with all amenities for working professionals",
      buttonText: "Explore",
      image: "/logo.png", // Replace with actual PG image
      gradient: "from-teal-600 to-teal-800",
      textColor: "text-white"
    },
    {
      id: 2,
      count: "1200+",
      title: "Student Hostels",
      description: "Budget-friendly accommodations near colleges and universities", 
      buttonText: "Explore",
      image: "/logo.png", // Replace with actual hostel image
      gradient: "from-green-500 to-green-700",
      textColor: "text-white"
    },
    {
      id: 3,
      count: "800+",
      title: "Verified Roommates",
      description: "Find compatible roommates through our verification process",
      buttonText: "Find Match",
      image: "/logo.png", // Replace with roommate illustration
      gradient: "from-blue-500 to-blue-700",
      textColor: "text-white"
    },
    {
      id: 4,
      count: "1500+",
      title: "Shared Flats",
      description: "Spacious apartments perfect for sharing with roommates",
      buttonText: "Explore",
      image: "/logo.png", // Replace with flat image
      gradient: "from-orange-500 to-orange-700",
      textColor: "text-white"
    }
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            We've got accommodations for everyone
          </motion.h2>
          <div className="w-16 h-1 bg-teal-500 mx-auto"></div>
        </div>

        {/* Property Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {propertyCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient}`}></div>
              
              {/* Background Image Overlay */}
              <div className="absolute inset-0 opacity-20">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="relative z-10 p-6 h-64 flex flex-col justify-between">
                <div>
                  <motion.h3 
                    className={`text-4xl md:text-5xl font-bold ${card.textColor} mb-2`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {card.count}
                  </motion.h3>
                  <h4 className={`text-xl font-semibold ${card.textColor} mb-3`}>
                    {card.title}
                  </h4>
                  <p className={`${card.textColor} opacity-90 text-sm leading-relaxed mb-4`}>
                    {card.description}
                  </p>
                </div>

                {/* Button */}
                <motion.button
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  className={`flex items-center gap-2 ${card.textColor} font-semibold text-sm group-hover:underline`}
                >
                  {card.buttonText}
                  <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </motion.button>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Can't find what you're looking for? We have more options available!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            View All Properties
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default PropertyShowcase;
