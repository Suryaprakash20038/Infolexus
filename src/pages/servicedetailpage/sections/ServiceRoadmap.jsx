import React from 'react';
import { motion } from 'framer-motion';

const ServiceRoadmap = ({ service }) => {
    return (
        <div>
            <div className="text-center mb-16">
                <span className="text-violet-600 font-bold tracking-widest uppercase text-xs mb-2 block">Workflow</span>
                <h2 className="text-4xl font-black text-slate-900">Execution Roadmap</h2>
            </div>
            <div className="relative">
                {/* Connecting Line */}
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-100 -translate-y-1/2 hidden md:block"></div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                    {service.process.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative bg-white p-8 rounded-3xl border border-slate-100 shadow-lg text-center group hover:-translate-y-2 transition-transform"
                        >
                            <div className="w-10 h-10 mx-auto bg-slate-900 text-white rounded-full flex items-center justify-center font-bold mb-6 border-4 border-white shadow-xl">
                                {index + 1}
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-3">{step.title}</h3>
                            <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceRoadmap;
