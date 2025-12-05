import React from 'react';
import { motion } from 'framer-motion';
import { 
  School,
  FlaskConical,
  BookOpen,
  Dumbbell,
  Shield,
  Sun,
  Droplet,
  Camera,
  Sparkles,
  Trophy,
  Heart,
  Users
} from 'lucide-react';

const HighSchoolFacilities = () => {
  const mainFacilities = [
    {
      icon: School,
      title: 'Spacious Classrooms',
      description: 'Well-ventilated classrooms with smart TV facilities, proper seating arrangements, and blackboards',
      color: 'blue'
    },
    {
      icon: FlaskConical,
      title: 'Science Laboratories',
      description: 'Specialized Physics, Chemistry, and Biology labs with modern equipment for practical learning',
      color: 'purple'
    },
    {
      icon: BookOpen,
      title: 'Well-Stocked Library',
      description: 'Extensive collection of books, periodicals, and digital resources for research and reading',
      color: 'green'
    },
    {
      icon: Users,
      title: 'Multipurpose Auditorium',
      description: 'Spacious auditorium accommodating 200+ people for cultural programs and events',
      color: 'red'
    },
    {
      icon: Dumbbell,
      title: 'Sports Facilities',
      description: 'Indoor and outdoor sports facilities for various games and physical activities',
      color: 'orange'
    },
    {
      icon: Heart,
      title: 'Health Support',
      description: 'First aid facilities and health support with menstrual sanitary pads supply',
      color: 'pink'
    }
  ];

  const labs = [
    { name: 'Physics Laboratory', description: 'Advanced equipment for physics experiments', icon: '⚗️' },
    { name: 'Chemistry Laboratory', description: 'Fully equipped chemistry lab with safety measures', icon: '🧪' },
    { name: 'Biology Laboratory', description: 'Modern biology lab with specimens and models', icon: '🔬' },
    { name: 'Computer Laboratory', description: 'Computer lab with latest hardware and software', icon: '💻' }
  ];

  const sports = [
    { name: 'Kho-Kho', icon: '🏃' },
    { name: 'Kabaddi', icon: '🤼' },
    { name: 'Volleyball', icon: '🏐' },
    { name: 'Badminton', icon: '🏸' },
    { name: 'Throw Ball', icon: '🎾' },
    { name: 'Shot Put', icon: '⚽' },
    { name: 'Chess', icon: '♟️' },
    { name: 'Carom', icon: '🎲' }
  ];

  const safety = [
    { icon: Camera, title: 'CCTV Surveillance', description: 'Campus-wide monitoring for student safety' },
    { icon: Shield, title: 'Fire Extinguishers', description: 'Strategically placed fire safety equipment' },
    { icon: Heart, title: 'First Aid Box', description: 'Emergency medical supplies readily available' },
    { icon: Shield, title: 'Security Personnel', description: 'Trained staff for campus security' }
  ];

  const environmental = [
    { icon: Sun, title: 'Solar Power Plants', description: 'Renewable energy initiatives for sustainability' },
    { icon: Droplet, title: 'Rainwater Harvesting', description: 'Water conservation and management system' }
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
            <School className="w-16 h-16 mx-auto mb-6 text-secondary" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Facilities</h1>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              World-class infrastructure for comprehensive learning and development
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Facilities */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Academic Facilities
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainFacilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border-t-4 border-secondary hover:-translate-y-2"
              >
                <div className={`w-14 h-14 bg-${facility.color}-100 rounded-full flex items-center justify-center mb-4`}>
                  <facility.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{facility.title}</h3>
                <p className="text-gray-600 leading-relaxed">{facility.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Labs */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Specialized Laboratories
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              Equipped with modern apparatus for hands-on learning
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {labs.map((lab, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all text-center border-t-4 border-secondary"
              >
                <div className="text-5xl mb-4">{lab.icon}</div>
                <h3 className="text-lg font-bold text-primary mb-2">{lab.name}</h3>
                <p className="text-sm text-gray-600">{lab.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Library Section */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-l-8 border-secondary"
          >
            <div className="flex items-center gap-4 mb-6">
              <BookOpen className="w-12 h-12 text-secondary" />
              <h2 className="text-3xl font-bold text-primary">Library</h2>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Our school library serves as a hub for reading, research, studying, and collaborative learning, 
                functioning as an integral part of the school's academic life.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h3 className="font-bold text-primary mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Sparkles className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span>Extensive collection of books and periodicals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Sparkles className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span>Digital resources and reference materials</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Sparkles className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span>Quiet study environment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Sparkles className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span>Information literacy support</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-3">Services</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Sparkles className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span>Learning environment for research</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Sparkles className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span>Accessibility and organization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Sparkles className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span>Support for curriculum</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Sparkles className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span>Qualified librarian assistance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sports Facilities */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Sports & Recreation
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              Indoor and outdoor facilities for various sports activities
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {sports.map((sport, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all text-center border-t-4 border-secondary hover:-translate-y-2"
              >
                <div className="text-4xl mb-3">{sport.icon}</div>
                <p className="font-semibold text-primary">{sport.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Security */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Safety & Security
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-xl text-secondary font-semibold">
              "Safe Children, Secure Future"
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {safety.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border-l-4 border-secondary"
              >
                <item.icon className="w-10 h-10 text-secondary mb-4" />
                <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Initiatives */}
      <section className="py-16 bg-gradient-to-r from-secondary to-yellow-600 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Environmental Initiatives
            </h2>
            <div className="w-24 h-1 bg-white mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {environmental.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20"
              >
                <item.icon className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-lg text-yellow-100">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HighSchoolFacilities;
