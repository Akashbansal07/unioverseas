// HeroSection.js
import React from 'react';
import { motion } from 'framer-motion';
import { Globe, BookOpen } from 'lucide-react';

const HeroSection = ({ colors }) => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-blue-50 py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              style={{ color: colors.darkPurple }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              From Testprep to Admissions
            </motion.h1>
            <motion.h2
              className="text-3xl md:text-4xl font-semibold mb-6"
              style={{ color: colors.darkPurple }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Education That Puts <span className="underline decoration-4" style={{ textDecorationColor: colors.neonGreen }}>You First</span>
            </motion.h2>
            
            <motion.p 
              className="text-lg md:text-xl mb-8 text-gray-700 max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              At UniOversea, we place your educational journey and aspirations at the center of everything we do. 
              Our transparent approach to academic tutoring and international counseling ensures that every recommendation,
              every university suggestion, and every educational pathway we propose is aligned exclusively with what's best for your future.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <motion.button
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white font-medium shadow-lg"
                style={{ backgroundColor: colors.darkPurple }}
                whileHover={{ scale: 1.05, backgroundColor: "#3E3CD0" }}
                whileTap={{ scale: 0.98 }}
              >
                <BookOpen size={20} />
                Explore Tutoring Services
              </motion.button>
              
              <motion.button
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium shadow-lg"
                style={{ backgroundColor: colors.neonGreen, color: colors.darkPurple }}
                whileHover={{ scale: 1.05, backgroundColor: "#E3FF6A" }}
                whileTap={{ scale: 0.98 }}
              >
                <Globe size={20} />
                Discover Study Abroad
              </motion.button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              className="relative z-10 bg-white rounded-2xl shadow-2xl overflow-hidden border-8 border-white"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="aspect-w-4 aspect-h-3">
                <img 
                  src="/api/placeholder/600/450" 
                  alt="Students studying abroad" 
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 rounded-full opacity-20"
              style={{ backgroundColor: colors.lightPurple }}
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0, -5, 0],
              }}
              transition={{ 
                duration: 10, 
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;