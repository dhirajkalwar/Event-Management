import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Bell, Calendar, Home, Info, LogIn, Menu, User } from "lucide-react"
import Navbar from "@/components/ui/Navbar"
import Link from "next/link"
import EventSection from "@/components/ui/EventSection"

export default function LandingPage() {
  
  return (
    <div className="min-h-screen flex flex-col bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1442504028989-ab58b5f29a4a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-screen">
        {/* <img
          src="/placeholder.svg?height=1080&width=1920"
          alt="Featured Event"
          className="absolute inset-0 w-full h-full object-cover"
        /> */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center cursor-default">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4"><span>Summer Music Festival</span></h1>
            <div className="space-x-4">
            <Link href='/moreInfo'>
              <Button size="lg" className=" bg-black hover:bg-white/20  rounded-full">
                <Info className="mr-2 h-4 w-4 text-white" /><span className="text-white">More Information</span> 
              </Button>
            </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <EventSection />
    </div>
  )
}