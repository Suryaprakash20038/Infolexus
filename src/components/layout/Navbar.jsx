import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    Menu, X, ChevronDown, Instagram, Facebook, Linkedin
} from 'lucide-react';
import {
    RiCodeBoxFill, RiSmartphoneFill, RiPaletteFill, RiCloudWindyFill,
    RiShieldKeyholeFill, RiBrainFill, RiBriefcase4Fill, RiBarChartBoxFill,
    RiCheckboxCircleFill, RiCustomerService2Fill, RiMegaphoneFill,
    RiLineChartFill, RiUserStarFill, RiHandCoinFill, RiArrowRightUpLine,
    RiShareForwardFill, RiMailSendFill, RiAdvertisementFill, RiArticleFill,
    RiPresentationFill, RiTeamFill, RiChatSmileFill,
    RiUserAddFill, RiSearchFill, RiLayoutGridFill, RiMovieFill, RiBarChartGroupedFill,
    RiTwitterXFill, RiUserSearchFill,
    RiCloudLine, RiRobotFill, RiChatSmile3Fill, RiShieldCheckFill,
    RiServerFill, RiWindowFill, RiLinksFill, RiMoneyDollarCircleFill,
    RiShoppingCartFill, RiSettings4Fill
} from 'react-icons/ri';
import { cn } from '../../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/lnfolexus_4k_WALLPAPER_WITHOUT_CAPTION___1_-removebg-preview.png';

