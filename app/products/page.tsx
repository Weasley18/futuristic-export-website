"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Eye, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { CustomCursor } from "@/components/custom-cursor"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const products = [
  {
    id: 1,
    name: "Indian Spices & Seasonings",
    category: "Food & Beverages",
    price: "₹150",
    image: "/placeholder.svg?height=300&width=400",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600"
    ],
    description: "Premium quality Indian spices and traditional seasonings for global culinary needs",
    detailedDescription: "Our premium Indian spices collection features carefully selected and processed spices that capture the authentic flavors of India. Each spice is sourced directly from farmers across various regions of India, ensuring the highest quality and freshness. Our spices undergo rigorous quality testing and are processed using traditional methods combined with modern hygiene standards.",
    specifications: {
      "Origin": "Various regions of India",
      "Processing": "Traditional sun-dried and ground",
      "Packaging": "Food-grade sealed pouches",
      "Shelf Life": "24 months from packaging",
      "Certifications": "FSSAI, Organic, Export Quality"
    },
    tags: ["Organic", "Traditional", "Export Quality"],
    animationType: "glow",
  },
  {
    id: 2,
    name: "Tea & Coffee Products",
    category: "Food & Beverages",
    price: "₹200",
    image: "/placeholder.svg?height=300&width=400",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600"
    ],
    description: "Finest Indian tea leaves and aromatic coffee blends sourced from premium gardens",
    detailedDescription: "Sourced from the renowned tea gardens of Darjeeling, Assam, and Nilgiris, our tea collection offers a diverse range of flavors and aromas. Our coffee beans are carefully selected from the plantations of Karnataka and Kerala, known for their rich flavor profiles. Each product undergoes careful processing to preserve the natural oils and flavors.",
    specifications: {
      "Tea Origin": "Darjeeling, Assam, Nilgiris",
      "Coffee Origin": "Karnataka, Kerala plantations",
      "Processing": "Orthodox method for tea, Washed process for coffee",
      "Packaging": "Vacuum-sealed aluminum pouches",
      "Grades Available": "FTGFOP, SFTGFOP, Arabica, Robusta"
    },
    tags: ["Premium", "Aromatic", "Fresh"],
    animationType: "scale",
  },
  {
    id: 3,
    name: "Stainless Steel Cookware",
    category: "Home & Kitchenware",
    price: "₹800",
    image: "/placeholder.svg?height=300&width=400",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600"
    ],
    description: "High-quality stainless steel cooking utensils and kitchenware for modern homes",
    detailedDescription: "Our stainless steel cookware collection is manufactured using premium grade 304 stainless steel, ensuring durability, heat distribution, and resistance to corrosion. Each piece is designed with ergonomic handles and features that make cooking efficient and enjoyable. Perfect for both domestic and commercial use.",
    specifications: {
      "Material": "304 Grade Stainless Steel",
      "Finish": "Mirror polish interior, Matte exterior",
      "Base": "Tri-ply bottom for even heating",
      "Handles": "Heat-resistant bakelite",
      "Dishwasher Safe": "Yes",
      "Induction Compatible": "Yes"
    },
    tags: ["Durable", "Stainless Steel", "Modern"],
    animationType: "lift",
  },
  {
    id: 4,
    name: "Traditional Dinnerware",
    category: "Home & Kitchenware",
    price: "₹500",
    image: "/placeholder.svg?height=300&width=400",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600"
    ],
    description: "Beautiful traditional Indian dinnerware sets with intricate designs",
    detailedDescription: "Handcrafted traditional dinnerware featuring authentic Indian artistry and cultural motifs. Each piece is carefully designed and painted by skilled artisans, making every set unique. The dinnerware combines traditional aesthetics with modern functionality, perfect for special occasions and daily use.",
    specifications: {
      "Material": "Premium ceramic with food-safe glazing",
      "Design": "Hand-painted traditional motifs",
      "Set Includes": "Plates, bowls, cups, serving dishes",
      "Microwave Safe": "Yes",
      "Care Instructions": "Hand wash recommended for longevity"
    },
    tags: ["Traditional", "Artistic", "Elegant"],
    animationType: "flip",
  },
  {
    id: 5,
    name: "Ayurvedic Skincare",
    category: "Personal Care",
    price: "₹300",
    image: "/placeholder.svg?height=300&width=400",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600"
    ],
    description: "Natural Ayurvedic skincare products made with traditional Indian herbs",
    detailedDescription: "Our Ayurvedic skincare range is formulated using centuries-old traditional recipes combined with modern extraction techniques. Each product contains carefully selected herbs and natural ingredients known for their therapeutic properties. Free from harmful chemicals and suitable for all skin types.",
    specifications: {
      "Ingredients": "Neem, Turmeric, Aloe Vera, Sandalwood",
      "Formulation": "Chemical-free, paraben-free",
      "Suitable For": "All skin types",
      "Testing": "Dermatologically tested",
      "Packaging": "Eco-friendly tubes and containers"
    },
    tags: ["Ayurvedic", "Natural", "Herbal"],
    animationType: "pulse",
  },
  {
    id: 6,
    name: "Indian Cotton Garments",
    category: "Garments",  
    price: "₹1200",
    image: "/placeholder.svg?height=300&width=400",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600"
    ],
    description: "Premium cotton garments showcasing traditional Indian craftsmanship",
    detailedDescription: "Handwoven cotton garments that represent the rich textile heritage of India. Each piece is crafted by skilled artisans using traditional weaving techniques passed down through generations. The cotton used is sourced from the finest cotton-growing regions of India, ensuring comfort and durability.",
    specifications: {
      "Material": "100% Pure Cotton",
      "Weave": "Handloom traditional weave",
      "Colors": "Natural dyes and modern colorfast dyes",
      "Sizes": "S, M, L, XL, XXL available",
      "Care": "Machine washable, gentle cycle recommended"
    },
    tags: ["Cotton", "Handcrafted", "Traditional"],
    animationType: "rotate",
  },
  {
    id: 7,
    name: "Wooden Handicrafts",
    category: "Handicrafts",
    price: "₹600",
    image: "/placeholder.svg?height=300&width=400",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600"
    ],
    description: "Exquisite wooden handicrafts representing Indian artisan traditions",
    detailedDescription: "Our wooden handicrafts collection showcases the incredible skill of Indian woodworkers and their mastery of traditional carving techniques. Each piece is hand-carved from sustainably sourced wood and finished with natural polishes to highlight the wood's natural grain and beauty.",
    specifications: {
      "Wood Type": "Rosewood, Sandalwood, Sheesham",
      "Finish": "Natural wood polish",
      "Carving": "Hand-carved traditional designs",
      "Size Range": "Small decorative to large furniture pieces",
      "Maintenance": "Dust regularly, oil treatment annually"
    },
    tags: ["Handmade", "Wooden", "Artistic"],
    animationType: "glow",
  },
  {
    id: 8,
    name: "Brass Decoratives",
    category: "Handicrafts",
    price: "₹900",
    image: "/placeholder.svg?height=300&width=400",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600"
    ],
    description: "Elegant brass decorative items with traditional Indian motifs",
    detailedDescription: "Handcrafted brass decoratives that embody the rich metalworking traditions of India. Each piece is meticulously crafted using traditional techniques and features intricate engravings and embossing. The brass used is of high quality and develops a beautiful patina over time.",
    specifications: {
      "Material": "High-grade brass alloy",
      "Technique": "Hand-hammered and engraved",
      "Finish": "Antique and polished finishes available",
      "Motifs": "Traditional Indian and contemporary designs",
      "Care": "Clean with brass cleaner, avoid harsh chemicals"
    },
    tags: ["Brass", "Decorative", "Traditional"],
    animationType: "scale",
  },
  {
    id: 9,
    name: "Incense & Dhoop",
    category: "Pooja Samagri",
    price: "₹120",
    image: "/placeholder.svg?height=300&width=400",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600"
    ],
    description: "Pure and aromatic incense sticks and dhoop for spiritual practices",
    detailedDescription: "Our incense and dhoop collection is made from pure natural ingredients including aromatic woods, herbs, and essential oils. Each stick is hand-rolled using traditional methods and contains no harmful chemicals. Perfect for meditation, prayers, and creating a peaceful atmosphere.",
    specifications: {
      "Ingredients": "Natural aromatic woods, herbs, essential oils",
      "Production": "Hand-rolled traditional method",
      "Burn Time": "45-60 minutes per stick",
      "Fragrances": "Sandalwood, Jasmine, Rose, Mogra, Lavender",
      "Packaging": "Biodegradable paper tubes"
    },
    tags: ["Pure", "Aromatic", "Spiritual"],
    animationType: "lift",
  },
  {
    id: 10,
    name: "Puja Essentials",
    category: "Pooja Samagri",
    price: "₹250",
    image: "/placeholder.svg?height=300&width=400",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600"
    ],
    description: "Complete set of traditional puja items for Hindu religious ceremonies",
    detailedDescription: "A comprehensive collection of authentic puja items sourced from traditional manufacturers across India. Each item is selected for its quality and adherence to religious practices. The set includes all essential items needed for conducting various Hindu religious ceremonies and daily prayers.",
    specifications: {
      "Items Included": "Brass diya, incense, kumkum, haldi, rice, cotton wicks",
      "Material": "Brass, ceramic, natural ingredients",
      "Authenticity": "Traditional specifications followed",
      "Packaging": "Decorative wooden box",
      "Usage": "Daily prayers and special ceremonies"
    },
    tags: ["Traditional", "Religious", "Complete Set"],
    animationType: "flip",
  },
  {
    id: 11,
    name: "Festival Decorations",
    category: "Festivity Items",
    price: "₹400",
    image: "/placeholder.svg?height=300&width=400",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600"
    ],
    description: "Colorful decorative items for Indian festivals and celebrations",
    detailedDescription: "Vibrant and traditional decorative items perfect for Indian festivals like Diwali, Holi, Dussehra, and weddings. Each piece is crafted to bring joy and color to celebrations while maintaining the cultural significance and traditional aesthetics of Indian festivities.",
    specifications: {
      "Materials": "Paper, fabric, metal, plastic (food-safe)",
      "Festivals": "Diwali, Holi, Dussehra, Ganesh Chaturthi, Weddings",
      "Colors": "Bright traditional Indian colors",
      "Reusability": "Most items can be reused for multiple celebrations",
      "Storage": "Easy to store and maintain"
    },
    tags: ["Colorful", "Festive", "Decorative"],
    animationType: "pulse",
  },
  {
    id: 12,
    name: "Educational Supplies",
    category: "School & Stationary",
    price: "₹180",
    image: "/placeholder.svg?height=300&width=400",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600"
    ],
    description: "Quality educational supplies and stationary for schools and offices",
    detailedDescription: "High-quality educational and office supplies manufactured to international standards. Our range includes notebooks, pens, pencils, rulers, and specialized educational materials. All products are made from eco-friendly materials and are safe for children and adults alike.",
    specifications: {
      "Paper Quality": "70-80 GSM, acid-free paper",
      "Ink": "Non-toxic, fade-resistant inks",
      "Binding": "Perfect binding and spiral binding options",
      "Eco-Friendly": "Recycled materials used where possible",
      "Age Groups": "Suitable for all age groups from kindergarten to office use"
    },
    tags: ["Educational", "Quality", "Essential"],
    animationType: "rotate",
  },
  {
    id: 13,
    name: "Bamboo Products",
    category: "Eco-friendly Items",
    price: "₹350",
    image: "/placeholder.svg?height=300&width=400",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600"
    ],
    description: "Sustainable bamboo products for environmentally conscious consumers",
    detailedDescription: "Our bamboo products are crafted from sustainably harvested bamboo and represent an eco-friendly alternative to plastic and other non-biodegradable materials. Each product is designed for durability while maintaining the natural properties of bamboo that make it antibacterial and biodegradable.",
    specifications: {
      "Material": "100% Natural bamboo",
      "Harvesting": "Sustainable farming practices",
      "Treatment": "Natural treatment, no harmful chemicals",
      "Durability": "Long-lasting with proper care",
      "Biodegradable": "100% biodegradable and compostable"
    },
    tags: ["Sustainable", "Bamboo", "Eco-friendly"],
    animationType: "glow",
  },
  {
    id: 14,
    name: "Organic Cotton Bags",
    category: "Eco-friendly Items",
    price: "₹80",
    image: "/placeholder.svg?height=300&width=400",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600"
    ],
    description: "Reusable organic cotton bags as sustainable alternatives to plastic",
    detailedDescription: "Made from 100% organic cotton, these reusable bags are perfect for shopping, storage, and daily use. They are strong, washable, and designed to replace single-use plastic bags. Each bag is produced following fair trade practices and supports sustainable farming communities.",
    specifications: {
      "Material": "100% Organic cotton",
      "Weight Capacity": "Up to 15kg",
      "Dimensions": "Various sizes available",
      "Handles": "Reinforced cotton handles",
      "Washing": "Machine washable, air dry recommended",
      "Certifications": "GOTS certified organic cotton"
    },
    tags: ["Organic", "Reusable", "Sustainable"],
    animationType: "scale",
  },
]



