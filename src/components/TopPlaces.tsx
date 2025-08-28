'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaHome, FaUsers, FaStar, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';


// Top cities data with statistics
const topCities = [
  {
    id: 1,
    name: "Bangalore",
    state: "Karnataka",
    image: "/images/bangalore.png",
    pgCount: "2,500+",
    averageRent: "₹8,000 - ₹15,000",
    rating: 4.8,
    popularAreas: ["Koramangala", "Whitefield", "Electronic City", "HSR Layout"],
    highlights: ["IT Hub", "Student Friendly", "Metro Connectivity"],
    
    description: "India's Silicon Valley with numerous PGs near tech parks"
  },
  {
    id: 2,
    name: "Chennai",
    state: "Tamil Nadu", 
    image: "/images/chennai.png",
    pgCount: "1,800+",
    averageRent: "₹6,000 - ₹12,000",
    rating: 4.6,
    popularAreas: ["Anna Nagar", "T. Nagar", "Velachery", "OMR"],
    highlights: ["Coastal City", "Cultural Hub", "Affordable"],
    
    description: "Cultural capital with excellent educational institutions"
  },
  {
    id: 3,
    name: "Hyderabad",
    state: "Telangana",
    image: "/images/hyderabad.png", 
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
    image: "/images/pune.png",
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
    image: "/images/mumbai.png",
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
    image: "/images/delhi.png",
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          {topCities.map((city) => (
            <motion.div
              key={city.id}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer h-[280px] bg-transparent"
              whileHover={{ y: -5 }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={city.image}
                  alt={city.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110 opacity-100"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={city.id <= 3}
                />
              </div>
              
              {/* Background Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/30" />
              
              {/* Content */}
              <div className="relative p-3 h-full flex flex-col justify-between text-white">
                {/* Top Section */}
                <div>
                  {/* Header */}
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className="text-2xl font-bold drop-shadow-[0_2px_2px_rgba(0,0,0,0.4)]">{city.name}</h3>
                      <p className="text-xs text-white/70 drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]">{city.state}</p>
                    </div>
                    <div className="flex items-center gap-1 bg-black/10 px-2 py-1 rounded-full">
                      <FaStar className="w-3 h-3 text-yellow-300 drop-shadow" />
                      <span className="text-xs font-medium drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]">{city.rating}</span>
                    </div>
                  </div>

                  {/* Statistics */}
                  <div className="grid grid-cols-2 gap-2 mb-2">
                    <div className="bg-black/20 backdrop-blur-md rounded-lg p-2">
                      <div className="flex items-center gap-2 mb-1">
                        <FaHome className="w-4 h-4" />
                        <span className="text-xs font-medium">Available PGs</span>
                      </div>
                      <div className="text-lg font-bold">{city.pgCount}</div>
                    </div>
                    <div className="bg-black/20 backdrop-blur-md rounded-lg p-2">
                      <div className="flex items-center gap-2 mb-1">
                        <FaMapMarkerAlt className="w-4 h-4" />
                        <span className="text-xs font-medium">Rent Range</span>
                      </div>
                      <div className="text-sm font-semibold">{city.averageRent}</div>
                    </div>
                  </div>

                  {/* Popular Areas */}
                  <div className="mb-2">
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
                  <div className="flex flex-wrap gap-1 mb-2">
                    {city.highlights.map((highlight, index) => (
                      <span 
                        key={index}
                        className="bg-black/20 backdrop-blur-md text-xs px-2 py-0.5 rounded-full font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-white/80 mb-3 leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]">
                    {city.description}
                  </p>
                </div>

                {/* Bottom Section - CTA */}
                <motion.button
                  className="w-full bg-black/20 hover:bg-black/30 border border-white/10 rounded-lg py-1.5 px-3 flex items-center justify-center gap-2 text-xs font-medium transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]">Explore {city.name}</span>
                  <FaArrowRight className="w-2.5 h-2.5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
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



