"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Grid, List, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CustomCursor } from "@/components/custom-cursor"
import { Navigation } from "@/components/navigation"

const products = [
  {
    id: 1,
    name: "Indian Spices & Seasonings",
    category: "Food & Beverages",
    price: "₹150",
    image: "/placeholder.svg?height=300&width=400",
    description: "Premium quality Indian spices and traditional seasonings for global culinary needs",
    tags: ["Organic", "Traditional", "Export Quality"],
    animationType: "glow",
  },
  {
    id: 2,
    name: "Tea & Coffee Products",
    category: "Food & Beverages",
    price: "₹200",
    image: "/placeholder.svg?height=300&width=400",
    description: "Finest Indian tea leaves and aromatic coffee blends sourced from premium gardens",
    tags: ["Premium", "Aromatic", "Fresh"],
    animationType: "scale",
  },
  {
    id: 3,
    name: "Stainless Steel Cookware",
    category: "Home & Kitchenware",
    price: "₹800",
    image: "/placeholder.svg?height=300&width=400",
    description: "High-quality stainless steel cooking utensils and kitchenware for modern homes",
    tags: ["Durable", "Stainless Steel", "Modern"],
    animationType: "lift",
  },
  {
    id: 4,
    name: "Traditional Dinnerware",
    category: "Home & Kitchenware",
    price: "₹500",
    image: "/placeholder.svg?height=300&width=400",
    description: "Beautiful traditional Indian dinnerware sets with intricate designs",
    tags: ["Traditional", "Artistic", "Elegant"],
    animationType: "flip",
  },
  {
    id: 5,
    name: "Ayurvedic Skincare",
    category: "Personal Care",
    price: "₹300",
    image: "/placeholder.svg?height=300&width=400",
    description: "Natural Ayurvedic skincare products made with traditional Indian herbs",
    tags: ["Ayurvedic", "Natural", "Herbal"],
    animationType: "pulse",
  },
  {
    id: 6,
    name: "Indian Cotton Garments",
    category: "Garments",
    price: "₹1200",
    image: "/placeholder.svg?height=300&width=400",
    description: "Premium cotton garments showcasing traditional Indian craftsmanship",
    tags: ["Cotton", "Handcrafted", "Traditional"],
    animationType: "rotate",
  },
  {
    id: 7,
    name: "Wooden Handicrafts",
    category: "Handicrafts",
    price: "₹600",
    image: "/placeholder.svg?height=300&width=400",
    description: "Exquisite wooden handicrafts representing Indian artisan traditions",
    tags: ["Handmade", "Wooden", "Artistic"],
    animationType: "glow",
  },
  {
    id: 8,
    name: "Brass Decoratives",
    category: "Handicrafts",
    price: "₹900",
    image: "/placeholder.svg?height=300&width=400",
    description: "Elegant brass decorative items with traditional Indian motifs",
    tags: ["Brass", "Decorative", "Traditional"],
    animationType: "scale",
  },
  {
    id: 9,
    name: "Incense & Dhoop",
    category: "Pooja Samagri",
    price: "₹120",
    image: "/placeholder.svg?height=300&width=400",
    description: "Pure and aromatic incense sticks and dhoop for spiritual practices",
    tags: ["Pure", "Aromatic", "Spiritual"],
    animationType: "lift",
  },
  {
    id: 10,
    name: "Puja Essentials",
    category: "Pooja Samagri",
    price: "₹250",
    image: "/placeholder.svg?height=300&width=400",
    description: "Complete set of traditional puja items for Hindu religious ceremonies",
    tags: ["Traditional", "Religious", "Complete Set"],
    animationType: "flip",
  },
  {
    id: 11,
    name: "Festival Decorations",
    category: "Festivity Items",
    price: "₹400",
    image: "/placeholder.svg?height=300&width=400",
    description: "Colorful decorative items for Indian festivals and celebrations",
    tags: ["Colorful", "Festive", "Decorative"],
    animationType: "pulse",
  },
  {
    id: 12,
    name: "Educational Supplies",
    category: "School & Stationary",
    price: "₹180",
    image: "/placeholder.svg?height=300&width=400",
    description: "Quality educational supplies and stationary for schools and offices",
    tags: ["Educational", "Quality", "Essential"],
    animationType: "rotate",
  },
  {
    id: 13,
    name: "Bamboo Products",
    category: "Eco-friendly Items",
    price: "₹350",
    image: "/placeholder.svg?height=300&width=400",
    description: "Sustainable bamboo products for environmentally conscious consumers",
    tags: ["Sustainable", "Bamboo", "Eco-friendly"],
    animationType: "glow",
  },
  {
    id: 14,
    name: "Organic Cotton Bags",
    category: "Eco-friendly Items",
    price: "₹80",
    image: "/placeholder.svg?height=300&width=400",
    description: "Reusable organic cotton bags as sustainable alternatives to plastic",
    tags: ["Organic", "Reusable", "Sustainable"],
    animationType: "scale",
  },
]

