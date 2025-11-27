import React, { useState, useMemo } from 'react';
import { MENU_ITEMS, CATEGORIES } from '../constants';
import { MenuItem, Category } from '../types';
import DishCard from './DishCard';

interface MenuProps {
  onAddToCart: (item: MenuItem) => void;
}

const Menu: React.FC<MenuProps> = ({ onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') return MENU_ITEMS;
    return MENU_ITEMS.filter(item => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="menu" className="relative py-20 md:py-32 px-4 md:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20">
          <span className="text-turmeric text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-3 block">
            Our Creations
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-extrabold text-white mb-6 md:mb-8 leading-tight">
            Curated <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron to-turmeric">Menu</span>
          </h2>
          <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-transparent via-saffron to-transparent mx-auto" />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10 md:mb-16">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as Category)}
              className={`px-6 md:px-8 py-2 md:py-3 rounded-full text-xs md:text-sm font-bold tracking-widest uppercase transition-all duration-300 border backdrop-blur-md ${
                activeCategory === cat.id
                  ? 'bg-saffron border-saffron text-white shadow-[0_0_20px_rgba(255,119,34,0.4)] transform scale-105'
                  : 'bg-white/5 border-white/10 text-gray-400 hover:border-turmeric/50 hover:text-turmeric'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {filteredItems.map((item) => (
            <DishCard key={item.id} item={item} onAdd={onAddToCart} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;