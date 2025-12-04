import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Users, FolderOpen, CreditCard } from 'lucide-react';

const Admissions = () => {
    const steps = [
        { 
            icon: FileText, 
            title: "1. Submit Enquiry", 
            desc: "Fill out the online enquiry form or visit our admissions office to express your interest." 
        },
        { 
            icon: Users, 
            title: "2. Campus Visit / Interview with Parents", 
            desc: "Schedule a campus tour and interaction with the principal to understand our educational philosophy." 
        },
        { 
            icon: FolderOpen, 
            title: "3. Application / Documentation", 
            desc: "Submit the admission application form along with required documents (birth certificate, transfer certificate, photographs, etc.)." 
        },
        { 
            icon: CreditCard, 
            title: "4. Enrollment / Fee Payment", 
            desc: "Complete the admission process by paying the fees and receiving the enrollment confirmation." 
        }
    ];

    return (
        <div className="pt-20 min-h-screen bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <span className="text-secondary font-bold tracking-widest uppercase text-sm">
                        Admissions Open
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold font-serif text-primary mt-3 mb-4">
                        Join Our Family
                    </h1>
                    <p className="text-gray-600 text-lg">
                        Admissions open for the academic year 2025-2026. Begin your child's journey to excellence.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    {/* Left Column - Process Section */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold text-primary mb-6 font-serif">Admission Process</h2>
                            <div className="space-y-5">
                                {steps.map((step, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow group"
                                    >
                                        <div className="bg-gradient-to-br from-secondary/20 to-secondary/10 p-4 rounded-xl text-secondary group-hover:scale-110 transition-transform shrink-0">
                                            <step.icon size={24} />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-bold text-gray-800 mb-2">{step.title}</h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border-2 border-blue-200"
                        >
                            <h3 className="font-bold text-primary mb-4 text-lg">Eligibility Criteria</h3>
                            <div className="space-y-3 text-sm text-gray-700">
                                <div>
                                    <span className="font-semibold text-gray-800">Pre-Nursery:</span> Child should be 2.5+ years as of June 1st
                                </div>
                                <div>
                                    <span className="font-semibold text-gray-800">Grade 1:</span> Child should be 5.5+ years as of June 1st
                                </div>
                                <div>
                                    <span className="font-semibold text-gray-800">Transfer Students:</span> Valid Transfer Certificate from previous school is mandatory
                                </div>
                                <div>
                                    <span className="font-semibold text-gray-800">Documents Required:</span> Birth Certificate, Address Proof, Previous School Records, Photographs
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column - Inquiry Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-secondary lg:sticky lg:top-24"
                    >
                        <h2 className="text-3xl font-bold text-primary mb-2 font-serif">Admission Enquiry</h2>
                        <p className="text-gray-600 mb-6 text-sm">Fill out the form below and our admissions team will contact you shortly.</p>
                        
                        <form className="space-y-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Parent's Name *</label>
                                    <input 
                                        type="text" 
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all text-sm" 
                                        placeholder="Enter your name" 
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                                    <input 
                                        type="tel" 
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all text-sm" 
                                        placeholder="+91 9876543210" 
                                        required
                                    />
                                </div>
                            </div>
                            
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                                <input 
                                    type="email" 
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all text-sm" 
                                    placeholder="your.email@example.com" 
                                    required
                                />
                            </div>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Child's Name *</label>
                                    <input 
                                        type="text" 
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all text-sm" 
                                        placeholder="Enter child's name" 
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Grade Applying For *</label>
                                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all text-sm" required>
                                        <option value="">Select Grade</option>
                                        <option>Pre-School (Playhome, Pre KG, LKG, UKG)</option>
                                        <option>Primary (Grade 1-5)</option>
                                        <option>Secondary (Grade 6-10)</option>
                                        <option>PU College (Grade 11-12)</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Message / Queries</label>
                                <textarea 
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all resize-none text-sm" 
                                    rows="4"
                                    placeholder="Any specific questions or requirements?"
                                ></textarea>
                            </div>
                            
                            <button 
                                type="submit" 
                                className="w-full bg-secondary hover:bg-yellow-500 text-primary font-bold py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                Submit Enquiry
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Admissions;