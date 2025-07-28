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

import { products, generateImageArray, getImageWithFallback } from "@/lib/products-data"



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
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
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
                        src={getImageWithFallback(product.image, product.name)}
                        alt={product.name}
                        className="w-full h-64 object-contain transition-transform duration-500 group-hover:scale-110 bg-white"
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

      {/* Product Image Zoom Modal */}
      <Dialog open={!!selectedProduct} onOpenChange={handleCloseModal}>
        <DialogContent className="max-w-6xl max-h-[95vh] p-0 overflow-hidden bg-transparent border-0 shadow-2xl">
          <DialogHeader className="sr-only">
            <DialogTitle>{selectedProduct?.name || "Product Image"}</DialogTitle>
          </DialogHeader>
          {selectedProduct && (
            <div className="relative">
              {/* Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-purple-500/20 to-teal-500/20 rounded-2xl blur-3xl"></div>
              <div className="absolute inset-0 bg-black/40 backdrop-blur-sm rounded-2xl"></div>
              
              {/* Main Image Container */}
              <div className="relative z-10 p-8">
                <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden">
                  {/* Product Title Bar */}
                  <div className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-r from-orange-600 to-orange-500 text-white p-4">
                    <div className="flex items-center justify-between">
                      <h2 className="text-xl font-bold truncate">{selectedProduct.name}</h2>
                      <div className="flex items-center gap-3">
                        <Badge className="bg-white/20 text-white border-white/20">{selectedProduct.category}</Badge>
                      </div>
                    </div>
                  </div>

                  {/* Zoomed Image */}
                  <div className="pt-20 p-8">
                    <div className="relative aspect-square max-h-[70vh] mx-auto bg-white rounded-xl shadow-inner overflow-hidden">
                      <img
                        src={getImageWithFallback(selectedProduct.images[currentImageIndex], selectedProduct.name)}
                        alt={`${selectedProduct.name} - Zoomed View`}
                        className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                      />
                      
                      {/* Navigation Arrows */}
                      {selectedProduct.images.length > 1 && (
                        <>
                          <Button
                            variant="secondary"
                            size="icon"
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg rounded-full"
                            onClick={handlePrevImage}
                          >
                            <ChevronLeft className="h-5 w-5" />
                          </Button>
                          <Button
                            variant="secondary"
                            size="icon"
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg rounded-full"
                            onClick={handleNextImage}
                          >
                            <ChevronRight className="h-5 w-5" />
                          </Button>
                        </>
                      )}

                      {/* Image Indicators */}
                      {selectedProduct.images.length > 1 && (
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                          {selectedProduct.images.map((_, index) => (
                            <button
                              key={index}
                              className={`w-3 h-3 rounded-full transition-all shadow-sm ${
                                index === currentImageIndex ? 'bg-orange-500 scale-125' : 'bg-white/60 hover:bg-white/80'
                              }`}
                              onClick={() => setCurrentImageIndex(index)}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Thumbnail Strip */}
                  {selectedProduct.images.length > 1 && (
                    <div className="px-8 pb-6">
                      <div className="flex gap-3 justify-center overflow-x-auto">
                        {selectedProduct.images.map((image, index) => (
                          <button
                            key={index}
                            className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all bg-white shadow-sm hover:shadow-md ${
                              index === currentImageIndex ? 'border-orange-500 ring-2 ring-orange-200' : 'border-gray-200 hover:border-gray-300'
                            }`}
                            onClick={() => setCurrentImageIndex(index)}
                          >
                            <img
                              src={getImageWithFallback(image, selectedProduct.name)}
                              alt={`${selectedProduct.name} thumbnail ${index + 1}`}
                              className="w-full h-full object-contain"
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
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
