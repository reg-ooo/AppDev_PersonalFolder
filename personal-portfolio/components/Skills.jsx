'use client';
import { Tilt_Neon, Red_Hat_Display } from 'next/font/google';
import { Github } from 'lucide-react';

const tiltNeon = Tilt_Neon({ 
    subsets: ['latin'],
    weight: ['400']
});

const redHatDisplay = Red_Hat_Display({
    subsets: ['latin'],
    weight: ['400', '600']
});

export default function Skills() {
    return (
        <div id="skills" className={`${redHatDisplay.className} min-h-screen bg-black text-white p-8 flex flex-col items-center justify-center`}>
            <h1 className={`${tiltNeon.className} text-5xl mb-12 text-center  bg-blue-500 bg-clip-text text-transparent`}>
                Skills & Experience
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
                {/* Panel 1: Projects */}
                <div className="bg-gray-900/50 border border-gray-800 rounded-3xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] flex flex-col">
                    <h2 className={`${tiltNeon.className} text-3xl mb-8 text-blue-400 border-b border-gray-800 pb-4`}>Projects</h2>
                    <ul className="space-y-6 flex-grow">
                        <li className="group cursor-pointer">
                            <div className="flex justify-between items-center mb-1">
                                <h3 className="font-semibold text-xl text-white group-hover:text-blue-300 transition-colors">Payday Bank</h3>
                                <span className="text-xs px-2 py-1 bg-blue-900/30 text-blue-300 rounded-full">OOP</span>
                            </div>
                            <p className="text-gray-400 text-sm mb-2">Java</p>
                            <p className="text-gray-500 text-sm mb-3">A banking application that is similar to Gcash. This application allows the user to transfer money to other users, check balances, and pay their bills.</p>
                            <a href="https://github.com/reg-ooo/OOP_Payday" target="_blank" rel="noopener noreferrer" className="inline-block text-gray-400 hover:text-white transition-colors" onClick={(e) => e.stopPropagation()}>
                                <Github size={24} />
                            </a>
                        </li>
                        <li className="group cursor-pointer">
                            <div className="flex justify-between items-center mb-1">
                                <h3 className="font-semibold text-xl text-white group-hover:text-blue-300 transition-colors">Calculator</h3>
                                <span className="text-xs px-2 py-1 bg-gray-800 text-gray-400 rounded-full">ITC</span>
                            </div>
                            <p className="text-gray-400 text-sm mb-2">Web Development</p>
                            <p className="text-gray-500 text-sm mb-3">A calculator that converts celcius to farenheit and vice versa. Calculates pay roll including tax and gets the factors, sum, and average of numbers.</p>
                            <a href="https://github.com/reg-ooo/ITC_Final" target="_blank" rel="noopener noreferrer" className="inline-block text-gray-400 hover:text-white transition-colors" onClick={(e) => e.stopPropagation()}>
                                <Github size={24} />
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Panel 2: Languages */}
                <div className="bg-gray-900/50 border border-gray-800 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)]">
                    <h2 className={`${tiltNeon.className} text-3xl mb-8 text-purple-400 border-b border-gray-800 pb-4`}>Languages</h2>
                    <div className="space-y-4">
                        <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700/50">
                            <div className="flex justify-between mb-2">
                                <span className="font-medium text-gray-200">JavaScript</span>
                                <span className="text-purple-400">15%</span>
                            </div>
                            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                                <div className="h-full bg-purple-500 w-[15%]"></div>
                            </div>
                        </div>
                        <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700/50">
                            <div className="flex justify-between mb-2">
                                <span className="font-medium text-gray-200">Python</span>
                                <span className="text-purple-400">15%</span>
                            </div>
                            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                                <div className="h-full bg-purple-500 w-[15%]"></div>
                            </div>
                        </div>
                        <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700/50">
                            <div className="flex justify-between mb-2">
                                <span className="font-medium text-gray-200">Java</span>
                                <span className="text-purple-400">55%</span>
                            </div>
                            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                                <div className="h-full bg-purple-500 w-[55%]"></div>
                            </div>
                        </div>
                        <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700/50">
                            <div className="flex justify-between mb-2">
                                <span className="font-medium text-gray-200">HTML / CSS</span>
                                <span className="text-purple-400">30%</span>
                            </div>
                            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                                <div className="h-full bg-purple-500 w-[30%]"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Panel 3: Tools & Frameworks */}
                <div className="bg-gray-900/50 border border-gray-800 rounded-3xl p-8 hover:border-pink-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(236,72,153,0.1)]">
                    <h2 className={`${tiltNeon.className} text-3xl mb-8 text-pink-400 border-b border-gray-800 pb-4`}>Tools</h2>
                    
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-sm text-gray-500 mb-4 uppercase tracking-widest font-semibold">Frameworks & Libraries</h3>
                            <div className="flex flex-wrap gap-3">
                                {['React', 'Next.js', 'Tailwind CSS', 'Node.js', 'Express'].map((item) => (
                                    <span key={item} className="px-3 py-2 bg-gray-800/50 hover:bg-gray-800 rounded-lg text-sm text-pink-300 border border-gray-700 transition-colors cursor-default">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                        
                        <div>
                            <h3 className="text-sm text-gray-500 mb-4 uppercase tracking-widest font-semibold">Dev Tools</h3>
                            <div className="flex flex-wrap gap-3">
                                {['Git & GitHub', 'VS Code', 'Postman', 'Vercel'].map((item) => (
                                    <span key={item} className="px-3 py-2 bg-gray-800/50 hover:bg-gray-800 rounded-lg text-sm text-pink-300 border border-gray-700 transition-colors cursor-default">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-sm text-gray-500 mb-4 uppercase tracking-widest font-semibold">Databases</h3>
                            <div className="flex flex-wrap gap-3">
                                {['MongoDB', 'MySQL'].map((item) => (
                                    <span key={item} className="px-3 py-2 bg-gray-800/50 hover:bg-gray-800 rounded-lg text-sm text-pink-300 border border-gray-700 transition-colors cursor-default">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
