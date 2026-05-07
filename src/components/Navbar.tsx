import { motion } from 'motion/react';
import { Camera, Instagram, Twitter, Mail } from 'lucide-react';

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-6 bg-dark/60 backdrop-blur-xl border-b border-white/5"
      id="navbar"
    >
      <a href="#" className="flex items-center gap-2 group">
        <span className="font-black italic text-2xl uppercase tracking-tighter group-hover:text-accent transition-colors">
          VELOCITY<span className="text-accent underline decoration-white/20 underline-offset-4">.LENS</span>
        </span>
      </a>

      <div className="hidden md:flex items-center gap-10 text-[10px] uppercase tracking-[0.2em] font-bold text-white/50">
        <a href="#work" className="hover:text-white transition-colors cursor-pointer">Portfolio</a>
        <a href="#about" className="hover:text-white transition-colors cursor-pointer">Experience</a>
        <a href="#testimonials" className="hover:text-white transition-colors cursor-pointer">Legacy</a>
        <a href="#contact" className="hover:text-accent text-accent transition-colors cursor-pointer">Book Christine</a>
      </div>

      <div className="flex items-center gap-6">
        <div className="hidden sm:flex items-center gap-4 text-white/40">
          <a href="#" className="hover:text-accent transition-colors"><Instagram className="w-4 h-4" /></a>
          <a href="#" className="hover:text-accent transition-colors"><Twitter className="w-4 h-4" /></a>
        </div>
        <a href="#contact" className="bg-accent text-black px-6 py-2.5 text-[10px] uppercase font-black tracking-widest hover:bg-white transition-all transform hover:scale-105 rounded-lg shadow-[0_0_20px_rgba(217,255,0,0.15)]">
          Send Brief
        </a>
      </div>
    </motion.nav>
  );
}
