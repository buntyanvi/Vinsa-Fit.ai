"use client";

import React, { useRef } from "react";
import { LucideIcon } from "lucide-react";

interface IconWithEffectProps {
  icon: LucideIcon;
  size?: number;
  className?: string;
  effectType?: "float" | "spin" | "bounce" | "wobble" | "glow" | "energy" | "shine" | "data-pulse";
  color?: "primary" | "secondary" | "accent" | "muted";
  onClick?: () => void;
}

const IconWithEffect: React.FC<IconWithEffectProps> = ({
  icon: Icon,
  size = 16,
  className = "",
  effectType = "glow",
  color = "primary",
  onClick,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Color classes based on the color prop
  const getColorClass = () => {
    switch (color) {
      case "primary":
        return "text-[#ff2a6d] hover:text-[#ff4d6d]";
      case "secondary":
        return "text-[#ff4d6d] hover:text-[#ff2a6d]";
      case "accent":
        return "text-[#e7b8ff] hover:text-[#d8b8ff]";
      case "muted":
        return "text-muted-foreground hover:text-foreground";
      default:
        return "text-[#ff2a6d] hover:text-[#ff4d6d]";
    }
  };

  // Background color classes based on the color prop
  const getBackgroundClass = () => {
    switch (color) {
      case "primary":
        return "bg-[#ff2a6d20]";
      case "secondary":
        return "bg-[#ff4d6d20]";
      case "accent":
        return "bg-[#e7b8ff20]";
      case "muted":
        return "bg-muted/20";
      default:
        return "bg-[#ff2a6d20]";
    }
  };

  // Effect classes based on the effectType prop
  const getEffectClass = () => {
    switch (effectType) {
      case "float":
        return "animate-[float_3s_ease-in-out_infinite]";
      case "spin":
        return "animate-[spin_5s_linear_infinite]";
      case "bounce":
        return "animate-[bounce_1s_ease-in-out_infinite]";
      case "wobble":
        return "animate-[wobble_1.5s_ease-in-out_infinite]";
      case "glow":
        return "animate-pulse-glow";
      case "energy":
        return "animate-energy-ring";
      case "shine":
        return "after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-r after:from-transparent after:via-white/20 after:to-transparent after:-translate-x-full after:animate-[shine_3s_ease-in-out_infinite]";
      case "data-pulse":
        return "animate-data-flow";
      default:
        return "animate-pulse-glow";
    }
  };

  // Get the hover effect class
  const getHoverEffectClass = () => {
    return "hover:scale-110 transition-transform duration-300";
  };

  return (
    <div
      ref={containerRef}
      onClick={onClick}
      className={`relative group cursor-pointer ${
        onClick ? getHoverEffectClass() : ""
      } ${className}`}
    >
      {/* Background Effect */}
      {effectType === "glow" && (
        <div
          className={`absolute inset-0 rounded-full ${getBackgroundClass()} opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300`}
          style={{ transform: "scale(1.3)" }}
        ></div>
      )}

      {effectType === "energy" && (
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={`absolute -inset-1 ${getBackgroundClass()} opacity-0 group-hover:opacity-30 rounded-full animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]`}
          ></div>
          <div
            className={`absolute -inset-1 ${getBackgroundClass()} opacity-0 group-hover:opacity-20 rounded-full animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite_0.5s]`}
          ></div>
        </div>
      )}

      {/* Data Node Effects for data-pulse */}
      {effectType === "data-pulse" && (
        <>
          <div className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute top-0 right-0 w-1 h-1 rounded-full bg-primary/40 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-1 h-1 rounded-full bg-primary/40 animate-pulse delay-700"></div>
            <div className="absolute w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent top-0 right-0 animate-data-flow"></div>
          </div>
        </>
      )}

      <Icon className={`relative z-10 ${getColorClass()} ${getEffectClass()}`} size={size} />
    </div>
  );
};

export default IconWithEffect;