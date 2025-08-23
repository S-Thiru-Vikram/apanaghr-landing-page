'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaMoneyBillWave, FaUserShield, FaHandshake, FaClock } from 'react-icons/fa';
import type { ReactElement } from 'react';

interface Problem {
  icon: ReactElement;
  title: string;
  description: string;
  lightColor: string;
  darkColor: string;
}

const ProblemsWeSolve: React.FC = () => {
  const problems: Problem[] = [
    {
      icon: <FaMoneyBillWave className="w-8 h-8" />,
      title: "Finding Affordable PGs",
      description: "Say goodbye to expensive broker fees and hidden charges",
      lightColor: "bg-rose-50 text-rose-600",
      darkColor: "dark:bg-rose-900/30 dark:text-rose-400"
    },
    {
      icon: <FaUserShield className="w-8 h-8" />,
      title: "Safety Concerns",
      description: "All properties and roommates are thoroughly verified",
      lightColor: "bg-cyan-50 text-cyan-600",
      darkColor: "dark:bg-cyan-900/30 dark:text-cyan-400"
    },
    {
      icon: <FaHandshake className="w-8 h-8" />,
      title: "Trustworthy Owners",
      description: "Connect with verified and reliable property owners",
      lightColor: "bg-amber-50 text-amber-600",
      darkColor: "dark:bg-amber-900/30 dark:text-amber-400"
    },
    {
      icon: <FaClock className="w-8 h-8" />,
      title: "Time-Consuming Search",
      description: "Quick and efficient property discovery process",
      lightColor: "bg-emerald-50 text-emerald-600",
      darkColor: "dark:bg-emerald-900/30 dark:text-emerald-400"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-[#f8ffff] to-white dark:bg-gradient-to-b dark:from-[#1a1a1a] dark:to-[#121212]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Problems We Solve
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Making your accommodation search hassle-free
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${problem.lightColor} ${problem.darkColor} rounded-xl p-4 md:p-6 shadow-md hover:shadow-lg transition-all duration-300 h-full`}
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <span className="p-3 bg-white dark:bg-gray-800/50 rounded-full shadow-sm">
                  {problem.icon}
                </span>
                <h3 className="text-sm sm:text-base font-semibold">
                  {problem.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                  {problem.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsWeSolve;