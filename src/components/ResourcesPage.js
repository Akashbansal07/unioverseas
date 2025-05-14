import React, { useState, useRef } from 'react';
import { 
  BookOpen, ChevronRight, Search, Tag, 
  Calendar, Award, GraduationCap, Layers
} from 'lucide-react';

const ResourcesPage = ({ colors = {
  darkPurple: '#3a1d6e',
  lightPurple: '#9c8fe1',
  neonGreen: '#c0ff3c'
} }) => {
  const [selectedContent, setSelectedContent] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const modalRef = useRef(null);
  
  const categories = [
    { id: 'all', name: 'All Topics', icon: <Layers size={18} /> },
    { id: 'tests', name: 'Standardized Tests', icon: <Award size={18} /> },
    { id: 'application', name: 'Application Process', icon: <Calendar size={18} /> },
    { id: 'statements', name: 'Personal Statements', icon: <BookOpen size={18} /> }
  ];
  
  const articles = [
    {
      id: 'sat-act',
      title: "Choosing Between the SAT and ACT: A Comprehensive Comparison",
      excerpt: "Detailed comparison to help you choose the right test based on your strengths.",
      tags: ['tests'],
      content: {
        sections: [
          {
            title: "Choose SAT if:",
            items: [
              "You excel at in-depth reading analysis",
              "Math is your strong suit",
              "You prefer more time per question",
              "Math - SAT emphasizes algebra and data analysis"
            ]
          },
          {
            title: "Choose ACT if:",
            items: [
              "Science is your strength",
              "You work well under time pressure",
              "ACT requires faster work",
              "Math - ACT covers more geometry and trigonometry"
            ]
          },
          {
            title: "Consider your strengths:",
            items: [
              "Strong in science → Consider ACT",
              "Excel at algebra/data analysis → Consider SAT",
              "Work well under time pressure → Consider ACT",
              "Prefer deeper analysis of fewer questions → Consider SAT"
            ]
          }
        ],
        note: "Most universities accept BOTH tests equally! Take a diagnostic test of each and compare your comfort & scores!"
      }
    },
    {
      id: 'undergrad',
      title: "Navigating the Under-grad application process for USA",
      excerpt: "Complete guide to undergraduate applications including timeline, tests, and financial considerations.",
      tags: ['application'],
      content: {
        sections: [
          {
            title: "Timeline",
            items: [
              "August-September: Finalize university list and create application accounts",
              "September-October: Begin writing essays and personal statements",
              "October: Submit early decision/action applications",
              "November-January: Submit regular decision applications",
              "December-March: Interview with admissions officers (if required)",
              "March-April: Receive admission decisions",
              "April: Compare offers and work on financial documents for i-20",
              "May: Apply for student visa (F-1)"
            ]
          },
          {
            title: "Standardized tests",
            items: [
              "SAT, ACT, AP"
            ]
          },
          {
            title: "Financial considerations",
            items: [
              "Tuition: $25,000-60,000 per year",
              "Room and Board: $10,000-20,000 per year",
              "Books and Supplies: $1,000-2,000 per year",
              "Health Insurance: $1,500-3,000 per year"
            ]
          },
          {
            title: "Financial Aid options",
            items: [
              "Merit-based scholarships (academic, athletic, artistic)",
              "Need-based aid (limited for international students)",
              "External scholarships and grants"
            ]
          },
          {
            title: "Job Options",
            items: [
              "On campus jobs during semesters (limited to 20 hours/week)",
              "Curricular Practical Training (CPT) for internships",
              "One year Optional Practical Training (OPT) post-graduation",
              "Often require more employer sponsorship for long-term positions",
              "Post study stay back - 60 day grace period to either leave the US, change the visa status or enroll in another program"
            ]
          }
        ]
      }
    },
    {
      id: 'grad',
      title: "Navigating the Grad application process for USA",
      excerpt: "Guide to graduate school applications with timeline, tests, and financial information.",
      tags: ['application'],
      content: {
        sections: [
          {
            title: "Timeline",
            items: [
              "September-October: Start work on documentation and especially start requesting for recommendation letters",
              "October-November: Write personal statements, essays or work on portfolio",
              "November-December: Submit applications through university portal",
              "December-February: Interview with admissions committees (if requested)",
              "February-April: Receive admission decisions",
              "April: Finalise the university and work on financial documents for i-20",
              "May-July: Apply for student visa (F-1)"
            ]
          },
          {
            title: "Standardized tests",
            items: [
              "GRE, GMAT, LSAT, MCAT"
            ]
          },
          {
            title: "Financial considerations",
            items: [
              "Tuition: $20,000-70,000 per year",
              "Living Expenses: $10,000-20,000 per year",
              "Health Insurance: $2,000-4,000 per year",
              "Books and Supplies: $1,000-2,000 per year"
            ]
          },
          {
            title: "Financial support options",
            items: [
              "Teaching Assistantships (TA)",
              "Research Assistantships (RA)",
              "Merit-based scholarships",
              "External Scholarships (Fulbright and other government-sponsored programs)"
            ]
          },
          {
            title: "Job Options",
            items: [
              "On-campus employment (limited to 20 hours/week)",
              "Extended OPT for STEM fields (up to 36 months)",
              "Greater eligibility for specialized work visas",
              "Post study stay back - 60 day grace period to either leave the US, change the visa status or enroll in another program"
            ]
          }
        ]
      }
    },
    {
      id: 'statement',
      title: "Crafting a Compelling Personal Statement: Do's and Don'ts",
      excerpt: "Expert tips for writing effective personal statements for your applications.",
      tags: ['statements'],
      content: {
        sections: [
          {
            title: "Do's ✓",
            subsections: [
              {
                title: "Structure and Content",
                items: [
                  "Do tell a coherent story that connects your past experiences, current goals, and future aspirations",
                  "Do be specific about why you're interested in this particular program/university",
                  "Do demonstrate knowledge of the program's unique offerings, faculty research, or institutional values",
                  "Do highlight concrete examples of your achievements rather than just stating them",
                  "Do explain any gaps or weaknesses in your application honestly and constructively",
                  "Do connect your background to your chosen field of study explicitly",
                  "Do showcase personal growth and how challenges shaped your academic journey"
                ]
              },
              {
                title: "Style and Approach",
                items: [
                  "Do use a strong opening that captures attention immediately",
                  "Do maintain focus on aspects relevant to your academic and professional goals",
                  "Do write in your authentic voice while keeping a professional tone",
                  "Do demonstrate passion for your field through specific examples",
                  "Do proofread meticulously for grammar, spelling, and clarity",
                  "Do respect word limits and be concise",
                  "Do ask for feedback from mentors, professors, or advisors"
                ]
              }
            ]
          },
          {
            title: "Don'ts ✗",
            subsections: [
              {
                title: "Content to Avoid",
                items: [
                  "Don't include your entire life story or irrelevant personal details",
                  "Don't repeat information directly from other parts of your application",
                  "Don't use generic statements that could apply to any university",
                  "Don't focus on childhood dreams without connecting them to concrete actions",
                  "Don't include controversial topics unless directly relevant to your research interests",
                  "Don't exaggerate or fabricate accomplishments or experiences",
                  "Don't criticize other institutions or educational systems"
                ]
              },
              {
                title: "Style Mistakes",
                items: [
                  "Don't use clichés like \"I've always wanted to help people\" without substantiation",
                  "Don't write a resume in paragraph form instead of a narrative",
                  "Don't use overly formal language or thesaurus-heavy vocabulary",
                  "Don't include quotes unless absolutely necessary and relevant",
                  "Don't start every sentence with \"I\"",
                  "Don't use humor that might not translate across cultures",
                  "Don't submit without proofreading by at least one other person"
                ]
              }
            ]
          },
          {
            title: "Program-Specific Considerations",
            subsections: [
              {
                title: "Undergraduate Applications",
                items: [
                  "Do focus more on personal growth, intellectual curiosity, and potential to contribute",
                  "Don't overemphasize career goals at the expense of showing academic interests"
                ]
              },
              {
                title: "Graduate Applications",
                items: [
                  "Do demonstrate research experience and specific academic interests",
                  "Do highlight alignment with faculty research",
                  "Don't be vague about your research interests or future plans"
                ]
              },
              {
                title: "MBA/Professional Programs",
                items: [
                  "Do emphasize leadership experiences and professional accomplishments",
                  "Do clearly articulate career progression and goals",
                  "Don't focus solely on technical skills without showing leadership potential"
                ]
              }
            ]
          }
        ]
      }
    },
    {
      id: 'standardized-tests',
      title: "All you need to know about standardized tests for under-grad applications in US",
      excerpt: "Complete breakdown of standardized tests required for US college applications.",
      tags: ['tests'],
      content: {
        sections: [
          {
            title: "SAT/ACT",
            items: [
              "Provides a standardized measure that colleges use to evaluate applicants from different high schools with varying grading systems",
              "Even at test-optional schools, competitive scores can enhance your application",
              "Strong scores can compensate for weaker aspects of your application",
              "Some state universities offer automatic scholarships based on test score ranges"
            ]
          },
          {
            title: "AP",
            items: [
              "Distinguishes your profile among competitive applicants as subject-specific AP courses helps admission officers assess your expertise and interest in program specific majors",
              "Shows willingness to challenge yourself with college-level material",
              "Qualifying scores (typically 3-5) earn college credits at many institutions and allows you to skip introductory courses",
              "Demonstrates subject-matter expertise and often viewed more favorably than standard high school honors courses",
              "Some scholarships specifically consider AP participation"
            ]
          },
          {
            title: "English Language Test (TOEFL/IELTS/Duolingo)",
            items: [
              "TOEFL is most widely accepted, valid for 2 years and tests reading, listening, speaking, and writing skills",
              "IELTS is widely accepted alternate to TOEFL, valid for 2 years",
              "Duolingo is accepted by some selective universities but is getting increasingly accepted since COVID-19, shorter and more affordable alternative, valid for 2 years",
              "Exemption - Many US universities may waive the english proficiency requirement if the student completed entire high school education in English medium/ studied in an IB or IGCSE curriculum/ have strong SAT Evidence-Based Reading and Writing scores (typically 650+)/ have attended an international school with English as primary language of instruction"
            ]
          }
        ]
      }
    },
    {
      id: 'test-optional',
      title: "Do I need SAT scores if the university is test-optional?",
      excerpt: "Understanding test-optional policies and when you should still submit scores.",
      tags: ['tests'],
      content: {
        sections: [
          {
            title: "Test-Optional Explained",
            items: [
              "Test-optional means you can apply without SAT scores, but submitting a good score can strengthen your application, especially if your school grades or your profile is average",
              "Approximately 80% of applicants to selective test-optional schools still submit scores",
              "Many universities practice \"holistic review of the profile\" but strong test scores can still provide an advantage"
            ]
          }
        ]
      }
    },
    {
      id: 'community-vs-university',
      title: "What is the difference between community colleges and universities?",
      excerpt: "Comparison of community colleges and universities to help you choose the right path.",
      tags: ['application'],
      content: {
        sections: [
          {
            title: "Key Differences",
            items: [
              "Community colleges: Offer 2-year associate degrees at lower costs and focus on workforce preparation. It allows transfer to universities later",
              "Universities: offer 4-year bachelor's degrees directly. Have research opportunities and facilities"
            ]
          }
        ]
      }
    }
  ];
  
  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
  };

  const filteredArticles = activeCategory === 'all' 
    ? articles 
    : articles.filter(article => article.tags.includes(activeCategory));
  
  const closeModal = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setSelectedContent(null);
    }
  };

  // Determine card colors based on tag
  const getCardStyle = (tags) => {
    if (tags.includes('tests')) {
      return { 
        borderColor: colors.lightPurple,
        icon: <Award size={24} className="mb-2" style={{ color: colors.darkPurple }} />
      };
    } else if (tags.includes('application')) {
      return { 
        borderColor: colors.neonGreen,
        icon: <Calendar size={24} className="mb-2" style={{ color: colors.darkPurple }} />
      };
    } else if (tags.includes('statements')) {
      return { 
        borderColor: '#ffd166',
        icon: <BookOpen size={24} className="mb-2" style={{ color: colors.darkPurple }} />
      };
    }
    return { 
      borderColor: 'gray',
      icon: <Tag size={24} className="mb-2" style={{ color: colors.darkPurple }} />
    };
  };
  
  const renderArticleCard = (article) => {
    const cardStyle = getCardStyle(article.tags);
    
    return (
      <div 
        key={article.id}
        className="flex flex-col bg-white rounded-xl shadow-sm overflow-hidden h-full transition-all duration-300 hover:shadow-md"
        style={{ borderLeft: `4px solid ${cardStyle.borderColor}` }}
        onClick={() => setSelectedContent(article)}
      >
        <div className="p-6">
          <div className="mb-4">
            {cardStyle.icon}
          </div>
          
          <h3 className="text-xl font-bold mb-3" style={{ color: colors.darkPurple }}>
            {article.title}
          </h3>
          
          <p className="text-gray-600 mb-4 line-clamp-3">
            {article.excerpt}
          </p>
          
          <div className="mt-auto flex items-center text-sm font-medium" style={{ color: colors.darkPurple }}>
            <span>Read Article</span>
            <ChevronRight size={16} className="ml-1" />
          </div>
        </div>
      </div>
    );
  };

  const renderContentDetail = () => {
    if (!selectedContent) return null;

    return (
      <div 
        className="fixed inset-0 bg-black/60 flex items-center justify-center z-40 p-4 pt-16 overflow-y-auto"
        onClick={closeModal}
      >
        <div 
          ref={modalRef}
          className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-fadeIn mt-4"
          style={{ scrollPaddingTop: "70px" }}
        >
          <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center z-40">
            <h2 className="text-2xl font-bold" style={{ color: colors.darkPurple }}>
              {selectedContent.title}
            </h2>
            <button 
              className="p-2 rounded-full hover:bg-gray-100"
              onClick={() => setSelectedContent(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="p-6 pt-8">
            {selectedContent.content.sections.map((section, idx) => (
              <div key={idx} className="mb-8 pt-2" id={`section-${idx}`}>
                <h3 
                  className="text-xl font-bold mb-4 pb-2 border-b" 
                  style={{ color: colors.darkPurple, borderColor: colors.lightPurple }}
                >
                  {section.title}
                </h3>
                
                {section.subsections ? (
                  section.subsections.map((subsection, subIdx) => (
                    <div key={subIdx} className="mb-6">
                      <h4 className="text-lg font-medium mb-3" style={{ color: colors.darkPurple }}>
                        {subsection.title}
                      </h4>
                      <ul className="list-disc pl-6 space-y-2">
                        {subsection.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="text-gray-700">{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))
                ) : (
                  <ul className="list-disc pl-6 space-y-2">
                    {section.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="text-gray-700">{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            
            {selectedContent.content.note && (
              <div className="mt-6 p-4 rounded-lg flex items-start gap-3"
                style={{ backgroundColor: `${colors.neonGreen}20` }}
              >
                <div className="text-xl">💡</div>
                <p className="font-medium" style={{ color: colors.darkPurple }}>
                  Pro Tip: {selectedContent.content.note}
                </p>
              </div>
            )}
          </div>
          
          <div className="border-t border-gray-200 px-6 py-4 flex justify-end">
            <button
              className="px-4 py-2 rounded-lg font-medium"
              style={{ backgroundColor: colors.neonGreen, color: colors.darkPurple }}
              onClick={() => setSelectedContent(null)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section - Kept intact as requested */}
      <div 
        className="py-20 bg-cover bg-center relative"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1741795746033-d50d48dc1da5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHN0dWR5JTIwcmVzb3VyY2VzfGVufDB8fDB8fHww')",
          backgroundColor: "rgba(0,0,0,0.7)",
          backgroundBlendMode: "overlay"
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Educational Resources
            </h1>
            <p className="text-xl text-white mb-8">
              A comprehensive collection of articles and guides to help with your educational journey
            </p>
            
            <div className="inline-flex items-center gap-2 bg-white px-5 py-3 rounded-full shadow-md">
              <BookOpen size={20} className="text-purple-800" />
              <span className="font-medium text-purple-800">Blog & Articles</span>
            </div>
          </div>
        </div>
      </div>

      {/* Redesigned Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: colors.darkPurple }}>
            Educational Insights & Trends
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            Explore our comprehensive guides to help with your education journey
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8 relative">
            <div className="flex items-center bg-white rounded-full shadow-sm border border-gray-200 pl-4 pr-2 py-2">
              <Search size={18} className="text-gray-400" />
              <input 
                type="text" 
                placeholder="Search resources..." 
                className="w-full ml-2 focus:outline-none text-gray-700"
              />
              <button 
                className="ml-2 px-4 py-1 rounded-full text-sm font-medium" 
                style={{ backgroundColor: colors.neonGreen, color: colors.darkPurple }}
              >
                Search
              </button>
            </div>
          </div>
          
          {/* Category tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map(category => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition-colors ${
                  activeCategory === category.id 
                    ? 'text-white shadow-md' 
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                }`}
                style={activeCategory === category.id ? { backgroundColor: colors.darkPurple } : {}}
                onClick={() => handleCategoryChange(category.id)}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredArticles.map(article => renderArticleCard(article))}
        </div>
        
        {/* No results message */}
        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-500">No articles found for this category.</p>
          </div>
        )}

        {/* Content Modal */}
        {renderContentDetail()}
        
        {/* Bottom Hint */}
        <div className="text-center mt-8 mb-4">
          <p className="text-gray-500 text-sm">
            Click on any article card to read the full content
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;