import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Eye, 
  Users, 
  Award,
  BookOpen,
  Heart,
  Trophy,
  Globe
} from 'lucide-react';

const HighSchoolAbout = () => {
  const visionMission = [
    {
      icon: Eye,
      title: 'Our Vision',
      content: 'Enlightenment through education.',
      color: 'orange'
    },
    {
      icon: Target,
      title: 'Our Mission',
      points: [
        'Academic growth to develop human potential through cutting edge technology',
        'To instill respect and belief in our cultural heritage and ethos'
      ],
      color: 'blue'
    },
    {
      icon: BookOpen,
      title: 'Our Objectives',
      points: [
        'Provide a broad, stimulating curriculum to develop confidence in individuals',
        'Maintain a healthy learning environment with a "can-do" attitude',
        'Foster positive behaviour and celebrate success'
      ],
      color: 'green'
    }
  ];

  const staffMembers = [
    { name: 'Indira Shyam Sunder', position: 'Principal', qualification: 'M.A (English), M.Sc (Physics), B.Ed', subjects: 'English for 9th & 10th Std' },
    { name: 'Savitha D H', position: 'Vice Principal', qualification: 'B.Sc, B.Ed', subjects: 'Science Teacher' },
    { name: 'Roopa Pai', position: 'Teacher', qualification: '', subjects: 'Physics & Computer Science' },
    { name: 'Rohini Gopal', position: 'Teacher', qualification: '', subjects: 'English for 8th Std' },
    { name: 'Geethanjali P', position: 'Teacher', qualification: 'Diploma in Montessori, B.Com, B.Ed, MBA', subjects: 'Social Science' },
    { name: 'Mahalingappa N', position: 'Teacher', qualification: 'B.A, B.P.Ed', subjects: 'Physical Education' },
    { name: 'Danamma A', position: 'Teacher', qualification: 'M.Sc, B.Ed', subjects: 'Mathematics' },
    { name: 'Pushpa Bai', position: 'Teacher', qualification: 'M.A, B.Ed', subjects: 'Hindi & Moral Science' },
    { name: 'Vanitha M', position: 'Teacher', qualification: 'M.A, B.Ed', subjects: 'Kannada' },
    { name: 'Mani Prasad', position: 'Teacher', qualification: 'M.A, B.Ed', subjects: 'Sanskrit' },
  ];

  const officeStaff = [
    { name: 'Dr. S. S. Rajan', position: 'Administrator', qualification: 'M.A, B.Ed, M.Phil, Ph.D' },
    { name: 'Ananthasree R', position: 'Accountant', qualification: 'MBA' },
    { name: 'M.V. Poornima Prakash', position: 'Librarian', qualification: 'Diploma in Library & Information Science, Diploma in Telecommunication' },
    { name: 'Anantharam K', position: 'Attender', qualification: '' },
    { name: 'Jayamma', position: 'Sub Staff', qualification: '' },
    { name: 'Lakshmi Bai', position: 'Sub Staff', qualification: '' },
  ];

  const achievements = [
    'Best Administration Award from Government of Karnataka',
    'Recognized for excellence in curricular and co-curricular activities',
    'Honored by Kumari Shobha Karandlaje, Hon. Minister for Labor',
    '40+ years of educational excellence',
    'Over 2000 students educated successfully'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-blue-900 to-primary text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-72 h-72 bg-secondary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Our School</h1>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A legacy of excellence in education since 1984
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-primary">About Us</h2>
              </div>
              
              <p className="text-gray-700 leading-relaxed">
                The journey goes from the budding stage to blossoming stage. S. Cadambi Vidya Kendra state high 
                school was established in the year 1984. The dream of our service-minded elders became true vision. 
                Our respectful salutation goes to Sri Cadambi Srinivasachar, who was a guiding force behind all 
                these achievements.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                With a vision to promote educational facilities, he along with his friends - Diwan Bahadur Sri K.R 
                Seshachar, Dr. K. Srinivasachar, Sri K. Narayana Iyengar, Dr. K Krishna Iyengar, and Amaldar Sri K. 
                Vedanth Iyengar - started 'The Kalkunte Education Trust' under the guidance of Prof. C. Rangachar.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                The institution has established itself comprising 8th to 10th standards. The initial start has emerged 
                into a well-dimensional school which caters education in state syllabi at an economical fee structure. 
                The school functions with well-furnished labs, classrooms, and qualified faculty.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-secondary"
            >
              <h3 className="text-2xl font-bold text-primary mb-6">Key Highlights</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Award className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Established 1984</h4>
                    <p className="text-gray-600 text-sm">Over 40 years of educational excellence</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-primary mb-1">2000+ Students</h4>
                    <p className="text-gray-600 text-sm">Growing from 50 students to a large institution</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <BookOpen className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-primary mb-1">State Board</h4>
                    <p className="text-gray-600 text-sm">Affiliated to Karnataka State Board</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Trophy className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Best Administration</h4>
                    <p className="text-gray-600 text-sm">Recognized by Government of Karnataka</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Objectives */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Vision, Mission & Objectives
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {visionMission.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border-t-4 border-secondary"
              >
                <div className={`w-16 h-16 bg-${item.color}-100 rounded-full flex items-center justify-center mb-6`}>
                  <item.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">{item.title}</h3>
                {item.content && (
                  <p className="text-gray-700 text-lg leading-relaxed">{item.content}</p>
                )}
                {item.points && (
                  <ul className="space-y-3">
                    {item.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-l-8 border-secondary"
          >
            <h2 className="text-3xl font-bold text-primary mb-6">Our History</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                In the year 1939, the Kalkunte Education Trust became a registered body. It was founded by a group 
                of educationists and philanthropists with a vision to help the poor and needy students of the Kalkunte 
                and Chichurukanahalli communities in pursuing their education by means of scholarships.
              </p>
              <p>
                S. Cadambi Vidya Kendra was established in the year 1984 with a humble beginning to build academic 
                institutions par excellence and to nurture the character of the young ones to grow into diplomatic 
                citizens of our country.
              </p>
              <p>
                It started with an academic strength of less than 50 students and has now reached a strength of 
                around 2000 students. The S. Cadambi Vidya Kendra is flourishing and functioning effectively through 
                different wings with a vision of enlightenment through education.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-16 bg-gradient-to-br from-primary via-blue-900 to-primary text-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-1">Principal's Message</h2>
                <p className="text-yellow-200">Smt. Indira Shyam Sunder, M.A, M.Sc, B.Ed</p>
              </div>
            </div>
            
            <div className="space-y-4 text-gray-100 leading-relaxed">
              <p>
                Welcome to the Official Website of S. Cadambi Vidya Kendra State High School. I am truly honoured 
                to serve as the Principal and share what makes our school so special.
              </p>
              <p>
                At S. Cadambi Vidya Kendra, our foundation is built on a resolute commitment to academic precision 
                and holistic development. I believe education is about much more than just mastering a curriculum; 
                it is about cultivating curious, critical thinkers prepared to navigate the complexities of the 
                modern world.
              </p>
              <p>
                My dedicated faculty members are not just instructors; they are mentors who inspire lifelong learning 
                in every student. We pride ourselves on fostering an environment where every individual feels valued, 
                challenged, and supported to manifest their latent potential.
              </p>
              <p>
                Our campus is a vibrant community of opportunity. While our classroom instruction is second to none, 
                we strongly encourage participation in a wide range of extra-curricular activities - from sports to 
                cultural events, from STEM clubs to community service initiatives. These experiences are crucial for 
                developing leadership skills, teamwork, and a strong sense of social responsibility.
              </p>
              <p>
                As we look ahead, we remain focused on innovation, continuously integrating new technologies and 
                pedagogical approaches to ensure our students are equipped with skills demanded by tomorrow's world.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Awards & Achievements */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Awards & Achievements
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border-l-4 border-secondary"
              >
                <Trophy className="w-10 h-10 text-secondary mb-4" />
                <p className="text-gray-700 leading-relaxed">{achievement}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Staff Section */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Dedicated Team
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Teachers mould every individual who goes on to influence every aspect of society. 
              They have the most important job in the world.
            </p>
          </motion.div>

          {/* Teaching Staff */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-primary mb-6">Teaching Staff</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {staffMembers.map((staff, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border-t-4 border-secondary"
                >
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-secondary" />
                  </div>
                  <h4 className="text-lg font-bold text-primary mb-1">{staff.name}</h4>
                  <p className="text-sm text-secondary font-semibold mb-2">{staff.position}</p>
                  {staff.qualification && (
                    <p className="text-xs text-gray-600 mb-2">{staff.qualification}</p>
                  )}
                  {staff.subjects && (
                    <p className="text-sm text-gray-700">{staff.subjects}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Office Staff */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">Office Staff</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {officeStaff.map((staff, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border-t-4 border-blue-500"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-bold text-primary mb-1">{staff.name}</h4>
                  <p className="text-sm text-blue-600 font-semibold mb-2">{staff.position}</p>
                  {staff.qualification && (
                    <p className="text-xs text-gray-600">{staff.qualification}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HighSchoolAbout;
