const TerminalOverlay = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 p-4">
      <div className="relative bg-cyber-terminal-bg backdrop-blur-sm border border-border rounded-lg p-3 overflow-hidden font-mono group hover:shadow-[0_0_15px_rgba(255,42,109,0.15)] transition-all duration-500">
        {/* Animated scan line */}
        <div className="absolute h-px w-full left-0 bg-gradient-to-r from-transparent via-[#ff2a6d30] to-transparent animate-scan-horizontal" style={{ animationDuration: '3s', top: '40%' }}></div>
        
        {/* Corners with Glow Effect */}
        <div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-[#ff2a6d20] opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
        <div className="absolute top-0 right-0 w-3 h-3 border-r border-t border-[#ff2a6d20] opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
        <div className="absolute bottom-0 left-0 w-3 h-3 border-l border-b border-[#ff2a6d20] opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
        <div className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-[#ff2a6d20] opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
        
        {/* Status bar */}
        <div className="flex items-center justify-between mb-2 border-b border-border pb-1 relative">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow"></div>
            <p className="text-xs text-primary group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-primary/70 transition-all duration-500">SYSTEM ACTIVE</p>
          </div>
          <p className="text-xs text-muted-foreground relative">
            ID:78412.93
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-primary/40 to-transparent group-hover:w-full transition-all duration-700 ease-in-out"></span>
          </p>
        </div>

        <p className="text-sm text-foreground mb-2 tracking-tight relative inline-block">
          <span className="text-primary">/</span> WORKOUT ANALYSIS COMPLETE
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-primary/40 to-transparent group-hover:w-full transition-all duration-700 ease-in-out"></span>
        </p>

        <div className="space-y-1.5 text-xs text-muted-foreground">
          <div className="flex items-center group/item hover:bg-primary/5 px-1 rounded transition-colors duration-300">
            <div className="text-primary mr-2 group-hover/item:scale-110 transition-transform duration-300">01</div>
            <span>30 min strength training (upper body)</span>
          </div>
          <div className="flex items-center group/item hover:bg-primary/5 px-1 rounded transition-colors duration-300">
            <div className="text-primary mr-2 group-hover/item:scale-110 transition-transform duration-300">02</div>
            <span>20 min cardio (moderate intensity)</span>
          </div>
          <div className="flex items-center group/item hover:bg-primary/5 px-1 rounded transition-colors duration-300">
            <div className="text-primary mr-2 group-hover/item:scale-110 transition-transform duration-300">03</div>
            <span>10 min flexibility (recovery)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerminalOverlay;