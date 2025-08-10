import { Metadata } from 'next'
import { motion } from "framer-motion"
import { Calendar, MapPin, Clock, Users, Trophy, Music, Palette, Drama, Camera, Mic } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"

export const metadata: Metadata = {
  title: 'Events - Thanima Cultural Club | Cultural Events & Competitions',
  description: 'Discover exciting cultural events, competitions, and workshops at Thanima Cultural Club. From music festivals to art exhibitions, join our vibrant cultural community.',
  keywords: 'cultural events, music competitions, art exhibitions, drama festival, cultural workshops, student events',
  openGraph: {
    title: 'Events - Thanima Cultural Club | Cultural Events & Competitions',
    description: 'Discover exciting cultural events, competitions, and workshops at Thanima Cultural Club.',
  },
}

const events = [
  {
    id: 1,
    title: "Sargam Arcade 2024",
    description:
      "Our flagship annual cultural competition featuring multiple categories including music, dance, drama, and visual arts. Participants compete for glory and amazing prizes.",
    date: "December 15-17, 2024",
    time: "9:00 AM - 6:00 PM",
    venue: "Main Auditorium & Cultural Center",
    status: "ongoing",
    participants: "200+",
    icon: <Music className="w-8 h-8" />,
    categories: ["Music", "Dance", "Drama", "Art"],
    prizes: "₹50,000 Total Prize Pool",
  },
  {
    id: 2,
    title: "Art Exhibition 2025",
    description:
      "A showcase of creativity featuring paintings, sculptures, digital art, and photography from our talented members and guest artists.",
    date: "January 20, 2025",
    time: "10:00 AM - 8:00 PM",
    venue: "Art Gallery, Block A",
    status: "upcoming",
    participants: "50+",
    icon: <Palette className="w-8 h-8" />,
    categories: ["Painting", "Sculpture", "Digital Art", "Photography"],
    prizes: "Recognition Awards",
  },
  {
    id: 3,
    title: "Drama Festival",
    description:
      "Inter-college drama competition featuring original scripts, adaptations, and experimental theater. A celebration of storytelling and performance.",
    date: "February 10-12, 2025",
    time: "2:00 PM - 9:00 PM",
    venue: "Theater Complex",
    status: "upcoming",
    participants: "15 Teams",
    icon: <Drama className="w-8 h-8" />,
    categories: ["Original Script", "Adaptation", "Experimental"],
    prizes: "₹30,000 Prize Pool",
  },
  {
    id: 4,
    title: "Photography Workshop",
    description:
      "Learn the art of photography from professional photographers. Covers basics to advanced techniques in portrait, landscape, and street photography.",
    date: "March 5, 2025",
    time: "9:00 AM - 5:00 PM",
    venue: "Workshop Hall & Outdoor Locations",
    status: "upcoming",
    participants: "30 Seats",
    icon: <Camera className="w-8 h-8" />,
    categories: ["Portrait", "Landscape", "Street Photography"],
    prizes: "Certificate of Completion",
  },
  {
    id: 5,
    title: "Open Mic Night",
    description:
      "Monthly open mic sessions where members can showcase their talents in music, poetry, comedy, and storytelling in a supportive environment.",
    date: "Every Last Friday",
    time: "7:00 PM - 10:00 PM",
    venue: "Thanima Lounge",
    status: "recurring",
    participants: "Open to All",
    icon: <Mic className="w-8 h-8" />,
    categories: ["Music", "Poetry", "Comedy", "Storytelling"],
    prizes: "Audience Choice Award",
  },
]

export default function EventsPage() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "ongoing":
        return "bg-green-600"
      case "upcoming":
        return "bg-blue-600"
      case "recurring":
        return "bg-purple-600"
      default:
        return "bg-gray-600"
    }
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed relative"
      style={{
        backgroundColor: "#162E1C",
        backgroundImage: `url('/images/new-background.png')`,
      }}
    >
      <Header />

      <div className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Thanima Events</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Discover our exciting lineup of cultural events, workshops, and competitions designed to nurture
              creativity and talent.
            </p>
          </motion.div>

          <div className="grid gap-8">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-white/10 backdrop-blur-md border border-white/20 text-green-100 overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-green-700 rounded-lg">{event.icon}</div>
                        <div>
                          <CardTitle className="text-2xl text-white mb-2">{event.title}</CardTitle>
                          <div className="flex flex-wrap gap-2 mb-2">
                            <Badge className={getStatusColor(event.status)}>{event.status}</Badge>
                            <Badge variant="outline" className="border-green-500 text-green-300">
                              <Users className="w-3 h-3 mr-1" />
                              {event.participants}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      {event.status === "ongoing" && (
                        <div className="animate-pulse">
                          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        </div>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-white/90 leading-relaxed">{event.description}</p>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-white/90">
                          <Calendar className="w-4 h-4" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-white/90">
                          <Clock className="w-4 h-4" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-white/90">
                          <MapPin className="w-4 h-4" />
                          <span>{event.venue}</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-white/90">
                          <Trophy className="w-4 h-4" />
                          <span>{event.prizes}</span>
                        </div>
                        <div>
                          <p className="text-sm text-white mb-1">Categories:</p>
                          <div className="flex flex-wrap gap-1">
                            {event.categories.map((category, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs bg-green-700">
                                {category}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3 pt-4">
                      <Button className="bg-green-600 hover:bg-green-700">
                        {event.status === "ongoing" ? "View Live Updates" : "Register Now"}
                      </Button>
                      <Button
                        variant="outline"
                        className="border-green-500 text-green-300 hover:bg-green-800 bg-transparent"
                      >
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
