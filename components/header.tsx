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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'bg-black/20 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Left Navigation - Hidden on mobile, closer to logo on desktop */}
            <nav className="hidden lg:flex items-center space-x-1">
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
                <div className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 xl:w-44 xl:h-44 relative p-3 transition-all duration-300 hover:scale-110 hover:rotate-2">
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

            {/* Right Navigation - Hidden on mobile, closer to logo on desktop */}
            <nav className="hidden lg:flex items-center space-x-1">
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
              className="lg:hidden text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 hover:scale-105 z-50"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Menu */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
          
          {/* Sidebar */}
          <div className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-black/90 backdrop-blur-md border-l border-white/10 z-50 lg:hidden transform transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>
            <div className="flex flex-col h-full">
              {/* Sidebar Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <h2 className="text-xl font-bold text-white">Menu</h2>
                <Button
                  variant="ghost"
                  className="text-white/80 hover:text-white hover:bg-white/10 rounded-xl"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="w-6 h-6" />
                </Button>
              </div>
              
              {/* Navigation Items */}
              <nav className="flex-1 p-6">
                <div className="flex flex-col space-y-4">
                  {navigation.map((item) => {
                    const isActive = pathname === item.href
                    return (
                      <Link key={item.name} href={item.href}>
                        <Button
                          variant="ghost"
                          className={`w-full justify-start rounded-xl transition-all duration-300 font-medium text-lg hover:scale-105 ${
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
                </div>
              </nav>
              
              {/* Sidebar Footer */}
              <div className="p-6 border-t border-white/10">
                <div className="text-center text-white/60 text-sm">
                  <p>Thanima Cultural Club</p>
                  <p className="mt-1">Where Creativity Meets Culture</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
