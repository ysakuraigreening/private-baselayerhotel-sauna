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

interface EnjoySaunaProps {
  steps: EnjoyStep[]
}

// EnjoySaunaコンポーネントを4つのステップに対応するよう更新
export default function EnjoySauna({ steps }: EnjoySaunaProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={containerRef} className="relative py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="flex flex-col"
            >
              <div className="relative h-64 mb-6 overflow-hidden">
                <Image
                  src={step.imageUrl || "/placeholder.svg"}
                  alt={step.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="text-xl font-light mb-2 text-zinc-400 en">{step.number}</div>
              <h3 className="text-xl font-light mb-4 text-zinc-800 jp">{step.title}</h3>
              <p className="text-zinc-600 jp text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
