import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChevronRight,
  Dumbbell,
  Sparkles,
  Users,
  Clock,
  AppleIcon,
  ShieldIcon,
} from "lucide-react";
import { USER_PROGRAMS } from "@/constants";

const UserPrograms = () => {
  return (
    <div className="w-full pb-16 sm:pb-24 pt-10 sm:pt-16 relative">
      {/* Background cyber elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[8%] w-20 h-20 rounded-full border border-primary/10 animate-[spin_30s_linear_infinite]"></div>
        <div className="absolute bottom-[15%] right-[10%] w-16 h-16 rounded-full border border-primary/5 animate-[spin_40s_linear_reverse_infinite]"></div>

        {/* Data nodes */}
        <div className="absolute h-1 w-1 bg-primary/20 rounded-full top-[25%] right-[20%] animate-pulse"></div>
        <div className="absolute h-1 w-1 bg-primary/30 rounded-full bottom-[30%] left-[25%] animate-pulse delay-1000"></div>
        <div className="absolute h-1.5 w-1.5 bg-primary/20 rounded-full top-[50%] left-[10%] animate-pulse delay-700"></div>
        <div className="absolute h-1 w-1 bg-primary/30 rounded-full bottom-[20%] right-[15%] animate-pulse delay-300"></div>
      </div>      <div className="container mx-auto max-w-6xl px-2 sm:px-4">
        {/* HEADER- PROGRAM GALLERY */}
        <div className="bg-card/90 backdrop-blur-sm border border-border rounded-lg overflow-hidden mb-8 sm:mb-16 relative group hover:shadow-[0_0_20px_rgba(255,42,109,0.15)] transition-all duration-500">
          {/* Animated scan line */}
          <div className="absolute h-px w-full left-0 bg-gradient-to-r from-transparent via-[#ff2a6d30] to-transparent animate-scan-horizontal" style={{ animationDuration: '4s', top: '40%' }}></div>
          
          {/* Corner elements */}
          <div className="absolute top-0 left-0 w-4 h-4 overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="absolute top-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-500"></div>
            <div className="absolute top-0 left-0 h-0 w-px bg-primary group-hover:h-full transition-all duration-500"></div>
          </div>
          <div className="absolute top-0 right-0 w-4 h-4 overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="absolute top-0 right-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-500"></div>
            <div className="absolute top-0 right-0 h-0 w-px bg-primary group-hover:h-full transition-all duration-500"></div>
          </div>
          <div className="absolute bottom-0 left-0 w-4 h-4 overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-500"></div>
            <div className="absolute bottom-0 left-0 h-0 w-px bg-primary group-hover:h-full transition-all duration-500"></div>
          </div>
          <div className="absolute bottom-0 right-0 w-4 h-4 overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="absolute bottom-0 right-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-500"></div>
            <div className="absolute bottom-0 right-0 h-0 w-px bg-primary group-hover:h-full transition-all duration-500"></div>
          </div>
            {/* HEADER BAR */}
          <div className="flex items-center justify-between px-3 sm:px-5 py-2 sm:py-3 border-b border-border bg-background/70">
            <div className="flex items-center gap-1 sm:gap-2">
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-primary animate-pulse-glow"></div>
              <span className="text-xs sm:text-sm text-primary font-medium">Program Gallery</span>
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground">Featured Plans</div>
          </div>{/* HEADER CONTENT */}
          <div className="p-4 sm:p-8 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 relative inline-block">
              <span className="text-foreground relative inline-block group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-foreground group-hover:via-primary/80 group-hover:to-foreground transition-all duration-700">AI-Generated </span>
              <span className="text-primary">Programs</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-primary/50 to-transparent group-hover:w-full transition-all duration-700 ease-in-out"></span>
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto mb-6 sm:mb-10 relative inline-block">
              Explore personalized fitness plans our AI assistant has created for other users
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-primary/40 to-transparent group-hover:w-full transition-all duration-700 ease-in-out"></span>
            </p>{/* STATS */}            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 mt-10 font-mono">
              <div className="flex flex-col items-center relative group/stat mb-6 sm:mb-0">
                <p className="text-3xl text-primary group-hover/stat:scale-110 transition-transform duration-300">500+</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wide mt-1">
                  PROGRAMS
                </p>
                <div className="absolute -inset-2 border border-primary/0 group-hover/stat:border-primary/20 rounded transition-all duration-300"></div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-gradient-to-b from-transparent via-border to-transparent animate-pulse opacity-70"></div>
              <div className="flex flex-col items-center relative group/stat mb-6 sm:mb-0">
                <p className="text-3xl text-primary group-hover/stat:scale-110 transition-transform duration-300">3min</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wide mt-1">
                  CREATION TIME
                </p>
                <div className="absolute -inset-2 border border-primary/0 group-hover/stat:border-primary/20 rounded transition-all duration-300"></div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-gradient-to-b from-transparent via-border to-transparent animate-pulse opacity-70 animation-delay-200"></div>
              <div className="flex flex-col items-center relative group/stat">
                <p className="text-3xl text-primary group-hover/stat:scale-110 transition-transform duration-300">100%</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wide mt-1">
                  PERSONALIZED
                </p>
                <div className="absolute -inset-2 border border-primary/0 group-hover/stat:border-primary/20 rounded transition-all duration-300"></div>
              </div>
            </div>
          </div>
        </div>        {/* Program cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">{USER_PROGRAMS.map((program) => (
            <Card
              key={program.id}
              className="bg-card/90 backdrop-blur-sm border border-border group hover:border-primary/50 transition-all duration-500 overflow-hidden hover:shadow-[0_0_20px_rgba(255,42,109,0.15)] relative"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Animated corner elements on hover */}
              <div className="absolute top-0 left-0 w-4 h-4 overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute top-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-500"></div>
                <div className="absolute top-0 left-0 h-0 w-px bg-primary group-hover:h-full transition-all duration-500"></div>
              </div>
              <div className="absolute top-0 right-0 w-4 h-4 overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute top-0 right-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-500"></div>
                <div className="absolute top-0 right-0 h-0 w-px bg-primary group-hover:h-full transition-all duration-500"></div>
              </div>
              <div className="absolute bottom-0 left-0 w-4 h-4 overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-500"></div>
                <div className="absolute bottom-0 left-0 h-0 w-px bg-primary group-hover:h-full transition-all duration-500"></div>
              </div>
              <div className="absolute bottom-0 right-0 w-4 h-4 overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute bottom-0 right-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-500"></div>
                <div className="absolute bottom-0 right-0 h-0 w-px bg-primary group-hover:h-full transition-all duration-500"></div>
              </div>
              
              {/* Scan line animation */}
              <div className="absolute h-px w-full left-0 bg-gradient-to-r from-transparent via-[#ff2a6d30] to-transparent opacity-0 group-hover:opacity-100" style={{ animationDuration: '3s', top: '30%', animationName: 'scan-horizontal', animationIterationCount: 'infinite' }}></div>              {/* Card header with user info */}
              <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-background/70 relative z-10">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow"></div>
                  <span className="text-sm text-primary group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-primary/70 transition-all duration-500">USER.{program.id}</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  {program.fitness_level.toUpperCase()}
                </div>
              </div>              <CardHeader className="pt-4 sm:pt-6 px-3 sm:px-5 relative z-10">
                <div className="flex items-center gap-2 sm:gap-4 mb-3 sm:mb-4">
                  <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-full overflow-hidden border border-border group-hover:border-primary/30 transition-all duration-500 relative">
                    <img
                      src={program.profilePic}
                      alt={`${program.first_name}`}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Profile image scan effect */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent opacity-0 group-hover:opacity-100 animate-scanline" style={{ backgroundSize: '100% 4px' }}></div>
                  </div>
                  <div>
                    <CardTitle className="text-lg sm:text-xl text-foreground relative inline-block">
                      {program.first_name}
                      <span className="text-primary">.exe</span>
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-primary/50 to-transparent group-hover:w-full transition-all duration-700 ease-in-out"></span>
                    </CardTitle>
                    <div className="text-xs sm:text-sm text-muted-foreground flex items-center gap-2 mt-1">
                      <Users className="h-3 w-3 sm:h-4 sm:w-4 text-primary/70" />
                      {program.age}y • {program.workout_days}d/week
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap sm:flex-nowrap justify-between items-center gap-2 sm:gap-4">
                  <div className="px-2 sm:px-3 py-1 bg-primary/10 rounded border border-primary/20 text-xs sm:text-sm text-primary flex items-center gap-1 sm:gap-2 hover:bg-primary/20 hover:border-primary/30 transition-all duration-300 truncate">
                    <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                    <span className="truncate">{program.fitness_goal}</span>
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground flex items-center gap-1 sm:gap-2 flex-shrink-0">
                    <Clock className="h-3 w-3 sm:h-4 sm:w-4 group-hover:text-primary/70 transition-colors duration-300" />
                    v3.5
                  </div>
                </div>
              </CardHeader>              <CardContent className="px-3 sm:px-5 relative z-10">
                {/* Program details */}
                <div className="space-y-4 sm:space-y-5 pt-2">
                  <div className="flex items-start gap-2 sm:gap-3 group/item hover:bg-primary/5 p-2 rounded transition-all duration-300">
                    <div className="p-1.5 sm:p-2 rounded-md bg-primary/10 text-primary mt-0.5 group-hover/item:bg-primary/20 group-hover/item:scale-105 transition-all duration-300 flex-shrink-0">
                      <Dumbbell className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center">
                        <h3 className="font-medium text-sm sm:text-base text-foreground relative inline-block truncate">
                          {program.workout_plan.title}
                          <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-primary/40 to-transparent group-hover/item:w-full transition-all duration-700 ease-in-out"></span>
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-1 truncate">
                        {program.equipment_access}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 sm:gap-3 group/item hover:bg-secondary/5 p-2 rounded transition-all duration-300">
                    <div className="p-1.5 sm:p-2 rounded-md bg-secondary/10 text-secondary mt-0.5 group-hover/item:bg-secondary/20 group-hover/item:scale-105 transition-all duration-300 flex-shrink-0">
                      <AppleIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center">
                        <h3 className="font-medium text-sm sm:text-base text-foreground relative inline-block truncate">
                          {program.diet_plan.title}
                          <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-secondary/40 to-transparent group-hover/item:w-full transition-all duration-700 ease-in-out"></span>
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-1 truncate">
                        System optimized nutrition
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 sm:gap-3 group/item hover:bg-primary/5 p-2 rounded transition-all duration-300">
                    <div className="p-1.5 sm:p-2 rounded-md bg-primary/10 text-primary mt-0.5 group-hover/item:bg-primary/20 group-hover/item:scale-105 transition-all duration-300 flex-shrink-0">
                      <ShieldIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center">
                        <h3 className="font-medium text-sm sm:text-base text-foreground relative inline-block truncate">
                          AI Safety Protocols
                          <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-primary/40 to-transparent group-hover/item:w-full transition-all duration-700 ease-in-out"></span>
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-1 truncate">
                        Protection systems enabled
                      </p>
                    </div>
                  </div>
                </div>

                {/* Program description */}
                <div className="mt-4 sm:mt-5 pt-4 sm:pt-5 border-t border-border">
                  <div className="text-xs sm:text-sm text-muted-foreground group-hover:text-muted-foreground/80 transition-colors duration-300 relative font-mono overflow-hidden">
                    <span className="text-primary group-hover:animate-pulse">&gt; </span>
                    {program.workout_plan.description.substring(0, 90)}...
                    <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-primary/20 to-transparent group-hover:w-full transition-all duration-1000"></div>
                  </div>
                </div>
              </CardContent>              <CardFooter className="px-3 sm:px-5 py-3 sm:py-4 border-t border-border relative z-10">
                <Link href={`/programs/${program.id}`} className="w-full">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 relative group/btn overflow-hidden text-xs sm:text-sm py-1.5 sm:py-2 h-auto">
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#ff4d6d] to-[#ff2a6d] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></span>
                    <span className="absolute -inset-px bg-gradient-to-r from-[#ff2a6d40] via-[#ff4d6d60] to-[#ff2a6d40] opacity-0 group-hover/btn:opacity-100 blur-sm transition-opacity"></span>
                    <span className="relative z-10">View Program Details</span>
                    <ChevronRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 relative z-10 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>        {/* CTA section */}
        <div className="mt-10 sm:mt-16 text-center px-4">
          <Link href="/generate-program">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 sm:px-8 py-4 sm:py-6 text-base sm:text-lg relative group overflow-hidden w-full sm:w-auto"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#ff4d6d] to-[#ff2a6d] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="absolute -inset-px bg-gradient-to-r from-[#ff2a6d40] via-[#ff4d6d60] to-[#ff2a6d40] opacity-0 group-hover:opacity-100 blur-sm transition-opacity"></span>
              <span className="relative z-10">Generate Your Program</span>
              <Sparkles className="ml-2 h-4 w-4 sm:h-5 sm:w-5 relative z-10 animate-pulse-glow" />
            </Button>
          </Link>          <br/>
          <div className="mt-4 relative inline-block group perspective-500">
            <p className="text-muted-foreground text-xs sm:text-sm relative inline-block overflow-hidden group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#ff2a6d] group-hover:to-[#1a1a2e] transition-all duration-500">
              <span className="relative z-10">Join </span>
              <span className="relative z-10 font-bold text-primary group-hover:animate-pulse-glow">500+</span>
              <span className="relative z-10"> users with </span>
              <span className="relative z-10 font-bold text-primary group-hover:animate-pulse-glow">AI-customized</span>
              <span className="relative z-10"> fitness programs</span>
              
              {/* Animated scan line */}
              <span className="absolute h-full w-full top-0 left-0 bg-gradient-to-r from-transparent via-[#ff2a6d20] to-transparent opacity-0 group-hover:opacity-100 animate-scan-horizontal"></span>
              
              {/* Data nodes decoration */}
              <span className="absolute -right-2 top-0 h-1 w-1 rounded-full bg-primary opacity-0 group-hover:opacity-60 transition-opacity"></span>
              <span className="absolute right-2 -top-2 h-1 w-1 rounded-full bg-primary opacity-0 group-hover:opacity-80 transition-opacity animation-delay-200"></span>
              
              {/* Bottom line with enhanced animation */}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-primary/40 via-primary to-transparent group-hover:w-full transition-all duration-700 ease-in-out"></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPrograms;