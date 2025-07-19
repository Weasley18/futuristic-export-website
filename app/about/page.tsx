"use client"

import { motion } from "framer-motion"
import { Target, Globe, TrendingUp, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { CustomCursor } from "@/components/custom-cursor"
import { Navigation } from "@/components/navigation"

const team = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    image: "/placeholder.svg?height=300&width=300",
    bio: "15+ years in international trade",
  },
  {
    name: "Michael Chen",
    role: "CTO",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Tech innovation expert",
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Operations",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Global logistics specialist",
  },
  {
    name: "David Kim",
    role: "Sales Director",
    image: "/placeholder.svg?height=300&width=300",
    bio: "International market expert",
  },
]

const values = [
  {
    icon: Target,
    title: "Innovation",
    description: "We constantly push the boundaries of what's possible in global trade",
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "Trust and transparency are the foundation of all our relationships",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Connecting businesses across continents with seamless efficiency",
  },
  {
    icon: TrendingUp,
    title: "Excellence",
    description: "We strive for perfection in every aspect of our service delivery",
  },
]

export default function AboutPage() {
  return (
    <>
      <CustomCursor />
      <Navigation />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 pt-20">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-6">
                About Future Export
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We're pioneering the future of global trade through innovative technology, sustainable practices, and
                unwavering commitment to excellence.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Founded in 2008, Future Export began as a vision to revolutionize international trade. What started as
                  a small team with big dreams has grown into a global network spanning over 50 countries.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our journey has been marked by continuous innovation, from implementing cutting-edge logistics
                  solutions to pioneering sustainable export practices. Today, we're proud to be at the forefront of the
                  digital transformation in global trade.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">2008</div>
                    <div className="text-gray-600">Founded</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                    <div className="text-gray-600">Countries</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img src="/placeholder.svg?height=500&width=600" alt="Our Story" className="rounded-2xl shadow-2xl" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-2xl" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white/50 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">The principles that guide everything we do</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                >
                  <Card className="text-center h-full border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6">
                        <value.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                The passionate professionals driving our mission forward
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.3 } }}
                >
                  <Card className="text-center overflow-hidden border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
                    <div className="relative overflow-hidden">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                      <div className="text-blue-600 font-semibold mb-3">{member.role}</div>
                      <p className="text-gray-600 text-sm">{member.bio}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Join Our Global Network</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Become part of the future of international trade
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}
