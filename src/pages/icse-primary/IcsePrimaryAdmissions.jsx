import React from 'react';
import { motion } from 'framer-motion';
import { FileText, CheckCircle, Phone, Mail } from 'lucide-react';
import IcsePrimaryHeader from './IcsePrimaryHeader';
import IcsePrimaryFooter from './IcsePrimaryFooter';

const IcsePrimaryAdmissions = () => {
    const admissionSteps = [
        { step: "1", title: "Inquiry", description: "Contact the school office for admission information" },
        { step: "2", title: "Application", description: "Fill out the admission application form" },
        { step: "3", title: "Documents", description: "Submit required documents and previous records" },
        { step: "4", title: "Assessment", description: "Student assessment and parent interaction" },
        { step: "5", title: "Enrollment", description: "Complete enrollment and fee payment" }
    ];

    const requiredDocs = [
        "Birth Certificate (original for verification)",
        "Previous school records / Transfer Certificate",
        "Aadhar Card copy (student and parents)",
        "Recent passport size photographs",
        "Address proof",
        "Medical fitness certificate"
    ];

    return (
        <div className="min-h-screen bg-background">
            <IcsePrimaryHeader />

            <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-blue-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">Admissions</h1>
                        <p className="text-xl text-white/90">Join S. Cadambi ICSE Primary Wing for quality education</p>
                    </motion.div>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-primary mb-4">Admission Process</h2>
                        <p className="text-xl text-gray-600">Simple steps to enroll your child</p>
                    </motion.div>

                    <div className="grid md:grid-cols-5 gap-6 mb-20">
                        {admissionSteps.map((step, idx) => (
                            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="bg-white rounded-xl p-6 shadow-lg text-center">
                                <div className="bg-gradient-to-br from-secondary to-secondary/80 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-3xl font-bold text-primary">{step.step}</span>
                                </div>
                                <h3 className="text-lg font-bold text-primary mb-2">{step.title}</h3>
                                <p className="text-gray-600 text-sm">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white rounded-2xl p-8 shadow-lg">
                            <FileText className="text-secondary mb-6" size={48} />
                            <h3 className="text-2xl font-bold text-primary mb-6">Required Documents</h3>
                            <ul className="space-y-3">
                                {requiredDocs.map((doc, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <CheckCircle className="text-secondary mr-3 mt-1 shrink-0" size={20} />
                                        <span className="text-gray-700">{doc}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-gradient-to-br from-primary to-blue-900 text-white rounded-2xl p-8">
                            <h3 className="text-2xl font-bold mb-6">Contact Admissions Office</h3>
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <Phone className="text-secondary mr-4 mt-1 shrink-0" size={24} />
                                    <div>
                                        <p className="font-semibold mb-1">Phone</p>
                                        <p className="text-white/90">Contact school office</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <Mail className="text-secondary mr-4 mt-1 shrink-0" size={24} />
                                    <div>
                                        <p className="font-semibold mb-1">Email</p>
                                        <a href="mailto:scvk123@rediffmail.com" className="text-secondary hover:underline">scvk123@rediffmail.com</a>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8 pt-8 border-t border-white/20">
                                <p className="text-sm text-white/80">Office Hours: Mon-Fri 8:45 AM - 2:30 PM, Sat 8:45 AM - 11:40 AM</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

         
        </div>
    );
};

export default IcsePrimaryAdmissions;
