"use client";

import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type CyberIconProps = {
  icon: LucideIcon;
  size?: number;
  className?: string;
  containerClassName?: string;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  animation?: 'pulse' | 'glow' | 'spin' | 'data-flow' | 'none';
  hoverable?: boolean;
};

const CyberIcon = ({ 
  icon: Icon, 
  size = 24, 
  className, 
  containerClassName,
  variant = 'primary',
  animation = 'none',
  hoverable = true
}: CyberIconProps) => {
  const variantStyles = {
    primary: {
      bg: 'bg-primary/10',
      hoverBg: 'group-hover:bg-primary/20',
      text: 'text-primary',
      border: 'border-primary/30',
      glow: 'shadow-[0_0_8px_rgba(255,42,109,0.3)]'
    },
    secondary: {
      bg: 'bg-secondary/10',
      hoverBg: 'group-hover:bg-secondary/20',
      text: 'text-secondary',
      border: 'border-secondary/30',
      glow: 'shadow-[0_0_8px_rgba(168,85,247,0.3)]'
    },
    success: {
      bg: 'bg-green-500/10',
      hoverBg: 'group-hover:bg-green-500/20',
      text: 'text-green-500',
      border: 'border-green-500/30',
      glow: 'shadow-[0_0_8px_rgba(34,197,94,0.3)]'
    },
    warning: {
      bg: 'bg-yellow-500/10',
      hoverBg: 'group-hover:bg-yellow-500/20',
      text: 'text-yellow-500',
      border: 'border-yellow-500/30',
      glow: 'shadow-[0_0_8px_rgba(234,179,8,0.3)]'
    },
    danger: {
      bg: 'bg-red-500/10',
      hoverBg: 'group-hover:bg-red-500/20',
      text: 'text-red-500',
      border: 'border-red-500/30',
      glow: 'shadow-[0_0_8px_rgba(239,68,68,0.3)]'
    }
  };

  const animationClasses = {
    pulse: 'animate-pulse',
    glow: 'animate-pulse-glow',
    spin: 'animate-[spin_5s_linear_infinite]',
    'data-flow': 'animate-data-flow',
    none: ''
  };

  return (
    <div 
      className={cn(
        "relative rounded-md p-2 group transition-all duration-300",
        variantStyles[variant].bg,
        hoverable && variantStyles[variant].hoverBg,
        hoverable && "hover:scale-105",
        containerClassName
      )}
    >
      {/* Corner elements for futuristic look */}
      <div className="absolute top-0 left-0 w-1.5 h-1.5 border-l border-t border-primary/20 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
      <div className="absolute top-0 right-0 w-1.5 h-1.5 border-r border-t border-primary/20 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
      <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-l border-b border-primary/20 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
      <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-r border-b border-primary/20 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
      
      {/* Glow effect on hover */}
      <div className={cn(
        "absolute inset-0 opacity-0 group-hover:opacity-100 rounded-md transition-opacity duration-300",
        variantStyles[variant].glow
      )}></div>
      
      <Icon 
        className={cn(
          variantStyles[variant].text,
          animationClasses[animation],
          "relative z-10",
          className
        )} 
        size={size} 
      />
    </div>
  );
};

export default CyberIcon;