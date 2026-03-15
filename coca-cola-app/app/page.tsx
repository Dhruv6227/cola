"use client"
import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { products } from "@/data/products"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import ProductBottleScroll from "@/components/ProductBottleScroll"
import ProductTextOverlays from "@/components/ProductTextOverlays"

// Stagger children animations
const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
}

const EASE = [0.25, 0.46, 0.45, 0.94] as const

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } }
}

const fadeLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE } }
}

const fadeRight = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE } }
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: EASE } }
}

export default function Page() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const product = products[currentIndex]

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
        className="min-h-screen relative font-sans text-white"
        style={{
          background: product.gradient,
        }}
      >
        <Navbar />

        {/* Fixed full-screen bottle animation — scrolls through all 200 frames across the page */}
        <ProductBottleScroll product={product} />
        <ProductTextOverlays product={product} />

        {/* Spacer for the animation scroll zone */}
        <div className="h-[300vh] w-full relative z-10 select-none pointer-events-none" />

        {/* ======================== */}
        {/* Section: Product Details */}
        {/* ======================== */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="py-32 px-6 md:px-12 max-w-7xl mx-auto relative z-20 text-center"
        >
          <motion.div variants={scaleIn} className="glass-ui p-12 md:p-24 rounded-[3rem] shadow-2xl">
            <motion.h3 variants={fadeUp} className="text-4xl md:text-6xl font-black mb-8">
              {product.detailsSection.title}
            </motion.h3>
            <motion.p variants={fadeUp} className="text-xl md:text-2xl opacity-90 leading-relaxed max-w-3xl mx-auto mb-16">
              {product.detailsSection.description}
            </motion.p>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left"
            >
              {product.stats.map((stat, i) => (
                <motion.div
                  key={i}
                  variants={i === 0 ? fadeLeft : i === 2 ? fadeRight : fadeUp}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
                  className="bg-white/10 p-8 rounded-3xl border border-white/5 hover:bg-white/20 transition-colors cursor-default"
                >
                  <motion.div
                    className="text-5xl font-black mb-2"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.5, type: "spring", stiffness: 200 }}
                  >
                    {stat.val}
                  </motion.div>
                  <div className="text-sm uppercase tracking-widest opacity-80 font-bold">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.section>

        {/* ======================== */}
        {/* Section: Freshness Story */}
        {/* ======================== */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="py-32 px-6 md:px-12 bg-black/30 relative z-20 overflow-hidden"
        >
          {/* Animated decorative circles */}
          <motion.div
            className="absolute -left-32 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full"
            style={{ background: `${product.themeColor}33` }}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
          <motion.div
            className="absolute -right-32 top-1/3 w-48 h-48 rounded-full"
            style={{ background: `${product.themeColor}22` }}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          />
          <div className="max-w-4xl mx-auto text-center relative">
            <motion.h3
              variants={fadeUp}
              className="text-5xl md:text-7xl font-bold mb-8"
            >
              {product.freshnessSection.title}
            </motion.h3>
            <motion.p variants={fadeUp} className="text-2xl opacity-80 leading-relaxed">
              {product.freshnessSection.description}
            </motion.p>
          </div>
        </motion.section>

        {/* ======================== */}
        {/* Section: Features Strip  */}
        {/* ======================== */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="py-20 px-6 md:px-12 relative z-20"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {product.features.map((feature, i) => (
              <motion.div
                key={i}
                variants={i === 0 ? fadeLeft : i === 2 ? fadeRight : fadeUp}
                whileHover={{ y: -10, scale: 1.03 }}
                className="text-center p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all cursor-default"
              >
                <motion.div
                  className="text-6xl mb-4"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  {i === 0 ? "✨" : i === 1 ? "🫧" : "❄️"}
                </motion.div>
                <div className="text-2xl font-bold">{feature}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ======================== */}
        {/*    Section: Buy Now      */}
        {/* ======================== */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-32 px-6 md:px-12 relative z-20"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeLeft}>
              <motion.h2
                className="text-6xl md:text-8xl font-black mb-6"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                Enjoy Now
              </motion.h2>
              <motion.div
                variants={fadeUp}
                className="text-5xl font-bold mb-4"
              >
                {product.buyNowSection.price}{" "}
                <span className="text-2xl opacity-70">/ {product.buyNowSection.unit}</span>
              </motion.div>
              <motion.ul variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-8 space-y-4">
                {product.buyNowSection.processingParams.map((param, i) => (
                  <motion.li
                    key={i}
                    variants={fadeLeft}
                    className="flex items-center text-xl font-medium"
                  >
                    <motion.span
                      className="w-3 h-3 bg-white rounded-full mr-4 shadow-[0_0_10px_white]"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, type: "spring", stiffness: 300 }}
                    />
                    {param}
                  </motion.li>
                ))}
              </motion.ul>
              <motion.p variants={fadeUp} className="opacity-80 mb-2">{product.buyNowSection.deliveryPromise}</motion.p>
              <motion.p variants={fadeUp} className="opacity-80 mb-10 text-sm">{product.buyNowSection.returnPolicy}</motion.p>
              <motion.button
                whileHover={{ scale: 1.08, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full md:w-auto px-12 py-5 bg-white text-black font-black text-xl rounded-full hover:scale-105 transition-transform shadow-xl"
                style={{ color: product.themeColor }}
              >
                Add to Cart
              </motion.button>
            </motion.div>

            {/* Right side: animated product info card */}
            <motion.div
              variants={fadeRight}
              className="hidden md:flex flex-col items-center justify-center"
            >
              <motion.div
                className="w-full max-w-md p-10 rounded-[2rem] bg-white/10 backdrop-blur-md border border-white/20 text-center"
                whileHover={{ scale: 1.02 }}
                initial={{ rotate: -3 }}
                whileInView={{ rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-7xl font-black mb-4">{product.buyNowSection.price}</div>
                <div className="text-xl opacity-80 mb-6">Premium Refreshment</div>
                <div className="flex flex-wrap gap-3 justify-center">
                  {product.features.map((f, i) => (
                    <motion.span
                      key={i}
                      className="px-4 py-2 rounded-full bg-white/20 text-sm font-bold"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 }}
                    >
                      {f}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* ======================== */}
        {/*   Next Flavor CTA        */}
        {/* ======================== */}
        <motion.div
          className="w-full relative z-20 overflow-hidden cursor-pointer group"
          onClick={nextFlavor}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white/10 backdrop-blur-md border-t border-white/20 py-24 px-6 md:px-12 text-center hover:bg-white/20 transition-all duration-500 transform group-hover:-translate-y-2">
            <motion.h4
              className="text-4xl md:text-6xl font-black mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Experience Next Flavor →
            </motion.h4>
            <p className="text-xl font-medium opacity-80 uppercase tracking-widest">
              {products[(currentIndex + 1) % products.length].name}
            </p>
          </div>
        </motion.div>

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
