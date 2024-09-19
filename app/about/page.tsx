import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Home, Info, LogIn, Menu, User } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-cover bg-center" style={{ backgroundImage: "url('/placeholder.svg?height=1080&width=1920')" }}>
      <div className="absolute inset-0 bg-black/60" />

      {/* Navbar */}
      <nav className="relative z-20 flex items-center justify-between p-4 bg-black/30 backdrop-blur-sm">
        <div className="flex items-center space-x-4">
          <Calendar className="h-6 w-6 text-white" />
          <span className="text-lg font-bold text-white">EventPro</span>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="text-white hover:bg-white/20" asChild>
            <Link href="/">
              <Home className="mr-2 h-4 w-4" /> Home
            </Link>
          </Button>
          <Button variant="ghost" size="sm" className="text-white hover:bg-white/20" asChild>
            <Link href="/calendar">
              <Calendar className="mr-2 h-4 w-4" /> Calendar
            </Link>
          </Button>
          <Button variant="ghost" size="sm" className="text-white hover:bg-white/20" asChild>
            <Link href="/about">
              <Info className="mr-2 h-4 w-4" /> About
            </Link>
          </Button>
          <Button variant="ghost" size="sm" className="text-white hover:bg-white/20" asChild>
            <Link href="/contact">
              <User className="mr-2 h-4 w-4" /> Contact
            </Link>
          </Button>
          <Button variant="outline" size="sm" className="text-white border-white hover:bg-white hover:text-black" asChild>
            <Link href="/login">
              <LogIn className="mr-2 h-4 w-4" /> Login
            </Link>
          </Button>
        </div>
        <Button variant="ghost" size="icon" className="md:hidden text-white">
          <Menu className="h-6 w-6" />
        </Button>
      </nav>

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