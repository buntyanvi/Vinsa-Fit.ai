import { UserResource } from "@clerk/types";
import CornerElements from "./CornerElements";

const ProfileHeader = ({ user }: { user: UserResource | null | undefined }) => {
  if (!user) return null;
  return (
    <div className="mb-10 relative backdrop-blur-sm border border-border p-6 group hover:shadow-[0_0_20px_rgba(255,42,109,0.15)] transition-all duration-500">
      <CornerElements />
      
      {/* Animated scan line */}
      <div className="absolute h-px w-full left-0 bg-gradient-to-r from-transparent via-[#ff2a6d30] to-transparent animate-scan-horizontal" style={{ animationDuration: '4s', top: '30%' }}></div>
      
      {/* Data nodes and connection lines */}
      <div className="absolute top-1/4 right-1/4 w-1 h-1 rounded-full bg-primary/40 animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/3 w-1 h-1 rounded-full bg-primary/40 animate-pulse delay-700"></div>
      <div className="absolute w-px h-20 bg-gradient-to-b from-transparent via-primary/20 to-transparent top-1/4 right-1/4 animate-data-flow"></div>

      <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
        <div className="relative group">
          {user.imageUrl ? (
            <div className="relative w-24 h-24 overflow-hidden rounded-lg group-hover:shadow-[0_0_15px_rgba(255,42,109,0.3)] transition-all duration-500">
              <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/30 rounded-lg transition-all duration-300 z-10"></div>
              <img
                src={user.imageUrl}
                alt={user.fullName || "Profile"}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Profile image scan effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent opacity-0 group-hover:opacity-100 animate-scanline" style={{ backgroundSize: '100% 4px' }}></div>
            </div>
          ) : (
            <div className="w-24 h-24 rounded-lg bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center group-hover:shadow-[0_0_15px_rgba(255,42,109,0.3)] transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/30 rounded-lg transition-all duration-300 z-10"></div>
              <span className="text-3xl font-bold text-primary relative z-2">
                {user.fullName?.charAt(0) || "U"}
              </span>
              {/* Avatar scan effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent opacity-0 group-hover:opacity-100 animate-scanline" style={{ backgroundSize: '100% 4px' }}></div>
            </div>
          )}
          <div className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-green-500 border-2 border-background animate-pulse-glow"></div>
        </div>

        <div className="flex-1 group">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
            <h1 className="text-3xl font-bold tracking-tight relative">
              <span className="text-foreground relative inline-block group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-foreground group-hover:via-primary/80 group-hover:to-foreground transition-all duration-700">{user.fullName}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-primary/50 to-transparent group-hover:w-full transition-all duration-700 ease-in-out"></span>
            </h1>
            <div className="flex items-center bg-cyber-terminal-bg backdrop-blur-sm border border-border rounded px-3 py-1 group-hover:border-primary/30 transition-all duration-500 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse mr-2 relative z-1"></div>
              <p className="text-xs font-mono text-primary relative z-1">USER ACTIVE</p>
            </div>
          </div>
          <div className="h-px w-full bg-gradient-to-r from-primary via-secondary to-primary opacity-50 my-2 relative overflow-hidden">
            <div className="absolute inset-0 w-1/2 h-full bg-white opacity-30 blur-sm -translate-x-full group-hover:animate-[slide_2s_ease-in-out_infinite_alternate]"></div>
          </div>
          <p className="text-muted-foreground font-mono relative">
            {user.primaryEmailAddress?.emailAddress}
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-primary/40 to-transparent group-hover:w-full transition-all duration-700 ease-in-out"></span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default ProfileHeader;