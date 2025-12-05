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
            <Mail className="w-16 h-16 mx-auto mb-6 text-secondary" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get in touch with us for admissions, queries, or information
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border-t-4 border-secondary text-center"
              >
                <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    info.links[idx] ? (
                      <a
                        key={idx}
                        href={info.links[idx]}
                        className="block text-gray-700 hover:text-secondary transition-colors"
                      >
                        {detail}
                      </a>
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

      {/* Map and Social */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Location Map */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                <MapPin className="w-6 h-6 text-secondary" />
                Our Location
              </h2>
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8567!2d77.5625!3d12.9916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU5JzI5LjgiTiA3N8KwMzMnNDUuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="School Location"
                ></iframe>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Basaveshwara Nagar, Bangalore, Karnataka
              </p>
            </motion.div>

            {/* Social & Quick Contact */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Social Media */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h2 className="text-2xl font-bold text-primary mb-4">Connect With Us</h2>
                <a
                  href="https://www.facebook.com/share/1AngmCMEAV/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
                >
                  <Facebook size={24} />
                  Follow us on Facebook
                </a>
              </div>

              {/* Quick Contact */}
              <div className="bg-gradient-to-r from-secondary to-yellow-600 rounded-2xl p-6 shadow-lg text-white">
                <h2 className="text-2xl font-bold mb-4">Quick Contact</h2>
                <p className="mb-4">For admissions and general inquiries:</p>
                <a
                  href="tel:08023232831"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-secondary rounded-full font-semibold hover:bg-gray-100 transition-all mb-3 block text-center"
                >
                  <Phone size={20} />
                  Call: 080-23232831
                </a>
                <a
                  href="mailto:scvk123@rediffmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-secondary rounded-full font-semibold hover:bg-gray-100 transition-all block text-center"
                >
                  <Mail size={20} />
                  Email Us
                </a>
              </div>

              {/* Administrator Contact */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h2 className="text-2xl font-bold text-primary mb-4">Administrator</h2>
                <div className="space-y-2">
                  <p className="text-gray-700 font-semibold">Dr. S. S. Rajan</p>
                  <p className="text-sm text-gray-600">M.A, B.Ed, M.Phil, Ph.D</p>
                  <p className="text-sm text-gray-600">Administrator, SCVK</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Visit Us */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center border-t-4 border-secondary"
          >
            <h2 className="text-3xl font-bold text-primary mb-6">Visit Our Campus</h2>
            <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
              We welcome you to visit our campus and experience our facilities firsthand. 
              Please call ahead to schedule your visit during school hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:08023232831"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-white rounded-full font-semibold hover:bg-yellow-600 transition-all hover:scale-105 shadow-lg"
              >
                <Phone size={20} />
                Schedule a Visit
              </a>
              <a
                href="/high-school/admissions"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-blue-900 transition-all shadow-lg"
              >
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