const categories = ["All", "Food & Beverages", "Home & Kitchenware", "Personal Care", "Garments", "Handicrafts", "Pooja Samagri", "Festivity Items", "School & Stationary", "Eco-friendly Items"]

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [sortBy, setSortBy] = useState("name")
  const [viewMode, setViewMode] = useState("grid")

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        const matchesSearch =
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesCategory = selectedCategory === "All" || product.category === selectedCategory
        return matchesSearch && matchesCategory
      })
      .sort((a, b) => {
        switch (sortBy) {
          case "name":
            return a.name.localeCompare(b.name)
          case "price":
            return (
              Number.parseFloat(a.price.replace("₹", "").replace(",", "")) -
              Number.parseFloat(b.price.replace("₹", "").replace(",", ""))
            )
          default:
            return 0
        }
      })
  }, [searchTerm, selectedCategory, sortBy])

  const getHoverAnimation = (animationType: string) => {
    switch (animationType) {
      case "scale":
        return {
          scale: 1.05,
          boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
          transition: { duration: 0.3 },
        }
      case "flip":
        return {
          rotateY: 10,
          scale: 1.02,
          boxShadow: "0 15px 30px rgba(16, 185, 129, 0.3)",
          transition: { duration: 0.4 },
        }
      case "glow":
        return {
          scale: 1.03,
          boxShadow: "0 0 30px rgba(139, 92, 246, 0.5)",
          transition: { duration: 0.3 },
        }
      case "lift":
        return {
          y: -10,
          scale: 1.02,
          boxShadow: "0 25px 50px rgba(0, 0, 0, 0.2)",
          transition: { duration: 0.3 },
        }
      case "rotate":
        return {
          rotate: 2,
          scale: 1.05,
          boxShadow: "0 20px 40px rgba(245, 158, 11, 0.3)",
          transition: { duration: 0.3 },
        }
      case "pulse":
        return {
          scale: [1, 1.05, 1],
          boxShadow: "0 0 25px rgba(239, 68, 68, 0.4)",
          transition: { duration: 0.6, repeat: Number.POSITIVE_INFINITY },
        }
      default:
        return {}
    }
  }

  return (
    <>
      <CustomCursor />
      <Navigation />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 pt-20">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-4">
              EnnGee Product Portfolio
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Diverse range of quality Indian products and commodities for our worldwide customers
            </p>
          </motion.div>

          {/* Filters and Search */}
          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-8 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12 rounded-full border-2 border-gray-200 focus:border-blue-500 transition-colors"
                />
              </div>

              <div className="flex gap-4 items-center">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-40 h-12 rounded-full">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-40 h-12 rounded-full">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="name">Name</SelectItem>
                    <SelectItem value="price">Price</SelectItem>
                  </SelectContent>
                </Select>

                <div className="flex border-2 border-gray-200 rounded-full p-1">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className="rounded-full"
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className="rounded-full"
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Products Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              className={`grid gap-8 ${viewMode === "grid" ? "md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={getHoverAnimation(product.animationType)}
                  className="cursor-pointer"
                  data-product="true"
                >
                  <Card className="overflow-hidden border-0 shadow-lg bg-white/90 backdrop-blur-sm h-full">
                    <div className="relative overflow-hidden group">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button size="sm" className="rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </div>
                      <Badge className="absolute top-4 left-4 bg-blue-600 hover:bg-blue-700">{product.category}</Badge>
                    </div>

                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                        <div className="text-2xl font-bold text-blue-600">{product.price}</div>
                      </div>

                      <p className="text-gray-600 mb-4">{product.description}</p>

                      <div className="flex gap-1 justify-end">
                        {product.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex justify-center mt-4">
                        <Button variant="outline" size="icon" className="rounded-full bg-transparent">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProducts.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </div>
    </>
  )
}
