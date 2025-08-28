'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaMapMarkerAlt, FaBed, FaWifi, FaCar, FaUtensils } from 'react-icons/fa';
import Image from 'next/image';

interface PGListing {
  id: number;
  imageCount: number;
  title: string;
  price: string;
  originalPrice?: string;
  location: string;
  area: string;
  status: string;
  occupancy: string;
  amenities: string[];
  rating: number;
  image: string;
}

const RecommendedPGs: React.FC = () => {
  const pgListings: PGListing[] = [
    {
      id: 1,
      imageCount: 17,
      title: "Premium PG for Boys",
      price: "₹8,500",
      originalPrice: "₹10,000",
      location: "Koramangala, Bangalore",
      area: "Single Occupancy",
      status: "Ready to Move",
      occupancy: "Boys Only",
      amenities: ["WiFi", "Meals", "AC", "Parking"],
      rating: 4.5,
      image: "/images/whitefield.jpg"
    },
    {
      id: 2,
      imageCount: 12,
      title: "Deluxe Girls PG",
      price: "₹7,200",
      location: "Whitefield, Bangalore",
      area: "Double Sharing",
      status: "Available Now",
      occupancy: "Girls Only",
      amenities: ["WiFi", "Meals", "Laundry", "Security"],
      rating: 4.7,
      image: "/images/hsr.png"
    },
    {
      id: 3,
      imageCount: 16,
      title: "Co-living Space",
      price: "₹12,000",
      location: "Indiranagar, Bangalore",
      area: "Private Room",
      status: "Ready to Move",
      occupancy: "Co-living",
      amenities: ["WiFi", "Gym", "Meals", "Housekeeping"],
      rating: 4.8,
      image: "/images/indiranagar.png"
    },
    {
      id: 4,
      imageCount: 22,
      title: "Budget Student PG",
      price: "₹5,800",
      location: "BTM Layout, Bangalore",
      area: "Triple Sharing",
      status: "Available Now",
      occupancy: "Students",
      amenities: ["WiFi", "Meals", "Study Room"],
      rating: 4.3,
      image: "/images/koramangala.png"
    }
  ];

  const getAmenityIcon = (amenity: string) => {
    switch (amenity.toLowerCase()) {
      case 'wifi':
        return <FaWifi className="w-3 h-3" />;
      case 'meals':
      case 'food':
        return <FaUtensils className="w-3 h-3" />;
      case 'parking':
      case 'car':
        return <FaCar className="w-3 h-3" />;
      case 'ac':
      case 'bed':
        return <FaBed className="w-3 h-3" />;
      default:
        return <FaBed className="w-3 h-3" />;
    }
  };

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2"
            >
              Top PGs at Your Location
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-600 dark:text-gray-400 text-lg mt-2 mb-3"
            >
              Showing top-rated PGs in Bangalore 📍
            </motion.p>
            <div className="w-16 h-1 bg-teal-500"></div>
          </div>
          
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ x: 5 }}
            className="flex items-center gap-2 text-teal-500 hover:text-teal-600 font-semibold transition-colors duration-200"
          >
            See all PGs
            <FaArrowRight className="w-4 h-4" />
          </motion.button>
        </div>

        {/* PG Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pgListings.map((pg, index) => (
            <motion.div
              key={pg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer border border-gray-100 dark:border-gray-700 flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden flex-shrink-0">
                <Image
                  src={pg.image}
                  alt={pg.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  priority={pg.id <= 2}
                />
                {/* Image Count Badge */}
                <div className="absolute top-3 left-3 bg-black/70 text-white px-2 py-1 rounded text-sm flex items-center gap-1">
                  📷 {pg.imageCount}
                </div>
                {/* Status Badge */}
                <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">
                  {pg.status}
                </div>
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-grow">
                {/* Title and Occupancy */}
                <div className="mb-2">
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-1 line-clamp-2 min-h-[3.5rem]">
                    {pg.title}
                  </h3>
                  <span className="text-sm text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/30 px-2 py-1 rounded">
                    {pg.occupancy}
                  </span>
                </div>

                {/* Price */}
                <div className="mb-3">
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">
                    {pg.price}
                  </span>
                  {pg.originalPrice && (
                    <span className="text-sm text-gray-500 line-through ml-2">
                      {pg.originalPrice}
                    </span>
                  )}
                  <span className="text-sm text-gray-600 dark:text-gray-400 ml-1">
                    /month
                  </span>
                </div>

                {/* Location and Area */}
                <div className="mb-3">
                  <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400 text-sm mb-1">
                    <FaMapMarkerAlt className="w-3 h-3" />
                    <span className="line-clamp-1">{pg.location}</span>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-500">
                    {pg.area}
                  </div>
                </div>

                {/* Amenities */}
                <div className="mb-4 flex-grow">
                  <div className="flex flex-wrap gap-2 min-h-[2rem]">
                    {pg.amenities.slice(0, 3).map((amenity, idx) => (
                      <div 
                        key={idx}
                        className="flex items-center gap-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded"
                      >
                        {getAmenityIcon(amenity)}
                        {amenity}
                      </div>
                    ))}
                    {pg.amenities.length > 3 && (
                      <div className="text-xs text-gray-500 dark:text-gray-400 px-2 py-1">
                        +{pg.amenities.length - 3} more
                      </div>
                    )}
                  </div>
                </div>

                {/* Rating and CTA - Fixed at bottom */}
                <div className="flex justify-between items-center mt-auto pt-2">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500">★</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{pg.rating}</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200"
                  >
                    View Details
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Can't find the perfect PG? Let us help you find one!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Browse All PGs
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300"
            >
              Post Your Requirement
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RecommendedPGs;
