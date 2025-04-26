// ResourcesPage.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, FileText, Calendar, MapPin, Award, Download, 
  ChevronRight, Play, ExternalLink, Clock, Search
} from 'lucide-react';

const ResourcesPage = ({ colors }) => {
  const [activeCategory, setActiveCategory] = useState('blog');
  
  const categories = [
    { id: 'blog', label: 'Blog & Articles', icon: <BookOpen size={20} /> },
    { id: 'free', label: 'Free Resources', icon: <Download size={20} /> },
    { id: 'webinars', label: 'Webinars & Events', icon: <Calendar size={20} /> },
    { id: 'countries', label: 'Country Guides', icon: <MapPin size={20} /> },
    { id: 'scholarships', label: 'Scholarships', icon: <Award size={20} /> }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
  };

  // Blog/Articles content
  const blogArticles = [
    {
      title: "Choosing Between the SAT and ACT: A Comprehensive Comparison",
      excerpt: "An in-depth analysis of both standardized tests, helping you determine which option aligns better with your strengths and university goals.",
      image: "/api/placeholder/400/250",
      date: "April 15, 2025",
      readTime: "8 min read"
    },
    {
      title: "2025 Admissions Trends: What Universities Are Looking For",
      excerpt: "Insights into the evolving priorities of admission committees across popular destinations, with actionable tips for strengthening your application.",
      image: "/api/placeholder/400/250",
      date: "April 3, 2025",
      readTime: "12 min read"
    },
    {
      title: "Navigating Financial Aid as an International Student",
      excerpt: "A comprehensive guide to scholarship opportunities, tuition reduction strategies, and financial planning for global education.",
      image: "/api/placeholder/400/250",
      date: "March 28, 2025",
      readTime: "10 min read"
    },
    {
      title: "Crafting a Compelling Personal Statement: Do's and Don'ts",
      excerpt: "Expert advice on creating authentic, impactful personal statements that resonate with admissions committees.",
      image: "/api/placeholder/400/250",
      date: "March 15, 2025",
      readTime: "7 min read"
    }
  ];

  // Free Resources content
  const freeResources = [
    {
      title: "University Research Template",
      description: "Structured format for comparing institutions across key factors",
      icon: <FileText size={24} />,
      format: "PDF, Excel"
    },
    {
      title: "Application Timeline Planner",
      description: "Customizable schedule for managing deadlines",
      icon: <Calendar size={24} />,
      format: "PDF, Google Sheets"
    },
    {
      title: "SOP Outline Worksheet",
      description: "Framework for developing compelling personal statements",
      icon: <FileText size={24} />,
      format: "Word, PDF"
    },
    {
      title: "Scholarship Database",
      description: "Regularly updated listing of international student opportunities",
      icon: <Award size={24} />,
      format: "Excel, PDF"
    },
    {
      title: "Interview Preparation Checklist",
      description: "Common questions and response strategies",
      icon: <FileText size={24} />,
      format: "PDF"
    },
    {
      title: "Standardized Test Study Planner",
      description: "Week-by-week preparation guides",
      icon: <Calendar size={24} />,
      format: "PDF, Google Calendar"
    }
  ];

  // Webinars/Events content
  const webinars = {
    upcoming: [
      {
        title: "Subject Selection Strategies for IBDP Success",
        date: "May 12, 2025",
        time: "5:00 PM IST",
        speaker: "Dr. Sarah Johnson, IB Curriculum Expert"
      },
      {
        title: "US vs. UK Education Systems: Choosing Your Best Fit",
        date: "May 20, 2025",
        time: "6:30 PM IST",
        speaker: "Mark Williams, International Education Consultant"
      },
      {
        title: "Scholarship Hunting: Beyond the Obvious Options",
        date: "June 5, 2025",
        time: "5:00 PM IST",
        speaker: "Lisa Chen, Financial Aid Specialist"
      }
    ],
    past: [
      {
        title: "Mastering the Common Application",
        duration: "55 minutes",
        presenter: "James Halbert, Former Admissions Officer"
      },
      {
        title: "Building a Competitive Extracurricular Profile",
        duration: "48 minutes",
        presenter: "Dr. Michelle Rodriguez, University Counselor"
      },
      {
        title: "Financial Planning for International Education",
        duration: "62 minutes",
        presenter: "Robert Kumar, Education Finance Advisor"
      }
    ]
  };

  // Country Guides content
  const countryGuides = [
    { 
      country: "USA", 
      flag: "/api/placeholder/80/60",
      universities: 4500,
      topCity: "Boston"
    },
    { 
      country: "UK", 
      flag: "/api/placeholder/80/60",
      universities: 160,
      topCity: "London"
    },
    { 
      country: "Canada", 
      flag: "/api/placeholder/80/60",
      universities: 100,
      topCity: "Toronto"
    },
    { 
      country: "Australia", 
      flag: "/api/placeholder/80/60",
      universities: 43,
      topCity: "Melbourne"
    },
    { 
      country: "Germany", 
      flag: "/api/placeholder/80/60",
      universities: 400,
      topCity: "Berlin"
    },
    { 
      country: "Netherlands", 
      flag: "/api/placeholder/80/60",
      universities: 70,
      topCity: "Amsterdam"
    },
    { 
      country: "Singapore", 
      flag: "/api/placeholder/80/60",
      universities: 34,
      topCity: "Singapore"
    },
    { 
      country: "New Zealand", 
      flag: "/api/placeholder/80/60",
      universities: 8,
      topCity: "Auckland"
    }
  ];

  // Scholarship content
  const scholarshipCategories = [
    {
      title: "University-Specific Scholarships",
      description: "Funding opportunities offered directly by institutions to attract top talent",
      count: 1250
    },
    {
      title: "Government-Funded Opportunities",
      description: "Scholarships provided by governments to promote international education",
      count: 475
    },
    {
      title: "Private Foundation Awards",
      description: "Support from non-profit organizations with educational missions",
      count: 680
    },
    {
      title: "Field of Study Scholarships",
      description: "Funding targeted to specific academic disciplines and research areas",
      count: 920
    },
    {
      title: "Diversity and Inclusion Initiatives",
      description: "Scholarships aimed at increasing representation in higher education",
      count: 350
    },
    {
      title: "Athletic Scholarships",
      description: "Funding for students with exceptional sporting achievements",
      count: 200
    },
    {
      title: "Research Grants",
      description: "Financial support for innovative research projects and proposals",
      count: 420
    }
  ];

  const renderContent = () => {
    switch (activeCategory) {
      case 'blog':
        return (
          <motion.div 
            key="blog" 
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="py-8"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: colors.darkPurple }}>
                Educational Insights & Trends
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Stay informed with our latest articles, guides, and expert insights on education, 
                admissions, and international study opportunities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {blogArticles.map((article, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full border border-gray-100"
                  whileHover={{ y: -5, boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.1)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                      <div className="p-4 text-white">
                        <div className="flex items-center text-sm">
                          <span className="mr-3">{article.date}</span>
                          <span className="flex items-center">
                            <Clock size={14} className="mr-1" />
                            {article.readTime}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex-grow">
                    <h3 className="text-xl font-bold mb-3" style={{ color: colors.darkPurple }}>
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {article.excerpt}
                    </p>
                  </div>
                  <div className="px-6 pb-6">
                    <button 
                      className="text-sm font-medium flex items-center"
                      style={{ color: colors.darkPurple }}
                    >
                      Read Article
                      <ChevronRight size={16} className="ml-1" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <button
                className="px-6 py-3 rounded-full font-medium inline-flex items-center gap-2"
                style={{ backgroundColor: colors.neonGreen, color: colors.darkPurple }}
              >
                View All Articles
                <ChevronRight size={20} />
              </button>
            </div>
          </motion.div>
        );

      case 'free':
        return (
          <motion.div 
            key="free" 
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="py-8"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: colors.darkPurple }}>
                Tools for Your Educational Journey
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Download our free resources to support your application process, university research, 
                test preparation, and more.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {freeResources.map((resource, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-xl shadow-md p-6 border border-gray-100"
                  whileHover={{ y: -5, boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.1)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: `${colors.lightPurple}30` }}>
                    <div style={{ color: colors.darkPurple }}>
                      {resource.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: colors.darkPurple }}>
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {resource.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      Available formats: {resource.format}
                    </span>
                    <button 
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: colors.neonGreen }}
                    >
                      <Download size={18} style={{ color: colors.darkPurple }} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <button
                className="px-6 py-3 rounded-full font-medium inline-flex items-center gap-2"
                style={{ backgroundColor: colors.neonGreen, color: colors.darkPurple }}
              >
                Download All Resources
                <Download size={20} />
              </button>
            </div>
          </motion.div>
        );

      case 'webinars':
        return (
          <motion.div 
            key="webinars" 
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="py-8"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: colors.darkPurple }}>
                Knowledge Sessions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Join our live webinars with education experts or access recordings of past sessions 
                to gain valuable insights on your academic journey.
              </p>
            </div>

            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-6" style={{ color: colors.darkPurple }}>
                Upcoming Webinars
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {webinars.upcoming.map((webinar, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
                    whileHover={{ y: -5, boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.1)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="h-2" style={{ backgroundColor: colors.neonGreen }}></div>
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center mr-2" style={{ backgroundColor: `${colors.lightPurple}30` }}>
                          <Calendar size={20} style={{ color: colors.darkPurple }} />
                        </div>
                        <div>
                          <div className="flex items-center text-sm font-medium text-gray-500">
                            <span>{webinar.date}</span>
                            <span className="mx-2">•</span>
                            <span>{webinar.time}</span>
                          </div>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-3" style={{ color: colors.darkPurple }}>
                        {webinar.title}
                      </h3>
                      <p className="text-gray-600 mb-5">
                        Presented by: {webinar.speaker}
                      </p>
                      <button 
                        className="w-full py-2 rounded-lg font-medium flex items-center justify-center"
                        style={{ 
                          backgroundColor: colors.darkPurple,
                          color: 'white'
                        }}
                      >
                        Register Now
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <h3 className="text-2xl font-bold mb-6" style={{ color: colors.darkPurple }}>
                Past Webinar Recordings
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {webinars.past.map((recording, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white rounded-xl shadow-md p-6 border border-gray-100"
                    whileHover={{ y: -5, boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.1)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative mb-3 bg-gray-100 rounded-lg" style={{ paddingTop: '56.25%' }}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full flex items-center justify-center bg-white/80 backdrop-blur-sm shadow-md">
                          <Play size={24} style={{ color: colors.darkPurple }} />
                        </div>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-2" style={{ color: colors.darkPurple }}>
                      {recording.title}
                    </h3>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{recording.presenter}</span>
                      <span>{recording.duration}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <button
                className="px-6 py-3 rounded-full font-medium inline-flex items-center gap-2"
                style={{ backgroundColor: colors.darkPurple, color: 'white' }}
              >
                Register for Webinars
                <Calendar size={18} />
              </button>
              <button
                className="px-6 py-3 rounded-full font-medium inline-flex items-center gap-2"
                style={{ backgroundColor: colors.neonGreen, color: colors.darkPurple }}
              >
                Access Recorded Sessions
                <Play size={18} />
              </button>
            </div>
          </motion.div>
        );

      case 'countries':
        return (
          <motion.div 
            key="countries" 
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="py-8"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: colors.darkPurple }}>
                Destination Insights
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore comprehensive guides to higher education in popular study destinations,
                including admission requirements, visa processes, and culture.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {countryGuides.map((country, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
                  whileHover={{ y: -5, boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.1)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="aspect-w-16 aspect-h-9 relative">
                    <img 
                      src={country.flag} 
                      alt={`${country.country} flag`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4" style={{ color: colors.darkPurple }}>
                      {country.country}
                    </h3>
                    <div className="space-y-2 mb-5">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Universities:</span>
                        <span className="font-medium">{country.universities}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Top Student City:</span>
                        <span className="font-medium">{country.topCity}</span>
                      </div>
                    </div>
                    <button 
                      className="w-full py-2 rounded-lg font-medium flex items-center justify-center"
                      style={{ 
                        backgroundColor: `${colors.lightPurple}30`,
                        color: colors.darkPurple
                      }}
                    >
                      Explore Guide
                      <ExternalLink size={16} className="ml-1" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-white to-blue-50 rounded-xl p-6 md:p-8 mb-8">
              <div className="flex flex-col md:flex-row items-center">
                <div className="mb-6 md:mb-0 md:mr-8">
                  <h3 className="text-xl font-bold mb-2" style={{ color: colors.darkPurple }}>
                    Each country guide includes:
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                    {[
                      'Education System Overview',
                      'Types of Institutions',
                      'Application Procedures',
                      'Visa Requirements',
                      'Cost of Living',
                      'Work Opportunities',
                      'Cultural Adaptation Tips',
                      'Featured Universities'
                    ].map((item, index) => (
                      <li key={index} className="flex items-center">
                        <div 
                          className="w-2 h-2 rounded-full mr-2"
                          style={{ backgroundColor: colors.neonGreen }}
                        ></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-shrink-0">
                  <button
                    className="px-6 py-3 rounded-full font-medium inline-flex items-center gap-2 whitespace-nowrap"
                    style={{ backgroundColor: colors.darkPurple, color: 'white' }}
                  >
                    Browse Country Guides
                    <MapPin size={18} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        );

      case 'scholarships':
        return (
          <motion.div 
            key="scholarships" 
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="py-8"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: colors.darkPurple }}>
                Funding Your Education
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Discover scholarship opportunities worldwide to support your international 
                education journey with our comprehensive database.
              </p>
            </div>

            <div className="relative mb-12 bg-white rounded-xl shadow-md overflow-hidden p-6 md:p-8">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6" style={{ color: colors.darkPurple }}>
                  Search Scholarships
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium mb-1 text-gray-700">Study Level</label>
                    <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2" style={{ focusRing: colors.lightPurple }}>
                      <option>Any Level</option>
                      <option>Undergraduate</option>
                      <option>Postgraduate</option>
                      <option>Doctoral</option>
                      <option>Research</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1 text-gray-700">Country</label>
                    <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2" style={{ focusRing: colors.lightPurple }}>
                      <option>Any Country</option>
                      <option>USA</option>
                      <option>UK</option>
                      <option>Canada</option>
                      <option>Australia</option>
                      <option>Germany</option>
                      <option>Others</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1 text-gray-700">Field of Study</label>
                    <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2" style={{ focusRing: colors.lightPurple }}>
                      <option>Any Field</option>
                      <option>Business & Management</option>
                      <option>Engineering & Technology</option>
                      <option>Arts & Humanities</option>
                      <option>Medicine & Health</option>
                      <option>Sciences</option>
                      <option>Social Sciences</option>
                    </select>
                  </div>
                </div>
                <button
                  className="px-6 py-3 rounded-lg font-medium inline-flex items-center gap-2"
                  style={{ backgroundColor: colors.darkPurple, color: 'white' }}
                >
                  Search Scholarships
                  <Search size={18} />
                </button>
              </div>
              <div 
                className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none"
                style={{ 
                  backgroundImage: `url(/api/placeholder/400/800)`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              ></div>
            </div>

            <h3 className="text-2xl font-bold mb-6" style={{ color: colors.darkPurple }}>
              Scholarship Categories
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {scholarshipCategories.map((category, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-xl shadow-md p-6 border border-gray-100"
                  whileHover={{ y: -5, boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.1)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-lg font-bold" style={{ color: colors.darkPurple }}>
                      {category.title}
                    </h4>
                    <span 
                      className="px-2 py-1 rounded text-sm font-medium"
                      style={{ 
                        backgroundColor: `${colors.lightPurple}20`,
                        color: colors.darkPurple
                      }}
                    >
                      {category.count}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    {category.description}
                  </p>
                  <button 
                    className="text-sm font-medium flex items-center mt-auto"
                    style={{ color: colors.darkPurple }}
                  >
                    Browse Category
                    <ChevronRight size={16} className="ml-1" />
                  </button>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <button
                className="px-6 py-3 rounded-full font-medium inline-flex items-center gap-2"
                style={{ backgroundColor: colors.neonGreen, color: colors.darkPurple }}
              >
                Search Scholarship Database
                <Search size={18} />
              </button>
            </div>
          </motion.div>
        );

      default:
        return <div>Select a category</div>;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-white to-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: colors.darkPurple }}>
              Resources
            </h1>
            <p className="text-xl text-gray-700 mb-6">
              Access free tools, guides, and expert content to support your educational journey
            </p>

            {/* Category Navigation */}
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                    activeCategory === category.id 
                      ? 'shadow-md' 
                      : 'hover:bg-white/50'
                  }`}
                  style={{ 
                    backgroundColor: activeCategory === category.id ? colors.neonGreen : 'white',
                    color: colors.darkPurple
                  }}
                >
                  {category.icon}
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-16">
        {renderContent()}
      </div>
    </div>
  );
};

export default ResourcesPage;