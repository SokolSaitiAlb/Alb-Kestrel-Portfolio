'use client';

import { motion, AnimatePresence } from 'motion/react';
import {
  Youtube,
  Github,
  Linkedin,
  Terminal,
  Cpu,
  Activity,
  Database,
  CircuitBoard,
  Code2,
  ExternalLink,
  PlayCircle,
  MonitorPlay,
  Play,
  BookOpen,
  User,
  Mail,
  Send,
  ArrowRight,
  ArrowUp,
  Sun,
  Moon,
  Users
} from 'lucide-react';

import React, { useEffect, useRef, useState } from 'react';

const playlists = [
  { title: 'FragPunk in Linux', abbr: 'FP', color: 'red', url: 'https://youtube.com/playlist?list=PLjGx7Xf2ZI7OykfxO_aYXr8EhzanH9Gv1' },
  { title: 'Albkestrel Bloodstrike Gameplays', abbr: 'BS', color: 'blue', url: 'https://youtube.com/playlist?list=PLjGx7Xf2ZI7Nju_X7JNI7mISNLk7lgY6Z' },
  { title: 'Alb Kestrel Minecraft', abbr: 'MC', color: 'green', url: 'https://youtube.com/playlist?list=PLjGx7Xf2ZI7PGtl8VhCbydNMH6ylYyTQp' },
  { title: 'Wuwa in Linux', abbr: 'WW', color: 'orange', url: 'https://youtube.com/playlist?list=PLjGx7Xf2ZI7MDl3o4BK8-XIyOgIPBXJZb' },
  { title: 'Sons of the Forest in Linux', abbr: 'SF', color: 'indigo', url: 'https://youtube.com/playlist?list=PLjGx7Xf2ZI7MKCH51eHAKes6Ti8287bWK' }
];

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPerformanceMode, setIsPerformanceMode] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [subscribers, setSubscribers] = useState<string[]>([]);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [showToast, setShowToast] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail && !subscribers.includes(newsletterEmail)) {
      setSubscribers(prev => [...prev, newsletterEmail]);
      setNewsletterEmail('');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  useEffect(() => {
    // Initial theme check
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (saved === 'dark' || (!saved && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else if (saved === 'light' || (!saved && !prefersDark)) {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        containerRef.current.style.setProperty('--mouse-x', `${e.clientX}px`);
        containerRef.current.style.setProperty('--mouse-y', `${e.clientY}px`);
      }
    };
    
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleTheme = () => {
    setIsDark(prev => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return next;
    });
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-slate-50 dark:bg-[#020617] text-slate-900 dark:text-slate-100 flex flex-col p-4 sm:p-8 gap-8 overflow-x-hidden font-sans relative group/app">
      {/* Dynamic Mouse Glow that appears when hovering cards */}
      <div 
        className="pointer-events-none fixed inset-0 z-[-5] opacity-0 group-has-[.glass-card:hover]/app:opacity-100 transition-opacity duration-500 will-change-transform"
        style={{
          background: 'radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(129, 140, 248, 0.15), transparent 40%)'
        }}
      />
      {/* Animated Mesh Gradient Background Simulation */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-purple-400/30 dark:bg-purple-900/20 blur-[120px]" 
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-blue-400/30 dark:bg-blue-900/20 blur-[120px]" 
        />
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, -50, 0], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[40%] left-[30%] w-[40vw] h-[40vw] rounded-full bg-indigo-400/20 dark:bg-indigo-900/10 blur-[100px]" 
        />
      </div>

      <div className="max-w-7xl mx-auto w-full flex flex-col gap-8 flex-1">
        {/* Top Navigation / Hero Identity */}
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row justify-between items-center bg-white/60 dark:bg-white/5 backdrop-blur-2xl border border-black/5 dark:border-white/10 p-6 rounded-3xl shadow-2xl gap-6"
        >
          <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-xl font-bold shadow-lg shadow-indigo-500/20 shrink-0 overflow-hidden relative border border-white/20">
                <img src="https://github.com/SokolSaitiAlb.png" alt="Alb Kestrel" className="w-full h-full object-cover relative z-10" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                <span className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white z-0">AK</span>
              </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-black dark:text-white">Sokol Saiti <span className="text-indigo-600 dark:text-indigo-400 font-medium whitespace-nowrap">(Alb Kestrel)</span></h1>
              <p className="text-[10px] sm:text-xs text-slate-600 dark:text-slate-400 font-medium uppercase tracking-[0.2em] mt-1">Content Creator & DevOps Aspiring Engineer</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-3 rounded-xl bg-white/60 dark:bg-white/5 border border-black/5 dark:border-white/10 hover:bg-white/80 dark:hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun className="w-5 h-5 text-amber-500" /> : <Moon className="w-5 h-5 text-indigo-600" />}
            </button>
            <a href="https://youtube.com/@albkestrelytofficial" target="_blank" rel="noopener noreferrer" className="px-4 py-3 sm:p-3 rounded-xl bg-white/60 dark:bg-white/5 border border-black/5 dark:border-white/10 hover:bg-white/80 dark:hover:bg-white/10 transition-colors flex items-center gap-2 text-sm font-medium">
              <Youtube className="w-5 h-5 text-red-500" />
              <span className="hidden sm:inline">YouTube</span>
            </a>
            <a href="https://github.com/SokolSaitiAlb" target="_blank" rel="noopener noreferrer" className="px-4 py-3 sm:p-3 rounded-xl bg-white/60 dark:bg-white/5 border border-black/5 dark:border-white/10 hover:bg-white/80 dark:hover:bg-white/10 transition-colors flex items-center gap-2 text-sm font-medium">
              <Github className="w-5 h-5 text-slate-800 dark:text-white" />
              <span className="hidden sm:inline text-slate-800 dark:text-white">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/sokol-saiti-957b84346" target="_blank" rel="noopener noreferrer" className="px-4 py-3 sm:p-3 rounded-xl bg-white/60 dark:bg-white/5 border border-black/5 dark:border-white/10 hover:bg-white/80 dark:hover:bg-white/10 transition-colors flex items-center gap-2 text-sm font-medium">
              <Linkedin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
          </div>
        </motion.header>

        {/* Main Content Grid */}
        <main className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1">
          
          {/* Left Panel: Hero Pitch & GitHub */}
          <motion.section 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4 flex flex-col gap-6"
          >
            <div className="glass-card flex-1 bg-white/60 dark:bg-white/5 backdrop-blur-2xl border border-black/5 dark:border-white/10 p-8 rounded-[2.5rem] flex flex-col justify-center relative group">
              <div className="absolute top-8 right-8 text-indigo-500/20 group-hover:text-indigo-500/40 transition-colors">
                 <Terminal className="w-12 h-12" />
              </div>
              <h2 className="text-3xl font-light leading-tight mb-6">Architecting <span className="font-semibold text-black dark:text-white">High-Performance</span> Linux Environments</h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
                Testing, benchmarking, and optimizing Linux gaming performance to prove Windows is holding your hardware back.
              </p>
              
              <div className="p-6 bg-indigo-500/5 dark:bg-indigo-500/10 border border-indigo-500/10 dark:border-indigo-500/20 rounded-2xl mb-6">
                <p className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-3">Interests & Expertise</p>
                <div className="flex gap-2 flex-wrap mb-4">
                   {['DevOps', 'Arch Linux', 'Gaming Scripts', 'Kernel Boost', 'Performance Tooling'].map(badge => (
                     <span key={badge} className="px-3 py-1.5 text-[11px] font-medium tracking-wide uppercase rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 border border-indigo-500/20">
                       {badge}
                     </span>
                   ))}
                 </div>
              </div>

              <a href="https://github.com/SokolSaitiAlb" target="_blank" rel="noopener noreferrer" className="block p-5 rounded-2xl bg-white/40 dark:bg-black/20 border border-black/5 dark:border-white/10 hover:border-black/10 dark:hover:border-white/20 transition-colors group/link mt-auto">
                <div className="flex items-start justify-between">
                  <div className="space-y-2 pr-4">
                    <div className="flex items-center gap-2 text-black dark:text-white">
                      <Code2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                      <span className="font-medium text-sm">Open to Collaborate</span>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-snug italic">
                      &quot;Open to collaborate on Arch Linux gaming scripts, kernel boost, and performance tooling.&quot;
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover/link:text-slate-800 dark:group-hover/link:text-white transition-colors flex-shrink-0 mt-1" />
                </div>
              </a>
            </div>
          </motion.section>

          {/* Center/Right Panel: Stats & Playlists */}
          <motion.section 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-8 grid grid-rows-1 lg:grid-rows-2 gap-6"
          >
            
            {/* Top Row: Test Bench Dashboard */}
            <div className="glass-card bg-white/60 dark:bg-white/5 backdrop-blur-2xl border border-black/5 dark:border-white/10 p-8 rounded-[2.5rem] flex flex-col justify-between">
              <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center mb-6 gap-4 w-full">
                <h3 className="text-xl font-semibold flex items-center gap-3 shrink-0">
                  <span className={`w-2 h-2 rounded-full animate-pulse transition-colors duration-500 ${isPerformanceMode ? 'bg-amber-500' : 'bg-green-500'}`}></span>
                  The Test Bench
                </h3>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 shrink-0 sm:w-auto">
                  <div className="flex items-center gap-1 bg-black/5 dark:bg-black/30 p-1 rounded-full border border-black/5 dark:border-white/5 backdrop-blur-md">
                    <button 
                      onClick={() => setIsPerformanceMode(false)}
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${!isPerformanceMode ? 'bg-white/60 dark:bg-white/10 text-green-600 dark:text-green-400 shadow-[inset_0_1px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_1px_rgba(255,255,255,0.1)]' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'}`}
                    >
                      Stability Mode
                    </button>
                    <button 
                      onClick={() => setIsPerformanceMode(true)}
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${isPerformanceMode ? 'bg-amber-100 dark:bg-amber-500/20 text-amber-600 dark:text-amber-500 shadow-[inset_0_1px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_1px_rgba(255,255,255,0.1)]' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'}`}
                    >
                      Performance Mode
                    </button>
                  </div>
                  <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold border uppercase tracking-widest shrink-0 transition-colors duration-500 ${isPerformanceMode ? 'bg-amber-500/10 text-amber-600 dark:text-amber-500 border-amber-500/20' : 'bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20'}`}>
                    {isPerformanceMode ? 'Performance Active' : 'System Stable'}
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {/* System Specs */}
                <div className="bg-white/40 dark:bg-white/5 border border-black/5 dark:border-white/10 p-5 rounded-2xl flex flex-col gap-3">
                  <p className="text-xs text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-widest flex items-center gap-2 mb-1">
                    <Terminal className="w-4 h-4"/> System Specifications
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-2"><span className="text-indigo-500 mt-0.5">•</span> <span><strong className="text-black dark:text-white">OS:</strong> CachyOS (KDE Plasma) [Running since March 2025]</span></li>
                    <li className="flex items-start gap-2"><span className="text-indigo-500 mt-0.5">•</span> <span><strong className="text-black dark:text-white">Kernel:</strong> linux-cachyos-bore</span></li>
                    <li className="flex items-start gap-2"><span className="text-indigo-500 mt-0.5">•</span> <span><strong className="text-black dark:text-white">CPU Scheduler:</strong> scx_bpfland (Low Latency Mode)</span></li>
                    <li className="flex items-start gap-2"><span className="text-indigo-500 mt-0.5">•</span> <span><strong className="text-black dark:text-white">Scheduler Flags:</strong> -m performance -w</span></li>
                    <li className="flex items-start gap-2"><span className="text-indigo-500 mt-0.5">•</span> <span><strong className="text-black dark:text-white">Bootloader:</strong> Limine Boot Manager</span></li>
                    <li className="flex items-start gap-2"><span className="text-indigo-500 mt-0.5">•</span> <span><strong className="text-black dark:text-white">File System:</strong> BTRFS (Main NVMe drive)</span></li>
                  </ul>
                </div>

                {/* Hardware Components */}
                <div className="bg-white/40 dark:bg-white/5 border border-black/5 dark:border-white/10 p-5 rounded-2xl flex flex-col gap-3">
                  <p className="text-xs text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-widest flex items-center gap-2 mb-1">
                    <Cpu className="w-4 h-4"/> Hardware Component List
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-2"><span className="text-indigo-500 mt-0.5">•</span> <span><strong className="text-black dark:text-white">CPU:</strong> Intel Core i5-12400F (Tower Air Ventilation)</span></li>
                    <li className="flex items-start gap-2"><span className="text-indigo-500 mt-0.5">•</span> <span><strong className="text-black dark:text-white">GPU:</strong> AMD Radeon RX 6800 16GB VRAM</span></li>
                    <li className="flex items-start gap-2"><span className="text-indigo-500 mt-0.5">•</span> <span><strong className="text-black dark:text-white">RAM:</strong> 16GB DDR4 Dual-Channel @ 3200MHz (XMP Profile 1)</span></li>
                    <li className="flex items-start gap-2"><span className="text-indigo-500 mt-0.5">•</span> <span><strong className="text-black dark:text-white">Motherboard:</strong> Gigabyte B660M DS3H DDR4</span></li>
                    <li className="flex items-start gap-2"><span className="text-indigo-500 mt-0.5">•</span> <span><strong className="text-black dark:text-white">Storage:</strong> 512GB NVMe (OS/Game) + 1TB HDD (Backups)</span></li>
                    <li className="flex items-start gap-2"><span className="text-indigo-500 mt-0.5">•</span> <span><strong className="text-black dark:text-white">Power Supply:</strong> 650W+ Gold 80+ Rated (Fully Modular)</span></li>
                    <li className="flex items-start gap-2"><span className="text-indigo-500 mt-0.5">•</span> <span><strong className="text-black dark:text-white">Display:</strong> Samsung 32&quot; TV (1366x768 @ 60Hz)</span></li>
                    <li className="flex items-start gap-2"><span className="text-indigo-500 mt-0.5">•</span> <span><strong className="text-black dark:text-white">Microphone:</strong> BM-800 Condenser Recording Mic</span></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom Row: YouTube Playlist Hub */}
            <div className="glass-card bg-white/60 dark:bg-white/5 backdrop-blur-2xl border border-black/5 dark:border-white/10 p-8 rounded-[2.5rem] flex flex-col">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                <PlayCircle className="w-6 h-6 text-red-500" />
                YouTube Video Hub
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 flex-1">
                {/* Playlist Cards */}
                {playlists.map((playlist, i) => {
                  // Tailwind classes for dynamic colors are generally bad, but for a discrete set we can hardcode maps
                  const colorMap: Record<string, string> = {
                    red: 'bg-red-500/10 text-red-500',
                    blue: 'bg-blue-500/10 text-blue-500',
                    green: 'bg-green-500/10 text-green-500',
                    orange: 'bg-orange-500/10 text-orange-500',
                    indigo: 'bg-indigo-500/10 text-indigo-500'
                  };

                  return (
                    <motion.a 
                      key={i}
                      href={playlist.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -4 }}
                      whileTap={{ scale: 0.98 }}
                      className={`bg-white/60 dark:bg-white/5 border border-black/5 dark:border-white/10 p-4 rounded-2xl flex flex-col items-center justify-center text-center hover:bg-white/80 dark:hover:bg-white/10 hover:border-black/10 dark:hover:border-white/30 transition-all ${i === playlists.length - 1 && playlists.length % 2 !== 0 ? 'col-span-2 md:col-span-1 lg:col-span-1' : ''}`}
                    >
                      <div className={`w-12 h-12 mb-4 rounded-full flex items-center justify-center ${colorMap[playlist.color]}`}>
                        <span className="font-bold text-sm">{playlist.abbr}</span>
                      </div>
                      <p className="text-[11px] sm:text-xs font-medium leading-tight text-slate-700 dark:text-slate-300">
                        {playlist.title}
                      </p>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.section>
        </main>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-none">
          {/* About Me */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="glass-card bg-white/60 dark:bg-white/5 backdrop-blur-2xl border border-black/5 dark:border-white/10 p-8 rounded-[2.5rem] flex flex-col"
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
              <User className="w-6 h-6 text-indigo-500 dark:text-indigo-400" />
              About Me
            </h3>
            <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed text-sm">
              <p>
                My journey began with a simple curiosity about how things work under the hood. This led me to Arch Linux and the world of performance optimization. I realized that default OS experiences often leave significant hardware potential untapped.
              </p>
              <p>
                As <span className="text-black dark:text-white font-medium">Alb Kestrel</span>, I document my experiments and share my knowledge on YouTube, focusing on pushing gaming hardware to its absolute limits on Linux.
              </p>
              <p>
                Beyond content creation, my passion lies in DevOps and System Architecture. I love building robust, automated environments, writing performance-tuning scripts, and configuring systems like CachyOS to squeeze every last drop of performance out of the hardware.
              </p>
            </div>
          </motion.section>

          {/* Contact Me */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card bg-white/60 dark:bg-white/5 backdrop-blur-2xl border border-black/5 dark:border-white/10 p-8 rounded-[2.5rem] flex flex-col"
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
              <Mail className="w-6 h-6 text-purple-500 dark:text-purple-400" />
              Get in Touch
            </h3>
            <form className="flex-1 flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="w-full bg-white/40 dark:bg-black/20 border border-black/5 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-indigo-500/50 focus:bg-white/80 dark:focus:bg-white/5 transition-colors backdrop-blur-md"
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full bg-white/40 dark:bg-black/20 border border-black/5 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-indigo-500/50 focus:bg-white/80 dark:focus:bg-white/5 transition-colors backdrop-blur-md"
                />
              </div>
              <textarea 
                placeholder="Your message..." 
                rows={4}
                className="w-full bg-white/40 dark:bg-black/20 border border-black/5 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-indigo-500/50 focus:bg-white/80 dark:focus:bg-white/5 transition-colors backdrop-blur-md resize-none flex-1"
              ></textarea>
              <button 
                type="submit"
                className="w-full py-3 rounded-xl bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 font-medium border border-indigo-500/20 dark:border-indigo-500/30 hover:bg-indigo-500/20 dark:hover:bg-indigo-500/30 transition-colors flex items-center justify-center gap-2"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.section>
        </div>

        {/* Blog / Articles Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="glass-card bg-white/60 dark:bg-white/5 backdrop-blur-2xl border border-black/5 dark:border-white/10 p-8 rounded-[2.5rem]"
        >
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-semibold flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-blue-500 dark:text-blue-400" />
              Recent Articles
            </h3>
            <a href="#" className="hidden sm:flex px-4 py-2 rounded-full bg-white/60 dark:bg-white/5 border border-black/5 dark:border-white/10 text-xs font-medium hover:bg-white/80 dark:hover:bg-white/10 transition-colors items-center gap-2">
              View All <ArrowRight className="w-3 h-3" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Optimizing CachyOS for Maximum Gaming Performance",
                date: "May 12, 2026",
                category: "Linux",
                excerpt: "A deep dive into kernel parameters, scheduler tweaks, and GPU driver configurations to get the highest frame rates possible."
              },
              {
                title: "My DevOps Journey: From Linux Enthusiast to Systems Architect",
                date: "April 28, 2026",
                category: "DevOps",
                excerpt: "How learning Linux for gaming inadvertently taught me containerization, CI/CD, and infrastructure as code."
              },
              {
                title: "The Truth About Windows vs Linux Gaming in 2026",
                date: "March 15, 2026",
                category: "Gaming",
                excerpt: "Benchmarking the latest titles across both operating systems. The results might surprise you."
              }
            ].map((article, i) => (
              <a href="#" key={i} className="bg-white/40 dark:bg-black/20 border border-black/5 dark:border-white/10 p-6 rounded-2xl flex flex-col group hover:border-black/10 dark:hover:border-white/30 hover:bg-white/60 dark:hover:bg-white/5 transition-all">
                <span className="text-[10px] uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-bold mb-3">{article.category}</span>
                <h4 className="text-lg font-medium text-slate-800 dark:text-slate-200 group-hover:text-indigo-900 dark:group-hover:text-white transition-colors leading-tight mb-3">
                  {article.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-6 flex-1">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between border-t border-black/5 dark:border-white/5 pt-4 mt-auto">
                  <span className="text-[10px] text-slate-500">{article.date}</span>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-slate-900 dark:group-hover:text-white transition-colors" />
                </div>
              </a>
            ))}
          </div>
          
          <a href="#" className="sm:hidden flex mt-6 w-full justify-center py-3 rounded-xl bg-white/60 dark:bg-white/5 border border-black/5 dark:border-white/10 text-xs font-medium hover:bg-white/80 dark:hover:bg-white/10 transition-colors items-center gap-2">
            View All Articles <ArrowRight className="w-3 h-3" />
          </a>
        </motion.section>

        {/* Newsletter & Admin Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Newsletter Form */}
          <div className="glass-card bg-white/60 dark:bg-white/5 backdrop-blur-2xl border border-black/5 dark:border-white/10 p-8 rounded-[2.5rem] flex flex-col">
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-3">
              <Mail className="w-6 h-6 text-indigo-500 dark:text-indigo-400" />
              Subscribe to Newsletter
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 font-medium">
              Get the latest insights on Linux optimization, DevOps tools, and hardware benchmarking delivered straight to your inbox.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 mt-auto">
              <input 
                type="email" 
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 bg-white/40 dark:bg-black/20 border border-black/5 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-indigo-500/50 focus:bg-white/80 dark:focus:bg-white/5 transition-colors backdrop-blur-md"
              />
              <button 
                type="submit"
                className="px-6 py-3 rounded-xl bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 font-medium border border-indigo-500/20 dark:border-indigo-500/30 hover:bg-indigo-500/20 dark:hover:bg-indigo-500/30 transition-colors flex justify-center items-center gap-2 whitespace-nowrap"
              >
                Join List
              </button>
            </form>
          </div>

          {/* Admin Dashboard */}
          <div className="glass-card bg-white/60 dark:bg-white/5 backdrop-blur-2xl border border-black/5 dark:border-white/10 p-8 rounded-[2.5rem] flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold flex items-center gap-3">
                <Users className="w-6 h-6 text-emerald-500 dark:text-emerald-400" />
                Admin View
              </h3>
              <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20 rounded-full text-[10px] font-bold tracking-widest uppercase">
                {subscribers.length} {subscribers.length === 1 ? 'Sub' : 'Subs'}
              </span>
            </div>
            
            <div className="flex-1 bg-white/40 dark:bg-black/20 border border-black/5 dark:border-white/10 rounded-2xl p-4 overflow-y-auto max-h-[150px] font-mono text-sm min-h-[120px]">
              {subscribers.length === 0 ? (
                <div className="h-full flex items-center justify-center text-slate-500 dark:text-slate-400 text-xs italic">
                  No subscribers yet.
                </div>
              ) : (
                <ul className="space-y-2">
                  {subscribers.map((sub, idx) => (
                    <li key={idx} className="text-slate-700 dark:text-slate-300 flex items-center gap-2 border-b border-black/5 dark:border-white/5 pb-2 last:border-0 last:pb-0">
                      <span className="text-indigo-500/50 font-bold">{'>'}</span> {sub}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col sm:flex-row justify-between items-center text-slate-500 gap-4 mt-4 pb-8 sm:pb-0"
        >
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
            <p className="text-xs tracking-wider uppercase">© {new Date().getFullYear()} ALB KESTREL</p>
            <div className="hidden sm:block h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-700"></div>
            <p className="text-[11px] italic max-w-sm sm:max-w-max">Fun fact: I love Android smartphones and I absolutely love Linux.</p>
          </div>
          <div className="flex gap-6 sm:gap-8 text-[11px] font-medium uppercase tracking-widest">
            <a href="https://youtube.com/@albkestrelytofficial" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 dark:hover:text-white transition-colors">YouTube</a>
            <a href="https://github.com/SokolSaitiAlb" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 dark:hover:text-white transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/sokol-saiti-957b84346" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 dark:hover:text-white transition-colors">LinkedIn</a>
          </div>
        </motion.footer>

        {/* Scroll To Top Button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              onClick={scrollToTop}
              className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 p-3 rounded-full bg-white/60 dark:bg-white/10 backdrop-blur-md border border-black/5 dark:border-white/20 text-slate-900 dark:text-white shadow-lg hover:bg-white/80 dark:hover:bg-white/20 transition-colors z-50 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Global Toast Notification */}
        <AnimatePresence>
          {showToast && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-full bg-emerald-500/90 backdrop-blur-md text-white font-medium shadow-lg shadow-emerald-500/20 flex items-center gap-3 border border-white/20"
            >
              <div className="w-2 h-2 rounded-full bg-white animate-ping"></div>
              Successfully subscribed!
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
