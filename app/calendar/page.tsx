"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import Navbar from "@/components/ui/Navbar";

export default function CalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const events = [
    { date: new Date(2023, 5, 15), title: "Summer Music Festival", description: "Annual outdoor music event" },
    { date: new Date(2023, 5, 22), title: "Tech Conference", description: "Latest in technology and innovation" },
    { date: new Date(2023, 6, 4), title: "Independence Day Celebration", description: "Fireworks and family fun" },
    { date: new Date(2023, 6, 10), title: "Art Exhibition Opening", description: "Featuring local artists" },
    { date: new Date(2024, 8, 20), title: "Future Tech Expo", description: "Showcasing upcoming technological innovations" },
  ];

  const selectedDateEvents = events.filter(
    (event) => event.date.toDateString() === date?.toDateString()
  );

  const today = new Date().toDateString();

  return (
    <div className="min-h-screen flex flex-col bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
      <div className="absolute inset-0 bg-black/60" />

      {/* Navbar */}
      <Navbar />

      {/* Calendar and Events Section */}
      <div className="relative z-10 flex-grow flex flex-col items-center justify-center px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-8 cursor-default">Event Calendar</h1>
        <div className="w-full max-w-5xl flex flex-col md:flex-row gap-8">
          
          {/* Calendar Card */}
          <Card className="flex-grow bg-white/10 backdrop-blur-md border-none">
            <CardContent className="p-6  flex justify-center">
              <Calendar
                mode="single"
                selected={date}
                onSelect={(newDate) => setDate(newDate)}
                className="rounded-md border-none "
                classNames={{
                  months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 ",
                  month: "space-y-6",
                  caption: "flex justify-center pt-1 relative items-center",
                  caption_label: "text-lg font-medium",
                  nav: "space-x-1 flex items-center",
                  nav_button: "h-9 w-9 bg-transparent p-0 opacity-50 hover:opacity-100 ",
                  nav_button_previous: "absolute left-1",
                  nav_button_next: "absolute right-1",
                  table: "w-full border-collapse space-y-2",
                  head_row: "flex",
                  head_cell: "text-white rounded-md w-12 font-normal text-[0.9rem]",
                  row: "flex w-full mt-2",
                  cell: "text-center text-base p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                  day: "h-12 w-12 p-0 font-normal aria-selected:opacity-100",
                  day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
                  day_today: "bg-accent text-accent-foreground",
                  day_outside: "opacity-50",
                  day_disabled: "opacity-50",
                  day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
                  day_hidden: "invisible",
                }}
                components={{
                  Day: ({ date: dayDate, displayMonth }) => {
                    const isOutsideMonth = dayDate.getMonth() !== displayMonth.getMonth();
              
                    if (isOutsideMonth) {
                      return (
                        <div
                          className="
                            h-12 w-12
                            flex items-center justify-center 
                            rounded-full
                            cursor-pointer
                            transition-colors
                            day-outside text-muted-foreground opacity-50  aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30
                            text-lg
                          "
                        >
                          {dayDate.getDate()}
                        </div>
                      );
                    }

                    const isEventDate = events.some(event => event.date.toDateString() === dayDate.toDateString());
                    const isToday = today === dayDate.toDateString();
                    const isSelectedDate = dayDate.toDateString() === (date ? date.toDateString() : '');

                    return (
                      <div
                        className={`h-12 w-12 flex items-center justify-center cursor-pointer rounded-full text-lg
                          ${isEventDate ? 'bg-green-500 text-white' : ''}
                          ${isToday ? 'bg-red-500 text-white' : ''}
                          ${isSelectedDate && !isToday && !isEventDate ? 'opacity-80 ' : 'opacity-100'}`}
                        onClick={() => setDate(dayDate)}
                      >
                        {dayDate.getDate()}
                      </div>
                    );
                  },
                }}
              />
            </CardContent>
          </Card>

          {/* Events Card */}
          <Card className="flex-grow bg-white/10 backdrop-blur-md border-none">
            <CardContent className="p-4 cursor-default">
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
  );
}