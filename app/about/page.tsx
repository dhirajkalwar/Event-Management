import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Home, Info, LogIn, Menu, User } from "lucide-react"
import Navbar from "@/components/ui/Navbar"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-cover bg-center"  style={{backgroundImage: "url('https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
      <div className="absolute inset-0 bg-black/60" />

      {/* Navbar */}
      <Navbar/>

      {/* About Page Content */}
      <div className="relative z-10 flex-grow flex flex-col items-center justify-between px-4 py-16">
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center flex-grow">
          <h1 className="text-5xl md:text-7xl font-bold text-white text-center mb-8">About EventPro</h1>
        </div>
        
        <Card className="w-full max-w-4xl mx-auto mb-8 bg-white/10 backdrop-blur-md border-none">
          <CardContent className="p-6">
            <p className="text-lg text-white text-center">
              EventPro is your premier destination for discovering and managing exciting events. 
              From concerts to conferences, we bring together a diverse range of experiences to 
              suit every interest. Our platform is designed to make event planning and attendance 
              seamless, ensuring you never miss out on the moments that matter most. Join us in 
              creating unforgettable memories and connecting with like-minded individuals from 
              around the world.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}