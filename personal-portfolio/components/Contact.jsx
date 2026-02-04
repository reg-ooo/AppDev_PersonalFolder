'use client';
import { Tilt_Neon, Red_Hat_Display } from 'next/font/google';
import { Facebook, Instagram, Github } from 'lucide-react';
import Link from 'next/link';

const tiltNeon = Tilt_Neon({ 
    subsets: ['latin'],
    weight: ['400']
});

const redHatDisplay = Red_Hat_Display({
    subsets: ['latin'],
    weight: ['400', '600']
});

export default function Contact() {
    return (
        <div id="contact" className={`${redHatDisplay.className} min-h-screen bg-black text-white flex flex-col items-center justify-center p-8`}>
            <div className="max-w-2xl w-full text-center space-y-12">
                <h2 className={`${tiltNeon.className} text-5xl md:text-6xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent`}>
                    Contact Me
                </h2>
                
                <p className="text-slate-400 text-lg md:text-xl font-light tracking-wide">
                    Feel free to reach out through any of these platforms.
                </p>

                <div className="flex flex-row gap-12 justify-center items-center">
                    {/* GitHub */}
                    <Link href="https://github.com/reg-ooo" target="_blank" className="group flex flex-col items-center gap-3 transition-transform hover:scale-110">
                        <div className="p-4 rounded-full border border-slate-800 bg-black/50 group-hover:border-purple-500/50 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300">
                            <Github size={32} className="text-slate-300 group-hover:text-purple-500 transition-colors" />
                        </div>
                        <span className="text-sm text-slate-500 group-hover:text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-8">GitHub</span>
                    </Link>

                    {/* Instagram */}
                    <Link href="https://instagram.com/sregoooo" target="_blank" className="group flex flex-col items-center gap-3 transition-transform hover:scale-110">
                        <div className="p-4 rounded-full border border-slate-800 bg-black/50 group-hover:border-pink-500/50 group-hover:shadow-[0_0_20px_rgba(236,72,153,0.3)] transition-all duration-300">
                            <Instagram size={32} className="text-slate-300 group-hover:text-pink-500 transition-colors" />
                        </div>
                        <span className="text-sm text-slate-500 group-hover:text-pink-400 opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-8">Instagram</span>
                    </Link>

                    {/* Facebook */}
                    <Link href="https://facebook.com/regooo2006" target="_blank" className="group flex flex-col items-center gap-3 transition-transform hover:scale-110">
                        <div className="p-4 rounded-full border border-slate-800 bg-black/50 group-hover:border-blue-500/50 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300">
                            <Facebook size={32} className="text-slate-300 group-hover:text-blue-500 transition-colors" />
                        </div>
                        <span className="text-sm text-slate-500 group-hover:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-8">Facebook</span>
                    </Link>
                </div>

                <div className="mt-24 pt-12 border-t border-slate-900 w-full">
                    <p className="text-slate-600 text-sm"></p>
                </div>
            </div>
        </div>
    );
}
