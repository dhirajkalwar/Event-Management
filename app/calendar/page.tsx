"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from "@/components/ui/Navbar"

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
]

const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate()
const getFirstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay()

// Mock events data
const events = {
  "2024-09-18": { title: "Tech Innovation Summit", description: "Annual conference showcasing the latest in technology and innovation." },
}

export default function Calendar() {
  const defaultDate = new Date(2024, 8, 1) // September 2024
  const [currentDate, setCurrentDate] = useState(defaultDate)
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  const goToPrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
  }

  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))
  }

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: scrollRef.current.clientWidth,
        behavior: 'smooth'
      })
    }
  }, [currentDate])

  const renderMonth = (monthOffset: number) => {
    const monthDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + monthOffset, 1)
    const year = monthDate.getFullYear()
    const month = monthDate.getMonth()
    const daysInMonth = getDaysInMonth(year, month)
    const firstDayOfMonth = getFirstDayOfMonth(year, month)

    const calendarDays = Array.from({ length: 42 }, (_, i) => {
      const dayNumber = i - firstDayOfMonth + 1
      if (dayNumber > 0 && dayNumber <= daysInMonth) {
        return dayNumber
      }
      return null
    })

    const handleDateClick = (day: number | null) => {
      if (day !== null) {
        const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
        setSelectedDate(dateString)
      }
    }

    const today = new Date()

    return (
      
      <>
      <Card key={`${year}-${month}`} className="w-80 flex-shrink-0 bg-white/10 backdrop-blur-md border-none shadow-lg mx-2">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-white">{months[month]} {year}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-7 gap-2">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="text-center font-semibold text-sm text-white/80">
                {day}
              </div>
            ))}
            {calendarDays.map((day, index) => {
              const dateString = day ? `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}` : null
              const hasEvent = dateString && events[dateString as keyof typeof events]
              const isToday = day === today.getDate() && month === today.getMonth() && year === today.getFullYear()
              const isSelected = dateString === selectedDate
              return (
                <Button
                  key={index}
                  variant="ghost"
                  className={`h-10 ${
                    day === null ? 'invisible' : 
                    isToday ? 'bg-primary text-primary-foreground hover:bg-primary/90' :
                    hasEvent ? 'bg-secondary text-secondary-foreground hover:bg-secondary/90' :
                    'text-white hover:bg-white/20'
                  } ${isSelected ? 'border-2 border-white' : ''}`}
                  disabled={day === null}
                  onClick={() => handleDateClick(day)}
                >
                  {day}
                </Button>
              )
            })}
          </div>
        </CardContent>
      </Card>
      </>
    )
  }

  const selectedEvent = selectedDate ? events[selectedDate as keyof typeof events] : null

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center p-4" style={{ backgroundImage: "url('/placeholder.svg?height=1080&width=1920')" }}>
      <div className="absolute inset-0 bg-black/50" />
      <Navbar />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex items-center">
        <Button variant="outline" size="icon" onClick={goToPrevMonth} className="bg-white/10 backdrop-blur-md text-white border-white/20 hover:bg-white/20 mr-4">
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <div ref={scrollRef} className="flex-1 overflow-x-auto">
          <div className="flex">
            {renderMonth(-1)}
            {renderMonth(0)}
            {renderMonth(1)}
          </div>
        </div>
        <Button variant="outline" size="icon" onClick={goToNextMonth} className="bg-white/10 backdrop-blur-md text-white border-white/20 hover:bg-white/20 ml-4">
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
      <Card className="mt-4 bg-white/10 backdrop-blur-md border-none shadow-lg w-full max-w-7xl">
        <CardContent className="p-4">
          {selectedEvent ? (
            <div>
              <h3 className="text-2xl font-bold mb-2 text-white">{selectedEvent.title}</h3>
              <p className="text-sm text-white/80">{selectedEvent.description}</p>
            </div>
          ) : (
            <p className="text-sm text-white/80">Select a date to view event details.</p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}