"use client"
import React, { useEffect, useRef, useCallback } from "react"
import { useScroll, useMotionValueEvent } from "framer-motion"
import { Product } from "../data/products"

interface ProductBottleScrollProps {
  product: Product
}

// Animation completes within first 55% of page scroll so it finishes well before footer
const SCROLL_END = 0.55

export default function ProductBottleScroll({ product }: ProductBottleScrollProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  
  const { scrollYProgress } = useScroll()

  // Preload images — all three products (classic, zero, cherry) have 200 frames
  const images = useRef<HTMLImageElement[]>([])
  const frameCount = 200

  useEffect(() => {
    // Clear images array on product change
    images.current = []
    
    for (let i = 1; i <= frameCount; i++) {
        const img = new Image()
        img.src = `${product.folderPath}/${i}.webp`
        images.current.push(img)
    }
  }, [product])

  // Shared draw function for DRY code
  const drawFrame = useCallback((img: HTMLImageElement) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const { width, height } = canvas.getBoundingClientRect()
    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width
      canvas.height = height
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    const imgAspect = img.width / img.height
    const canvasAspect = canvas.width / canvas.height
    let drawWidth, drawHeight, startX, startY

    if (imgAspect > canvasAspect) {
      drawHeight = canvas.height
      drawWidth = canvas.height * imgAspect
      startY = 0
      startX = (canvas.width - drawWidth) / 2
    } else {
      drawWidth = canvas.width
      drawHeight = canvas.width / imgAspect
      startX = 0
      startY = (canvas.height - drawHeight) / 2
    }

    ctx.drawImage(img, startX, startY, drawWidth, drawHeight)
  }, [])

  // Map scroll progress to frame index — animation completes at SCROLL_END of page
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!canvasRef.current || images.current.length === 0) return

    // Remap: 0→SCROLL_END of page scroll maps to 0→1 of animation progress
    const progress = Math.min(latest / SCROLL_END, 1)

    let frameIndex = Math.floor(progress * (frameCount - 1))
    if (frameIndex >= frameCount) frameIndex = frameCount - 1
    if (frameIndex < 0) frameIndex = 0

    const img = images.current[frameIndex]

    if (img && img.complete) {
      requestAnimationFrame(() => drawFrame(img))
    }
  })

  // Initial draw when first image loads
  useEffect(() => {
    if (images.current[0]) {
        images.current[0].onload = () => {
            if (images.current[0]) {
              drawFrame(images.current[0])
            }
        }
    }
  }, [product, drawFrame])

  return (
    <div className="fixed inset-0 w-full h-full z-0 overflow-hidden flex items-center justify-center pointer-events-none">
        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover"
        />
    </div>
  )
}
