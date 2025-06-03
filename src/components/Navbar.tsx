"use client";

import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import { DumbbellIcon, HomeIcon, UserIcon, ZapIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  const { isSignedIn } = useUser();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-md border-b border-[#ff2a6d40] py-3">
      <div className="container mx-auto flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 group hover:scale-105 transition-transform">
          <div className="p-1 bg-[#ff2a6d20] rounded group-hover:bg-[#ff2a6d30] transition-colors">
            <ZapIcon className="w-4 h-4 text-[#ff2a6d] animate-pulse" />
          </div>
          <span className="text-xl font-bold font-mono">
            Vinsa<span className="text-[#ff2a6d] group-hover:text-[#ff758c] transition-colors">Fit</span>.ai
          </span>
        </Link>

        {/* NAVIGATION */}
        <nav className="flex items-center gap-5">
          {isSignedIn ? (
            <>
              <Link
                href="/"
                className="flex items-center gap-1.5 text-sm text-[#ff8fa3] hover:text-[#ff2a6d] transition-colors group"
              >
                <HomeIcon size={16} className="group-hover:scale-110 transition-transform" />
                <span>Home</span>
              </Link>

              <Link
                href="/generate-program"
                className="flex items-center gap-1.5 text-sm text-[#ff758c] hover:text-[#ff2a6d] transition-colors group"
              >
                <DumbbellIcon size={16} className="group-hover:scale-110 transition-transform" />
                <span>Generate</span>
              </Link>

              <Link
                href="/profile"
                className="flex items-center gap-1.5 text-sm text-[#ff4d6d] hover:text-[#ff2a6d] transition-colors group"
              >
                <UserIcon size={16} className="group-hover:scale-110 transition-transform" />
                <span>Profile</span>
              </Link>

              {/* User Menu */}
              <div className="ml-2 hover:opacity-80 transition-opacity">
                <UserButton
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      avatarBox: "w-8 h-8 rounded-md border-2 border-[#ff2a6d40] hover:border-[#ff2a6d]"
                    }
                  }}
                />
              </div>
            </>
          ) : (
            <>
              <SignInButton mode="modal">
                <Button
                  variant="ghost"
                  className="text-[#ff8fa3] hover:text-[#ff2a6d] hover:bg-[#ff2a6d20]"
                >
                  Sign In
                </Button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button className="bg-[#ff2a6d] hover:bg-[#ff4d6d] text-white border-[#ff2a6d40] hover:border-[#ff2a6d]">
                  Sign Up
                </Button>
              </SignUpButton>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
