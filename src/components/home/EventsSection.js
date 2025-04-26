// EventsSection.js
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Video, MapPin, ExternalLink } from 'lucide-react';

const EventsSection = ({ colors }) => {
  const events = [
    {
      title: "Mastering the SAT: Strategy Session with Top Scorers",
      type: "Webinar",
      date: "May 15, 2025",
      time: "6:00 PM IST",
      icon: <Video />,
      delay: 0.2
    },
    {
      title: "Study in Australia - Requirements, Costs, and Opportunities",
      type: "Information Session",
      date: "May 22, 2025",
      time: "5:30 PM IST",
      icon: <MapPin />,
      delay: 0.4
    },
    {
      title: "Crafting the Perfect Statement of Purpose",
      type: "Workshop",
      date: "June 3, 2025",
      time: "4:00 PM IST",
      icon: <ExternalLink />,
      delay: 0.6
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: colors.darkPurple }}>
            Join Our Educational Events
          </h2>
          <div className="w-24 h-1 mx-auto my-4" style={{ backgroundColor: colors.neonGreen }}></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.7, 
                delay: event.delay,
                type: "spring",
                stiffness: 50
              }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
            >
              <div className="h-3" style={{ backgroundColor: colors.neonGreen }}></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center mr-4"
                    style={{ backgroundColor: `${colors.lightPurple}30` }}
                  >
                    {React.cloneElement(event.icon, { 
                      size: 24, 
                      color: colors.darkPurple 
                    })}
                  </div>
                  <span 
                    className="text-sm font-bold px-3 py-1 rounded-full"
                    style={{ 
                      backgroundColor: colors.darkPurple,
                      color: 'white'
                    }}
                  >
                    {event.type}
                  </span>
                </div>
                
                <h3 
                  className="text-xl font-bold mb-4"
                  style={{ color: colors.darkPurple }}
                >
                  {event.title}
                </h3>
                
                <div className="flex items-center text-gray-600 mb-2">
                  <Calendar size={18} className="mr-2" />
                  <span>{event.date}</span>
                </div>
                
                <div className="flex items-center text-gray-600 mb-6">
                  <Clock size={18} className="mr-2" />
                  <span>{event.time}</span>
                </div>
                
                <motion.button
                  className="w-full py-3 text-center rounded-lg font-medium"
                  style={{ 
                    backgroundColor: `${colors.lightPurple}20`,
                    color: colors.darkPurple
                  }}
                  whileHover={{ 
                    backgroundColor: colors.darkPurple,
                    color: 'white'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  Register Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;