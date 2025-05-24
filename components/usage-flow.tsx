"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

interface UsageStep {
  step: string
  title: string
  description?: string
}

interface UsageFlowProps {
  steps: UsageStep[]
}

export default function UsageFlow({ steps }: UsageFlowProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const stepVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div ref={containerRef} className="relative py-12">
      <div className="text-center mb-12">
        <h3 className="text-2xl md:text-3xl font-light mb-4 jp">ご利用の流れ</h3>
        <p className="text-lg font-light en text-gray-600">How to Use</p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-4xl mx-auto"
      >
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-8 top-12 bottom-12 w-0.5 bg-gray-200 hidden md:block" />

          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div key={index} variants={stepVariants} className="relative flex items-start gap-6">
                {/* Step number */}
                <div className="flex-shrink-0 w-16 h-16 bg-gray-600 text-white rounded-full flex items-center justify-center relative z-10">
                  <div className="text-center">
                    <div className="text-xs font-light en">STEP</div>
                    <div className="text-lg font-light en">{step.step}</div>
                  </div>
                </div>

                {/* Step content */}
                <div className="flex-1 pt-2">
                  <h4 className="text-lg md:text-xl font-light mb-2 jp">{step.title}</h4>
                  {step.description && <p className="text-gray-600 jp text-sm">{step.description}</p>}
                </div>

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-16 md:hidden">
                    <svg width="16" height="24" viewBox="0 0 16 24" className="text-gray-300">
                      <path
                        d="M8 0L8 20M8 20L2 14M8 20L14 14"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Note */}
        <motion.div variants={stepVariants} className="mt-8 p-4 bg-gray-50 rounded-lg border-l-4 border-green-700">
          <p className="text-sm jp text-gray-700">※ 1つのキーで入館から退館（精算含む）まで一括管理</p>
        </motion.div>
      </motion.div>
    </div>
  )
}
