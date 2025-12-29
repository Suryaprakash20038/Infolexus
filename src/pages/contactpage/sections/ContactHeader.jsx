import React from 'react';

const ContactHeader = () => {
    return (
        <div className="bg-primary text-white pt-32 pb-20 relative overflow-hidden">
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
            <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
                <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                    Have a project in mind or need top talent? We'd love to hear from you.
                </p>
            </div>
        </div>
    );
};

export default ContactHeader;
