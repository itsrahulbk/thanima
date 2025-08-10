"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Events", href: "/events" },
  { name: "Magazine", href: "/magazine" },
  { name: "Our Core", href: "/our-core" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
      scrolled ? 'bg-black/20 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Left Navigation - Hidden on small screens */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navigation.slice(0, 3).map((item) => {
              const isActive = pathname === item.href
              return (
                <Link key={item.name} href={item.href}>
                  <Button
                    variant="ghost"
                    className={`rounded-xl transition-all duration-300 font-medium text-sm hover:scale-105 ${
                      isActive 
                        ? "bg-white/20 text-white shadow-lg ring-2 ring-white/30" 
                        : "text-white/80 hover:text-white hover:bg-white/10 hover:shadow-lg"
                    }`}
                  >
                    {item.name}
                  </Button>
                </Link>
              )
            })}
          </nav>

          {/* Center Logo - Always visible and centered */}
          <Link href="/" className="flex items-center justify-center flex-1 lg:flex-none">
            <div className="group relative">
              <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 relative p-3 transition-all duration-300 hover:scale-110 hover:rotate-2">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/thanima-2-I6Vz9KfL2P1jVM7ZhXVzx9kd0WRcoU.png"
                  alt="Thanima Logo"
                  className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              {/* Floating particles effect */}
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-yellow-400 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-green-400 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>
            </div>
          </Link>

          {/* Right Navigation - Hidden on small screens */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navigation.slice(3).map((item) => {
              const isActive = pathname === item.href
              return (
                <Link key={item.name} href={item.href}>
                  <Button
                    variant="ghost"
                    className={`rounded-xl transition-all duration-300 font-medium text-sm hover:scale-105 ${
                      isActive 
                        ? "bg-white/20 text-white shadow-lg ring-2 ring-white/30" 
                        : "text-white/80 hover:text-white hover:bg-white/10 hover:shadow-lg"
                    }`}
                  >
                    {item.name}
                  </Button>
                </Link>
              )
            })}
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            className="lg:hidden text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 hover:scale-105"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-white/10 bg-black/30 backdrop-blur-md rounded-b-2xl overflow-hidden">
            <nav className="flex flex-col p-4 space-y-2">
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link key={item.name} href={item.href}>
                    <Button
                      variant="ghost"
                      className={`w-full justify-start rounded-xl transition-all duration-300 font-medium hover:scale-105 ${
                        isActive
                          ? "bg-white/20 text-white shadow-lg ring-2 ring-white/30"
                          : "text-white/80 hover:text-white hover:bg-white/10 hover:shadow-lg"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Button>
                  </Link>
                )
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
