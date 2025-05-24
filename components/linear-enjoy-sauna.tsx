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
    <div className="relative w-full py-20 flex flex-col items-center" ref={containerRef}>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16 w-full max-w-6xl">
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
              {/* Make the image even taller with aspect-[2/3] and remove rounded corners */}
              <div className="relative overflow-hidden mb-6 aspect-[2/3]">
                <Image src={step.imageUrl || "/placeholder.svg"} alt={step.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-30" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                  <div className="text-2xl font-light mb-2 en">{step.number}</div>
                  <h3 className="text-3xl font-light mb-3 jp">{step.title}</h3>
                </div>
              </div>

              <div className="text-center">
                <p className="text-sm text-zinc-600 jp">{step.description}</p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}
