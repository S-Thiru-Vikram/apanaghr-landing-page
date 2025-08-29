'use client';

import React from 'react';


const Hero: React.FC = () => {
  return (
    <section className="relative h-[65vh] overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      {/* Background Image */}
      <div
        className="relative w-full h-full"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
      </div>
    </section>
  );
};

export default Hero;
