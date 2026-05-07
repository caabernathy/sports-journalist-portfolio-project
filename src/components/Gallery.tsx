import { motion } from 'motion/react';
import { useState, useRef } from 'react';
import { Maximize2, ExternalLink, Play, Pause } from 'lucide-react';
import motorsportImage from '../assets/images/regenerated_image_1778110319445.png';

const categories = ['All', 'Motorsport', 'Athletics', 'Extreme', 'Diving'];

const projects = [
  {
    id: 1,
    title: 'Nürburgring 24h',
    category: 'Motorsport',
    image: motorsportImage,
    size: 'large'
  },
  {
    id: 2,
    title: 'The Sprint',
    category: 'Athletics',
    image: 'https://res.cloudinary.com/dstpqshzo/image/upload/v1776965510/sports-photo-journalist-image-4_pfknza.png',
    audioUrl: 'https://res.cloudinary.com/dstpqshzo/video/upload/v1776966599/One_Shot_One_Crown_ywyzkg.mp3',
    size: 'small'
  },
  {
    id: 3,
    title: 'Concrete Wave',
    category: 'Extreme',
    image: 'https://images.unsplash.com/photo-1471018544487-63a560183187?auto=format&fit=crop&q=80&w=1000',
    size: 'small'
  },
  {
    id: 4,
    title: 'Crystal Descent',
    category: 'Diving',
    image: 'https://res.cloudinary.com/dstpqshzo/image/upload/v1776966156/Gemini_Generated_Image_v6o13zv6o13zv6o1_1_mhly2q.png',
    size: 'medium'
  },
  {
    id: 5,
    title: 'Apex Hunter',
    category: 'Motorsport',
    image: 'https://images.unsplash.com/photo-1541890289-b86df5bafd81?auto=format&fit=crop&q=80&w=1000',
    size: 'large'
  },
  {
    id: 6,
    title: 'Vertical Limit',
    category: 'Extreme',
    image: 'https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&q=80&w=1000',
    size: 'medium'
  }
];

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [playingId, setPlayingId] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const filteredProjects = projects.filter(p => 
    activeCategory === 'All' || p.category === activeCategory
  );

  const toggleAudio = (id: number, url: string) => {
    if (playingId === id) {
      audioRef.current?.pause();
      setPlayingId(null);
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      audioRef.current = new Audio(url);
      audioRef.current.play();
      setPlayingId(id);
      audioRef.current.onended = () => setPlayingId(null);
    }
  };

  return (
    <section className="py-24 bg-dark" id="work">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="font-sans font-black text-7xl md:text-9xl text-white/5 opacity-50 mb-2 italic tracking-tighter leading-none">GALLERY</h2>
            <h3 className="font-sans font-black text-4xl md:text-6xl -mt-8 md:-mt-12 text-white italic tracking-tighter uppercase">Featured <span className="text-accent underline decoration-white/10 underline-offset-8">Works</span></h3>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-2.5 text-[10px] uppercase font-black tracking-widest transition-all rounded-lg border ${
                  activeCategory === cat 
                  ? 'bg-accent border-accent text-black shadow-[0_0_20px_rgba(217,255,0,0.2)]' 
                  : 'border-white/10 text-white/40 hover:border-white/30 hover:text-white bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              key={project.id}
              className={`group relative overflow-hidden bg-ink rounded-3xl border border-white/5 ${
                project.size === 'large' ? 'lg:col-span-2 lg:row-span-2' : 
                project.size === 'medium' ? 'lg:row-span-2' : ''
              }`}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              />
              
              {/* Theme Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

              <div className="absolute top-6 left-6 italic text-white/10 text-6xl font-black select-none group-hover:text-accent/10 transition-colors">
                {String(index + 1).padStart(2, '0')}
              </div>
              
              <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transition-transform">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-accent text-[9px] uppercase font-black tracking-[0.3em]">{project.category}</span>
                </div>
                <div className="flex justify-between items-end">
                  <h4 className="font-sans font-black text-2xl uppercase italic tracking-tighter">{project.title}</h4>
                  <div className="flex gap-2">
                    {project.audioUrl && (
                      <button 
                        onClick={() => toggleAudio(project.id, project.audioUrl!)}
                        className="p-3 border border-white/10 rounded-xl bg-accent text-black hover:bg-white transition-all hover:scale-110 shadow-[0_0_15px_rgba(217,255,0,0.3)]"
                      >
                        {playingId === project.id ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      </button>
                    )}
                    <button className="p-3 border border-white/10 rounded-xl bg-white/5 hover:bg-accent hover:text-black transition-all hover:scale-110"><ExternalLink className="w-4 h-4" /></button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-20 text-center">
            <button className="group relative px-16 py-5 bg-white/5 border border-white/10 hover:border-accent transition-all text-[10px] font-black uppercase tracking-[0.4em] rounded-2xl hover:scale-105">
                <span className="relative z-10 transition-colors group-hover:text-accent">Access Full Archive</span>
            </button>
        </div>
      </div>
    </section>
  );
}
