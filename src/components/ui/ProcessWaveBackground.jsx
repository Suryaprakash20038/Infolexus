import React, { useEffect, useRef, useState } from 'react';

const ProcessWaveBackground = () => {
    const svgRef = useRef(null);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        if (svgRef.current) {
            setWidth(svgRef.current.clientWidth);
        }
        const handleResize = () => {
            if (svgRef.current) {
                setWidth(svgRef.current.clientWidth);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Generate path data for a sine wave
    const generateWavePath = () => {
        if (width === 0) return "";

        // Settings
        const steps = 6;
        const amplitude = 30; // Height of the wave
        const frequency = (Math.PI * 2 * (steps - 1)) / width; // Adjust cycles to fit steps

        // We want the wave to pass through the specific center points of the 6 steps
        // The steps are distributed `grid-cols-6`. So centers are at (index + 0.5) * (width / 6)

        let path = `M 0 ${50}`; // Start middle-left

        // Create a smooth curve
        for (let x = 0; x <= width; x += 5) {
            // Simple Sine wave: y = amplitude * sin(frequency * x) + center_y
            // We want it to oscillate.
            // Let's rely on a simpler visual wave for now that just looks "techy"
            const y = 50 + amplitude * Math.sin(x * 0.02); // 0.02 is arbitrary freq
            path += ` L ${x} ${y}`;
        }

        return path;
    };

    // Better approach: Bezier curves connecting the step centers
    const generateConnectedPath = () => {
        if (width === 0) return "";
        const stepWidth = width / 6;
        const centers = Array.from({ length: 6 }).map((_, i) => ({
            x: stepWidth * i + stepWidth / 2,
            y: 50 + (i % 2 === 0 ? -20 : 20) // Alternate up and down slightly or just keep straight?
            // The prompt says "sine wave connecting multiple data points".
            // Let's make it a sine wave that generally aligns.
        }));

        let d = `M 0 50`;

        // Draw a sine wave that spans the width
        // A single cycle length approx stepWidth * 2
        for (let x = 0; x <= width; x++) {
            // y = A sin(Bx + C) + D
            // We want it to undulate.
            const y = 50 + 20 * Math.sin((x / width) * Math.PI * 5); // 2.5 cycles
            d += ` L ${x} ${y}`;
        }

        return d;
    };

    return (
        <div ref={svgRef} className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden hidden lg:block">
            <svg
                width="100%"
                height="100px"
                className="absolute top-[30px]"
                preserveAspectRatio="none"
            >
                <defs>
                    <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(6, 182, 212, 0)" />
                        <stop offset="20%" stopColor="rgba(6, 182, 212, 0.8)" />
                        <stop offset="50%" stopColor="rgba(59, 130, 246, 0.8)" />
                        <stop offset="80%" stopColor="rgba(6, 182, 212, 0.8)" />
                        <stop offset="100%" stopColor="rgba(6, 182, 212, 0)" />
                    </linearGradient>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="4" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                </defs>

                {/* The glowing wave line */}
                <path
                    d={generateConnectedPath()}
                    fill="none"
                    stroke="url(#waveGradient)"
                    strokeWidth="3"
                    filter="url(#glow)"
                />

                {/* Moving particle simulation on the path */}
                <circle r="4" fill="#a5f3fc">
                    <animateMotion
                        dur="3s"
                        repeatCount="indefinite"
                        path={generateConnectedPath()}
                    />
                </circle>
                <circle r="4" fill="#a5f3fc">
                    <animateMotion
                        dur="3s"
                        begin="1.5s"
                        repeatCount="indefinite"
                        path={generateConnectedPath()}
                    />
                </circle>
            </svg>
        </div>
    );
};

export default ProcessWaveBackground;
