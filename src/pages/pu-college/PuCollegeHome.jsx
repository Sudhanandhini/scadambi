import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Award, TrendingUp, ArrowRight, Check, GraduationCap, Microscope, Calculator } from 'lucide-react';

const PuCollegeHome = () => {
  const streams = [
    {
      title: 'Science Stream',
      icon: <Microscope size={32} />,
      subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology', 'Computer Science'],
      color: 'bg-blue-500'
    },
    {
      title: 'Commerce Stream',
      icon: <Calculator size={32} />,
      subjects: ['Accountancy', 'Business Studies', 'Economics', 'Statistics'],
      color: 'bg-green-500'
    }
  ];

  const features = [
    {
      icon: <BookOpen size={28} />,
      title: 'Quality Education',
      description: 'Comprehensive curriculum designed for competitive exam preparation'
    },
    {
      icon: <Users size={28} />,
      title: 'Experienced Faculty',
      description: 'Expert teachers with proven track record in PU education'
    },
    {
      icon: <Award size={28} />,
      title: 'Excellent Results',
      description: 'Consistent high performance in board examinations'
    },
    {
      icon: <TrendingUp size={28} />,
      title: 'Career Guidance',
      description: 'Professional counseling for higher education and career paths'
    }
  ];

  const achievements = [
    { number: '95%+', label: 'Board Pass Percentage' },
    { number: '50+', label: 'University Ranks' },
    { number: '100%', label: 'College Placements' },
    { number: '20+', label: 'Years of Excellence' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0F2A4A] via-[#1a3a5f] to-[#0F2A4A] text-white py-32 mt-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center bg-[#FDB913] text-[#0F2A4A] px-6 py-2 rounded-full font-semibold mb-6">
              <GraduationCap className="mr-2" size={20} />
              Pre-University Education
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Welcome to <span className="text-[#FDB913]">PU College</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Shaping Future Leaders through Excellence in Science & Commerce Education
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/pu-college/admissions"
                className="bg-[#FDB913] hover:bg-[#FDB913]/90 text-[#0F2A4A] px-8 py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center"
              >
                Apply Now
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/pu-college/about"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Streams Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0F2A4A] mb-4">Available Streams</h2>
            <p className="text-xl text-gray-600">Choose your path to success</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {streams.map((stream, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100"
              >
                <div className={`${stream.color} w-16 h-16 rounded-xl flex items-center justify-center text-white mb-6`}>
                  {stream.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#0F2A4A] mb-4">{stream.title}</h3>
                <ul className="space-y-3">
                  {stream.subjects.map((subject, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <Check className="text-[#FDB913] mr-3 shrink-0" size={20} />
                      {subject}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0F2A4A] mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600">Excellence in every aspect of education</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all text-center"
              >
                <div className="bg-[#FDB913]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-[#0F2A4A]">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0F2A4A] mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-[#0F2A4A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Achievements</h2>
            <p className="text-xl text-white/80">Numbers that speak for themselves</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl font-bold text-[#FDB913] mb-2">
                  {achievement.number}
                </div>
                <div className="text-white/80 text-lg">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#FDB913] to-[#FDB913]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-[#0F2A4A] mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-[#0F2A4A]/80 mb-8 max-w-2xl mx-auto">
            Join us and become part of a legacy of excellence in pre-university education
          </p>
          <Link
            to="/pu-college/admissions"
            className="inline-flex items-center bg-[#0F2A4A] hover:bg-[#0F2A4A]/90 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all"
          >
            Apply for Admission
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PuCollegeHome;
