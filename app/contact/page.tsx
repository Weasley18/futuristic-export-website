"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { CustomCursor } from "@/components/custom-cursor"
import { Navigation } from "@/components/navigation"

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    details: "hello@futureexport.com",
    description: "Send us an email anytime",
  },
  {
    icon: Phone,
    title: "Phone",
    details: "+1 (555) 123-4567",
    description: "Mon-Fri from 8am to 6pm",
  },
  {
    icon: MapPin,
    title: "Office",
    details: "123 Export Plaza, Trade City",
    description: "Visit our headquarters",
  },
  {
    icon: Clock,
    title: "Hours",
    details: "Mon-Fri: 8am-6pm",
    description: "Weekend support available",
  },
]

export default function ContactPage() {
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
                Get In Touch
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Ready to start your global export journey? We're here to help you every step of the way.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                >
                  <Card className="text-center h-full border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6">
                        <info.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{info.title}</h3>
                      <div className="text-lg font-semibold text-blue-600 mb-2">{info.details}</div>
                      <p className="text-gray-600 text-sm">{info.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Send us a message</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Have a question about our products or services? Want to discuss a potential partnership? Fill out the
                  form and we'll get back to you within 24 hours.
                </p>

                <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                          <Input
                            placeholder="John"
                            className="h-12 rounded-xl border-2 border-gray-200 focus:border-blue-500 transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                          <Input
                            placeholder="Doe"
                            className="h-12 rounded-xl border-2 border-gray-200 focus:border-blue-500 transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                        <Input
                          type="email"
                          placeholder="john@example.com"
                          className="h-12 rounded-xl border-2 border-gray-200 focus:border-blue-500 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Company</label>
                        <Input
                          placeholder="Your Company"
                          className="h-12 rounded-xl border-2 border-gray-200 focus:border-blue-500 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                        <Textarea
                          placeholder="Tell us about your project..."
                          rows={6}
                          className="rounded-xl border-2 border-gray-200 focus:border-blue-500 transition-colors resize-none"
                        />
                      </div>

                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button
                          size="lg"
                          className="w-full h-12 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-xl text-lg font-semibold transition-all duration-300"
                        >
                          Send Message <Send className="ml-2 h-5 w-5" />
                        </Button>
                      </motion.div>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="lg:pl-8"
              >
                <div className="relative h-96 lg:h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/placeholder.svg?height=600&width=800"
                    alt="Office Location"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-8 left-8 text-white">
                    <h3 className="text-2xl font-bold mb-2">Visit Our Office</h3>
                    <p className="text-blue-100">123 Export Plaza, Trade City</p>
                  </div>
                </div>
              </motion.div>
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
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Go Global?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help expand your business to international markets
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}
