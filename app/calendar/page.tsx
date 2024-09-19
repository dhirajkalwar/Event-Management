"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Home, Info, LogIn, Menu, User } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"

export default function CalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  const events = [
    { date: new Date(2023, 5, 15), title: "Summer Music Festival", description: "Annual outdoor music event" },
    { date: new Date(2023, 5, 22), title: "Tech Conference", description: "Latest in technology and innovation" },
    { date: new Date(2023, 6, 4), title: "Independence Day Celebration", description: "Fireworks and family fun" },
    { date: new Date(2023, 6, 10), title: "Art Exhibition Opening", description: "Featuring local artists" },
    { date: new Date(2023, 7, 5), title: "Community Picnic", description: "Food, games, and socializing" },
    { date: new Date(2024, 8, 20), title: "Future Tech Expo", description: "Showcasing upcoming technological innovations" },
  ]

  const selectedDateEvents = events.filter(
    (event) => event.date.toDateString() === date?.toDateString()
  )

  return (
    <div className="min-h-screen flex flex-col bg-cover bg-center" style={{ backgroundImage: "url('/placeholder.svg?height=1080&width=1920')" }}>
      <div className="absolute inset-0 bg-black/60" />

      {/* Navbar */}
      <nav className="relative z-20 flex items-center justify-between p-4 bg-black/30 backdrop-blur-sm">
        <div className="flex items-center space-x-4">
          <CalendarIcon className="h-6 w-6 text-white" />
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
              <CalendarIcon className="mr-2 h-4 w-4" /> Calendar
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

      {/* Calendar Content */}
      <div className="relative z-10 flex-grow flex flex-col items-center justify-center px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-8">Event Calendar</h1>
        <div className="w-full max-w-4xl flex flex-col md:flex-row gap-8">
          <Card className="flex-grow bg-white/10 backdrop-blur-md border-none">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-4">
                <Button
                  variant="ghost"
                  className="text-white hover:bg-white/20"
                  onClick={() => setDate(prev => prev && new Date(prev.getFullYear(), prev.getMonth() - 1, 1))}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <div className="text-white text-lg font-semibold w-32 text-center">
                  {date?.toLocaleString('default', { month: 'long', year: 'numeric' })}
                </div>
                <Button
                  variant="ghost"
                  className="text-white hover:bg-white/20"
                  onClick={() => setDate(prev => prev && new Date(prev.getFullYear(), prev.getMonth() + 1, 1))}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border-none text-white"
                classNames={{
                  months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
                  month: "space-y-4",
                  caption: "flex justify-center pt-1 relative items-center",
                  caption_label: "text-sm font-medium",
                  nav: "space-x-1 flex items-center",
                  nav_button: "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
                  nav_button_previous: "absolute left-1",
                  nav_button_next: "absolute right-1",
                  table: "w-full border-collapse space-y-1",
                  head_row: "flex",
                  head_cell: "text-white rounded-md w-9 font-normal text-[0.8rem]",
                  row: "flex w-full mt-2",
                  cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                  day: "h-9 w-9 p-0 font-normal aria-selected:opacity-100",
                  day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
                  day_today: "bg-accent text-accent-foreground",
                  day_outside: "opacity-50",
                  day_disabled: "opacity-50",
                  day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
                  day_hidden: "invisible",
                }}
                components={{
                  Caption: () => null,
                }}
              />
            </CardContent>
          </Card>
          <Card className="flex-grow bg-white/10 backdrop-blur-md border-none">
            <CardContent className="p-4">
              <h2 className="text-2xl font-semibold text-white mb-4">
                {date ? date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : 'Select a date'}
              </h2>
              <div className="h-[300px] overflow-y-auto">
                {selectedDateEvents.length > 0 ? (
                  <ul className="space-y-4">
                    {selectedDateEvents.map((event, index) => (
                      <li key={index} className="bg-white/20 p-4 rounded-md">
                        <h3 className="text-xl font-semibold text-white mb-2">{event.title}</h3>
                        <p className="text-sm text-white/80">{event.description}</p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-white">No events scheduled for this date.</p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}