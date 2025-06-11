"use client";  
  
import { Button } from "@/components/ui/button";  
import { useRouter } from "next/navigation";  
  
export default function GenerateProgramPage() {  
  const router = useRouter();  
  
  return (  
    <div className="min-h-screen flex flex-col items-center justify-center p-4">  
      <h1 className="text-4xl font-bold mb-6">Generate Your Fitness Program</h1>  
      <p className="mb-8 text-center max-w-md">Our AI coach will help create a personalized plan.</p>  
      <Button onClick={() => router.push("/profile")}>Go to Profile</Button>  
    </div>  
  );  
} 
