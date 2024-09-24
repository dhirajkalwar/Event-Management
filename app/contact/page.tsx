import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Home, Info, LogIn, Menu, User, Phone } from "lucide-react"
import Navbar from "@/components/ui/Navbar"

export default function ContactPage() {
  const contactList = [
    { name: "John Doe", number: "+1 (555) 123-4567" },
    { name: "Jane Smith", number: "+1 (555) 987-6543" },
    { name: "Alex Johnson", number: "+1 (555) 246-8135" },
    { name: "Emily Brown", number: "+1 (555) 369-2580" },
    { name: "Michael Wilson", number: "+1 (555) 159-7531" },
  ]

  return (
    <div className="h-screen flex flex-col bg-cover bg-center overflow-hidden"  style={{backgroundImage: "url('https://images.unsplash.com/photo-1489513691500-41ef4acdb665?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
      <div className="absolute inset-0 bg-black/60" />

      {/* Navbar */}
      <Navbar/>

      {/* Contact Page Content */}
      <div className="relative z-10 flex-grow flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4 cursor-default">Contact Us</h1>
        <p className="text-lg text-white text-center mb-16 cursor-default">
          Get in touch with our team for any inquiries or support.
        </p>
        <Button>
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
        </Button>
      </div>
    </div>
  )
}