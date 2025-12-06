import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  GraduationCap,
  FlaskConical,
  Calculator,
  Globe,
  Lightbulb,
  Award,
  Target,
  CheckCircle,
  Languages, Trophy
} from 'lucide-react';

const HighSchoolAcademic = () => {
  const subjects = [
    { name: 'Kannada', icon: Languages, color: 'purple' },
    { name: 'English', icon: BookOpen, color: 'blue' },
    { name: 'Hindi / Sanskrit', icon: Languages, color: 'green' },
    { name: 'Mathematics', icon: Calculator, color: 'red' },
    { name: 'Science (Physics, Chemistry, Biology)', icon: FlaskConical, color: 'orange' },
    { name: 'Social Science', icon: Globe, color: 'indigo' },
    { name: 'Computer Studies', icon: Target, color: 'cyan' },
    { name: 'Physical Education', icon: Award, color: 'emerald' },
    { name: 'Moral Science', icon: GraduationCap, color: 'pink' },
  ];

  const teachingMethods = [
    {
      title: 'Traditional Methods',
      description: 'Time-tested teaching approaches with direct instruction',
      icon: BookOpen
    },
    {
      title: 'Communicative Language Teaching',
      description: 'Focus on interaction and practical communication skills',
      icon: Languages
    },
    {
      title: 'Task Physical Response',
      description: 'Learning through physical movement and activities',
      icon: Target
    },
    {
      title: 'Inquiry Based Learning',
      description: 'Encouraging curiosity and critical thinking',
      icon: Lightbulb
    },
    {
      title: 'Project Based Learning',
      description: 'Hands-on learning through real-world projects',
      icon: Award
    },
    {
      title: 'Experimental Learning',
      description: 'Learning through experience and practical application',
      icon: FlaskConical
    },
    {
      title: 'Technology Integration',
      description: 'Using smart TVs, digital tools, and modern resources',
      icon: Calculator
    },
    {
      title: 'Visual Learning',
      description: 'Using models, symbols, charts, flash cards, and globe',
      icon: Globe
    },
  ];

  const assessmentTypes = [
    {
      type: 'Formative Assessment (FA)',
      description: 'Continuous evaluation throughout the academic year',
      features: ['Regular tests', 'Class participation', 'Assignments', 'Projects']
    },
    {
      type: 'Summative Assessment (SA)',
      description: 'End-term comprehensive examinations',
      features: ['Mid-term exams', 'Final exams', 'Annual evaluation', 'Result analysis']
    }
  ];

  const languageNote = [
    'Kannada must be opted as 1st language',
    'English is taught as 2nd language (compulsory)',
    'Students choose Hindi OR Sanskrit as 3rd language'
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
            <GraduationCap className="w-16 h-16 mx-auto mb-6 text-secondary" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Academic Excellence</h1>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Karnataka State Board Curriculum - Grades 9 & 10
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-l-8 border-secondary"
          >
            <h2 className="text-3xl font-bold text-primary mb-6">Academic Curriculum</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                S. Cadambi Vidya Kendra High School, Basaveshwara Nagar, has programmed a diverse and specialized 
                curriculum, which helps the child to develop critical thinking and problem-solving skills.
              </p>
              <p>
                We follow the Karnataka State Board system of <strong>Formative Assessment (FA)</strong> and 
                <strong> Summative Assessment (SA)</strong>, which are the two primary components of the Continuous 
                and Comprehensive Evaluation (CCE) model.
              </p>
              <p>
                Innovations are encouraged for an effective symbiotic relationship between teaching and learning to 
                help imbibe different perspectives within each subject area. Students become participants in learning, 
                not just securing knowledge, so their learning becomes linked to their life outside school.
              </p>
              <p>
                Spirited participation in seminars, discussions, dramatics, public speaking, and other activities 
                that enhance concentration and classroom learning enable students to acquire learning skills required 
                for overall intellectual, psychological, and social growth.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Subjects Offered
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              Comprehensive curriculum for Grade 9 & 10
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((subject, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border-t-4 border-secondary hover:-translate-y-2"
              >
                <div className={`w-14 h-14 bg-${subject.color}-100 rounded-full flex items-center justify-center mb-4`}>
                  <subject.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-primary">{subject.name}</h3>
              </motion.div>
            ))}
          </div>

          {/* Language Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-r from-secondary to-yellow-600 text-white rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Languages className="w-8 h-8" />
              Language Requirements
            </h3>
            <div className="space-y-3">
              {languageNote.map((note, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                  <p className="text-lg">{note}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Assessment System */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Assessment System
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              Continuous and Comprehensive Evaluation (CCE) Model
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {assessmentTypes.map((assessment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border-l-4 border-secondary"
              >
                <h3 className="text-2xl font-bold text-primary mb-3">{assessment.type}</h3>
                <p className="text-gray-600 mb-6">{assessment.description}</p>
                <div className="space-y-3">
                  {assessment.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Methods */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Teaching Methodology
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              Modern and effective teaching approaches
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teachingMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border-t-4 border-secondary hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                  <method.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{method.title}</h3>
                <p className="text-sm text-gray-600">{method.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Class Divisions */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center border-t-4 border-secondary"
          >
            <h2 className="text-3xl font-bold text-primary mb-6">Class Divisions</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-yellow-50 to-white rounded-xl p-8 border-2 border-secondary">
                <div className="text-5xl font-bold text-secondary mb-3">9th</div>
                <p className="text-lg text-primary font-semibold">Standard</p>
                <p className="text-sm text-gray-600 mt-2">State Syllabus</p>
              </div>
              <div className="bg-gradient-to-br from-yellow-50 to-white rounded-xl p-8 border-2 border-secondary">
                <div className="text-5xl font-bold text-secondary mb-3">10th</div>
                <p className="text-lg text-primary font-semibold">Standard</p>
                <p className="text-sm text-gray-600 mt-2">State Syllabus • SSLC Board Exam</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Activities */}
      <section className="py-16 bg-gradient-to-r from-secondary to-yellow-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Beyond Academics
            </h2>
            <div className="w-24 h-1 bg-white mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <Trophy className="w-10 h-10 mb-4" />
              <h3 className="text-xl font-bold mb-2">Olympiad Training</h3>
              <p className="text-yellow-100">
                Students of grades 9-10 receive training for National level Olympiads
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <Award className="w-10 h-10 mb-4" />
              <h3 className="text-xl font-bold mb-2">Matematica Exam</h3>
              <p className="text-yellow-100">
                State Level Talent Examination by Karnataka Academy of Mathematics
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <BookOpen className="w-10 h-10 mb-4" />
              <h3 className="text-xl font-bold mb-2">Cultural Exams</h3>
              <p className="text-yellow-100">
                Ramayana and Mahabharata examinations by Bharatha Sanskriti Pratishtan
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HighSchoolAcademic;
