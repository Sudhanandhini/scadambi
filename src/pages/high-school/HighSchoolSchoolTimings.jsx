import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Calendar, Sun, AlertCircle } from 'lucide-react';

const HighSchoolSchoolTimings = () => {
  const weekdaySchedule = [
    { time: '09:45 AM', activity: 'School Starts' },
    { time: '09:45 AM - 10:30 AM', activity: 'Period 1' },
    { time: '10:30 AM - 11:15 AM', activity: 'Period 2' },
    { time: '11:15 AM - 12:00 PM', activity: 'Period 3' },
    { time: '12:00 PM - 12:45 PM', activity: 'Period 4' },
    { time: '12:45 PM - 01:15 PM', activity: 'Lunch Break' },
    { time: '01:15 PM - 02:00 PM', activity: 'Period 5' },
    { time: '02:00 PM - 02:45 PM', activity: 'Period 6' },
    { time: '02:45 PM - 03:30 PM', activity: 'Period 7' },
    { time: '03:30 PM - 04:00 PM', activity: 'Period 8' },
    { time: '04:00 PM', activity: 'School Ends' },
  ];

  const saturdaySchedule = [
    { time: '08:45 AM', activity: 'School Starts' },
    { time: '08:45 AM - 09:30 AM', activity: 'Period 1' },
    { time: '09:30 AM - 10:15 AM', activity: 'Period 2' },
    { time: '10:15 AM - 11:00 AM', activity: 'Period 3' },
    { time: '11:00 AM - 11:45 AM', activity: 'Period 4' },
    { time: '11:45 AM - 12:30 PM', activity: 'Period 5' },
    { time: '12:30 PM - 12:45 PM', activity: 'Assembly/Activities' },
    { time: '12:45 PM', activity: 'School Ends' },
  ];

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
            <Clock className="w-16 h-16 mx-auto mb-6 text-secondary" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">School Timings</h1>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Grade 9-10 • State High School
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-secondary"
            >
              <div className="flex items-center gap-3 mb-6">
                <Sun className="w-10 h-10 text-secondary" />
                <div>
                  <h2 className="text-2xl font-bold text-primary">Weekdays</h2>
                  <p className="text-gray-600">Monday to Friday</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="text-center p-6 bg-gradient-to-r from-secondary to-yellow-600 text-white rounded-xl">
                  <p className="text-sm mb-2">School Hours</p>
                  <p className="text-3xl font-bold">9:45 AM - 4:00 PM</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-blue-500"
            >
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="w-10 h-10 text-blue-600" />
                <div>
                  <h2 className="text-2xl font-bold text-primary">Saturday</h2>
                  <p className="text-gray-600">Half Day</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="text-center p-6 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-xl">
                  <p className="text-sm mb-2">School Hours</p>
                  <p className="text-3xl font-bold">8:45 AM - 12:45 PM</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 bg-yellow-50 rounded-xl p-6 border-l-4 border-secondary"
          >
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-primary mb-2">Important Note</h3>
                <p className="text-gray-700">
                  Students are expected to arrive 10 minutes before the start of school. 
                  Late arrivals may result in missed attendance or important announcements.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Detailed Schedule */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Weekday Schedule */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-secondary to-yellow-600 text-white p-6">
                  <h2 className="text-2xl font-bold">Monday - Friday Schedule</h2>
                  <p className="text-yellow-100">Detailed daily timetable</p>
                </div>
                <div className="p-6">
                  <div className="space-y-3">
                    {weekdaySchedule.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-yellow-50 transition-colors"
                      >
                        <Clock className="w-5 h-5 text-secondary flex-shrink-0" />
                        <div className="flex-1">
                          <p className="font-semibold text-primary text-sm">{item.time}</p>
                        </div>
                        <div className="text-gray-700 font-medium">{item.activity}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Saturday Schedule */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-6">
                  <h2 className="text-2xl font-bold">Saturday Schedule</h2>
                  <p className="text-blue-100">Half-day timetable</p>
                </div>
                <div className="p-6">
                  <div className="space-y-3">
                    {saturdaySchedule.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
                      >
                        <Clock className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        <div className="flex-1">
                          <p className="font-semibold text-primary text-sm">{item.time}</p>
                        </div>
                        <div className="text-gray-700 font-medium">{item.activity}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
          >
            <h2 className="text-3xl font-bold text-primary mb-6">Additional Information</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-primary mb-4">General Guidelines</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Students must arrive before 9:45 AM on weekdays</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Saturday classes start at 8:45 AM (earlier than weekdays)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Lunch break is from 12:45 PM to 1:15 PM (30 minutes)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Each period is 45 minutes long</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-4">Contact for Queries</h3>
                <p className="text-gray-700 mb-4">
                  For any questions regarding school timings or schedule:
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:08023232831"
                    className="flex items-center gap-3 text-secondary hover:text-yellow-600"
                  >
                    <Clock className="w-5 h-5" />
                    <span>080-23232831</span>
                  </a>
                  <a
                    href="mailto:scvk123@rediffmail.com"
                    className="flex items-center gap-3 text-secondary hover:text-yellow-600"
                  >
                    <AlertCircle className="w-5 h-5" />
                    <span>scvk123@rediffmail.com</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HighSchoolSchoolTimings;
