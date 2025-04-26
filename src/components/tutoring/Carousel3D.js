// tutoring/Carousel3D.js
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Carousel3D = ({ items, activeIndex, setActiveIndex, colors }) => {
  const [direction, setDirection] = useState(null);
  const [touchStartX, setTouchStartX] = useState(0);

  // Track direction change
  useEffect(() => {
    if (direction === null) return;
    
    const timer = setTimeout(() => {
      setDirection(null);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [direction]);

  // Update direction when activeIndex changes
  useEffect(() => {
    if (direction === null) return;
  }, [activeIndex, direction]);

  // Handle touch events for swiping
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    
    // Detect swipe direction
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swiped left
        setDirection('left');
        setActiveIndex((prev) => (prev + 1) % items.length);
      } else {
        // Swiped right
        setDirection('right');
        setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
      }
    }
  };

  // Animation variants
  const slideVariants = {
    enter: (direction) => {
      return {
        x: direction === 'right' ? -1000 : 1000,
        opacity: 0,
        scale: 0.8,
        rotateY: direction === 'right' ? -30 : 30,
        zIndex: 0
      };
    },
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      zIndex: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
        scale: { duration: 0.5 }
      }
    },
    exit: (direction) => {
      return {
        x: direction === 'right' ? 1000 : -1000,
        opacity: 0,
        scale: 0.8,
        rotateY: direction === 'right' ? 30 : -30,
        zIndex: 0,
        transition: {
          x: { type: 'spring', stiffness: 300, damping: 30 },
          opacity: { duration: 0.5 }
        }
      };
    }
  };

  // Tab button variants
  const tabVariants = {
    active: {
      backgroundColor: colors.lightPurple,
      color: colors.darkPurple,
      scale: 1.05,
      fontWeight: 600
    },
    inactive: {
      backgroundColor: 'transparent',
      color: '#333',
      scale: 1,
      fontWeight: 400
    }
  };

  return (
    <div 
      className="relative"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Tab navigation */}
      <div className="sticky top-16 bg-white shadow-md z-10 mb-4">
        <div className="container mx-auto overflow-x-auto">
          <div className="flex whitespace-nowrap py-2 px-4 min-w-full justify-center">
            {items.map((tab, index) => (
              <motion.button
                key={tab.id}
                onClick={() => {
                  setDirection(index > activeIndex ? 'left' : 'right');
                  setActiveIndex(index);
                }}
                className="px-4 py-2 mx-1 rounded-md text-sm font-medium transition-all"
                variants={tabVariants}
                animate={activeIndex === index ? 'active' : 'inactive'}
                whileHover={{ scale: 1.05, backgroundColor: `${colors.lightPurple}40` }}
                whileTap={{ scale: 0.98 }}
              >
                {tab.label}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* 3D Carousel Content */}
      <div className="perspective-1000 relative h-full w-full overflow-hidden bg-gray-50 min-h-[500px]">
        <AnimatePresence initial={false} mode="wait" custom={direction}>
          <motion.div
            key={activeIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute top-0 left-0 w-full h-full"
            style={{ 
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden"
            }}
          >
            <div className="container mx-auto px-4 py-8">
              {items[activeIndex].component}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Pagination indicators */}
      <div className="flex justify-center mt-6 mb-8 space-x-2">
        {items.map((_, index) => (
          <motion.button 
            key={index}
            className="w-3 h-3 rounded-full"
            style={{ 
              backgroundColor: index === activeIndex ? colors.darkPurple : '#CBD5E0',
              transition: 'background-color 0.3s ease'
            }}
            whileHover={{ scale: 1.2 }}
            onClick={() => {
              setDirection(index > activeIndex ? 'left' : 'right');
              setActiveIndex(index);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel3D;