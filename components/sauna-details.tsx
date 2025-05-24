"use client"

import type React from "react"

import { useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

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
}

export default function SaunaDetails({ features, details }: SaunaDetailsProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  // 料金表とセット内容を除外した詳細情報
  const basicDetails = details.filter((detail) => detail.title !== "料金表" && detail.title !== "セット内容")
  // 料金表
  const priceTable = details.find((detail) => detail.title === "料金表")
  // セット内容
  const setContents = details.find((detail) => detail.title === "セット内容")

  return (
    <div ref={containerRef} className="relative py-20">
      <div className="container mx-auto px-4">
        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col"
            >
              <div className="relative h-60 mb-6 overflow-hidden">
                <Image src={feature.imageUrl || "/placeholder.svg"} alt={feature.title} fill className="object-cover" />
              </div>
              <h3 className="text-xl font-light mb-4 text-zinc-800 jp">{feature.title}</h3>
              <p className="text-zinc-600 jp">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Details */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gray-50 p-8 md:p-12"
        >
          <h3 className="text-2xl font-light mb-8 text-zinc-800 jp">サウナ概要</h3>

          {/* 基本情報（2カラム） */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-12">
            {basicDetails.map((detail, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <h4 className="text-lg font-light mb-2 text-zinc-800 jp">{detail.title}</h4>
                <div className="text-zinc-600 jp">{detail.content}</div>
              </div>
            ))}

            {/* セット内容を基本情報に含める */}
            {setContents && (
              <div className="border-b border-gray-200 pb-4">
                <h4 className="text-lg font-light mb-2 text-zinc-800 jp">{setContents.title}</h4>
                <div className="text-zinc-600 jp">{setContents.content}</div>
              </div>
            )}
          </div>

          {/* 料金表（別セクション） */}
          {priceTable && (
            <div className="mt-8">
              <h4 className="text-lg font-light mb-4 text-zinc-800 jp">{priceTable.title}</h4>
              <div className="text-zinc-600 jp">{priceTable.content}</div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}
