"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import FloatingReservation from "@/components/floating-reservation"
import FAQSection from "@/components/faq-section"
import SaunaDetailsEnhanced from "@/components/sauna-details-enhanced"
import ImageSlideshow from "@/components/image-slideshow"
import ModernGallery from "@/components/modern-gallery"
import LinearEnjoySauna from "@/components/linear-enjoy-sauna"
import UsageFlow from "@/components/usage-flow"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  // Scroll animation setup
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in")
        }
      })
    }, observerOptions)

    const scrollElements = document.querySelectorAll(".scroll-animate")
    scrollElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const usageSteps = [
    {
      step: "01",
      title: "来店",
    },
    {
      step: "02",
      title: "ICチップ付下足キーを取り下足箱に靴を入れる",
    },
    {
      step: "03",
      title: "そのキーを使用してゲート入館",
    },
    {
      step: "04",
      title: "同じ番号のロッカーを使用",
    },
    {
      step: "05",
      title: "サウナ堪能",
    },
    {
      step: "06",
      title: "ICチップを利用して精算機で精算",
    },
    {
      step: "07",
      title: "ゲートでスキャンして退館",
    },
    {
      step: "08",
      title: "下足箱で靴を取って退店",
    },
  ]

  const enjoySteps = [
    {
      id: "step-1",
      number: "01",
      title: "Sauna",
      description:
        "HARVIA製のストーブがじんわりと体を温めます。体が温まったら、Athletiaのオイルが入ったロウリュ水で香りもお楽しみください。",
      imageUrl: "/sauna-image.jpg",
    },
    {
      id: "step-2",
      number: "02",
      title: "Cold Bath",
      description:
        "体が十分に温まったら、水風呂コーナーへ。製氷機も設置していますので、氷入りのキンキンな水風呂にアレンジも可能です。",
      imageUrl: "/coldbath-image.jpg",
    },
    {
      id: "step-3",
      number: "03",
      title: "Totonou",
      description:
        "水風呂のあとは整いスペースへ。足を広々と伸ばせるチェアと、冷蔵庫やテレビも完備。名古屋の街中とは思えない解放感をお楽しみください。",
      imageUrl: "/totonoi-image.jpg",
    },
    {
      id: "step-4",
      number: "04",
      title: "Repeat",
      description:
        "サウナ→水風呂→休憩のサイクルを繰り返すことで、より深いリラクゼーションを体験できます。自分のペースで何度でも繰り返しましょう。",
      imageUrl: "/heater-image.jpg",
    },
  ]

  const saunaFeatures = [
    {
      title: "Harbiaサウナストーブ",
      description:
        "フィンランド製の高品質Harbiaサウナヒーターを導入。均一で心地よい熱波（ロウリュ）が、本場さながらの体験を提供します。",
      imageUrl: "/heater-image.jpg",
    },
    {
      title: "整いスペース",
      description: "サウナと水風呂の間に設けられた専用の休憩スペース。ゆったりとした空間で「ととのい」を体感できます。",
      imageUrl: "/totonoi-image.jpg",
    },
    {
      title: "滞在型サウナ",
      description:
        "通常のサウナとは異なり、長時間滞在できる設計。サウナ、水風呂、休憩を自分のペースで繰り返し楽しめます。",
      imageUrl: "/sauna2-image.jpg",
    },
  ]

  const saunaDetails = [
    {
      title: "ご利用方法",
      content: "完全事前予約制",
    },
    {
      title: "場所",
      content: "BASE LAYER HOTEL 2階",
    },
    {
      title: "ご利用人数",
      content: "最大2名様まで",
    },
    {
      title: "利用枠",
      content: (
        <ul className="list-disc pl-5 space-y-1">
          <li>7:00 - 9:30</li>
          <li>15:30 - 18:00</li>
          <li>19:00 - 21:30</li>
          <li>22:30 - 0:30</li>
        </ul>
      ),
    },
    {
      title: "料金表",
      content: (
        <div className="overflow-x-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <table className="min-w-full border-collapse">
                <thead>
                  <tr>
                    <th colSpan={3} className="py-2 px-3 text-left border-b border-gray-300 font-normal">
                      平日
                    </th>
                  </tr>
                  <tr>
                    <th className="py-2 px-3 text-left border-b border-gray-300 font-normal">営業時間</th>
                    <th className="py-2 px-3 text-left border-b border-gray-300 font-normal">人数</th>
                    <th className="py-2 px-3 text-left border-b border-gray-300 font-normal">料金</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td rowSpan={2} className="py-2 px-3 border-b border-gray-200">
                      7:00-10:00
                    </td>
                    <td className="py-2 px-3 border-b border-gray-200">1名</td>
                    <td className="py-2 px-3 border-b border-gray-200">¥6,000</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 border-b border-gray-200">2名</td>
                    <td className="py-2 px-3 border-b border-gray-200">¥7,000</td>
                  </tr>
                  <tr>
                    <td rowSpan={2} className="py-2 px-3 border-b border-gray-200">
                      15:30-18:00
                    </td>
                    <td className="py-2 px-3 border-b border-gray-200">1名</td>
                    <td className="py-2 px-3 border-b border-gray-200">¥8,000</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 border-b border-gray-200">2名</td>
                    <td className="py-2 px-3 border-b border-gray-200">¥9,000</td>
                  </tr>
                  <tr>
                    <td rowSpan={2} className="py-2 px-3 border-b border-gray-200">
                      19:00-21:30
                    </td>
                    <td className="py-2 px-3 border-b border-gray-200">1名</td>
                    <td className="py-2 px-3 border-b border-gray-200">¥9,000</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 border-b border-gray-200">2名</td>
                    <td className="py-2 px-3 border-b border-gray-200">¥10,000</td>
                  </tr>
                  <tr>
                    <td rowSpan={2} className="py-2 px-3 border-b border-gray-200">
                      22:30-01:00
                    </td>
                    <td className="py-2 px-3 border-b border-gray-200">1名</td>
                    <td className="py-2 px-3 border-b border-gray-200">¥8,000</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 border-b border-gray-200">2名</td>
                    <td className="py-2 px-3 border-b border-gray-200">¥9,000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div>
              <table className="min-w-full border-collapse">
                <thead>
                  <tr>
                    <th colSpan={3} className="py-2 px-3 text-left border-b border-gray-300 font-normal">
                      金・土
                    </th>
                  </tr>
                  <tr>
                    <th className="py-2 px-3 text-left border-b border-gray-300 font-normal">営業時間</th>
                    <th className="py-2 px-3 text-left border-b border-gray-300 font-normal">人数</th>
                    <th className="py-2 px-3 text-left border-b border-gray-300 font-normal">料金</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td rowSpan={2} className="py-2 px-3 border-b border-gray-200">
                      7:00-10:00
                    </td>
                    <td className="py-2 px-3 border-b border-gray-200">1名</td>
                    <td className="py-2 px-3 border-b border-gray-200">¥8,000</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 border-b border-gray-200">2名</td>
                    <td className="py-2 px-3 border-b border-gray-200">¥9,000</td>
                  </tr>
                  <tr>
                    <td rowSpan={2} className="py-2 px-3 border-b border-gray-200">
                      15:30-18:00
                    </td>
                    <td className="py-2 px-3 border-b border-gray-200">1名</td>
                    <td className="py-2 px-3 border-b border-gray-200">¥10,000</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 border-b border-gray-200">2名</td>
                    <td className="py-2 px-3 border-b border-gray-200">¥11,000</td>
                  </tr>
                  <tr>
                    <td rowSpan={2} className="py-2 px-3 border-b border-gray-200">
                      19:00-21:30
                    </td>
                    <td className="py-2 px-3 border-b border-gray-200">1名</td>
                    <td className="py-2 px-3 border-b border-gray-200">¥11,000</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 border-b border-gray-200">2名</td>
                    <td className="py-2 px-3 border-b border-gray-200">¥12,000</td>
                  </tr>
                  <tr>
                    <td rowSpan={2} className="py-2 px-3 border-b border-gray-200">
                      22:30-01:00
                    </td>
                    <td className="py-2 px-3 border-b border-gray-200">1名</td>
                    <td className="py-2 px-3 border-b border-gray-200">¥10,000</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 border-b border-gray-200">2名</td>
                    <td className="py-2 px-3 border-b border-gray-200">¥11,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "セット内容",
      content: (
        <ul className="list-disc pl-5 space-y-1">
          <li>タオル（バスタオル・フェイスタオル）</li>
          <li>Athletiaアメニティ一式</li>
          <li>ミネラルウォーター</li>
          <li>サウナハット</li>
        </ul>
      ),
    },
  ]

  const galleryItems = [
    {
      id: "gallery-1",
      number: "01",
      title: "オリジナルサウナウェア",
      description:
        "オリジナルサウナウェアは、ユニセックスの半ズボンタイプのショーツとWomensブラトップ、サウナハットをご用意。軽素材で動きやすく、速乾性にも優れたウェアとなっており、サウナをご予約いただいたお客様はどなたでもご利用いただけます。",
      imageUrl: "/saunaweare-image.png",
      size: "large" as const,
    },
    {
      id: "gallery-2",
      number: "02",
      title: "FRUIT OF THE LOOMS オリジナルタオル",
      description:
        "大人気のベーシックアパレル/アンダーウェアメーカーであるFRUIT OF THE LOOMSとのコラボレーションアイテムをサウナルームでもご利用いただけます。バスタオル・フェイスタオルともにご用意がございます。",
      imageUrl: "/fruit-image.jpg",
      size: "medium" as const,
    },
    {
      id: "gallery-3",
      number: "03",
      title: "Athletia アメニティ",
      description:
        "「balance your active / relaxing cycle」をコンセプトにスキンケア商品を展開するAthletiaのアメニティを、サウナルームではボディケアアイテムだけでなくスキンケアアイテム全般にわたり導入。",
      imageUrl: "/athletia-image.jpg",
      size: "small" as const,
    },
    {
      id: "gallery-4",
      number: "04",
      title: "Cado ドライヤー",
      description:
        "美しいフォルムやデザインだけでなく、その実用性も魅力のCadoアイテム。今回サウナルームにはバトン型のドライヤーを導入。パワフルな風量で、アフターサウナの準備時間もストレスフリーに。",
      imageUrl: "/cado-image.jpg",
      size: "medium" as const,
    },
    {
      id: "gallery-5",
      number: "05",
      title: "TAW&TOE サウナサンダル",
      description:
        "韓国発祥のブランド「TAW&TOE (トーアンドトー) 」のサンダルは、ZEROVITY(ゼロビティ)素材を使用しており、厚いアウトソールとクッションで、足にかかる負担が少ないサウナにもピッタリのサンダル。",
      imageUrl: "/placeholder.svg?height=400&width=400&query=sauna sandals",
      size: "small" as const,
    },
  ]

  const faqItems = [
    {
      question: "予約はどのように行えばよいですか？",
      answer:
        "ご予約はウェブサイトの予約フォーム、またはお電話にて承っております。ご利用の3日前までのご予約をおすすめしております。",
    },
    {
      question: "初めてのサウナですが大丈夫でしょうか？",
      answer:
        "もちろんです。スタッフが丁寧にご案内いたしますので、初めての方でも安心してご利用いただけます。サウナの温度や時間など、お好みに合わせてアドバイスもさせていただきます。",
    },
    {
      question: "持ち物は何が必要ですか？",
      answer:
        "手ぶらでお越しいただけます。タオル、サウナウェア、アメニティ類はすべてご用意しております。お好みのドリンクなどがございましたら、ご持参いただくことも可能です。",
    },
    {
      question: "サウナの温度は調整できますか？",
      answer:
        "はい、お客様のご希望に合わせて温度調整が可能です。ご予約時またはご利用開始時にスタッフにお申し付けください。",
    },
    {
      question: "キャンセルポリシーを教えてください",
      answer:
        "ご予約日の2日前までのキャンセルは無料です。前日のキャンセルは料金の50%、当日のキャンセルは100%のキャンセル料が発生いたします。",
    },
  ]

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-800">
      <SiteHeader />
      <FloatingReservation />

      <main className="flex-1">
        {/* Hero Section */}
        <section ref={heroRef} id="hero" className="relative h-screen w-full overflow-hidden">
          <motion.div style={{ scale, opacity }} className="absolute inset-0 w-full h-full">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url('/placeholder.svg?height=1080&width=1920&query=luxury sauna room dark')`,
              }}
            >
              <div className="absolute inset-0 bg-black/40" />
            </div>
          </motion.div>

          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="text-center text-white max-w-4xl mx-auto container-padding">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <h1 className="hero-title text-5xl md:text-7xl font-light mb-4 en">SAUNA ROOM</h1>
                <h2 className="hero-subtitle text-xl md:text-2xl font-light mb-8 en">(BASE LAYER HOTEL)</h2>
                <p className="text-lg md:text-xl font-light en mb-4">The Totonou Loop:</p>
                <p className="text-sm md:text-base text-white/70 en">Sauna　→　Chill　→　Reset　→　Repeat.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Sauna Section */}
        <section id="sauna" className="scroll-animate bg-white section-padding py-20">
          <div className="max-w-6xl mx-auto container-padding px-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-16 gap-4">
              <div className="flex items-center gap-3">
                <svg width="16" height="16" viewBox="0 0 8 8" className="fill-green-700 flex-shrink-0">
                  <path d="M8,3.6H5.2L5.2,3.4l1.9-1.9L6.5,0.9L4.6,2.8L4.4,2.8V0H3.6v2.8L3.4,2.8L1.5,0.9L0.9,1.5l1.9,1.9L2.8,3.6H0v0.9h2.8l0.1,0.1L0.9,6.5l0.6,0.6l1.9-1.9l0.1,0.1V8h0.9V5.2l0.1-0.1l1.9,1.9l0.6-0.6L5.2,4.6l0.1-0.1H8V3.6z" />
                </svg>
                <p className="text-sm font-light tracking-wider en">SAUNA</p>
              </div>
              <div>
                <p className="text-sm text-gray-400 en">01</p>
              </div>
            </div>

            <div className="text-center mobile-spacing mb-16">
              <h2 className="section-title text-3xl md:text-5xl font-light mb-6 en leading-tight">
                STAY IN COMFORT AND ENGAGE WITH LOCAL
                <br className="hidden sm:block" />
                CULTURE AT YOUR INSPIRATIONAL BASE FOR
                <br className="hidden sm:block" />
                TRAVEL AND SIGHTSEEING.
              </h2>
              <h5 className="text-xl md:text-2xl font-light jp">
                快適な滞在と楽しい街遊びを支える
                <br className="hidden sm:block" />
                基礎的機能ホテル
              </h5>
            </div>

            <div className="max-w-4xl mx-auto mobile-spacing mb-16 text-center container-padding">
              <div className="space-y-4 sm:space-y-6 jp">
                <p className="responsive-text text-lg leading-relaxed">
                  ご宿泊者様限定の完全予約制プライベートサウナルーム。
                  <br className="hidden sm:block" />
                  オート＆セルフロウリュが楽しめるサウナと浴槽スペース
                  <br className="hidden sm:block" />
                  そして、ゆったりとした整いスペースも併設しています。
                </p>
                <p className="responsive-text text-lg leading-relaxed">
                  オリジナルのサウナウェアやAthletiaのアメニティも付いてます。
                </p>
              </div>
            </div>

            <div className="max-w-4xl mx-auto mb-20">
              <ImageSlideshow
                images={[
                  { src: "/sauna-image.jpg", alt: "サウナルーム" },
                  { src: "/heater-image.jpg", alt: "サウナヒーター" },
                  { src: "/totonoi-image.jpg", alt: "整いスペース" },
                ]}
              />
            </div>

            {/* Usage Flow Section */}
            <div className="mb-20">
              <UsageFlow steps={usageSteps} />
            </div>

            <SaunaDetailsEnhanced features={saunaFeatures} details={saunaDetails} />
          </div>
        </section>

        {/* Enjoy Section */}
        <section id="enjoy" className="scroll-animate bg-gray-50 py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between items-center mb-16">
              <div className="flex items-center gap-3">
                <svg width="16" height="16" viewBox="0 0 8 8" className="fill-green-700">
                  <path d="M8,3.6H5.2L5.2,3.4l1.9-1.9L6.5,0.9L4.6,2.8L4.4,2.8V0H3.6v2.8L3.4,2.8L1.5,0.9L0.9,1.5l1.9,1.9L2.8,3.6H0v0.9h2.8l0.1,0.1L0.9,6.5l0.6,0.6l1.9-1.9l0.1,0.1V8h0.9V5.2l0.1-0.1l1.9,1.9l0.6-0.6L5.2,4.6l0.1-0.1H8V3.6z" />
                </svg>
                <p className="text-sm font-light tracking-wider en">ENJOY</p>
              </div>
              <div>
                <p className="text-sm text-gray-400 en">02</p>
              </div>
            </div>

            <LinearEnjoySauna steps={enjoySteps} />
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="scroll-animate bg-white py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between items-center mb-16">
              <div className="flex items-center gap-3">
                <svg width="16" height="16" viewBox="0 0 8 8" className="fill-green-700">
                  <path d="M8,3.6H5.2L5.2,3.4l1.9-1.9L6.5,0.9L4.6,2.8L4.4,2.8V0H3.6v2.8L3.4,2.8L1.5,0.9L0.9,1.5l1.9,1.9L2.8,3.6H0v0.9h2.8l0.1,0.1L0.9,6.5l0.6,0.6l1.9-1.9l0.1,0.1V8h0.9V5.2l0.1-0.1l1.9,1.9l0.6-0.6L5.2,4.6l0.1-0.1H8V3.6z" />
                </svg>
                <p className="text-sm font-light tracking-wider en">AMENITY</p>
              </div>
              <div>
                <p className="text-sm text-gray-400 en">03</p>
              </div>
            </div>

            <ModernGallery items={galleryItems} />
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="scroll-animate bg-gray-50 py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between items-center mb-16">
              <div className="flex items-center gap-3">
                <svg width="16" height="16" viewBox="0 0 8 8" className="fill-green-700">
                  <path d="M8,3.6H5.2L5.2,3.4l1.9-1.9L6.5,0.9L4.6,2.8L4.4,2.8V0H3.6v2.8L3.4,2.8L1.5,0.9L0.9,1.5l1.9,1.9L2.8,3.6H0v0.9h2.8l0.1,0.1L0.9,6.5l0.6,0.6l1.9-1.9l0.1,0.1V8h0.9V5.2l0.1-0.1l1.9,1.9l0.6-0.6L5.2,4.6l0.1-0.1H8V3.6z" />
                </svg>
                <p className="text-sm font-light tracking-wider en">FAQ</p>
              </div>
              <div>
                <p className="text-sm text-gray-400 en">04</p>
              </div>
            </div>

            <FAQSection items={faqItems} />
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
