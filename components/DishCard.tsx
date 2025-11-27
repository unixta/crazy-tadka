import React from 'react';
import { Plus, Flame } from 'lucide-react';
import { MenuItem } from '../types';

interface DishCardProps {
  item: MenuItem;
  onAdd: (item: MenuItem) => void;
}

const DishCard: React.FC<DishCardProps> = ({ item, onAdd }) => {
  return (
    <div className="group relative glass-panel rounded-[1.5rem] md:rounded-[2rem] overflow-hidden hover:border-saffron/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)] flex flex-col h-full w-full">
      {/* Image Section */}
      <div className="relative h-56 md:h-64 overflow-hidden shrink-0 w-full">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/20 to-transparent opacity-90" />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {item.isPopular && (
            <span className="bg-turmeric text-black text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full shadow-lg shadow-turmeric/20">
              Bestseller
            </span>
          )}
          {item.spicyLevel > 0 && (
            <div className="flex bg-black/60 backdrop-blur-md px-3 py-1 rounded-full items-center gap-1 border border-white/10">
              {Array.from({ length: item.spicyLevel }).map((_, i) => (
                <Flame key={i} className="w-3 h-3 text-chili fill-chili" />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 md:p-8 relative flex flex-col flex-1">
        <div className="flex justify-between items-start mb-3 gap-4">
          <h3 className="text-xl md:text-2xl font-display font-bold leading-tight group-hover:text-saffron transition-colors">
            {item.name}
          </h3>
          <span className="text-lg md:text-xl font-bold text-turmeric font-display shrink-0">
            ₹{item.price}
          </span>
        </div>
        
        <p className="text-gray-400 text-sm mb-6 md:mb-8 line-clamp-2 font-sans leading-relaxed flex-1">
          {item.description}
        </p>

        {/* Add Button */}
        <button 
          onClick={() => onAdd(item)}
          className="w-full py-3 md:py-4 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 hover:border-saffron/50 text-white font-bold tracking-widest uppercase text-xs transition-all duration-300 flex items-center justify-center gap-2 group/btn relative overflow-hidden mt-auto"
        >
          <span className="relative z-10 group-hover/btn:text-white transition-colors">Add to Cart</span>
          <Plus className="w-4 h-4 relative z-10 group-hover/btn:rotate-90 transition-transform" />
          
          {/* Fill Animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-saffron to-chili transform scale-x-0 group-hover/btn:scale-x-100 origin-left transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
};

export default DishCard;