import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';
import { hrServiceDetails } from '../../data/hrServiceDetails';

import recruitmentHeroBg from '../../assets/recruitment_hero_bg.png';

const RecruitmentSolutions = () => {
    const location = useLocation();

    // Keys for Recruitment & Staffing Services
    const serviceKeys = [
        'permanent-hiring',
        'contract-hiring',
        'in-house',
        'staffing'
    ];

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                const headerOffset = 100;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-cyan-200">
            {/* HERO SECTION */}
            <div className="relative bg-[#081A4A] py-32 lg:py-48 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={recruitmentHeroBg}
                        alt="Recruitment Solutions"
                        className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/80 to-slate-950/80 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#081A4A] via-transparent to-transparent" />
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6"
                    >
                        Recruitment & <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-indigo-500">Staffing</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
                    >
                        Tailored hiring solutions to build high-performance teams for your business.
                    </motion.p>
                </div>
            </div>

            {/* ZIG-ZAG CONTENT SECTION */}
            <div className="py-24 space-y-24 md:space-y-32 container mx-auto px-4 md:px-6">
                {serviceKeys.map((key, index) => {
                    const data = hrServiceDetails[key];
                    const isEven = index % 2 === 0;

                    if (!data) return null;

                    return (
                        <div id={key} key={key} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${!isEven ? 'lg:flex-row-reverse' : ''}`}>

                            {/* Text Content */}
                            <motion.div
                                initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="flex-1 space-y-6"
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider">
                                        Solution {index + 1}
                                    </span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                                    {data.title}
                                </h2>
                                <p className="text-xl text-slate-500 font-light">
                                    {data.subtitle}
                                </p>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    {data.description}
                                </p>

                                <ul className="space-y-3 pt-2">
                                    {data.features && data.features.slice(0, 5).map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <div className="mt-1 w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-700 flex items-center justify-center shrink-0">
                                                <Check size={12} strokeWidth={3} />
                                            </div>
                                            <span className="text-slate-700 font-medium">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="pt-4">
                                    <Link
                                        to="/contact"
                                        className="inline-flex items-center gap-2 text-indigo-600 font-bold hover:text-indigo-800 transition-colors group"
                                    >
                                        Inquire Now
                                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </motion.div>

                            {/* Image Content */}
                            <motion.div
                                initial={{ opacity: 0, x: isEven ? 100 : -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="flex-1 relative w-full"
                            >
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl group h-[400px]">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                                    {data.image ? (
                                        <img
                                            src={data.image}
                                            alt={data.title}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-slate-200 flex items-center justify-center">
                                            <span className="text-slate-400">No Image Available</span>
                                        </div>
                                    )}
                                    {/* Decorative Elements */}
                                    <div className={`absolute -z-10 w-full h-full border-2 border-dashed border-indigo-200 rounded-2xl top-4 ${isEven ? 'left-4' : 'right-4'}`} />
                                </div>
                            </motion.div>
                        </div>
                    );
                })}
            </div>

            {/* CTA SECTION */}
            <div className="bg-[#081A4A] py-20 relative overflow-hidden">
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Build Your Dream Team</h2>
                    <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-10">
                        Connect with us to find the perfect talent for your organization's needs.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-block px-10 py-4 bg-gradient-to-r from-pink-500 to-indigo-600 text-white font-bold rounded-full shadow-lg hover:shadow-indigo-500/50 hover:scale-105 transition-all"
                    >
                        Partner With Us
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RecruitmentSolutions;
