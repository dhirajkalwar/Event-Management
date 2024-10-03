"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/ui/Navbar";
import { useState } from "react";
import axios from "@/configs/axiosConfig"

export default function CreateAccountPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle form submission
  const handleCreateAccount = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Here, you can handle your logic to create an account, such as sending the data to an API
    console.log("Creating account with:", { name, email, password });

   try {
    
    const res = await axios.post('/register',{
      name,email,password
    })

   } catch (error) {
      console.log(error);
      
   }
  };

  return (
    <div className="min-h-screen flex flex-col bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3')" }}>
      <div className="absolute inset-0 bg-black/60" />

      {/* Navbar */}
      <Navbar />

      {/* Create Account Form */}
      <div className="relative z-10 flex-grow flex items-center justify-center px-4 py-12">
      <form onSubmit={handleCreateAccount}>

        <Card className="w-full max-w-md bg-white/10 backdrop-blur-md border-none">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-white cursor-default">Create Account</CardTitle>
          </CardHeader>
          <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">Name</Label>
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">Email</Label>
                  <Input
                    id="email"
                    placeholder="Enter your email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-white">Password</Label>
                  <Input
                    id="password"
                    placeholder="Enter your password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
                  />
                </div>
              </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button className="w-full text-white hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300" type="submit"  >
              Create Account
            </Button>
            <div className="text-sm text-center">
              <span className="text-white cursor-default">Already have an account? </span>
              <Link href="/login" className="text-violet-400 hover:underline font-semibold">
                Log in
              </Link>
            </div>
          </CardFooter>
        </Card>
        </form>

      </div>
    </div>
  );
}
