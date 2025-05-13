// TutoringPage.js
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, Users, Target, Award, Book, Check, ChevronRight, 
  ChevronDown, Bookmark, Zap, Star, ChevronLeft, Globe 
} from 'lucide-react';

// Carousel3D Component with enhanced navigation
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
                className="px-4 py-2 mx-1 rounded-md text-sm font-medium transition-all"
                animate={{ 
                  backgroundColor: activeIndex === index ? colors.lightPurple : 'transparent',
                  color: activeIndex === index ? colors.darkPurple : '#333',
                  scale: activeIndex === index ? 1.05 : 1,
                  fontWeight: activeIndex === index ? 600 : 400
                }}
                whileHover={{ scale: 1.05, backgroundColor: `${colors.lightPurple}40` }}
                whileTap={{ scale: 0.98 }}
              >
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

// Hero Section Component
const TutoringHero = ({ colors, onContactClick }) => {
  return (
    <motion.div 
      className="relative py-24 md:py-36 min-h-[600px] flex items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{
        backgroundImage: 'url("https://media.istockphoto.com/id/1262283526/photo/indian-girl-student-wear-headphones-learning-online-watching-webinar-class-looking-at-laptop.webp?a=1&b=1&s=612x612&w=0&k=20&c=djcmeAgDXgG6pMoiubDGzzveTdQldVXbm0hzZUFonpc=")',
        backgroundSize: 'cover',
        backgroundPosition: 'center 30%',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-60"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Tutoring Services
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Expert-led online tutoring that prioritizes your actual learning outcomes and long-term success
          </motion.p>
          
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {["SAT", "ACT", "AP", "IB", "IGCSE", "GCSE", "MYP"].map((exam, index) => (
              <span 
                key={index}
                className="px-4 py-2 rounded-full text-sm font-medium"
                style={{ 
                  backgroundColor: index % 2 === 0 ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.3)',
                  color: 'white'
                }}
              >
                {exam}
              </span>
            ))}
          </motion.div>
          
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <motion.button
              className="py-3 px-6 rounded-full text-white font-medium shadow-lg bg-white bg-opacity-30 backdrop-blur-sm hover:bg-opacity-40 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={onContactClick}
            >
              Request Free Consultation
            </motion.button>
            
            <motion.button
              className="py-3 px-6 rounded-full font-medium shadow-lg"
              style={{ backgroundColor: colors.neonGreen, color: colors.darkPurple }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              View Tutoring Packages
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

// Overview Section Component
const OverviewSection = ({ colors }) => {
  return (
    <div className="py-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: colors.darkPurple }}>
          Tutoring With Purpose
        </h2>
        
        <div className="mb-8 relative">
          <div className="absolute -left-4 top-0 bottom-0 w-1" style={{ backgroundColor: colors.neonGreen }}></div>
          <p className="text-lg md:text-xl text-gray-700 pl-4 italic">
            "What does this specific student need to succeed?"
          </p>
        </div>
        
        <p className="mb-6 text-lg text-gray-700">
          At UniOversea, our tutoring philosophy begins with a simple question: "What does this specific student need to succeed?" Rather than applying one-size-fits-all approaches or focusing merely on test scores, we develop individualized learning strategies that build genuine understanding and long-term academic capabilities.
        </p>
        
        <p className="mb-6 text-lg text-gray-700">
          Our tutors are selected for both their subject expertise and their commitment to educational outcomes. We believe that true academic success comes from developing a solid foundation of knowledge, critical thinking abilities, and confidence—not just techniques to navigate standardized tests.
        </p>
        
        <p className="mb-6 text-lg text-gray-700">
          Each tutor is carefully matched with students based on learning style, academic needs, and educational goals to create a productive and engaging learning environment focused on real results.
        </p>
        
        <div className="mt-8 bg-gradient-to-r from-white to-blue-50 p-6 rounded-xl shadow-md">
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
              <li key={index} className="flex items-start">
                <div className="mr-3 mt-1">
                  <Check size={18} style={{ color: colors.neonGreen }} />
                </div>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

// Methods Section Component
const MethodsSection = ({ colors }) => {
  return (
    <div className="py-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: colors.darkPurple }}>
          Learning That Works For You
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
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
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
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
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg p-6 border border-gray-100">
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
              <div key={index} className="flex items-center">
                <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3" style={{ backgroundColor: colors.neonGreen }}>
                  <Check size={16} style={{ color: colors.darkPurple }} />
                </div>
                <p>{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Exam Prep Section Component
const ExamPrepSection = ({ colors }) => {
  // Expanded list of exam preparation services
  const examPrepServices = [
    {
      title: "SAT/ACT Preparation",
      icon: <Target size={24} />,
      description: "Our standardized test preparation programs go beyond content review to build test-taking strategies, time management skills, and confidence. Our specialized approach includes:",
      features: [
        "Diagnostic assessment to identify strengths and improvement areas",
        "Customized study plans based on target scores and timelines",
        "Official practice materials supplemented with proprietary resources",
        "Regular mock tests under timed conditions with detailed analysis",
        "Score improvement tracking and strategy adjustments",
        "Specialized modules for Math, Evidence-Based Reading, Writing, and Science sections"
      ],
      results: "Our students average 250+ point improvements on the SAT and 4+ point improvements on the ACT.",
      subjects: []
    },
    {
      title: "Advanced Placement (AP) Courses",
      icon: <Book size={24} />,
      description: "Comprehensive support for all AP subjects with emphasis on concept mastery and exam preparation. Our AP tutoring focuses on conceptual understanding, practice with free-response questions, and targeted review of challenging topics to maximize your score potential.",
      subjects: [
        "AP Calculus AB/BC", "AP Statistics", "AP Physics 1, 2, C", "AP Chemistry",
        "AP Biology", "AP Computer Science", "AP English Literature and Language",
        "AP History (World, European, US)", "AP Economics (Micro, Macro)",
        "AP Psychology", "AP Foreign Languages"
      ]
    },
    {
      title: "International Baccalaureate Diploma Programme (IBDP)",
      icon: <Award size={24} />,
      description: "Expert tutoring for all IBDP subjects at both Standard Level and Higher Level.",
      subjects: [
        "Studies in Language and Literature", "Language Acquisition",
        "Individuals and Societies", "Sciences", "Mathematics", "The Arts"
      ],
      additionalServices: [
        "Extended Essay development and research",
        "Theory of Knowledge essay and presentation",
        "CAS portfolio development",
        "Internal Assessment preparation",
        "Exam strategies for maximizing points"
      ],
      results: "85% of our IBDP students achieve 6-7 in their tutored subjects."
    },
    {
      title: "Middle Years Programme (MYP)",
      icon: <BookOpen size={24} />,
      description: "Supportive tutoring for all MYP subjects with focus on building strong foundational knowledge and critical thinking skills. Our MYP tutoring emphasizes concept-based learning and the development of approaches to learning (ATL) skills that prepare students for success in the IBDP.",
      subjects: [
        "Mathematics", "Sciences", "Language and Literature", "Language Acquisition",
        "Individuals and Societies", "Arts", "Physical Education", "Design"
      ]
    },
    {
      title: "IGCSE/GCSE Support",
      icon: <Globe size={24} />,
      description: "Comprehensive tutoring for all IGCSE and GCSE subjects with focus on examination techniques and content mastery. Our approach combines thorough content review with extensive practice using past papers and mark schemes to ensure optimal grade achievement.",
      subjects: [
        "Mathematics", "English Language and Literature", "Physics", "Chemistry", 
        "Biology", "History", "Geography", "Modern Languages", "Computer Science", 
        "Business Studies", "Economics"
      ]
    }
  ];

  return (
    <div className="py-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center" style={{ color: colors.darkPurple }}>
          Comprehensive Test Preparation
        </h2>
        
        <p className="text-lg text-center text-gray-700 mb-8 max-w-3xl mx-auto">
          Expertly designed preparation programs for standardized tests and international curricula
        </p>
        
        <div className="grid grid-cols-1 gap-8">
          {examPrepServices.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <div className="h-2" style={{ backgroundColor: colors.neonGreen }}></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: `${colors.lightPurple}30` }}>
                    <div style={{ color: colors.darkPurple }}>
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold" style={{ color: colors.darkPurple }}>
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-gray-700 mb-4">
                  {service.description}
                </p>
                
                {service.features && service.features.length > 0 && (
                  <div className="mt-4 mb-4">
                    <ul className="space-y-2">
                      {service.features.map((feature, featIndex) => (
                        <li key={featIndex} className="flex items-start">
                          <div className="mr-2 mt-1 text-sm" style={{ color: colors.neonGreen }}>•</div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {service.results && (
                  <div className="my-4 p-3 rounded-md" style={{ backgroundColor: `${colors.lightPurple}15` }}>
                    <p className="font-medium" style={{ color: colors.darkPurple }}>
                      <strong>Results:</strong> {service.results}
                    </p>
                  </div>
                )}
                
                {service.subjects && service.subjects.length > 0 && (
                  <div className="mt-4">
                    <h4 className="font-semibold mb-2" style={{ color: colors.darkPurple }}>
                      {service.title.includes("AP") ? "Subjects Offered:" : "Core Subjects:"}
                    </h4>
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
                
                {service.additionalServices && service.additionalServices.length > 0 && (
                  <div className="mt-4">
                    <h4 className="font-semibold mb-2" style={{ color: colors.darkPurple }}>
                      Our IBDP specialists also provide guidance on:
                    </h4>
                    <ul className="space-y-1">
                      {service.additionalServices.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <div className="mr-2 mt-1 text-sm" style={{ color: colors.neonGreen }}>•</div>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Approach Section Component
const ApproachSection = ({ colors }) => {
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
    <div className="py-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center" style={{ color: colors.darkPurple }}>
          Our Pedagogical Approach
        </h2>
        
        <p className="text-lg text-center text-gray-700 mb-8">
          The UniOversea teaching methodology is built on four pillars
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {methodologyPillars.map((pillar, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold mb-3" style={{ color: colors.darkPurple }}>
                {pillar.title}
              </h3>
              <p className="text-gray-700">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Tutors Section Component
const TutorsSection = ({ colors }) => {
  return (
    <div className="py-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center" style={{ color: colors.darkPurple }}>
          Our Expert Educators
        </h2>
        
        <p className="text-lg text-center text-gray-700 mb-8">
          UniOversea tutors are selected through a rigorous process that ensures both subject expertise and teaching ability
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {[
            {
              title: "Academic Credentials",
              description: "All tutors hold at least a Master's degree in their teaching subject",
              icon: <Award size={24} />
            },
            {
              title: "Teaching Experience",
              description: "Minimum 3 years of teaching or tutoring experience, with specialized knowledge of relevant curricula and examination systems",
              icon: <BookOpen size={24} />
            },
            {
              title: "Continuous Training",
              description: "Regular professional development in pedagogy, curriculum updates, and examination trends to ensure cutting-edge teaching approaches",
              icon: <Zap size={24} />
            },
            {
              title: "Selection Process",
              description: "Multi-stage screening including subject knowledge tests, sample teaching demonstrations, and student feedback evaluation",
              icon: <Target size={24} />
            }
          ].map((qualification, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
            >
              <div className="h-2" style={{ backgroundColor: colors.neonGreen }}></div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: `${colors.lightPurple}30` }}>
                  <div style={{ color: colors.darkPurple }}>
                    {qualification.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: colors.darkPurple }}>
                  {qualification.title}
                </h3>
                <p className="text-gray-700">
                  {qualification.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Pricing Section Component
const PricingSection = ({ colors }) => {
  // Pricing packages
  const pricingPackages = [
    {
      category: "One-on-One Sessions",
      packages: [
        {
          name: "Standard Package",
          description: "8 sessions (60 minutes each) with homework review"
        },
        {
          name: "Intensive Package",
          description: "16 sessions (60 minutes each) with homework review and bi-weekly mock tests"
        }
      ]
    },
    {
      category: "Group Sessions (3-5 students)",
      packages: [
        {
          name: "Standard Group Package",
          description: "10 sessions (90 minutes each) with shared materials"
        },
        {
          name: "Intensive Group Package",
          description: "20 sessions (90 minutes each) with materials and periodic assessments"
        }
      ]
    }
  ];

  return (
    <div className="py-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center" style={{ color: colors.darkPurple }}>
          Transparent Tutoring Packages
        </h2>
        
        <p className="text-lg text-center text-gray-700 mb-8">
          Flexible packages designed to meet your educational needs
        </p>
        
        <div className="space-y-12">
          {pricingPackages.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 
                className="text-xl font-bold mb-6 pb-2 border-b"
                style={{ color: colors.darkPurple, borderColor: colors.neonGreen }}
              >
                {category.category}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.packages.map((pkg, pkgIndex) => (
                  <div 
                    key={pkgIndex}
                    className="bg-white rounded-xl shadow-md p-5 border border-gray-100 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                  >
                    <h4 
                      className="text-lg font-bold mb-2"
                      style={{ color: colors.darkPurple }}
                    >
                      {pkg.name}
                    </h4>
                    <p className="text-gray-700 text-sm">
                      {pkg.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// FAQ Section Component
const FaqSection = ({ colors }) => {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  // Updated FAQ items
  const faqItems = [
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
    <div className="py-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center" style={{ color: colors.darkPurple }}>
          Frequently Asked Questions
        </h2>
        
        <p className="text-lg text-center text-gray-700 mb-8">
          Find answers to common questions about our tutoring services
        </p>
        
        <div className="space-y-4">
          {faqItems.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Call-to-Action Component
const TutoringCta = ({ colors, onContactClick }) => {
  return (
    <div className="bg-gradient-to-br from-white to-blue-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: colors.darkPurple }}>
            Ready to Transform Your Academic Journey?
          </h2>
          
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Join the hundreds of students who have achieved their academic goals with UniOversea's expert tutoring services
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              className="py-3 px-6 rounded-full text-white font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              style={{ backgroundColor: colors.darkPurple }}
              onClick={onContactClick}
            >
              Schedule a Free Consultation
            </button>
            
            <button
              className="py-3 px-6 rounded-full font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              style={{ backgroundColor: colors.neonGreen, color: colors.darkPurple }}
            >
              Learn About Our Tutors
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main TutoringPage Component
const TutoringPage = ({ colors = {
  darkPurple: "#4F46E5", 
  lightPurple: "#A5B4FC", 
  neonGreen: "#4ADE80"
}, onContactClick }) => {
  const [activeTab, setActiveTab] = useState(0);
  
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
  
  // Define the tabs
  const tabs = [
    { id: 'overview', label: 'Overview', component: <OverviewSection colors={colors} /> },
    { id: 'methods', label: 'Methods', component: <MethodsSection colors={colors} /> },
    { id: 'exams', label: 'Exam Prep', component: <ExamPrepSection colors={colors} /> },
    { id: 'approach', label: 'Approach', component: <ApproachSection colors={colors} /> },
    { id: 'tutors', label: 'Our Tutors', component: <TutorsSection colors={colors} /> },
    { id: 'pricing', label: 'Pricing', component: <PricingSection colors={colors} /> },
    { id: 'faq', label: 'FAQ', component: <FaqSection colors={colors} /> }
  ];

  const nextTab = () => {
    setActiveTab((prev) => (prev + 1) % tabs.length);
  };

  const prevTab = () => {
    setActiveTab((prev) => (prev - 1 + tabs.length) % tabs.length);
  };

  return (
    <div className="bg-gray-50">
      {/* Hero section */}
      <TutoringHero colors={colors} onContactClick={handleContactClick} />
      
      {/* 3D Carousel Control */}
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 z-20">
          <button
            className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg bg-white hover:bg-gray-100 transition-colors duration-300"
            onClick={prevTab}
          >
            <ChevronLeft size={24} color={colors.darkPurple} />
          </button>
        </div>
        
        <div className="absolute right-4 top-1/2 -translate-y-1/2 z-20">
          <button
            className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg bg-white hover:bg-gray-100 transition-colors duration-300"
            onClick={nextTab}
          >
            <ChevronRight size={24} color={colors.darkPurple} />
          </button>
        </div>
        
        <Carousel3D 
          items={tabs}
          activeIndex={activeTab}
          setActiveIndex={setActiveTab}
          colors={colors}
        />
      </div>
      
      {/* Call to action */}
      <TutoringCta colors={colors} onContactClick={handleContactClick} />
    </div>
  );
};

export default TutoringPage;