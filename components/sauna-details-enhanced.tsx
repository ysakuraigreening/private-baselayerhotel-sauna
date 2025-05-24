"use client"

import type React from "react"
import { useRef, useState } from "react"
import Image from "next/image"
import { motion, useInView, AnimatePresence } from "framer-motion"

interface SaunaDetailsProps {
  features: {
    title: string
    description: string
    imageUrl: string
  }[]
  details: {
    title: string
    content: string | React.ReactNode
  }[]
  initialTab?: string
  tabLabels?: {
    basic: string
    price: string
    set: string
  }
}

export default function SaunaDetailsEnhanced({
  features,
  details,
  initialTab = "basic",
  tabLabels = {
    basic: "基本情報",
    price: "料金表",
    set: "セット内容",
  },
}: SaunaDetailsProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState<string>(initialTab)

  // 料金表とセット内容を除外した詳細情報
  const basicDetails = details.filter((detail) => detail.title !== "料金表" && detail.title !== "セット内容")
  // 料金表
  const priceTable = details.find((detail) => detail.title === "料金表")
  // セット内容
  const setContents = details.find((detail) => detail.title === "セット内容")

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const featureVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const detailsVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  const tabVariants = {
    inactive: { opacity: 0.7, y: 5 },
    active: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  }

  return (
    <div ref={containerRef} className="relative py-20">
      <div className="container mx-auto px-4">
        {/* Features */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={featureVariants}
              className="flex flex-col"
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <div className="relative h-60 mb-6 overflow-hidden">
                <Image
                  src={feature.imageUrl || "/placeholder.svg"}
                  alt={feature.title}
                  fill
                  className={`object-cover transition-transform duration-700 ${
                    hoveredFeature === index ? "scale-110" : "scale-100"
                  }`}
                />
                <motion.div
                  className="absolute inset-0 bg-black"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredFeature === index ? 0.3 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <motion.h3
                className="text-xl font-light mb-4 text-zinc-800 jp"
                animate={{
                  scale: hoveredFeature === index ? 1.05 : 1,
                  x: hoveredFeature === index ? 10 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                {feature.title}
              </motion.h3>
              <motion.p
                className="text-zinc-600 jp"
                animate={{
                  opacity: hoveredFeature === index ? 1 : 0.8,
                }}
                transition={{ duration: 0.3 }}
              >
                {feature.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        {/* Details */}
        <motion.div
          variants={detailsVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="bg-gray-50 p-8 md:p-12 rounded-lg shadow-sm"
        >
          <h3 className="text-2xl font-light mb-8 text-zinc-800 jp">サウナ概要</h3>

          {/* Tabs */}
          <div className="flex mb-8 border-b border-gray-200">
            <motion.button
              variants={tabVariants}
              animate={activeTab === "basic" ? "active" : "inactive"}
              className={`py-2 px-4 mr-4 relative ${activeTab === "basic" ? "border-b-2 border-zinc-800" : ""}`}
              onClick={() => setActiveTab("basic")}
            >
              {tabLabels.basic}
            </motion.button>
            <motion.button
              variants={tabVariants}
              animate={activeTab === "price" ? "active" : "inactive"}
              className={`py-2 px-4 mr-4 ${activeTab === "price" ? "border-b-2 border-zinc-800" : ""}`}
              onClick={() => setActiveTab("price")}
            >
              {tabLabels.price}
            </motion.button>
            <motion.button
              variants={tabVariants}
              animate={activeTab === "set" ? "active" : "inactive"}
              className={`py-2 px-4 mr-4 ${activeTab === "set" ? "border-b-2 border-zinc-800" : ""}`}
              onClick={() => setActiveTab("set")}
            >
              {tabLabels.set}
            </motion.button>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === "basic" && (
              <motion.div
                key="basic"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {/* 基本情報（2カラム） */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-12">
                  {basicDetails.map((detail, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="border-b border-gray-200 pb-4"
                    >
                      <h4 className="text-lg font-light mb-2 text-zinc-800 jp">{detail.title}</h4>
                      <div className="text-zinc-600 jp">{detail.content}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === "price" && (
              <motion.div
                key="price"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {/* 料金表（別セクション） */}
                {priceTable && (
                  <div className="mt-8">
                    <h4 className="text-lg font-light mb-4 text-zinc-800 jp">{priceTable.title}</h4>
                    <div className="text-zinc-600 jp">{priceTable.content}</div>
                  </div>
                )}
              </motion.div>
            )}

            {activeTab === "set" && (
              <motion.div
                key="set"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {/* セット内容 */}
                {setContents && (
                  <div className="mt-8">
                    <h4 className="text-lg font-light mb-4 text-zinc-800 jp">{setContents.title}</h4>
                    <div className="text-zinc-600 jp">{setContents.content}</div>
                    <p className="mt-6 text-zinc-500 jp">
                      ※すべてのアイテムは無料でご利用いただけます。手ぶらでお越しいただいても快適にサウナをお楽しみいただけます。
                    </p>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  )
}
