import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, Heart, BookOpen, Award, Check, 
  Zap, Smile, Shield, Globe, ArrowRight, 
  MessageCircle, GraduationCap, Building, Star,
  ChevronLeft, ChevronRight
} from 'lucide-react';

const AboutUsPage = ({ colors = {
  darkPurple: "#4F46E5", 
  lightPurple: "#A5B4FC", 
  neonGreen: "#4ADE80"
}, onContactClick }) => {
  const [activeTab, setActiveTab] = useState(0);
  const carouselRef = useRef(null);
  
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
  
  const tabs = [
    { 
      id: 'story', 
      label: 'Our Story', 
      icon: <Building size={18} />
    },
    { 
      id: 'mission', 
      label: 'Our Mission', 
      icon: <Heart size={18} />
    },
    { 
      id: 'approach', 
      label: 'Our Approach', 
      icon: <Zap size={18} />
    },
    { 
      id: 'values', 
      label: 'Our Values', 
      icon: <Star size={18} />
    }
  ];

  // Updated values from paste-2.txt
  const values = [
    {
      title: "Academic Integrity",
      description: "We uphold the highest standards of honesty and ethical conduct in all our educational practices. We empower students to achieve success through legitimate skill development.",
      icon: <Users />
    },
    {
      title: "Excellence Without Compromise",
      description: "We pursue excellence in everything we do—from our teaching methodologies to our admissions guidance. We continuously update our curriculum and refine our processes.",
      icon: <MessageCircle />
    },
    {
      title: "Student-Centered Approach",
      description: "Our students' best interests guide every decision we make, creating personalized pathways rather than one-size-fits-all solutions.",
      icon: <BookOpen />
    },
    {
      title: "Global Perspective",
      description: "We prepare students not just for international education but for global citizenship, fostering cultural awareness and adaptability.",
      icon: <Award />
    },
    {
      title: "Transparency and Trust",
      description: "We provide honest assessments, realistic expectations, and complete information, allowing families to make informed decisions with confidence.",
      icon: <Shield />
    }
  ];
  
  // Updated approaches from paste-2.txt
  const approaches = [
    {
      title: "Personalized Learning Pathways",
      description: "We recognize that each student's journey is unique. Our educators create a customized plan tailored specifically to your goals and learning style.",
      icon: <Check />
    },
    {
      title: "Expert Specialized Instruction",
      description: "Our faculty consists of subject matter experts specifically trained in SAT, ACT, AP, IGCSE, IB, and GCSE curricula for targeted preparation.",
      icon: <BookOpen />
    },
    {
      title: "Data-Driven Strategies",
      description: "Our teaching methods and admissions recommendations are powered by comprehensive data analysis to maximize your academic performance.",
      icon: <GraduationCap />
    },
    {
      title: "Holistic Development",
      description: "We develop the whole student through critical thinking workshops and personal growth opportunities to ensure you thrive in an international environment.",
      icon: <Globe />
    }
  ];

  const nextTab = () => {
    setActiveTab((prev) => (prev + 1) % tabs.length);
  };

  const prevTab = () => {
    setActiveTab((prev) => (prev - 1 + tabs.length) % tabs.length);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 0: // Our Story
        return (
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: colors.darkPurple }}>
              Founded on Educational Principles
            </h2>
            
            <div className="mb-8 relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1" style={{ backgroundColor: colors.neonGreen }}></div>
              <p className="text-lg md:text-xl text-gray-700 pl-4 italic">
                Where students' interests truly come first.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-8 mb-12">
              <div>
                <p className="mb-6 text-lg text-gray-700">
                  UniOversea was born from a commitment to transform how educational guidance services operate. After years of witnessing industry practices where student outcomes were secondary to business interests, our founder set out to create a different kind of educational consultancy—one where transparency, ethics, and student success truly come first.
                </p>
                
                <p className="mb-6 text-lg text-gray-700">
                  Drawing on extensive experience both in tutoring and consulting, our founder recognized the critical need for an education service that would put the student needs first.
                </p>
              </div>
            </div>
            
            <p className="mb-6 text-lg text-gray-700">
              Today, UniOversea stands as a beacon of honest guidance in educational consulting, maintaining our founding commitment to placing your academic success and aspirations at the center of every recommendation we make.
            </p>
            
            <div className="bg-white rounded-xl shadow-md p-6 mt-8 border-l-4" style={{ borderColor: colors.neonGreen }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: colors.darkPurple }}>
                Our Promise to Students
              </h3>
              <p className="text-gray-700">
                We will always provide recommendations based exclusively on what's in your best interest, even when it doesn't align with our business interests. Your education journey deserves nothing less than complete honesty and transparency.
              </p>
            </div>
          </motion.div>
        );
      
      case 1: // Our Mission
        return (
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: colors.darkPurple }}>
              Guidance You Can Trust
            </h2>
            
            <div className="mb-8 relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1" style={{ backgroundColor: colors.neonGreen }}></div>
              <p className="text-lg md:text-xl text-gray-700 pl-4 italic">
                Restoring trust to educational guidance.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-8 mb-12">
              <div>
                <p className="mb-6 text-lg text-gray-700">
                  At UniOversea, our mission is to restore trust to educational guidance through unwavering commitment to student-centered outcomes. We strive to:
                </p>
                
                <motion.ul 
                  className="space-y-4 mb-6"
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                >
                  {[
                    "Provide university recommendations based solely on what's best for each student",
                    "Deliver expert tutoring focused on genuine learning and skill development",
                    "Offer counseling for international education pathways",
                    "Create customized strategies for each student's unique profile and aspirations",
                    "Build trust through complete transparency in our processes and recommendations",
                    "Maintain independence in our university recommendations, free from hidden influences"
                  ].map((item, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-start"
                      variants={itemFadeIn}
                    >
                      <div className="mr-2 mt-1 flex-shrink-0">
                        <ArrowRight size={16} style={{ color: colors.neonGreen }} />
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-white to-blue-50 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4" style={{ color: colors.darkPurple }}>
                A New Standard in Education Services
              </h3>
              <p className="text-gray-700">
                We're setting a new standard for educational consulting—one where success is measured by student outcomes rather than business metrics, and where honesty and transparency guide every interaction and recommendation.
              </p>
            </div>
          </motion.div>
        );
      
      case 2: // Our Approach (was case 3 before)
        return (
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: colors.darkPurple }}>
              The UniOversea Promise
            </h2>
            
            <div className="mb-8 relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1" style={{ backgroundColor: colors.neonGreen }}></div>
              <p className="text-lg md:text-xl text-gray-700 pl-4 italic">
                Our commitment to principled educational guidance.
              </p>
            </div>
            
            <p className="mb-8 text-lg text-gray-700">
              We provide end-to-end educational services that combine test preparation, curriculum support, and overseas admissions counseling. Our integrated approach ensures students receive seamless guidance from academic excellence through to international university placement.
            </p>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {approaches.map((approach, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
                  variants={itemFadeIn}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: `${colors.lightPurple}30` }}>
                    <div style={{ color: colors.darkPurple }}>
                      {approach.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: colors.darkPurple }}>
                    {approach.title}
                  </h3>
                  <p className="text-gray-600">
                    {approach.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
            
            <div className="bg-gradient-to-r from-white to-blue-50 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4" style={{ color: colors.darkPurple }}>
                The Difference in Our Approach
              </h3>
              <p className="mb-4 text-gray-700">
                What sets UniOversea apart is our unwavering commitment to putting your interests first. We've intentionally structured our business model to ensure we can provide truly objective guidance.
              </p>
              <p className="text-gray-700">
                Our counselors are evaluated based on student satisfaction and outcomes, not on how many students they place at partner institutions or how many premium packages they sell. This fundamental difference allows us to focus entirely on what's best for you.
              </p>
            </div>
          </motion.div>
        );
        
      case 3: // Our Values (was case 4 before)
        return (
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: colors.darkPurple }}>
              Our Guiding Principles
            </h2>
            
            <div className="mb-8 relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1" style={{ backgroundColor: colors.neonGreen }}></div>
              <p className="text-lg md:text-xl text-gray-700 pl-4 italic">
                Values that drive everything we do.
              </p>
            </div>
            
            <p className="mb-8 text-lg text-gray-700">
              At UniOversea, our core values aren't just statements on a website—they're principles that guide our daily operations and decision-making. These values ensure we consistently deliver educational guidance that puts your interests first.
            </p>
            
            <motion.div 
              className="grid grid-cols-1 gap-6 mb-12"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {values.map((value, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
                  variants={itemFadeIn}
                >
                  <div className="flex p-6">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mr-6 flex-shrink-0" style={{ backgroundColor: `${colors.lightPurple}30` }}>
                      <div style={{ color: colors.darkPurple }}>
                        {value.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2" style={{ color: colors.darkPurple }}>
                        {value.title}
                      </h3>
                      <p className="text-gray-600">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4" style={{ borderColor: colors.neonGreen }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: colors.darkPurple }}>
                Living Our Values
              </h3>
              <p className="text-gray-700">
                We hold ourselves accountable to these values through regular internal reviews and by actively seeking feedback from our students and parents. This ensures that we don't just talk about our values—we consistently live them through every interaction and recommendation.
              </p>
            </div>
          </motion.div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-white to-blue-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col items-center">
              <motion.div 
                className="md:w-full text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h1 
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                  style={{ color: colors.darkPurple }}
                >
                  About UniOversea
                </h1>
                <p className="text-xl md:text-2xl text-gray-700 mb-8">
                  Founded on a commitment to transform educational guidance with transparency and student-first principles.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    onClick={onContactClick}
                    className="py-3 px-6 rounded-full text-white font-medium shadow-lg flex items-center justify-center gap-2"
                    style={{ backgroundColor: colors.darkPurple }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <MessageCircle size={20} />
                    Contact Us
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tab Navigation with Arrows - Updated to match other pages */}
      <div ref={carouselRef} className="relative">
        {/* Navigation arrows positioned inside the sticky section to move with the navbar */}
        <div className="sticky top-20 z-30 h-0">
          <div className="container mx-auto relative">
            <div className="absolute left-2 top-64 md:left-12 md:top-72">
              <button
                className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg bg-white hover:bg-gray-100 transition-colors duration-300"
                onClick={prevTab}
              >
                <ChevronLeft size={24} color={colors.darkPurple} />
              </button>
            </div>
            
            <div className="absolute right-2 top-64 md:right-12 md:top-72">
              <button
                className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg bg-white hover:bg-gray-100 transition-colors duration-300"
                onClick={nextTab}
              >
                <ChevronRight size={24} color={colors.darkPurple} />
              </button>
            </div>
          </div>
        </div>
      
        {/* Updated Tab Navigation - position changed to match TutoringPage */}
        <div className="sticky top-20 bg-white shadow-md z-10 mb-4">
          <div className="container mx-auto overflow-x-auto">
            <div className="flex whitespace-nowrap py-2 px-4 min-w-full justify-center">
              {tabs.map((tab, index) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(index)}
                  className="px-4 py-2 mx-1 rounded-md text-sm font-medium transition-all flex items-center"
                  animate={{ 
                    backgroundColor: activeTab === index ? colors.lightPurple : 'transparent',
                    color: activeTab === index ? colors.darkPurple : '#333',
                    scale: activeTab === index ? 1.05 : 1,
                    fontWeight: activeTab === index ? 600 : 400
                  }}
                  whileHover={{ scale: 1.05, backgroundColor: `${colors.lightPurple}40` }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.label}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      
        {/* Content Section */}
        <div className="container mx-auto px-4 py-8 min-h-[500px]">
          {renderTabContent()}
        </div>
        
        {/* Pagination indicators */}
        <div className="flex justify-center mt-6 mb-8 space-x-2">
          {tabs.map((_, index) => (
            <motion.button 
              key={index}
              className="w-3 h-3 rounded-full"
              style={{ 
                backgroundColor: index === activeTab ? colors.darkPurple : '#CBD5E0',
                transition: 'background-color 0.3s ease'
              }}
              whileHover={{ scale: 1.2 }}
              onClick={() => setActiveTab(index)}
            />
          ))}
        </div>
        
        {/* Instructions for navigation */}
        <div className="text-center text-sm text-gray-500 mb-4">
          <p>Use arrow buttons to navigate between sections</p>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-white to-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: colors.darkPurple }}>
              Join the UniOversea Community
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Experience educational guidance that truly puts your interests first. Schedule a consultation to learn how our student-centered approach can benefit your academic journey.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={onContactClick}
                className="py-3 px-6 rounded-full text-white font-medium shadow-lg"
                style={{ backgroundColor: colors.darkPurple }}
              >
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;