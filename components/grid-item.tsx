"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface GridItemProps {
  title?: string
  subtitle?: string
  content?: string
  imageUrl?: string
  className?: string
  titlePosition?: "center" | "left" | "right" | "bottom-left" | "top-left"
  contentVisible?: boolean
}

export default function GridItem({
  title,
  subtitle,
  content,
  imageUrl,
  className = "",
  titlePosition = "center",
  contentVisible = false,
}: GridItemProps) {
  const getTitlePositionClasses = () => {
    switch (titlePosition) {
      case "center":
        return "items-center justify-center text-center"
      case "left":
        return "items-center justify-start text-left pl-8"
      case "right":
        return "items-center justify-end text-right pr-8"
      case "bottom-left":
        return "items-end justify-start text-left p-8"
      case "top-left":
        return "items-start justify-start text-left p-8"
      default:
        return "items-center justify-center text-center"
    }
  }

  return (
    <div className={`w-full h-full min-h-[300px] ${className}`}>
      {imageUrl && (
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title || "Grid item"}
            fill
            className="object-cover opacity-60"
          />
        </div>
      )}
      <div className={`relative flex flex-col h-full z-10 ${getTitlePositionClasses()}`}>
        {title && (
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-2"
          >
            {title}
          </motion.h3>
        )}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-gray-300"
          >
            {subtitle}
          </motion.p>
        )}
        {contentVisible && content && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-gray-400 max-w-lg"
          >
            {content}
          </motion.p>
        )}
      </div>
    </div>
  )
}
