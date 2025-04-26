// tutoring/TutoringCta.js
import React from 'react';
import { motion } from 'framer-motion';

const TutoringCta = ({ colors }) => {
  return (
    <motion.div 
      className="bg-gradient-to-br from-white to-blue-50 py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ color: colors.darkPurple }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Ready to Transform Your Academic Journey?
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Join the hundreds of students who have achieved their academic goals with UniOversea's expert tutoring services
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <motion.button
              className="py-3 px-6 rounded-full text-white font-medium shadow-lg"
              style={{ backgroundColor: colors.darkPurple }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Schedule a Free Consultation
            </motion.button>
            
            <motion.button
              className="py-3 px-6 rounded-full font-medium shadow-lg"
              style={{ backgroundColor: colors.neonGreen, color: colors.darkPurple }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Learn About Our Tutors
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default TutoringCta;