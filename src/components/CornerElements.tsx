const CornerElements = () => {
  return (
    <>
      {/* Corner Lines with Growing Effect */}
      <div className="absolute inset-0">
        {/* Top Line */}
        <div className="absolute top-0 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-[#ff2a6d20] to-transparent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
        {/* Bottom Line */}
        <div className="absolute bottom-0 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-[#ff2a6d20] to-transparent transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
        {/* Left Line */}
        <div className="absolute left-0 top-[20%] bottom-[20%] w-px bg-gradient-to-b from-transparent via-[#ff2a6d20] to-transparent transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-700"></div>
        {/* Right Line */}
        <div className="absolute right-0 top-[20%] bottom-[20%] w-px bg-gradient-to-b from-transparent via-[#ff2a6d20] to-transparent transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-700"></div>
      </div>

      {/* Corners with Glow Effect */}
      {/* Top Left */}
      <div className="absolute top-0 left-0 w-4 h-4 border-l border-t border-[#ff2a6d30] group-hover:border-[#ff2a6d40] transition-all duration-500">
        <div className="absolute -top-px -left-px w-1.5 h-1.5">
          <div className="w-full h-full bg-[#ff2a6d] rounded-full opacity-40 group-hover:opacity-60 animate-corner-glow"></div>
          <div className="absolute inset-0 bg-[#ff2a6d] rounded-full opacity-20 group-hover:opacity-40 animate-energy-ring"></div>
        </div>
      </div>
      
      {/* Top Right */}
      <div className="absolute top-0 right-0 w-4 h-4 border-r border-t border-[#ff2a6d30] group-hover:border-[#ff2a6d40] transition-all duration-500">
        <div className="absolute -top-px -right-px w-1.5 h-1.5">
          <div className="w-full h-full bg-[#ff2a6d] rounded-full opacity-40 group-hover:opacity-60 animate-corner-glow delay-100"></div>
          <div className="absolute inset-0 bg-[#ff2a6d] rounded-full opacity-20 group-hover:opacity-40 animate-energy-ring delay-100"></div>
        </div>
      </div>
      
      {/* Bottom Left */}
      <div className="absolute bottom-0 left-0 w-4 h-4 border-l border-b border-[#ff2a6d30] group-hover:border-[#ff2a6d40] transition-all duration-500">
        <div className="absolute -bottom-px -left-px w-1.5 h-1.5">
          <div className="w-full h-full bg-[#ff2a6d] rounded-full opacity-40 group-hover:opacity-60 animate-corner-glow delay-200"></div>
          <div className="absolute inset-0 bg-[#ff2a6d] rounded-full opacity-20 group-hover:opacity-40 animate-energy-ring delay-200"></div>
        </div>
      </div>
      
      {/* Bottom Right */}
      <div className="absolute bottom-0 right-0 w-4 h-4 border-r border-b border-[#ff2a6d30] group-hover:border-[#ff2a6d40] transition-all duration-500">
        <div className="absolute -bottom-px -right-px w-1.5 h-1.5">
          <div className="w-full h-full bg-[#ff2a6d] rounded-full opacity-40 group-hover:opacity-60 animate-corner-glow delay-300"></div>
          <div className="absolute inset-0 bg-[#ff2a6d] rounded-full opacity-20 group-hover:opacity-40 animate-energy-ring delay-300"></div>
        </div>
      </div>
    </>
  );
};
export default CornerElements;
