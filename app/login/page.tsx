"use client"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/ui/Navbar";
import { useState } from "react";
import axios from "@/configs/axiosConfig";
import Cookies from 'js-cookie'
import { useRouter } from "next/navigation"; // Import useRouter
import { useDispatch } from 'react-redux'; // Import useDispatch
import { login } from "@/store/authSlice"; // Import your login action


export default function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();
  const dispatch = useDispatch()


  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post<any>("/login", { email, password });
      const token = response.data.token; // Assuming your token is in response.data.token
      Cookies.set("token", token, { expires: 1 }); // Set the cookie to expire in 7 days
      console.log("Token saved:", token);

      dispatch(login())
      router.push('/')

      // Handle successful login, e.g., redirect or show a message
    } catch (error) {
      console.error(error);
      // Handle error, e.g., show an error message
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3')" }}>
      <div className="absolute inset-0 bg-black/60" />

      {/* Navbar */}
      <Navbar/>

      {/* Login Form */}
      <div className="relative z-10 flex-grow flex items-center justify-center px-4 py-12">
      <form onSubmit={handleLogin}>

        <Card className="w-full max-w-md bg-white/10 backdrop-blur-md border-none">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-white cursor-default">Login to EventPro</CardTitle>
          </CardHeader>

          <CardContent>
              <div className="space-y-4">
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
            <div className="flex items-center justify-between w-full">
              <Button className="px-4 text-white hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300" type="submit" >Sign In</Button>
              <Link href="/forgotPassword" className="text-sm text-white hover:underline hover:text-violet-400">
                Forgot your password?
              </Link>
            </div>
            <div className="w-full border-t border-white/20 my-2"></div>
            <div className="text-sm text-center">
              <span className="text-white cursor-default">Don't have an account? </span>
              <Link href="/createAccount" className="text-violet-400 hover:underline font-semibold">
                Create a new account
              </Link>
            </div>
          </CardFooter>
        </Card>
        </form>

      </div>
    </div>
  );
}
