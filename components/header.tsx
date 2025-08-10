"use client"

import { useState } from "react"
import { motion } from "framer-motion"
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
  const pathname = usePathname()

  return (
    <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-4xl px-4">
      <div className="bg-white/2 backdrop-blur-md border border-white/5 rounded-3xl shadow-2xl">
        <div className="flex justify-between items-center px-8 py-4">
          {/* Left Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.slice(0, 3).map((item) => {
              const isActive = pathname === item.href
              return (
                <Link key={item.name} href={item.href}>
                  <Button
                    variant="ghost"
                    className={`rounded-xl transition-all duration-300 font-medium text-sm ${
                      isActive ? "bg-white/10 text-white shadow-lg" : "text-white/60 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {item.name}
                  </Button>
                </Link>
              )
            })}
          </nav>

          {/* Center Logo - Floating */}
          <Link href="/" className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="w-16 h-16 relative bg-white/5 rounded-2xl p-2 backdrop-blur-sm border border-white/10 shadow-xl"
            >
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/thanima-2-I6Vz9KfL2P1jVM7ZhXVzx9kd0WRcoU.png"
                alt="Thanima Logo"
                className="object-contain w-full h-full"
              />
            </motion.div>
          </Link>

          {/* Right Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.slice(3).map((item) => {
              const isActive = pathname === item.href
              return (
                <Link key={item.name} href={item.href}>
                  <Button
                    variant="ghost"
                    className={`rounded-xl transition-all duration-300 font-medium text-sm ${
                      isActive ? "bg-white/10 text-white shadow-lg" : "text-white/60 hover:text-white hover:bg-white/5"
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
            className="md:hidden text-white/60 hover:text-white hover:bg-white/5 rounded-xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/5 px-8 py-4"
          >
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link key={item.name} href={item.href}>
                    <Button
                      variant="ghost"
                      className={`w-full justify-start rounded-xl transition-all duration-300 font-medium ${
                        isActive
                          ? "bg-white/10 text-white shadow-lg"
                          : "text-white/60 hover:text-white hover:bg-white/5"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Button>
                  </Link>
                )
              })}
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  )
}
