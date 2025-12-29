import service1 from '../assets/hr-services/service-1.webp';
import service2 from '../assets/hr-services/service-2.webp';
import service3 from '../assets/hr-services/service-3.webp';
import service4 from '../assets/hr-services/service-4.webp';
import service5 from '../assets/hr-services/service-5.webp';
import service6 from '../assets/hr-services/service-6.webp';
import service7 from '../assets/hr-services/service-7.webp';
import service8 from '../assets/hr-services/service-8.webp';
import service9 from '../assets/hr-services/service-9.webp';

export const hrServiceDetails = {
    'hr-recruitment': {
        title: "Recruitment & Staffing Solutions",
        subtitle: "Expert Talent Acquisition for IT & Non-IT Sectors",
        description: "We provide expert recruitment and staffing solutions for both IT and Non-IT sectors, helping businesses find the perfect talent to drive success. Our IT recruitment services cover a range of roles, from software development and cybersecurity to data science and IT project management. For Non-IT roles, we specialize in staffing across Sales, Marketing, Finance, HR, Operations, and Customer Service.",
        features: [
            "Executive Search & Headhunting",
            "Contract & Permanent Staffing",
            "RPO (Recruitment Process Outsourcing)",
            "Background Verification Services",
            "Technical Screening & Assessment",
            "Onboarding Support"
        ],
        process: [
            { title: "Requirement", desc: "Understanding job roles and culture." },
            { title: "Sourcing", desc: "Accessing premium talent pools." },
            { title: "Screening", desc: " rigorous interviews and assessments." },
            { title: "Selection", desc: "Finalizing the perfect candidate." }
        ],
        technologies: ["LinkedIn Recruiter", "Naukri", "Workday", "Zoho Recruit"],
        image: service1
    },
    'hr-training': {
        title: "Outbound & Training Programs",
        subtitle: "Enhancing Workforce Capabilities",
        description: "We offer leadership development, communication, soft skills, and team-building programs to enhance your workforce's capabilities. Our outbound training initiatives are designed to foster teamwork, improve interpersonal relationships, and boost overall organizational productivity.",
        features: [
            "Leadership Development Workshops",
            "Communication Skills Training",
            "Emotional Intelligence Seminars",
            "Conflict Resolution Workshops",
            "Productivity & Time Management",
            "Customized Corporate Retreats"
        ],
        process: [
            { title: "Analysis", desc: "Identifying skill gaps." },
            { title: "Design", desc: "Creating custom modules." },
            { title: "Delivery", desc: "Interactive training sessions." },
            { title: "Feedback", desc: "Measuring impact and ROI." }
        ],
        technologies: ["LMS", "Zoom/Teams", "Gamification", "Assessments"],
        image: service3
    },
    'hr-teambuilding': {
        title: "Team Building & Engagement",
        subtitle: "For a Motivated and Connected Workforce",
        description: "Our customized team building activities and engagement drives are tailored to your company's culture. We create immersive experiences that motivate employees, strengthen bonds, and create a positive work environment.",
        features: [
            "Indoor & Outdoor Activities",
            "Employee Recognition Programs",
            "Wellness & Health Initiatives",
            "Virtual Team Building",
            "Cultural Events Management",
            "Employee Surveys & Feedback"
        ],
        process: [
            { title: "Consult", desc: "Understanding team dynamics." },
            { title: "Plan", desc: "Curating engaging activities." },
            { title: "Execute", desc: "Hosting the event." },
            { title: "Sustain", desc: "Post-event engagement." }
        ],
        technologies: ["Event Apps", "SurveyMonkey", "Slack", "Trello"],
        image: service2
    },
    'hr-drives': {
        title: "Customized Drives",
        subtitle: "Mass Hiring & Campus Recruitment Events",
        description: "Tailored talent acquisition and employee engagement initiatives to fit your specific organizational culture and needs. We organize campus drives, walk-ins, and specialized hiring events to help you connect with large pools of qualified candidates efficiently.",
        features: [
            "Campus Recruitment Drives",
            "Walk-in Interview Managment",
            "Job Fairs & Career Expos",
            "Virtual Hiring Events",
            "Diversity Hiring Initiatives",
            "Internship Program Management"
        ],
        process: [
            { title: "schedule", desc: "Coordinating with colleges/venues." },
            { title: "Promote", desc: "Attracting candidates." },
            { title: "Conduct", desc: "Managing the event flow." },
            { title: "Hire", desc: "Bulk offer rollouts." }
        ],
        technologies: ["HackerRank", "Mettl", "Zoom", "Google Forms"],
        image: service4
    },
    'hr-marketing': {
        title: "Digital Marketing & SEO",
        subtitle: "Employer Branding & Visibility",
        description: "Boost your brand visibility with our comprehensive digital marketing strategies and search engine optimization services. From content creation and social media management to technical SEO and paid advertising, we help you reach your target audience and grow your digital presence.",
        features: [
            "Employer Branding Campaigns",
            "Social Media Management",
            "SEO for Career Pages",
            "Content Marketing",
            "Lead Generation",
            "PPC & Paid Ads"
        ],
        process: [
            { title: "Audit", desc: "Analyzing online presence." },
            { title: "Strategy", desc: "Defining channels and goals." },
            { title: "Execute", desc: "Launching campaigns." },
            { title: "Optimize", desc: "Refining for better reach." }
        ],
        technologies: ["Google Analytics", "SEMrush", "LinkedIn Ads", "HubSpot"],
        image: service5
    },
    'hr-college-placements': {
        title: "College Placements",
        subtitle: "Bridging Students to Careers",
        description: "We work closely with colleges to understand the specific needs of both students and companies, ensuring a seamless recruitment process. Through tailored placement programs, we help students kick-start their careers while enabling companies to access a pool of fresh, qualified talent.",
        features: [
            "Placement Cell Support",
            "Company outreach",
            "Interview Coordination",
            "Offer Management",
            "Pre-placement talks",
            "Career Counseling"
        ],
        process: [
            { title: "Connect", desc: "Partnering with corporates." },
            { title: "Prepare", desc: "Grooming students." },
            { title: "Interview", desc: "Facilitating hiring rounds." },
            { title: "Place", desc: "Finalizing job offers." }
        ],
        technologies: ["Placement Software", "Database Mgmt", "Email Automation"],
        image: service6
    },
    'hr-college-trainings': {
        title: "College Trainings",
        subtitle: "Industry-Ready Skill Development",
        description: "Our training programs for colleges focus on bridging the industry-academia gap. We offer technical training in trending technologies like Python, Java, Data Science, and Full Stack Development. Additionally, our soft skills modules cover communication, resume building, interview preparation, and aptitude.",
        features: [
            "Technical Workshops (Full Stack, AI)",
            "Soft Skills & Communication",
            "Aptitude Test Preparation",
            "Mock Interviews",
            "Resume Building",
            "Hackathons & Competitions"
        ],
        process: [
            { title: "Assess", desc: "Student skill evaluation." },
            { title: "Train", desc: "Intensive learning modules." },
            { title: "Practice", desc: "Hands-on projects/mocks." },
            { title: "Certify", desc: "Completion & readiness validation." }
        ],
        technologies: ["LMS", "Coding Platforms", "Virtual Labs"],
        image: service7
    },
    'hr-job-placements': {
        title: "Job Seeker Placements",
        subtitle: "Your Gateway to Dream Opportunities",
        description: "We specialize in connecting job seekers with the right career opportunities. whether you're looking for a fresh start or seeking to advance your career, our placement services are designed to match you with employers who align with your skills, experience, and career goals.",
        features: [
            "Profile Analysis & Matching",
            "Resume Optimization",
            "Direct Interview Scheduling",
            "Career Guidance",
            "Negotiation Support",
            "Post-Placement Support"
        ],
        process: [
            { title: "Register", desc: "Profile creation." },
            { title: "Match", desc: "Finding suitable roles." },
            { title: "Apply", desc: "Submitting applications." },
            { title: "Succeed", desc: "Landing the job." }
        ],
        technologies: ["Job Portals", "ATS", "Networking"],
        image: service8
    },
    'hr-skill-dev': {
        title: "Skill Development Training",
        subtitle: "Upskilling for Future Relevance",
        description: "We offer comprehensive skill development training designed to empower individuals to thrive in a rapidly evolving job market. our training programs focus on both technical and soft skills, including leadership, communication, problem-solving, data analysis, programming, and more.",
        features: [
            "Certification Courses",
            "Hands-on Bootcamps",
            "Career Transition Programs",
            "Language Proficiency",
            "Digital Literacy",
            "Professional Etiquette"
        ],
        process: [
            { title: "Enroll", desc: "Choosing the path." },
            { title: "Learn", desc: "Expert-led sessions." },
            { title: "Apply", desc: "Projects and tasks." },
            { title: "Grow", desc: "Career advancement." }
        ],
        technologies: ["Udemy", "Coursera", "Live Training"],
        image: service9
    }
};
