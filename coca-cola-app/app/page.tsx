"use client"
import React, { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { products } from "@/data/products"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import ProductBottleScroll from "@/components/ProductBottleScroll"
import ProductTextOverlays from "@/components/ProductTextOverlays"

export default function Page() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const product = products[currentIndex]
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  // Scroll Reset on flavor change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [currentIndex])

  const nextFlavor = () => setCurrentIndex((prev) => (prev + 1) % products.length)

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={product.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="min-h-screen relative font-sans"
        style={{
          background: product.gradient,
        }}
      >
        <Navbar />

        {/* Orchestrate Bottle Scroll & Overlays */}
        {/* We use a single h-[500vh] ref space. */}
        <div ref={scrollContainerRef} className="relative w-full z-10">
          {/* The canvas bottle component receives state but its own wrapper */}
          <div className="h-[500vh] w-full select-none" />
          <div className="absolute top-0 w-full h-full">
            {/* The actual sticky container is handled within ProductBottleScroll/Overlays but we inject scroll progress target */}
            <ProductBottleScroll product={product} containerRef={scrollContainerRef} />
            <ProductTextOverlays product={product} containerRef={scrollContainerRef} />
          </div>
        </div>

        {/* Section 2: Details */}
        <motion.section
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          viewport={{ once: true, margin: "-100px" }}
          className="py-32 px-6 md:px-12 max-w-7xl mx-auto relative z-20 text-center"
        >
          <div className="glass-ui p-12 md:p-24 rounded-[3rem] shadow-2xl">
            <h3 className="text-4xl md:text-6xl font-black mb-8">{product.detailsSection.title}</h3>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed max-w-3xl mx-auto mb-16">
              {product.detailsSection.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {product.stats.map((stat, i) => (
                <div key={i} className="bg-white/10 p-8 rounded-3xl border border-white/5 hover:bg-white/20 transition-colors">
                  <div className="text-5xl font-black mb-2">{stat.val}</div>
                  <div className="text-sm uppercase tracking-widest opacity-80 font-bold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Section 3: Freshness Story */}
        <motion.section
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          viewport={{ once: true, margin: "-100px" }}
          className="py-32 px-6 md:px-12 bg-black/30 relative z-20"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-5xl md:text-7xl font-bold mb-8">{product.freshnessSection.title}</h3>
            <p className="text-2xl opacity-80 leading-relaxed">
              {product.freshnessSection.description}
            </p>
          </div>
        </motion.section>

        {/* Section 4: Buy Now */}
        <motion.section
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.95 }}
          viewport={{ once: true }}
          className="py-32 px-6 md:px-12 relative z-20"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-6xl md:text-8xl font-black mb-6">Enjoy Now</h2>
              <div className="text-5xl font-bold mb-4">{product.buyNowSection.price} <span className="text-2xl opacity-70">/ {product.buyNowSection.unit}</span></div>
              <ul className="mb-8 space-y-4">
                {product.buyNowSection.processingParams.map((param, i) => (
                  <li key={i} className="flex items-center text-xl font-medium">
                    <span className="w-3 h-3 bg-white rounded-full mr-4 shadow-[0_0_10px_white]"></span>
                    {param}
                  </li>
                ))}
              </ul>
              <p className="opacity-80 mb-2">{product.buyNowSection.deliveryPromise}</p>
              <p className="opacity-80 mb-10 text-sm">{product.buyNowSection.returnPolicy}</p>
              <button 
                className="w-full md:w-auto px-12 py-5 bg-white text-black font-black text-xl rounded-full hover:scale-105 transition-transform shadow-xl"
                style={{ color: product.themeColor }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </motion.section>

        {/* Next Flavor CTA */}
        <div className="w-full relative z-20 overflow-hidden cursor-pointer group" onClick={nextFlavor}>
            <div className="bg-white/10 backdrop-blur-md border-t border-white/20 py-24 px-6 md:px-12 text-center hover:bg-white/20 transition-all duration-500 transform group-hover:-translate-y-2">
              <h4 className="text-4xl md:text-6xl font-black mb-4">
                Experience Next Flavor →
              </h4>
              <p className="text-xl font-medium opacity-80 uppercase tracking-widest">
                {products[(currentIndex + 1) % products.length].name}
              </p>
            </div>
        </div>

        {/* Navigation Pills */}
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 flex gap-4 p-2 rounded-full glass-ui">
          {products.map((prod, idx) => (
            <button
              key={prod.id}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === idx ? "scale-150 bg-white" : "bg-white/30 hover:bg-white/60"
              }`}
              aria-label={`Switch to ${prod.name}`}
            />
          ))}
        </div>

        <Footer />
      </motion.div>
    </AnimatePresence>
  )
}
