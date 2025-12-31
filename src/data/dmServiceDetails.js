import seoImg from '../assets/digital marketing/seo.jpeg';
import googleAdsImg from '../assets/digital marketing/google ads.jpeg';
import metaAdsImg from '../assets/digital marketing/meta ads .jpeg';
import socialImg from '../assets/digital marketing/socialmedia.jpeg';
import contentImg from '../assets/digital marketing/content marketing.jpeg';
import emailImg from '../assets/digital marketing/emailmarketing.jpeg';
import webOptImg from '../assets/digital marketing/weboptimazation.jpeg';
import analyticsImg from '../assets/digital marketing/analatics.jpeg';
import videoImg from '../assets/digital marketing/videoshooting .jpeg';

export const dmServiceDetails = {
    'seo': {
        title: "Search Engine Optimization (SEO)",
        subtitle: "Rank Higher on Google and Drive Sustainable Organic Traffic.",
        description: "Visibility is the key to online success. We go beyond basic keywords, performing deep technical audits and extensive research to understand your customers. By optimizing on-page content and building quality backlinks, we help you climb rankings and drive steady, organic traffic, reducing reliance on paid ads.",
        features: [
            "Comprehensive Website Audit",
            "Keyword Research & Strategy",
            "On-Page Optimization (Meta tags, Headers, Content)",
            "Technical SEO (Site Speed, Mobile-Friendliness)",
            "Link Building & Off-Page Strategy",
            "Local SEO for Geographic Targeting"
        ],
        image: seoImg,
        benefits: [
            "Increase organic visibility and brand awareness",
            "Drive high-quality, targeted traffic",
            "Cost-effective long-term marketing strategy"
        ],
        process: [
            { title: "Audit", desc: "Analyzing your current site health and competitors." },
            { title: "Strategy", desc: "Identifying high-value keywords and content gaps." },
            { title: "Optimization", desc: "Implementing technical and content fixes." },
            { title: "Growth", desc: "Building authority through backlinks and content." }
        ],
        technologies: ["Google Analytics", "SEMrush", "WordPress", "Search Console"]
    },
    'google-ads': {
        title: "Google Ads (PPC)",
        subtitle: "Capture High-Intent Leads When It Matters Most.",
        description: "Be there exactly when customers are searching for you. We manage high-performance Google Ads campaigns that target users with high intent. By optimizing keywords and bidding strategies, we drive immediate traffic and lower your cost-per-acquisition, ensuring you get the most out of every ad spend.",
        features: [
            "Search Network Campaigns",
            "Display & Video Advertising",
            "Shopping Ads for E-commerce",
            "Keyword Research & Bidding",
            "Negative Keyword Optimization",
            "Conversion Tracking Setup"
        ],
        image: googleAdsImg,
        benefits: [
            "Immediate visibility on search engines",
            "Targets users ready to buy",
            "Pay only for clicks, not impressions"
        ],
        process: [
            { title: "Research", desc: "Identifying high-value keywords." },
            { title: "Setup", desc: "Structuring ad groups and campaigns." },
            { title: "Optimize", desc: "Refining bids and negative keywords." },
            { title: "Scale", desc: "Increasing budget on winning ads." }
        ],
        technologies: ["Google Ads", "Google Analytics", "Looker", "Tag Manager"]
    },
    'meta-ads': {
        title: "Meta Ads (Facebook & Instagram)",
        subtitle: "Target Audiences with Precision and Visual Impact.",
        description: "Reach your ideal customers where they spend their time. We specialize in visually engaging Meta Ads that target users based on demographics, interests, and behaviors. Through rigorous A/B testing of creatives, we build brand awareness and drive conversions on Facebook and Instagram.",
        features: [
            "Audience Segmentation & Targeting",
            "Creative A/B Testing",
            "Retargeting Campaigns",
            "Instagram Reels & Story Ads",
            "Catalog Sales & Dynamic Ads",
            "Lead Gen Forms Integration"
        ],
        image: metaAdsImg,
        benefits: [
            "Highly visual brand storytelling",
            "Precise demographic targeting",
            "Effective for retargeting past visitors"
        ],
        process: [
            { title: "Targeting", desc: "Defining ideal customer personas." },
            { title: "Creative", desc: "Designing scroll-stopping visuals." },
            { title: "Launch", desc: "Deploying campaigns across placements." },
            { title: "Refine", desc: "Optimizing for highest ROAS." }
        ],
        technologies: ["Meta Ads", "Canva", "Pixel Helper", "CapCut"]
    },
    'smm': {
        title: "Social Media Marketing",
        subtitle: "Connect, Engage, and Grow Your Brand Audience.",
        description: "Your social media presence is often your first impression. We build strategies tailored to your goals, from stunning graphics to engaging captions across all major platforms. By managing communities and fostering genuine connections, we turn casual followers into loyal brand advocates.",
        features: [
            "Social Media Strategy Development",
            "Content Calendar Creation & Publishing",
            "Community Management & Engagement",
            "Paid Social Advertising (Meta, LinkedIn)",
            "Influencer Marketing Collaboration",
            "Brand Reputation Management"
        ],
        image: socialImg,
        benefits: [
            "Direct engagement with customers",
            "Increased brand loyalty and trust",
            "Viral potential for content"
        ],
        process: [
            { title: "Plan", desc: "Defining voice, tone, and platforms." },
            { title: "Create", desc: "Designing visuals and writing captions." },
            { title: "Engage", desc: "Responding to comments and messages." },
            { title: "Grow", desc: "Analyzing metrics to improve reach." }
        ],
        technologies: ["Meta Ads", "LinkedIn", "Canva", "Buffer"]
    },
    'content': {
        title: "Content Marketing",
        subtitle: "Valuable Content that Educates, Engages, and Converts.",
        description: "Content is the strategic foundation of your digital identity. We create high-value blogs, articles, and copy that solve audience problems. consistently delivering quality information establishes your brand as a thought leader, builds trust, and supports SEO by guiding visitors naturally through the sales funnel.",
        features: [
            "Blog Post Writing & Management",
            "Whitepapers & E-books",
            "Video Scripting & Production",
            "Infographics & Visual Content",
            "Case Studies & Success Stories",
            "Content Distribution Strategy"
        ],
        image: contentImg,
        benefits: [
            "Builds authority and credibility",
            "Supports SEO efforts",
            "Nurtures leads through the funnel"
        ],
        process: [
            { title: "Research", desc: "Understanding audience interests." },
            { title: "Draft", desc: "Creating compelling narratives." },
            { title: "Edit", desc: "Refining for clarity and SEO." },
            { title: "Publish", desc: "Distributing across channels." }
        ],
        technologies: ["WordPress", "HubSpot", "Google Analytics", "Canva"]
    },
    'email': {
        title: "Email Marketing",
        subtitle: "Personalized Automation to Nurture Leads and Retain Customers.",
        description: "Email remains the highest ROI channel. We replace generic blasts with segmented, personalized campaigns and automated flows. By analyzing engagement and refining strategies, we ensure your messages are read and acted upon, driving repeat business and customer loyalty.",
        features: [
            "List Building & Segmentation",
            "Newsletter Design & Creation",
            "Automated Drip Campaigns",
            "Cart Abandonment Flows",
            "Personalization & Dynamic Content",
            "A/B Testing Subject Lines"
        ],
        image: emailImg,
        benefits: [
            "High ROI compared to other channels",
            "Direct communication line to customers",
            "Automated customer lifecycle management"
        ],
        process: [
            { title: "Segment", desc: "Categorizing subscribers by behavior." },
            { title: "Design", desc: "Creating responsive email templates." },
            { title: "Send", desc: "Scheduling campaigns for optimal times." },
            { title: "Analyze", desc: "Tracking open and click-through rates." }
        ],
        technologies: ["Mailchimp", "HubSpot", "Salesforce", "Canva"]
    },
    'web-optimization': {
        title: "Web Optimization",
        subtitle: "Faster Performance for a Seamless and Superior User Experience.",
        description: "A slow website drives customers away. We optimize your site's technical performance, ensuring lightning-fast load speeds. Beyond speed, we enhance User Experience (UX) and focus on Conversion Rate Optimization (CRO) to provide visitors a frictionless path to becoming paying customers.",
        features: [
            "Site Speed Optimization (Core Web Vitals)",
            "Mobile Responsiveness & UX Tuning",
            "Accessibility Compliance (WCAG)",
            "Technical Debt Reduction",
            "Caching & CDN Configuration",
            "Database Optimization"
        ],
        image: webOptImg,
        benefits: [
            "Lower bounce rates",
            "Better search engine rankings",
            "Improved user satisfaction"
        ],
        process: [
            { title: "Audit", desc: "Measuring baseline performance metrics." },
            { title: "Fix", desc: "Addressing critical technical issues." },
            { title: "Enhance", desc: "Improving visual stability and interactivity." },
            { title: "Monitor", desc: "Continuous performance tracking." }
        ],
        technologies: ["Lighthouse", "GTmetrix", "React", "Next.js"]
    },
    'analytics': {
        title: "Analytics & Reporting",
        subtitle: "Actionable Insights and Transparent Data for Smarter Decisions.",
        description: "Marketing without data is guessing. We set up advanced tracking with tools like GA4 to monitor every interaction. Instead of confusing numbers, we provide clear reports and actionable insights, allowing us to pivot strategies and ensure your budget is used effectively.",
        features: [
            "Google Analytics 4 (GA4) Setup",
            "Conversion Funnel Analysis",
            "Heatmap & User Behavior Tracking",
            "A/B Testing Landing Pages",
            "Custom Reporting Dashboards",
            "ROI Attribution Modeling"
        ],
        image: analyticsImg,
        benefits: [
            "Clear visibility into marketing performance",
            "Improved website conversion rates",
            "Data-driven budget allocation"
        ],
        process: [
            { title: "Track", desc: "Implementing tags and events." },
            { title: "Analyze", desc: "Identifying drop-off points." },
            { title: "Test", desc: "Running experiments to improve UX." },
            { title: "Optimize", desc: "Implementing winning variations." }
        ],
        technologies: ["Google Analytics", "Looker", "Tableau", "Hotjar"]
    },
    'video': {
        title: "Video Shoots & Editing",
        subtitle: "Dynamic Visual Storytelling for the Modern Digital Era.",
        description: "Video is the only medium that consistently stops the scroll. We handle end-to-end production, from concept to editing. Our team uses professional equipment and sharp editing techniques to create visually compelling stories that evoke emotion and communicate your brand message clearly.",
        features: [
            "Concept Development & Scriptwriting",
            "Professional Video Shooting (4K)",
            "Post-Production Editing & VFX",
            "Motion Graphics & Animation",
            "Sound Design & Colour Grading",
            "Social Media Shorts & Reels"
        ],
        image: videoImg,
        benefits: [
            "Highest engagement rate of any media",
            "Complex ideas explained simply",
            "Stronger emotional connection with brand"
        ],
        process: [
            { title: "Concept", desc: "Brainstorming and storyboarding." },
            { title: "Shoot", desc: "Capturing high-quality footage." },
            { title: "Edit", desc: "Assembling the story with professional cuts." },
            { title: "Deliver", desc: "Formatting for various platforms." }
        ],
        technologies: ["Adobe Premiere", "After Effects", "DaVinci Resolve", "Cinema 4D"]
    }
};