export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const filteredProducts = products

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

  const handleProductView = (product: typeof products[0]) => {
    setSelectedProduct(product)
    setCurrentImageIndex(0)
  }

  const handleCloseModal = () => {
    setSelectedProduct(null)
    setCurrentImageIndex(0)
  }

  const handlePrevImage = () => {
    if (selectedProduct) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProduct.images.length - 1 : prev - 1
      )
    }
  }

  const handleNextImage = () => {
    if (selectedProduct) {
      setCurrentImageIndex((prev) => 
        prev === selectedProduct.images.length - 1 ? 0 : prev + 1
      )
    }
  }

  return (
    <>
      <CustomCursor />
      <Navigation />

      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-teal-50 pt-20">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold warm-gradient-text mb-4">
              EnnGee Product Portfolio
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Diverse range of quality Indian products and commodities for our worldwide customers
            </p>
          </motion.div>



          {/* Products Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
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
                      <Badge className="absolute top-4 left-4 bg-orange-600 hover:bg-orange-700">{product.category}</Badge>
                    </div>

                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                        <div className="text-2xl font-bold text-orange-600">{product.price}</div>
                      </div>



                      <div className="flex gap-1 justify-end">
                        {product.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex justify-center mt-4">
                        <Button variant="outline" size="icon" className="rounded-full bg-transparent" onClick={() => handleProductView(product)}>
                          <Eye className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>


        </div>
      </div>

      {/* Product Detail Modal */}
      <Dialog open={!!selectedProduct} onOpenChange={handleCloseModal}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProduct && (
            <div className="space-y-6">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold warm-gradient-text">
                  {selectedProduct.name}
                </DialogTitle>
              </DialogHeader>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Image Gallery */}
                <div className="space-y-4">
                  <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
                    <img
                      src={selectedProduct.images[currentImageIndex]}
                      alt={`${selectedProduct.name} - View ${currentImageIndex + 1}`}
                      className="w-full h-full object-cover"
                    />
                    
                    {selectedProduct.images.length > 1 && (
                      <>
                        <Button
                          variant="secondary"
                          size="icon"
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white"
                          onClick={handlePrevImage}
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="secondary"
                          size="icon"
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white"
                          onClick={handleNextImage}
                        >
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </>
                    )}

                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
                      {selectedProduct.images.map((_, index) => (
                        <button
                          key={index}
                          className={`w-2 h-2 rounded-full transition-all ${
                            index === currentImageIndex ? 'bg-orange-500' : 'bg-white/50'
                          }`}
                          onClick={() => setCurrentImageIndex(index)}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Thumbnail Images */}
                  {selectedProduct.images.length > 1 && (
                    <div className="flex gap-2 overflow-x-auto">
                      {selectedProduct.images.map((image, index) => (
                        <button
                          key={index}
                          className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 transition-all ${
                            index === currentImageIndex ? 'border-orange-500' : 'border-gray-200'
                          }`}
                          onClick={() => setCurrentImageIndex(index)}
                        >
                          <img
                            src={image}
                            alt={`${selectedProduct.name} thumbnail ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Product Details */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <Badge className="bg-orange-600 text-white">{selectedProduct.category}</Badge>
                    <div className="text-3xl font-bold text-orange-600">{selectedProduct.price}</div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {selectedProduct.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Description</h3>
                    <p className="text-gray-600 leading-relaxed">{selectedProduct.detailedDescription}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Specifications</h3>
                    <div className="space-y-2">
                      {Object.entries(selectedProduct.specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between py-2 border-b border-gray-100 last:border-b-0">
                          <span className="font-medium text-gray-700">{key}:</span>
                          <span className="text-gray-600 text-right flex-1 ml-4">{value}</span>  
                        </div>
                      ))}
                    </div>
                  </div>


                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </>
  )
}
