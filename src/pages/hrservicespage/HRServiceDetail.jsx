import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

import RecruitmentStaffing from './services/RecruitmentStaffing';
import OutboundTraining from './services/OutboundTraining';
import TeamBuilding from './services/TeamBuilding';
import CustomizedDrives from './services/CustomizedDrives';
import HRDigitalMarketing from './services/HRDigitalMarketing';
import CollegePlacements from './services/CollegePlacements';
import CollegeTrainings from './services/CollegeTrainings';
import JobSeekerPlacements from './services/JobSeekerPlacements';
import SkillDevelopment from './services/SkillDevelopment';


const HRServiceDetail = () => {
    const { id } = useParams();

    const HRComponents = {
        'hr-recruitment': RecruitmentStaffing,
        'hr-training': OutboundTraining,
        'hr-teambuilding': TeamBuilding,
        'hr-drives': CustomizedDrives,
        'hr-marketing': HRDigitalMarketing,
        'hr-college-placements': CollegePlacements,
        'hr-college-trainings': CollegeTrainings,
        'hr-job-placements': JobSeekerPlacements,
        'hr-skill-dev': SkillDevelopment
    };

    const SpecificComponent = HRComponents[id];

    if (!SpecificComponent) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Service Not Found</h2>
                    <p className="text-slate-500 mb-8">The requested HR service "{id}" does not exist.</p>
                    <Link to="/hr-services" className="text-blue-600 hover:underline flex items-center gap-2 justify-center">
                        <ArrowLeft size={20} /> Back to HR Services
                    </Link>
                </div>
            </div>
        );
    }

    return <SpecificComponent />;
};

export default HRServiceDetail;
