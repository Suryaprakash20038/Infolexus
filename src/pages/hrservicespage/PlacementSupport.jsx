import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Briefcase, Building2, UserCheck } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';
import { hrServiceDetails } from '../../data/hrServiceDetails';
import UpskillingRegistrationModal from '../trainingspage/components/UpskillingRegistrationModal';

import accentureImg from '../../assets/company/Accenture.png';
import ardhasImg from '../../assets/company/Ardhas.jpg';
import hclImg from '../../assets/company/HCL.png';
import appInnovationImg from '../../assets/company/app-innovation.jpeg';
import hexawareImg from '../../assets/company/Hexaware.png';
import wiproImg from '../../assets/company/Wipro.png';
import cognizantImg from '../../assets/company/cognizant.jpeg';
import infosysImg from '../../assets/company/infosys.jpeg';
import zohoImg from '../../assets/company/zoho.jpeg';
import integraImg from '../../assets/company/Integra.jpg';
import omegaImg from '../../assets/company/Omega logo.jpg';
import placementHeroImg from '../../assets/placement_hero.png';

const PlacementSupport = () => {
    const location = useLocation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState("");

    const openModal = (serviceName) => {
        setSelectedService(serviceName);
        setIsModalOpen(true);
    };

    // Keys for Placement Support Services
    const serviceKeys = [
        'career-guidance',
        'resume-optimization',
        'interview-prep',
        'job-seeker'
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
                        src={placementHeroImg}
                        alt="Placement Support Hero"
                        className="absolute inset-0 w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#081A4A]/90 via-transparent to-[#081A4A]/80" />
                    <div className="absolute inset-0 bg-[#081A4A]/40 mix-blend-multiply" />
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6"
                    >
                        Placement <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Support</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-12"
                    >
                        Comprehensive guidance and preparation for job seekers and fresh graduates.
                    </motion.p>
                </div>
            </div>

            {/* WHY INFOLEXUS SECTION (Previously Floating Stats) */}
            <div className="py-20 bg-white relative">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

                        {/* Left Side: Title */}
                        <div className="w-full lg:w-1/3 text-center lg:text-left mb-10 lg:mb-0">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                                    Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">InfoLexus?</span>
                                </h2>
                                <div className="h-2 w-24 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mt-6 mx-auto lg:mx-0" />
                                <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                                    We combine years of industry expertise with a vast network of top-tier partners to launch your career.
                                </p>
                            </motion.div>
                        </div>

                        {/* Right Side: Stats Cards */}
                        <div className="w-full lg:w-2/3">
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="grid grid-cols-1 md:grid-cols-3 gap-6"
                            >
                                {[
                                    { icon: Briefcase, count: "7+", label: "Years of Experience" },
                                    { icon: Building2, count: "2,000+", label: "Corporate Partners" },
                                    { icon: UserCheck, count: "3,000+", label: "Candidates Placed" }
                                ].map((stat, idx) => (
                                    <div key={idx} className="relative group bg-gradient-to-b from-slate-800 to-slate-950 rounded-2xl p-8 shadow-2xl border border-slate-700/30 overflow-hidden text-center hover:-translate-y-2 transition-all duration-500">
                                        {/* Ambient Glow */}
                                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-cyan-500/5 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                        {/* Top Highlight Line */}
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50 group-hover:w-2/3 group-hover:opacity-100 transition-all duration-500" />

                                        <div className="relative z-10 flex flex-col items-center">
                                            <div className="mb-4 p-3 rounded-2xl bg-slate-900/50 ring-1 ring-slate-700/50 group-hover:ring-cyan-500/30 group-hover:scale-110 transition-all duration-300 text-cyan-400 shadow-inner">
                                                <stat.icon size={32} strokeWidth={1.5} />
                                            </div>
                                            <h3 className="lg:text-4xl text-3xl font-bold text-white mb-2 tracking-tight drop-shadow-md">{stat.count}</h3>
                                            <p className="text-slate-400 font-bold text-[10px] uppercase tracking-[0.2em] group-hover:text-cyan-200/70 transition-colors">{stat.label}</p>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ZIG-ZAG CONTENT SECTION */}
            <div className="pb-24 pt-32 space-y-24 md:space-y-32 container mx-auto px-4 md:px-6">
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
                                    <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
                                        Step {index + 1}
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
                                    {data.features && data.features.slice(0, 5).map((feature, idx) => ( // Show first 5 features
                                        <li key={idx} className="flex items-start gap-3">
                                            <div className="mt-1 w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-700 flex items-center justify-center shrink-0">
                                                <Check size={12} strokeWidth={3} />
                                            </div>
                                            <span className="text-slate-700 font-medium">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="pt-4">
                                    <button
                                        onClick={() => openModal(data.title)}
                                        className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-800 transition-colors group"
                                    >
                                        Get Started
                                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
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
                                    <div className={`absolute -z-10 w-full h-full border-2 border-dashed border-slate-300 rounded-2xl top-4 ${isEven ? 'left-4' : 'right-4'}`} />
                                </div>
                            </motion.div>
                        </div>
                    );
                })}
            </div>

            {/* PLACEMENT PARTNERS MARQUEE */}
            <div className="py-24 bg-white overflow-hidden border-t border-slate-100">
                <div className="container mx-auto px-4 mb-16 text-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Candidates Have Got Placed In The Following Companies</h2>
                    <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full"></div>
                </div>

                <div className="relative w-full overflow-hidden">
                    <motion.div
                        className="flex items-center gap-16 whitespace-nowrap w-max"
                        animate={{ x: "-50%" }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 40,
                        }}
                    >
                        {[accentureImg, ardhasImg, hclImg, appInnovationImg, hexawareImg, wiproImg, cognizantImg, infosysImg, zohoImg, integraImg, omegaImg, accentureImg, ardhasImg, hclImg, appInnovationImg, hexawareImg, wiproImg, cognizantImg, infosysImg, zohoImg, integraImg, omegaImg].map((logo, index) => (
                            <div key={index} className="w-48 h-32 flex-shrink-0 bg-white border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-center justify-center p-2 hover:-translate-y-1 duration-300">
                                <img
                                    src={logo}
                                    alt="Company Logo"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            <UpskillingRegistrationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                initialCourse={selectedService}
            />
        </div>
    );
};

export default PlacementSupport;
