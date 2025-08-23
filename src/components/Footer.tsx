'use client';

import React, { useState } from 'react';
import { FaInstagram, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface FooterLink {
  name: string;
  href: string;
}

interface FooterLinks {
  company: FooterLink[];
  support: FooterLink[];
  legal: FooterLink[];
}

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const footerLinks: FooterLinks = {
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Contact', href: '#' }
    ],
    support: [
      { name: 'Help Center', href: '#' },
      { name: 'Safety Center', href: '#' },
      { name: 'Community Guidelines', href: '#' }
    ],
    legal: [
      { name: 'Terms of Service', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Cookie Settings', href: '#' }
    ]
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setShowSuccess(true);
    setEmail('');
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  return (
    <footer className="bg-[#003D3D] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Newsletter Subscription */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/logo.png"
                  alt="ApanaGhr Logo"
                  width={40}
                  height={40}
                  className="brightness-200"
                />
                <span className="text-xl font-semibold">ApanaGhr</span>
              </div>
              <p className="text-gray-300 max-w-md">
                Finding the perfect living space and compatible roommates made easy. Your trusted partner in housing solutions.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-3">Stay Updated</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full px-4 py-2.5 bg-[#002828] text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-white/30 transition-all duration-300 text-sm"
                    disabled={isSubmitting}
                  />
                  <motion.button
                    type="submit"
                    className="w-full flex items-center justify-center px-4 py-2.5 bg-white !text-[#003D3D] rounded-lg transition-all duration-300 text-sm font-medium disabled:opacity-70 disabled:cursor-not-allowed"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Subscribe'}
                  </motion.button>
                </div>
                
                <AnimatePresence>
                  {showSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-green-400 text-sm flex items-center justify-center space-x-2"
                    >
                      Thanks for subscribing!
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-3 gap-8">
            {/* Company Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-300">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-300">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-300">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-600 text-center text-gray-400">
          <p>© {currentYear} ApanaGhr. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;