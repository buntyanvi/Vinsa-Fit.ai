"use client";

import { cn } from "@/lib/utils";

interface DataNodesProps {
  variant?: "sparse" | "dense" | "corners" | "center";
  className?: string;
  animated?: boolean;
  color?: "primary" | "secondary" | "accent";
  showOnHover?: boolean;
}

const DataNodes = ({ 
  variant = "sparse", 
  className = "", 
  animated = true,
  color = "primary",
  showOnHover = false
}: DataNodesProps) => {
  const getColorClass = () => {
    switch (color) {
      case "primary":
        return "bg-primary";
      case "secondary":
        return "bg-secondary";
      case "accent":
        return "bg-[#e7b8ff]";
      default:
        return "bg-primary";
    }
  };

  const baseNodeClass = `${getColorClass()}/40 rounded-full`;
  const baseLineClass = `${getColorClass()}/20`;
  const hoverClass = showOnHover ? "opacity-0 group-hover:opacity-100 transition-opacity duration-500" : "";

  // Pattern variants
  const renderNodes = () => {
    switch (variant) {
      case "sparse":
        return (
          <>
            <div className={`absolute h-1 w-1 ${baseNodeClass} top-[15%] right-[20%] ${animated ? 'animate-pulse' : ''} ${hoverClass}`}></div>
            <div className={`absolute h-1 w-1 ${baseNodeClass} bottom-[30%] left-[25%] ${animated ? 'animate-pulse delay-1000' : ''} ${hoverClass}`}></div>
            <div className={`absolute h-1.5 w-1.5 ${baseNodeClass} top-[50%] left-[10%] ${animated ? 'animate-pulse delay-700' : ''} ${hoverClass}`}></div>
            <div className={`absolute h-1 w-1 ${baseNodeClass} bottom-[20%] right-[15%] ${animated ? 'animate-pulse delay-300' : ''} ${hoverClass}`}></div>
            
            {/* Connection lines */}
            <div className={`absolute w-px h-24 ${baseLineClass} top-[15%] right-[20%] ${animated ? 'animate-data-flow' : ''} ${hoverClass}`}></div>
            <div className={`absolute w-px h-16 ${baseLineClass} bottom-[30%] left-[25%] ${animated ? 'animate-data-flow delay-500' : ''} ${hoverClass}`}></div>
          </>
        );
      
      case "dense":
        return (
          <>
            <div className={`absolute h-1 w-1 ${baseNodeClass} top-[10%] right-[10%] ${animated ? 'animate-pulse' : ''} ${hoverClass}`}></div>
            <div className={`absolute h-1 w-1 ${baseNodeClass} top-[30%] left-[15%] ${animated ? 'animate-pulse delay-200' : ''} ${hoverClass}`}></div>
            <div className={`absolute h-1 w-1 ${baseNodeClass} top-[50%] right-[25%] ${animated ? 'animate-pulse delay-400' : ''} ${hoverClass}`}></div>
            <div className={`absolute h-1 w-1 ${baseNodeClass} bottom-[30%] left-[35%] ${animated ? 'animate-pulse delay-600' : ''} ${hoverClass}`}></div>
            <div className={`absolute h-1 w-1 ${baseNodeClass} bottom-[10%] right-[30%] ${animated ? 'animate-pulse delay-800' : ''} ${hoverClass}`}></div>
            <div className={`absolute h-1.5 w-1.5 ${baseNodeClass} top-[70%] left-[20%] ${animated ? 'animate-pulse delay-300' : ''} ${hoverClass}`}></div>
            <div className={`absolute h-1.5 w-1.5 ${baseNodeClass} top-[20%] right-[30%] ${animated ? 'animate-pulse delay-700' : ''} ${hoverClass}`}></div>
            
            {/* Connection lines */}
            <div className={`absolute w-px h-20 ${baseLineClass} top-[10%] right-[10%] ${animated ? 'animate-data-flow' : ''} ${hoverClass}`}></div>
            <div className={`absolute w-px h-24 ${baseLineClass} top-[30%] left-[15%] ${animated ? 'animate-data-flow delay-300' : ''} ${hoverClass}`}></div>
            <div className={`absolute h-px w-24 ${baseLineClass} top-[50%] right-[25%] ${animated ? 'animate-data-flow delay-600' : ''} ${hoverClass}`}></div>
          </>
        );
      
      case "corners":
        return (
          <>
            {/* Top left corner */}
            <div className={`absolute h-1 w-1 ${baseNodeClass} top-[10%] left-[10%] ${animated ? 'animate-pulse' : ''} ${hoverClass}`}></div>
            <div className={`absolute w-px h-12 ${baseLineClass} top-[10%] left-[10%] ${animated ? 'animate-data-flow' : ''} ${hoverClass}`}></div>
            
            {/* Top right corner */}
            <div className={`absolute h-1 w-1 ${baseNodeClass} top-[10%] right-[10%] ${animated ? 'animate-pulse delay-200' : ''} ${hoverClass}`}></div>
            <div className={`absolute w-px h-12 ${baseLineClass} top-[10%] right-[10%] ${animated ? 'animate-data-flow delay-200' : ''} ${hoverClass}`}></div>
            
            {/* Bottom left corner */}
            <div className={`absolute h-1 w-1 ${baseNodeClass} bottom-[10%] left-[10%] ${animated ? 'animate-pulse delay-400' : ''} ${hoverClass}`}></div>
            <div className={`absolute w-px h-12 ${baseLineClass} bottom-[10%] left-[10%] transform rotate-180 ${animated ? 'animate-data-flow delay-400' : ''} ${hoverClass}`}></div>
            
            {/* Bottom right corner */}
            <div className={`absolute h-1 w-1 ${baseNodeClass} bottom-[10%] right-[10%] ${animated ? 'animate-pulse delay-600' : ''} ${hoverClass}`}></div>
            <div className={`absolute w-px h-12 ${baseLineClass} bottom-[10%] right-[10%] transform rotate-180 ${animated ? 'animate-data-flow delay-600' : ''} ${hoverClass}`}></div>
          </>
        );
      
      case "center":
        return (
          <>
            <div className={`absolute h-2 w-2 ${baseNodeClass} top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${animated ? 'animate-pulse-glow' : ''} ${hoverClass}`}></div>
            
            {/* Radiating lines */}
            <div className={`absolute w-px h-16 ${baseLineClass} top-1/2 left-1/2 -translate-x-1/2 -translate-y-full ${animated ? 'animate-data-flow' : ''} ${hoverClass}`}></div>
            <div className={`absolute w-px h-16 ${baseLineClass} bottom-1/2 left-1/2 -translate-x-1/2 translate-y-full transform rotate-180 ${animated ? 'animate-data-flow delay-200' : ''} ${hoverClass}`}></div>
            <div className={`absolute h-px w-16 ${baseLineClass} top-1/2 left-1/2 -translate-y-1/2 -translate-x-full ${animated ? 'animate-data-flow delay-400' : ''} ${hoverClass}`}></div>
            <div className={`absolute h-px w-16 ${baseLineClass} top-1/2 right-1/2 -translate-y-1/2 translate-x-full ${animated ? 'animate-data-flow delay-600' : ''} ${hoverClass}`}></div>
            
            {/* Secondary nodes */}
            <div className={`absolute h-1 w-1 ${baseNodeClass} top-1/4 left-1/2 -translate-x-1/2 ${animated ? 'animate-pulse delay-300' : ''} ${hoverClass}`}></div>
            <div className={`absolute h-1 w-1 ${baseNodeClass} bottom-1/4 left-1/2 -translate-x-1/2 ${animated ? 'animate-pulse delay-500' : ''} ${hoverClass}`}></div>
            <div className={`absolute h-1 w-1 ${baseNodeClass} top-1/2 left-1/4 -translate-y-1/2 ${animated ? 'animate-pulse delay-700' : ''} ${hoverClass}`}></div>
            <div className={`absolute h-1 w-1 ${baseNodeClass} top-1/2 right-1/4 -translate-y-1/2 ${animated ? 'animate-pulse delay-900' : ''} ${hoverClass}`}></div>
          </>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className={cn("absolute inset-0 pointer-events-none", className)}>
      {renderNodes()}
    </div>
  );
};

export default DataNodes;
