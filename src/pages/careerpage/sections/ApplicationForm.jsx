import React, { useState } from 'react';
import { Send, Upload } from 'lucide-react';

const ApplicationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        position: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = `Job Application: ${formData.position}`;
        const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0APosition: ${formData.position}%0D%0AMessage: ${formData.message}%0D%0A%0D%0A[Please attach your resume to this email]`;

        window.location.href = `mailto:recruiter1@infolexus.com?subject=${subject}&body=${body}`;
    };

    return (
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 sticky top-24">
            <h3 className="text-3xl font-black text-slate-900 mb-2 text-center">Apply Now</h3>
            <p className="text-slate-500 mb-8 text-center font-medium">Join our team of innovators.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Full Name</label>
                    <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 text-sm font-medium"
                        placeholder="John Doe"
                    />
                </div>

                <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Email Address</label>
                    <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 text-sm font-medium"
                        placeholder="john@example.com"
                    />
                </div>

                <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Phone Number</label>
                    <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 text-sm font-medium"
                        placeholder="+91 98765 43210"
                    />
                </div>

                <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Position Applied For</label>
                    <select
                        name="position"
                        required
                        value={formData.position}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 text-sm font-medium"
                    >
                        <option value="">Select a Role</option>
                        <option value="Digital Marketing Executive">Digital Marketing Executive</option>
                        <option value="HR Recruiter">HR Recruiter</option>
                        <option value="Placement Coordinator">Placement Coordinator</option>
                        <option value="Business Development Executive">Business Development Executive</option>
                        <option value="UI/UX Designer">UI/UX Designer</option>
                        <option value="Python Developer">Python Developer</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Brief Introduction</label>
                    <textarea
                        name="message"
                        rows="3"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 text-sm font-medium"
                        placeholder="Tell us a bit about yourself..."
                    ></textarea>
                </div>

                <div className="p-4 border border-dashed border-slate-300 rounded-xl bg-slate-50 text-center">
                    <p className="text-xs text-slate-500 mb-2">Resume Upload</p>
                    <button type="button" className="text-blue-600 text-xs font-bold flex items-center justify-center gap-1 mx-auto hover:underline">
                        <Upload size={12} /> Attach PDF (Simulated)
                    </button>
                    <p className="text-[10px] text-slate-400 mt-2 italic">*Please attach file in email client after clicking submit</p>
                </div>

                <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                >
                    Submit Application <Send size={18} />
                </button>
            </form>
        </div>
    );
};

export default ApplicationForm;
