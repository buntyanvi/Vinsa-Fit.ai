import { GithubIcon, LinkedinIcon, Globe2Icon, ZapIcon, ActivityIcon } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-[#ff2a6d40] bg-background/80 backdrop-blur-sm">
      {/* Top border glow */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#ff2a6d40] to-transparent"></div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo and Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">            <Link
              href="/"
              className="flex items-center gap-2 hover:scale-105 transition-transform duration-300 group/logo relative"
            >
              <div className="p-1 bg-[#ff2a6d20] rounded group-hover/logo:bg-[#ff2a6d30] transition-colors relative overflow-hidden">
                <ZapIcon className="w-4 h-4 text-[#ff2a6d] animate-pulse" />
                {/* Subtle scan line */}
                <div className="absolute top-0 left-0 h-full w-px bg-[#ff2a6d20] animate-scan-horizontal"></div>
                {/* Data particles */}
                <div className="absolute inset-0 opacity-0 group-hover/logo:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 left-0 h-1 w-1 bg-[#ff2a6d40] rounded-full animate-ping" style={{ animationDuration: '1.5s' }}></div>
                  <div className="absolute bottom-0 right-0 h-1 w-1 bg-[#ff2a6d40] rounded-full animate-ping" style={{ animationDuration: '2s' }}></div>
                </div>
              </div>
              <span className="text-xl font-bold font-mono relative">
                <span className="group-hover/logo:text-white transition-colors duration-300">Vinsa</span>
                <span className="text-[#ff2a6d] group-hover/logo:text-[#ff4d6d] transition-colors duration-300">Fit</span>
                <span className="group-hover/logo:text-white transition-colors duration-300">.ai</span>
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#ff2a6d] group-hover/logo:w-full transition-all duration-500 delay-100"></span>
              </span>
              <div className="absolute -inset-2 rounded-lg border border-[#ff2a6d20] opacity-0 group-hover/logo:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Lagishetti Vignesh - All rights reserved
            </p>
          </div>

          {/* Links Container */}
          <div className="relative p-4 border border-[#ff2a6d30] rounded-lg bg-background/30 backdrop-blur-sm group transition-transform duration-300 hover:translate-y-[-2px]">
            {/* Corner Elements */}
            <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-[#ff2a6d40] group-hover:border-[#ff2a6d80] transition-colors duration-300"></div>
            <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-[#ff2a6d40] group-hover:border-[#ff2a6d80] transition-colors duration-300"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-[#ff2a6d40] group-hover:border-[#ff2a6d80] transition-colors duration-300"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-[#ff2a6d40] group-hover:border-[#ff2a6d80] transition-colors duration-300"></div>

            {/* Animated lines */}
            <div className="absolute top-0 left-0 w-0 h-[1px] bg-[#ff2a6d40] group-hover:w-full transition-all duration-700"></div>
            <div className="absolute bottom-0 right-0 w-0 h-[1px] bg-[#ff2a6d40] group-hover:w-full transition-all duration-700 group-hover:right-auto group-hover:left-0"></div>
            <div className="absolute left-0 bottom-0 h-0 w-[1px] bg-[#ff2a6d40] group-hover:h-full transition-all duration-700 delay-100"></div>
            <div className="absolute right-0 top-0 h-0 w-[1px] bg-[#ff2a6d40] group-hover:h-full transition-all duration-700 delay-100 group-hover:top-auto group-hover:bottom-0"></div>

            {/* Links Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-2 text-sm">
              <Link
                href="/about"
                className="text-[#ff8fa3] hover:text-[#ff2a6d] hover:translate-x-1 transition-all duration-300 relative group/link"
              >
                <span className="relative z-10">About</span>
                <span className="absolute bottom-0 left-0 w-0 h-px bg-[#ff2a6d40] group-hover/link:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="/terms"
                className="text-[#ff758c] hover:text-[#ff2a6d] hover:translate-x-1 transition-all duration-300 relative group/link"
              >
                <span className="relative z-10">Terms</span>
                <span className="absolute bottom-0 left-0 w-0 h-px bg-[#ff2a6d40] group-hover/link:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="/privacy"
                className="text-[#ff4d6d] hover:text-[#ff2a6d] hover:translate-x-1 transition-all duration-300 relative group/link"
              >
                <span className="relative z-10">Privacy</span>
                <span className="absolute bottom-0 left-0 w-0 h-px bg-[#ff2a6d40] group-hover/link:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="/contact"
                className="text-[#ff8fa3] hover:text-[#ff2a6d] hover:translate-x-1 transition-all duration-300 relative group/link"
              >
                <span className="relative z-10">Contact</span>
                <span className="absolute bottom-0 left-0 w-0 h-px bg-[#ff2a6d40] group-hover/link:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="/blog"
                className="text-[#ff758c] hover:text-[#ff2a6d] hover:translate-x-1 transition-all duration-300 relative group/link"
              >
                <span className="relative z-10">Blog</span>
                <span className="absolute bottom-0 left-0 w-0 h-px bg-[#ff2a6d40] group-hover/link:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="/help"
                className="text-[#ff4d6d] hover:text-[#ff2a6d] hover:translate-x-1 transition-all duration-300 relative group/link"
              >
                <span className="relative z-10">Help</span>
                <span className="absolute bottom-0 left-0 w-0 h-px bg-[#ff2a6d40] group-hover/link:w-full transition-all duration-300"></span>
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center gap-4">            <div className="flex items-center gap-4">
              <Link
                href="https://github.com/buntyanvi"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group/social"
              >
                <GithubIcon className="w-5 h-5 text-[#ff8fa3] group-hover/social:text-[#ff2a6d] transition-colors duration-300" />
                <span className="absolute -inset-2 rounded-full bg-[#ff2a6d10] opacity-0 group-hover/social:opacity-100 transition-opacity duration-300"></span>
                <span className="absolute -inset-4 rounded-full border border-[#ff2a6d20] scale-0 group-hover/social:scale-100 transition-transform duration-300"></span>
                {/* Data connection line */}
                <span className="absolute top-1/2 -right-4 h-[1px] w-0 bg-[#ff2a6d30] group-hover/social:w-4 transition-all duration-300 delay-100"></span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/vignesh-lagishetti-69a102219/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group/social"
              >
                <LinkedinIcon className="w-5 h-5 text-[#ff758c] group-hover/social:text-[#ff2a6d] transition-colors duration-300" />
                <span className="absolute -inset-2 rounded-full bg-[#ff2a6d10] opacity-0 group-hover/social:opacity-100 transition-opacity duration-300"></span>
                <span className="absolute -inset-4 rounded-full border border-[#ff2a6d20] scale-0 group-hover/social:scale-100 transition-transform duration-300"></span>
                {/* Data connection lines */}
                <span className="absolute top-1/2 -right-4 h-[1px] w-0 bg-[#ff2a6d30] group-hover/social:w-4 transition-all duration-300 delay-100"></span>
                <span className="absolute top-1/2 -left-4 h-[1px] w-0 bg-[#ff2a6d30] group-hover/social:w-4 transition-all duration-300 delay-100"></span>
              </Link>
              <Link
                href="https://www.vigneshlagishetti.top/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group/social"
              >
                <Globe2Icon className="w-5 h-5 text-[#ff4d6d] group-hover/social:text-[#ff2a6d] transition-colors duration-300" />
                <span className="absolute -inset-2 rounded-full bg-[#ff2a6d10] opacity-0 group-hover/social:opacity-100 transition-opacity duration-300"></span>
                <span className="absolute -inset-4 rounded-full border border-[#ff2a6d20] scale-0 group-hover/social:scale-100 transition-transform duration-300"></span>
                {/* Data connection line */}
                <span className="absolute top-1/2 -left-4 h-[1px] w-0 bg-[#ff2a6d30] group-hover/social:w-4 transition-all duration-300 delay-100"></span>
                {/* Subtle data node dots */}
                <span className="absolute -top-1 -right-1 h-1 w-1 rounded-full bg-[#ff2a6d40] scale-0 opacity-0 group-hover/social:scale-100 group-hover/social:opacity-100 transition-all duration-300 delay-200"></span>
                <span className="absolute -bottom-1 -left-1 h-1 w-1 rounded-full bg-[#ff2a6d40] scale-0 opacity-0 group-hover/social:scale-100 group-hover/social:opacity-100 transition-all duration-300 delay-300"></span>
              </Link>
            </div>
              {/* Status */}
            <div className="flex items-center gap-2 px-3 py-2 border border-[#ff2a6d20] rounded-full bg-background/20 hover:border-[#ff2a6d50] transition-all duration-300 group/status relative overflow-hidden">
              {/* Background scan lines */}
              <div className="absolute inset-0 opacity-20 group-hover/status:opacity-40 transition-opacity duration-500">
                <div className="h-full w-full bg-gradient-to-r from-transparent via-[#ff2a6d10] to-transparent bg-[length:200%_100%] animate-scanline"></div>
              </div>
              
              {/* Status indicator */}
              <div className="relative flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 shadow-sm shadow-green-500/20 relative">
                  <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30" style={{ animationDuration: '2s' }}></div>
                </div>
                <span className="text-xs font-mono text-[#ff8fa3] group-hover/status:text-[#ff2a6d] transition-colors duration-300 relative">
                  <span className="relative inline-block">
                    <span className="inline-block">SYSTEM&nbsp;</span>
                    <span className="group-hover/status:animate-pulse inline-block">OPERATIONAL</span>
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-[#ff2a6d30] group-hover/status:w-full transition-all duration-700"></span>
                </span>
              </div>
              
              {/* Activity icon */}
              <ActivityIcon className="w-3 h-3 text-green-500 ml-1 opacity-0 group-hover/status:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
