import React from 'react';
import { FileText, Calendar, CheckCircle, AlertCircle, Download, Mail, Phone, MapPin, Clock } from 'lucide-react';

const PuCollegeAdmissions = () => {
  const eligibility = [
    {
      stream: 'Science Stream (PCMB/PCMC)',
      criteria: [
        'Minimum 60% in SSLC/10th Standard',
        'Pass in Mathematics and Science subjects',
        'Age limit as per PU Board norms'
      ]
    },
    {
      stream: 'Commerce Stream (CEBA/CEBM)',
      criteria: [
        'Minimum 50% in SSLC/10th Standard',
        'Basic knowledge of Mathematics',
        'Age limit as per PU Board norms'
      ]
    }
  ];

  const admissionProcess = [
    {
      step: '1',
      title: 'Application Form',
      description: 'Collect application form from the office or download from website'
    },
    {
      step: '2',
      title: 'Submit Documents',
      description: 'Submit filled form with required documents and photos'
    },
    {
      step: '3',
      title: 'Entrance Test',
      description: 'Appear for entrance test (if applicable based on seats availability)'
    },
    {
      step: '4',
      title: 'Admission Confirmation',
      description: 'Pay fees and complete admission formalities upon selection'
    }
  ];

  const documents = [
    'SSLC/10th Standard Marks Card (Original + Photocopy)',
    'Transfer Certificate from previous school',
    'Caste Certificate (if applicable)',
    'Income Certificate (for fee concession)',
    'Aadhar Card copy of student and parents',
    'Recent passport size photographs (4 copies)',
    'Migration Certificate (for students from other states)'
  ];

  const feeStructure = [
    { category: 'Tuition Fee', amount: '₹25,000 - ₹30,000' },
    { category: 'Lab Fee', amount: '₹5,000 - ₹8,000' },
    { category: 'Library Fee', amount: '₹2,000' },
    { category: 'Development Fee', amount: '₹3,000' },
    { category: 'Exam Fee', amount: 'As per PU Board' }
  ];

  const importantDates = [
    { event: 'Application Start Date', date: 'March 15, 2025' },
    { event: 'Application Last Date', date: 'May 31, 2025' },
    { event: 'Entrance Test', date: 'June 10, 2025' },
    { event: 'Results & Merit List', date: 'June 15, 2025' },
    { event: 'Admission Starts', date: 'June 18, 2025' },
    { event: 'Classes Commence', date: 'June 25, 2025' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0F2A4A] to-[#1a3a5f] text-white py-24 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-[#FDB913]">Admissions</span> 2025-26
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Join our prestigious institution and embark on a journey of academic excellence
            </p>
            <div className="inline-flex items-center bg-[#FDB913] text-[#0F2A4A] px-6 py-3 rounded-full font-bold">
              <CheckCircle className="mr-2" size={20} />
              Admissions Open for 2025-26 Academic Year
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0F2A4A] mb-4">Eligibility Criteria</h2>
            <p className="text-xl text-gray-600">Requirements for admission to different streams</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {eligibility.map((item, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100"
              >
                <h3 className="text-2xl font-bold text-[#0F2A4A] mb-6">{item.stream}</h3>
                <ul className="space-y-4">
                  {item.criteria.map((criterion, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="text-[#FDB913] mr-3 shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">{criterion}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0F2A4A] mb-4">Admission Process</h2>
            <p className="text-xl text-gray-600">Simple steps to secure your seat</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {admissionProcess.map((process, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all text-center">
                  <div className="bg-gradient-to-br from-[#0F2A4A] to-[#1a3a5f] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold text-[#0F2A4A] mb-3">{process.title}</h3>
                  <p className="text-gray-600 text-sm">{process.description}</p>
                </div>
                {idx < admissionProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-[#FDB913]"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0F2A4A] mb-4">Required Documents</h2>
            <p className="text-xl text-gray-600">Please prepare the following documents for admission</p>
          </div>
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg">
            <ul className="space-y-4">
              {documents.map((doc, idx) => (
                <li key={idx} className="flex items-start">
                  <FileText className="text-[#FDB913] mr-3 shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">{doc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-20 bg-[#0F2A4A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Fee Structure</h2>
            <p className="text-xl text-white/80">Approximate annual fees (Subject to change)</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden">
              {feeStructure.map((fee, idx) => (
                <div
                  key={idx}
                  className={`flex justify-between items-center p-6 ${
                    idx !== feeStructure.length - 1 ? 'border-b border-white/10' : ''
                  }`}
                >
                  <span className="text-lg font-semibold">{fee.category}</span>
                  <span className="text-xl font-bold text-[#FDB913]">{fee.amount}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <p className="text-white/70 text-sm">
                <AlertCircle className="inline mr-2" size={16} />
                Fee concession available for economically weaker sections as per government norms
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0F2A4A] mb-4">Important Dates</h2>
            <p className="text-xl text-gray-600">Mark your calendar for admission timeline</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {importantDates.map((item, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-[#FDB913] to-[#FDB913]/80 p-6 rounded-xl text-[#0F2A4A]"
              >
                <Calendar className="mb-4" size={32} />
                <h3 className="font-bold text-lg mb-2">{item.event}</h3>
                <p className="text-2xl font-bold">{item.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-[#0F2A4A] to-[#1a3a5f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Need Help with Admissions?</h2>
            <p className="text-xl text-white/80">Our admissions team is here to assist you</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-[#FDB913] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-[#0F2A4A]" size={28} />
              </div>
              <h3 className="font-bold mb-2">Call Us</h3>
              <p className="text-white/80">080-XXXX-XXXX</p>
            </div>
            <div className="text-center">
              <div className="bg-[#FDB913] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-[#0F2A4A]" size={28} />
              </div>
              <h3 className="font-bold mb-2">Email Us</h3>
              <p className="text-white/80">scvk123@rediffmail.com</p>
            </div>
            <div className="text-center">
              <div className="bg-[#FDB913] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-[#0F2A4A]" size={28} />
              </div>
              <h3 className="font-bold mb-2">Visit Us</h3>
              <p className="text-white/80">Mon-Sat: 9:00 AM - 4:00 PM</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PuCollegeAdmissions;
