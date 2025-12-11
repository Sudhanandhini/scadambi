import React from 'react';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, Clock } from 'lucide-react';
import IcsePrimaryHeader from './IcsePrimaryHeader';
import IcsePrimaryFooter from './IcsePrimaryFooter';

const IcsePrimaryCalendar = () => {
    const academicEvents = [
        { date: "26-05-2025", day: "MONDAY", event: "SCHOOL REOPENS" },
        { date: "05-06-2025", day: "THURSDAY", event: "ENVIRONMENTAL DAY CELEBRATION" },
        { date: "14-06-2025", day: "SATURDAY", event: "ORIENTATION FOR 1ST STD" },
        { date: "21-06-2025", day: "SATURDAY", event: "INTERNATIONAL YOGA DAY CELEBRATION" },
        { date: "30-06-2025", day: "MONDAY", event: "1ST UNIT TEST" },
        { date: "19-07-2025", day: "SATURDAY", event: "PARENT TEACHER MEETING" },
        { date: "01-08-2025", day: "FRIDAY", event: "2ND UNIT TEST" },
        { date: "12-09-2025", day: "FRIDAY", event: "COMMENCEMENT OF MID TERM EXAM" },
        { date: "20-09-2025", day: "SATURDAY", event: "END OF MID TERM EXAM" },
        { date: "22-09-2025", day: "MONDAY", event: "DASARA VACATION BEGINS" },
        { date: "03-10-2025", day: "FRIDAY", event: "SCHOOL REOPENS AFTER VACATION" },
        { date: "11-10-2025", day: "SATURDAY", event: "PARENT TEACHER MEETING" },
        { date: "14-11-2025", day: "FRIDAY", event: "CHILDREN'S DAY CELEBRATION" },
        { date: "08-12-2025", day: "MONDAY", event: "3RD UNIT TEST" },
        { date: "27-12-2025", day: "SATURDAY", event: "SAMANVAYA 2025-26" },
        { date: "SECOND WEEK", day: "JANUARY 2026", event: "ANNUAL SPORTS DAY" },
        { date: "28-01-2026", day: "WEDNESDAY", event: "4TH UNIT TEST" },
        { date: "1ST WEEK", day: "FEBRUARY 2026", event: "PRIZE DISTRIBUTION DAY" },
        { date: "12-03-2026", day: "THURSDAY", event: "COMMENCEMENT OF FINAL EXAM" },
        { date: "24-03-2026", day: "TUESDAY", event: "END OF FINAL EXAM" },
        { date: "04-04-2026", day: "SATURDAY", event: "RESULT DAY" }
    ];

    return (
        <div className="min-h-screen bg-background">
            <IcsePrimaryHeader />

            <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-blue-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">Academic Calendar 2025-26</h1>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto">
                            Complete schedule of academic year events and examinations
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-primary text-white">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-sm font-bold">SI.NO</th>
                                        <th className="px-6 py-4 text-left text-sm font-bold">DATE</th>
                                        <th className="px-6 py-4 text-left text-sm font-bold">DAY</th>
                                        <th className="px-6 py-4 text-left text-sm font-bold">EVENT</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {academicEvents.map((event, idx) => (
                                        <tr key={idx} className={`${idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-secondary/10 transition-colors`}>
                                            <td className="px-6 py-4 text-gray-700 font-semibold">{idx + 1}</td>
                                            <td className="px-6 py-4 text-gray-700">{event.date}</td>
                                            <td className="px-6 py-4 text-gray-700">{event.day}</td>
                                            <td className="px-6 py-4"><span className="font-semibold text-primary">{event.event}</span></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                </div>
            </section>

       
        </div>
    );
};

export default IcsePrimaryCalendar;
