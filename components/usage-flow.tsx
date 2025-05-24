"use client"

import { useState, useEffect, useRef } from "react"

interface UsageStep {
  title: string
  description: string
}

interface UsageFlowProps {
  steps: UsageStep[]
}

export default function UsageFlow({ steps }: UsageFlowProps) {
  const [currentStep, setCurrentStep] = useState(-1)
  const [scrollProgress, setScrollProgress] = useState(0)
  const timelineRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])

  // スクロール連動の処理
  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current || !containerRef.current) return

      const windowHeight = window.innerHeight
      const centerY = windowHeight / 2

      // 各ステップの位置をチェックして、中央に最も近いものを見つける
      let closestStep = -1
      let closestDistance = Number.POSITIVE_INFINITY

      stepRefs.current.forEach((stepElement, index) => {
        if (!stepElement) return

        const rect = stepElement.getBoundingClientRect()
        const stepCenterY = rect.top + rect.height / 2
        const distance = Math.abs(stepCenterY - centerY)

        // ステップが画面内にある場合のみ考慮
        if (rect.top < windowHeight && rect.bottom > 0) {
          if (distance < closestDistance) {
            closestDistance = distance
            closestStep = index
          }
        }
      })

      // 中央に近いステップがある場合のみ更新
      if (closestStep !== -1 && closestDistance < windowHeight * 0.3) {
        setCurrentStep(closestStep)
      } else {
        setCurrentStep(-1)
      }

      // プログレスバーの計算
      const container = containerRef.current
      const containerRect = container.getBoundingClientRect()

      if (containerRect.top <= windowHeight * 0.5 && containerRect.bottom >= 0) {
        const scrollTop = window.pageYOffset
        const containerTop = container.offsetTop
        const containerHeight = container.offsetHeight
        const startPoint = containerTop - windowHeight * 0.5
        const endPoint = containerTop + containerHeight - windowHeight * 0.5
        const progress = Math.max(0, Math.min(1, (scrollTop - startPoint) / (endPoint - startPoint)))
        setScrollProgress(progress)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // 初期実行

    return () => window.removeEventListener("scroll", handleScroll)
  }, [steps.length])

  return (
    <div ref={containerRef} className="min-h-[120vh] bg-white py-20">
      <div className="max-w-4xl mx-auto px-8">
        {/* Header - 説明文を削除 */}
        <div className="text-center mb-20 opacity-0 animate-[fadeInUp_1s_ease-out_0.2s_forwards]">
          <h1 className="text-2xl md:text-3xl font-light text-black mb-4 tracking-[0.1em] uppercase en">
            SAUNA RESERVATION
          </h1>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative max-w-3xl mx-auto">
          {/* Animated vertical line */}
          <div className="absolute left-8 top-0 w-px bg-gray-200 h-full">
            <div
              className="w-px bg-gradient-to-b from-black via-gray-600 to-black transition-all duration-300 ease-out"
              style={{
                height: `${scrollProgress * 100}%`,
                boxShadow: "0 0 10px rgba(0,0,0,0.3)",
              }}
            />
          </div>

          <div className="space-y-20">
            {steps.map((step, index) => {
              const isActive = index === currentStep
              const isPassed = index < currentStep

              return (
                <div
                  key={index}
                  ref={(el) => (stepRefs.current[index] = el)}
                  className="relative flex items-start transition-all duration-700 ease-out"
                >
                  {/* Enhanced milestone dot */}
                  <div className="absolute left-8 transform -translate-x-1/2">
                    <div className="relative">
                      {/* Outer glow ring */}
                      <div
                        className={`absolute inset-0 rounded-full transition-all duration-500 ${
                          isActive
                            ? "w-8 h-8 -m-2.5 bg-black opacity-20 animate-pulse"
                            : "w-6 h-6 -m-1.5 bg-gray-300 opacity-0"
                        }`}
                      />
                      {/* Main dot */}
                      <div
                        className={`w-3 h-3 rounded-full transition-all duration-500 relative z-10 ${
                          isActive
                            ? "bg-black scale-150 shadow-lg shadow-black/30"
                            : isPassed
                              ? "bg-gray-600 scale-110"
                              : "bg-gray-300"
                        }`}
                      >
                        {/* Inner sparkle */}
                        {isActive && <div className="absolute inset-0 rounded-full bg-white opacity-30 animate-ping" />}
                      </div>
                    </div>
                  </div>

                  {/* Enhanced content */}
                  <div className="ml-16 flex-1">
                    {/* Step number above title */}
                    <div
                      className={`text-xs font-light tracking-wider mb-2 transition-all duration-500 en ${
                        isActive ? "text-black opacity-100" : "text-gray-400 opacity-70"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <h3
                      className={`text-base font-light mb-4 tracking-wide transition-all duration-500 jp ${
                        isActive ? "text-black transform translate-x-2" : isPassed ? "text-gray-600" : "text-gray-400"
                      }`}
                    >
                      {step.title}
                    </h3>

                    {/* Enhanced description box */}
                    <div
                      className={`overflow-hidden transition-all duration-700 ease-out ${
                        isActive ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-none p-6 border-l-4 border-black relative overflow-hidden">
                        {/* Animated background pattern */}
                        <div className="absolute inset-0 opacity-5">
                          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black/10 to-transparent animate-pulse" />
                        </div>

                        <p className="text-gray-700 leading-relaxed font-light text-sm tracking-wide relative z-10 animate-[fadeInUp_0.5s_ease-out] jp">
                          {step.description}
                        </p>

                        {/* Decorative elements */}
                        <div
                          className="absolute bottom-2 right-4 w-2 h-2 bg-black/10 rounded-full animate-bounce"
                          style={{ animationDelay: "0.5s" }}
                        />
                        <div
                          className="absolute bottom-4 right-2 w-1 h-1 bg-black/10 rounded-full animate-bounce"
                          style={{ animationDelay: "0.7s" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
