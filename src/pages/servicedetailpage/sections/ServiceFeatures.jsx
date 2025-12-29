import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const ServiceFeatures = ({ service }) => {
    return (
        <div className="mb-32">
            <div className="text-center mb-16">
                <span className="text-violet-600 font-bold tracking-widest uppercase text-xs mb-2 block">Capabilities</span>
                <h2 className="text-4xl font-black text-slate-900">Core Features</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.features.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:bg-gradient-to-br hover:from-violet-600 hover:to-indigo-700 hover:-translate-y-2 transition-all duration-300 group"
                    >
                        <div className="w-12 h-12 rounded-2xl bg-violet-50 text-violet-600 flex items-center justify-center mb-6 group-hover:bg-white/20 group-hover:text-white transition-colors duration-300 backdrop-blur-sm">
                            <CheckCircle2 size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-white transition-colors">{feature}</h3>
                        <p className="text-slate-500 text-sm leading-relaxed group-hover:text-violet-100 transition-colors">Engineered for performance and reliability in demanding environments.</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ServiceFeatures;
