"use client"
import { Users, Award, ChevronRight, Music, Palette, Drama, ArrowDown } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import Link from "next/link"
const events = [
  {
    title: "Sargam Arcade 2024",
    description: "Annual cultural competition featuring music, dance, and arts",
    date: "December 15-17, 2024",
    status: "ongoing",
    icon: <Music className="w-6 h-6" />,
  },
  {
    title: "Art Exhibition",
    description: "Showcase of student artwork and creative expressions",
    date: "January 20, 2025",
    status: "upcoming",
    icon: <Palette className="w-6 h-6" />,
  },
  {
    title: "Drama Festival",
    description: "Inter-college drama and theater performances",
    date: "February 10-12, 2025",
    status: "upcoming",
    icon: <Drama className="w-6 h-6" />,
  },
]
const achievements = [
  { title: "Best Cultural Club 2023", description: "Awarded by the University" },
  { title: "500+ Active Members", description: "Growing community of artists" },
  { title: "50+ Events Organized", description: "Since establishment in 2020" },
  { title: "Inter-College Champions", description: "Multiple competition wins" },
]
export default function HomePage() {
  return (
    <>
      <div
        className="min-h-screen bg-cover bg-center bg-fixed relative overflow-hidden pt-32 sm:pt-36 lg:pt-40"
        style={{
          backgroundColor: "#162E1C",
          backgroundImage: `url('/images/background.png')`,
        }}
      >
        {/* Corner Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          {/* Left Top Corner */}
          <div className="absolute top-0 left-0 w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 z-10">
            <img
              src="/images/left-top-corner.png"
              alt=""
              className="w-full h-full object-contain opacity-80"
            />
          </div>
          {/* Right Bottom Corner */}
          <div className="absolute bottom-0 right-0 w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 z-10">
            <img
              src="/images/right-bottom-corner.png"
              alt=""
              className="w-full h-full object-contain opacity-80"
            />
          </div>
        </div>
        <Header />
        {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-24">
        <div className="animate-fade-in max-w-6xl mx-auto text-center">
          <div className="space-y-8 animate-fade-in">
            {/* Main Heading */}
            <div className="animate-fade-in space-y-4">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-200 to-yellow-400 leading-tight animate-fade-in">
                THANIMA
              </h1>
              <div
                className="h-1 w-32 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full"
              />
            </div>
            {/* Subtitle */}
            <p
              className="text-2xl md:text-3xl lg:text-4xl text-white/90 font-light tracking-wide max-w-4xl mx-auto leading-relaxed"
            >
              Where <span className="text-yellow-400 font-medium">creativity</span> meets{" "}
              <span className="text-yellow-400 font-medium">culture</span>
            </p>
            {/* Description */}
            <p
              className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed animate-fade-in"
            >
              Join our vibrant community of artists, musicians, and performers in celebrating the rich tapestry of arts
              and culture
            </p>
            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-6 justify-center pt-8"
            >
              <Link href="/events">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-semibold px-8 py-4 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Explore Events
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/30 text-white hover:bg-white/10 bg-white/5 backdrop-blur-sm px-8 py-4 rounded-2xl font-semibold transform hover:scale-105 transition-all duration-300"
                >
                  Discover Our Story
                </Button>
              </Link>
            </div>
            {/* Scroll Indicator */}
            <div
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
              <div
                className="text-white/50 hover:text-white/80 transition-colors cursor-pointer"
              >
                <ArrowDown className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
        {/* Floating Elements */}
        <div className="animate-fade-in absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400 rounded-full opacity-60"
          />
          <div
            className="absolute top-3/4 right-1/3 w-3 h-3 bg-orange-400 rounded-full opacity-40"
          />
          <div
            className="absolute bottom-1/3 left-2/3 w-1 h-1 bg-yellow-300 rounded-full opacity-70"
          />
        </div>
      </section>
      {/* About Section */}
      <section className="py-20 px-4">
        <div className="animate-fade-in max-w-6xl mx-auto">
          <div
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About Thanima</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Thanima is more than just a cultural club - we're a family of creative minds passionate about preserving
              and celebrating the rich tapestry of arts and culture.
            </p>
          </div>
          <div className="animate-fade-in grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
              >
                <Card className="bg-white/5 backdrop-blur-md border border-white/10 text-white h-full hover:bg-white/10 transition-all duration-300">
                  <CardHeader className="text-center">
                    <Award className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                    <CardTitle className="text-white">{achievement.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-sm text-white/70">{achievement.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Events Section */}
      <section className="py-20 px-4">
        <div className="animate-fade-in max-w-6xl mx-auto">
          <div
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Featured Events</h2>
            <p className="text-xl text-white/80">Discover our exciting lineup of cultural events and competitions</p>
          </div>
          <div className="animate-fade-in grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div
                key={index}
              >
                <Card className="bg-white/5 backdrop-blur-md border border-white/10 text-white h-full hover:bg-white/10 transition-all duration-300 group">
                  <CardHeader>
                    <div className="animate-fade-in flex items-center justify-between mb-4">
                      <div className="animate-fade-in p-3 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-xl group-hover:from-yellow-400/30 group-hover:to-orange-500/30 transition-all duration-300">
                        {event.icon}
                      </div>
                      <Badge
                        variant={event.status === "ongoing" ? "default" : "secondary"}
                        className={event.status === "ongoing" ? "bg-green-600/80" : "bg-yellow-600/80"}
                      >
                        {event.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-white text-xl">{event.title}</CardTitle>
                    <CardDescription className="text-white/60">{event.date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-6 text-white/70 leading-relaxed">{event.description}</p>
                    <Button variant="ghost" className="text-yellow-400 hover:text-yellow-300 p-0 group">
                      Learn More
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="animate-fade-in max-w-4xl mx-auto text-center">
          <div
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-12 shadow-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Join the Thanima Family</h2>
            <p className="text-xl text-white/80 mb-10 leading-relaxed">
              Be part of our creative community and showcase your talents on a bigger stage
            </p>
            <div className="animate-fade-in flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-semibold px-8 py-4 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <Users className="w-5 h-5 mr-2" />
                Become a Member
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 bg-white/5 backdrop-blur-sm px-8 py-4 rounded-2xl font-semibold transform hover:scale-105 transition-all duration-300"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
        </div>
      </div>
    </>
  )
}
