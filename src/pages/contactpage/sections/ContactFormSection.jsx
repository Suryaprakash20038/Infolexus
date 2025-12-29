import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactFormSection = () => {
    return (
        <div className="container mx-auto px-4 md:px-6 py-16 -mt-10">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
                {/* Contact Info */}
                <div className="bg-slate-900 text-white p-10 md:p-12 md:w-2/5 flex flex-col justify-between">
                    <div>
                        <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center shrink-0 text-secondary">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-1">Our Office</h3>
                                    <p className="text-slate-400 leading-relaxed">
                                        123 Tech Park, Innovation Way,<br />
                                        Chennai, India 600001
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center shrink-0 text-secondary">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-1">Phone Number</h3>
                                    <p className="text-slate-400">+91 98765 43210</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center shrink-0 text-secondary">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-1">Email Address</h3>
                                    <p className="text-slate-400">info@infolexus.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12">
                        <div className="w-20 h-1 bg-secondary rounded-full mb-6"></div>
                        <p className="text-slate-400 italic">"Technology is best when it brings people together."</p>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="p-10 md:p-12 md:w-3/5 bg-white">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h2>
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-slate-700">Full Name</label>
                                <input type="text" id="name" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all text-slate-900 placeholder:text-slate-400" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-slate-700">Email Address</label>
                                <input type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all text-slate-900 placeholder:text-slate-400" placeholder="john@example.com" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="subject" className="text-sm font-medium text-slate-700">Subject</label>
                            <input type="text" id="subject" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all text-slate-900 placeholder:text-slate-400" placeholder="How can we help?" />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-slate-700">Message</label>
                            <textarea id="message" rows="4" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all text-slate-900 placeholder:text-slate-400 resize-none" placeholder="Tell us more about your project..."></textarea>
                        </div>

                        <button type="button" className="w-full bg-secondary hover:bg-secondary-dark text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5">
                            Send Message <Send size={18} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactFormSection;
