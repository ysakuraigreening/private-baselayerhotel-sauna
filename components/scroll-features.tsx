"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

interface Feature {
  id: string
  number: string
  title: string
  description: string
  imageUrl: string
}

interface ScrollFeaturesProps {
  features: Feature[]
}

export default function ScrollFeatures({ features }: ScrollFeaturesProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  return (
    <div ref={containerRef} className="relative">
      {/* Progress bar */}
      <div className="sticky top-0 w-full h-1 bg-gray-100 z-10">
        <motion.div
          className="h-full bg-zinc-800"
          style={{ width: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
        />
      </div>

      {/* Feature sections */}
      {features.map((feature, index) => (
        <FeatureSection key={feature.id} feature={feature} index={index} totalFeatures={features.length} />
      ))}
    </div>
  )
}

interface FeatureSectionProps {
  feature: Feature
  index: number
  totalFeatures: number
}

function FeatureSection({ feature, index, totalFeatures }: FeatureSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const xText = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], ["-50px", "0px", "0px", "-50px"])

  const xImage = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], ["50px", "0px", "0px", "50px"])

  return (
    <div ref={sectionRef} className="min-h-[100vh] flex items-center py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <motion.div style={{ opacity, x: xText }} className="order-2 md:order-1">
            <div className="text-2xl font-light mb-4 text-zinc-400 en">{feature.number}</div>
            <h3 className="text-2xl md:text-3xl font-light mb-6 text-zinc-800 jp">{feature.title}</h3>
            <p className="text-zinc-600 leading-relaxed mb-6 jp">{feature.description}</p>

            {/* Indicator dots */}
            <div className="flex space-x-3 mt-8">
              {Array.from({ length: totalFeatures }).map((_, i) => (
                <div key={i} className={`w-2 h-2 rounded-full ${i === index ? "bg-zinc-800" : "bg-zinc-200"}`} />
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            style={{ opacity, x: xImage }}
            className="relative h-80 md:h-96 order-1 md:order-2 rounded-lg overflow-hidden shadow-lg"
          >
            <Image src={feature.imageUrl || "/placeholder.svg"} alt={feature.title} fill className="object-cover" />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
