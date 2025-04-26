// tutoring/ExamPrepSection.js
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Book, Award, Bookmark, BookOpen } from 'lucide-react';

const ExamPrepSection = ({ colors }) => {
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

  // List of exam preparation services
  const examPrepServices = [
    {
      title: "SAT/ACT Preparation",
      icon: <Target size={24} />,
      description: "Comprehensive preparation with diagnostic assessment, customized study plans, and regular mock tests. Our students average 250+ point improvements on the SAT and 4+ point improvements on the ACT.",
      subjects: []
    },
    {
      title: "Advanced Placement (AP) Courses",
      icon: <Book size={24} />,
      description: "Comprehensive support for all AP subjects with emphasis on concept mastery and exam preparation.",
      subjects: [
        "AP Calculus AB/BC", "AP Statistics", "AP Physics 1, 2, C", "AP Chemistry",
        "AP Biology", "AP Computer Science", "AP English Literature and Language",
        "AP History (World, European, US)", "AP Economics (Micro, Macro)",
        "AP Psychology", "AP Foreign Languages"
      ]
    },
    {
      title: "International Baccalaureate (IBDP)",
      icon: <Award size={24} />,
      description: "Expert tutoring for all IBDP subjects at both Standard Level and Higher Level. 85% of our IBDP students achieve 6-7 in their tutored subjects.",
      subjects: [
        "Studies in Language and Literature", "Language Acquisition",
        "Individuals and Societies", "Sciences", "Mathematics", "The Arts"
      ]
    },
    {
      title: "Middle Years Programme (MYP)",
      icon: <Bookmark size={24} />,
      description: "Supportive tutoring for all MYP subjects with focus on building strong foundational knowledge and critical thinking skills.",
      subjects: [
        "Mathematics", "Sciences", "Language and Literature", "Language Acquisition",
        "Individuals and Societies", "Arts, Physical Education, Design"
      ]
    },
    {
      title: "IGCSE/GCSE Support",
      icon: <BookOpen size={24} />,
      description: "Comprehensive tutoring for all IGCSE and GCSE subjects with focus on examination techniques and content mastery.",
      subjects: [
        "Mathematics", "English Language and Literature", "Sciences (Physics, Chemistry, Biology)",
        "History", "Geography", "Modern Languages", "Computer Science", 
        "Business Studies", "Economics"
      ]
    }
  ];

  return (
    <motion.div 
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      className="py-8"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center" style={{ color: colors.darkPurple }}>
          Comprehensive Test Preparation
        </h2>
        
        <motion.p 
          className="text-lg text-center text-gray-700 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Expertly designed preparation programs for standardized tests and international curricula
        </motion.p>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-8"
        >
          {examPrepServices.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemFadeIn}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="h-2" style={{ backgroundColor: colors.neonGreen }}></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: `${colors.lightPurple}30` }}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold" style={{ color: colors.darkPurple }}>
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-gray-700 mb-4">
                  {service.description}
                </p>
                
                {service.subjects.length > 0 && (
                  <div className="mt-4">
                    <h4 className="font-semibold mb-2" style={{ color: colors.darkPurple }}>Subjects Offered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.subjects.map((subject, subjIndex) => (
                        <span 
                          key={subjIndex}
                          className="px-3 py-1 rounded-full text-sm"
                          style={{ 
                            backgroundColor: `${colors.lightPurple}20`,
                            color: colors.darkPurple
                          }}
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ExamPrepSection;