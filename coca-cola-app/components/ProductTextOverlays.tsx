"use client"
import React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Product } from "../data/products"

interface ProductTextOverlaysProps {
  product: Product
}

export default function ProductTextOverlays({ product }: ProductTextOverlaysProps) {
  const { scrollYProgress } = useScroll()

  // Text overlays are compressed to appear within the first ~40% of page scroll
  // to stay synchronized with the bottle animation (which completes at 55%)

  // Section 1: Intro (0% to 8%)
  const opacity1 = useTransform(scrollYProgress, [0, 0.04, 0.06, 0.08], [1, 1, 0, 0])
  const y1 = useTransform(scrollYProgress, [0, 0.08], [0, -50])

  // Section 2: Fizz (8% to 18%)
  const opacity2 = useTransform(scrollYProgress, [0.08, 0.1, 0.16, 0.18], [0, 1, 1, 0])
  const y2 = useTransform(scrollYProgress, [0.1, 0.16], [50, -50])

  // Section 3: Moments (18% to 28%)
  const opacity3 = useTransform(scrollYProgress, [0.18, 0.2, 0.26, 0.28], [0, 1, 1, 0])
  const y3 = useTransform(scrollYProgress, [0.2, 0.26], [50, -50])

  // Section 4: Refreshment (28% to 38%)
  const opacity4 = useTransform(scrollYProgress, [0.28, 0.3, 0.36, 0.38], [0, 1, 1, 0])
  const y4 = useTransform(scrollYProgress, [0.3, 0.38], [50, -50])

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
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
