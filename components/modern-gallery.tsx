"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"

interface GalleryItem {
  id: string
  number: string
  title: string
  description: string
  imageUrl: string
  size?: "small" | "medium" | "large"
  noHover?: boolean
}

interface ModernGalleryProps {
  items: GalleryItem[]
}

export default function ModernGallery({ items }: ModernGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })

  // Assign default sizes if not provided
  const itemsWithSizes = items.map((item, index) => ({
    ...item,
    size: item.size || (index % 5 === 0 ? "large" : index % 3 === 0 ? "medium" : "small"),
  }))

  return (
    <div ref={containerRef} className="relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1" // 間隔を狭くしました
      >
        {itemsWithSizes.map((item, index) => {
          // Determine grid span based on size
          const sizeClasses = {
            small: "md:col-span-1 row-span-1",
            medium: "md:col-span-1 row-span-2",
            large: "md:col-span-2 row-span-2",
          }[item.size || "small"]

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative ${item.noHover ? "" : "group"} overflow-hidden ${sizeClasses}`}
            >
              <div className="relative w-full h-full aspect-square">
                <Image
                  src={item.imageUrl || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className={`object-cover transition-transform duration-700 ${item.noHover ? "" : "group-hover:scale-105"}`}
                />
                <div
                  className={`absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 ${item.noHover ? "" : "group-hover:bg-opacity-40"}`}
                />

                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <div
                    className={`transform transition-transform duration-300 ${item.noHover ? "" : "group-hover:translate-y-0 translate-y-4"}`}
                  >
                    <div className="text-sm font-light mb-2 opacity-80">{item.number}</div>
                    <h3 className="text-xl font-light mb-2 jp">{item.title}</h3>
                    <p
                      className={`text-sm font-light max-w-xs jp ${item.noHover ? "opacity-100" : "opacity-0 group-hover:opacity-100 transition-opacity duration-300"}`}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}
