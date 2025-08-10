import { Metadata } from 'next'
import { motion } from "framer-motion"
import { Users, Mail, Phone, Linkedin, Instagram, Twitter } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"

export const metadata: Metadata = {
  title: 'Our Core Team - Thanima Cultural Club | Leadership & Members',
  description: 'Meet the dedicated leadership team of Thanima Cultural Club. Learn about our president, vice president, and core members driving cultural excellence.',
  keywords: 'thanima team, cultural club leadership, club president, vice president, events coordinator, creative director',
  openGraph: {
    title: 'Our Core Team - Thanima Cultural Club | Leadership & Members',
    description: 'Meet the dedicated leadership team of Thanima Cultural Club driving cultural excellence.',
  },
}

const coreTeam = [
  {
    name: "Priya Sharma",
    role: "President",
    department: "Fine Arts",
    year: "Final Year",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Leading Thanima with passion for cultural preservation and innovation. Specializes in classical dance and event management.",
    email: "president@thanima.club",
    phone: "+91 98765 43210",
    social: {
      linkedin: "#",
      instagram: "#",
      twitter: "#",
    },
  },
  {
    name: "Arjun Patel",
    role: "Vice President",
    department: "Music",
    year: "Third Year",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Passionate musician and organizer, bringing fresh ideas to traditional events. Expert in Indian classical music.",
    email: "vp@thanima.club",
    phone: "+91 87654 32109",
    social: {
      linkedin: "#",
      instagram: "#",
      twitter: "#",
    },
  },
  {
    name: "Meera Nair",
    role: "Events Coordinator",
    department: "Drama & Theater",
    year: "Second Year",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Creative mind behind our spectacular events. Theater enthusiast with a flair for dramatic productions.",
    email: "events@thanima.club",
    phone: "+91 76543 21098",
    social: {
      linkedin: "#",
      instagram: "#",
      twitter: "#",
    },
  },
  {
    name: "Rahul Kumar",
    role: "Technical Head",
    department: "Digital Arts",
    year: "Third Year",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Tech-savvy artist bridging traditional arts with modern technology. Specializes in digital art and multimedia.",
    email: "tech@thanima.club",
    phone: "+91 65432 10987",
    social: {
      linkedin: "#",
      instagram: "#",
      twitter: "#",
    },
  },
  {
    name: "Ananya Singh",
    role: "Creative Director",
    department: "Visual Arts",
    year: "Final Year",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Visionary artist with expertise in painting and sculpture. Leads our creative initiatives and art exhibitions.",
    email: "creative@thanima.club",
    phone: "+91 54321 09876",
    social: {
      linkedin: "#",
      instagram: "#",
      twitter: "#",
    },
  },
  {
    name: "Vikram Reddy",
    role: "Cultural Secretary",
    department: "Literature",
    year: "Second Year",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Poet and writer dedicated to preserving cultural heritage through literature and storytelling.",
    email: "cultural@thanima.club",
    phone: "+91 43210 98765",
    social: {
      linkedin: "#",
      instagram: "#",
      twitter: "#",
    },
  },
]

export default function OurCorePage() {
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
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Core Team</h1>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl max-w-4xl mx-auto">
              <p className="text-xl text-white/90 leading-relaxed">
                Meet the passionate individuals who lead Thanima Cultural Club. Our diverse team brings together
                expertise from various artistic disciplines to create memorable cultural experiences.
              </p>
            </div>
          </motion.div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreTeam.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/10 backdrop-blur-md border border-white/20 text-white h-full hover:bg-white/15 transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white/20">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle className="text-white text-xl">{member.name}</CardTitle>
                    <div className="space-y-1">
                      <p className="text-yellow-400 font-semibold">{member.role}</p>
                      <p className="text-white/70 text-sm">{member.department}</p>
                      <p className="text-white/60 text-sm">{member.year}</p>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-sm text-white/80 text-center leading-relaxed">{member.bio}</p>

                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm">
                        <Mail className="w-4 h-4 text-yellow-400" />
                        <a href={`mailto:${member.email}`} className="text-white/80 hover:text-white transition-colors">
                          {member.email}
                        </a>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <Phone className="w-4 h-4 text-yellow-400" />
                        <span className="text-white/80">{member.phone}</span>
                      </div>
                    </div>

                    <div className="flex justify-center space-x-3 pt-2">
                      <Button
                        size="sm"
                        variant="ghost"
                        className="w-8 h-8 p-0 text-white/60 hover:text-white hover:bg-white/10"
                        asChild
                      >
                        <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="w-4 h-4" />
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="w-8 h-8 p-0 text-white/60 hover:text-white hover:bg-white/10"
                        asChild
                      >
                        <a href={member.social.instagram} target="_blank" rel="noopener noreferrer">
                          <Instagram className="w-4 h-4" />
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="w-8 h-8 p-0 text-white/60 hover:text-white hover:bg-white/10"
                        asChild
                      >
                        <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                          <Twitter className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Join Team CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <Card className="bg-white/10 backdrop-blur-md border border-white/20 text-white">
              <CardContent className="p-8 text-center">
                <Users className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Join Our Team</h3>
                <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                  Interested in taking on a leadership role? We're always looking for passionate individuals to join our
                  core team and help shape the future of Thanima Cultural Club.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm">
                    <Mail className="w-4 h-4 mr-2" />
                    Apply for Core Team
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 bg-transparent backdrop-blur-sm"
                  >
                    <Users className="w-4 h-4 mr-2" />
                    Learn About Roles
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
