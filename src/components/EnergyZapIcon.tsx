"use client";

import React, { useEffect, useRef } from "react";
import { ZapIcon } from "lucide-react";

interface EnergyZapIconProps {
  size?: number;
  className?: string;
  particleCount?: number;
}

const EnergyZapIcon: React.FC<EnergyZapIconProps> = ({
  size = 16,
  className = "",
  particleCount = 8,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const particles = container.querySelectorAll('.energy-particle');
    
    // Remove existing particles
    particles.forEach(particle => particle.remove());
    
    // Create new particles
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'energy-particle';
      
      // Random values for movement
      const angle = Math.random() * Math.PI * 2;
      const distance = 15 + Math.random() * 15;
      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance;
      
      // Random delay and duration
      const delay = Math.random() * 2;
      const duration = 2 + Math.random();
      
      particle.style.setProperty('--x', `${x}px`);
      particle.style.setProperty('--y', `${y}px`);
      particle.style.setProperty('--delay', `${delay}s`);
      particle.style.setProperty('--duration', `${duration}s`);
      
      container.querySelector('.energy-particles')?.appendChild(particle);
    }
  }, [particleCount]);
  
  return (
    <div 
      ref={containerRef} 
      className="relative group"
    >
      {/* Main icon with glow effect */}
      <div className="relative z-10 p-1.5 bg-[#ff2a6d10] rounded-full transition-all duration-300 group-hover:bg-[#ff2a6d20]">
        <ZapIcon 
          size={size} 
          className={`text-[#ff2a6d] transition-transform duration-300 group-hover:scale-110 ${className}`} 
        />
      </div>

      {/* Energy ring effect */}
      <div className="absolute inset-0 -m-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 bg-[#ff2a6d10] rounded-full animate-energy-ring"></div>
        <div className="absolute inset-0 bg-[#ff2a6d10] rounded-full animate-energy-ring delay-100"></div>
        <div className="absolute inset-0 bg-[#ff2a6d10] rounded-full animate-energy-ring delay-200"></div>
      </div>

      {/* Particle container */}
      <div className="energy-particles absolute inset-0 pointer-events-none">
        {/* Particles will be dynamically added here */}
      </div>

      {/* Shine effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ff2a6d20] to-transparent animate-shine"></div>
      </div>
    </div>
  );
};

export default EnergyZapIcon;