// tutoring/TutorsSection.js
import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Zap, Target, Star, Users, ChevronRight } from 'lucide-react';

const TutorsSection = ({ colors }) => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.div 
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      className="py-8"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center" style={{ color: colors.darkPurple }}>
          Our Expert Educators
        </h2>
        
        <motion.p 
          className="text-lg text-center text-gray-700 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          UniOversea tutors are selected through a rigorous process that ensures both subject expertise and teaching ability
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {[
            {
              title: "Academic Credentials",
              description: "All tutors hold at least a Master's degree in their teaching subject",
              icon: <Award size={24} />
            },
            {
              title: "Teaching Experience",
              description: "Minimum 3 years of teaching or tutoring experience, with specialized knowledge of relevant curricula and examination systems",
              icon: <BookOpen size={24} />
            },
            {
              title: "Continuous Training",
              description: "Regular professional development in pedagogy, curriculum updates, and examination trends to ensure cutting-edge teaching approaches",
              icon: <Zap size={24} />
            },
            {
              title: "Selection Process",
              description: "Multi-stage screening including subject knowledge tests, sample teaching demonstrations, and student feedback evaluation",
              icon: <Target size={24} />
            }
          ].map((qualification, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + (index * 0.1), duration: 0.6 }}
              whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="h-2" style={{ backgroundColor: colors.neonGreen }}></div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: `${colors.lightPurple}30` }}>
                  <div style={{ color: colors.darkPurple }}>
                    {qualification.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: colors.darkPurple }}>
                  {qualification.title}
                </h3>
                <p className="text-gray-700">
                  {qualification.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg p-6 mb-6 flex items-center justify-between"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <div className="flex items-center">
            <div className="flex -space-x-3 mr-4">
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-gray-200 flex items-center justify-center"
                  style={{ zIndex: 5 - i }}
                >
                  <Users size={24} style={{ color: colors.darkPurple }} />
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill={colors.neonGreen} color={colors.neonGreen} />
                ))}
                <span className="ml-2 font-bold">4.8/5</span>
              </div>
              <p className="text-gray-700">Our tutors maintain consistently high satisfaction ratings</p>
            </div>
          </div>
          <motion.button
            className="hidden md:flex items-center gap-1 py-2 px-4 rounded-full text-white font-medium"
            style={{ backgroundColor: colors.darkPurple }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Meet Our Tutors <ChevronRight size={16} />
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TutorsSection;