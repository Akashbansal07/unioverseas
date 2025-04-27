// StudyAbroadPage.js
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe, Check, ChevronRight, ArrowRight, MapPin, 
  GraduationCap, FilePlus, Users, Calendar, Briefcase,
  FileText, CreditCard, Plane, School, CheckCircle, Star, Plus,
  ChevronLeft, ChevronDown
} from 'lucide-react';

// 3D Carousel Component
const Carousel3D = ({ items, activeIndex, setActiveIndex, colors }) => {
  const [direction, setDirection] = useState(null);
  const [touchStartX, setTouchStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const containerRef = useRef(null);

  // Handle wheel events for horizontal scrolling
  useEffect(() => {
    const handleWheel = (e) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        // Horizontal scrolling with mousepad
        if (e.deltaX > 50) {
          // Scrolled right
          setDirection('left');
          setActiveIndex((prev) => (prev + 1) % items.length);
        } else if (e.deltaX < -50) {
          // Scrolled left
          setDirection('right');
          setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
        }
      }
    };

    const element = containerRef.current;
    if (element) {
      element.addEventListener('wheel', handleWheel, { passive: true });
    }

    return () => {
      if (element) {
        element.removeEventListener('wheel', handleWheel);
      }
    };
  }, [activeIndex, items.length, setActiveIndex]);

  // Handle touch events for swiping on mobile
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    
    // Detect swipe direction
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swiped left
        setDirection('left');
        setActiveIndex((prev) => (prev + 1) % items.length);
      } else {
        // Swiped right
        setDirection('right');
        setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
      }
    }
  };

  // Handle mouse drag events
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    // Optional: add visual feedback during drag
  };

  const handleMouseUp = (e) => {
    if (!isDragging) return;
    
    const diff = startX - e.clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Dragged left
        setDirection('left');
        setActiveIndex((prev) => (prev + 1) % items.length);
      } else {
        // Dragged right
        setDirection('right');
        setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
      }
    }
    
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // Animation variants
  const slideVariants = {
    enter: (direction) => {
      return {
        x: direction === 'right' ? -1000 : 1000,
        opacity: 0,
        scale: 0.8,
        rotateY: direction === 'right' ? -30 : 30,
        zIndex: 0
      };
    },
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      zIndex: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
        scale: { duration: 0.5 }
      }
    },
    exit: (direction) => {
      return {
        x: direction === 'right' ? 1000 : -1000,
        opacity: 0,
        scale: 0.8,
        rotateY: direction === 'right' ? 30 : -30,
        zIndex: 0,
        transition: {
          x: { type: 'spring', stiffness: 300, damping: 30 },
          opacity: { duration: 0.5 }
        }
      };
    }
  };

  return (
    <div 
      ref={containerRef}
      className="relative"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
    >
      {/* Tab navigation */}
      <div className="sticky top-16 bg-white shadow-md z-10 mb-4">
        <div className="container mx-auto overflow-x-auto">
          <div className="flex whitespace-nowrap py-2 px-4 min-w-full justify-center">
            {items.map((tab, index) => (
              <motion.button
                key={tab.id}
                onClick={() => {
                  setDirection(index > activeIndex ? 'left' : 'right');
                  setActiveIndex(index);
                }}
                className="px-4 py-2 mx-1 rounded-md text-sm font-medium transition-all flex items-center"
                animate={{ 
                  backgroundColor: activeIndex === index ? colors.lightPurple : 'transparent',
                  color: activeIndex === index ? colors.darkPurple : '#333',
                  scale: activeIndex === index ? 1.05 : 1,
                  fontWeight: activeIndex === index ? 600 : 400
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

      {/* 3D Carousel Content */}
      <div className="perspective-1000 relative w-full overflow-hidden bg-gray-50">
        <AnimatePresence initial={false} mode="wait" custom={direction}>
          <motion.div
            key={activeIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full"
            style={{ 
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden"
            }}
          >
            <div className="container mx-auto px-4 py-8">
              {/* Content section with auto height */}
              <div className="min-h-[500px]">
                {items[activeIndex].component}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Pagination indicators */}
      <div className="flex justify-center mt-6 mb-8 space-x-2">
        {items.map((_, index) => (
          <motion.button 
            key={index}
            className="w-3 h-3 rounded-full"
            style={{ 
              backgroundColor: index === activeIndex ? colors.darkPurple : '#CBD5E0',
              transition: 'background-color 0.3s ease'
            }}
            whileHover={{ scale: 1.2 }}
            onClick={() => {
              setDirection(index > activeIndex ? 'left' : 'right');
              setActiveIndex(index);
            }}
          />
        ))}
      </div>
      
      {/* Instructions for navigation */}
      <div className="text-center text-sm text-gray-500 mb-4">
        <p>Swipe, use arrow buttons, or scroll horizontally to navigate between sections</p>
      </div>
    </div>
  );
};

const StudyAbroadPage = ({ colors }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeDestination, setActiveDestination] = useState('usa');
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

  // Tabs for the page
  const tabs = [
    { 
      id: 'overview', 
      label: 'Overview', 
      icon: <Globe size={18} />,
      component: <OverviewContent colors={colors} />
    },
    { 
      id: 'process', 
      label: 'Our Process', 
      icon: <ArrowRight size={18} />,
      component: <ProcessContent colors={colors} />
    },
    { 
      id: 'destinations', 
      label: 'Destinations', 
      icon: <MapPin size={18} />,
      component: <DestinationsContent colors={colors} activeDestination={activeDestination} setActiveDestination={setActiveDestination} />
    },
    { 
      id: 'counselors', 
      label: 'Counselors', 
      icon: <Users size={18} />,
      component: <CounselorsContent colors={colors} />
    },
    { 
      id: 'success', 
      label: 'Success Stories', 
      icon: <Star size={18} />,
      component: <SuccessContent colors={colors} />
    },
    { 
      id: 'packages', 
      label: 'Packages', 
      icon: <Briefcase size={18} />,
      component: <PackagesContent colors={colors} />
    },
    { 
      id: 'faq', 
      label: 'FAQ', 
      icon: <CheckCircle size={18} />,
      component: <FaqContent colors={colors} expandedFaq={expandedFaq} toggleFaq={toggleFaq} />
    }
  ];

  const nextTab = () => {
    setActiveTab((prev) => (prev + 1) % tabs.length);
  };

  const prevTab = () => {
    setActiveTab((prev) => (prev - 1 + tabs.length) % tabs.length);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
   {/* Hero Section */}
<div 
  className="py-24 md:py-32 lg:py-40 bg-cover bg-center" 
  style={{ 
    backgroundImage: "url('https://images.unsplash.com/photo-1495149905644-c9f27692c2c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZmxhZ3N8ZW58MHx8MHx8fDA%3D')",
    backgroundColor: "rgba(0,0,0,0.7)",
    backgroundBlendMode: "overlay"
  }}
>
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
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
          >
            Study Abroad Counseling
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">
            Expert guidance for your international education journey, with your academic future as our only priority.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              className="py-3 px-6 rounded-full text-white font-medium shadow-lg flex items-center justify-center gap-2"
              style={{ backgroundColor: colors.darkPurple }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Users size={20} />
              Free Consultation
            </motion.button>
            <motion.button
              className="py-3 px-6 rounded-full font-medium shadow-lg flex items-center justify-center gap-2"
              style={{ backgroundColor: colors.neonGreen, color: colors.darkPurple }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Globe size={20} />
              Explore Destinations
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
            alt="Students studying abroad" 
            className="w-full h-auto rounded-xl shadow-xl"
          />
          <motion.div 
            className="absolute -bottom-5 -right-5 bg-white p-4 rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[...Array(3)].map((_, i) => (
                  <div 
                    key={i} 
                    className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-gray-200"
                    style={{ zIndex: 3 - i }}
                  >
                    <img 
                      src={`/api/placeholder/50/50?${i}`} 
                      alt="Student" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <p className="font-bold text-gray-800">100% Offer Guarantee</p>
                <p className="text-gray-600">Student-centered approach</p>
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
      
      {/* 3D Carousel Control */}
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 z-20">
          <motion.button
            className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg bg-white"
            onClick={prevTab}
            whileHover={{ scale: 1.1, backgroundColor: colors.neonGreen }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft size={24} color={colors.darkPurple} />
          </motion.button>
        </div>
        
        <div className="absolute right-4 top-1/2 -translate-y-1/2 z-20">
          <motion.button
            className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg bg-white"
            onClick={nextTab}
            whileHover={{ scale: 1.1, backgroundColor: colors.neonGreen }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight size={24} color={colors.darkPurple} />
          </motion.button>
        </div>
        
        <Carousel3D 
          items={tabs}
          activeIndex={activeTab}
          setActiveIndex={setActiveTab}
          colors={colors}
        />
      </div>
      
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-white to-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: colors.darkPurple }}>
              Begin Your Global Education Journey
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Schedule a free consultation with our expert counselors to discuss your international education goals.
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
                Explore Service Packages
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Components for each tab section

// Overview Content Component
const OverviewContent = ({ colors }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: colors.darkPurple }}>
        Study Abroad Guidance
      </h2>
      
      <div className="mb-8 relative">
        <div className="absolute -left-4 top-0 bottom-0 w-1" style={{ backgroundColor: colors.neonGreen }}></div>
        <p className="text-lg md:text-xl text-gray-700 pl-4 italic">
          We put your education first.
        </p>
      </div>
      
      <p className="mb-6 text-lg text-gray-700">
        UniOversea's study abroad counseling services are built on one fundamental principle: We put your education first. Our experienced counselors provide recommendations based exclusively on what's right for your academic profile, career aspirations, and personal preferences.
      </p>
      
      <p className="mb-6 text-lg text-gray-700">
        We believe that honest, transparent guidance is the only way to help students make truly informed decisions about their international education journey. Our counselors will always explain the reasoning behind their recommendations and present all viable options.
      </p>
      
      <p className="mb-8 text-lg text-gray-700">
        From initial university selection through post-admission preparation, our dedicated team remains your advocate and trusted advisor throughout the educational journey, with your best interests as our only priority.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {[
          {
            title: "Transparent Guidance",
            description: "We always explain our reasoning and present all viable options for your consideration.",
            icon: <Check />
          },
          {
            title: "Student-First Approach",
            description: "Your educational goals and preferences drive our recommendations—not hidden incentives.",
            icon: <GraduationCap />
          },
          {
            title: "End-to-End Support",
            description: "Comprehensive assistance from university selection through post-admission preparation.",
            icon: <Globe />
          }
        ].map((feature, index) => (
          <div 
            key={index}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: `${colors.lightPurple}30` }}>
              <div style={{ color: colors.darkPurple }}>
                {feature.icon}
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2" style={{ color: colors.darkPurple }}>
              {feature.title}
            </h3>
            <p className="text-gray-600">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
      
      <div className="bg-gradient-to-r from-white to-blue-50 p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-bold mb-4" style={{ color: colors.darkPurple }}>
          Our University Partnerships
        </h3>
        <p className="mb-4 text-gray-700">
          UniOversea has established relationships with universities worldwide, but our recommendations are never influenced by these connections. While we can provide insights about numerous institutions, our recommendations are always based on fit for your specific profile and goals.
        </p>
        <p className="text-gray-700">
          We will clearly identify when we're discussing partner universities, and we pledge that our guidance remains focused exclusively on what's best for your educational journey—never our business interests.
        </p>
      </div>
    </div>
  );
};

// Process Content Component
const ProcessContent = ({ colors }) => {
  // Journey steps
  const journeySteps = [
    {
      title: "Initial Consultation",
      description: "A comprehensive discussion to understand your academic background, extracurricular achievements, career goals, and study abroad aspirations. We'll evaluate your profile and establish realistic targets.",
      timeline: "Week 1",
      icon: <Users />
    },
    {
      title: "Profile Assessment",
      description: "Detailed analysis of your academic record, standardized test scores, extracurricular activities, and personal achievements to identify strengths and areas for enhancement.",
      timeline: "Week 2",
      icon: <FileText />
    },
    {
      title: "University Shortlisting",
      description: "Strategic selection of universities categorized as reach, target, and safety options across your preferred destinations, considering your profile strength, career goals, and personal preferences.",
      timeline: "Weeks 3-4",
      icon: <School />
    },
    {
      title: "Application Strategy",
      description: "Development of a customized application timeline and approach for each university, highlighting unique angles for different institutions while maintaining authenticity.",
      timeline: "Week 5",
      icon: <Briefcase />
    },
    {
      title: "Document Preparation",
      description: "Expert guidance for crafting compelling: Statements of Purpose, Personal Statements, Essays and Supplemental Questions, Resumes/CVs, Letters of Recommendation.",
      timeline: "Weeks 6-10",
      icon: <FilePlus />
    },
    {
      title: "Application Submission",
      description: "Thorough review of all application components and assisted submission to ensure accuracy, completeness, and timely filing for each university.",
      timeline: "According to university deadlines",
      icon: <Check />
    }
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center" style={{ color: colors.darkPurple }}>
        Your Path to Global Education
      </h2>
      
      <p className="text-lg text-center text-gray-700 mb-12 max-w-3xl mx-auto">
        Our comprehensive, step-by-step process guides you seamlessly from initial consultation 
        to your university destination.
      </p>
      
      <div className="relative mb-12">
        {/* Journey Timeline */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
        
        {journeySteps.map((step, index) => (
          <div 
            key={index}
            className={`relative mb-12 md:mb-16 ${index % 2 === 0 ? 'md:text-right' : ''}`}
          >
            <div className="md:flex items-center">
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:order-2 md:pl-12'}`}>
                <div className="bg-white rounded-xl shadow-md p-6">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3" style={{ backgroundColor: `${colors.lightPurple}30` }}>
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold" style={{ color: colors.darkPurple }}>
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {step.description}
                  </p>
                  <div 
                    className="inline-block px-3 py-1 rounded-full text-sm font-medium"
                    style={{ 
                      backgroundColor: `${colors.lightPurple}20`,
                      color: colors.darkPurple
                    }}
                  >
                    Timeline: {step.timeline}
                  </div>
                </div>
              </div>
              
              {/* Timeline Node */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-white border-4 border-gray-200 z-10"></div>
                <div className="w-6 h-6 rounded-full absolute" style={{ backgroundColor: colors.neonGreen }}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center">
        <button
          className="px-6 py-3 rounded-full font-medium inline-flex items-center gap-2"
          style={{ backgroundColor: colors.darkPurple, color: 'white' }}
        >
          Schedule Your Initial Consultation
          <Calendar size={18} />
        </button>
      </div>
    </div>
  );
};

// Destinations Content Component
const DestinationsContent = ({ colors, activeDestination, setActiveDestination }) => {
  // Destinations data
  const destinations = {
    usa: {
      name: "United States",
      flag: "/api/placeholder/48/36",
      description: "Home to many of the world's top-ranked universities, the US offers diverse academic programs, cutting-edge research opportunities, and a vibrant campus life.",
      universities: [
        "Harvard University", "Stanford University", "MIT", 
        "University of California Berkeley", "University of Michigan", "New York University"
      ],
      specialties: ["Business", "Engineering", "Computer Science", "Liberal Arts"],
      requirements: [
        "Standardized Tests: SAT/ACT (for under-graduate programs), TOEFL/IELTS, GRE/GMAT (for graduate programs)",
        "Academic Records: Transcripts, GPA (typically 3.0+ for competitive universities)",
        "Essays: Personal Statement, Supplemental Essays",
        "Recommendations: 2-3 Letters",
        "Extracurricular Activities: Significant importance"
      ],
      timeline: [
        "Early Decision/Action: September",
        "Regular Decision: December/January",
        "Decision Release: March-April"
      ]
    },
    uk: {
      name: "United Kingdom",
      flag: "/api/placeholder/48/36",
      description: "Known for prestigious universities with centuries of tradition, focused degree programs, and shorter duration undergraduate courses (typically 3 years).",
      universities: [
        "University of Oxford", "University of Cambridge", "Imperial College London", 
        "London School of Economics", "University of Edinburgh"
      ],
      specialties: ["Medicine", "Law", "Engineering", "Economics", "Arts"],
      requirements: [
        "Standardized Tests: IELTS/TOEFL, BMAT/UKCAT for medicine",
        "Academic Records: Predicted grades, transcripts",
        "Personal Statement: Single statement for all UCAS applications",
        "References: Academic reference",
        "Interviews: For competitive programs and universities"
      ],
      timeline: [
        "UCAS Submission: October (Medicine, Oxford, Cambridge), January (most programs)",
        "Decision Release: Rolling through May"
      ]
    },
    canada: {
      name: "Canada",
      flag: "/api/placeholder/48/36",
      description: "Offering high-quality education with relatively affordable tuition and post-graduate work opportunities in a safe, multicultural environment.",
      universities: [
        "University of Toronto", "University of British Columbia", "McGill University", 
        "University of Waterloo", "University of Alberta"
      ],
      specialties: ["Engineering", "Computer Science", "Business", "Environmental Studies"],
      requirements: [
        "Standardized Tests: IELTS/TOEFL",
        "Academic Records: Transcripts, consistent performance",
        "Personal Statement/Supplemental Essays: Varies by university",
        "Proof of Funds: Important for visa purposes"
      ],
      timeline: [
        "Application Submission: January-February for Fall intake",
        "Decision Release: Rolling through May"
      ]
    },
    australia: {
      name: "Australia",
      flag: "/api/placeholder/48/36",
      description: "Featuring world-class universities with strong research capabilities in a diverse, welcoming environment with post-study work options.",
      universities: [
        "University of Melbourne", "University of Sydney", "Australian National University", 
        "University of New South Wales", "Monash University"
      ],
      specialties: ["Environmental Science", "Marine Biology", "Business", "Engineering"],
      requirements: [
        "Standardized Tests: IELTS/TOEFL/PTE",
        "Academic Records: Transcripts, consistent performance",
        "Statement of Purpose: Program-specific",
        "Financial Documentation: For visa purposes"
      ],
      timeline: [
        "Two primary intakes: February and July",
        "Applications typically due 3-4 months prior to intake"
      ]
    },
    europe: {
      name: "Europe",
      flag: "/api/placeholder/48/36",
      description: "Diverse educational opportunities with many English-taught programs, often with minimal or no tuition fees in certain countries.",
      universities: [
        "Technical University of Munich (Germany)", "University of Amsterdam (Netherlands)", 
        "Sciences Po (France)", "ETH Zurich (Switzerland)", "Bocconi University (Italy)"
      ],
      specialties: ["Engineering", "Business", "Arts", "Social Sciences"],
      requirements: [
        "Vary significantly by country and university",
        "Language Requirements: English proficiency for English-taught programs, local language proficiency may be required for some programs",
        "Academic Records: Transcripts, sometimes with specific subject requirements",
        "Motivation Letters: Often program-specific"
      ],
      timeline: [
        "Varies by country, typically between January and April for Fall intake"
      ]
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center" style={{ color: colors.darkPurple }}>
        Global Education Destinations
      </h2>
      
      <p className="text-lg text-center text-gray-700 mb-8 max-w-3xl mx-auto">
        Explore detailed information about popular study destinations, including university options, 
        admission requirements, and application timelines.
      </p>
      
      {/* Destination Navigation */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {Object.keys(destinations).map((key) => (
          <button
            key={key}
            onClick={() => setActiveDestination(key)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
              activeDestination === key 
                ? 'shadow-md' 
                : 'hover:bg-white/50'
            }`}
            style={{ 
              backgroundColor: activeDestination === key ? colors.neonGreen : 'white',
              color: colors.darkPurple
            }}
          >
            <img 
              src={destinations[key].flag} 
              alt={`${destinations[key].name} flag`}
              className="w-6 h-4 object-cover rounded"
            />
            {destinations[key].name}
          </button>
        ))}
      </div>
      
      {/* Active Destination Content */}
      <div 
        className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8"
      >
        <div className="flex items-center mb-6">
          <img 
            src={destinations[activeDestination].flag} 
            alt={`${destinations[activeDestination].name} flag`}
            className="w-10 h-7 object-cover rounded mr-3"
          />
          <h3 className="text-2xl font-bold" style={{ color: colors.darkPurple }}>
            {destinations[activeDestination].name}
          </h3>
        </div>
        
        <p className="text-gray-700 mb-8">
          {destinations[activeDestination].description}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h4 className="text-lg font-bold mb-4" style={{ color: colors.darkPurple }}>
              Popular Universities
            </h4>
            <ul className="space-y-2">
              {destinations[activeDestination].universities.map((university, index) => (
                <li key={index} className="flex items-center">
                  <div 
                    className="w-2 h-2 rounded-full mr-2 flex-shrink-0"
                    style={{ backgroundColor: colors.neonGreen }}
                  ></div>
                  {university}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4" style={{ color: colors.darkPurple }}>
              Program Specialties
            </h4>
            <div className="flex flex-wrap gap-2">
              {destinations[activeDestination].specialties.map((specialty, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 rounded-full text-sm"
                  style={{ 
                    backgroundColor: `${colors.lightPurple}20`,
                    color: colors.darkPurple
                  }}
                >
                  {specialty}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <h4 className="text-lg font-bold mb-4" style={{ color: colors.darkPurple }}>
            Application Requirements
          </h4>
          <ul className="space-y-2">
            {destinations[activeDestination].requirements.map((requirement, index) => (
              <li key={index} className="flex items-start">
                <div className="mr-2 mt-1 flex-shrink-0">
                  <Check size={16} style={{ color: colors.neonGreen }} />
                </div>
                <span className="text-gray-700">{requirement}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-bold mb-4" style={{ color: colors.darkPurple }}>
            Application Timeline
          </h4>
          <ul className="space-y-2">
            {destinations[activeDestination].timeline.map((timeline, index) => (
              <li key={index} className="flex items-start">
                <div className="mr-2 mt-1 flex-shrink-0">
                  <Calendar size={16} style={{ color: colors.darkPurple }} />
                </div>
                <span className="text-gray-700">{timeline}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

// Counselors Content Component
const CounselorsContent = ({ colors }) => {
  // Counselor profiles
  const counselors = [
    {
      title: "Lead US Counselor",
      description: "M.Ed. in Higher Education Administration. Former Assistant Director of Admissions at a top US University with 8+ years of experience in international student recruitment and application evaluation. Specializes in engineering, computer science, and business program applications.",
      image: "/api/placeholder/100/100"
    },
    {
      title: "UK & Europe Specialist",
      description: "MA in International Education Management. With 10+ years of experience in UK university admissions and a network of connections across Russell Group institutions. Expert in UCAS applications and Oxbridge interview preparation.",
      image: "/api/placeholder/100/100"
    },
    {
      title: "Australia & Canada Specialist",
      description: "MBA, Certified Education Agent Counsellor (PIER). Specialized in guiding students to Australian and Canadian universities with particular expertise in business, hospitality, and STEM field applications.",
      image: "/api/placeholder/100/100"
    },
    {
      title: "Financial Aid & Scholarship Expert",
      description: "MS in Financial Planning. Dedicated to maximizing scholarship opportunities and developing realistic financial plans for international education.",
      image: "/api/placeholder/100/100"
    }
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center" style={{ color: colors.darkPurple }}>
        Your Dedicated Advisors
      </h2>
      
      <p className="text-lg text-center text-gray-700 mb-12 max-w-3xl mx-auto">
        Meet our experienced counseling team, each specializing in specific destinations 
        and aspects of the international education journey.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {counselors.map((counselor, index) => (
          <div 
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex p-6">
              <div className="w-20 h-20 rounded-full overflow-hidden mr-4 flex-shrink-0">
                <img 
                  src={counselor.image} 
                  alt={counselor.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2" style={{ color: colors.darkPurple }}>
                  {counselor.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {counselor.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Success Stories Content Component
const SuccessContent = ({ colors }) => {
  // Success stories
  const successStories = [
    {
      quote: "UniOversea transformed my application from ordinary to compelling. Their strategic guidance helped me secure admission to Columbia University with a $25,000 annual scholarship—something I couldn't have achieved alone.",
      student: "Rohan J.",
      university: "Columbia University",
      year: "Class of 2024",
      category: "USA Success"
    },
    {
      quote: "The personal statement support from UniOversea was invaluable. My counselor helped highlight my research experience in a way that secured my place at Imperial College London for Biomedical Engineering.",
      student: "Ananya P.",
      university: "Imperial College London",
      year: "Class of 2023",
      category: "UK Success"
    },
    {
      quote: "Working with UniOversea's financial aid specialists helped me identify and apply for scholarships I never would have found on my own. I'm now attending the University of Toronto with 70% of my tuition covered.",
      student: "Vikram S.",
      university: "University of Toronto",
      year: "Class of 2024",
      category: "Scholarship Achievement"
    },
    {
      quote: "With UniOversea's guidance, I received offers from 7 out of 8 universities I applied to across the US and UK, giving me wonderful options to choose from.",
      student: "Leila A.",
      university: "University of California Berkeley",
      year: "Class of 2023",
      category: "Multiple Offers"
    }
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center" style={{ color: colors.darkPurple }}>
        Global Education Journeys
      </h2>
      
      <p className="text-lg text-center text-gray-700 mb-8 max-w-3xl mx-auto">
        Read the success stories of students who achieved their international education 
        goals with UniOversea's guidance.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {successStories.map((story, index) => (
          <div 
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
          >
            <div className="h-2" style={{ backgroundColor: colors.neonGreen }}></div>
            <div className="p-6">
              <div className="mb-4">
                <span 
                  className="inline-block px-3 py-1 rounded-full text-sm font-medium"
                  style={{ 
                    backgroundColor: `${colors.lightPurple}20`,
                    color: colors.darkPurple
                  }}
                >
                  {story.category}
                </span>
              </div>
              
              <div className="mb-6 relative">
                <div className="absolute -left-2 top-0 bottom-0 w-1" style={{ backgroundColor: colors.lightPurple }}></div>
                <p className="text-gray-700 pl-4 italic">
                  "{story.quote}"
                </p>
              </div>
              
              <div>
                <p className="font-bold" style={{ color: colors.darkPurple }}>— {story.student}</p>
                <p className="text-sm text-gray-600">{story.university}, {story.year}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Packages Content Component
const PackagesContent = ({ colors }) => {
  // Packages data
  const packages = [
    {
      name: "Comprehensive Package",
      description: "Complete end-to-end support including all services from university shortlisting through pre-departure orientation. Includes application guidance for up to 8 universities across 2 countries.",
      features: [
        "University shortlisting & strategy",
        "Profile evaluation & enhancement",
        "Document preparation (SOP, essays, resume)",
        "Application submission support",
        "Interview preparation",
        "Visa guidance",
        "Pre-departure orientation"
      ],
      color: colors.lightPurple,
      accent: colors.darkPurple
    },
    {
      name: "Premium Package",
      description: "All comprehensive package services plus application support for up to 12 universities across 3 countries, priority counselor access, guaranteed 24-hour response time, and scholarship application support for up to 10 opportunities.",
      features: [
        "All Comprehensive Package features",
        "Support for 12 universities across 3 countries",
        "Priority counselor access & 24-hour response time",
        "Scholarship application support (10 opportunities)",
        "Financial aid planning",
        "Extended post-acceptance support",
        "Housing & accommodation guidance"
      ],
      color: colors.neonGreen,
      accent: colors.darkPurple,
      featured: true
    },
    {
      name: "Essentials Package",
      description: "Core services including university shortlisting, application strategy, and document preparation for up to 5 universities in 1 country.",
      features: [
        "University shortlisting",
        "Basic application strategy",
        "SOP & essay guidance",
        "Resume building assistance",
        "Application review",
        "Basic interview preparation",
        "Limited email support"
      ],
      color: colors.lightPurple,
      accent: colors.darkPurple
    }
  ];

  // À La Carte Services
  const alaCarteServices = [
    "University Shortlisting",
    "SOP/Essay Development",
    "Resume Building",
    "Interview Preparation",
    "Scholarship Application Support",
    "Visa Guidance",
    "Pre-departure Orientation"
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center" style={{ color: colors.darkPurple }}>
        Counseling Service Packages
      </h2>
      
      <p className="text-lg text-center text-gray-700 mb-8 max-w-3xl mx-auto">
        Choose from our flexible service packages, designed to provide comprehensive 
        support throughout your international education journey.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {packages.map((pkg, index) => (
          <div 
            key={index}
            className={`bg-white rounded-xl shadow-lg overflow-hidden relative hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ${
              pkg.featured ? 'md:-mt-4 md:-mb-4 md:shadow-xl' : ''
            }`}
          >
            {pkg.featured && (
              <div 
                className="absolute top-0 right-0 px-4 py-1 text-sm font-bold text-white rounded-bl-lg"
                style={{ backgroundColor: colors.darkPurple }}
              >
                POPULAR
              </div>
            )}
            <div className="h-2" style={{ backgroundColor: pkg.color }}></div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3" style={{ color: colors.darkPurple }}>
                {pkg.name}
              </h3>
              <p className="text-gray-600 text-sm mb-6">
                {pkg.description}
              </p>
              <h4 className="text-lg font-semibold mb-3" style={{ color: colors.darkPurple }}>
                What's Included:
              </h4>
              <ul className="space-y-2 mb-8">
                {pkg.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start">
                    <div className="mr-2 mt-1 flex-shrink-0">
                      <Check size={16} style={{ color: pkg.accent }} />
                    </div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className="w-full py-2 rounded-lg font-medium transition-colors hover:opacity-90"
                style={{ 
                  backgroundColor: pkg.featured ? pkg.color : `${pkg.color}50`,
                  color: pkg.accent
                }}
              >
                Select Package
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// FAQ Content Component
const FaqContent = ({ colors, expandedFaq, toggleFaq }) => {
  // FAQ items
  const faqItems = [
    {
      question: "When should I start the counseling process?",
      answer: "Ideally 8-10 months before your intended start date, though we can accommodate accelerated timelines when necessary."
    },
    {
      question: "How are counselors assigned to students?",
      answer: "Counselors are matched based on your target countries, intended major, profile strengths, and personal rapport established during initial consultations."
    },
    {
      question: "How many universities should I apply to?",
      answer: "We typically recommend 6-10 universities with a balanced distribution across reach, target, and safety schools. The exact number depends on your specific situation and goals."
    },
    {
      question: "Do you guarantee admissions to my preferred universities?",
      answer: "We provide 100% offer guarantee but we cannot guarantee admissions in all universities as final decisions rest with universities. However, our expertise significantly enhances your chances, and our recommendations are designed to include appropriate options where your profile is competitive."
    },
    {
      question: "Will you write my essays and personal statements for me?",
      answer: "No. We provide guidance, feedback, and editing support, but the content must authentically represent your voice and experiences. Our ethical approach ensures your application maintains authenticity."
    },
    {
      question: "How do you stay updated on changing admission requirements?",
      answer: "Our counselors participate in regular training, attend university conferences, and maintain direct relationships with admissions offices to stay current on all requirement changes and trends."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center" style={{ color: colors.darkPurple }}>
        Frequently Asked Questions
      </h2>
      
      <p className="text-lg text-center text-gray-700 mb-8 max-w-3xl mx-auto">
        Find answers to common questions about our counseling services, process, and approach.
      </p>
      
      <div className="space-y-4 mb-8">
        {faqItems.map((faq, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
            <button 
              className="w-full px-6 py-4 text-left flex justify-between items-center"
              onClick={() => toggleFaq(index)}
              style={{ backgroundColor: expandedFaq === index ? `${colors.lightPurple}10` : 'white' }}
            >
              <h3 className="text-lg font-medium" style={{ color: colors.darkPurple }}>
                {faq.question}
              </h3>
              <div 
                className={`w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300 ${
                  expandedFaq === index ? 'transform rotate-180' : ''
                }`}
                style={{ backgroundColor: expandedFaq === index ? colors.neonGreen : `${colors.lightPurple}30` }}
              >
                <ChevronRight 
                  size={16} 
                  className={`transform ${expandedFaq === index ? 'rotate-90' : ''}`}
                  style={{ color: colors.darkPurple }}
                />
              </div>
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudyAbroadPage;