// HeroSection.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Globe, BookOpen } from 'lucide-react';
// Import the image directly - this is the most reliable method
import modelImage from '../../utils/model.png';

const HeroSection = ({ colors, onContactClick, setActiveTab }) => {
  // State to track viewport dimensions
  const [dimensions, setDimensions] = useState({
    height: 0,
    width: 0,
    aspectRatio: 0
  });

  // Effect to set dimensions on mount and update on resize
  useEffect(() => {
    const updateDimensions = () => {
      const height = window.innerHeight;
      const width = window.innerWidth;
      setDimensions({
        height,
        width,
        aspectRatio: width / height
      });
    };

    // Initial dimensions
    updateDimensions();
    
    // Update dimensions on resize
    window.addEventListener('resize', updateDimensions);
    
    // Cleanup
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Determine if we should show the model image
  // Hide when aspect ratio is portrait-like (height > width or very slightly landscape)
  const shouldShowModel = dimensions.aspectRatio > 0.8;

  // Handle the consultation button click
  const handleConsultationClick = () => {
    if (onContactClick) {
      onContactClick();
    } else {
      // Fallback for when onContactClick is not provided
      const contactSection = document.querySelector('#contact-section');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Handle the study abroad button click
  const handleStudyAbroadClick = () => {
    if (setActiveTab) {
      setActiveTab('abroad');
    }
  };

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
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* Main content container */}
      <div className="container mx-auto px-4 md:px-8 relative z-10 h-full py-8">
        <div className="flex flex-col md:flex-row items-start justify-between h-full">
          {/* Left content side */}
          <motion.div 
            className={`${shouldShowModel ? 'md:w-1/2' : 'w-full'} z-10`}
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
              From Testprep to Admissions - We've got you
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
                onClick={handleConsultationClick}
              >
                <BookOpen size={20} />
                Request Free Consultation
              </motion.button>
              
              <motion.button
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium shadow-lg"
                style={{ backgroundColor: colors.neonGreen, color: colors.darkPurple }}
                whileHover={{ scale: 1.05, backgroundColor: "#E3FF6A" }}
                whileTap={{ scale: 0.98 }}
                onClick={handleStudyAbroadClick}
              >
                <Globe size={20} />
                Discover Study Abroad
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Image positioned separately from content flow with adjustments to show full image */}
      {shouldShowModel && (
        <motion.div 
          className="hidden md:flex" // Hide on mobile, display on medium screens and up
          style={{
            position: 'absolute',
            right: '5%',
            bottom: '0',
            width: '40%',
            height: '90%', /* Fixed height to control vertical space */
            zIndex: '5', /* Below the content */
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            overflow: 'visible'
          }}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          <img 
            src={modelImage} 
            alt="Student model" 
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain',
              objectPosition: 'bottom',
              display: 'block'
            }}
          />
        </motion.div>
      )}
      
      {/* Background effect - centered at right bottom corner */}
      <motion.div 
        className="absolute rounded-full opacity-20 z-0 hidden md:block" // Hide on mobile
        style={{ 
          backgroundColor: colors.lightPurple,
          width: '50%',
          height: '70%',
          right: '-12%',  /* Positioned to extend slightly off-screen */
          bottom: '-30%', /* Positioned to extend slightly off-screen */
          transform: 'translate(-25%, -25%)'  /* Pull the center toward the bottom right corner */
        }}
        initial={{ opacity: 0, x: 200, scale: 0.8 }}
        animate={{ opacity: 0.2, x: 0, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
      />
    </section>
  );
};

export default HeroSection;