import React from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy,
  Users,
  Sparkles,
  Palette,
  Music,
  Award,
  Target,
  Flag,
  Heart,
  Globe,
  BookOpen,
  Medal
} from 'lucide-react';

const HighSchoolActivities = () => {
  const coActivities = [
    {
      title: 'Scouts & Guides',
      description: 'Character development through Bharat Scouts and Guides program focusing on self-reliance, discipline, and citizenship',
      icon: Flag,
      color: 'blue',
      motto: 'Be Prepared'
    },
    {
      title: 'Sports Activities',
      description: 'Comprehensive sports program promoting physical fitness, teamwork, discipline, and mental well-being',
      icon: Trophy,
      color: 'green',
      motto: 'Healthy Body, Healthy Mind'
    },
    {
      title: 'Cultural Activities',
      description: 'Various cultural programs celebrating diversity, creativity, and artistic expression',
      icon: Music,
      color: 'purple',
      motto: 'Express Yourself'
    },
    {
      title: 'Science Club',
      description: 'Hands-on experiments, projects, and competitions to develop scientific temper',
      icon: Target,
      color: 'red',
      motto: 'Explore & Discover'
    }
  ];

  const competitions = [
    { name: 'Debate Competition', icon: '🎤' },
    { name: 'Bhagavad Gita Recitation', icon: '📖' },
    { name: 'Bharatanatyam', icon: '💃' },
    { name: 'Drawing Competition', icon: '🎨' },
    { name: 'Face Painting', icon: '🎭' },
    { name: 'Pick and Speak', icon: '🎙️' },
    { name: 'Folk Dance', icon: '🕺' },
    { name: 'Rangoli', icon: '🎨' },
    { name: 'Hair Style Making', icon: '💇' },
    { name: 'Cooking Without Fire', icon: '🍳' },
    { name: 'Mono Acting', icon: '🎬' },
    { name: 'Solo Singing', icon: '🎵' },
    { name: 'Dance', icon: '💃' },
    { name: 'Vegetable Carving', icon: '🥕' },
    { name: 'Clay Modeling', icon: '🏺' },
    { name: 'Garland Making', icon: '🌺' },
    { name: 'Best Out of Waste', icon: '♻️' }
  ];

  const events = [
    {
      title: 'Annual Sports Day',
      description: 'Two-day sports festival featuring various athletic competitions',
      icon: Trophy,
      month: 'October'
    },
    {
      title: 'Kannada Rajyotsava',
      description: 'Celebrating Karnataka\'s formation day with cultural programs',
      icon: Flag,
      month: 'November'
    },
    {
      title: 'Children\'s Day',
      description: 'Special events and activities celebrating childhood',
      icon: Heart,
      month: 'November'
    },
    {
      title: 'Sammilana',
      description: 'Inter-school competition promoting talents',
      icon: Users,
      month: 'November'
    },
    {
      title: 'Samanvaya',
      description: 'Annual cultural fest showcasing student creativity',
      icon: Sparkles,
      month: 'December'
    },
    {
      title: 'World Environment Day',
      description: 'Awareness programs and activities for environmental conservation',
      icon: Globe,
      month: 'June'
    }
  ];

  const awareness = [
    {
      title: 'Quit Tobacco Campaign',
      description: 'Creating awareness about harmful effects of tobacco',
      icon: '🚭'
    },
    {
      title: 'Environmental Protection',
      description: 'Seed ball preparation and Go Green initiatives',
      icon: '🌱'
    },
    {
      title: 'Traffic Awareness',
      description: 'Road safety programs by traffic police officials',
      icon: '🚦'
    },
    {
      title: 'Health Campaigns',
      description: 'Dengue fever awareness and health education',
      icon: '🏥'
    }
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
            <Sparkles className="w-16 h-16 mx-auto mb-6 text-secondary" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Activities & Events</h1>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Beyond academics - nurturing well-rounded personalities
            </p>
          </motion.div>
        </div>
      </section>

      {/* Co-Curricular Activities */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Co-Curricular Activities
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {coActivities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border-t-4 border-secondary"
              >
                <div className={`w-16 h-16 bg-${activity.color}-100 rounded-full flex items-center justify-center mb-4`}>
                  <activity.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">{activity.title}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">{activity.description}</p>
                <div className="inline-block px-4 py-2 bg-yellow-100 text-secondary font-semibold rounded-full text-sm">
                  {activity.motto}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitions */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Inter-Class Competitions
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              Unleashing young minds, one talent at a time
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {competitions.map((comp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all text-center border-t-4 border-secondary hover:-translate-y-2"
              >
                <div className="text-4xl mb-3">{comp.icon}</div>
                <p className="font-semibold text-primary text-sm">{comp.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Annual Events */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Annual Events
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border-l-4 border-secondary"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <event.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">{event.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{event.description}</p>
                    <span className="inline-block px-3 py-1 bg-secondary text-white text-xs font-semibold rounded-full">
                      {event.month}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awareness Programs */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Awareness Programs
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {awareness.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all text-center border-t-4 border-secondary"
              >
                <div className="text-5xl mb-4">{program.icon}</div>
                <h3 className="text-lg font-bold text-primary mb-2">{program.title}</h3>
                <p className="text-sm text-gray-600">{program.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Activities */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-l-8 border-secondary"
          >
            <h2 className="text-3xl font-bold text-primary mb-6">Other Academic Activities</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Medal className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Matematica Examination</h3>
                    <p className="text-sm text-gray-600">State Level Talent Exam by Karnataka Academy of Mathematics</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <BookOpen className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Ramayana & Mahabharata Exams</h3>
                    <p className="text-sm text-gray-600">Conducted by Bharatha Sanskriti Pratishtan, Bangalore</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">TAMS Program</h3>
                    <p className="text-sm text-gray-600">The Amateur Manager and Scientist by PES University</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Flag className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Scouts Founders' Day</h3>
                    <p className="text-sm text-gray-600">75th Founders' Day celebrated through cycle jatha</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Trophy className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Cluster Level Sports</h3>
                    <p className="text-sm text-gray-600">Kho-Kho, Kabaddi, Volleyball, Throwball and Athletics</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sparkles className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Science Expo</h3>
                    <p className="text-sm text-gray-600">Field trips and exhibitions to develop scientific temper</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Student Parliament */}
      <section className="py-16 bg-gradient-to-r from-secondary to-yellow-600 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Users className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              School Parliamentary Elections
            </h2>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-xl text-yellow-100 max-w-3xl mx-auto leading-relaxed">
              To imbibe leadership qualities at the grassroot level, our school designs parliamentary elections 
              every year for high school students. This democratic process helps students understand civic 
              responsibility and develop leadership skills.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HighSchoolActivities;
