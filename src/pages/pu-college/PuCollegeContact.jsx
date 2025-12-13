import React, { useState } from 'react';
import { MapPin, Mail, Phone, Clock, Send, Facebook, CheckCircle } from 'lucide-react';

const PuCollegeContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <MapPin size={28} />,
      title: 'Address',
      details: [
        'S. Cadambi PU College',
        '# 1025, 10th Main Road',
        '2nd Cross Road, 3rd Stage',
        'Basaveshwaranagar',
        'Bangalore - 560079',
        'Karnataka, India'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Mail size={28} />,
      title: 'Email',
      details: [
        'scvk123@rediffmail.com',
        '',
        'For Admissions:',
        'admissions@scadambi.edu.in',
        '',
        'Quick response within 24 hours'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <Phone size={28} />,
      title: 'Phone',
      details: [
        'Office: 080-XXXX-XXXX',
        'Principal: 080-XXXX-XXXX',
        'Admissions: 080-XXXX-XXXX',
        '',
        'Landline: 080-XXXX-XXXX',
        'Available during office hours'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <Clock size={28} />,
      title: 'Office Hours',
      details: [
        'Monday to Friday',
        '9:00 AM - 4:00 PM',
        '',
        'Saturday',
        '9:00 AM - 1:00 PM',
        'Sundays & Holidays: Closed'
      ],
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const departments = [
    { name: 'Principal Office', email: 'principal@scadambi.edu.in', phone: '080-XXXX-1001' },
    { name: 'Admissions Office', email: 'admissions@scadambi.edu.in', phone: '080-XXXX-1002' },
    { name: 'Academic Coordinator', email: 'academic@scadambi.edu.in', phone: '080-XXXX-1003' },
    { name: 'Accounts Department', email: 'accounts@scadambi.edu.in', phone: '080-XXXX-1004' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0F2A4A] to-[#1a3a5f] text-white py-24 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get in <span className="text-[#FDB913]">Touch</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              We're here to answer your questions and help you begin your journey with us
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all border border-gray-100"
              >
                <div className={`bg-gradient-to-br ${info.color} w-16 h-16 rounded-xl flex items-center justify-center text-white mb-6`}>
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0F2A4A] mb-4">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, i) => (
                    <p
                      key={i}
                      className={`text-gray-600 text-sm ${detail === '' ? 'h-2' : ''}`}
                    >
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-bold text-[#0F2A4A] mb-6">Send us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              {submitted ? (
                <div className="bg-green-50 border-2 border-green-500 rounded-xl p-8 text-center">
                  <CheckCircle className="mx-auto text-green-500 mb-4" size={48} />
                  <h3 className="text-2xl font-bold text-green-700 mb-2">Message Sent!</h3>
                  <p className="text-green-600">We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDB913] focus:border-transparent outline-none"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDB913] focus:border-transparent outline-none"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Phone *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDB913] focus:border-transparent outline-none"
                        placeholder="98XXXXXXXX"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDB913] focus:border-transparent outline-none"
                      placeholder="What is this regarding?"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDB913] focus:border-transparent outline-none resize-none"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#FDB913] hover:bg-[#FDB913]/90 text-[#0F2A4A] font-bold py-4 rounded-lg transition-all flex items-center justify-center"
                  >
                    <Send className="mr-2" size={20} />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Map */}
            <div>
              <h2 className="text-4xl font-bold text-[#0F2A4A] mb-6">Find Us</h2>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6890123456789!2d77.54321!3d12.98765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU5JzE1LjUiTiA3N8KwMzInMzUuNiJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="PU College Location"
                ></iframe>
              </div>
              <div className="mt-6 bg-[#0F2A4A] text-white p-6 rounded-xl">
                <h3 className="font-bold text-lg mb-3">How to Reach Us</h3>
                <ul className="space-y-2 text-white/90 text-sm">
                  <li>• Nearest Metro: Rajajinagar Metro Station (2 km)</li>
                  <li>• By Bus: Route 222, 331, 333 to Basaveshwaranagar</li>
                  <li>• Landmarks: Near Basaveshwara Circle</li>
                  <li>• Parking: Available on campus</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0F2A4A] mb-4">Department Contacts</h2>
            <p className="text-xl text-gray-600">Reach out to specific departments</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {departments.map((dept, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-lg border border-gray-100"
              >
                <h3 className="text-xl font-bold text-[#0F2A4A] mb-4">{dept.name}</h3>
                <div className="space-y-2">
                  <p className="text-gray-600 flex items-center">
                    <Mail className="mr-2 text-[#FDB913]" size={18} />
                    {dept.email}
                  </p>
                  <p className="text-gray-600 flex items-center">
                    <Phone className="mr-2 text-[#FDB913]" size={18} />
                    {dept.phone}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media & Quick Contact */}
      <section className="py-20 bg-gradient-to-br from-[#0F2A4A] to-[#1a3a5f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Connect With Us</h2>
          <p className="text-xl text-white/80 mb-8">Follow us on social media for updates</p>
          <div className="flex justify-center gap-4 mb-12">
            <a
              href="https://www.facebook.com/profile.php?id=100095136330780&mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-[#FDB913] hover:text-[#0F2A4A] w-16 h-16 rounded-full flex items-center justify-center transition-all"
            >
              <Facebook size={28} />
            </a>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Quick Contact</h3>
            <p className="text-white/90 mb-6">
              For urgent queries, please call us during office hours or send an email
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:080XXXXXXXX"
                className="bg-[#FDB913] hover:bg-[#FDB913]/90 text-[#0F2A4A] px-8 py-3 rounded-lg font-bold transition-all"
              >
                Call Now
              </a>
              <a
                href="mailto:scvk123@rediffmail.com"
                className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-lg font-bold transition-all"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PuCollegeContact;
