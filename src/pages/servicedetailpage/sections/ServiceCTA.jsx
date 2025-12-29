import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ServiceCTA = () => {
    return (
        <section className="py-20 bg-slate-900 text-white text-center">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to initiate this protocol?</h2>
                <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-xl transition-all hover:scale-105 shadow-lg shadow-violet-600/25">
                    Start Project <ArrowRight size={20} />
                </Link>
            </div>
        </section>
    );
};

export default ServiceCTA;
