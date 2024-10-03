"use client"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Bell, Calendar, Home, Info, LogIn, Menu, User } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store"; // Adjust the path to your RootState type
import { logout } from "@/store/authSlice"; // Adjust the path to your authSlice
import Cookies from "js-cookie";

export default function Navbar() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  const handleLogout = () => {
    Cookies.remove('token')
    dispatch(logout()); // Dispatch logout action
    // Optionally, clear the token from cookies/local storage
    // Redirect to home or login page after logout if needed
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-black/30 backdrop-blur-sm">
      <div className="flex items-center space-x-4">
        <Calendar className="h-6 w-6 text-white" />
        <span className="text-lg font-bold text-white cursor-default">EventPro</span>
      </div>
      <div className="hidden md:flex items-center space-x-4">
        <Button variant="ghost" size="sm" className="text-white hover:bg-white hover:text-black hover:rounded-full transition-colors duration-300" style={{ borderRadius: '0.375rem' }} asChild>
          <Link href="/">
            <Home className="mr-2 h-4 w-4" /> Home
          </Link>
        </Button>
        <Button variant="ghost" size="sm" className="text-white hover:bg-white hover:text-black hover:rounded-full transition-colors duration-300" style={{ borderRadius: '0.375rem' }} asChild>
          <Link href="/calendar">
            <Calendar className="mr-2 h-4 w-4" /> Calendar
          </Link>
        </Button>
        <Button variant="ghost" size="sm" className="text-white hover:bg-white hover:text-black hover:rounded-full transition-colors duration-300" style={{ borderRadius: '0.375rem' }} asChild>
          <Link href="/about">
            <Info className="mr-2 h-4 w-4" /> About
          </Link>
        </Button>
        <Button variant="ghost" size="sm" className="text-white hover:bg-white hover:text-black hover:rounded-full transition-colors duration-300" style={{ borderRadius: '0.375rem' }} asChild>
          <Link href="/contact">
            <User className="mr-2 h-4 w-4" /> Contact
          </Link>
        </Button>
        {isLoggedIn ? (
          <Button variant="outline" size="sm" className="text-white border-white hover:bg-white hover:text-black" onClick={handleLogout}>
            <User className="mr-2 h-4 w-4" /> Logout
          </Button>
        ) : (
          <Button variant="outline" size="sm" className="text-white border-white hover:bg-white hover:text-black" asChild>
            <Link href="/login">
              <LogIn className="mr-2 h-4 w-4" /> Login
            </Link>
          </Button>
        )}
      </div>
      <Button variant="ghost" size="icon" className="text-white md:hidden">
        <Menu className="h-6 w-6" />
      </Button>
    </nav>
  );
}
