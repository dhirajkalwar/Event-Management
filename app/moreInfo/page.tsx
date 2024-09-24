import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Home, Info, LogIn, Menu, User, Clock, MapPin } from "lucide-react"
import Navbar from "@/components/ui/Navbar"

export default function EventInfoPage() {
  const eventInfo = {
    title: "Future Tech Expo 2024",
    description: "The Future Tech Expo 2024 is the premier event for technology enthusiasts, industry professionals, and innovators. This annual gathering showcases the latest advancements in technology and provides a platform for networking, learning, and inspiration.",
    date: "September 20-22, 2024",
    time: "9:00 AM - 6:00 PM daily",
    location: "TechCenter, Silicon Valley",
    imageUrl: "/placeholder.svg?height=400&width=800",
  }

  return (
    <div className="min-h-screen flex flex-col bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1515846515008-eaf8eccbace8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
      <div className="absolute inset-0 bg-black/60" />

      {/* Navbar */}
      <Navbar/>

      {/* Event Info Content */}
      <div className="relative z-10 flex-grow flex flex-col items-center justify-center px-4 py-12">
        <Card className="w-full max-w-4xl bg-white/10 backdrop-blur-md border-none overflow-hidden">
          <img
            src={"https://images.unsplash.com/photo-1453090927415-5f45085b65c0?q=80&w=1696&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
            alt={'eventInfo.title'}
            width="100%"
            height="100%"
            className="w-full h-64 object-cover"
          />
          <CardContent className="p-6">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{eventInfo.title}</h1>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center text-white">
                <Calendar className="mr-2 h-5 w-5" />
                <span>{eventInfo.date}</span>
              </div>
              <div className="flex items-center text-white">
                <Clock className="mr-2 h-5 w-5" />
                <span>{eventInfo.time}</span>
              </div>
              <div className="flex items-center text-white">
                <MapPin className="mr-2 h-5 w-5" />
                <span>{eventInfo.location}</span>
              </div>
            </div>
            <p className="text-white/80 text-lg mb-6">{eventInfo.description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="outline" className="flex-1  hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">Register Now</Button>
              <Button variant="outline" className="flex-1  hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">Download Schedule</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}