import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden py-20 px-4">
      {/* Parallax Background - Real Food Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1548943487-a2e4e43b485c?q=80&w=2000&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/80 to-void/40" />
        <div className="absolute inset-0 bg-saffron/10 mix-blend-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center w-full max-w-5xl mx-auto mt-12 md:mt-0">
        <div className="inline-block mb-4 md:mb-6">
          <span className="py-2 px-4 md:px-6 rounded-full border border-turmeric/30 bg-turmeric/10 text-turmeric font-bold tracking-[0.2em] text-[10px] md:text-sm uppercase backdrop-blur-md">
            Premium Indian Fusion
          </span>
        </div>
        
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-display font-extrabold mb-6 md:mb-8 leading-none text-glow drop-shadow-2xl break-words w-full">
          TASTE THE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron via-turmeric to-saffron animate-gradient-x block sm:inline">
            EXPLOSION
          </span>
        </h1>
        
        <p className="text-gray-300 text-sm sm:text-base md:text-xl lg:text-2xl max-w-sm md:max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed font-light font-sans tracking-wide px-2">
          A symphony of <span className="text-saffron font-semibold">exotic spices</span> and bold flavors, 
          crafted with passion for the adventurous soul.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center w-full max-w-md mx-auto sm:max-w-none">
          <a 
            href="#menu"
            className="w-full sm:w-auto group relative px-8 md:px-10 py-4 md:py-5 bg-saffron text-white font-bold tracking-widest uppercase text-xs md:text-sm rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,119,34,0.5)] transform hover:scale-105"
          >
            <span className="relative z-10">Order Now</span>
            <div className="absolute inset-0 bg-gradient-to-r from-chili to-saffron opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          
          <button className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 glass-panel text-white font-bold tracking-widest uppercase text-xs md:text-sm rounded-full hover:bg-white/10 hover:border-turmeric/50 transition-all duration-300 backdrop-blur-md">
            Our Story
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 md:w-8 md:h-8 text-turmeric" />
      </div>
    </section>
  );
};

export default Hero;