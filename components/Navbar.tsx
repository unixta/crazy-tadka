import React from 'react';
import { ShoppingBag, Menu as MenuIcon, Flame } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
  onMenuClick: () => void; // Mobile menu toggle
}

const Navbar: React.FC<NavbarProps> = ({ cartCount, onCartClick, onMenuClick }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-2 py-3 md:px-8 md:py-6 w-full">
      <div className="glass-panel max-w-7xl mx-auto rounded-2xl md:rounded-full px-4 py-3 md:px-8 md:py-4 flex items-center justify-between shadow-2xl shadow-black/20">
        {/* Logo */}
        <div className="flex items-center gap-2 md:gap-3 group cursor-pointer shrink-0">
          <div className="relative">
            <Flame className="w-6 h-6 md:w-8 md:h-8 text-saffron animate-pulse group-hover:text-turmeric transition-colors" />
            <div className="absolute inset-0 bg-saffron blur-lg opacity-40 group-hover:opacity-60 transition-opacity" />
          </div>
          <span className="text-lg md:text-2xl font-display font-bold tracking-tighter whitespace-nowrap">
            CRAZY<span className="text-saffron">TADKA</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10 text-sm font-bold tracking-widest uppercase text-gray-400 font-sans">
          <a href="#hero" className="hover:text-turmeric transition-colors duration-300">Home</a>
          <a href="#menu" className="hover:text-turmeric transition-colors duration-300">Menu</a>
          <a href="#about" className="hover:text-turmeric transition-colors duration-300">Story</a>
          <a href="#contact" className="hover:text-turmeric transition-colors duration-300">Visit</a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 md:gap-4 shrink-0">
          <button 
            onClick={onCartClick}
            className="relative p-2 md:p-3 hover:bg-white/5 rounded-full transition-all duration-300 group border border-transparent hover:border-white/10"
            aria-label="View Cart"
          >
            <ShoppingBag className="w-5 h-5 text-white group-hover:text-turmeric transition-colors" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 w-4 h-4 md:w-5 md:h-5 bg-saffron rounded-full flex items-center justify-center text-[8px] md:text-[10px] font-bold text-white shadow-lg shadow-saffron/50 animate-bounce">
                {cartCount}
              </span>
            )}
          </button>
          
          <button 
            onClick={onMenuClick}
            className="md:hidden p-2 hover:bg-white/5 rounded-full transition-all"
            aria-label="Toggle Menu"
          >
            <MenuIcon className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;