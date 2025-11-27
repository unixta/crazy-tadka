import React from 'react';
import { X, Minus, Plus, Trash2, ArrowRight } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ 
  isOpen, 
  onClose, 
  items, 
  onUpdateQuantity, 
  onRemoveItem 
}) => {
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-full md:w-[450px] z-[70] bg-[#0a0a0a]/95 backdrop-blur-xl border-l border-white/10 shadow-[-10px_0_30px_rgba(0,0,0,0.5)] transform transition-transform duration-300 ease-out flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h2 className="text-2xl font-display font-bold text-white">Your Feast</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 md:space-y-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-gray-500 gap-4">
              <span className="text-6xl">🥘</span>
              <p className="text-lg font-sans">Your pot is empty.</p>
              <button 
                onClick={onClose}
                className="mt-4 px-6 py-2 border border-saffron text-saffron rounded-full hover:bg-saffron hover:text-white transition-all font-bold uppercase tracking-wider text-sm"
              >
                Start Ordering
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-4 glass-panel p-3 md:p-4 rounded-xl">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-16 h-16 md:w-20 md:h-20 rounded-lg object-cover shrink-0" 
                />
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold text-white line-clamp-1 pr-2 text-sm md:text-base">{item.name}</h4>
                    <button 
                      onClick={() => onRemoveItem(item.id)}
                      className="text-gray-500 hover:text-chili transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="flex justify-between items-end">
                    <span className="text-turmeric font-bold">₹{(item.price * item.quantity)}</span>
                    <div className="flex items-center gap-2 md:gap-3 bg-white/5 rounded-lg p-1">
                      <button 
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="p-1 hover:bg-white/10 rounded-md text-white transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs md:text-sm font-semibold w-4 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="p-1 hover:bg-white/10 rounded-md text-white transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t border-white/10 bg-black/20 mt-auto">
            <div className="flex justify-between items-center mb-6 text-lg">
              <span className="text-gray-400">Total</span>
              <span className="text-3xl font-bold font-display text-white">₹{total}</span>
            </div>
            <button className="w-full py-4 bg-chili hover:bg-red-600 text-white font-bold tracking-widest uppercase rounded-xl transition-all shadow-[0_0_20px_rgba(255,31,31,0.4)] flex items-center justify-center gap-2 group">
              Checkout
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;