// StatsSection.js
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
      delay: 0.1  // Reduced from 0.2
    },
    {
      icon: <Globe />,
      value: "10+",
      label: "Countries for Study Destinations",
      delay: 0.15  // Reduced from 0.4
    },
    {
      icon: <GraduationCap />,
      value: "35+",
      label: "Academic Courses and Test Prep Options",
      delay: 0.2  // Reduced from 0.6
    },
    {
      icon: <Users />,
      value: "200+",
      label: "Success Stories and Counting",
      delay: 0.25  // Reduced from 0.8
    }
  ];

  // Create a single array of countries with enough flags for a continuous effect
  const countries = [
    // First set
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
    { name: "New Zealand", code: "nz", flag: "https://cdn.countryflags.com/thumbs/new-zealand/flag-square-500.png" }, // No URL provided for New Zealand
    { name: "Switzerland", code: "ch", flag: "https://cdn.countryflags.com/thumbs/switzerland/flag-square-500.png" },
    // Repeat the same set for continuous effect
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
    { name: "New Zealand", code: "nz", flag: "/api/placeholder/80/80" }, // No URL provided for New Zealand
    { name: "Switzerland", code: "ch", flag: "https://cdn.countryflags.com/thumbs/switzerland/flag-square-500.png" },
  ];

  // University logos for the bottom animation
  const universities = [
    { name: "Harvard University", country: "USA", logo: "/api/placeholder/180/80" },
    { name: "Oxford University", country: "UK", logo: "/api/placeholder/180/80" },
    { name: "Stanford University", country: "USA", logo: "/api/placeholder/180/80" },
    { name: "Massachusetts Institute of Technology", country: "USA", logo: "/api/placeholder/180/80" },
    { name: "University of Toronto", country: "Canada", logo: "https://fundit.fr/sites/default/files/styles/max_650x650/public/actors/2527-universite-toronto.png?itok=mPR77h6x" },
    { name: "ETH Zurich", country: "Switzerland", logo: "/api/placeholder/180/80" },
    { name: "University of Melbourne", country: "Australia", logo: "/api/placeholder/180/80" },
    { name: "Imperial College London", country: "UK", logo: "/api/placeholder/180/80" },
    { name: "National University of Singapore", country: "Singapore", logo: "/api/placeholder/180/80" },
    { name: "University of Tokyo", country: "Japan", logo: "/api/placeholder/180/80" },
    // Repeat for continuous effect
    { name: "Harvard University", country: "USA", logo: "/api/placeholder/180/80" },
    { name: "Oxford University", country: "UK", logo: "/api/placeholder/180/80" },
    { name: "Stanford University", country: "USA", logo: "/api/placeholder/180/80" },
    { name: "Massachusetts Institute of Technology", country: "USA", logo: "/api/placeholder/180/80" },
    { name: "University of Toronto", country: "Canada", logo: "https://fundit.fr/sites/default/files/styles/max_650x650/public/actors/2527-universite-toronto.png?itok=mPR77h6x" },
    { name: "ETH Zurich", country: "Switzerland", logo: "/api/placeholder/180/80" },
    { name: "University of Melbourne", country: "Australia", logo: "/api/placeholder/180/80" },
    { name: "Imperial College London", country: "UK", logo: "/api/placeholder/180/80" },
    { name: "National University of Singapore", country: "Singapore", logo: "/api/placeholder/180/80" },
    { name: "University of Tokyo", country: "Japan", logo: "/api/placeholder/180/80" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,  // Faster staggering (was 0.1)
        delayChildren: 0.2  // Reduced from 0.3
      }
    }
  };

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}  // Faster transition (was 0.6)
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
            <motion.div 
              className="flex"
              animate={{ 
                x: [0, -3200] // Long distance to ensure smooth loop
              }}
              transition={{ 
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear"
              }}
              style={{ width: "fit-content" }}
            >
              {countries.map((country, index) => (
                <motion.div
                  key={`${country.code}-${index}`}
                  className="mx-8 flex flex-col items-center" // Increased spacing between flags
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
                duration: 0.4,  // Faster transition (was 0.6)
                delay: stat.delay,
                type: "spring",
                stiffness: 200  // Increased stiffness for snappier animation (was 100)
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
                transition={{ duration: 0.3 }}  // Faster transition (was 0.5)
              >
                {React.cloneElement(stat.icon, { size: 24, strokeWidth: 1.5 })}
              </motion.div>
              <motion.h3 
                className="text-3xl md:text-4xl font-bold mb-2"
                style={{ color: colors.darkPurple }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: stat.delay + 0.1, duration: 0.3 }}  // Faster transition (was delay + 0.2, duration 0.5)
              >
                <CountUp target={stat.value} duration={1.5} />
              </motion.h3>
              <p className="text-sm md:text-base text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* University Logos Scroll Animation */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}  // Slightly faster (was 0.8)
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
          
          <div className="relative w-full overflow-hidden py-4">
            <motion.div 
              className="flex"
              animate={{ 
                x: [-3500, 0] // Moving from left to right (opposite of flags)
              }}
              transition={{ 
                repeat: Infinity,
                repeatType: "loop",
                duration: 45,
                ease: "linear"
              }}
              style={{ width: "fit-content" }}
            >
              {universities.map((university, index) => (
                <motion.div
                  key={`university-${index}`}
                  className="mx-6 flex flex-col items-center"
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                >
                  <div 
                    className="w-48 h-24 rounded-lg shadow-md overflow-hidden border-2 flex flex-col items-center justify-center bg-white p-3 mb-2" 
                    style={{ 
                      borderColor: index % 2 === 0 ? `${colors.darkPurple}40` : `${colors.lightPurple}80`,
                    }}
                  >
                    {university.name === "University of Toronto" ? (
                      <img
                        src={university.logo}
                        alt={`${university.name} logo`}
                        className="h-full w-auto object-contain"
                      />
                    ) : (
                      <>
                        <img
                          src={university.logo}
                          alt={`${university.name} logo`}
                          className="h-12 w-auto object-contain mb-1"
                        />
                        <div className="text-center">
                          <span className="text-xs font-bold block" style={{ color: colors.darkPurple }}>
                            {university.name}
                          </span>
                          <span className="text-xs text-gray-500">
                            {university.country}
                          </span>
                        </div>
                      </>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;