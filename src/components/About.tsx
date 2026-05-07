import { motion } from 'motion/react';
import { useState, useRef } from 'react';
import { Camera, Zap, Award, Target, Play, Pause } from 'lucide-react';

const stats = [
  { icon: Camera, label: 'Shots Fired', value: '500K+' },
  { icon: Zap, label: 'Events Covered', value: '120+' },
  { icon: Award, label: 'Awards Won', value: '12' },
  { icon: Target, label: 'Precision', value: '99.9%' },
];

export function About() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioUrl = 'https://res.cloudinary.com/dstpqshzo/video/upload/v1776966883/Generated_Audio_April_23_2026_-_6_54PM_ukwazh.wav';

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    } else {
      if (!audioRef.current) {
        audioRef.current = new Audio(audioUrl);
        audioRef.current.onended = () => setIsPlaying(false);
      }
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="py-24 bg-ink overflow-hidden" id="about">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-1 hidden lg:block">
            <span className="font-display text-8xl text-stroke opacity-10 vertical-rl transform rotate-180">
              IDENTITY
            </span>
          </div>

          <div className="lg:col-span-5 relative">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] overflow-hidden rounded-3xl group shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/5"
            >
              <img 
                src="https://images.unsplash.com/photo-1552168324-d612d77725e3?auto=format&fit=crop&q=80&w=1000" 
                alt="Photographer at work"
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
              />
              <div className="absolute top-0 right-0 p-4 bg-accent text-black font-black text-[10px] uppercase tracking-widest -mr-0 mt-8 transform rotate-90 origin-right rounded-t-lg">
                Christine Velocity
              </div>
            </motion.div>
            
            {/* Ambient Shadow for depth */}
            <div className="absolute -inset-4 bg-accent/5 rounded-[40px] -z-10 blur-2xl" />
          </div>

          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-accent uppercase font-black tracking-[0.3em] text-[10px]">Legacy</span>
                <button 
                  onClick={toggleAudio}
                  className="flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full hover:bg-accent hover:text-black transition-all group scale-90 md:scale-100 origin-right"
                >
                  <span className="text-[10px] font-black uppercase tracking-widest">Listen to Story</span>
                  <div className="w-8 h-8 rounded-full bg-accent text-black flex items-center justify-center shadow-[0_0_15px_rgba(217,255,0,0.3)] group-hover:bg-black group-hover:text-accent transition-colors">
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 translate-x-0.5" />}
                  </div>
                </button>
              </div>
              
              <h2 className="font-sans font-black text-5xl md:text-7xl mb-8 leading-[0.9] uppercase italic tracking-tighter">
                Defining the <br />
                <span className="text-accent tracking-normal">Adrenaline.</span>
              </h2>
              
              <p className="text-white/50 text-sm md:text-base leading-relaxed mb-10 max-w-lg font-medium">
                Christine has an uncanny ability to anticipate the peak of the action before it even happens. She doesn't just shoot games; she captures intensity, creating visual legacies for athletes who push beyond human limits.
              </p>

              <div className="grid grid-cols-2 gap-10">
                {stats.map((stat, i) => (
                  <motion.div 
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                    className="group"
                  >
                    <div className="flex items-center gap-4 mb-2">
                       <span className="text-3xl md:text-4xl font-black italic tracking-tighter uppercase text-white/90 group-hover:text-accent transition-colors">{stat.value}</span>
                    </div>
                    <span className="text-[10px] uppercase font-black tracking-[0.2em] text-white/20">{stat.label}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 p-8 border border-white/5 bg-white/5 backdrop-blur-md rounded-2xl relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-accent opacity-50 group-hover:opacity-100 transition-opacity" />
                <p className="italic text-white/70 font-medium text-sm md:text-base leading-relaxed">
                  "Speed is my currency. I trade in milliseconds and my only goal is to make time stand still when everything else is moving at 320kmh."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
