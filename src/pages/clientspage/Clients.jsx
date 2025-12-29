import React, { useEffect } from 'react';
import ClientsHero from './sections/ClientsHero';
import ClientsProjectShowcase from './sections/ClientsProjectShowcase';
import ClientImpact from './sections/ClientImpact';
import EngagementModels from './sections/EngagementModels';
import GlobalFootprint from './sections/GlobalFootprint';
import IndustryFocus from './sections/IndustryFocus';

const Clients = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-brand-dark overflow-x-hidden">
            <ClientsHero />
            <ClientImpact />
            <ClientsProjectShowcase />
            <EngagementModels />
            <GlobalFootprint />
            <IndustryFocus />
        </div>
    );
};

export default Clients;
