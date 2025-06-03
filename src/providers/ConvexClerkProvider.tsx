"use client";

import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { useEffect } from "react";

// Debug component to help diagnose auth issues
function AuthDebugger() {
  const { getToken, isLoaded, isSignedIn } = useAuth();
  
  useEffect(() => {
    if (isLoaded) {
      console.log("Auth is loaded", { isSignedIn });
      if (isSignedIn) {
        getToken({ template: "convex" }).then(token => {
          console.log("Got Clerk token for Convex", { 
            tokenLength: token?.length || 0,
            tokenPreview: token ? `${token.slice(0, 10)}...` : 'no token'
          });
        }).catch(error => {
          console.error("Error getting Clerk token:", error);
        });
      } else {
        console.log("User is not signed in");
      }
    } else {
      console.log("Auth is not loaded yet");
    }
  }, [isLoaded, isSignedIn, getToken]);
  
  return null;
}

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

function ConvexClerkProvider({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}>
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        <AuthDebugger />
        {children}
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
}

export default ConvexClerkProvider;
