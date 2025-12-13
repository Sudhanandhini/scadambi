import React from 'react';
import { BookOpen, Microscope, Calculator, Globe, Laptop, FlaskConical, Users, Award, Check, Clock, Calendar } from 'lucide-react';

const PuCollegeAcademic = () => {
  const scienceSubjects = [
    {
      name: 'Physics',
      icon: <FlaskConical size={28} />,
      topics: ['Mechanics', 'Thermodynamics', 'Electromagnetism', 'Modern Physics']
    },
    {
      name: 'Chemistry',
      icon: <Microscope size={28} />,
      topics: ['Physical Chemistry', 'Inorganic Chemistry', 'Organic Chemistry', 'Environmental Chemistry']
    },
    {
      name: 'Mathematics',
      icon: <Calculator size={28} />,
      topics: ['Calculus', 'Algebra', 'Vectors', 'Statistics & Probability']
    },
    {
      name: 'Biology',
      icon: <Globe size={28} />,
      topics: ['Botany', 'Zoology', 'Genetics', 'Ecology']
    },
    {
      name: 'Computer Science',
      icon: <Laptop size={28} />,
      topics: ['Programming in C++', 'Data Structures', 'Database Management', 'Networking']
    }
  ];

  const commerceSubjects = [
    {
      name: 'Accountancy',
      icon: <Calculator size={28} />,
      topics: ['Financial Accounting', 'Partnership Accounts', 'Company Accounts', 'Analysis of Financial Statements']
    },
    {
      name: 'Business Studies',
      icon: <BookOpen size={28} />,
      topics: ['Principles of Management', 'Marketing', 'Finance', 'Human Resource Management']
    },
    {
      name: 'Economics',
      icon: <Globe size={28} />,
      topics: ['Microeconomics', 'Macroeconomics', 'Indian Economy', 'International Trade']
    },
    {
      name: 'Statistics',
      icon: <Calculator size={28} />,
      topics: ['Probability', 'Statistical Methods', 'Index Numbers', 'Time Series Analysis']
    }
  ];

  const teachingMethodology = [
    {
      title: 'Interactive Learning',
      description: 'Engaging classroom sessions with practical demonstrations and real-world applications'
    },
    {
      title: 'Competitive Exam Prep',
      description: 'Special coaching for JEE, NEET, CET, and other entrance examinations'
    },
    {
      title: 'Regular Assessments',
      description: 'Continuous evaluation through tests, assignments, and mock examinations'
    },
    {
      title: 'Doubt Clearing Sessions',
      description: 'Dedicated time for individual student queries and concept clarification'
    }
  ];

  const academicFeatures = [
    'Well-equipped laboratories for practical learning',
    'Comprehensive library with reference books and journals',
    'Digital learning resources and smart classrooms',
    'Guest lectures by subject experts',
    'Study materials and practice papers',
    'Career counseling and guidance sessions'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0F2A4A] to-[#1a3a5f] text-white py-24 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Academic <span className="text-[#FDB913]">Programs</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Comprehensive curriculum designed for excellence in board exams and competitive entrance tests
            </p>
          </div>
        </div>
      </section>

      {/* Science Stream */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold mb-4">
              <Microscope className="mr-2" size={20} />
              PCMB / PCMC
            </div>
            <h2 className="text-4xl font-bold text-[#0F2A4A] mb-4">Science Stream</h2>
            <p className="text-xl text-gray-600">For aspiring Engineers, Doctors, and Scientists</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {scienceSubjects.map((subject, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center text-blue-700 mb-4">
                  {subject.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0F2A4A] mb-4">{subject.name}</h3>
                <ul className="space-y-2">
                  {subject.topics.map((topic, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <Check className="text-[#FDB913] mr-2 shrink-0" size={16} />
                      <span className="text-sm">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commerce Stream */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold mb-4">
              <Calculator className="mr-2" size={20} />
              CEBA / CEBM
            </div>
            <h2 className="text-4xl font-bold text-[#0F2A4A] mb-4">Commerce Stream</h2>
            <p className="text-xl text-gray-600">For future Business Leaders and Economists</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {commerceSubjects.map((subject, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="bg-green-100 w-14 h-14 rounded-xl flex items-center justify-center text-green-700 mb-4">
                  {subject.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0F2A4A] mb-4">{subject.name}</h3>
                <ul className="space-y-2">
                  {subject.topics.map((topic, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <Check className="text-[#FDB913] mr-2 shrink-0" size={16} />
                      <span className="text-sm">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0F2A4A] mb-4">Teaching Methodology</h2>
            <p className="text-xl text-gray-600">Modern approach to effective learning</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teachingMethodology.map((method, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-[#0F2A4A] to-[#1a3a5f] p-6 rounded-xl text-white text-center"
              >
                <div className="bg-[#FDB913] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-[#0F2A4A] font-bold text-xl">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-bold mb-3">{method.title}</h3>
                <p className="text-white/80 text-sm">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Features */}
      <section className="py-20 bg-[#0F2A4A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Academic Features</h2>
            <p className="text-xl text-white/80">Everything you need for academic success</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {academicFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center bg-white/10 backdrop-blur-sm p-4 rounded-lg"
              >
                <Check className="text-[#FDB913] mr-3 shrink-0" size={24} />
                <span className="text-white/90">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Calendar Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#FDB913] to-[#FDB913]/80 p-8 rounded-2xl text-[#0F2A4A]">
              <Clock size={48} className="mb-6" />
              <h3 className="text-3xl font-bold mb-4">Class Timings</h3>
              <div className="space-y-3 text-lg">
                <p className="flex justify-between">
                  <span className="font-semibold">Monday - Friday:</span>
                  <span>8:45 AM - 2:30 PM</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-semibold">Saturday:</span>
                  <span>8:45 AM - 11:40 AM</span>
                </p>
                <p className="text-sm mt-4 opacity-80">
                  Every 2nd Saturday is a holiday
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#0F2A4A] to-[#1a3a5f] p-8 rounded-2xl text-white">
              <Calendar size={48} className="mb-6 text-[#FDB913]" />
              <h3 className="text-3xl font-bold mb-4">Academic Year</h3>
              <div className="space-y-3 text-lg">
                <p className="flex justify-between">
                  <span className="font-semibold">Session Starts:</span>
                  <span>June</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-semibold">Board Exams:</span>
                  <span>February - March</span>
                </p>
                <p className="text-sm mt-4 opacity-80">
                  As per Karnataka PU Board calendar
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PuCollegeAcademic;
