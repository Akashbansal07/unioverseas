// tutoring/FaqSection.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronRight } from 'lucide-react';

const FaqSection = ({ colors }) => {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemFadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // FAQ items
  const faqItems = [
    {
      question: "How are tutoring sessions conducted?",
      answer: "All tutoring sessions take place on our secure online platform featuring interactive whiteboards, screen sharing, document collaboration, and recording capabilities for later review."
    },
    {
      question: "How do you match students with tutors?",
      answer: "We match students based on learning style, academic needs, personality compatibility, and scheduling requirements. Students can request to change tutors if they feel the match isn't optimal."
    },
    {
      question: "What if I need to reschedule a session?",
      answer: "Sessions can be rescheduled with 24-hour notice. Last-minute cancellations may be accommodated on a case-by-case basis."
    },
    {
      question: "How do you track progress?",
      answer: "We conduct regular assessments, practice tests, and progress reviews. Parents and students receive detailed feedback reports highlighting improvements and areas needing additional focus."
    },
    {
      question: "Are materials included in the tutoring packages?",
      answer: "Yes, digital study materials, practice questions, and mock tests are included in all packages. Some specialized courses may require purchasing official textbooks or exam guides."
    },
    {
      question: "Do you guarantee score improvements?",
      answer: "While we don't offer guaranteed score increases, our track record shows consistent improvement for students who fully engage with our programs. Our average improvements exceed industry standards across all test types."
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
          Frequently Asked Questions
        </h2>
        
        <motion.p 
          className="text-lg text-center text-gray-700 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Find answers to common questions about our tutoring services
        </motion.p>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          {faqItems.map((faq, index) => (
            <motion.div 
              key={index}
              variants={itemFadeIn}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
            >
              <button 
                className="w-full px-6 py-4 text-left flex justify-between items-center"
                onClick={() => toggleFaq(index)}
                style={{ backgroundColor: expandedFaq === index ? `${colors.lightPurple}10` : 'white' }}
              >
                <h3 
                  className="text-lg font-medium"
                  style={{ color: colors.darkPurple }}
                >
                  {faq.question}
                </h3>
                <ChevronDown 
                  size={20} 
                  className={`transform transition-transform ${expandedFaq === index ? 'rotate-180' : ''}`}
                  style={{ color: colors.darkPurple }}
                />
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  expandedFaq === index ? 'max-h-96 pb-4' : 'max-h-0'
                }`}
              >
                <p className="text-gray-700">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <p className="mb-4 text-gray-700">
            Didn't find the answer you're looking for?
          </p>
          <motion.button
            className="py-3 px-6 rounded-full text-white font-medium inline-flex items-center gap-2"
            style={{ backgroundColor: colors.darkPurple }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Contact Us <ChevronRight size={16} />
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FaqSection;