import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Services = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Redirect to Home if anyone accidentally lands here
        navigate('/');
    }, [navigate]);

    return null;
};

export default Services;
