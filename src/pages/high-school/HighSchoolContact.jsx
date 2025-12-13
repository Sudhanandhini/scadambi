import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Facebook } from 'lucide-react';

const HighSchoolContact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['080-23232831'],
      links: ['tel:08023232831']
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['scvk123@rediffmail.com'],
      links: ['mailto:scvk123@rediffmail.com']
    },
    {
      icon: MapPin,
      title: 'Address',
      details: [
        'S. Cadambi Vidya Kendra High School',
        'Basaveshwara Nagar',
        'Bangalore, Karnataka'
      ],
      links: []
    },
    {
      icon: Clock,
      title: 'School Hours',
      details: [
        'Monday - Friday: 9:45 AM - 4:00 PM',
        'Saturday: 8:45 AM - 12:45 PM'
      ],
      links: []
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative bg-gradient-to-br from-[#0F2A4A] via-[#1a4d7a] to-[#0F2A4A] text-white py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FDB913] opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-500 opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/10 rounded-full"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3, type: "spring" }} className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#FDB913] to-green-500 rounded-2xl mb-6 shadow-2xl">
              <Mail className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-[#FDB913] to-green-400 bg-clip-text text-transparent">Contact Us</h1>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-1 w-16 bg-[#FDB913]"></div>
              <div className="h-1 w-8 bg-green-500"></div>
              <div className="h-1 w-16 bg-[#FDB913]"></div>
            </div>
            <p className="text-xl text-gray-300">Get in touch with us for admissions, queries, or information</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-t-4 border-[#FDB913] text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FDB913] to-green-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0F2A4A] mb-4">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    info.links[idx] ? (
                      <a key={idx} href={info.links[idx]} className="block text-gray-700 hover:text-[#FDB913] transition-colors font-medium">{detail}</a>
                    ) : (
                      <p key={idx} className="text-gray-700">{detail}</p>
                    )
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white rounded-2xl p-8 shadow-2xl border-t-4 border-green-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-[#0F2A4A]">Our Location</h2>
              </div>
              <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden shadow-lg mb-4">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8567!2d77.5625!3d12.9916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU5JzI5LjgiTiA3N8KwMzMnNDUuMCJF!5e0!3m2!1sen!2sin!4v1234567890" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" title="School Location"></iframe>
              </div>
              <p className="text-gray-700 font-medium"><strong>Address:</strong> S. Cadambi Vidya Kendra High School, Basaveshwara Nagar, Bangalore, Karnataka</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-2xl border-t-4 border-[#FDB913]">
                <h2 className="text-2xl font-bold text-[#0F2A4A] mb-6">Connect With Us</h2>
                <a href="https://www.facebook.com/share/1AngmCMEAV/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all hover:scale-105 shadow-lg w-full justify-center font-semibold">
                  <Facebook size={24} />
                  Follow us on Facebook
                </a>
              </div>

              <div className="bg-gradient-to-br from-[#FDB913] to-green-500 rounded-2xl p-8 shadow-2xl text-white">
                <h2 className="text-2xl font-bold mb-4">Quick Contact</h2>
                <p className="mb-6 text-lg">For admissions and general inquiries:</p>
                <a href="tel:08023232831" className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#0F2A4A] rounded-xl font-semibold hover:bg-gray-100 transition-all mb-4 hover:scale-105 shadow-lg">
                  <Phone size={20} />
                  Call: 080-23232831
                </a>
                <a href="mailto:scvk123@rediffmail.com" className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#0F2A4A] rounded-xl font-semibold hover:bg-gray-100 transition-all hover:scale-105 shadow-lg">
                  <Mail size={20} />
                  Email Us
                </a>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-2xl border-t-4 border-green-500">
                <h2 className="text-2xl font-bold text-[#0F2A4A] mb-6">Administrator</h2>
                <div className="space-y-2">
                  <p className="text-xl text-[#0F2A4A] font-bold">Dr. S. S. Rajan</p>
                  <p className="text-gray-600">M.A, B.Ed, M.Phil, Ph.D</p>
                  <p className="text-gray-600 font-semibold">Administrator, SCVK</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gradient-to-br from-[#0F2A4A] to-[#1a4d7a] rounded-3xl shadow-2xl p-12 md:p-16 text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Visit Our Campus</h2>
            <p className="text-xl mb-10 max-w-3xl mx-auto leading-relaxed text-gray-200">
              We welcome you to visit our campus and experience our facilities firsthand. Please call ahead to schedule your visit during school hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="tel:08023232831" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#FDB913] text-white rounded-full font-bold hover:bg-[#f5a503] transition-all hover:scale-105 shadow-2xl text-lg">
                <Phone size={24} />
                Schedule a Visit
              </a>
              <a href="/high-school/admissions" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-green-500 text-white rounded-full font-bold hover:bg-green-600 transition-all hover:scale-105 shadow-2xl text-lg">
                View Admission Details
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HighSchoolContact;