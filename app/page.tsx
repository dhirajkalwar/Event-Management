import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Bell, Calendar, Home, Info, LogIn, Menu, User } from "lucide-react"
import Navbar from "@/components/ui/Navbar"
import Link from "next/link"
import img1 from "../app/img/Em1.jpg"

export default function LandingPage() {
  
  return (
    <div className="min-h-screen flex flex-col bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
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
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4"><span>Summer Music Festival</span></h1>
            <div className="space-x-4">
              <Button size="lg" className=" bg-black hover:bg-white/20 ">
                <Info className="mr-2 h-4 w-4 text-white" /><span className="text-white">More Information</span> 
              </Button>
              <Button size="lg" className=" bg-black hover:bg-white/20 ">
                <Info className="mr-2 h-4 w-4 text-white" /><span className="text-white">Participate</span> 
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-12 px-4 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">Upcoming Events</h2>
        <div className="flex overflow-x-auto space-x-4 pb-4">
          {[1, 2, 3, 4, 5].map((event) => (
            <Card key={event} className="w-72 flex-shrink-0">
              <Link href= '/eventCard'>
              <CardHeader>
                <img
                  src={`/placeholder.svg?height=150&width=280&text=Event+${event}`}
                  alt={`Event ${event}`}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="mb-2">Event {event}</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </p>
              </CardContent>
          
              <CardFooter>
                
                <Button  variant="outline" className="w-full hover:bg-black hover:text-white">
                <Bell className="mr-2 h-6 w-4 " /> Add Reminder 
              </Button>
              </CardFooter>
              </Link>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}