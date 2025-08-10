import { Metadata } from 'next'
import { Users, Target, Heart, Award, Calendar, MapPin } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "@/components/header"

export const metadata: Metadata = {
  title: 'About Us - Thanima Cultural Club | Our Story & Mission',
  description: 'Learn about Thanima Cultural Club - our mission, vision, values, and journey since 2020. Discover how we foster creativity and celebrate cultural diversity.',
  keywords: 'about thanima, cultural club mission, arts organization, student club history, cultural values',
  openGraph: {
    title: 'About Us - Thanima Cultural Club | Our Story & Mission',
    description: 'Learn about Thanima Cultural Club - our mission, vision, values, and journey since 2020.',
  },
}

const values = [
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Passion for Arts",
    description:
      "We believe in the transformative power of arts and culture to inspire, educate, and unite communities.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Inclusive Community",
    description: "Our club welcomes artists of all backgrounds, skill levels, and creative expressions.",
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Excellence",
    description: "We strive for excellence in every event, performance, and creative endeavor we undertake.",
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Recognition",
    description: "We celebrate and recognize the unique talents and contributions of every member.",
  },
]

const milestones = [
  { year: "2020", event: "Thanima Cultural Club Founded" },
  { year: "2021", event: "First Virtual Cultural Festival" },
  { year: "2022", event: "Inter-College Championship Win" },
  { year: "2023", event: "Best Cultural Club Award" },
  { year: "2024", event: "500+ Active Members Milestone" },
]

export default function AboutPage() {
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
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Thanima</h1>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl">
              <p className="text-xl text-white leading-relaxed max-w-4xl mx-auto">
                Thanima Cultural Club is more than just an organization - we are a vibrant community of artists,
                performers, and creative minds united by our passion for arts and culture. Since our establishment in
                2020, we have been dedicated to fostering creativity, celebrating diversity, and providing a platform
                for artistic expression.
              </p>
            </div>
          </ClientWrapper>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/10 backdrop-blur-md border border-white/20 text-white h-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-white flex items-center">
                    <Target className="w-6 h-6 mr-2" />
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white leading-relaxed">
                    To create an inclusive environment where students can explore, develop, and showcase their artistic
                    talents while preserving and promoting cultural heritage. We aim to bridge the gap between
                    traditional and contemporary arts, fostering innovation and creative expression.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/10 backdrop-blur-md border border-white/20 text-white h-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-white flex items-center">
                    <Heart className="w-6 h-6 mr-2" />
                    Our Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white leading-relaxed">
                    To be the leading cultural organization that inspires the next generation of artists and cultural
                    ambassadors. We envision a world where arts and culture serve as powerful tools for social change,
                    unity, and personal growth.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-8">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white/10 backdrop-blur-md border border-white/20 text-white h-full text-center">
                    <CardHeader>
                      <div className="flex justify-center text-green-400 mb-2">{value.icon}</div>
                      <CardTitle className="text-white">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-8">Our Journey</h2>
            <Card className="bg-white/10 backdrop-blur-md border border-white/20 text-white">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {milestones.map((milestone, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-4"
                    >
                      <div className="flex-shrink-0 w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">{milestone.year}</span>
                      </div>
                      <div className="flex-grow">
                        <p className="text-white text-lg">{milestone.event}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/10 backdrop-blur-md border border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-2xl text-white text-center">Get Involved</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-white mb-6">
                  Ready to join our creative community? We welcome new members throughout the year!
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-left">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-green-400" />
                    <span>Cultural Center, Main Campus</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-green-400" />
                    <span>Meetings: Every Friday 4:00 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
