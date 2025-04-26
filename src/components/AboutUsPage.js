import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, Heart, BookOpen, Award, Check, 
  Zap, Smile, Shield, Globe, ArrowRight, 
  MessageCircle, GraduationCap, Building, Star
} from 'lucide-react';

const AboutUsPage = ({ colors = {
  darkPurple: "#4F46E5", 
  lightPurple: "#A5B4FC", 
  neonGreen: "#4ADE80"
} }) => {
  const [activeTab, setActiveTab] = useState(0);
  
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
      id: 'founder', 
      label: 'Our Founder', 
      icon: <GraduationCap size={18} />
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

  const values = [
    {
      title: "Student-Centered Decisions",
      description: "Every recommendation we make is based solely on what's best for your educational journey",
      icon: <Users />
    },
    {
      title: "Full Disclosure",
      description: "We're transparent about our processes, partnerships, and the reasoning behind our recommendations",
      icon: <MessageCircle />
    },
    {
      title: "Academic Honesty",
      description: "We help you showcase your strengths while maintaining complete authenticity in applications",
      icon: <BookOpen />
    },
    {
      title: "Educational Quality",
      description: "We never compromise on the quality of our tutoring or guidance to cut corners",
      icon: <Award />
    },
    {
      title: "Measured Success",
      description: "We define our success by your educational outcomes and satisfaction, not by our profit margins",
      icon: <Shield />
    }
  ];
  
  const approaches = [
    {
      title: "Transparency First",
      description: "We openly discuss all options available to you, your best interest is our only consideration",
      icon: <Check />
    },
    {
      title: "Evidence-Based Recommendations",
      description: "Our advice is grounded in careful analysis of your academic profile, aspirations, and real-world admissions data",
      icon: <BookOpen />
    },
    {
      title: "Subject Matter Expertise",
      description: "We match students with tutors who have expertise in their subjects and curricula, ensuring authentic learning",
      icon: <GraduationCap />
    },
    {
      title: "Long-term Perspective",
      description: "Our recommendations prioritize your long-term educational and career success, not short-term conveniences or metrics",
      icon: <Globe />
    }
  ];

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
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <p className="mb-6 text-lg text-gray-700">
                  UniOversea was born from a commitment to transform how educational guidance services operate. After years of witnessing industry practices where student outcomes were secondary to business interests, our founder set out to create a different kind of educational consultancy—one where transparency, ethics, and student success truly come first.
                </p>
                
                <p className="mb-6 text-lg text-gray-700">
                  Drawing on extensive experience both in tutoring and consulting, our founder recognized the critical need for an education service that would put the student needs first.
                </p>
              </div>
              
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <img 
                  src="/api/placeholder/500/400" 
                  alt="UniOversea founding team" 
                  className="w-full h-auto rounded-xl shadow-xl"
                />
                
                <motion.div 
                  className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-xl"
                  style={{ backgroundColor: colors.neonGreen, opacity: 0.3 }}
                  animate={{ 
                    rotate: [0, 1, 0, -1, 0],
                    scale: [1, 1.01, 1, 0.99, 1]
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
              </motion.div>
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <motion.div 
                className="relative order-2 md:order-1"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <img 
                  src="/api/placeholder/500/400" 
                  alt="UniOversea mission" 
                  className="w-full h-auto rounded-xl shadow-xl"
                />
                
                <motion.div 
                  className="absolute -z-10 -bottom-4 -left-4 w-full h-full rounded-xl"
                  style={{ backgroundColor: colors.lightPurple, opacity: 0.3 }}
                  animate={{ 
                    rotate: [0, -1, 0, 1, 0],
                    scale: [1, 0.99, 1, 1.01, 1]
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
              </motion.div>
              
              <div className="order-1 md:order-2">
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
        
      case 2: // Our Founder
        return (
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: colors.darkPurple }}>
              Leadership With Purpose
            </h2>
            
            <div className="mb-8 relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1" style={{ backgroundColor: colors.neonGreen }}></div>
              <p className="text-lg md:text-xl text-gray-700 pl-4 italic">
                Driven by a vision for better educational guidance.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="md:col-span-2">
                <p className="mb-6 text-lg text-gray-700">
                  UniOversea was founded by an education specialist with a clear vision: to create a student-first alternative to the status quo in educational consulting.
                </p>
                
                <p className="mb-6 text-lg text-gray-700">
                  With a Bachelor's and Master's degree in Physics, our founder brings strong academic credentials and a scientific approach to educational methodology. More importantly, years of experience in both tutoring and counseling roles provided firsthand insight into industry practices that often prioritized business interests over student needs.
                </p>
                
                <p className="mb-6 text-lg text-gray-700">
                  These experiences catalyzed the founding principle of UniOversea: that students deserve guidance based solely on what will best serve their educational goals and future prospects.
                </p>
                
                <p className="text-lg text-gray-700">
                  This commitment to student-centered guidance drives every aspect of UniOversea's operations and shapes our unique approach to both tutoring and international education counseling.
                </p>
              </div>
              
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <img 
                  src="/api/placeholder/300/400" 
                  alt="UniOversea founder" 
                  className="w-full h-auto rounded-xl shadow-xl"
                />
                
                <motion.div 
                  className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-xl"
                  style={{ backgroundColor: colors.darkPurple, opacity: 0.2 }}
                  animate={{ 
                    rotate: [0, 1, 0, -1, 0],
                    scale: [1, 1.01, 1, 0.99, 1]
                  }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
              </motion.div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4" style={{ borderColor: colors.darkPurple }}>
              <div className="flex items-start">
                <div className="mr-3 mt-1">
                  <GraduationCap size={24} style={{ color: colors.darkPurple }} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: colors.darkPurple }}>
                    Foundational Experience
                  </h3>
                  <p className="text-gray-700">
                    The blend of strong academic credentials with real-world experience in both tutoring and educational consulting gives our founder a unique perspective on how to effectively serve students with integrity and expertise.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        );
      
      case 3: // Our Approach
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
              Our approach to educational guidance is built on principles that place your needs and aspirations at the center of every recommendation we make. We believe in a transparent, evidence-based process that consistently leads to better educational outcomes.
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
        
      case 4: // Our Values
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
            <div className="flex flex-col md:flex-row items-center">
              <motion.div 
                className="md:w-1/2 mb-10 md:mb-0 md:pr-12"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
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
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    className="py-3 px-6 rounded-full text-white font-medium shadow-lg flex items-center justify-center gap-2"
                    style={{ backgroundColor: colors.darkPurple }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <MessageCircle size={20} />
                    Contact Us
                  </motion.button>
                  <motion.button
                    className="py-3 px-6 rounded-full font-medium shadow-lg flex items-center justify-center gap-2"
                    style={{ backgroundColor: colors.neonGreen, color: colors.darkPurple }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Users size={20} />
                    Meet Our Team
                  </motion.button>
                </div>
              </motion.div>
              
              <motion.div 
                className="md:w-1/2 relative"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <img 
                  src="/api/placeholder/600/400" 
                  alt="The UniOversea team" 
                  className="w-full h-auto rounded-xl shadow-xl"
                />
                <motion.div 
                  className="absolute -bottom-5 -right-5 bg-white p-4 rounded-lg shadow-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: colors.neonGreen }}>
                      <Smile size={24} color={colors.darkPurple} />
                    </div>
                    <div className="text-sm">
                      <p className="font-bold" style={{ color: colors.darkPurple }}>Student-First Philosophy</p>
                      <p className="text-gray-500">Honest guidance, always</p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-xl"
                  style={{ backgroundColor: colors.neonGreen, opacity: 0.3 }}
                  animate={{ 
                    rotate: [0, 1, 0, -1, 0],
                    scale: [1, 1.01, 1, 0.99, 1]
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tab Navigation */}
      <div className="sticky top-16 bg-white shadow-md z-10 mb-4">
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
      <div className="container mx-auto px-4 py-8 min-h-[600px]">
        {renderTabContent()}
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
                className="py-3 px-6 rounded-full text-white font-medium shadow-lg"
                style={{ backgroundColor: colors.darkPurple }}
              >
                Schedule a Consultation
              </button>
              <button
                className="py-3 px-6 rounded-full font-medium shadow-lg"
                style={{ backgroundColor: colors.neonGreen, color: colors.darkPurple }}
              >
                Explore Our Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;