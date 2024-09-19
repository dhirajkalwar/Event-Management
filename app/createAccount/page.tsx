import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calendar, Home, Info, LogIn, Menu, User } from "lucide-react"

export default function CreateAccountPage() {
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

      {/* Create Account Form */}
      <div className="relative z-10 flex-grow flex items-center justify-center px-4 py-12">
        <Card className="w-full max-w-md bg-white/10 backdrop-blur-md border-none">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-white">Create Account</CardTitle>
          </CardHeader>
          <CardContent>
            <form>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">Email</Label>
                  <Input id="email" placeholder="Enter your email" type="email" required className="bg-white/20 border-white/30 text-white placeholder:text-white/50" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-white">Password</Label>
                  <Input id="password" placeholder="Enter your password" type="password" required className="bg-white/20 border-white/30 text-white placeholder:text-white/50" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password" className="text-white">Confirm Password</Label>
                  <Input id="confirm-password" placeholder="Confirm your password" type="password" required className="bg-white/20 border-white/30 text-white placeholder:text-white/50" />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Link href="/"><Button className="w-full" type="submit">Create Account</Button></Link>
            <div className="text-sm text-center">
              <span className="text-white">Already have an account? </span>
              <Link href="/login" className="text-white hover:underline font-semibold">
                Log in
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}