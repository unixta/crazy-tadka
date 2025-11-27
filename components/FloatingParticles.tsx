import React, { useEffect, useState } from 'react';

const FloatingParticles: React.FC = () => {
  const [particles, setParticles] = useState<Array<{ id: number; left: number; top: number; size: number; color: string; duration: number; delay: number }>>([]);

  useEffect(() => {
    // Updated colors: Saffron, Turmeric, Chili
    const colors = ['bg-saffron', 'bg-turmeric', 'bg-chili', 'bg-white'];
    const newParticles = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 6 + 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      duration: Math.random() * 10 + 15,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className={`absolute rounded-full opacity-30 blur-[2px] ${p.color}`}
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animation: `float ${p.duration}s ease-in-out infinite`,
            animationDelay: `-${p.delay}s`,
            backgroundColor: p.color === 'bg-saffron' ? '#FF7722' :
                             p.color === 'bg-turmeric' ? '#FFC000' :
                             p.color === 'bg-chili' ? '#FF0033' : 'white'
          }}
        />
      ))}
      {/* Dynamic gradients for atmosphere - enriched colors */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-saffron/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-chili/10 rounded-full blur-[150px]" />
      <div className="absolute top-[40%] right-[-20%] w-[40%] h-[40%] bg-turmeric/10 rounded-full blur-[120px]" />
    </div>
  );
};

export default FloatingParticles;