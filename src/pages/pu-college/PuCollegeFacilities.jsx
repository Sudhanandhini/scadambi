import React from 'react';
import { FlaskConical, Library, Laptop, Wifi, Bus, Utensils, Heart, Shield, Award, BookOpen, Users, Trophy } from 'lucide-react';

const PuCollegeFacilities = () => {
  const facilities = [
    {
      icon: <FlaskConical size={40} />,
      title: 'Advanced Laboratories',
      description: 'Well-equipped Physics, Chemistry, Biology, and Computer labs with modern instruments and safety equipment for hands-on learning and practical experiments.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Library size={40} />,
      title: 'Comprehensive Library',
      description: 'Extensive collection of reference books, textbooks, journals, magazines, and digital resources. Peaceful reading environment with separate study areas.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <Laptop size={40} />,
      title: 'Smart Classrooms',
      description: 'Air-conditioned classrooms with digital boards, projectors, and audio-visual aids for interactive and engaging learning sessions.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <Wifi size={40} />,
      title: 'High-Speed Internet',
      description: 'Campus-wide WiFi connectivity for access to online learning resources, digital libraries, and educational platforms.',
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: <Bus size={40} />,
      title: 'Transportation',
      description: 'Safe and reliable transport facility covering major areas of Bangalore with GPS-enabled buses and trained drivers.',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: <Utensils size={40} />,
      title: 'Cafeteria',
      description: 'Hygienic canteen providing nutritious snacks and meals. Special care for quality and cleanliness maintained at all times.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: <Heart size={40} />,
      title: 'First Aid & Medical',
      description: 'On-campus first aid facility with trained staff. Tie-ups with nearby hospitals for medical emergencies.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: <Shield size={40} />,
      title: 'Security & Safety',
      description: '24/7 security surveillance with CCTV cameras, trained security personnel, and strict visitor management protocols.',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: <Trophy size={40} />,
      title: 'Sports Facilities',
      description: 'Indoor and outdoor sports facilities including basketball, volleyball, badminton courts, and fitness equipment for physical development.',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: <Users size={40} />,
      title: 'Counseling Center',
      description: 'Career counseling and psychological support services by qualified counselors for academic and personal guidance.',
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: <BookOpen size={40} />,
      title: 'Study Rooms',
      description: 'Dedicated quiet study areas and group discussion rooms for self-study and collaborative learning.',
      color: 'from-violet-500 to-violet-600'
    },
    {
      icon: <Award size={40} />,
      title: 'Activity Halls',
      description: 'Multipurpose halls for cultural events, seminars, workshops, and extracurricular activities.',
      color: 'from-rose-500 to-rose-600'
    }
  ];

  const highlights = [
    'Spacious and well-ventilated classrooms',
    'Separate seating arrangements for boys and girls',
    'Clean and hygienic washrooms',
    'Drinking water with RO purification',
    'Power backup for uninterrupted classes',
    'Eco-friendly campus with green spaces',
    'Accessible infrastructure for differently-abled',
    'Regular maintenance and upgrades'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0F2A4A] to-[#1a3a5f] text-white py-24 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              World-Class <span className="text-[#FDB913]">Facilities</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              State-of-the-art infrastructure designed to provide the best learning environment
            </p>
          </div>
        </div>
      </section>

      {/* Main Facilities Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-8 border border-gray-100 group"
              >
                <div className={`bg-gradient-to-br ${facility.color} w-20 h-20 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                  {facility.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#0F2A4A] mb-4">
                  {facility.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {facility.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Highlights */}
      <section className="py-20 bg-gradient-to-br from-[#0F2A4A] to-[#1a3a5f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Additional Amenities</h2>
            <p className="text-xl text-white/80">More features that make us stand out</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl flex items-start"
              >
                <div className="bg-[#FDB913] w-2 h-2 rounded-full mt-2 mr-3 shrink-0"></div>
                <p className="text-white/90">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-8">
              <div className="text-5xl font-bold text-[#0F2A4A] mb-2">3</div>
              <div className="text-xl text-gray-600">Science Labs</div>
            </div>
            <div className="p-8">
              <div className="text-5xl font-bold text-[#0F2A4A] mb-2">2</div>
              <div className="text-xl text-gray-600">Computer Labs</div>
            </div>
            <div className="p-8">
              <div className="text-5xl font-bold text-[#0F2A4A] mb-2">5000+</div>
              <div className="text-xl text-gray-600">Books in Library</div>
            </div>
            <div className="p-8">
              <div className="text-5xl font-bold text-[#0F2A4A] mb-2">100%</div>
              <div className="text-xl text-gray-600">WiFi Coverage</div>
            </div>
          </div>
        </div>
      </section>

      {/* Laboratory Details */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0F2A4A] mb-4">Laboratory Facilities</h2>
            <p className="text-xl text-gray-600">Equipped with latest instruments and apparatus</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                <FlaskConical className="text-blue-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#0F2A4A] mb-4">Physics Lab</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Modern experimental apparatus</li>
                <li>• Measuring instruments</li>
                <li>• Electronics equipment</li>
                <li>• Safety gear provided</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="bg-purple-100 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                <FlaskConical className="text-purple-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#0F2A4A] mb-4">Chemistry Lab</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Quality chemicals & reagents</li>
                <li>• Fume hoods & safety equipment</li>
                <li>• Analytical instruments</li>
                <li>• Proper storage facilities</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="bg-green-100 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                <FlaskConical className="text-green-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#0F2A4A] mb-4">Biology Lab</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Microscopes & specimens</li>
                <li>• Charts & models</li>
                <li>• Dissection equipment</li>
                <li>• Preserved samples</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#FDB913] to-[#FDB913]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-[#0F2A4A] mb-6">
            Experience Our Campus
          </h2>
          <p className="text-xl text-[#0F2A4A]/80 mb-8 max-w-2xl mx-auto">
            Schedule a campus visit to see our world-class facilities firsthand
          </p>
          <a
            href="mailto:scvk123@rediffmail.com"
            className="inline-flex items-center bg-[#0F2A4A] hover:bg-[#0F2A4A]/90 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all"
          >
            Book Campus Tour
          </a>
        </div>
      </section>
    </div>
  );
};

export default PuCollegeFacilities;
