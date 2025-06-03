import Link from "next/link";
import CornerElements from "./CornerElements";
import { Button } from "./ui/button";
import { ArrowRightIcon } from "lucide-react";

const NoFitnessPlan = () => {
  return (
    <div className="relative backdrop-blur-sm border border-[#ff2a6d40] rounded-lg p-10 text-center group hover:shadow-[0_0_25px_rgba(255,42,109,0.15)] transition-all duration-500">
      <CornerElements />

      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#ff2a6d05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Scanline effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#ff2a6d] to-transparent animate-cyber-slide"></div>
      </div>
      
      {/* Data nodes and connection lines */}
      <div className="absolute top-1/4 right-1/4 w-1 h-1 rounded-full bg-primary/40 animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/3 w-1 h-1 rounded-full bg-primary/40 animate-pulse delay-700"></div>
      <div className="absolute w-px h-20 bg-gradient-to-b from-transparent via-primary/20 to-transparent top-1/4 right-1/4 animate-data-flow"></div>

      <h2 className="text-2xl font-bold mb-4 font-mono relative inline-block">
        <span className="text-[#ff2a6d] animate-pulse-glow">No</span> fitness plans yet
        <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-primary/50 to-transparent group-hover:w-full transition-all duration-700 ease-in-out"></span>
      </h2>
      <p className="text-[#ff8fa3] mb-6 max-w-md mx-auto group-hover:text-[#ff758c] transition-colors">
        Start by creating a personalized fitness and diet plan tailored to your specific goals and
        needs
      </p>
      <Button
        size="lg"
        asChild
        className="bg-transparent border border-[#ff2a6d40] hover:border-[#ff2a6d] hover:bg-[#ff2a6d10] text-[#ff2a6d] group-hover:shadow-[0_0_10px_rgba(255,42,109,0.2)] transition-all duration-300 overflow-hidden relative"
      >
        <Link href="/generate-program" className="relative flex items-center px-8 py-6 text-lg font-medium">
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#ff2a6d10] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          <span className="relative z-10">Generate Your Program</span>
          <ArrowRightIcon className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </Button>
      
      {/* Animated scan line */}
      <div className="absolute h-px w-full left-0 bg-gradient-to-r from-transparent via-[#ff2a6d30] to-transparent animate-scan-horizontal" style={{ animationDuration: '4s', top: '70%' }}></div>
    </div>
  );
};

export default NoFitnessPlan;
