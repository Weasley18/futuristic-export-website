"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { CustomCursor } from "@/components/custom-cursor"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    details: (
      <div className="text-sm font-semibold break-words">
        enngee.enterprisesblr@gmail.com
      </div>
    ),
    description: "Send us an email anytime",
  },
  {
    icon: Phone,
    title: "Phone",
    details: "+91 9902060246 / 9845390246",
    description: "Contact us for inquiries",
  },
  {
    icon: MapPin,
    title: "Office",
    details: (
      <div className="text-sm leading-relaxed">
        <div className="font-semibold">EnnGee Enterprises</div>
        <div>#174, Neelagiri</div>
        <div>9th Cross, 4th Main, 6th Block</div>
        <div>Nagarbhavi 2nd Stage</div>
        <div>Bangalore - 560072</div>
        <div>Karnataka, INDIA</div>
      </div>
    ),
    description: "Visit Us",
  },
]

export default function ContactPage() {
  return (
    <>
      <CustomCursor />
      <Navigation />

      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-teal-50 pt-20">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="text-4xl font-bold text-gray-900 mb-6">
                Get In Touch
              </h4>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Connect with EnnGee Enterprises - your trusted partner for quality Indian products and global export solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
                      <div className="inline-flex items-center justify-center w-16 h-16 warm-gradient rounded-full mb-6">
                        <info.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{info.title}</h3>
                      <div className="text-orange-600 mb-2">
                        {typeof info.details === 'string' ? (
                          <div className="text-lg font-semibold">{info.details}</div>
                        ) : (
                          info.details
                        )}
                      </div>
                      <p className="text-gray-600 text-sm">{info.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </div>

      <Footer />
    </>
  )
}
