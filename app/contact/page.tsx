import { Metadata } from 'next'
import { Mail, Phone, MapPin, Clock, Send, User, MessageSquare } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import Header from "@/components/header"

export const metadata: Metadata = {
  title: 'Contact Us - Thanima Cultural Club | Get in Touch',
  description: 'Contact Thanima Cultural Club for inquiries, membership, or event information. Reach out to our team and join our creative community.',
  keywords: 'contact thanima, cultural club contact, membership inquiry, event information, cultural club office',
  openGraph: {
    title: 'Contact Us - Thanima Cultural Club | Get in Touch',
    description: 'Contact Thanima Cultural Club for inquiries, membership, or event information.',
  },
}

const contactInfo = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email",
    details: ["thanima.cultural@college.edu", "events@thanima.club"],
    description: "Send us an email for general inquiries or event information",
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Phone",
    details: ["+91 98765 43210", "+91 87654 32109"],
    description: "Call us during office hours for immediate assistance",
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Location",
    details: ["Cultural Center, Block A", "Main Campus, Room 201"],
    description: "Visit us at our club office or cultural center",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Office Hours",
    details: ["Monday - Friday: 9:00 AM - 5:00 PM", "Saturday: 10:00 AM - 2:00 PM"],
    description: "Our team is available during these hours",
  },
]

const teamMembers = [
  { name: "Priya Sharma", role: "President", email: "president@thanima.club" },
  { name: "Arjun Patel", role: "Vice President", email: "vp@thanima.club" },
  { name: "Meera Nair", role: "Events Coordinator", email: "events@thanima.club" },
  { name: "Rahul Kumar", role: "Technical Head", email: "tech@thanima.club" },
]

export default function ContactPage() {
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
          <div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Have questions, suggestions, or want to join our creative community? We'd love to hear from you!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Contact Form */}
            <div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="bg-white/10 backdrop-blur-md border border-white/20 text-white">
                <CardHeader>
                  <CardTitle className="text-2xl text-white flex items-center">
                    <MessageSquare className="w-6 h-6 mr-2" />
                    Send us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-white/80">
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        placeholder="Your first name"
                        className="bg-white/5 border border-white/10 text-white focus:border-white/30"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-white/80">
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Your last name"
                        className="bg-white/5 border border-white/10 text-white focus:border-white/30"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white/80">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="bg-white/5 border border-white/10 text-white focus:border-white/30"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-white/80">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      placeholder="What's this about?"
                      className="bg-white/5 border border-white/10 text-white focus:border-white/30"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white/80">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your inquiry..."
                      rows={5}
                      className="bg-white/5 border border-white/10 text-white focus:border-white/30"
                    />
                  </div>

                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-md border border-white/20 text-white">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 p-2 bg-green-600 rounded-lg text-white">{info.icon}</div>
                      <div className="flex-grow">
                        <h3 className="text-lg font-semibold text-white mb-1">{info.title}</h3>
                        <div className="space-y-1 mb-2">
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-white/80 font-medium">
                              {detail}
                            </p>
                          ))}
                        </div>
                        <p className="text-sm text-white/60">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/10 backdrop-blur-md border border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-2xl text-white text-center flex items-center justify-center">
                  <User className="w-6 h-6 mr-2" />
                  Meet Our Team
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {teamMembers.map((member, index) => (
                    <div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center"
                    >
                      <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                        <User className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="font-semibold text-white mb-1">{member.name}</h4>
                      <p className="text-sm text-white/80 mb-2">{member.role}</p>
                      <p className="text-xs text-white/60">{member.email}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
