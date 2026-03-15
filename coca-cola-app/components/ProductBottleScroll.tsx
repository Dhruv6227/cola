"use client"
import React, { useEffect, useRef } from "react"
import { useScroll, useMotionValueEvent } from "framer-motion"
import { Product } from "../data/products"

interface ProductBottleScrollProps {
  product: Product
  containerRef: React.RefObject<HTMLDivElement>
}

export default function ProductBottleScroll({ product, containerRef }: ProductBottleScrollProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Preload images
  const images = useRef<HTMLImageElement[]>([])
  const frameCount = 120

  useEffect(() => {
    // Clear images array on product change
    images.current = []
    
    for (let i = 1; i <= frameCount; i++) {
        const img = new Image()
        img.src = `${product.folderPath}/${i}.webp`
        images.current.push(img)
    }
  }, [product])

  // Map scroll progress to frame index
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!canvasRef.current || images.current.length === 0) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Calculate frame index from 0 to 119
    let frameIndex = Math.floor(latest * frameCount)
    if (frameIndex >= frameCount) frameIndex = frameCount - 1
    if (frameIndex < 0) frameIndex = 0

    const img = images.current[frameIndex]

    if (img && img.complete) {
        requestAnimationFrame(() => {
            // Resize canvas to match display size
            const { width, height } = canvas.getBoundingClientRect()
            if (canvas.width !== width || canvas.height !== height) {
                canvas.width = width
                canvas.height = height
            }

            // Clear canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // Draw image with contain fit logic
            const imgAspect = img.width / img.height
            const canvasAspect = canvas.width / canvas.height
            let drawWidth, drawHeight, startX, startY

            if (imgAspect > canvasAspect) {
                // Image is wider than canvas
                drawHeight = canvas.height
                drawWidth = canvas.height * imgAspect
                startY = 0
                startX = (canvas.width - drawWidth) / 2
            } else {
                // Image is taller than canvas
                drawWidth = canvas.width
                drawHeight = canvas.width / imgAspect
                startX = 0
                startY = (canvas.height - drawHeight) / 2
            }

            ctx.drawImage(img, startX, startY, drawWidth, drawHeight)
        })
    }
  })

  // Initial draw if image 1 loads
  useEffect(() => {
    if (images.current[0]) {
        images.current[0].onload = () => {
            const canvas = canvasRef.current
            const ctx = canvas?.getContext("2d")
            if (canvas && ctx && images.current[0]) {
                const { width, height } = canvas.getBoundingClientRect()
                canvas.width = width
                canvas.height = height
                
                const img = images.current[0]
                const imgAspect = img.width / img.height
                const canvasAspect = canvas.width / canvas.height
                let drawWidth, drawHeight, startX, startY

                if (imgAspect > canvasAspect) {
                    // Image is wider than canvas
                    drawHeight = canvas.height
                    drawWidth = canvas.height * imgAspect
                    startY = 0
                    startX = (canvas.width - drawWidth) / 2
                } else {
                    // Image is taller than canvas
                    drawWidth = canvas.width
                    drawHeight = canvas.width / imgAspect
                    startX = 0
                    startY = (canvas.height - drawHeight) / 2
                }

                ctx.drawImage(img, startX, startY, drawWidth, drawHeight)
            }
        }
    }
  }, [product])

  return (
    <div ref={containerRef} className="h-[500vh] w-full relative z-10">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover pointer-events-none"
        />
      </div>
    </div>
  )
}
