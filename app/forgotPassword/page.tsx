import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calendar, Home, Info, LogIn, Menu, User } from "lucide-react"
import Navbar from "@/components/ui/Navbar"

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen flex flex-col bg-cover bg-center"  style={{backgroundImage: "url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3')" }}>
      <div className="absolute inset-0 bg-black/60" />

      {/* Navbar */}
      <Navbar/>

      {/* Forgot Password Form */}
      <div className="relative z-10 flex-grow flex items-center justify-center px-4 py-12">
        <Card className="w-full max-w-md bg-white/10 backdrop-blur-md border-none">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-white cursor-default">Reset Password</CardTitle>
          </CardHeader>
          <CardContent>
            <form>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">Email</Label>
                  <Input id="email" placeholder="Enter your email" type="email" required className="bg-white/20 border-white/30 text-white placeholder:text-white/50" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-password" className="text-white">New Password</Label>
                  <Input id="new-password" placeholder="Enter new password" type="password" required className="bg-white/20 border-white/30 text-white placeholder:text-white/50" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password" className="text-white">Confirm Password</Label>
                  <Input id="confirm-password" placeholder="Confirm new password" type="password" required className="bg-white/20 border-white/30 text-white placeholder:text-white/50" />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col items-center space-y-4">
            <Link href="/login"><Button className="w-full text-white hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300" type="submit">Reset Password</Button></Link>
            <div className="text-sm text-center">
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}