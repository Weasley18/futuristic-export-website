"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Globe } from "lucide-react"
import Image from "next/image"

export function Footer() {
  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/products", label: "Products" },
    { href: "/contact", label: "Contact" },
  ]

  const productCategories = [
    "Bags & Travel Accessories",
    "Premium Fabrics & Textiles", 
    "Religious Items",
    "Household Items",
    "BBQ & Outdoor Equipment",
    "Food Items",
    "Laboratory Equipment",
    "Safety Matches"
  ]

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center mb-6">
              <Image
                src="/logofinal.png"
                alt="EnnGee Enterprises Logo"
                width={60}
                height={60}
                className="object-contain mr-3"
              />
              <div>
                <h3 className="text-2xl font-bold warm-gradient-text">EnnGee Enterprises</h3>
                <p className="text-sm text-gray-400">Export Excellence Since 2008</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading Merchant Export Organization specializing in sourcing and exporting diverse range of quality Indian products and commodities to worldwide customers.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-6 text-orange-400">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-orange-600 rounded-full mr-3 group-hover:bg-orange-400 transition-colors duration-300"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Product Categories */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-6 text-teal-400">Our Products</h4>
            <ul className="space-y-3">
              {productCategories.map((category) => (
                <li key={category}>
                  <Link
                    href="/products"
                    className="text-gray-300 hover:text-teal-400 transition-colors duration-300 text-sm"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-6 text-orange-400">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-orange-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">
                    #174, Neelagiri<br />
                    9th Cross, 4th Main, 6th Block<br />
                    Nagarbhavi 2nd Stage<br />
                    Bangalore - 560072<br />
                    Karnataka, INDIA
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-teal-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">+91 9902060246</p>
                  <p className="text-gray-300 text-sm">+91 9845390246</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-400 flex-shrink-0" />
                <p className="text-gray-300 text-sm">enngee.enterprisesblr@gmail.com</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 pt-8 mt-12"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400 text-center md:text-left">
              <p>© 2024 EnnGee Enterprises. All rights reserved.</p>
              <p className="mt-1">Leading Merchant Export Organization | "Think Global…Connect Local"</p>
            </div>
            <div className="flex space-x-6 text-sm">
              <Link 
                href="/Privacy and Terms.docx" 
                target="_blank"
                className="text-gray-400 hover:text-orange-400 transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/Privacy and Terms.docx" 
                target="_blank"
                className="text-gray-400 hover:text-orange-400 transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
} 