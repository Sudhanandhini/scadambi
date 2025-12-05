import React from 'react';
import { motion } from 'framer-motion';
import { 
  ClipboardCheck,
  FileText,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  AlertCircle,
  Award
} from 'lucide-react';

const HighSchoolAdmissions = () => {
  const procedure = [
    {
      step: '1',
      title: 'Entrance Examination',
      description: 'Students must appear for entrance examination conducted by the school',
      icon: FileText
    },
    {
      step: '2',
      title: 'Assessment',
      description: 'Evaluation of language skills (Kannada, English, Hindi/Sanskrit) and optional subjects',
      icon: ClipboardCheck
    },
    {
      step: '3',
      title: 'Selection',
      description: 'Based on examination results, candidates are selected for admission',
      icon: CheckCircle
    },
    {
      step: '4',
      title: 'Documentation',
      description: 'Submit all required documents and complete admission formalities',
      icon: Award
    }
  ];

  const documents = [
    { icon: FileText, text: 'Birth certificate from Municipal Corporation/Civic Authorities' },
    { icon: FileText, text: 'Caste certificate (if applicable)' },
    { icon: FileText, text: 'Latest progress report certified by previous school' },
    { icon: FileText, text: 'Original Transfer Certificate from previous school' },
    { icon: FileText, text: 'Guardianship papers (in case of single parent/separated)' },
    { icon: FileText, text: 'Copy of students and parents Aadhaar card' },
  ];

  const eligibility = [
    'Passed 8th standard from any recognized board',
    'ICSE, CBSE, State Board, or IGCSE certified',
    'Age-appropriate for the grade level',
    'Good academic and behavioral record'
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
            <ClipboardCheck className="w-16 h-16 mx-auto mb-6 text-secondary" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Admissions</h1>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join our legacy of academic excellence and holistic development
            </p>
          </motion.div>
        </div>
      </section>

      {/* Admission Procedure */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Admission Procedure
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {procedure.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border-t-4 border-secondary h-full">
                  <div className="absolute -top-4 left-6 w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {item.step}
                  </div>
                  <div className="mt-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-l-8 border-secondary"
          >
            <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-3">
              <CheckCircle className="w-8 h-8 text-secondary" />
              Eligibility Criteria
            </h2>
            <div className="space-y-4">
              {eligibility.map((criteria, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700">{criteria}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-yellow-50 rounded-lg border-l-4 border-secondary">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-primary mb-2">Important Note</h3>
                  <p className="text-gray-700">
                    Students from any board (ICSE, CBSE, State Board, IGCSE) can apply for admission 
                    to our 9th and 10th standards after passing 8th standard.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Documents Required
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {documents.map((doc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border-l-4 border-secondary"
              >
                <div className="flex items-center gap-4">
                  <doc.icon className="w-8 h-8 text-secondary flex-shrink-0" />
                  <p className="text-gray-700">{doc.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact for Admissions */}
      <section className="py-16 bg-gradient-to-r from-secondary to-yellow-600 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Contact for Admissions
            </h2>
            <div className="w-24 h-1 bg-white mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all">
              <Phone className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <a href="tel:08023232831" className="text-lg hover:underline">
                080-23232831
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all">
              <Mail className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <a href="mailto:scvk123@rediffmail.com" className="text-lg hover:underline break-all">
                scvk123@rediffmail.com
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all">
              <MapPin className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Visit Us</h3>
              <p className="text-lg">
                Basaveshwara Nagar<br />Bangalore, Karnataka
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-xl mb-6">Ready to enroll your child?</p>
            <a
              href="tel:08023232831"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-secondary rounded-full font-semibold hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
            >
              <Phone size={20} />
              Call Now for Admission
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HighSchoolAdmissions;
