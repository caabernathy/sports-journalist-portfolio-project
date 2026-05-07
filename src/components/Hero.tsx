import { motion } from 'motion/react';
import { MousePointer2, ChevronRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" id="hero">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1541252260730-0442e3e269ed?auto=format&fit=crop&q=80&w=2000" 
          alt="Sports Action"
          className="w-full h-full object-cover opacity-30 scale-110 grayscale hover:grayscale-0 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-transparent to-dark" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 flex items-center gap-4 py-2 px-6 border border-white/10 bg-white/5 backdrop-blur-md rounded-full shadow-[0_0_30px_rgba(255,255,255,0.05)]"
          >
            <span className="text-accent text-[10px] font-black uppercase tracking-[0.4em] font-sans">World Travel 2026</span>
          </motion.div>

          <div className="relative text-center">
            <motion.h1 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-[18vw] md:text-[14vw] leading-[0.85] font-black italic tracking-tighter uppercase select-none"
            >
              <span className="block text-white">Fast</span>
              <span className="block text-accent -mt-[2vw]">Motion.</span>
            </motion.h1>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-md text-center text-white/50 text-sm md:text-base font-medium mt-8 leading-relaxed"
          >
            Capturing the moments that make sports history and define enduring legacies.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-12 flex flex-col sm:flex-row gap-6 items-center"
          >
            <a 
              href="#work" 
              className="group relative px-12 py-5 bg-accent text-black font-black uppercase tracking-widest text-[11px] rounded-xl overflow-hidden shadow-[0_0_40px_rgba(217,255,0,0.2)] hover:bg-white transition-colors"
            >
              View Portfolio
            </a>
            
            <a 
              href="#contact" 
              className="group flex items-center gap-4 text-white/60 hover:text-white transition-colors uppercase font-bold text-[10px] tracking-widest px-8 py-5 border border-white/10 rounded-xl hover:bg-white/5 backdrop-blur-sm"
            >
              Start Brief
            </a>
          </motion.div>
        </div>
      </div>

      {/* Aesthetic Micro-details */}
      <div className="absolute bottom-10 left-10 hidden md:block">
        <div className="flex flex-col gap-2">
          <div className="w-12 h-[2px] bg-accent" />
          <span className="text-[10px] font-bold opacity-40 uppercase tracking-widest">Est. 2018</span>
        </div>
      </div>
      
      <div className="absolute bottom-10 right-10 hidden md:block animate-bounce text-accent">
        <div className="flex flex-col items-center gap-4">
          <span className="text-[10px] font-bold uppercase tracking-widest vertical-rl rotate-180">Scroll to explore</span>
          <div className="w-[1px] h-20 bg-accent/30" />
        </div>
      </div>
    </section>
  );
}
