import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const ServiceHero = ({ service, id }) => {
    return (
        <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-slate-950 pt-20">
            {/* Background Image & Overlays matching Tech/DM Hero style */}
            <div className="absolute inset-0 z-0 bg-black">
                <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover md:object-contain object-right opacity-100"
                    style={{
                        maskImage: 'linear-gradient(to right, transparent 0%, black 80%)',
                        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 80%)'
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent" />
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10 w-full">
                <div className="max-w-4xl">
                    <Link to="/services" className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 mb-8 transition-colors group text-sm font-medium tracking-wide">
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Services
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                            </span>
                            Service Excellence
                        </div>

                        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
                            {service.title}
                        </h1>

                        <p className="text-xl text-slate-400 leading-relaxed mb-10 max-w-2xl">
                            {service.subtitle}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-start gap-6">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => document.getElementById('details').scrollIntoView({ behavior: 'smooth' })}
                                className="px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-blue-600 hover:to-indigo-500 text-white font-bold transition-all shadow-lg shadow-indigo-500/25 flex items-center gap-3"
                            >
                                Explore Details <ArrowRight size={20} />
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ServiceHero;
