import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Building, GraduationCap, Globe, Users } from 'lucide-react';

const CountUp = ({ target, duration = 1.5 }) => {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    if (!isInView) return;
    
    let startValue = 0;
    const endValue = parseInt(target.replace(/\D/g, ''));
    const totalFrames = Math.min(duration * 60, 100); // 60fps, max 100 frames
    const increment = endValue / totalFrames;
    
    let currentFrame = 0;
    
    const counter = setInterval(() => {
      currentFrame++;
      startValue += increment;
      
      if (currentFrame <= totalFrames) {
        setCount(Math.floor(startValue));
      } else {
        clearInterval(counter);
        setCount(endValue);
      }
    }, 1000 / 60);
    
    return () => clearInterval(counter);
  }, [target, duration, isInView]);
  
  return (
    <motion.div
      onViewportEnter={() => setIsInView(true)}
      viewport={{ once: true, amount: 0.5 }}
    >
      {target.includes('+') ? `${count}+` : count}
    </motion.div>
  );
};

const StatsSection = ({ colors }) => {
  const stats = [
    {
      icon: <Building />,
      value: "500+",
      label: "University Partnerships Worldwide",
      delay: 0.1
    },
    {
      icon: <Globe />,
      value: "10+",
      label: "Countries for Study Destinations",
      delay: 0.15
    },
    {
      icon: <GraduationCap />,
      value: "35+",
      label: "Academic Courses and Test Prep Options",
      delay: 0.2
    },
    {
      icon: <Users />,
      value: "200+",
      label: "Success Stories and Counting",
      delay: 0.25
    }
  ];

  // Create a single array of countries
  const countries = [
    { name: "USA", code: "us", flag: "https://cdn.countryflags.com/thumbs/united-states-of-america/flag-square-500.png" },
    { name: "UK", code: "gb", flag: "https://cdn.countryflags.com/thumbs/united-kingdom/flag-square-500.png" },
    { name: "Canada", code: "ca", flag: "https://cdn.countryflags.com/thumbs/canada/flag-square-500.png" },
    { name: "Australia", code: "au", flag: "https://cdn.countryflags.com/thumbs/australia/flag-square-500.png" },
    { name: "Germany", code: "de", flag: "https://cdn.countryflags.com/thumbs/germany/flag-square-500.png" },
    { name: "France", code: "fr", flag: "https://cdn.countryflags.com/thumbs/france/flag-square-500.png" },
    { name: "Singapore", code: "sg", flag: "https://cdn.countryflags.com/thumbs/singapore/flag-square-500.png" },
    { name: "Japan", code: "jp", flag: "https://cdn.countryflags.com/thumbs/japan/flag-square-500.png" },
    { name: "Italy", code: "it", flag: "https://cdn.countryflags.com/thumbs/italy/flag-square-500.png" },
    { name: "Spain", code: "es", flag: "https://cdn.countryflags.com/thumbs/spain/flag-square-500.png" },
    { name: "Netherlands", code: "nl", flag: "https://cdn.countryflags.com/thumbs/netherlands/flag-square-500.png" },
    { name: "Sweden", code: "se", flag: "https://cdn.countryflags.com/thumbs/sweden/flag-square-500.png" },
    { name: "Ireland", code: "ie", flag: "https://cdn.countryflags.com/thumbs/ireland/flag-square-500.png" },
    { name: "New Zealand", code: "nz", flag: "https://cdn.countryflags.com/thumbs/new-zealand/flag-square-500.png" },
    { name: "Switzerland", code: "ch", flag: "https://cdn.countryflags.com/thumbs/switzerland/flag-square-500.png" },
  ];

  // University logos array
  const universities = [
    { name: "Harvard University", country: "USA", logo: "https://upload.wikimedia.org/wikipedia/commons/7/70/Harvard_University_logo.svg" },
    { name: "Stanford University", country: "USA", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3jDkYBdQuEVMbQ1hy36otEDX9AlAFvvJy_g&s" },
    { name: "Yale University", country: "USA", logo: "https://rostrumedu.com/wp-content/uploads/al_opt_content/IMAGE/rostrumedu.com/wp-content/uploads/yale-117x150-2.webp.bv_resized_desktop.webp.bv.webp" },
    { name: "University of Michigan", country: "USA", logo: "https://rostrumedu.com/wp-content/uploads/al_opt_content/IMAGE/rostrumedu.com/wp-content/uploads/1200px-Seal_of_the_University_of_Michigan.svg_-150x150-2.webp.bv_resized_desktop.webp.bv.webp" },
    { name: "University of Cambridge", country: "UK", logo: "https://rostrumedu.com/wp-content/uploads/al_opt_content/IMAGE/rostrumedu.com/wp-content/uploads/university-of-cambridge-2-logo-png-transparent-119x150-2.webp.bv_resized_desktop.webp.bv.webp" },
    { name: "University of Oxford", country: "UK", logo: "https://rostrumedu.com/wp-content/uploads/al_opt_content/IMAGE/rostrumedu.com/wp-content/uploads/PngItem_2788638-120x150-2.webp.bv_resized_desktop.webp.bv.webp" },
    { name: "Cornell University", country: "USA", logo: "https://rostrumedu.com/wp-content/uploads/al_opt_content/IMAGE/rostrumedu.com/wp-content/uploads/Cornell_University_seal.svg_-150x150-2.webp.bv_resized_desktop.webp.bv.webp" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2
      }
    }
  };

  // Create a function to render flag items with dynamic keys
  const renderFlags = (isReversed = false) => {
    // Need to duplicate the array to create a continuous effect
    const itemsToRender = [...countries, ...countries, ...countries];
    
    return (
      <motion.div 
        className="flex"
        animate={{ 
          x: isReversed ? [0, 3200] : [0, -3200] 
        }}
        transition={{ 
          repeat: Infinity,
          repeatType: "loop",
          duration: 40,
          ease: "linear"
        }}
        style={{ width: "fit-content" }}
      >
        {itemsToRender.map((country, index) => (
          <motion.div
            key={`${country.code}-${index}-${isReversed ? 'rev' : 'fwd'}`}
            className="mx-8 flex flex-col items-center"
            whileHover={{ y: -5, scale: 1.1 }}
          >
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-3 shadow-lg mb-2" 
              style={{ 
                borderColor: index % 2 === 0 ? colors.neonGreen : colors.lightPurple,
                boxShadow: "0 4px 14px rgba(0, 0, 0, 0.1)"
              }}>
              <img
                src={country.flag}
                alt={`${country.name} flag`}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-sm font-medium" style={{ color: colors.darkPurple }}>
              {country.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    );
  };

  // Create a function to render university logos with dynamic keys and direction
  const renderUniversities = (isReversed = false) => {
    // Need to duplicate the array to create a continuous effect
    const itemsToRender = [...universities, ...universities, ...universities, ...universities, ...universities];
    
    return (
      <motion.div 
        className="flex"
        animate={{ 
          x: isReversed ? [0, 3200] : [0, -3200]
        }}
        transition={{ 
          repeat: Infinity,
          repeatType: "loop",
          duration: 45,
          ease: "linear"
        }}
        style={{ width: "fit-content" }}
      >
        {itemsToRender.map((university, index) => (
          <motion.div
            key={`university-${index}-${isReversed ? 'rev' : 'fwd'}`}
            className="mx-6 flex flex-col items-center"
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
          >
            <div 
              className="w-48 h-24 rounded-lg shadow-md overflow-hidden flex flex-col items-center justify-center bg-white p-3 mb-2" 
            >
              <img
                src={university.logo}
                alt={`${university.name} logo`}
                className="h-14 w-auto object-contain mb-1"
              />
              <div className="text-center">
                <span className="text-xs font-bold block" style={{ color: colors.darkPurple }}>
                  {university.name}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    );
  };

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: colors.darkPurple }}>
            Your Trusted Education Partner
          </h2>
          <div className="w-24 h-1 mx-auto my-4" style={{ backgroundColor: colors.neonGreen }}></div>
        </motion.div>

        {/* Horizontal Flag Scroll Animation */}
        <div className="mb-12">
          <motion.h3 
            className="text-xl md:text-2xl font-semibold text-center mb-6"
            style={{ color: colors.darkPurple }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Top Study Abroad Destinations
          </motion.h3>
          
          <div className="relative w-full overflow-hidden py-4">
            {renderFlags()}
          </div>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 md:p-8 text-center transform transition-all hover:shadow-xl"
              whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.4,
                delay: stat.delay,
                type: "spring",
                stiffness: 200
              }}
            >
              <motion.div 
                className="mx-auto flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full mb-4 md:mb-6"
                style={{ 
                  backgroundColor: `${colors.lightPurple}30`,
                  color: colors.darkPurple
                }}
                whileHover={{ 
                  rotate: [0, 10, -10, 0],
                  scale: 1.1,
                  backgroundColor: colors.neonGreen
                }}
                transition={{ duration: 0.3 }}
              >
                {React.cloneElement(stat.icon, { size: 24, strokeWidth: 1.5 })}
              </motion.div>
              <motion.h3 
                className="text-3xl md:text-4xl font-bold mb-2"
                style={{ color: colors.darkPurple }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: stat.delay + 0.1, duration: 0.3 }}
              >
                <CountUp target={stat.value} duration={1.5} />
              </motion.h3>
              <p className="text-sm md:text-base text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* University Logos Scroll Animation - Now with two rows moving in opposite directions */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h3 
            className="text-xl md:text-2xl font-semibold text-center mb-8"
            style={{ color: colors.darkPurple }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our Partner Universities
          </motion.h3>
          
          {/* First row - Default direction */}
          <div className="relative w-full overflow-hidden py-4">
            {renderUniversities(false)}
          </div>
          
          {/* Second row - Reverse direction */}
          <div className="relative w-full overflow-hidden py-4 mt-6">
            {renderUniversities(true)}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;