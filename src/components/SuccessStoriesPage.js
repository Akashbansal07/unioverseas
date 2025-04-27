import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Star, GraduationCap, Award, TrendingUp, Check, 
  BookOpen, Globe, MapPin, User, ChevronRight, 
  ChevronDown, Quote, School, Medal, ThumbsUp,
  ArrowRight, Zap, Clock, BarChart, ArrowUpRight
} from 'lucide-react';

const SuccessStoriesPage = ({ colors = {
  darkPurple: "#4F46E5", 
  lightPurple: "#A5B4FC", 
  neonGreen: "#4ADE80"
} }) => {
  const [expandedCase, setExpandedCase] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [showAllTestimonials, setShowAllTestimonials] = useState(false);
  
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
  
  const testimonials = [
    {
      id: 1,
      name: "Divya K.",
      university: "University of Pennsylvania",
      program: "Wharton School of Business, Finance",
      classYear: "Class of 2024",
      quote: "UniOversea helped me transform my good-but-not-great profile into a compelling application that showcased my unique strengths. Their strategic approach to essay development and interview preparation helped me secure admission to Penn despite intense competition.",
      category: "ivy",
      photo: "/api/placeholder/80/80?1",
      universityLogo: "/api/placeholder/60/60?upenn"
    },
    {
      id: 2,
      name: "Rahul M.",
      university: "University College London",
      program: "MSc Computer Science",
      classYear: "Class of 2023",
      quote: "The UCAS application process seemed daunting until I started working with UniOversea. Their expertise in crafting personal statements that align with UK admissions expectations was invaluable. I received offers from all five of my UCAS choices including University College London and Imperial College.",
      category: "uk",
      photo: "/api/placeholder/80/80?2",
      universityLogo: "/api/placeholder/60/60?ucl"
    },
    {
      id: 3,
      name: "Aisha F.",
      university: "University of Toronto",
      program: "Life Sciences, Neuroscience focus",
      classYear: "Class of 2023",
      quote: "UniOversea's scholarship strategy completely changed my educational trajectory. Their counselors identified opportunities I never would have found on my own and guided me through specialized applications. I received a prestigious scholarship covering full tuition at the University of Toronto.",
      achievement: "$120,000 scholarship over four years",
      category: "scholarship",
      photo: "/api/placeholder/80/80?3",
      universityLogo: "/api/placeholder/60/60?toronto"
    },
    {
      id: 4,
      name: "Jayesh P.",
      university: "MIT",
      program: "Electrical Engineering & Computer Science",
      classYear: "Class of 2023",
      quote: "The personalized guidance I received from UniOversea was instrumental in helping me stand out in MIT's competitive applicant pool. They helped me highlight my research experience and technical projects in a way that aligned perfectly with MIT's values.",
      category: "ivy",
      photo: "/api/placeholder/80/80?4",
      universityLogo: "/api/placeholder/60/60?mit"
    },
    {
      id: 5,
      name: "Sofia R.",
      university: "University of Melbourne",
      program: "Master of Environment",
      classYear: "Class of 2024",
      quote: "As an international student, I was overwhelmed by Australia's application process. UniOversea guided me through each step, from choosing the right program to securing my student visa. Their holistic support made a complex process feel manageable.",
      category: "australia",
      photo: "/api/placeholder/80/80?5",
      universityLogo: "/api/placeholder/60/60?melbourne"
    },
    {
      id: 6,
      name: "Chen W.",
      university: "University of British Columbia",
      program: "Commerce, Finance Specialization",
      classYear: "Class of 2025",
      quote: "UniOversea's counselors provided strategic advice that helped me secure both admission and a substantial international student scholarship at UBC. Their approach to highlighting my entrepreneurial experience made my application stand out.",
      achievement: "$80,000 scholarship over four years",
      category: "scholarship",
      photo: "/api/placeholder/80/80?6",
      universityLogo: "/api/placeholder/60/60?ubc"
    }
  ];
  
  const caseStudies = [
    {
      id: 1,
      title: "Overcoming Academic Challenges",
      student: "Vikram",
      challenge: "Competing with applicants with stronger academic profiles for Computer Science programs.",
      profile: "Vikram had strong extracurricular achievements but a GPA below the average for his target universities.",
      approach: [
        "Developed strategy emphasizing technical projects and leadership",
        "Intensive SAT tutoring resulting in a 1530 score",
        "Carefully selected universities where holistic review was emphasized",
        "Crafted essays highlighting resilience and growth mindset"
      ],
      outcome: "Accepted to Georgia Tech, University of Wisconsin-Madison, and Purdue University with partial merit scholarship.",
      icon: <TrendingUp />
    },
    {
      id: 2,
      title: "Late Start Application Process",
      student: "Neha",
      challenge: "Compressed timeline for test preparation, document development, and university selection.",
      profile: "Neha approached UniOversea just 4 months before application deadlines.",
      approach: [
        "Accelerated consultations and prioritized action items",
        "Focused test preparation on key areas for improvement",
        "Leveraged existing strengths in academic record and research experience",
        "Strategic selection of universities with rolling admissions"
      ],
      outcome: "Secured admission to University of Illinois Urbana-Champaign and University of Washington for Master's in Environmental Engineering.",
      icon: <Clock />
    },
    {
      id: 3,
      title: "Career Transition Through Education",
      student: "Arjun",
      challenge: "Demonstrating commitment and aptitude for a new field without relevant experience.",
      profile: "Arjun had 3 years of work experience in IT but wanted to pivot to healthcare management.",
      approach: [
        "Identified transferable skills from IT to healthcare systems",
        "Arranged informational interviews with healthcare professionals",
        "Highlighted systems thinking and data analysis strengths",
        "Targeted programs with interdisciplinary approaches"
      ],
      outcome: "Admitted to Boston University MHA program with a pathway to healthcare informatics specialization and received a graduate assistantship.",
      icon: <ArrowUpRight />
    }
  ];
  
  const categories = [
    { id: 'all', label: 'All Stories', icon: <Star size={16} /> },
    { id: 'ivy', label: 'Ivy League', icon: <School size={16} /> },
    { id: 'uk', label: 'UK Universities', icon: <Globe size={16} /> },
    { id: 'scholarship', label: 'Scholarships', icon: <Award size={16} /> },
    { id: 'australia', label: 'Australia', icon: <MapPin size={16} /> }
  ];
  
  const filteredTestimonials = activeCategory === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.category === activeCategory);
  
  const displayedTestimonials = showAllTestimonials 
    ? filteredTestimonials 
    : filteredTestimonials.slice(0, 3);
  
  const toggleCase = (id) => {
    setExpandedCase(expandedCase === id ? null : id);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
{/* Hero Section */}
<div 
  className="py-32 md:py-40 lg:py-48 bg-cover bg-center relative"
  style={{
    backgroundImage: "url('https://media.istockphoto.com/id/1007726450/photo/portrait-of-female-student-holding-books-in-classroom-young-woman-looking-at-camera-and.webp?a=1&b=1&s=612x612&w=0&k=20&c=11ROubtEtbxbZR7vXoDujPkFz8sqzlBHMsoluMyRL3E=')",
    backgroundColor: "rgba(0,0,0,0.7)",
    backgroundBlendMode: "overlay"
  }}
>
  <div className="container mx-auto px-4 relative z-10">
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
            Success Stories
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">
            Inspiring journeys of students who achieved their educational goals with UniOversea's guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              className="py-3 px-6 rounded-full text-white font-medium shadow-lg flex items-center justify-center gap-2"
              style={{ backgroundColor: colors.darkPurple }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <User size={20} />
              Share Your Story
            </motion.button>
            <motion.button
              className="py-3 px-6 rounded-full font-medium shadow-lg flex items-center justify-center gap-2"
              style={{ backgroundColor: colors.neonGreen, color: colors.darkPurple }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <GraduationCap size={20} />
              Start Your Journey
            </motion.button>
          </div>
        </motion.div>
        
        <motion.div 
          className="md:w-1/2 relative"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((id) => (
              <div key={id} className="relative">
                <img 
                  src={`/api/placeholder/300/200?student${id}`} 
                  alt={`Student success ${id}`} 
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            ))}
          </div>
          
          <motion.div 
            className="absolute -bottom-5 -right-5 bg-white p-4 rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: colors.neonGreen }}>
                <ThumbsUp size={24} color={colors.darkPurple} />
              </div>
              <div className="text-sm">
                <p className="font-bold" style={{ color: colors.darkPurple }}>98% Success Rate</p>
                <p className="text-gray-500">University admissions</p>
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
      
      {/* Testimonials Section */}
      <div className="py-16 container mx-auto px-4">
        <motion.div 
          className="max-w-5xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center" style={{ color: colors.darkPurple }}>
            Voices of Achievement
          </h2>
          
          <p className="text-lg text-center text-gray-700 mb-8 max-w-3xl mx-auto">
            Hear directly from students who transformed their educational journey with UniOversea's guidance.
          </p>
          
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                  activeCategory === category.id 
                    ? 'shadow-md' 
                    : 'hover:bg-white/50'
                }`}
                style={{ 
                  backgroundColor: activeCategory === category.id ? colors.neonGreen : 'white',
                  color: colors.darkPurple
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <span>{category.icon}</span>
                {category.label}
              </motion.button>
            ))}
          </div>
          
          {/* Testimonials Grid */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10"
            variants={staggerContainer}
          >
            {displayedTestimonials.map((testimonial) => (
              <motion.div 
                key={testimonial.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                variants={itemFadeIn}
              >
                <div className="h-2" style={{ backgroundColor: colors.neonGreen }}></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0 border-2" style={{ borderColor: colors.lightPurple }}>
                      <img 
                        src={testimonial.photo} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold" style={{ color: colors.darkPurple }}>
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-700">
                        {testimonial.university}, {testimonial.classYear}
                      </p>
                      <p className="text-xs text-gray-600 italic">
                        {testimonial.program}
                      </p>
                    </div>
                  </div>
                  
                  {testimonial.achievement && (
                    <div className="mb-4 px-3 py-2 rounded-lg" style={{ backgroundColor: `${colors.lightPurple}20` }}>
                      <div className="flex items-center">
                        <Medal size={16} className="mr-2" style={{ color: colors.darkPurple }} />
                        <p className="text-sm font-medium" style={{ color: colors.darkPurple }}>
                          Achievement: {testimonial.achievement}
                        </p>
                      </div>
                    </div>
                  )}
                  
                  <div className="mb-4 relative">
                    <Quote size={20} className="absolute -left-1 -top-1 opacity-20" />
                    <p className="text-gray-700 pl-6 pr-2 italic">
                      "{testimonial.quote}"
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                      <img 
                        src={testimonial.universityLogo} 
                        alt={`${testimonial.university} logo`}
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    <div className="inline-block px-3 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: `${colors.lightPurple}20`, color: colors.darkPurple }}>
                      {categories.find(c => c.id === testimonial.category)?.label || 'Success Story'}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {filteredTestimonials.length > 3 && (
            <div className="text-center">
              <motion.button
                onClick={() => setShowAllTestimonials(!showAllTestimonials)}
                className="px-6 py-2 rounded-full text-sm font-medium inline-flex items-center gap-2"
                style={{ 
                  backgroundColor: colors.lightPurple + '30',
                  color: colors.darkPurple
                }}
                whileHover={{ scale: 1.05, backgroundColor: colors.lightPurple + '50' }}
                whileTap={{ scale: 0.97 }}
              >
                {showAllTestimonials ? 'Show Less' : 'View More Testimonials'}
                <ChevronDown size={16} className={`transform transition-transform ${showAllTestimonials ? 'rotate-180' : ''}`} />
              </motion.button>
            </div>
          )}
        </motion.div>
      </div>
      
      {/* Case Studies Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-5xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center" style={{ color: colors.darkPurple }}>
              Journey Spotlights
            </h2>
            
            <p className="text-lg text-center text-gray-700 mb-12 max-w-3xl mx-auto">
              Detailed case studies showcasing how UniOversea helped students overcome specific challenges.
            </p>
            
            <motion.div 
              className="space-y-6 mb-12"
              variants={staggerContainer}
            >
              {caseStudies.map((caseStudy, index) => (
                <motion.div 
                  key={caseStudy.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
                  variants={itemFadeIn}
                >
                  <div 
                    className="flex justify-between items-center p-6 cursor-pointer"
                    onClick={() => toggleCase(caseStudy.id)}
                    style={{ 
                      backgroundColor: expandedCase === caseStudy.id ? `${colors.lightPurple}20` : 'white',
                    }}
                  >
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: `${colors.neonGreen}30` }}>
                        <div style={{ color: colors.darkPurple }}>
                          {caseStudy.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold" style={{ color: colors.darkPurple }}>
                          {caseStudy.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          Student: {caseStudy.student}
                        </p>
                      </div>
                    </div>
                    <div>
                      <ChevronRight 
                        size={24} 
                        className={`transition-transform transform ${expandedCase === caseStudy.id ? 'rotate-90' : ''}`}
                        style={{ color: colors.darkPurple }}
                      />
                    </div>
                  </div>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      expandedCase === caseStudy.id ? 'max-h-[1000px]' : 'max-h-0'
                    }`}
                  >
                    <div className="px-6 pb-6 pt-2">
                      <div className="mb-4">
                        <div className="font-medium mb-1" style={{ color: colors.darkPurple }}>Student Profile</div>
                        <p className="text-gray-700">{caseStudy.profile}</p>
                      </div>
                      
                      <div className="mb-4">
                        <div className="font-medium mb-1" style={{ color: colors.darkPurple }}>Challenge</div>
                        <p className="text-gray-700">{caseStudy.challenge}</p>
                      </div>
                      
                      <div className="mb-4">
                        <div className="font-medium mb-2" style={{ color: colors.darkPurple }}>UniOversea Approach</div>
                        <ul className="space-y-2">
                          {caseStudy.approach.map((step, i) => (
                            <li key={i} className="flex items-start">
                              <div className="mr-2 mt-1 flex-shrink-0">
                                <ArrowRight size={14} style={{ color: colors.neonGreen }} />
                              </div>
                              <span className="text-gray-700">{step}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <div className="font-medium mb-1" style={{ color: colors.darkPurple }}>Outcome</div>
                        <div className="p-3 rounded-lg" style={{ backgroundColor: `${colors.lightPurple}10` }}>
                          <div className="flex items-center">
                            <Zap size={18} className="mr-2" style={{ color: colors.darkPurple }} />
                            <p className="text-gray-700 font-medium">{caseStudy.outcome}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="py-16 bg-gradient-to-r from-white to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-5xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center" style={{ color: colors.darkPurple }}>
              UniOversea Impact
            </h2>
            
            <p className="text-lg text-center text-gray-700 mb-12 max-w-3xl mx-auto">
              The numbers behind our student-centered approach to educational guidance.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { label: "Students Guided", value: "1,200+", icon: <User size={24} /> },
                { label: "University Acceptances", value: "98%", icon: <School size={24} /> },
                { label: "Scholarship Recipients", value: "68%", icon: <Award size={24} /> },
                { label: "Countries Represented", value: "40+", icon: <Globe size={24} /> }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-xl shadow-md p-6 text-center"
                  whileHover={{ translateY: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4" style={{ backgroundColor: `${colors.lightPurple}30` }}>
                    <div style={{ color: colors.darkPurple }}>
                      {stat.icon}
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold mb-2" style={{ color: colors.darkPurple }}>
                    {stat.value}
                  </h3>
                  <p className="text-gray-600">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: colors.darkPurple }}>
              Begin Your Success Story
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Join our community of successful students who achieved their educational goals with UniOversea's guidance.
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
                Explore Our Process
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStoriesPage;