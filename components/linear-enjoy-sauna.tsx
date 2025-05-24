"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface EnjoyStep {
  id: string
  number: string
  title: string
  description: string
  imageUrl: string
}

interface LinearEnjoySaunaProps {
  steps: EnjoyStep[]
}

export default function LinearEnjoySauna({ steps }: LinearEnjoySaunaProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div className="relative w-full py-8 sm:py-12 lg:py-20 flex flex-col items-center" ref={containerRef}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16 w-full max-w-6xl">
        {steps.map((step, index) => (
          <div key={step.id} className="flex flex-col items-center">
            {/* Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="w-full"
            >
              {/* Make the image responsive with different aspect ratios */}
              <div className="relative overflow-hidden mb-4 sm:mb-6 aspect-[3/4] sm:aspect-[2/3]">
                <Image src={step.imageUrl || "/placeholder.svg"} alt={step.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-30" />
                <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-end text-white">
                  <div className="text-xl sm:text-2xl font-light mb-1 sm:mb-2 en">{step.number}</div>
                  <h3 className="text-2xl sm:text-3xl font-light mb-2 sm:mb-3 jp">{step.title}</h3>
                </div>
              </div>

              <div className="text-center px-2">
                <p className="text-sm sm:text-base text-zinc-600 jp leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}
