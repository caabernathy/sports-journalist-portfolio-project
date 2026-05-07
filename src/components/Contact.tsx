import { motion } from 'motion/react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

export function Contact() {
  return (
    <section className="py-24 bg-dark relative overflow-hidden" id="contact">
      {/* Background Text */}
      <div className="absolute top-0 right-0 pointer-events-none opacity-[0.03]">
        <span className="font-display text-[30vw] leading-none uppercase">CONNECT</span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="w-12 h-1 bg-accent" />
              <span className="text-accent uppercase font-black tracking-[0.4em] text-xs">Let's talk business</span>
            </div>
            
            <h2 className="font-display text-6xl md:text-8xl mb-8 uppercase leading-tight">
              SECURE YOUR <br />
              <span className="text-stroke italic">NEXT MISSION</span>
            </h2>

            <div className="space-y-12 mt-12">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 flex items-center justify-center border border-white/10 group-hover:bg-accent group-hover:border-accent transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-bold text-white/30 tracking-widest mb-1">Email</span>
                  <a href="mailto:hello@velocitylens.com" className="text-2xl font-display uppercase hover:text-accent transition-colors">hello@velocitylens.com</a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 flex items-center justify-center border border-white/10 group-hover:bg-accent group-hover:border-accent transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-bold text-white/30 tracking-widest mb-1">Direct Line</span>
                  <span className="text-2xl font-display uppercase">+1 (234) 567 890</span>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 flex items-center justify-center border border-white/10 group-hover:bg-accent group-hover:border-accent transition-all">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-bold text-white/30 tracking-widest mb-1">Base of Operations</span>
                  <span className="text-2xl font-display uppercase">Porto / Global</span>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-12 bg-white/5 border border-white/10 rounded-[32px] backdrop-blur-2xl relative"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-accent mb-2 block">Cadet Name</label>
                  <input 
                    type="text" 
                    placeholder="WOLFGANG MANN"
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-[10px] outline-none focus:border-accent transition-colors tracking-widest uppercase"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-2 block">Return Frequency</label>
                  <input 
                    type="email" 
                    placeholder="YOUR@EMAIL.COM"
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-[10px] outline-none focus:border-accent transition-colors tracking-widest uppercase"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-2 block">Incident Category</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-[10px] outline-none focus:border-accent transition-colors appearance-none cursor-pointer tracking-widest uppercase">
                  <option>COMMERCIAL SHOOT</option>
                  <option>EVENT COVERAGE</option>
                  <option>PRIVATE COMMISSION</option>
                  <option>OTHER MISSION</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-2 block">Transmission Details</label>
                <textarea 
                  rows={4}
                  placeholder="TELL US ABOUT THE MISSION..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-[10px] outline-none focus:border-accent transition-colors resize-none tracking-widest uppercase"
                />
              </div>

              <button className="w-full py-5 bg-accent text-black font-black uppercase tracking-widest text-[10px] rounded-xl hover:bg-white transition-all transform active:scale-95 shadow-[0_0_30px_rgba(217,255,0,0.1)]">
                Initialize Contact
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
