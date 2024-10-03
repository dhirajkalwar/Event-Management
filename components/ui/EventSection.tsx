"use client"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Bell, Calendar, Home, Info, LogIn, Menu, User } from "lucide-react"
import { useEffect, useState } from "react"
import axios from "@/configs/axiosConfig"

interface Event {
    ID: number;
    Title: string;
    Description: string;
}



export default function EventSection () {

    const [events, setEvents] = useState<Event[]>([])

    const GetAllEvents = async () => {
        console.log("Called");
        try {
            const res = await axios.get<any>('/events');

            const formattedEvents = res.data.map((event: any) => ({
                ID:event.ID,
                Title: event.Title,
                Description: event.Description,
            }))
            
            setEvents(formattedEvents);
            console.log(formattedEvents);
            
            
        } catch (error) {
            console.log(error);
            
        }
        
    }

    useEffect(() => {
        GetAllEvents()
    },[])
    return (
        <>
            <section className="py-12 px-4 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8 cursor-default">Upcoming Events</h2>
        <div className="flex overflow-x-auto space-x-4 pb-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 pb-4">
          {events.map((event) => (
            <Card key={event.ID} className="w-72 flex-shrink-0">
              <Link href={`/events/${event.ID}`}>
              <CardHeader>      
                <img
                  src={"https://images.unsplash.com/photo-1619973226698-b77a5b5dd14b?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                  alt={`Event ${event}`}
                  width="100%"
                  height="100%"
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="mb-2">Event {event.Title}</CardTitle>
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
        </>
    )
}