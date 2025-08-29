import React, { useState } from 'react';
import { FaSearch, FaMapMarkerAlt, FaMicrophone } from 'react-icons/fa';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [propertyType, setPropertyType] = useState('PG');
  const [accommodationType, setAccommodationType] = useState('All Types');

  return (
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-full max-w-5xl mx-auto px-4 z-20">
      <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 border border-white/20 dark:border-gray-600/20 hover:shadow-3xl transition-all duration-300">
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-6 border-b border-gray-200 dark:border-gray-600 pb-4">
          {['PG', 'Rooms', 'Roommates', 'Flats', 'Hostels'].map((tab) => (
            <button
              key={tab}
              className={`px-5 py-3 font-semibold text-sm transition-all duration-200 relative ${
                propertyType === tab || (tab === 'PG' && propertyType === 'PG')
                  ? 'text-teal-600 dark:text-teal-400 border-b-2 border-teal-600 dark:border-teal-400'
                  : 'text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400'
              }`}
              onClick={() => setPropertyType(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        
        {/* Search Controls */}
        <div className="flex flex-col lg:flex-row items-center gap-4">
          {/* Accommodation Type Dropdown */}
          <div className="flex items-center gap-2">
            <select
              className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-700 dark:text-gray-200 font-medium focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 min-w-[160px] shadow-sm"
              value={accommodationType}
              onChange={e => setAccommodationType(e.target.value)}
            >
              <option value="All Types">All Types</option>
              <option value="For Boys">For Boys</option>
              <option value="For Girls">For Girls</option>
              <option value="Co-living">Co-living</option>
              <option value="Single Occupancy">Single Occupancy</option>
              <option value="Double Sharing">Double Sharing</option>
              <option value="Triple Sharing">Triple Sharing</option>
              <option value="Student PGs">Student PGs</option>
              <option value="Professional PGs">Professional PGs</option>
            </select>
          </div>

          {/* Search Input with Icons */}
          <div className="flex items-center flex-grow relative max-w-2xl w-full">
            <div className="relative w-full">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 text-lg" />
              <input
                type="text"
                className="w-full pl-12 pr-20 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 placeholder-gray-400 dark:placeholder-gray-500 text-lg shadow-sm"
                placeholder={`Find ${propertyType.toLowerCase()} near Koramangala, Bangalore`}
                value={query}
                onChange={e => setQuery(e.target.value)}
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                <button className="p-2 text-gray-400 dark:text-gray-500 hover:text-teal-600 dark:hover:text-teal-400 transition-colors rounded hover:bg-teal-50 dark:hover:bg-teal-900/30">
                  <FaMapMarkerAlt className="w-5 h-5" />
                </button>
                <FaMicrophone className="text-teal-600 dark:text-teal-400 cursor-pointer hover:text-teal-700 dark:hover:text-teal-300 transition-colors text-lg" />
              </div>
            </div>
          </div>

          {/* Search Button */}
          <button
            className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl min-w-[120px] text-lg"
            onClick={() => alert(`Searching for ${propertyType}, ${accommodationType}, ${query}`)}
          >
            Search
          </button>
        </div>

        {/* Recent Searches */}
        <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 text-sm text-gray-600 border-t border-gray-200 pt-4">
          <span className="font-medium">Recent searches:</span>
          <div className="flex flex-wrap items-center gap-3">
            <button className="flex items-center gap-2 hover:text-teal-600 transition-colors bg-gray-100 hover:bg-teal-50 px-3 py-1.5 rounded">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              Girls PG in Whitefield
            </button>
            <span className="text-gray-300">|</span>
            <button className="hover:text-teal-600 transition-colors font-medium">Boys PG near Metro</button>
            <span className="text-gray-300">|</span>
            <button className="hover:text-teal-600 transition-colors font-medium">Find roommate in Pune</button>
          </div>
        </div>

        {/* Quick Browse Options */}
        <div className="mt-3 flex flex-wrap items-center gap-3 text-sm">
          <span className="text-gray-600 font-medium">Popular:</span>
          <div className="flex flex-wrap gap-2">
            <button className="flex items-center gap-1 bg-teal-50 hover:bg-teal-100 text-teal-700 px-3 py-1.5 rounded-lg transition-all duration-200 text-xs">
              🏠 PGs near IT Parks
            </button>
            <button className="flex items-center gap-1 bg-green-50 hover:bg-green-100 text-green-700 px-3 py-1.5 rounded-lg transition-all duration-200 text-xs">
              👥 Find Roommates
            </button>
            <button className="flex items-center gap-1 bg-blue-50 hover:bg-blue-100 text-blue-700 px-3 py-1.5 rounded-lg transition-all duration-200 text-xs">
              🎓 Student Housing
            </button>
            <button className="flex items-center gap-1 bg-orange-50 hover:bg-orange-100 text-orange-700 px-3 py-1.5 rounded-lg transition-all duration-200 text-xs">
              💼 Professional PGs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
