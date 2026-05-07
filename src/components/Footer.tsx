import { Camera, Instagram, Twitter, Linkedin, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark pt-24 pb-12 border-t border-white/5 relative z-10 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-8">
              <span className="font-black italic text-3xl uppercase tracking-tighter">
                VELOCITY<span className="text-accent">.LENS</span>
              </span>
            </div>
            <p className="text-white/30 max-w-sm text-sm leading-relaxed mb-8 font-medium">
              Capturing split-second moments that define legacies. Based in Porto, delivering global adrenaline.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center border border-white/10 hover:border-accent hover:text-black hover:bg-accent transition-all"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center border border-white/10 hover:border-accent hover:text-black hover:bg-accent transition-all"><Twitter className="w-4 h-4" /></a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center border border-white/10 hover:border-accent hover:text-black hover:bg-accent transition-all"><Linkedin className="w-4 h-4" /></a>
            </div>
          </div>

          <div className="md:col-span-3">
             <div className="flex gap-16">
                <div className="flex flex-col">
                    <span className="text-[10px] uppercase text-white/30 tracking-[0.2em] font-black mb-4">Location</span>
                    <span className="text-xs font-black uppercase italic tracking-tighter text-white/80">Porto, PT</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-[10px] uppercase text-white/30 tracking-[0.2em] font-black mb-4">Available</span>
                    <span className="text-xs font-black uppercase italic tracking-tighter text-accent">World Travel 2026</span>
                </div>
             </div>
          </div>

          <div className="md:col-span-4 flex flex-col items-end justify-start">
             <button 
               onClick={scrollToTop}
               className="group flex items-center gap-4 text-white/20 hover:text-accent transition-colors"
             >
                <span className="text-[10px] font-black uppercase tracking-[0.5em]">To Summit</span>
                <div className="w-12 h-12 flex items-center justify-center border border-white/10 rounded-full group-hover:border-accent transition-colors">
                  <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                </div>
             </button>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-[10px] font-black uppercase tracking-widest text-white/10">
            © 2026 VELOCITY LENS. ADRENALINE CAPTURED.
          </span>
          <div className="flex gap-10 text-[10px] font-black uppercase tracking-widest text-white/10 italic">
            <a href="#" className="hover:text-white transition-colors">Licensing</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
