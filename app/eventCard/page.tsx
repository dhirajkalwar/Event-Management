import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Home, Info, LogIn, Menu, User } from "lucide-react"
import Navbar from "@/components/ui/Navbar"

export default function EventPage() {
  const event = {
    title: "Future Tech Expo 2024",
    description: "Join us for an exciting showcase of upcoming technological innovations. Experience hands-on demos, attend insightful talks from industry leaders, and network with tech enthusiasts from around the globe. From AI and robotics to sustainable energy solutions, discover the technologies that will shape our future.",
    date: "September 20, 2024",
    time: "9:00 AM - 6:00 PM",
    location: "TechCenter, Silicon Valley",
    imageUrl: "/placeholder.svg?height=400&width=800"
  }

  return (
    <div className="min-h-screen flex flex-col bg-cover bg-center cursor-default" style={{backgroundImage: "url('https://images.unsplash.com/photo-1573152958734-1922c188fba3?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
      <div className="absolute inset-0 bg-black/60" />

      {/* Navbar */}
     <Navbar/>

      {/* Event Content */}
      <div className="relative z-10 flex-grow flex flex-col items-center justify-center px-4 py-12">
        <Card className="w-full max-w-4xl bg-white/10 backdrop-blur-md border-none overflow-hidden">
          <img
            src={"https://plus.unsplash.com/premium_photo-1661315459644-18297c559777?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
            alt={event.title}
            width="100%"
            height="100%"
            className="w-full h-64 object-cover"
          />
          <CardContent className="p-6">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{event.title}</h1>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center text-white">
                <Calendar className="mr-2 h-5 w-5" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center text-white">
                <User className="mr-2 h-5 w-5" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center text-white">
                <Home className="mr-2 h-5 w-5" />
                <span>{event.location}</span>
              </div>
            </div>
            <p className="text-white/80 text-lg mb-6">{event.description}</p>
            <Link href="/"><Button className="w-full sm:w-auto text-white">Register Now</Button></Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}