// StatsSection.js
import React from 'react';
import { motion } from 'framer-motion';
import { Building, GraduationCap, Globe, Users } from 'lucide-react';

const StatsSection = ({ colors }) => {
  const stats = [
    {
      icon: <Building />,
      value: "500+",
      label: "University Partnerships Worldwide",
      delay: 0.2
    },
    {
      icon: <Globe />,
      value: "10+",
      label: "Countries for Study Destinations",
      delay: 0.4
    },
    {
      icon: <GraduationCap />,
      value: "35+",
      label: "Academic Courses and Test Prep Options",
      delay: 0.6
    },
    {
      icon: <Users />,
      value: "200+",
      label: "Success Stories and Counting",
      delay: 0.8
    }
  ];

  // Create a single array of countries with enough flags for a continuous effect
  const countries = [
    // First set
    { name: "USA", code: "us" },
    { name: "UK", code: "gb" },
    { name: "Canada", code: "ca" },
    { name: "Australia", code: "au" },
    { name: "Germany", code: "de" },
    { name: "France", code: "fr" },
    { name: "Singapore", code: "sg" },
    { name: "Japan", code: "jp" },
    { name: "Italy", code: "it" },
    { name: "Spain", code: "es" },
    { name: "Netherlands", code: "nl" },
    { name: "Sweden", code: "se" },
    { name: "Ireland", code: "ie" },
    { name: "New Zealand", code: "nz" },
    { name: "Switzerland", code: "ch" },
    // Repeat the same set for continuous effect
    { name: "USA", code: "us" },
    { name: "UK", code: "gb" },
    { name: "Canada", code: "ca" },
    { name: "Australia", code: "au" },
    { name: "Germany", code: "de" },
    { name: "France", code: "fr" },
    { name: "Singapore", code: "sg" },
    { name: "Japan", code: "jp" },
    { name: "Italy", code: "it" },
    { name: "Spain", code: "es" },
    { name: "Netherlands", code: "nl" },
    { name: "Sweden", code: "se" },
    { name: "Ireland", code: "ie" },
    { name: "New Zealand", code: "nz" },
    { name: "Switzerland", code: "ch" },
  ];

  // University logos for the bottom animation
  const universities = [
    { name: "Harvard University", country: "USA" },
    { name: "Oxford University", country: "UK" },
    { name: "Stanford University", country: "USA" },
    { name: "Massachusetts Institute of Technology", country: "USA" },
    { name: "University of Toronto", country: "Canada" },
    { name: "ETH Zurich", country: "Switzerland" },
    { name: "University of Melbourne", country: "Australia" },
    { name: "Imperial College London", country: "UK" },
    { name: "National University of Singapore", country: "Singapore" },
    { name: "University of Tokyo", country: "Japan" },
    // Repeat for continuous effect
    { name: "Harvard University", country: "USA" },
    { name: "Oxford University", country: "UK" },
    { name: "Stanford University", country: "USA" },
    { name: "Massachusetts Institute of Technology", country: "USA" },
    { name: "University of Toronto", country: "Canada" },
    { name: "ETH Zurich", country: "Switzerland" },
    { name: "University of Melbourne", country: "Australia" },
    { name: "Imperial College London", country: "UK" },
    { name: "National University of Singapore", country: "Singapore" },
    { name: "University of Tokyo", country: "Japan" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
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
          transition={{ duration: 0.6 }}
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
                duration: 40, // Slower speed for better visibility
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
                      src={`/api/placeholder/80/80`}
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
                duration: 0.6, 
                delay: stat.delay,
                type: "spring",
                stiffness: 100
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
                transition={{ duration: 0.5 }}
              >
                {React.cloneElement(stat.icon, { size: 24, strokeWidth: 1.5 })}
              </motion.div>
              <motion.h3 
                className="text-3xl md:text-4xl font-bold mb-2"
                style={{ color: colors.darkPurple }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: stat.delay + 0.2, duration: 0.5 }}
              >
                {stat.value}
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
          transition={{ duration: 0.8 }}
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
                duration: 45, // Slightly slower than flags
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
                    <img
                      src={`/api/placeholder/180/80`}
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