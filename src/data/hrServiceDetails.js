
// Importing images
import staffImg from '../assets/hrservice/Staffing and solution.jpeg';
import consultImg from '../assets/hrservice/hr consultating.jpeg';
import jobSeekersImg from '../assets/hrservice/job seekers.jpeg';
import onboardingImg from '../assets/hrservice/on boarding suport.jpeg';
import payrollImg from '../assets/hrservice/payroll.jpeg';
import performanceImg from '../assets/hrservice/perfomance.jpeg';
import requirementsImg from '../assets/hrservice/requirements and talent.jpeg';
import trainingImg from '../assets/hrservice/traning and skills.jpeg';

export const hrServiceDetails = {
    // 1. Job Seeker Assistance
    'job-seeker': {
        title: "Job Seeker Assistance",
        subtitle: "Connecting Talent with the Right Career Opportunities",
        description: "At Infolexus, we provide comprehensive job placement services to support job seekers in finding roles that match their skills and aspirations. Our team specializes in both IT and Non-IT recruitment, working closely with candidates to identify their strengths. From initial screening to final placement, we offer dedicated employment assistance and guide you through the entire process to ensure you secure meaningful and long-term career opportunities.",
        image: jobSeekersImg,
        benefits: ["Personalized Job Matching", "Resume Guidance", "Interview Support"],
        features: [
            "Comprehensive Job Placement",
            "IT & Non-IT Recruitment",
            "Skill & Aspiration Matching",
            "Initial Screening Support",
            "Final Placement Guidance",
            "Long-term Career Support"
        ],
        process: [
            { title: "Identify", desc: "Understanding candidate strengths." },
            { title: "Match", desc: "Finding suitable roles." },
            { title: "Guide", desc: "Assistance through the process." },
            { title: "Place", desc: "Securing the career opportunity." }
        ],
        technologies: ["Job Portals", "Recruitment Tools", "Skill Assessment"]
    },

    // 2. Resume & Profile Optimisation
    'resume-optimization': {
        title: "Resume & Profile Optimisation",
        subtitle: "Crafting Professional Profiles that Stand Out",
        description: "We help candidates build a strong personal brand with our professional resume writing and LinkedIn profile makeover services. Our team creates ATS-friendly resumes that meet industry standards, ensuring your profile passes automated filters. By optimizing your CV for specific job roles and utilizing strategic keywords, we significantly improve your visibility and increase your chances of getting shortlisted by top recruiters.",
        image: requirementsImg, // talent/requirements
        benefits: ["ATS Compliance", "Professional Branding", "Increased Visibility"],
        features: [
            "Professional Resume Writing",
            "LinkedIn Profile Makeover",
            "ATS-Friendly Formats",
            "Keyword Strategy",
            "Role-Specific Optimization",
            "Personal Branding"
        ],
        process: [
            { title: "Review", desc: "Analyzing current profile." },
            { title: "Strategize", desc: "Selecting keywords and format." },
            { title: "Draft", desc: "Creating professional content." },
            { title: "Optimize", desc: "Refining for ATS and recruiters." }
        ],
        technologies: ["ATS Checkers", "LinkedIn", "Document Design Tools"]
    },

    // 3. Interview Preparation & Coaching
    'interview-prep': {
        title: "Interview Preparation & Coaching",
        subtitle: "Build Confidence and Master the Interview Process",
        description: "Our interview coaching equips job seekers with the confidence needed to succeed. We provide rigorous mock interview practice and personalized feedback on how to handle technical and behavioral interview questions. Additionally, our soft skills training focuses on improving your communication and presentation, ensuring you are fully prepared to perform effectively in any real-world interview scenario.",
        image: trainingImg, // training
        benefits: ["Confidence Building", "Mock Sessions", "Expert Feedback"],
        features: [
            "Mock Interview Practice",
            "Personalized Feedback",
            "Technical Q&A Prep",
            "Behavioral Coaching",
            "Soft Skills Training",
            "Presentation Skills"
        ],
        process: [
            { title: "Assess", desc: "Evaluating readiness." },
            { title: "Coach", desc: "Mock interviews and training." },
            { title: "Feedback", desc: "Detailed improvement points." },
            { title: "Refine", desc: "Polishing interview techniques." }
        ],
        technologies: ["Video Conferencing", "Recording Tools", "Feedback Forms"]
    },

    // 4. Career Guidance & Counselling
    'career-guidance': {
        title: "Career Guidance & Counselling",
        subtitle: "Strategic Planning for Your Professional Journey",
        description: "We offer expert career counselling services for students, freshers, and experienced professionals. Our advisors assist with career path planning and conduct a detailed skill gap analysis to identify areas for improvement. Whether you need job transition support or are looking to advance in your current field, we provide the clear, strategic guidance necessary to make informed professional decisions.",
        image: consultImg, // consulting
        benefits: ["Clear Career Path", "Skill Gap Analysis", "Expert Advice"],
        features: [
            "Expert Career Counselling",
            "Career Path Planning",
            "Skill Gap Analysis",
            "Job Transition Support",
            "Growth Strategy",
            "Professional Decision Support"
        ],
        process: [
            { title: "Analyze", desc: "Skill and goal assessment." },
            { title: "Plan", desc: "Mapping the career path." },
            { title: "Advise", desc: "Strategic guidance sessions." },
            { title: "Support", desc: "Ongoing mentorship." }
        ],
        technologies: ["Career Assessments", "Market Analysis Tools", "Planning Frameworks"]
    },

    // 5. Fresher Hiring & Entry-Level Programs
    'fresher-hiring': {
        title: "Fresher Hiring & Entry-Level Programs",
        subtitle: "Launching Careers with Structured Opportunities",
        description: "Infolexus is dedicated to supporting graduates through exclusive fresher jobs and internship programs. We facilitate the campus-to-corporate transition by working with companies to create structured hiring processes. Our training-linked placement initiatives ensure that freshers gain valuable industry exposure and practical skills while meeting the specific talent needs of modern organizations.",
        image: staffImg, // Staffing
        benefits: ["Access to Exclusive Jobs", "Industry Exposure", "Structured Placement"],
        features: [
            "Exclusive Fresher Jobs",
            "Internship Programs",
            "Campus-to-Corporate Transition",
            "Structured Hiring Processes",
            "Training-Linked Placement",
            "Industry Exposure"
        ],
        process: [
            { title: "Connect", desc: "Linking graduates with companies." },
            { title: "Train", desc: "Skill development programs." },
            { title: "Intern", desc: "Practical industry experience." },
            { title: "Hire", desc: "Placement in permanent roles." }
        ],
        technologies: ["Learning Management Systems", "Hiring Portals", "Assessment Tools"]
    },

    // 6. Campus Recruitment & Training Support
    'campus-recruitment': {
        title: "Campus Recruitment & Training Support",
        subtitle: "Bridging the Gap Between Academia and Industry",
        description: "We partner with colleges and universities to organize successful campus placement drives and recruitment activities. Our services extend to pre-placement training, where we focus on aptitude test preparation and soft skills development. This comprehensive approach enables educational institutions to improve their placement records while providing employers with a ready pool of trained, high-quality talent.",
        image: onboardingImg, // Onboarding/Support
        benefits: ["Improved Placement Records", "Student Readiness", "Efficient Drives"],
        features: [
            "Campus Placement Drives",
            "Recruitment Activities",
            "Pre-Placement Training",
            "Aptitude Test Prep",
            "Soft Skills Development",
            "Placement Record Improvement"
        ],
        process: [
            { title: "Organize", desc: "Setting up drives and events." },
            { title: "Prepare", desc: "Training students for success." },
            { title: "Conduct", desc: "Managing recruitment activities." },
            { title: "Recruit", desc: "Facilitating hiring of talent." }
        ],
        technologies: ["Event Management Tools", "Aptitude Platforms", "Training Modules"]
    },

    // 7. Contract-to-Hire Solutions
    'contract-hiring': {
        title: "Contract-to-Hire Solutions",
        subtitle: "Flexible Staffing with Long-Term Potential",
        description: "Our contract-to-hire staffing model offers organizations flexible hiring solutions to onboard professionals for specific projects before offering permanent roles. This serves as an effective bridge, allowing businesses to assess candidate performance and cultural fit in real-time. It reduces hiring risks while providing candidates with a clear pathway from temporary staffing to long-term career growth.",
        image: payrollImg, // Payroll/Contract
        benefits: ["Flexible Staffing", "Performance Assessment", "Reduced Hiring Risks"],
        features: [
            "Flexible Hiring Solutions",
            "Project-Based Onboarding",
            "Real-Time Performance Assessment",
            "Cultural Fit Evaluation",
            "Reduced Hiring Risks",
            "Temporary to Permanent Pathway"
        ],
        process: [
            { title: "Onboard", desc: "Contractual hiring for projects." },
            { title: "Assess", desc: "Evaluating performance on the job." },
            { title: "Review", desc: "Determination of long-term fit." },
            { title: "Convert", desc: "Offering permanent employment." }
        ],
        technologies: ["Contract Management", "Performance Tracking", "HR Systems"]
    },

    // 8. Employee Engagement & Retention Management
    'employee-retention': {
        title: "Employee Engagement & Retention Management",
        subtitle: "Fostering a Productive and Committed Workforce",
        description: "We help organizations build a stable workforce through proven employee retention strategies and workforce engagement initiatives. Our HR consulting services focus on performance evaluation systems and constructive feedback mechanisms. By enhancing overall workplace satisfaction and motivation, we support businesses in reducing attrition and maintaining a productive, committed team.",
        image: performanceImg, // Performance
        benefits: ["Lower Attrition", "Higher Engagement", "Better Performance"],
        features: [
            "Retention Strategies",
            "Workforce Engagement",
            "Performance Evaluation Systems",
            "Feedback Mechanisms",
            "Workplace Satisfaction",
            "Attrition Reduction"
        ],
        process: [
            { title: "Evaluate", desc: "Assessing current engagement." },
            { title: "Plan", desc: "Designing retention strategies." },
            { title: "Implement", desc: "Rolling out engagement initiatives." },
            { title: "Sustain", desc: "Monitoring and adjusting for stability." }
        ],
        technologies: ["Engagement Surveys", "HR Analytics", "Feedback Tools"]
    }
};
