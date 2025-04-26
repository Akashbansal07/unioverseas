// tutoring/MethodsSection.js
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Check } from 'lucide-react';

const MethodsSection = ({ colors }) => {
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
        <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: colors.darkPurple }}>
          Learning That Works For You
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div 
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
          >
            <div className="h-2" style={{ backgroundColor: colors.neonGreen }}></div>
            <div className="p-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: `${colors.lightPurple}30` }}>
                <BookOpen size={24} style={{ color: colors.darkPurple }} />
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: colors.darkPurple }}>One-on-One Tutoring</h3>
              <p className="text-gray-700">
                Personalized attention from subject specialists who adapt teaching methods to your learning style, pace, and specific challenges. Individual sessions allow for targeted improvement in areas of difficulty while building on your strengths.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
          >
            <div className="h-2" style={{ backgroundColor: colors.neonGreen }}></div>
            <div className="p-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: `${colors.lightPurple}30` }}>
                <Users size={24} style={{ color: colors.darkPurple }} />
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: colors.darkPurple }}>Small Group Classes</h3>
              <p className="text-gray-700">
                Collaborative learning environments with 3-5 students of similar academic levels. Our group sessions promote peer learning, healthy competition, and discussion-based understanding while maintaining individual attention through limited class sizes.
              </p>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg p-6 border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h3 className="text-xl font-bold mb-4" style={{ color: colors.darkPurple }}>Online Learning Platform</h3>
          <p className="mb-6 text-gray-700">
            All sessions are conducted on our secure, feature-rich online platform equipped with:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Interactive whiteboards",
              "Screen sharing capabilities",
              "Document collaboration tools",
              "Session recording for later review",
              "Integrated practice resources",
              "Progress tracking dashboards"
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + (index * 0.1), duration: 0.5 }}
              >
                <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3" style={{ backgroundColor: colors.neonGreen }}>
                  <Check size={16} style={{ color: colors.darkPurple }} />
                </div>
                <p>{feature}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MethodsSection;