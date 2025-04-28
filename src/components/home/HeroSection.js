// HeroSection.js
import React from 'react';
import { motion } from 'framer-motion';
import { Globe, BookOpen } from 'lucide-react';
// Import the image directly - this is the most reliable method
import modelImage from '../../utils/model.png';

const HeroSection = ({ colors }) => {
  return (
    <section 
      className="hero-section min-h-screen flex items-center justify-center relative"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/20/cambridge.JPG?q=80&w=2947&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        marginTop: '-64px', /* Compensate for the navbar height */
        paddingTop: '64px'  /* Add padding equal to navbar height to maintain content position */
      }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 md:px-8 relative z-10 h-full py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 h-full">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              From Testprep to Admissions
            </motion.h1>
            <motion.h2
              className="text-3xl md:text-4xl font-semibold mb-6 text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Education That Puts <span className="underline decoration-4" style={{ textDecorationColor: colors.neonGreen }}>You First</span>
            </motion.h2>
            
            <motion.p 
              className="text-lg md:text-xl mb-8 text-white max-w-2xl"
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
            className="md:w-1/2 relative h-full flex items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              className="relative z-10 rounded-2xl overflow-hidden h-3/4"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              style={{ height: "100%" }} /* Full height of the container */
            >
              <div className="h-full w-full">
                {/* Use the imported image variable */}
                <img 
                  src={modelImage} 
                  alt="Student model" 
                  className="object-cover w-full h-full rounded-lg"
                  style={{ objectPosition: "center top" }} /* Align image to the top */
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