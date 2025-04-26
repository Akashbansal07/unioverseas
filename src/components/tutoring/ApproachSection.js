// tutoring/ApproachSection.js
import React from 'react';
import { motion } from 'framer-motion';

const ApproachSection = ({ colors }) => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  // Methodology pillars
  const methodologyPillars = [
    {
      title: "Conceptual Understanding",
      description: "We prioritize deep comprehension of fundamental concepts rather than memorization, enabling students to apply knowledge to new contexts."
    },
    {
      title: "Active Learning",
      description: "Our sessions incorporate interactive elements, discussions, and application exercises to keep students engaged and promote better retention."
    },
    {
      title: "Scaffolded Progression",
      description: "We build knowledge systematically, ensuring strong foundations before advancing to more complex topics."
    },
    {
      title: "Metacognitive Awareness",
      description: "Students are taught to understand their own learning processes, develop effective study strategies, and self-assess their progress."
    }
  ];

  return (
    <motion.div 
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      className="py-8"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center" style={{ color: colors.darkPurple }}>
          Our Pedagogical Approach
        </h2>
        
        <motion.p 
          className="text-lg text-center text-gray-700 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          The UniOversea teaching methodology is built on four pillars
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {methodologyPillars.map((pillar, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl shadow-md p-6 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + (index * 0.1), duration: 0.6 }}
              whileHover={{ y: -5, boxShadow: "0 10px 20px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <h3 className="text-xl font-bold mb-3" style={{ color: colors.darkPurple }}>
                {pillar.title}
              </h3>
              <p className="text-gray-700">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg p-6 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <h3 className="text-xl font-bold mb-4" style={{ color: colors.darkPurple }}>
            Structured Session Format
          </h3>
          <div className="space-y-4">
            {[
              "Concept review and clarification",
              "Guided practice with instructor feedback",
              "Independent application with support as needed",
              "Assessment of understanding",
              "Homework assignment and next-session preview"
            ].map((step, index) => (
              <motion.div 
                key={index}
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + (index * 0.1), duration: 0.5 }}
              >
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center mr-3 shrink-0"
                  style={{ backgroundColor: colors.darkPurple }}
                >
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                <div className="pt-1">
                  <p className="font-medium">{step}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ApproachSection;