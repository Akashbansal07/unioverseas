// tutoring/OverviewSection.js
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const OverviewSection = ({ colors }) => {
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
          Tutoring With Purpose
        </h2>
        
        <motion.div 
          className="mb-12 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <div className="absolute -left-4 top-0 bottom-0 w-1" style={{ backgroundColor: colors.neonGreen }}></div>
          <p className="text-lg md:text-xl text-gray-700 pl-4 italic">
            "What does this specific student need to succeed?"
          </p>
        </motion.div>
        
        <motion.p 
          className="mb-6 text-lg text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          At UniOversea, our tutoring philosophy begins with a simple question: "What does this specific student need to succeed?" Rather than applying one-size-fits-all approaches or focusing merely on test scores, we develop individualized learning strategies that build genuine understanding and long-term academic capabilities.
        </motion.p>
        
        <motion.p 
          className="mb-6 text-lg text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Our tutors are selected for both their subject expertise and their commitment to educational outcomes. We believe that true academic success comes from developing a solid foundation of knowledge, critical thinking abilities, and confidence—not just techniques to navigate standardized tests.
        </motion.p>
        
        <motion.p 
          className="mb-6 text-lg text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Each tutor is carefully matched with students based on learning style, academic needs, and educational goals to create a productive and engaging learning environment focused on real results.
        </motion.p>
        
        <motion.div 
          className="mt-12 bg-gradient-to-r from-white to-blue-50 p-6 rounded-xl shadow-md"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          <h3 className="text-xl font-bold mb-4" style={{ color: colors.darkPurple }}>
            The UniOversea Difference
          </h3>
          <ul className="space-y-3">
            {[
              "Personalized learning plans tailored to each student's needs",
              "Focus on building understanding, not just test-taking techniques",
              "Subject-expert tutors who care about educational outcomes",
              "Continuous progress monitoring and goal adjustment",
              "Supportive learning environment that builds confidence"
            ].map((item, index) => (
              <motion.li 
                key={index}
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + (index * 0.1), duration: 0.5 }}
              >
                <div className="mr-3 mt-1">
                  <Check size={18} style={{ color: colors.neonGreen }} />
                </div>
                <p>{item}</p>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default OverviewSection;