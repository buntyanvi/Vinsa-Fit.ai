"use client";

import { Geist, Geist_Mono } from "next/font/google";
import ConvexClerkProvider from "@/providers/ConvexClerkProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayoutClient({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexClerkProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen overflow-x-hidden`}>
          {/* Cyber-themed screen flicker effect - subtle and rare */}
          <div className="fixed inset-0 pointer-events-none z-50 bg-[#ff2a6d05] opacity-0 animate-screen-flicker"></div>
          
          {/* Loading Indicator */}
          <div className="fixed bottom-4 right-4 z-50 pointer-events-none">
            <div className="flex items-center bg-background/90 backdrop-blur-sm border border-[#ff2a6d30] rounded-md px-3 py-1.5 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-[#3cff2a] animate-pulse mr-2"></div>
              <span className="text-xs font-mono text-[#ff2a6d] opacity-80">SYSTEM ACTIVE</span>
            </div>
          </div>
          
          <Navbar />

          {/* GRID BACKGROUND */}
          <div className="fixed inset-0 -z-1">
            {/* Base gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background"></div>
            
            {/* Cyber grid */}
            <div className="absolute inset-0 bg-[linear-gradient(var(--cyber-grid-color)_1px,transparent_1px),linear-gradient(90deg,var(--cyber-grid-color)_1px,transparent_1px)] bg-[size:20px_20px] animate-subtle-pulse"></div>
            
            {/* Animated scan lines */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute h-px w-full bg-gradient-to-r from-transparent via-[#ff2a6d15] to-transparent animate-scan-vertical"></div>
              <div className="absolute h-full w-px left-1/3 bg-gradient-to-b from-transparent via-[#ff2a6d10] to-transparent animate-scan-horizontal" style={{ animationDuration: '8s' }}></div>
              <div className="absolute h-full w-px left-2/3 bg-gradient-to-b from-transparent via-[#ff2a6d10] to-transparent animate-scan-horizontal" style={{ animationDuration: '12s', animationDelay: '2s' }}></div>
            </div>
            
            {/* Cyber data visualization layer */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
              <div className="absolute top-[15%] right-[10%] w-24 h-24 rounded-full border border-[#ff2a6d20] animate-slow-spin" style={{ animationDuration: '30s' }}></div>
              <div className="absolute bottom-[20%] left-[15%] w-32 h-32 rounded-full border border-[#ff4d6d15] animate-slow-spin" style={{ animationDuration: '40s', animationDirection: 'reverse' }}></div>
              
              {/* Circuit connections */}
              <div className="absolute top-[30%] left-[20%] w-[40%] h-px bg-gradient-to-r from-[#ff2a6d10] to-transparent"></div>
              <div className="absolute top-[50%] right-[25%] w-[30%] h-px bg-gradient-to-l from-[#ff2a6d10] to-transparent"></div>
            </div>
            
            {/* Subtle data nodes */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute h-1 w-1 bg-[#ff2a6d30] rounded-full top-[10%] left-[20%] animate-pulse-slow"></div>
              <div className="absolute h-1 w-1 bg-[#ff4d6d30] rounded-full top-[30%] left-[70%] animate-pulse-slow delay-1000"></div>
              <div className="absolute h-1.5 w-1.5 bg-[#ff758c20] rounded-full top-[70%] left-[30%] animate-pulse-slow delay-2000"></div>
              <div className="absolute h-1 w-1 bg-[#ff8fa330] rounded-full top-[80%] left-[80%] animate-pulse-slow delay-3000"></div>
              <div className="absolute h-2 w-2 bg-[#ff2a6d10] rounded-full top-[45%] left-[45%] animate-pulse-slow delay-4000"></div>
              <div className="absolute h-1 w-1 bg-[#ff2a6d20] rounded-full top-[25%] left-[55%] animate-pulse-slow delay-5000"></div>
              
              {/* Data connection lines that occasionally flash */}
              <div className="absolute top-[10%] left-[20%] w-[30%] h-px bg-[#ff2a6d05] animate-cyber-shine" style={{ animationDuration: '8s', animationDelay: '1s' }}></div>
              <div className="absolute top-[70%] left-[30%] w-[40%] h-px bg-[#ff2a6d05] animate-cyber-shine" style={{ animationDuration: '10s', animationDelay: '3s' }}></div>
            </div>
          </div>

          <main className="pt-24 flex-grow relative">
            {/* Terminal boot animation overlay - appears briefly on page load */}
            <div className="fixed inset-0 z-50 pointer-events-none animate-terminal-fade-out flex flex-col items-center justify-center text-[#ff2a6d] font-mono opacity-0">
              <div className="text-sm mb-2">SYSTEM BOOT SEQUENCE</div>
              <div className="w-64 h-1 bg-[#ff2a6d20] mb-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-[#ff2a6d] animate-boot-progress origin-left"></div>
              </div>
              <div className="text-xs animate-terminal-text">VINSA-FIT.AI // INITIALIZING...</div>
            </div>
            
            {/* Fade in animation for main content */}
            <div className="animate-fadeIn animation-delay-200">
              {children}
            </div>
            
            {/* Decorative corner elements */}
            <div className="fixed top-0 right-0 w-16 h-16 pointer-events-none overflow-hidden opacity-40">
              <div className="absolute top-0 right-0 w-px h-8 bg-[#ff2a6d30]"></div>
              <div className="absolute top-0 right-0 h-px w-8 bg-[#ff2a6d30]"></div>
              <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-[#ff2a6d40]"></div>
            </div>
            
            <div className="fixed bottom-0 left-0 w-16 h-16 pointer-events-none overflow-hidden opacity-40">
              <div className="absolute bottom-0 left-0 w-px h-8 bg-[#ff2a6d30]"></div>
              <div className="absolute bottom-0 left-0 h-px w-8 bg-[#ff2a6d30]"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-[#ff2a6d40]"></div>
            </div>
          </main>
          <Footer />
        </body>
      </html>
    </ConvexClerkProvider>
  );
}
