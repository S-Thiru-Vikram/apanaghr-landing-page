'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaHome, FaUsers, FaStar, FaArrowRight } from 'react-icons/fa';

// Top cities data with statistics
const topCities = [
  {
    id: 1,
    name: "Bangalore",
    state: "Karnataka",
    image: "/images/bangalore.jpg",
    pgCount: "2,500+",
    averageRent: "₹8,000 - ₹15,000",
    rating: 4.8,
    popularAreas: ["Koramangala", "Whitefield", "Electronic City", "HSR Layout"],
    highlights: ["IT Hub", "Student Friendly", "Metro Connectivity"],
    gradient: "from-purple-500 to-pink-500",
    description: "India's Silicon Valley with numerous PGs near tech parks"
  },
  {
    id: 2,
    name: "Chennai",
    state: "Tamil Nadu", 
    image: "/images/chennai.jpg",
    pgCount: "1,800+",
    averageRent: "₹6,000 - ₹12,000",
    rating: 4.6,
    popularAreas: ["Anna Nagar", "T. Nagar", "Velachery", "OMR"],
    highlights: ["Coastal City", "Cultural Hub", "Affordable"],
    gradient: "from-blue-500 to-cyan-500",
    description: "Cultural capital with excellent educational institutions"
  },
  {
    id: 3,
    name: "Hyderabad",
    state: "Telangana",
    image: "/images/hyderabad.jpg", 
    pgCount: "1,600+",
    averageRent: "₹7,000 - ₹13,000",
    rating: 4.7,
    popularAreas: ["Gachibowli", "Hitech City", "Madhapur", "Kondapur"],
    highlights: ["Cyberabad", "Low Cost of Living", "Metro Access"],
    gradient: "from-green-500 to-teal-500",
    description: "Emerging IT destination with modern infrastructure"
  },
  {
    id: 4,
    name: "Pune",
    state: "Maharashtra",
    image: "/images/pune.jpg",
    pgCount: "2,200+", 
    averageRent: "₹8,500 - ₹16,000",
    rating: 4.5,
    popularAreas: ["Hinjewadi", "Koregaon Park", "Viman Nagar", "Baner"],
    highlights: ["IT Capital", "Student City", "Pleasant Weather"],
    gradient: "from-orange-500 to-red-500",
    description: "Oxford of the East with vibrant student life"
  },
  {
    id: 5,
    name: "Mumbai",
    state: "Maharashtra",
    image: "/images/mumbai.jpg",
    pgCount: "3,000+",
    averageRent: "₹12,000 - ₹25,000",
    rating: 4.4,
    popularAreas: ["Andheri", "Powai", "Thane", "Borivali"],
    highlights: ["Financial Capital", "Local Trains", "Dream City"],
    gradient: "from-indigo-500 to-purple-500",
    description: "City of dreams with endless opportunities"
  },
  {
    id: 6,
    name: "Delhi NCR",
    state: "Delhi",
    image: "/images/delhi.jpg",
    pgCount: "2,800+",
    averageRent: "₹10,000 - ₹20,000", 
    rating: 4.3,
    popularAreas: ["Gurgaon", "Noida", "Dwarka", "Lajpat Nagar"],
    highlights: ["Capital Region", "Metro Network", "Corporate Hub"],
    gradient: "from-yellow-500 to-orange-500",
    description: "National capital with diverse opportunities"
  }
];

const TopPlaces: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Explore Top Cities
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Discover the best PGs and accommodations in India's major cities
          </p>
        </motion.div>

        {/* Cities Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {topCities.map((city) => (
            <motion.div
              key={city.id}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              whileHover={{ y: -5 }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${city.gradient} opacity-90`} />
              
              {/* Content */}
              <div className="relative p-6 h-80 flex flex-col justify-between text-white">
                {/* Top Section */}
                <div>
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold">{city.name}</h3>
                      <p className="text-white/80 text-sm">{city.state}</p>
                    </div>
                    <div className="flex items-center gap-1 bg-white/20 px-2 py-1 rounded-full">
                      <FaStar className="w-3 h-3 text-yellow-300" />
                      <span className="text-sm font-medium">{city.rating}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-white/90 text-sm mb-4 leading-relaxed">
                    {city.description}
                  </p>

                  {/* Statistics */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <FaHome className="w-4 h-4" />
                        <span className="text-xs font-medium">Available PGs</span>
                      </div>
                      <div className="text-lg font-bold">{city.pgCount}</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <FaMapMarkerAlt className="w-4 h-4" />
                        <span className="text-xs font-medium">Rent Range</span>
                      </div>
                      <div className="text-sm font-semibold">{city.averageRent}</div>
                    </div>
                  </div>

                  {/* Popular Areas */}
                  <div className="mb-4">
                    <p className="text-xs font-medium mb-2 text-white/80">Popular Areas:</p>
                    <div className="flex flex-wrap gap-1">
                      {city.popularAreas.slice(0, 3).map((area, index) => (
                        <span 
                          key={index}
                          className="bg-white/20 text-xs px-2 py-1 rounded-full"
                        >
                          {area}
                        </span>
                      ))}
                      {city.popularAreas.length > 3 && (
                        <span className="bg-white/20 text-xs px-2 py-1 rounded-full">
                          +{city.popularAreas.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {city.highlights.map((highlight, index) => (
                      <span 
                        key={index}
                        className="bg-white/30 text-xs px-2 py-1 rounded-full font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Section - CTA */}
                <motion.button
                  className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 rounded-lg py-3 px-4 flex items-center justify-center gap-2 font-medium transition-all duration-300 group-hover:bg-white/40"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Explore {city.name}</span>
                  <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* View All Cities CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-3 mx-auto">
            <FaMapMarkerAlt className="w-5 h-5" />
            <span>View All Cities</span>
            <FaArrowRight className="w-4 h-4" />
          </button>
          <p className="text-gray-600 dark:text-gray-400 mt-3 text-sm">
            Discover PGs in 50+ cities across India
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TopPlaces;
