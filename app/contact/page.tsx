import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Home, Info, LogIn, Menu, User, Phone } from "lucide-react"

export default function ContactPage() {
  const contactList = [
    { name: "John Doe", number: "+1 (555) 123-4567" },
    { name: "Jane Smith", number: "+1 (555) 987-6543" },
    { name: "Alex Johnson", number: "+1 (555) 246-8135" },
    { name: "Emily Brown", number: "+1 (555) 369-2580" },
    { name: "Michael Wilson", number: "+1 (555) 159-7531" },
  ]

  return (
    <div className="h-screen flex flex-col bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url('/placeholder.svg?height=1080&width=1920')" }}>
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

      {/* Contact Page Content */}
      <div className="relative z-10 flex-grow flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">Contact Us</h1>
        <p className="text-lg text-white text-center mb-6">
          Get in touch with our team for any inquiries or support.
        </p>
        
        <div className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {contactList.map((contact, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-md border-none">
              <CardContent className="p-3 flex flex-col items-center">
                <User className="h-8 w-8 text-white mb-2" />
                <h2 className="text-sm font-semibold text-white mb-1">{contact.name}</h2>
                <div className="flex items-center text-white text-xs">
                  <Phone className="h-3 w-3 mr-1" />
                  <span>{contact.number}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}