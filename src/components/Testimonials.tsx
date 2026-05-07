import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Red Bull Racing',
    role: 'Marketing Director',
    content: 'Christine has an uncanny ability to find the angle that tells the whole story of a race in a single frame. Her work defines our visual identity.'
  },
  {
    name: 'Alex Honnold',
    role: 'Pro Climber',
    content: 'On the wall, you need someone who is invisible but alert. Christine is that professional. She captures the fear and the focus perfectly.'
  },
  {
    name: 'Nike Athletics',
    role: 'Creative Lead',
    content: 'When we need high-octane imagery that feels real, Velocity Lens is the first number we dial. Consistently exceptional work.'
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-ink border-y border-white/5" id="testimonials">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <span className="text-accent text-[10px] font-black uppercase tracking-[0.4em] mb-6 px-4 py-1 border border-white/5 rounded-full bg-white/5">Recognition</span>
          <h2 className="font-sans font-black text-5xl md:text-8xl text-center italic tracking-tighter uppercase leading-[0.85]">TRUSTED BY <br /> THE <span className="text-accent">ELITE.</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative p-10 bg-white/5 border border-white/10 rounded-[32px] backdrop-blur-xl group hover:border-accent/30 transition-all overflow-hidden"
            >
              <Quote className="absolute -top-4 -right-4 w-20 h-20 text-white/5 group-hover:text-accent/10 transition-colors" />
              
              <div className="flex flex-col h-full relative z-10">
                <p className="text-white/60 mb-10 italic leading-relaxed text-sm md:text-base">"{t.content}"</p>
                <div className="mt-auto flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 border border-white/10 group-hover:border-accent transition-colors" />
                    <div>
                        <h4 className="font-black italic uppercase tracking-tight text-white/90">{t.name}</h4>
                        <span className="text-[9px] uppercase font-black text-white/30 tracking-widest">{t.role}</span>
                    </div>
                </div>
              </div>

              {/* Theme Detail */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
