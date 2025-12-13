import React from 'react';
import { GraduationCap, Target, Eye, Heart, Users, Award, BookOpen, TrendingUp } from 'lucide-react';

const PuCollegeAbout = () => {
  const values = [
    {
      icon: <BookOpen size={32} />,
      title: 'Academic Excellence',
      description: 'Committed to providing highest quality education with focus on competitive exam preparation'
    },
    {
      icon: <Users size={32} />,
      title: 'Student-Centric Approach',
      description: 'Individual attention and personalized guidance for every student'
    },
    {
      icon: <Award size={32} />,
      title: 'Holistic Development',
      description: 'Balanced focus on academics, sports, and cultural activities'
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'Career Guidance',
      description: 'Professional counseling for higher education and career planning'
    }
  ];

  const milestones = [
    { year: '2000', event: 'PU College Established' },
    { year: '2005', event: 'First Batch 100% Pass' },
    { year: '2010', event: 'Expanded to Commerce Stream' },
    { year: '2015', event: 'State-level Recognition' },
    { year: '2020', event: 'Digital Learning Integration' },
    { year: '2025', event: 'Silver Jubilee Year' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0F2A4A] to-[#1a3a5f] text-white py-24 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About <span className="text-[#FDB913]">PU College</span></h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Building future leaders through excellence in pre-university education since 2000
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-[#FDB913]/10 text-[#0F2A4A] px-4 py-2 rounded-full font-semibold mb-6">
                <GraduationCap className="mr-2" size={20} />
                Our Story
              </div>
              <h2 className="text-4xl font-bold text-[#0F2A4A] mb-6">
                Excellence in Pre-University Education
              </h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                S. Cadambi PU College has been a beacon of quality education in Bangalore for over two decades. Affiliated with the Department of Pre-University Education, Karnataka, we offer Science and Commerce streams with a focus on holistic development.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our experienced faculty, modern infrastructure, and student-centric approach have consistently produced outstanding results in board examinations and competitive entrance tests. We prepare students not just for exams, but for life.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[#FDB913] to-[#FDB913]/70 rounded-2xl p-8 shadow-2xl">
                <img
                  src="/api/placeholder/600/400"
                  alt="PU College Building"
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-[#FDB913] w-12 h-12 rounded-xl flex items-center justify-center text-white mr-4">
                  <Eye size={24} />
                </div>
                <h3 className="text-3xl font-bold text-[#0F2A4A]">Our Vision</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To be a leading pre-university college that empowers students with knowledge, skills, and values to excel in their chosen fields and contribute positively to society. We envision creating future leaders who are academically brilliant, morally upright, and socially responsible.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-[#0F2A4A] w-12 h-12 rounded-xl flex items-center justify-center text-white mr-4">
                  <Target size={24} />
                </div>
                <h3 className="text-3xl font-bold text-[#0F2A4A]">Our Mission</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To provide high-quality pre-university education through innovative teaching methods, comprehensive curriculum, and state-of-the-art facilities. We are committed to nurturing critical thinking, creativity, and character development while preparing students for competitive examinations and higher education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0F2A4A] mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all text-center border border-gray-100"
              >
                <div className="bg-[#FDB913]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-[#0F2A4A]">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0F2A4A] mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey/Timeline */}
      <section className="py-20 bg-[#0F2A4A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-white/80">Milestones of excellence over the years</p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
            {milestones.map((milestone, idx) => (
              <div key={idx} className="text-center">
                <div className="bg-[#FDB913] text-[#0F2A4A] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {milestone.year}
                </div>
                <p className="text-white/90 text-sm">{milestone.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Message Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#0F2A4A] to-[#1a3a5f] rounded-3xl p-12 text-white text-center">
            <div className="max-w-3xl mx-auto">
              <Heart className="mx-auto mb-6 text-[#FDB913]" size={48} />
              <h2 className="text-3xl font-bold mb-6">Principal's Message</h2>
              <p className="text-lg leading-relaxed text-white/90 mb-6">
                "At S. Cadambi PU College, we believe that education is not just about acquiring knowledge, but about building character, developing critical thinking, and preparing for the challenges of tomorrow. Our dedicated faculty and comprehensive curriculum ensure that every student receives the guidance and support needed to excel."
              </p>
              <p className="text-xl font-semibold text-[#FDB913]">
                Building Values through Education
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PuCollegeAbout;
