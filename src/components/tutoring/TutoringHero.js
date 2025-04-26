// tutoring/TutoringHero.js
import React from 'react';
import { motion } from 'framer-motion';

const TutoringHero = ({ colors }) => {
  return (
    <motion.div 
      className="bg-gradient-to-br from-white to-blue-50 py-16 md:py-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{ color: colors.darkPurple }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Tutoring Services
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Expert-led online tutoring that prioritizes your actual learning outcomes and long-term success
          </motion.p>
          
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {["SAT", "ACT", "AP", "IB", "IGCSE", "GCSE", "MYP"].map((exam, index) => (
              <span 
                key={index}
                className="px-4 py-2 rounded-full text-sm font-medium"
                style={{ 
                  backgroundColor: index % 2 === 0 ? `${colors.lightPurple}20` : `${colors.neonGreen}30`,
                  color: colors.darkPurple
                }}
              >
                {exam}
              </span>
            ))}
          </motion.div>
          
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <motion.button
              className="py-3 px-6 rounded-full text-white font-medium shadow-lg"
              style={{ backgroundColor: colors.darkPurple }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Request Free Consultation
            </motion.button>
            
            <motion.button
              className="py-3 px-6 rounded-full font-medium shadow-lg"
              style={{ backgroundColor: colors.neonGreen, color: colors.darkPurple }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              View Tutoring Packages
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default TutoringHero;