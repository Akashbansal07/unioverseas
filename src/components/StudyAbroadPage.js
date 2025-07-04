// StudyAbroadPage.js with Partners Section
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe, Check, ChevronRight, ArrowRight, MapPin, 
  GraduationCap, FilePlus, Users, Calendar, 
  FileText, CreditCard, Plane, School, CheckCircle,
  ChevronDown, Briefcase, Award,
  Building, Link, Star, Bookmark
} from 'lucide-react';

// 3D Carousel Component - Updated to match TutoringPage
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
      {/* Tab navigation - Updated to match TutoringPage with top-20 position */}
      <div className="sticky top-20 bg-white shadow-md z-10 mb-4">
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
        <p>Swipe, use tab buttons, or scroll horizontally to navigate between sections</p>
      </div>
    </div>
  );
};

const StudyAbroadPage = ({ colors = {
  lightPurple: '#BEC1F8',
  darkPurple: '#2E2CAB',
  neonGreen: '#D8FC44'
}, onContactClick }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeDestination, setActiveDestination] = useState('usa');
  const [activePartnerRegion, setActivePartnerRegion] = useState('usa');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const carouselRef = useRef(null);
  
  // Use the provided onContactClick or fallback to a default implementation
  const handleContactClick = () => {
    if (onContactClick) {
      // Use the callback passed from App.js
      onContactClick();
    } else {
      // Fallback method if onContactClick prop isn't provided
      const contactSection = document.querySelector('#contact-section');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  
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

  // Tabs for the page - Added partners section
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
      component: <ProcessContent colors={colors} onContactClick={handleContactClick} />
    },
    { 
      id: 'destinations', 
      label: 'Destinations', 
      icon: <MapPin size={18} />,
      component: <DestinationsContent colors={colors} activeDestination={activeDestination} setActiveDestination={setActiveDestination} />
    },
    { 
      id: 'partners', 
      label: 'Partner Universities', 
      icon: <Building size={18} />,
      component: <PartnersContent colors={colors} activePartnerRegion={activePartnerRegion} setActivePartnerRegion={setActivePartnerRegion} />
    },
    { 
      id: 'faq', 
      label: 'FAQ', 
      icon: <CheckCircle size={18} />,
      component: <FaqContent colors={colors} expandedFaq={expandedFaq} toggleFaq={toggleFaq} />
    }
  ];

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
          <div className="max-w-6xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
              >
                Study Abroad Counseling
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
                Expert guidance for your international education journey, with your academic future as our only priority.
              </p>
              <div className="flex justify-center">
                <motion.button
                  className="py-3 px-8 rounded-full text-white font-medium shadow-lg flex items-center justify-center gap-2"
                  style={{ backgroundColor: colors.darkPurple }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleContactClick}
                >
                  <Users size={20} />
                  Free Consultation
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* 3D Carousel - Navigation arrows removed */}
      <div ref={carouselRef} className="relative">
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
            <div className="flex justify-center">
              <button
                className="py-3 px-8 rounded-full text-white font-medium shadow-lg"
                style={{ backgroundColor: colors.darkPurple }}
                onClick={handleContactClick}
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
const ProcessContent = ({ colors, onContactClick }) => {
  // Journey steps - expanded with additional steps
  const journeySteps = [
    {
      title: "1. Initial Consultation",
      description: "A comprehensive discussion to understand your academic background, extracurricular achievements, career goals, and study abroad aspirations. We'll evaluate your profile and establish realistic targets.",
      timeline: "Week 1",
      icon: <Users />
    },
    {
      title: "2. Profile Assessment",
      description: "Detailed analysis of your academic record, standardized test scores, extracurricular activities, and personal achievements to identify strengths and areas for enhancement.",
      timeline: "Week 2",
      icon: <FileText />
    },
    {
      title: "3. University Shortlisting",
      description: "Strategic selection of universities categorized as reach, target, and safety options across your preferred destinations, considering your profile strength, career goals, and personal preferences.",
      timeline: "Weeks 3-4",
      icon: <School />
    },
    {
      title: "4. Application Strategy",
      description: "Development of a customized application timeline and approach for each university, highlighting unique angles for different institutions while maintaining authenticity.",
      timeline: "Week 5",
      icon: <Briefcase />
    },
    {
      title: "5. Document Preparation",
      description: "Expert guidance for crafting compelling: Statements of Purpose, Personal Statements, Essays and Supplemental Questions, Resumes/CVs, Letters of Recommendation.",
      timeline: "Weeks 6-10",
      listItems: [
        "Statements of Purpose",
        "Personal Statements",
        "Essays and Supplemental Questions",
        "Resumes/CVs",
        "Letters of Recommendation"
      ],
      icon: <FilePlus />
    },
    {
      title: "6. Application Submission",
      description: "Thorough review of all application components and assisted submission to ensure accuracy, completeness, and timely filing for each university.",
      timeline: "According to university deadlines",
      icon: <Check />
    },
    {
      title: "7. Interview Preparation",
      description: "Comprehensive mock interviews and feedback sessions tailored to specific university formats and common questions for your program.",
      timeline: "As scheduled by universities",
      icon: <Users />
    },
    {
      title: "8. Scholarship Guidance",
      description: "Identification of suitable scholarship opportunities and assistance with applications, including scholarship-specific essays and supporting documents.",
      timeline: "According to scholarship deadlines",
      icon: <Award />
    },
    {
      title: "9. Decision Evaluation",
      description: "100% offer guarantee. Analysis of admission offers, comparison of programs, financial considerations, and guidance for making the optimal final decision.",
      timeline: "Upon receiving decisions",
      icon: <CheckCircle />
    },
    {
      title: "10. Loan Assistance",
      description: "Connection with trusted financial partners for education loan options, document preparation, and application support.",
      timeline: "After university selection",
      icon: <CreditCard />
    },
    {
      title: "11. Visa Support",
      description: "Comprehensive guidance for visa application preparation, documentation, and interview coaching specific to your destination country.",
      timeline: "3-4 months before departure",
      icon: <FileText />
    },
    {
      title: "12. Pre-departure Orientation",
      description: "Practical guidance on housing, banking, travel arrangements, cultural adaptation, and academic expectations to ensure a smooth transition.",
      timeline: "1-2 months before departure",
      icon: <Plane />
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
            className="relative mb-12 md:mb-16"
          >
            <div className="md:flex items-center">
              {/* For even indices (0, 2, 4...), place content on the left */}
              {index % 2 === 0 ? (
                <>
                  <div className="md:w-1/2 md:pr-12 md:text-right">
                    <div className="bg-white rounded-xl shadow-md p-6">
                      <div className="flex items-center mb-3 md:justify-end">
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
                      
                      {/* Render list items if present */}
                      {step.listItems && (
                        <ul className="mb-4 md:text-right">
                          {step.listItems.map((item, i) => (
                            <li key={i} className="flex items-center md:justify-end mb-1">
                              <span className="text-gray-600">{item}</span>
                              <div className="w-2 h-2 rounded-full ml-2" style={{ backgroundColor: colors.neonGreen }}></div>
                            </li>
                          ))}
                        </ul>
                      )}
                      
                      <div className="flex md:justify-end">
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
                  </div>
                  
                  {/* Timeline Node */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-white border-4 border-gray-200 z-10"></div>
                    <div className="w-6 h-6 rounded-full absolute" style={{ backgroundColor: colors.neonGreen }}></div>
                  </div>
                  
                  <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
                </>
              ) : (
                /* For odd indices (1, 3, 5...), place content on the right */
                <>
                  <div className="md:w-1/2 md:pr-12 hidden md:block"></div>
                  
                  {/* Timeline Node */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-white border-4 border-gray-200 z-10"></div>
                    <div className="w-6 h-6 rounded-full absolute" style={{ backgroundColor: colors.neonGreen }}></div>
                  </div>
                  
                  <div className="md:w-1/2 md:pl-12">
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
                      
                      {/* Render list items if present */}
                      {step.listItems && (
                        <ul className="mb-4">
                          {step.listItems.map((item, i) => (
                            <li key={i} className="flex items-center mb-1">
                              <div className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: colors.neonGreen }}></div>
                              <span className="text-gray-600">{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      
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
                </>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center">
        <button
          className="px-8 py-3 rounded-full font-medium inline-flex items-center gap-2"
          style={{ backgroundColor: colors.darkPurple, color: 'white' }}
          onClick={onContactClick}
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
  // Destinations data with real flag URLs
  const destinations = {
    usa: {
      name: "United States",
      flag: "https://cdn.countryflags.com/thumbs/united-states-of-america/flag-square-500.png",
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
      flag: "https://cdn.countryflags.com/thumbs/united-kingdom/flag-square-500.png",
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
      flag: "https://cdn.countryflags.com/thumbs/canada/flag-square-500.png",
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
      flag: "https://cdn.countryflags.com/thumbs/australia/flag-square-500.png",
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
      flag: "https://cdn.countryflags.com/thumbs/europe/flag-square-500.png",
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
            className="w-10 h-8 object-cover rounded mr-3"
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

// Partners Content Component
const PartnersContent = ({ colors, activePartnerRegion, setActivePartnerRegion }) => {
  // Partner university data by region
  const partnerRegions = {
    usa: {
      name: "United States",
      flag: "https://cdn.countryflags.com/thumbs/united-states-of-america/flag-square-500.png",
      universities: [
        "Johns Hopkins University", 
        "Northeastern University", 
        "LeHigh University", 
        "NYU", 
        "University of Arizona", 
        "SUNY Buffalo", 
        "Arizona State University", 
        "Suffolk University", 
        "California State University", 
        "University of Alabama", 
        "University of Massachusetts", 
        "Brandeis University"
      ]
    },
    uk: {
      name: "United Kingdom",
      flag: "https://cdn.countryflags.com/thumbs/united-kingdom/flag-square-500.png",
      universities: [
        "University College London", 
        "University of Warwick", 
        "University of Edinburgh", 
        "University of Manchester", 
        "King's College London", 
        "University of Glasgow", 
        "University of Birmingham", 
        "Queen Mary University of London", 
        "Durham University", 
        "University of Sheffield", 
        "Cardiff University", 
        "University of Exeter", 
        "University of Leeds", 
        "Queen's University Belfast", 
        "University of York", 
        "Newcastle University", 
        "University of Liverpool"
      ]
    },
    canada: {
      name: "Canada",
      flag: "https://cdn.countryflags.com/thumbs/canada/flag-square-500.png",
      universities: [
        "University of Toronto",
        "University of British Columbia",
        "McGill University",
        "McMaster University",
        "University of Alberta",
        "Western University",
        "University of Ottawa",
        "York University",
        "Queen's University",
        "University of Calgary"
      ]
    },
    australia: {
      name: "Australia",
      flag: "https://cdn.countryflags.com/thumbs/australia/flag-square-500.png",
      universities: [
        "University of Melbourne",
        "University of Sydney",
        "Australian National University",
        "University of Queensland",
        "Monash University",
        "University of Adelaide",
        "University of Western Australia",
        "University of Technology Sydney",
        "Macquarie University"
      ]
    },
    europe: {
      name: "Europe",
      flag: "https://cdn.countryflags.com/thumbs/europe/flag-square-500.png",
      universities: [
        "Technical University of Munich (Germany)",
        "Sciences Po (France)",
        "Bocconi University (Italy)",
        "University of Amsterdam (Netherlands)",
        "KU Leuven (Belgium)",
        "Trinity College Dublin (Ireland)",
        "University of Copenhagen (Denmark)",
        "Stockholm University (Sweden)",
        "University of Barcelona (Spain)"
      ]
    }
  };

  // Benefits of our university partnerships
  const partnershipBenefits = [
    {
      title: "Direct Admission Pathways",
      description: "Our university partnerships create streamlined admission channels for qualified students, with benefits such as application fee waivers, priority processing, and expedited decisions.",
      icon: <ArrowRight />
    },
    {
      title: "Exclusive Academic Insights",
      description: "Gain insider knowledge about program developments, admission criteria changes, and new academic opportunities through our direct relationships with partner institutions.",
      icon: <Bookmark />
    },
    {
      title: "Personalized Campus Connections",
      description: "Facilitated direct connections with faculty, current students, admissions representatives and financial aid officers for meaningful interactions beyond standard procedures.",
      icon: <Link />
    },
    {
      title: "Scholarship Opportunities",
      description: "Many partner universities offer exclusive scholarship and financial aid packages specifically for UniOversea students, helping to make your education more affordable.",
      icon: <Award />
    },
    {
      title: "Quality Assurance",
      description: "We partner exclusively with accredited, reputable institutions with proven records of academic excellence and strong international student support.",
      icon: <CheckCircle />
    },
    {
      title: "Post-Admission Support",
      description: "Benefit from pre-departure orientation, priority housing access, seamless credit transfers, and continued support services specific to our partner universities.",
      icon: <Star />
    }
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center" style={{ color: colors.darkPurple }}>
        Our Partner Universities
      </h2>
      
      <p className="text-lg text-center text-gray-700 mb-8 max-w-3xl mx-auto">
        UniOversea has established strategic partnerships with a diverse network of accredited universities worldwide, 
        creating unique advantages for our students throughout their academic journey.
      </p>
      
      {/* Partnership Benefits */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {partnershipBenefits.map((benefit, index) => (
          <div 
            key={index}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: `${colors.lightPurple}30` }}>
              <div style={{ color: colors.darkPurple }}>
                {benefit.icon}
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2" style={{ color: colors.darkPurple }}>
              {benefit.title}
            </h3>
            <p className="text-gray-600">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
      
      {/* Important Note */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8 border-l-4" style={{ borderLeftColor: colors.neonGreen }}>
        <h3 className="text-xl font-bold mb-3" style={{ color: colors.darkPurple }}>
          Our Commitment to You
        </h3>
        <p className="text-gray-700 mb-4">
          While we're proud of our extensive university partnerships, we want to emphasize that our counseling recommendations are never influenced by these connections. Our guidance is always based on what's the best fit for your specific profile and goals.
        </p>
        <p className="text-gray-700">
          We clearly identify when we're discussing partner universities, and we pledge that our guidance remains focused exclusively on what's best for your educational journey—never our business interests.
        </p>
      </div>
      
      {/* Partner Universities by Region */}
      <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: colors.darkPurple }}>
        Partner Universities by Region
      </h3>
      
      {/* Region Navigation */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {Object.keys(partnerRegions).map((key) => (
          <button
            key={key}
            onClick={() => setActivePartnerRegion(key)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
              activePartnerRegion === key 
                ? 'shadow-md' 
                : 'hover:bg-white/50'
            }`}
            style={{ 
              backgroundColor: activePartnerRegion === key ? colors.neonGreen : 'white',
              color: colors.darkPurple
            }}
          >
            <img 
              src={partnerRegions[key].flag} 
              alt={`${partnerRegions[key].name} flag`}
              className="w-6 h-4 object-cover rounded"
            />
            {partnerRegions[key].name}
          </button>
        ))}
      </div>
      
      {/* Partner Universities List */}
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
        <div className="flex items-center mb-6">
          <img 
            src={partnerRegions[activePartnerRegion].flag} 
            alt={`${partnerRegions[activePartnerRegion].name} flag`}
            className="w-10 h-8 object-cover rounded mr-3"
          />
          <h3 className="text-2xl font-bold" style={{ color: colors.darkPurple }}>
            {partnerRegions[activePartnerRegion].name} Partners
          </h3>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {partnerRegions[activePartnerRegion].universities.map((university, index) => (
            <div 
              key={index}
              className="p-4 rounded-lg hover:bg-gray-50 transition-colors flex items-start"
            >
              <div 
                className="w-2 h-2 rounded-full mr-3 mt-2 flex-shrink-0"
                style={{ backgroundColor: colors.neonGreen }}
              ></div>
              <span className="text-gray-700">{university}</span>
            </div>
          ))}
        </div>
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