import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import DecryptedText from '../../../components/react-bits/DecryptedText';
import clientSuccessImg from '../../../assets/client-success.png'; // New generated image

const testimonials = [
    {
        name: "Sanjai Rko",
        role: "CES",
        content: "Infolexus transformed our hiring process and built our core platform. Their dual expertise is unmatched.",
        stars: 5,
        color: "#0284c7" // Sky 600
    },
    {
        name: "Gva Mahadevan",
        role: "Client",
        content: "Good service and very helpful team. I had a great experience and got placed successfully.",
        stars: 5,
        color: "#7c3aed" // Violet 600
    },
    {
        name: "Aishwarya",
        role: "Client",
        content: "I contacted Infolexus, and I was really impressed by how fast they worked. They had me placed in just two days.",
        stars: 5,
        color: "#dc2626" // Red 600
    },
    {
        name: "Harsath Rahaman",
        role: "Client",
        content: "Infolexus Solutions is a good company providing diverse career opportunities and employee benefits.",
        stars: 5,
        color: "#2563eb" // Blue 600
    },
    {
        name: "Deepak J",
        role: "Client",
        content: "I had a great experience with Infolexus. They were quick to respond and really worked hard to find the right job for me.",
        stars: 5,
        color: "#0891b2" // Cyan 600
    },
    {
        name: "Elangovan Senthilkumar",
        role: "Client",
        content: "Big thanks to Infolexus for helping me find a job so fast! The team is super efficient.",
        stars: 5,
        color: "#c026d3" // Fuchsia 600
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-swipe
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 6000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const currentTestimonial = testimonials[currentIndex];

    // Light theme variants
    return (
        <section className="py-24 bg-white text-slate-900 overflow-hidden relative">

            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-slate-50 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3" />

            <div className="container mx-auto px-6 md:px-20 relative z-10">
                <div className="text-center mb-16">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-600 mb-4">Testimonials</p>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
                        Stories of Success
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-0 bg-white rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden border border-slate-100">

                    {/* LEFT: Banner Image (Replacing TechSphere) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-5/12 relative h-[300px] lg:h-auto min-h-[400px]"
                    >
                        <img
                            src={clientSuccessImg}
                            alt="Client Success"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                        <div className="absolute bottom-8 left-8 text-white z-10">
                            <h3 className="text-2xl font-bold mb-2">Trusted by Professionals</h3>
                            <p className="text-white/80 text-sm">Over 1,500+ success stories and counting.</p>
                        </div>
                    </motion.div>

                    {/* RIGHT: Content Content */}
                    <div className="w-full lg:w-7/12 p-8 md:p-16 flex flex-col justify-center relative bg-white">

                        {/* Quote Icon */}
                        <div className="mb-6">
                            <Quote size={48} className="opacity-30" style={{ color: currentTestimonial.color }} />
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, y: 20, filter: 'blur(10px)', scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
                                exit={{ opacity: 0, y: -20, filter: 'blur(10px)', scale: 0.95 }}
                                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} // Custom cubic bezier for smooth "premium" feel
                                className="mb-12"
                            >
                                <h3 className="text-2xl md:text-4xl font-bold leading-normal mb-8 text-slate-900">
                                    "{currentTestimonial.content}"
                                </h3>

                                <div className="flex items-center gap-5">
                                    {/* Avatar Initial */}
                                    <div
                                        className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold text-white shadow-md"
                                        style={{ backgroundColor: currentTestimonial.color }}
                                    >
                                        {currentTestimonial.name.charAt(0)}
                                    </div>

                                    <div>
                                        <h4 className="text-xl font-bold text-slate-900">
                                            <DecryptedText
                                                text={currentTestimonial.name}
                                                className="text-slate-900"
                                            />
                                        </h4>
                                        <p className="text-slate-500 font-medium">{currentTestimonial.role}</p>
                                        <div className="flex gap-1 mt-1">
                                            {[...Array(currentTestimonial.stars)].map((_, i) => (
                                                <Star key={i} size={14} className="fill-current" style={{ color: currentTestimonial.color }} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Controls - Bottom Right */}
                        <div className="flex items-center justify-between border-t border-slate-100 pt-8">
                            {/* Dots */}
                            <div className="flex gap-2.5">
                                {testimonials.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setCurrentIndex(idx)}
                                        className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? "w-8" : "w-2 bg-slate-200 hover:bg-slate-300"
                                            }`}
                                        style={{ backgroundColor: idx === currentIndex ? currentTestimonial.color : '' }}
                                        aria-label={`Go to slide ${idx + 1}`}
                                    />
                                ))}
                            </div>

                            {/* Arrows */}
                            <div className="flex gap-3">
                                <button
                                    onClick={handlePrev}
                                    className="p-3 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-600 transition-colors border border-slate-200"
                                >
                                    <ChevronLeft size={20} />
                                </button>
                                <button
                                    onClick={handleNext}
                                    className="p-3 rounded-full text-white transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                                    style={{ backgroundColor: currentTestimonial.color }}
                                >
                                    <ChevronRight size={20} />
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
