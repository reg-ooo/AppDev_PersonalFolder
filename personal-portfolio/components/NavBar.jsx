'use client';
import { useState, useEffect, useRef } from 'react';

export default function NavBar({ visible = false }) {
    const [activePage, setActivePage] = useState('home');
    const isManualScroll = useRef(false);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            isManualScroll.current = true;
            // element.scrollIntoView({ behavior: 'smooth' });
            
            // Adjust this offset to control where the scroll lands
            // -100 pushes the content down (good for fixed headers)
            // 0 aligns the top of the section with the top of the screen
            const yOffset = -40; 
            const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
            
            window.scrollTo({top: y, behavior: 'smooth'});

            setTimeout(() => {
                isManualScroll.current = false;
            }, 1000);
        }
        setActivePage(sectionId);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (isManualScroll.current) return;

            const sections = ['home', 'skills', 'contact'];
            const scrollPosition = window.scrollY + window.innerHeight / 2; // Trigger when middle of viewport

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActivePage(section);
                        break; 
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`flex flex-row gap-8 justify-center p-4 bg-black/80 backdrop-blur-md text-white border border-slate-800 fixed left-1/2 -translate-x-1/2 rounded-full z-50 shadow-lg shadow-blue-900/20 transition-all duration-1000 ease-in-out ${visible ? 'top-4 opacity-100' : '-top-24 opacity-0'}`}>
            <div onClick={() => scrollToSection('home')} 
            className={`cursor-pointer relative transition-colors duration-300 px-4 ${activePage === 'home' ? 'active-link text-white' : 'text-slate-400 hover:text-white'}`}>About</div>
            <div onClick={() => scrollToSection('skills')} 
            className={`cursor-pointer relative transition-colors duration-300 px-4 ${activePage === 'skills' ? 'active-link text-white' : 'text-slate-400 hover:text-white'}`}>Skills</div>
            <div onClick={() => scrollToSection('contact')} 
            className={`cursor-pointer relative transition-colors duration-300 px-4 ${activePage === 'contact' ? 'active-link text-white' : 'text-slate-400 hover:text-white'}`}>Contact</div>
        </div>
    );
}