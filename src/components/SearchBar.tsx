import React, { useState } from 'react';
import { FaSearch, FaMapMarkerAlt, FaMicrophone, FaStar } from 'react-icons/fa';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [propertyType, setPropertyType] = useState('PG');
  const [accommodationType, setAccommodationType] = useState('All Types');
  const [showRecent, setShowRecent] = useState(false);

  const recentSearches = [
    { text: "Girls PG in Whitefield", icon: <FaStar className="text-yellow-400" /> },
    { text: "Boys PG near Metro", icon: null },
    { text: "Find roommate in Pune", icon: null }
  ];

  return (
    <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-full max-w-5xl mx-auto px-4 z-20 mb-45">
      <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl shadow-2xl p-4 border border-white/20 dark:border-gray-600/20 hover:shadow-3xl transition-all duration-300">
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-4 border-b border-gray-200 dark:border-gray-600 pb-3">
          {['PG', 'Rooms', 'Roommates', 'Flats', 'Hostels'].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 font-semibold text-sm transition-all duration-200 relative ${
                propertyType === tab
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
        <div className="flex flex-col lg:flex-row items-center gap-3">
          {/* Accommodation Type Dropdown */}
          <div className="flex items-center gap-2">
            <select
              className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-gray-700 dark:text-gray-200 font-medium focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 min-w-[160px] shadow-sm"
              value={accommodationType}
              onChange={e => setAccommodationType(e.target.value)}
            >
              <option value="All Types">All Types</option>
              <option value="For Boys">For Boys</option>
              <option value="For Girls">For Girls</option>
              <option value="Co-living">Co-living</option>
              <option value="Single Occupancy">Single Occupancy</option>
              <option value="Double Sharing">Double Sharing</option>
            </select>
          </div>

          {/* Search Input with Icons */}
          <div className="flex items-center flex-grow relative max-w-2xl w-full ">
            <div className="relative w-full">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 text-lg" />
              <input
                type="text"
                className="w-full pl-12 pr-20 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 placeholder-gray-400 dark:placeholder-gray-500 text-base shadow-sm"
                placeholder={`Find ${propertyType.toLowerCase()} near Koramangala, Bangalore`}
                value={query}
                onChange={e => setQuery(e.target.value)}
                onFocus={() => setShowRecent(true)}
                onBlur={() => setTimeout(() => setShowRecent(false), 200)}
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                <button className="p-1.5 text-gray-400 dark:text-gray-500 hover:text-teal-600 dark:hover:text-teal-400 transition-colors rounded">
                  <FaMapMarkerAlt className="w-4 h-4" />
                </button>
                <FaMicrophone className="text-teal-600 dark:text-teal-400 cursor-pointer hover:text-teal-700 dark:hover:text-teal-300 transition-colors w-4 h-4" />
              </div>

              {/* Recent Searches Dropdown */}
              {showRecent && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg py-2">
                  {recentSearches.map((search, index) => (
                    <button
                      key={index}
                      className="w-full px-4 py-2 text-left flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-700/50 text-sm text-gray-700 dark:text-gray-200"
                      onClick={() => setQuery(search.text)}
                    >
                      {search.icon && <span className="w-4 h-4">{search.icon}</span>}
                      {search.text}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Search Button */}
          <button
            className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl min-w-[120px] text-base"
            onClick={() => alert(`Searching for ${propertyType}, ${accommodationType}, ${query}`)}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
