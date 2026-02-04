'use client';
import { Red_Hat_Display, Tilt_Neon } from 'next/font/google';
import { LampDesk } from 'lucide-react';
import { useState, useEffect } from 'react';

const tiltNeon = Tilt_Neon({ 
    subsets: ['latin'],
    weight: ['400']
});

const redHatDisplay = Red_Hat_Display({
    subsets: ['latin'],
    weight: ['400', '600']
});

export default function HomePage({ lightOn, setLightOn }) {
    const [canTurnOff, setCanTurnOff] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            // Disable turning off if scrolled down more than 50px
            if (window.scrollY > 50) {
                setCanTurnOff(false);
            } else {
                setCanTurnOff(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleToggle = () => {
        if (lightOn && !canTurnOff) return;
        setLightOn(!lightOn);
    };

    return(
        <div id="home" className={`${redHatDisplay.className} relative flex flex-row items-center justify-center min-h-screen px-8 overflow-hidden bg-black`}>
            {/* Lamp Container - Absolute positioned to be large and on the left */}
            <div className="absolute left-[-10%] top-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
                
                <button 
                    onClick={handleToggle} 
                    disabled={lightOn && !canTurnOff}
                    className={`transition-opacity duration-300 ${lightOn && !canTurnOff ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
                    title={lightOn && !canTurnOff ? "Scroll to top to turn off" : (lightOn ? "Turn off" : "Turn on")}
                >
                    <LampDesk 
                        size={400} 
                        strokeWidth={1}
                        className={`absolute scale-x-[-1] left-350 bottom-5 rotate-345 transition-all duration-500 ${lightOn ? 'text-yellow-400 drop-shadow-[0_0_50px_rgba(250,204,21,0.6)]' : 'text-gray-800'}`}
                    />
                </button>
            </div>

            {/* Light Cone / Spotlight Effect */}
            {/* This simulates the light beam coming from the lamp head onto the text */}
            <div 
                className={`absolute left-[30%] top-[-5%] w-[900px] h-[800px] bg-gradient-radial from-yellow-100/10 via-yellow-400/5 to-transparent rotate-12 pointer-events-none transition-opacity duration-1000 ${lightOn ? 'opacity-100' : 'opacity-0'}`}
                style={{
                    background: 'conic-gradient(from 60deg at 0% 50%, rgba(253, 224, 71, 0.15) 0deg, transparent 60deg)',
                    filter: 'blur(40px)',
                    transformOrigin: '0% 50%'
                }}
            ></div>

            {/* Content in center - revealed when light is on */}
            <div className={`relative z-10 ml-64 text-left transition-all duration-1000 ${lightOn ? 'opacity-100' : 'opacity-10 blur-sm pointer-events-none'}`}>
                 <h2 className={`${tiltNeon.className} text-6xl md:text-8xl mb-6 text-white drop-shadow-lg`}>
                    Hi, I'm Rego.
                </h2>
                <div className="space-y-4 border-l-4 border-yellow-500/50 pl-6 my-8">
                    <p className="text-3xl text-gray-200 font-light">Computer Science Student</p>
                    <p className="text-xl text-gray-400">Ateneo de Davao University</p>
                </div>
                <p className={`text-2xl text-gray-300 italic font-light mt-12 transition-all duration-1000 delay-300 ${lightOn ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                    "one day or day one."
                </p>
            </div>

            <style jsx>{`
                .bg-gradient-radial {
                    background: radial-gradient(circle, var(--tw-gradient-stops));
                }
            `}</style>
        </div>
    );
}