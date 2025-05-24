"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface FeatureCardProps {
  features: {
    id: string
    number: string
    title: string
    description: string
  }[]
  interval?: number
}

export default function FeatureCard({ features, interval = 5000 }: FeatureCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (!isPaused) {
      const timer = setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % features.length)
      }, interval)
      return () => clearTimeout(timer)
    }
  }, [currentIndex, features.length, interval, isPaused])

  return (
    <div
      className="relative h-80 bg-white p-8 shadow-md rounded-lg overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gray-100">
        <motion.div
          className="h-full bg-zinc-400"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: interval / 1000, ease: "linear" }}
          key={currentIndex}
        />
      </div>

      <div className="flex justify-between mb-8">
        <div className="text-2xl font-light mb-4 text-zinc-400 en">{features[currentIndex].number}</div>
        <div className="flex space-x-2">
          {features.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentIndex ? "bg-zinc-800" : "bg-zinc-200"
              } transition-colors`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Feature ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="h-full"
        >
          <h3 className="text-xl font-light mb-4 text-zinc-800 jp">{features[currentIndex].title}</h3>
          <p className="text-zinc-600 jp">{features[currentIndex].description}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
