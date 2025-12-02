import React from 'react';
import { motion } from 'framer-motion';
import { FileText, UserCheck, Calendar, CreditCard } from 'lucide-react';

const Admissions = () => {
    const steps = [
        { icon: FileText, title: "1. Submit Enquiry", desc: "Fill out the online form or visit our campus office." },
        { icon: UserCheck, title: "2. Interaction/Test", desc: "Schedule a meeting with the principal or entrance test." },
        { icon: Calendar, title: "3. Document Verification", desc: "Submit birth certificate, transfer certificate, and photos." },
        { icon: CreditCard, title: "4. Fee Payment", desc: "Complete the admission formalities by paying the fees." }
    ];

    return (
        <div className="pt-20 min-h-screen bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold font-serif text-primary mb-4">Join Our Family</h1>
                    <p className="text-gray-600">Admissions open for the academic year 2025-2026.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Process Section */}
                    <div>
                        <h2 className="text-2xl font-bold text-primary mb-8">Admission Process</h2>
                        <div className="space-y-8">
                            {steps.map((step, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex items-start space-x-4"
                                >
                                    <div className="bg-secondary/20 p-3 rounded-lg text-secondary">
                                        <step.icon size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-800">{step.title}</h3>
                                        <p className="text-gray-600 text-sm">{step.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-12 p-6 bg-blue-50 rounded-xl border border-blue-100">
                            <h3 className="font-bold text-primary mb-2">Eligibility Criteria</h3>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                                <li>Pre-Nursery: 2.5+ years as of June 1st.</li>
                                <li>Grade 1: 5.5+ years as of June 1st.</li>
                                <li>Transfer students must provide a valid TC from the previous school.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Inquiry Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-white p-8 rounded-2xl shadow-lg"
                    >
                        <h2 className="text-2xl font-bold text-primary mb-6">Admission Enquiry</h2>
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Parent's Name</label>
                                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                    <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="+91 9876543210" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="john@example.com" />
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Child's Name</label>
                                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="Child Name" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Grade Applying For</label>
                                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none">
                                        <option>Select Grade</option>
                                        <option>Pre-School</option>
                                        <option>Grade 1-5</option>
                                        <option>Grade 6-10</option>
                                        <option>PU College</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Message / Queries</label>
                                <textarea className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none h-32" placeholder="Any specific questions?"></textarea>
                            </div>
                            <button type="button" className="w-full bg-secondary hover:bg-yellow-500 text-primary font-bold py-3 rounded-lg transition-colors">
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