const MotionLink = motion.create(Link);

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState(false);
    const [activeServiceCategory, setActiveServiceCategory] = useState(0);
    const [activeSubService, setActiveSubService] = useState(0);
    const leaveTimeout = React.useRef(null);
    const location = useLocation();

    // Clear timeout on unmount
    useEffect(() => {
        return () => {
            if (leaveTimeout.current) clearTimeout(leaveTimeout.current);
        };
    }, []);

    // Close menus on route change
    useEffect(() => {
        setActiveDropdown(null);
        setMobileSubMenuOpen(false);
        setIsOpen(false);
    }, [location]);

    // Prevent Background Scroll when Mobile Menu is Open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const handleMouseEnter = (name) => {
        if (leaveTimeout.current) clearTimeout(leaveTimeout.current);
        setActiveDropdown(name);
        if (name === 'OUR SERVICES') {
            setActiveServiceCategory(0);
            setActiveSubService(0);
        }
    };

    const handleMouseLeave = () => {
        leaveTimeout.current = setTimeout(() => {
            setActiveDropdown(null);
        }, 200);
    };

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const serviceCategories = [
        {
            title: 'IT Services',
            description: 'Comprehensive technology solutions designed to scale your business and drive digital transformation.',
            subCategories: [
                {
                    name: "Web Development",
                    description: "Crafting responsive and dynamic websites for seamless user experiences.",
                    items: [
                        { name: 'Custom Website Development', icon: RiCodeBoxFill, path: '/services/wd-09', desc: 'Tailored websites built for performance and growth.' },
                        { name: 'Ecommerce (Shopify/Woo)', icon: RiShoppingCartFill, path: '/services/ecommerce', desc: 'Scalable online stores driving sales and revenue.' },
                        { name: 'UI/UX Design', icon: RiPaletteFill, path: '/services/ui-05', desc: 'User-centric designs that engage and convert.' },
                        { name: 'CMS (WordPress/Framer/Drupal)', icon: RiLayoutGridFill, path: '/services/cms', desc: 'Easy content management for dynamic web updates.' }
                    ]
                },
                {
                    name: "App Development",
                    description: "Innovating mobile solutions that engage users across diverse platforms.",
                    items: [
                        { name: 'Mobile App Development', icon: RiSmartphoneFill, path: '/services/ma-01', desc: 'Native and cross-platform apps for all devices.' },
                        { name: 'Custom Web App', icon: RiWindowFill, path: '/services/web-app', desc: 'Powerful web apps streamlining business processes.' },
                        { name: 'SaaS Development', icon: RiCloudWindyFill, path: '/services/saas', desc: 'Scalable software delivery models for modern business.' },
                        { name: 'Accounting & Sales Automation', icon: RiMoneyDollarCircleFill, path: '/services/accounting-sales', desc: 'Automating financial and sales workflows.' }
                    ]
                },
                {
                    name: "Enterprise Solutions",
                    description: "Streamlining business operations with robust software architectures.",
                    items: [
                        { name: 'ERP Solutions', icon: RiBarChartGroupedFill, path: '/services/erp', desc: 'Integrated systems managing core business processes efficiently.' },
                        { name: 'CRM Systems', icon: RiUserStarFill, path: '/services/crm', desc: 'Enhancing customer relationships and driving sales growth.' },
                        { name: 'HRM Systems', icon: RiTeamFill, path: '/services/hrm', desc: 'Managing talent and organizational success.' },
                        { name: 'LMS Platforms', icon: RiArticleFill, path: '/services/lms', desc: 'Comprehensive learning and training management systems.' }
                    ]
                },
                {
                    name: "Testing & Cloud Solution",
                    description: "Ensuring reliability and scalability through rigorous testing and cloud infrastructure.",
                    items: [
                        { name: 'Manual & Automation Testing', icon: RiCheckboxCircleFill, path: '/services/testing-automation', desc: 'Rigorous testing ensuring bug-free software delivery.' },
                        { name: 'CI/CD & API Testing', icon: RiLinksFill, path: '/services/cicd-api', desc: 'Seamless integration and continuous deployment pipelines.' },
                        { name: 'Hosting & Maintenance', icon: RiServerFill, path: '/services/hosting-maintenance', desc: 'Secure hosting and proactive system maintenance.' },
                        { name: 'DevOps Services', icon: RiCloudLine, path: '/services/devops', desc: 'Optimizing development and operations collaboration.' },
                        { name: 'Monitoring & Cloud', icon: RiShieldCheckFill, path: '/services/monitoring-cloud', desc: 'Real-time monitoring and scalable cloud solutions.' }
                    ]
                },
                {
                    name: "Data Analytics & AI/ML",
                    description: "Leveraging data and intelligence to drive specific business insights.",
                    items: [
                        { name: 'NLP & AI Automation', icon: RiRobotFill, path: '/services/ai-automation', desc: 'Smart automation processing natural human language.' },
                        { name: 'Predictive / Market Analytics', icon: RiLineChartFill, path: '/services/busi-intel', desc: 'Forecast trends and make data-driven decisions.' },
                        { name: 'Business Intelligence (BI)', icon: RiBarChartBoxFill, path: '/services/bi', desc: 'Visualizing data to unlock actionable business insights.' },
                        { name: 'Custom AI & Chatbots', icon: RiChatSmile3Fill, path: '/services/chatbots', desc: '24/7 automated support enhancing customer engagement.' },
                    ]
                },
                {
                    name: "Maintenance & IT Support",
                    description: "Reliable 24/7 support to keep your digital assets running smoothly.",
                    items: [
                        { name: 'IT Support Services', icon: RiCustomerService2Fill, path: '/services/it-support', desc: 'Expert technical assistance whenever you need it.' },
                        { name: 'Software Maintenance', icon: RiSettings4Fill, path: '/services/maintenance', desc: 'Regular updates and patches for optimal performance.' },
                        { name: 'System Security & Updates', icon: RiShieldCheckFill, path: '/services/security-updates', desc: 'Proactive surveillance keeping systems secure.' }
                    ]
                }
            ]
        },
        {
            title: 'Digital Marketing',
            description: 'Strategic digital marketing services to boost your brand visibility and maximize ROI.',
            subCategories: [
                {
                    name: "SEO",
                    expansion: "Search Engine Optimization",
                    description: "Dominate search results with a complete organic strategy.",
                    items: [
                        { name: 'On-page SEO', icon: RiSearchFill, path: '/dm-services/on-page-seo', desc: 'Optimizing content and structure for better rankings.' },
                        { name: 'Off-page SEO', icon: RiLinksFill, path: '/dm-services/off-page-seo', desc: 'Building authority with quality backlinks.' },
                        { name: 'Technical SEO', icon: RiCodeBoxFill, path: '/dm-services/technical-seo', desc: 'Enhancing site health and crawlability.' }
                    ]
                },
                {
                    name: "SMM",
                    expansion: "Social Media Marketing",
                    description: "Engage your audience and build brand loyalty on social platforms.",
                    items: [
                        { name: 'Social Media Management', icon: RiShareForwardFill, path: '/dm-services/social-media-management', desc: 'Consistent posting and brand management.' },
                        { name: 'Content Creation', icon: RiPaletteFill, path: '/dm-services/content-creation', desc: 'Designing visuals that stop the scroll.' },
                        { name: 'Video Shoots & Edits', icon: RiMovieFill, path: '/dm-services/video-production', desc: 'Professional video production for higher engagement.' },
                        { name: 'Community Engagement', icon: RiTeamFill, path: '/dm-services/community-engagement', desc: 'Building loyal communities around your brand.' }
                    ]
                },
                {
                    name: "PPC",
                    expansion: "Pay Per Click",
                    description: "Instant visibility and targeted traffic through paid advertising.",
                    items: [
                        { name: 'Performance Campaigns', icon: RiBarChartGroupedFill, path: '/dm-services/performance-campaigns', desc: 'Strategic campaigns focused on conversions.' },
                        { name: 'Search Advertisements', icon: RiAdvertisementFill, path: '/dm-services/search-ads', desc: 'Capturing high-intent traffic on search engines.' },
                        { name: 'Analytics & Optimization', icon: RiLineChartFill, path: '/dm-services/ppc-analytics', desc: 'Data-driven tuning for optimal performance.' }
                    ]
                },
                {
                    name: "Performance Marketing",
                    description: "Data-driven advertising across multiple channels.",
                    items: [
                        { name: 'Google Ads', icon: RiAdvertisementFill, path: '/dm-services/google-ads', desc: 'Reach customers precisely when they search.' },
                        { name: 'Meta Ads (FB/Insta)', icon: Facebook, path: '/dm-services/meta-ads', desc: 'Targeted visual ads on social networks.' },
                        { name: 'LinkedIn/Twitter Ads', icon: RiTwitterXFill, path: '/dm-services/linkedin-twitter-ads', desc: 'B2B and professional network advertising.' }
                    ]
                },
                {
                    name: "Content Marketing",
                    description: "Valuable content that educates and converts.",
                    items: [
                        { name: 'Blog & Article Writing', icon: RiArticleFill, path: '/dm-services/blog-writing', desc: 'SEO-driven articles to build thought leadership.' },
                        { name: 'Video Marketing', icon: RiMovieFill, path: '/dm-services/video-marketing', desc: 'Engaging video content for all platforms.' },
                        { name: 'Creative Writing', icon: RiPaletteFill, path: '/dm-services/creative-writing', desc: 'Compelling copy that defines your brand voice.' }
                    ]
                },
                {
                    name: "Reach Campaigns",
                    description: "Direct outreach strategies to nurture leads.",
                    items: [
                        { name: 'Email Campaigns', icon: RiMailSendFill, path: '/dm-services/email-marketing', desc: 'Personalized email sequences that convert.' },
                        { name: 'WhatsApp Campaigns', icon: RiChatSmile3Fill, path: '/dm-services/whatsapp-marketing', desc: 'Instant messaging for high open rates.' },
                        { name: 'Automation', icon: RiRobotFill, path: '/dm-services/marketing-automation', desc: 'Streamlining communication workflows.' }
                    ]
                },
                {
                    name: "Analytics & Reporting",
                    description: "Transparent insights into your marketing performance.",
                    items: [
                        { name: 'Performance Tracking', icon: RiLineChartFill, path: '/dm-services/performance-tracking', desc: 'Real-time monitoring of key metrics.' },
                        { name: 'ROI Analysis', icon: RiMoneyDollarCircleFill, path: '/dm-services/roi-analysis', desc: 'Understanding the value of every dollar spent.' }
                    ]
                }
            ]
        },
        {
            title: 'HR Services',
            description: 'End-to-end human resource management and recruitment solutions for your organization.',
            subCategories: [
                {
                    name: "Placement Support",
                    description: "Comprehensive guidance and preparation for job seekers and fresh graduates.",
                    items: [
                        { name: 'Career Guidance', icon: RiArrowRightUpLine, path: '/hr-services/career-guidance', desc: 'Expert counseling to chart your professional path.' },
                        { name: 'Resume Optimization', icon: RiArticleFill, path: '/hr-services/resume-optimization', desc: 'Crafting ATS-friendly resumes that stand out.' },
                        { name: 'Interview Preparation', icon: RiChatSmileFill, path: '/hr-services/interview-prep', desc: 'Mock interviews and tips to crack the toughest rounds.' },
                        { name: 'Job Search Assistance', icon: RiUserSearchFill, path: '/hr-services/job-seeker', desc: 'Connecting you with the right opportunities globally.' }
                    ]
                },
                {
                    name: "Recruitment & Staffing",
                    description: "Tailored hiring solutions to build high-performance teams for your business.",
                    items: [
                        { name: 'Permanent Recruitment', icon: RiBriefcase4Fill, path: '/hr-services/permanent-hiring', desc: 'Full-time talent acquisition for long-term success.' },
                        { name: 'Contract & Contract-to-Hire', icon: RiHandCoinFill, path: '/hr-services/contract-hiring', desc: 'Flexible staffing for projects and interim needs.' },
                        { name: 'In-House Developer Support', icon: RiCodeBoxFill, path: '/hr-services/in-house', desc: 'Dedicated developers integrated into your workflow.' },
                        { name: 'IT & Non-IT Staffing', icon: RiTeamFill, path: '/hr-services/staffing', desc: 'Hiring across diverse roles and industries seamlessly.' }
                    ]
                }
            ]
        },
        {
            title: 'Trainings',
            description: 'Comprehensive training solutions tailored for institutions and individual career growth.',
            subCategories: [
                {
                    name: "For Colleges & Institutions",
                    description: "Empowering students with industry-ready skills and campus placement support.",
                    items: [
                        { name: 'Industry-Oriented Technical Training', icon: RiCodeBoxFill, path: '/trainings/colleges#technical', desc: 'Hands-on coding and development workshops.' },
                        { name: 'Placement Readiness Programs', icon: RiBriefcase4Fill, path: '/trainings/colleges#placement-readiness', desc: 'Preparing students for corporate expectations.' },
                        { name: 'Soft Skills & Communication', icon: RiChatSmileFill, path: '/trainings/colleges#soft-skills', desc: 'Enhancing interpersonal and professional communication.' },
                        { name: 'Aptitude & Logical Reasoning', icon: RiBrainFill, path: '/trainings/colleges#aptitude', desc: 'Sharpening problem-solving capabilities.' },
                        { name: 'Pre-Placement Training', icon: RiUserStarFill, path: '/trainings/colleges#pre-placement', desc: 'Final polish before recruitment drives.' }
                    ]
                },
                {
                    name: "For Graduates & Job Seekers",
                    description: "Upskilling programs to accelerate career growth and secure dream jobs.",
                    items: [
                        { name: 'Skill Upgrade Programs', icon: RiBarChartBoxFill, path: '/trainings/graduates#skill-upgrade', desc: 'Advanced courses in trending technologies.' },
                        { name: 'Career Guidance & Mentorship', icon: RiTeamFill, path: '/trainings/graduates#career-guidance', desc: 'Personalized roadmaps from industry experts.' },
                        { name: 'Resume & Interview Training', icon: RiArticleFill, path: '/trainings/graduates#resume-interview', desc: 'Crafting winning CVs and acing interviews.' },
                        { name: 'Job-Oriented Courses', icon: RiBriefcase4Fill, path: '/trainings/graduates#job-oriented', desc: 'Specialized curriculums with guaranteed job support.' },
                        { name: 'Placement-Linked Training', icon: RiHandCoinFill, path: '/trainings/graduates#placement-linked', desc: 'Training with assured placement opportunities.' }
                    ]
                }
            ]
        }
    ];

    const navLinks = [
        { name: 'HOME', path: '/' },
        { name: 'ABOUT', path: '/about' },
        { name: 'OUR SERVICES', path: '/services', isMega: true },
        { name: 'TECHNOLOGIES', path: '/technologies' },
        { name: 'CLIENTS', path: '/clients' },
        { name: 'CAREER', path: '/careers' },
    ];

    return (
        <>
            <nav
                style={
                    (scrolled || activeDropdown)
                        ? { backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)" }
                        : {}
                }
                className={cn(
                    "fixed w-full z-50 transition-all duration-300 border-b border-transparent",
                    (scrolled || activeDropdown)
                        ? "bg-[#081A4A]/95 border-white/10 py-4 shadow-lg"
                        : "bg-transparent py-5"
                )}>

                {/* Navbar Content */}
                <div className="relative z-[80] w-full px-2 md:px-4 flex flex-row justify-between items-center h-full">

                    {/* Logo */}
                    <Link to="/" className="flex items-center shrink-0 z-[90]">
                        <img src={logo} alt="Infolexus" className="h-10 md:h-14 w-auto transition-all duration-300 object-contain object-left" />
                    </Link>

                    {/* Desktop Nav - Centered Absolute */}
                    <div className="hidden lg:flex items-center justify-center gap-8 lg:gap-10 absolute left-0 top-0 w-full h-full pointer-events-none">
                        {navLinks.map((link) => (
                            <div
                                key={link.name}
                                className="relative group pointer-events-auto"
                                onMouseEnter={() => handleMouseEnter(link.name)}
                                onMouseLeave={handleMouseLeave}
                            >
                                {link.isMega ? (
                                    <span
                                        onClick={() => handleMouseEnter(link.name)}
                                        className={cn(
                                            "flex items-center gap-1 text-[13px] lg:text-sm font-bold tracking-widest uppercase transition-colors duration-300 text-white hover:text-cyan-400 cursor-pointer",
                                            (activeDropdown === link.name) && "text-cyan-400"
                                        )}
                                    >
                                        {link.name}
                                        <ChevronDown size={14} className={cn("transition", activeDropdown === link.name ? "rotate-180" : "group-hover:rotate-180")} />
                                    </span>
                                ) : (
                                    <Link
                                        to={link.path}
                                        className={cn(
                                            "flex items-center gap-1 text-[13px] lg:text-sm font-bold tracking-widest uppercase transition-colors duration-300 text-white hover:text-cyan-400",
                                            (location.pathname === link.path) && "text-cyan-400"
                                        )}
                                    >
                                        {link.name}
                                    </Link>
                                )}

                                {/* 🔥 SIDEBAR MEGA MENU LAYOUT */}
                                {link.isMega && (
                                    <div className={cn(
                                        "fixed top-[70px] lg:top-[85px] left-0 right-0 w-full z-50 flex justify-center perspective-[2000px] pointer-events-none",
                                        activeDropdown === link.name && "pointer-events-auto"
                                    )}
                                        onMouseEnter={() => handleMouseEnter(link.name)}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <div className={cn(
                                            "w-[95%] max-w-6xl bg-[#081A4A]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col min-h-[500px] transition-all duration-300 origin-top transform",
                                            activeDropdown === link.name
                                                ? "opacity-100 rotate-x-0 translate-y-0"
                                                : "opacity-0 -rotate-x-12 translate-y-4"
                                        )}>
                                            {/* 1. TOP TABS ROW */}
                                            <div className="w-full bg-white border-b border-gray-100 flex flex-row">
                                                {serviceCategories.map((cat, idx) => (
                                                    <button
                                                        key={idx}
                                                        onMouseEnter={() => {
                                                            setActiveServiceCategory(idx);
                                                            setActiveSubService(0);
                                                        }}
                                                        className={cn(
                                                            "flex-1 py-4 text-sm font-bold uppercase tracking-wider transition-all duration-300 relative group/btn",
                                                            activeServiceCategory === idx
                                                                ? "bg-[#081A4A] text-white"
                                                                : "text-slate-600 hover:text-white hover:bg-[#081A4A]"
                                                        )}
                                                    >
                                                        {activeServiceCategory === idx && (
                                                            <motion.div
                                                                layoutId="activeTab"
                                                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400"
                                                            />
                                                        )}
                                                        <span className="relative z-10">{cat.title}</span>
                                                    </button>
                                                ))}
                                            </div>

                                            {/* 2. CONTENT AREA */}
                                            <div className="w-full h-full flex-1 relative bg-[#081A4A]/60 backdrop-blur-xl">
                                                {/* Decorative background */}
                                                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

                                                {/* Dynamic Content */}
                                                <AnimatePresence mode="wait">
                                                    <motion.div
                                                        key={activeServiceCategory}
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: 10 }}
                                                        transition={{ duration: 0.2 }}
                                                        className="h-full flex flex-col p-8"
                                                    >
                                                        {/* Nested Sidebar Layout for IT Services */}
                                                        {serviceCategories[activeServiceCategory].subCategories ? (
                                                            <div className="flex h-full gap-8">
                                                                {/* Level 3: Inner Sidebar */}
                                                                <div className="w-1/4 flex flex-col gap-2 border-r border-white/10 pr-4">
                                                                    {serviceCategories[activeServiceCategory].subCategories.map((sub, idx) => (
                                                                        <button
                                                                            key={idx}
                                                                            onMouseEnter={() => setActiveSubService(idx)}
                                                                            className={cn(
                                                                                "text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-between group/sub",
                                                                                activeSubService === idx
                                                                                    ? "bg-cyan-500 text-black shadow-lg font-bold scale-105"
                                                                                    : "text-slate-300 hover:text-white hover:bg-white/10"
                                                                            )}
                                                                        >
                                                                            <span>
                                                                                {sub.name}
                                                                                {sub.expansion && (
                                                                                    <span className="text-[10px] font-normal opacity-75 ml-1">
                                                                                        ({sub.expansion})
                                                                                    </span>
                                                                                )}
                                                                            </span>
                                                                            {activeSubService === idx && (
                                                                                <motion.div layoutId="subArrow">
                                                                                    <RiArrowRightUpLine size={16} className="text-black" />
                                                                                </motion.div>
                                                                            )}
                                                                        </button>
                                                                    ))}
                                                                </div>

                                                                {/* Level 4: Grid */}
                                                                <div className="w-3/4 flex flex-col">
                                                                    <div className="mb-6">
                                                                        <h4 className="text-xl font-bold text-white mb-2">
                                                                            {serviceCategories[activeServiceCategory].subCategories[activeSubService].name}
                                                                        </h4>
                                                                        <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
                                                                            {serviceCategories[activeServiceCategory].subCategories[activeSubService].description}
                                                                        </p>
                                                                    </div>
                                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-min">
                                                                        {serviceCategories[activeServiceCategory].subCategories[activeSubService].items.map((item, i) => (
                                                                            <MegaMenuCard key={i} item={item} />
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ) : (
                                                            /* Standard Grid Layout */
                                                            <>
                                                                <div className="mb-8">
                                                                    <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                                                                        {serviceCategories[activeServiceCategory].title}
                                                                        <span className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent ml-4" />
                                                                    </h3>
                                                                    <p className="text-slate-400 max-w-2xl text-sm leading-relaxed">
                                                                        {serviceCategories[activeServiceCategory].description}
                                                                    </p>
                                                                </div>

                                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-min">
                                                                    {serviceCategories[activeServiceCategory].items.map((item, i) => (
                                                                        <MegaMenuCard key={i} item={item} />
                                                                    ))}
                                                                </div>
                                                            </>
                                                        )}
                                                    </motion.div>
                                                </AnimatePresence>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Right CTA */}
                    <div className="hidden lg:flex items-center gap-6">
                        <SocialIcons />
                        <Link to="/contact"
                            className="px-6 py-2 border border-white rounded-full text-xs font-bold text-white hover:bg-white hover:text-black transition-all duration-300">
                            CONTACT US
                        </Link>
                    </div>

                    {/* Mobile Button - NOW INSIDE FLEX CONTAINER */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden text-white p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 shadow-lg hover:bg-white/20 transition-all"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Backdrop & Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/60 z-[90] lg:hidden backdrop-blur-sm"
                        />

                        {/* Drawer */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            className="fixed top-0 right-0 h-full w-[85%] max-w-[320px] bg-[#030B25] z-[100] flex flex-col lg:hidden shadow-2xl border-l border-white/10 overflow-y-auto"
                        >
                            {/* Mobile Header */}
                            <div className="flex justify-between items-center p-6 bg-[#030B25] sticky top-0 z-20">
                                <span className="text-white font-extrabold text-xl tracking-widest uppercase">Menu</span>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 -mr-2 text-slate-400 hover:text-white transition-colors border border-white/10 rounded-full hover:bg-white/5"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Mobile Links */}
                            <div className="flex flex-col px-6 space-y-2">
                                {navLinks.map((link) => (
                                    <div key={link.name} className="flex flex-col">
                                        {link.isMega ? (
                                            <>
                                                <button
                                                    onClick={() => setMobileSubMenuOpen(!mobileSubMenuOpen)}
                                                    className={cn(
                                                        "w-full flex items-center justify-between text-sm font-bold text-white hover:text-cyan-400 transition-colors uppercase tracking-widest py-4 text-left border-b border-white/5",
                                                        mobileSubMenuOpen ? "text-cyan-400" : ""
                                                    )}
                                                >
                                                    {link.name}
                                                    <ChevronDown
                                                        size={16}
                                                        className={cn("transition-transform duration-300", mobileSubMenuOpen ? "rotate-180 text-cyan-400" : "text-slate-500")}
                                                    />
                                                </button>

                                                {/* Mobile Mega Menu Accordion */}
                                                <AnimatePresence>
                                                    {mobileSubMenuOpen && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: "auto", opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            className="overflow-hidden"
                                                        >
                                                            <div className="pl-4 py-2 space-y-4">
                                                                {serviceCategories.map((category, idx) => (
                                                                    <div key={idx} className="space-y-4">
                                                                        <h4 className="text-cyan-500 font-bold text-[10px] uppercase tracking-widest opacity-80 flex items-center gap-2">
                                                                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                                                                            {category.title}
                                                                        </h4>

                                                                        {/* Handle Subcategories (IT, DM, HR) vs Direct Items (Trainings) */}
                                                                        {category.subCategories ? (
                                                                            <div className="flex flex-col gap-3 pl-2 border-l border-white/10">
                                                                                {category.subCategories.map((sub, subIdx) => (
                                                                                    <div key={subIdx} className="space-y-2">
                                                                                        <h5 className="text-white text-[11px] font-bold uppercase tracking-wide opacity-70 pl-2">
                                                                                            {sub.name}
                                                                                        </h5>
                                                                                        <div className="flex flex-col gap-1 pl-3">
                                                                                            {sub.items.map((item, itemIdx) => (
                                                                                                <Link
                                                                                                    key={itemIdx}
                                                                                                    to={item.path}
                                                                                                    onClick={() => setIsOpen(false)}
                                                                                                    className="text-slate-300 hover:text-white text-xs font-medium py-1.5 transition-colors flex items-center gap-2"
                                                                                                >
                                                                                                    <div className="w-1 h-1 rounded-full bg-slate-600"></div>
                                                                                                    {item.name}
                                                                                                </Link>
                                                                                            ))}
                                                                                        </div>
                                                                                    </div>
                                                                                ))}
                                                                            </div>
                                                                        ) : (
                                                                            <div className="flex flex-col gap-1 border-l border-white/10 pl-3">
                                                                                {category.items?.map((item, itemIdx) => (
                                                                                    <Link
                                                                                        key={itemIdx}
                                                                                        to={item.path}
                                                                                        onClick={() => setIsOpen(false)}
                                                                                        className="text-slate-300 hover:text-white text-xs font-medium py-1.5 transition-colors flex items-center gap-2"
                                                                                    >
                                                                                        <item.icon size={14} className="text-slate-500" />
                                                                                        {item.name}
                                                                                    </Link>
                                                                                ))}
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </>
                                        ) : (
                                            <Link
                                                to={link.path}
                                                onClick={() => setIsOpen(false)}
                                                className="block w-full text-sm font-bold text-white hover:text-cyan-400 transition-colors uppercase tracking-widest py-4 border-b border-white/5"
                                            >
                                                {link.name}
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Mobile CTA */}
                            <div className="p-6 mt-auto bg-[#030B25] sticky bottom-0 z-20">
                                <div className="flex justify-center gap-8 mb-6">
                                    <SocialIcons mobile />
                                </div>
                                <Link
                                    to="/contact"
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center justify-center w-full py-3.5 bg-gradient-to-r from-[#0ea5e9] to-[#2563eb] text-white font-bold rounded-lg uppercase tracking-wider text-sm shadow-lg hover:shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

// Helper Component for Mega Menu Cards (to clean up main code)
// Helper Component for Mega Menu Cards (Sidebar Layout Style)
const MegaMenuCard = ({ item }) => (
    <Link
        to={item.path}
        className="flex items-start gap-4 p-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 hover:border-white/30 transition-all duration-300 group h-full"
    >
        <div className="p-3 rounded-lg bg-[#0b1d52] text-cyan-400 group-hover:bg-cyan-400 group-hover:text-[#081A4A] transition-all duration-300 shadow-lg shrink-0 mt-0.5 border border-white/5">
            <item.icon size={22} />
        </div>
        <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
                <span className="text-[15px] font-bold text-white transition-colors leading-tight">
                    {item.name}
                </span>
                <RiArrowRightUpLine size={16} className="text-slate-500 group-hover:text-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" />
            </div>

            {item.desc && (
                <p className="text-xs text-blue-200 font-medium leading-relaxed opacity-90 group-hover:opacity-100">
                    {item.desc}
                </p>
            )}
        </div>
    </Link>
);

const SocialIcons = ({ mobile }) => (
    <>
        <a href="https://www.linkedin.com/company/infolexus-solutions/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400 transition-colors"><Linkedin size={mobile ? 20 : 18} /></a>
        <a href="https://www.instagram.com/infolexus_solutions?igsh=MWxmOXFpanBseTJ2bA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400 transition-colors"><Instagram size={mobile ? 20 : 18} /></a>
        <a href="https://x.com/InfolexusOff" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400 transition-colors"><RiTwitterXFill size={mobile ? 20 : 18} /></a>
    </>
);

export default Navbar;