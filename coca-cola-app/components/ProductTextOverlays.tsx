"use client"
import React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Product } from "../data/products"

interface ProductTextOverlaysProps {
  product: Product
  containerRef: React.RefObject<HTMLDivElement>
}

export default function ProductTextOverlays({ product, containerRef }: ProductTextOverlaysProps) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Section 1: Intro (0.0 to 0.2)
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.25], [1, 1, 0, 0])
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -50])

  // Section 2: Fizz (0.25 to 0.45)
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.25, 0.4, 0.45], [0, 1, 1, 0])
  const y2 = useTransform(scrollYProgress, [0.25, 0.4], [50, -50])

  // Section 3: Moments (0.5 to 0.7)
  const opacity3 = useTransform(scrollYProgress, [0.45, 0.5, 0.65, 0.7], [0, 1, 1, 0])
  const y3 = useTransform(scrollYProgress, [0.5, 0.65], [50, -50])

  // Section 4: Refreshment (0.75 to 0.95)
  const opacity4 = useTransform(scrollYProgress, [0.7, 0.75, 0.9, 0.95], [0, 1, 1, 0])
  const y4 = useTransform(scrollYProgress, [0.75, 0.95], [50, -50])

  return (
    <div className="fixed inset-0 pointer-events-none z-20">
      {/* Section 1 */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pt-10"
      >
        {/* Intentionally left blank so video text can shine */}
      </motion.div>

      {/* Section 2 */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
      >
        <h2 className="text-5xl md:text-7xl font-bold mb-4 tracking-tighter drop-shadow-2xl">
          {product.section2.title}
        </h2>
        <p className="text-xl md:text-2xl opacity-90 drop-shadow-lg max-w-xl">
          {product.section2.subtitle}
        </p>
      </motion.div>

      {/* Section 3 */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
      >
        <h2 className="text-5xl md:text-7xl font-bold mb-4 tracking-tighter drop-shadow-2xl">
          {product.section3.title}
        </h2>
        <p className="text-xl md:text-2xl opacity-90 drop-shadow-lg max-w-xl">
          {product.section3.subtitle}
        </p>
      </motion.div>

      {/* Section 4 */}
      <motion.div
        style={{ opacity: opacity4, y: y4 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
      >
        <h2 className="text-5xl md:text-7xl font-bold mb-4 tracking-tighter drop-shadow-2xl">
          {product.section4.title}
        </h2>
        <p className="text-xl md:text-2xl opacity-90 drop-shadow-lg max-w-xl">
          {product.section4.subtitle}
        </p>
      </motion.div>
    </div>
  )
}
