"use client"

import { motion } from "framer-motion"
import { Target, Globe, TrendingUp, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { CustomCursor } from "@/components/custom-cursor"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"

const team = [
  {
    name: "Neela G Aekbote",
    role: "Co-Founder & Operations Director",
    image: "/neela-team.jpg",
    bio: "A born leader and engineering graduate with vast experience in IT and customer support. She completed Export Management Training Program from VTPC and spearheads overall operations and finance activities at EnnGee.",
  },
  {
    name: "Giridhar M Aekbote",
    role: "Co-Founder & Business Development Director",
    image: "/giridhar-team.jpg",
    bio: "Over 30 years rich industry experience in Information Technology & Exports domain. He brings vast global experience in Business Development, Customer engagement, OEM Partnership, and Procurement Management.",
  },
]

const values = [
  {
    icon: Target,
    title: "Quality Excellence",
    description: "We ensure the highest standards of Quality at the most favorable price, meeting international standards",
  },
  {
    icon: Heart,
    title: "Customer Delight",
    description: "We take great pride in meeting our customer's expectations by delivering the right products within committed timeline",
  },
  {
    icon: Globe,
    title: "Think Global…Connect Local",
    description: "Our vision to unlock the global market potential for products manufactured locally in India",
  },
  {
    icon: TrendingUp,
    title: "Value-for-Money",
    description: "Offering profitable solutions to our esteemed stakeholders with committed service fulfillment",
  },
]

export default function AboutPage() {
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
              <div className="flex justify-center mb-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="w-24 h-24 flex items-center justify-center bg-white rounded-2xl shadow-lg"
                >
                  <Image
                    src="/logofinal.png"
                    alt="EnnGee Enterprises Logo"
                    width={100}
                    height={100}
                    className="object-contain"
                    priority
                  />
                </motion.div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold warm-gradient-text mb-6">
                
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Leading Merchant Export Organization based in Bangalore, the Silicon Valley of India. We specialize in sourcing and exporting diverse range of quality Indian products and commodities to our worldwide customers.
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
                <h2 className="text-4xl font-bold text-gray-900 mb-6">About EnnGee Enterprises</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  We are pleased to introduce EnnGee Enterprises as one of the Leading merchant exporters based in India. 
                  We specialize in a wide range of product categories to cater the evolving needs of our esteemed global customers.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  As a one-stop-shop, EnnGee is committed to offer our global customers the finest brands of "Make in India" products. 
                  The products we offer meets highest standards of Quality at most favorable price. We take great pride in meeting our customer's 
                  expectations by delivering the right products at a competitive price and within committed timeline.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our vision of "Think Global…Connect Local" inspires us to unlock the Global market potential for the products manufactured 
                  locally in India. It is worthwhile to mention "You Name It, We Supply It" has been our corporate growth strategy.
                </p>
                                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-600 mb-2">2008</div>
                      <div className="text-gray-600">Established</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-teal-600 mb-2">7+</div>
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
                <div className="relative bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl p-8 shadow-2xl">
                  <div className="flex justify-center mb-6">
                    <Image
                      src="/logofinal.png"
                      alt="EnnGee Enterprises Logo"
                      width={120}
                      height={120}
                      className="object-contain"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">EnnGee Enterprises</h3>
                    <p className="text-gray-600 leading-relaxed">
                      "Think Global…Connect Local" - Unlocking global market potential for locally manufactured Indian products.
                    </p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-orange-600/10 to-transparent rounded-2xl" />
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
                      <div className="inline-flex items-center justify-center w-16 h-16 warm-gradient rounded-full mb-6">
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

        {/* Global Presence & Product Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Global Reach</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  EnnGee has established its clientele in Australia, New Zealand, Canada, US, UK, Fiji and other Pacific Island Nations. 
                  The company has focused plans to enter into Europe, South Africa and other countries in near future.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-blue-50 p-3 rounded-lg">Australia</div>
                  <div className="bg-purple-50 p-3 rounded-lg">New Zealand</div>
                  <div className="bg-green-50 p-3 rounded-lg">Canada</div>
                  <div className="bg-blue-50 p-3 rounded-lg">United States</div>
                  <div className="bg-purple-50 p-3 rounded-lg">United Kingdom</div>
                  <div className="bg-green-50 p-3 rounded-lg">Pacific Islands</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Product Portfolio</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our range of commodities and products portfolio comprises diverse categories to meet global demands:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center p-3 bg-white rounded-lg border border-gray-200">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                    <span>Bags & Travel Accessories</span>
                  </div>
                  <div className="flex items-center p-3 bg-white rounded-lg border border-gray-200">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                    <span>Premium Fabrics & Textiles</span>
                  </div>
                  <div className="flex items-center p-3 bg-white rounded-lg border border-gray-200">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span>Religious Items (Dhoop, Diyas, Pooja Samagri)</span>
                  </div>
                  <div className="flex items-center p-3 bg-white rounded-lg border border-gray-200">
                    <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                    <span>Household Items (Brooms & Cleaning)</span>
                  </div>
                  <div className="flex items-center p-3 bg-white rounded-lg border border-gray-200">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                    <span>BBQ & Outdoor Equipment</span>
                  </div>
                  <div className="flex items-center p-3 bg-white rounded-lg border border-gray-200">
                    <div className="w-3 h-3 bg-indigo-500 rounded-full mr-3"></div>
                    <span>Food Items (Confectionaries, Jaggery, Masala)</span>
                  </div>
                  <div className="flex items-center p-3 bg-white rounded-lg border border-gray-200">
                    <div className="w-3 h-3 bg-teal-500 rounded-full mr-3"></div>
                    <span>Laboratory & Educational Equipment</span>
                  </div>
                  <div className="flex items-center p-3 bg-white rounded-lg border border-gray-200">
                    <div className="w-3 h-3 bg-amber-500 rounded-full mr-3"></div>
                    <span>Safety Matches & Fire Products</span>
                  </div>
                </div>
              </motion.div>
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

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={500}
                        height={400}
                        className="w-full h-80 object-cover transition-transform duration-500 hover:scale-110"
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
        <section className="py-20 warm-gradient">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Partner with EnnGee</h2>
              <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
                Experience the finest brands of "Make in India" products with our committed service
              </p>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}
