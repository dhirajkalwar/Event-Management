import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Home, Info, LogIn, Menu, User } from "lucide-react"

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

      {/* Event Content */}
      <div className="relative z-10 flex-grow flex flex-col items-center justify-center px-4 py-12">
        <Card className="w-full max-w-4xl bg-white/10 backdrop-blur-md border-none overflow-hidden">
          <Image
            src={event.imageUrl}
            alt={event.title}
            width={800}
            height={400}
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
            <Button className="w-full sm:w-auto">Register Now</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}