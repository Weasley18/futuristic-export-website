"use client"

import React, { useState, useEffect, useRef, useCallback } from 'react';
import * as THREE from 'three';
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Globe, TrendingUp, Users, Award, X, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { CustomCursor } from "@/components/custom-cursor"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { getCategoryMappings, getImageWithFallback } from "@/lib/products-data"

// Hero Section Component with Three.js
function HeroSection() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x451a03); // Warm dark background to match theme

    // Camera
    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    camera.position.z = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    currentMount.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(0, 1, 1);
    scene.add(directionalLight);

    // Geometric Shapes
    const geometries = [
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.SphereGeometry(0.7, 32, 32),
      new THREE.ConeGeometry(0.7, 1.5, 32),
      new THREE.TorusGeometry(0.8, 0.3, 16, 100),
      new THREE.OctahedronGeometry(1)
    ];

    const materials = [
      new THREE.MeshStandardMaterial({ color: 0xfb923c, roughness: 0.5, metalness: 0.2 }), // Orange
      new THREE.MeshStandardMaterial({ color: 0x14b8a6, roughness: 0.5, metalness: 0.2 }), // Teal
      new THREE.MeshStandardMaterial({ color: 0xf59e0b, roughness: 0.5, metalness: 0.2 }), // Amber
      new THREE.MeshStandardMaterial({ color: 0x0891b2, roughness: 0.5, metalness: 0.2 }), // Cyan
      new THREE.MeshStandardMaterial({ color: 0xea580c, roughness: 0.5, metalness: 0.2 })  // Dark Orange
    ];

    const objects: THREE.Mesh[] = [];
    for (let i = 0; i < 12; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const material = materials[Math.floor(Math.random() * materials.length)];
      const mesh = new THREE.Mesh(geometry, material);

      mesh.position.set(
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 12
      );
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      scene.add(mesh);
      objects.push(mesh);
    }

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);

      objects.forEach(obj => {
        obj.rotation.x += 0.005;
        obj.rotation.y += 0.005;
        obj.position.y += Math.sin(Date.now() * 0.0005 + obj.position.x) * 0.001; // Subtle floating
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle Resize
    const onWindowResize = () => {
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };
    window.addEventListener('resize', onWindowResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', onWindowResize);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      geometries.forEach(g => g.dispose());
      materials.forEach(m => m.dispose());
      scene.children.forEach(obj => {
        if (obj instanceof THREE.Mesh) {
          if (obj.geometry) obj.geometry.dispose();
          if (obj.material) {
            if (Array.isArray(obj.material)) {
              obj.material.forEach(mat => mat.dispose());
            } else {
              obj.material.dispose();
            }
          }
          scene.remove(obj);
        }
      });
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-900 via-amber-900 to-teal-900 pt-24">
      <div ref={mountRef} className="absolute inset-0 z-0"></div>
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-6 warm-gradient-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          EnnGee Enterprises
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-4 text-gray-300"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Leading Merchant Export Organization
        </motion.p>
        <motion.p
          className="text-lg md:text-xl mb-8 text-gray-400 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Specializing in sourcing and exporting diverse range of quality Indian products and commodities to our worldwide customers
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <Link href="/products">
            <Button
              size="lg"
              className="warm-button px-8 py-4 text-lg rounded-full"
              data-interactive="true"
            >
              Explore Products <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default function HomePage() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const categoryMappings = getCategoryMappings();

  const stats = [
    { icon: Globe, label: "Countries Served", value: "7+" },
    { icon: TrendingUp, label: "Years Experience", value: "15+" },
    { icon: Users, label: "Happy Clients", value: "100+" },
    { icon: Award, label: "Product Categories", value: "12+" },
  ]

  const handleCardExpand = (categoryKey: string) => {
    setExpandedCard(expandedCard === categoryKey ? null : categoryKey);
  };

  const handleProductView = (productId: number) => {
    // Navigate to products page with specific product selected
    window.location.href = `/products?product=${productId}`;
  };

  return (
    <>
      <CustomCursor />
      <Navigation />

      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 warm-gradient rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Vision, Mission & Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Foundation</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that drive our commitment to excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-lg bg-gradient-to-br from-orange-50 to-orange-100 hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-orange-900 mb-4">VISION</h3>
                  <p className="text-gray-700 leading-relaxed">
                    "Think Global…Connect Local" unlock the global market potential for products manufactured locally in India 
                    and ensure enhanced business outreach and growth for all our stake holders.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-lg bg-gradient-to-br from-amber-50 to-amber-100 hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-amber-900 mb-4">MISSION</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Consistently scale up our Customer footprint globally by offering best of the products portfolio 
                    and ensure highest level of customer happiness.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-lg bg-gradient-to-br from-teal-50 to-teal-100 hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-teal-900 mb-4">VALUES</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Continue to be a leading Merchant Export company complying with International Quality, 
                    Committed Service Fulfillment, offering Value-for-Money Products, ensures Profitable to our esteemed stake holders.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Product Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Diverse range of quality Indian products and commodities for worldwide customers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                name: "Premium Fabrics & Textiles", 
                category: "Fabrics", 
                image: "/table-linens.jpeg",
                categoryKey: "Fabrics",
                description: "High-quality textiles, linens, towels, and premium fabric collections"
              },
              { 
                name: "Traditional Diyas & Dhoop", 
                category: "Religious Items", 
                image: "/paisley-diyas.jpeg",
                categoryKey: "Dhoop",
                description: "Authentic religious items including diyas, dhoop, and pooja samagri"
              },
              { 
                name: "Laboratory Equipment", 
                category: "Educational & Medical", 
                image: "/medical-educational-models.jpeg",
                categoryKey: "Lab Equipments",
                description: "Professional-grade educational and medical equipment for institutions"
              },
            ].map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`transition-all duration-500 ${
                  expandedCard === product.categoryKey ? 'md:col-span-3' : ''
                }`}
              >
                <Card className={`group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm ${
                  expandedCard === product.categoryKey ? 'min-h-[600px]' : ''
                }`}>
                  {!expandedCard || expandedCard !== product.categoryKey ? (
                    <>
                      <div className="relative overflow-hidden">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <CardContent className="p-6">
                        <div className="text-sm text-orange-600 font-semibold mb-2">{product.category}</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                        <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                        <Button
                          variant="outline"
                          className="w-full group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300 bg-transparent"
                          data-interactive="true"
                          onClick={() => handleCardExpand(product.categoryKey)}
                        >
                          Learn More
                        </Button>
                      </CardContent>
                    </>
                  ) : (
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>
                          <div className="text-orange-600 font-semibold">{product.category}</div>
                        </div>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => setExpandedCard(null)}
                          className="rounded-full"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <AnimatePresence>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                          {categoryMappings[product.categoryKey]?.slice(0, 6).map((categoryProduct, prodIndex) => (
                            <motion.div
                              key={categoryProduct.id}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: prodIndex * 0.1 }}
                              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
                            >
                              <div className="aspect-square relative overflow-hidden">
                                <img
                                  src={getImageWithFallback(categoryProduct.image, categoryProduct.name)}
                                  alt={categoryProduct.name}
                                  className="w-full h-full object-contain bg-gray-50 transition-transform duration-300 hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                                  <Button 
                                    size="sm" 
                                    className="bg-white/90 text-gray-900 hover:bg-white"
                                    onClick={() => handleProductView(categoryProduct.id)}
                                  >
                                    <Eye className="h-4 w-4 mr-1" />
                                    View
                                  </Button>
                                </div>
                              </div>
                              <div className="p-4">
                                <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                                  {categoryProduct.name}
                                </h4>
                                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                                  {categoryProduct.description}
                                </p>
                                <div className="flex flex-wrap gap-1">
                                  {categoryProduct.tags.slice(0, 2).map((tag) => (
                                    <Badge key={tag} variant="secondary" className="text-xs">
                                      {tag}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </motion.div>
                      </AnimatePresence>
                      
                      {categoryMappings[product.categoryKey] && categoryMappings[product.categoryKey].length > 6 && (
                        <div className="mt-6 text-center">
                          <Link href="/products">
                            <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                              View All {categoryMappings[product.categoryKey].length} Products
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </Link>
                        </div>
                      )}
                    </div>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>

          {!expandedCard && (
            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link href="/products">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-4 text-lg rounded-full hover:bg-orange-600 hover:text-white transition-all duration-300 bg-transparent border-orange-600 text-orange-600"
                  data-interactive="true"
                >
                  View All Products <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              What our valued clients say about working with EnnGee Enterprises
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8">
                  <p className="text-gray-700 mb-6 leading-relaxed italic">
                    "We are very grateful for your excellent service and professionalism. We had immense pleasure dealing with EnnGee for over 3 years. 
                    We look forward for your continued support in services for sourcing of products from India."
                  </p>
                  <div className="flex items-center">
                    <div>
                      <div className="font-semibold text-gray-900">Avinesh</div>
                      <div className="text-orange-600">Tonertech</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8">
                  <p className="text-gray-700 mb-6 leading-relaxed italic">
                    "I have found them to be very professional. Requested information was always provided in a timely manner. 
                    Their prices are very attractive as they deal directly with the producers and not the middleman. Highly recommended."
                  </p>
                  <div className="flex items-center">
                    <div>
                      <div className="font-semibold text-gray-900">Rajnesh Prasad</div>
                      <div className="text-orange-600">Importer</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8">
                  <p className="text-gray-700 mb-6 leading-relaxed italic">
                    "One word to define EnnGee team, they are just amazing guys and dependable supplier to work with. 
                    Appreciate their Professional approach, Commitment in their service. They always find the right product and rates for our sourcing out of INDIA."
                  </p>
                  <div className="flex items-center">
                    <div>
                      <div className="font-semibold text-gray-900">Sania</div>
                      <div className="text-orange-600">Canada</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8">
                  <p className="text-gray-700 mb-6 leading-relaxed italic">
                    "We are grateful and value our association with EnnGee, who are our exclusive export partner. 
                    Confident of scaling greater heights of partnership together."
                  </p>
                  <div className="flex items-center">
                    <div>
                      <div className="font-semibold text-gray-900">Chirag Jain</div>
                      <div className="text-orange-600">Parag Rakhi's</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Source from India?</h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              "You Name It, We Supply It" - Connect with us for all your Indian product sourcing needs
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105"
                data-interactive="true"
              >
                Get Started Today
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}
