import { Metadata } from 'next'
import { motion } from "framer-motion"
import { BookOpen, Calendar, User, Eye, Download, ExternalLink } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"

export const metadata: Metadata = {
  title: 'Magazine - Thanima Cultural Club | Digital Publications & Creative Content',
  description: 'Explore Thanima Cultural Club\'s quarterly digital magazine featuring student artwork, poetry, cultural insights, and creative content from our vibrant community.',
  keywords: 'thanima magazine, cultural magazine, student artwork, poetry, cultural insights, digital publications, creative content',
  openGraph: {
    title: 'Magazine - Thanima Cultural Club | Digital Publications & Creative Content',
    description: 'Explore Thanima Cultural Club\'s quarterly digital magazine featuring student artwork and creative content.',
  },
}

const magazines = [
  {
    id: 1,
    title: "Thanima Quarterly - Winter 2024",
    description: "Featuring student artwork, poetry, and cultural insights from our vibrant community.",
    coverImage: "/placeholder.svg?height=300&width=200",
    publishDate: "December 2024",
    pages: 48,
    downloads: 1250,
    featured: true,
    articles: ["Student Spotlight", "Cultural Heritage", "Art Gallery", "Poetry Corner"],
  },
  {
    id: 2,
    title: "Thanima Quarterly - Autumn 2024",
    description: "Celebrating the harvest season with stories of tradition and modern artistic expression.",
    coverImage: "/placeholder.svg?height=300&width=200",
    publishDate: "September 2024",
    pages: 42,
    downloads: 980,
    featured: false,
    articles: ["Festival Chronicles", "Dance Forms", "Music Traditions", "Creative Writing"],
  },
  {
    id: 3,
    title: "Thanima Quarterly - Summer 2024",
    description: "Summer edition featuring outdoor performances and cultural exchange programs.",
    coverImage: "/placeholder.svg?height=300&width=200",
    publishDate: "June 2024",
    pages: 36,
    downloads: 756,
    featured: false,
    articles: ["Summer Festivals", "Photography", "Theater Reviews", "Alumni Stories"],
  },
  {
    id: 4,
    title: "Thanima Quarterly - Spring 2024",
    description: "Spring awakening with fresh perspectives on contemporary cultural movements.",
    coverImage: "/placeholder.svg?height=300&width=200",
    publishDate: "March 2024",
    pages: 40,
    downloads: 892,
    featured: false,
    articles: ["New Beginnings", "Modern Art", "Cultural Fusion", "Student Interviews"],
  },
]

export default function MagazinePage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Thanima Magazine</h1>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl max-w-4xl mx-auto">
              <p className="text-xl text-white/90 leading-relaxed">
                Discover the creative voices of our community through our quarterly digital magazine. Featuring student
                artwork, poetry, cultural insights, and stories that celebrate our rich heritage.
              </p>
            </div>
          </motion.div>

          {/* Featured Magazine */}
          {magazines
            .filter((mag) => mag.featured)
            .map((magazine, index) => (
              <motion.div
                key={magazine.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-16"
              >
                <div className="text-center mb-8">
                  <Badge className="bg-yellow-600/80 text-white mb-4">Featured Issue</Badge>
                  <h2 className="text-3xl font-bold text-white">Latest Edition</h2>
                </div>

                <Card className="bg-white/10 backdrop-blur-md border border-white/20 text-white overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-8 p-8">
                    <div className="flex justify-center">
                      <img
                        src={magazine.coverImage || "/placeholder.svg"}
                        alt={magazine.title}
                        className="w-64 h-80 object-cover rounded-lg shadow-2xl"
                      />
                    </div>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{magazine.title}</h3>
                        <p className="text-white/80 leading-relaxed">{magazine.description}</p>
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-yellow-400" />
                          <span>{magazine.publishDate}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <BookOpen className="w-4 h-4 text-yellow-400" />
                          <span>{magazine.pages} pages</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Download className="w-4 h-4 text-yellow-400" />
                          <span>{magazine.downloads} downloads</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Eye className="w-4 h-4 text-yellow-400" />
                          <span>Featured</span>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-white mb-2">In This Issue:</h4>
                        <div className="flex flex-wrap gap-2">
                          {magazine.articles.map((article, idx) => (
                            <Badge key={idx} variant="secondary" className="bg-white/20 text-white">
                              {article}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <Button className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm">
                          <Download className="w-4 h-4 mr-2" />
                          Download PDF
                        </Button>
                        <Button
                          variant="outline"
                          className="border-white/30 text-white hover:bg-white/10 bg-transparent backdrop-blur-sm"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Read Online
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}

          {/* Archive */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white text-center mb-8">Magazine Archive</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {magazines
                .filter((mag) => !mag.featured)
                .map((magazine, index) => (
                  <motion.div
                    key={magazine.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="bg-white/10 backdrop-blur-md border border-white/20 text-white h-full hover:bg-white/15 transition-all duration-300">
                      <CardHeader className="text-center">
                        <img
                          src={magazine.coverImage || "/placeholder.svg"}
                          alt={magazine.title}
                          className="w-32 h-40 object-cover rounded-lg mx-auto mb-4 shadow-lg"
                        />
                        <CardTitle className="text-white text-lg">{magazine.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-white/80">{magazine.description}</p>

                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-3 h-3 text-yellow-400" />
                            <span>{magazine.publishDate}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <BookOpen className="w-3 h-3 text-yellow-400" />
                            <span>{magazine.pages} pages</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Download className="w-3 h-3 text-yellow-400" />
                            <span>{magazine.downloads}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <User className="w-3 h-3 text-yellow-400" />
                            <span>Archive</span>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <Button size="sm" className="flex-1 bg-white/20 hover:bg-white/30 text-white text-xs">
                            <Download className="w-3 h-3 mr-1" />
                            Download
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="flex-1 border-white/30 text-white hover:bg-white/10 bg-transparent text-xs"
                          >
                            <ExternalLink className="w-3 h-3 mr-1" />
                            Read
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
            </div>
          </motion.div>

          {/* Submission CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <Card className="bg-white/10 backdrop-blur-md border border-white/20 text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Submit Your Work</h3>
                <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                  Have a story to tell? Artwork to share? Poetry to publish? We welcome submissions from all members of
                  the Thanima community for our quarterly magazine.
                </p>
                <Button className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Submission Guidelines
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
