import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ChevronDown, ChevronUp } from 'lucide-react';

const HighSchoolAcademicCalendar = () => {
  const [expandedMonth, setExpandedMonth] = useState(null);

  const academicYear = '2025-2026';

  const monthlyEvents = [
    {
      month: 'May 2025',
      events: [
        { date: '19-05-2025', day: 'Monday', event: 'Parent orientation program & Commencement of 10th classes', committee: 'PTS Committee' },
        { date: '26-05-2025', day: 'Monday', event: 'Parent orientation program for 8th std', committee: 'Cultural Committee' },
        { date: '28-05-2025', day: 'Wednesday', event: 'Veer Savarkar Day', committee: '' },
        { date: '29-05-2025', day: 'Thursday', event: 'Commencement of 8th and 9th classes', committee: 'Election Committee' },
        { date: '31-05-2025', day: 'Saturday', event: 'World No Tobacco Day', committee: '' },
      ]
    },
    {
      month: 'June 2025',
      events: [
        { date: '05-06-2025', day: 'Thursday', event: 'World Environmental Day', committee: 'Discipline Committee' },
        { date: '12-06-2025', day: 'Thursday', event: 'World Child Labour Day', committee: '' },
        { date: '18-06-2025', day: 'Wednesday', event: 'Election Day', committee: 'Sports Club' },
      ]
    },
    {
      month: 'July 2025',
      events: [
        { date: '04-07-2025', day: 'Friday', event: 'Formative Assessment - I', committee: 'Science Club' },
        { date: '19-07-2025', day: 'Saturday', event: '1st Term Parent Teacher Meeting', committee: '' },
        { date: '21-07-2025', day: 'Monday', event: 'Investiture Ceremony', committee: '' },
        { date: '26-07-2025', day: 'Friday', event: 'Kargil Diwas', committee: '' },
      ]
    },
    {
      month: 'August 2025',
      events: [
        { date: '09-08-2025', day: 'Monday', event: 'World Sanskrit Day Celebration', committee: 'Competitions' },
        { date: '12-08-2025', day: 'Tuesday', event: 'Commencement of Talents Week', committee: '' },
        { date: '18-08-2025', day: 'Monday', event: 'Formative Assessment - II', committee: '' },
        { date: '20-08-2025', day: 'Wednesday', event: 'National Sadhbhavan Day', committee: '' },
      ]
    },
    {
      month: 'September 2025',
      events: [
        { date: '13-09-2025', day: 'Saturday', event: 'Summative Assessment I', committee: '' },
        { date: '15-09-2025', day: 'Monday', event: 'Hindi Diwas/Engineers Day', committee: '' },
        { date: '16-09-2025', day: 'Tuesday', event: 'World Ozone Day', committee: '' },
      ]
    },
    {
      month: 'October 2025',
      events: [
        { date: '17-10-2025', day: 'Friday', event: 'Annual Sports Day', committee: '' },
        { date: '18-10-2025', day: 'Saturday', event: 'Annual Sports Day (Day 2)', committee: '' },
        { date: '25-10-2025', day: 'Saturday', event: 'Mid Term Parent Teacher Meeting', committee: '' },
      ]
    },
    {
      month: 'November 2025',
      events: [
        { date: '01-11-2025', day: 'Saturday', event: 'Kannada Rajyotsava', committee: '' },
        { date: '14-11-2025', day: 'Friday', event: 'Children\'s Day', committee: '' },
        { date: '15-11-2025', day: 'Saturday', event: 'Sammilana 2025 Inter-school Competition', committee: '' },
        { date: '24-11-2025', day: 'Monday', event: 'Formative Assessment - III', committee: '' },
        { date: '26-11-2025', day: 'Wednesday', event: 'Constitution Day', committee: '' },
      ]
    },
    {
      month: 'December 2025',
      events: [
        { date: '06-12-2025', day: 'Saturday', event: 'Parent Teacher Meeting', committee: '' },
        { date: '27-12-2025', day: 'Saturday', event: 'SAMANVAYA - 2025', committee: '' },
      ]
    },
    {
      month: 'January 2026',
      events: [
        { date: '05-01-2026', day: 'Monday', event: 'Formative Assessment - IV', committee: '' },
        { date: '12-01-2026', day: 'Monday', event: 'National Youth Day', committee: '' },
        { date: '17-01-2026', day: 'Saturday', event: 'Parent Teacher Meeting', committee: '' },
        { date: '19-01-2026', day: 'Monday', event: 'Preparatory Exam - I (10th std)', committee: '' },
      ]
    },
    {
      month: 'February 2026',
      events: [
        { date: '09-02-2026', day: 'Monday', event: 'Preparatory Exam - II (10th std)', committee: '' },
        { date: '23-02-2026', day: 'Monday', event: 'Preparatory Exam - I (8th and 9th std)', committee: '' },
        { date: '28-02-2026', day: 'Saturday', event: 'National Science Day', committee: '' },
      ]
    },
    {
      month: 'March 2026',
      events: [
        { date: '1st Week', day: '', event: 'Preparatory Exam - III (10th std)', committee: '' },
        { date: '3rd Week', day: '', event: 'Final Exams - 8th and 9th std', committee: '' },
        { date: 'Last Week', day: '', event: 'SSLC Final Exams', committee: '' },
      ]
    },
    {
      month: 'April 2026',
      events: [
        { date: '1st/2nd Week', day: '', event: 'Results - 8th & 9th', committee: '' },
      ]
    },
  ];

  const toggleMonth = (month) => {
    setExpandedMonth(expandedMonth === month ? null : month);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-blue-900 to-primary text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-secondary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Calendar className="w-16 h-16 mx-auto mb-6 text-secondary" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Academic Calendar</h1>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-xl text-gray-300">
              Academic Year {academicYear}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {monthlyEvents.map((monthData, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden border-l-4 border-secondary"
              >
                {/* Month Header */}
                <button
                  onClick={() => toggleMonth(monthData.month)}
                  className="w-full px-6 py-4 flex items-center justify-between bg-gradient-to-r from-yellow-50 to-white hover:from-yellow-100 hover:to-yellow-50 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <Calendar className="w-6 h-6 text-secondary" />
                    <h2 className="text-2xl font-bold text-primary">{monthData.month}</h2>
                    <span className="px-3 py-1 bg-secondary text-white text-sm font-semibold rounded-full">
                      {monthData.events.length} Events
                    </span>
                  </div>
                  {expandedMonth === monthData.month ? (
                    <ChevronUp className="w-6 h-6 text-secondary" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-secondary" />
                  )}
                </button>

                {/* Events List */}
                {expandedMonth === monthData.month && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-gray-200"
                  >
                    <div className="p-6 space-y-4">
                      {monthData.events.map((event, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-yellow-50 transition-colors"
                        >
                          <div className="flex-shrink-0 text-center">
                            <div className="w-16 h-16 bg-secondary text-white rounded-lg flex flex-col items-center justify-center">
                              <span className="text-2xl font-bold">
                                {event.date.split('-')[0] || '?'}
                              </span>
                              <span className="text-xs">{event.day}</span>
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-primary mb-1">
                              {event.event}
                            </h3>
                            {event.committee && (
                              <p className="text-sm text-gray-600">
                                <span className="font-semibold">Committee:</span> {event.committee}
                              </p>
                            )}
                            <p className="text-sm text-gray-500 mt-1">
                              {event.date}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Competitions Note */}
      <section className="py-16 bg-gradient-to-r from-secondary to-yellow-600 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Talent Week Competitions</h2>
            <p className="text-xl text-yellow-100 mb-8">
              During August, we organize various inter-class competitions including:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-lg">
              {['Debate', 'Bhagavad Gita Recitation', 'Drawing', 'Face Painting', 'Folk Dance', 'Rangoli', 'Solo Singing', 'Dance', 'Clay Modeling', 'Best Out of Waste', 'Vegetable Carving', 'Cooking Without Fire'].map((comp, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  {comp}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Important Note */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center border-t-4 border-secondary"
          >
            <h2 className="text-2xl font-bold text-primary mb-4">Important Note</h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              Dates are tentative and subject to change. Parents and students will be notified 
              in advance about any modifications to the calendar. Please check regularly for updates.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HighSchoolAcademicCalendar;
