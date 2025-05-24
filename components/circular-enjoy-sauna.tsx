"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

interface EnjoyStep {
  id: string
  number: string
  title: string
  description: string
  imageUrl: string
}

interface CircularEnjoySaunaProps {
  steps: EnjoyStep[]
}

export default function CircularEnjoySauna({ steps }: CircularEnjoySaunaProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Calculate positions for each step in the circle
  const getStepPosition = (index: number, totalSteps: number, activeIdx: number) => {
    // Calculate the angle for this step (adjusted for active index)
    const adjustedIndex = (index - activeIdx + totalSteps) % totalSteps
    const angle = (adjustedIndex * (360 / totalSteps) + 180) % 360 // Start at bottom (180 degrees)

    // Convert angle to radians
    const radians = (angle * Math.PI) / 180

    // Calculate position on circle
    const radius = 180 // Reduced circle radius to bring images closer to center
    const x = Math.sin(radians) * radius
    const y = Math.cos(radians) * radius

    // Calculate size and z-index based on position
    // Bottom position (180 degrees) is largest
    const isBottom = Math.abs(angle - 180) < 30
    const size = isBottom ? 1 : 0.7
    const zIndex = isBottom ? 10 : 5

    return { x, y, size, zIndex, angle }
  }

  const rotateToNext = () => {
    if (isAnimating) return

    setIsAnimating(true)
    setActiveIndex((prev) => (prev + 1) % steps.length)

    // Reset animation flag after animation completes
    setTimeout(() => {
      setIsAnimating(false)
    }, 600)
  }

  return (
    <div className="relative w-full py-20 flex flex-col items-center">
      {/* Circle container */}
      <div ref={containerRef} className="relative w-[700px] h-[700px] mb-16 cursor-pointer" onClick={rotateToNext}>
        {/* Center circular arrow */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 z-20">
          <svg
            className="w-full h-full animate-spin-slow"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50 10C28.5 10 11 27.5 11 49C11 66.7 23.3 81.9 40 87.3L40 75.9C29.6 71 22 60.9 22 49C22 33.6 34.6 21 50 21C65.4 21 78 33.6 78 49C78 60.9 70.4 71 60 75.9L60 87.3C76.7 81.9 89 66.7 89 49C89 27.5 71.5 10 50 10Z"
              fill="black"
            />
            <path d="M60 87.3L60 62L75 74.5L60 87.3Z" fill="black" />
          </svg>
        </div>

        {steps.map((step, index) => {
          const { x, y, size, zIndex, angle } = getStepPosition(index, steps.length, activeIndex)
          const isActive = (index - activeIndex + steps.length) % steps.length === 0

          return (
            <motion.div
              key={step.id}
              className="absolute cursor-pointer"
              style={{
                zIndex,
                left: "50%",
                top: "50%",
                originX: "50%",
                originY: "50%",
              }}
              initial={false}
              animate={{
                x,
                y,
                scale: size,
                opacity: size === 1 ? 1 : 0.7,
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <div
                className={`relative overflow-hidden rounded-lg shadow-lg transition-all duration-500 ${
                  isActive ? "w-[400px] h-[400px]" : "w-[250px] h-[250px]"
                }`}
              >
                <Image src={step.imageUrl || "/placeholder.svg"} alt={step.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-30" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                  <div className="text-2xl font-light mb-2 en">{step.number}</div>
                  <h3 className="text-3xl font-light mb-3 jp">{step.title}</h3>
                  {isActive && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      className="text-base text-white/90 jp leading-relaxed"
                    >
                      {step.description}
                    </motion.p>
                  )}
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Active step details (for mobile) */}
      <div className="mt-12 md:hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center px-4"
          >
            <div className="text-xl font-light mb-2 text-zinc-400 en">{steps[activeIndex].number}</div>
            <h3 className="text-2xl font-light mb-4 text-zinc-800 jp">{steps[activeIndex].title}</h3>
            <p className="text-zinc-600 jp">{steps[activeIndex].description}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
