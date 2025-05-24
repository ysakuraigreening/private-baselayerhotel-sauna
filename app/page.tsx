"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import FloatingReservation from "@/components/floating-reservation"
import FAQSection from "@/components/faq-section"
import SaunaDetailsEnhanced from "@/components/sauna-details-enhanced"
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

    setIsLoaded(true)

    return () => observer.disconnect()
  }, [])

  const reservationSteps = [
    {
      title: "予約ページへ",
      description: "公式サイトのRESERVATIONボタンから予約システムにアクセスします。",
    },
    {
      title: "日時・部屋を選択",
      description: "カレンダーから希望する日付と時間帯を選択し、お好みのサウナルームタイプをお選びください。",
    },
    {
      title: "情報を入力",
      description: "予約に必要な氏名、連絡先などの情報を入力します。",
    },
    {
      title: "内容を確認",
      description: "選択した施設、日時、料金を最終確認します。",
    },
    {
      title: "決済",
      description: "クレジットカードまたは電子マネーで決済を行います。",
    },
    {
      title: "予約完了",
      description: "予約完了メールを受信し、当日の準備を整えます。",
    },
    {
      title: "フロント受付（5分前）",
      description: "予約時間の5分前までにホテルフロントにお越しください。",
    },
    {
      title: "規約確認・アメニティ受取",
      description: "フロントスタッフが利用規約をご説明し、タオルやアメニティをお渡しします。",
    },
    {
      title: "サウナ利用開始",
      description: "心身ともにリラックスして、至福のひとときをお過ごしください。",
    },
  ]

  const enjoySteps = [
    {
      id: "step-1",
      number: "01",
      title: "Sauna",
      description: "HARVIA製のストーブで体を温めます。Athletiaのオイル入りロウリュ水で香りもお楽しみください。",
      imageUrl: "/sauna-image.jpg",
    },
    {
      id: "step-2",
      number: "02",
      title: "Cold Bath",
      description: "体が十分に温まったら水風呂へ。製氷機完備で、氷入りのキンキンな水風呂も可能です。",
      imageUrl: "/coldbath-image.jpg",
    },
    {
      id: "step-3",
      number: "03",
      title: "Totonou",
      description: "水風呂のあとは整いスペースへ。足を伸ばせるチェアと冷蔵庫、テレビも完備。",
      imageUrl: "/totonoi-image.jpg",
    },
    {
      id: "step-4",
      number: "04",
      title: "Repeat",
      description: "サウナ→水風呂→休憩のサイクルを繰り返すことで、より深いリラクゼーションを体験できます。",
      imageUrl: "/heater-image.jpg",
    },
  ]

  const combinedItems = [
    {
      id: "feature-1",
      number: "01",
      title: "Harbiaサウナストーブ",
      description: "フィンランド製の高品質Harbiaサウナヒーターを導入。本場さながらの体験を提供します。",
      imageUrl: "/heater-image.jpg",
      size: "medium" as const,
    },
    {
      id: "feature-2",
      number: "02",
      title: "トトノイスペース",
      description: "サウナと水風呂の間に設けられた専用の休憩スペース。「ととのい」を体感できます。",
      imageUrl: "/totonoi-image.jpg",
      size: "medium" as const,
    },
    {
      id: "feature-3",
      number: "03",
      title: "滞在型サウナ",
      description: "長時間滞在できる設計。サウナ、水風呂、休憩を自分のペースで繰り返し楽しめます。",
      imageUrl: "/sauna2-image.jpg",
      size: "medium" as const,
    },
    {
      id: "floorplan",
      number: "04",
      title: "SAUNAROOM マップ",
      description: "",
      imageUrl: "/sauna-floorplan.jpg",
      size: "large" as const,
      noHover: true,
    },
    {
      id: "amenity-2",
      number: "05",
      title: "FRUIT OF THE LOOMS オリジナルタオル",
      description: "人気のFRUIT OF THE LOOMSとのコラボレーションアイテム。バスタオル・フェイスタオルをご用意。",
      imageUrl: "/fruit-image.jpg",
      size: "medium" as const,
    },
    {
      id: "amenity-3",
      number: "06",
      title: "Athletia アメニティ",
      description: "「balance your active / relaxing cycle」をコンセプトにしたAthletiaのアメニティを完備。",
      imageUrl: "/athletia-image.jpg",
      size: "small" as const,
    },
    {
      id: "amenity-4",
      number: "07",
      title: "Cado ドライヤー",
      description: "美しいフォルムと実用性を兼ね備えたCadoのバトン型ドライヤーを導入。",
      imageUrl: "/cado-image.jpg",
      size: "small" as const,
    },
    {
      id: "amenity-1",
      number: "08",
      title: "オリジナルサウナウェア",
      description: "ユニセックスショーツ、Womensブラトップ、サウナハットをご用意。軽素材で速乾性に優れています。",
      imageUrl: "/saunaweare-image.png",
      size: "medium" as const,
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

  const faqItems = [
    {
      question: "予約はどのように行えばよいですか？",
      answer: "こちらのウェブサイトからRESERVATIONへ進みご予約を受け付けております。",
    },
    {
      question: "持ち物は何が必要ですか？",
      answer: "手ぶらでお越しいただけます。タオル、サウナウェア、アメニティ類はすべてご用意しております。",
    },
    {
      question: "サウナの温度は調整できますか？",
      answer: "申し訳ございません。温度は90℃で固定とさせていただいております。",
    },
    {
      question: "キャンセルポリシーを教えてください",
      answer: "ご予約後のキャンセルは100％掛かりますのでご注意ください。",
    },
  ]

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
                backgroundImage: `url('/hero-sauna-image.jpg')`,
              }}
            >
              <div className="absolute inset-0 bg-black/40" />
            </div>
          </motion.div>

          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="text-center text-white max-w-4xl mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <h1 className="hero-title text-4xl md:text-6xl font-light mb-4 en">SAUNA ROOM</h1>
                <h2 className="hero-subtitle text-base md:text-lg font-light mb-8 en">(BASE LAYER HOTEL)</h2>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Sauna Section */}
        <section id="sauna" className="scroll-animate bg-white py-20">
          <div className="max-w-6xl mx-auto px-4">
            {/* セクションヘッダー */}
            <div className="flex justify-between items-center mb-12">
              <div className="flex items-center gap-3">
                <svg width="16" height="16" viewBox="0 0 8 8" className="fill-black flex-shrink-0">
                  <path d="M8,3.6H5.2L5.2,3.4l1.9-1.9L6.5,0.9L4.6,2.8L4.4,2.8V0H3.6v2.8L3.4,2.8L1.5,0.9L0.9,1.5l1.9,1.9L2.8,3.6H0v0.9h2.8l0.1,0.1L0.9,6.5l0.6,0.6l1.9-1.9l0.1,0.1V8h0.9V5.2l0.1-0.1l1.9,1.9l0.6-0.6L5.2,4.6l0.1-0.1H8V3.6z" />
                </svg>
                <p className="section-header en">SAUNA</p>
              </div>
              <div>
                <p className="section-number en">01</p>
              </div>
            </div>

            {/* コンテンツタイトル */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light mb-2 en">SAUNAROOM</h2>
              <h3 className="text-base md:text-lg font-light mb-6 en">(BASE LAYER HOTEL)</h3>
            </div>

            {/* メインコンテンツ */}
            <div className="max-w-3xl mx-auto mb-16 text-center px-4">
              <div className="space-y-4 jp">
                <p className="content-text">ご宿泊者様限定の完全予約制プライベートサウナルーム。</p>
                <p className="content-text">
                  オート＆セルフロウリュが楽しめるサウナと整いスペースを併設。
                  <br />
                  オリジナルサウナウェアやAthletiaアメニティも完備。
                </p>
              </div>
            </div>

            {/* 統合された画像紹介エリア */}
            <div className="mb-20">
              <ModernGallery items={combinedItems} />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="scroll-animate bg-gray-50 py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between items-center mb-12">
              <div className="flex items-center gap-3">
                <svg width="16" height="16" viewBox="0 0 8 8" className="fill-black">
                  <path d="M8,3.6H5.2L5.2,3.4l1.9-1.9L6.5,0.9L4.6,2.8L4.4,2.8V0H3.6v2.8L3.4,2.8L1.5,0.9L0.9,1.5l1.9,1.9L2.8,3.6H0v0.9h2.8l0.1,0.1L0.9,6.5l0.6,0.6l1.9-1.9l0.1,0.1V8h0.9V5.2l0.1-0.1l1.9,1.9l0.6-0.6L5.2,4.6l0.1-0.1H8V3.6z" />
                </svg>
                <p className="section-header en">ABOUT</p>
              </div>
              <div>
                <p className="section-number en">02</p>
              </div>
            </div>

            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light mb-6 en">ABOUT THE SAUNA ROOM</h2>
            </div>

            <SaunaDetailsEnhanced
              features={[]}
              details={saunaDetails}
              tabLabels={{
                basic: "Info",
                price: "Pricing",
                set: "Package",
              }}
              hideTitle={true}
            />
          </div>
        </section>

        {/* Reservation Section */}
        <section id="reservation" className="scroll-animate bg-white py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between items-center mb-12">
              <div className="flex items-center gap-3">
                <svg width="16" height="16" viewBox="0 0 8 8" className="fill-black">
                  <path d="M8,3.6H5.2L5.2,3.4l1.9-1.9L6.5,0.9L4.6,2.8L4.4,2.8V0H3.6v2.8L3.4,2.8L1.5,0.9L0.9,1.5l1.9,1.9L2.8,3.6H0v0.9h2.8l0.1,0.1L0.9,6.5l0.6,0.6l1.9-1.9l0.1,0.1V8h0.9V5.2l0.1-0.1l1.9,1.9l0.6-0.6L5.2,4.6l0.1-0.1H8V3.6z" />
                </svg>
                <p className="section-header en">RESERVATION</p>
              </div>
              <div>
                <p className="section-number en">03</p>
              </div>
            </div>

            <UsageFlow steps={reservationSteps} />
          </div>
        </section>

        {/* Enjoy Section */}
        <section id="enjoy" className="scroll-animate bg-gray-50 py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between items-center mb-12">
              <div className="flex items-center gap-3">
                <svg width="16" height="16" viewBox="0 0 8 8" className="fill-black">
                  <path d="M8,3.6H5.2L5.2,3.4l1.9-1.9L6.5,0.9L4.6,2.8L4.4,2.8V0H3.6v2.8L3.4,2.8L1.5,0.9L0.9,1.5l1.9,1.9L2.8,3.6H0v0.9h2.8l0.1,0.1L0.9,6.5l0.6,0.6l1.9-1.9l0.1,0.1V8h0.9V5.2l0.1-0.1l1.9,1.9l0.6-0.6L5.2,4.6l0.1-0.1H8V3.6z" />
                </svg>
                <p className="section-header en">ENJOY</p>
              </div>
              <div>
                <p className="section-number en">04</p>
              </div>
            </div>

            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light mb-6 en">TOTONOU CYCLE</h2>
            </div>

            <LinearEnjoySauna steps={enjoySteps} />
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="scroll-animate bg-white py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between items-center mb-12">
              <div className="flex items-center gap-3">
                <svg width="16" height="16" viewBox="0 0 8 8" className="fill-black">
                  <path d="M8,3.6H5.2L5.2,3.4l1.9-1.9L6.5,0.9L4.6,2.8L4.4,2.8V0H3.6v2.8L3.4,2.8L1.5,0.9L0.9,1.5l1.9,1.9L2.8,3.6H0v0.9h2.8l0.1,0.1L0.9,6.5l0.6,0.6l1.9-1.9l0.1,0.1V8h0.9V5.2l0.1-0.1l1.9,1.9l0.6-0.6L5.2,4.6l0.1-0.1H8V3.6z" />
                </svg>
                <p className="section-header en">FAQ</p>
              </div>
              <div>
                <p className="section-number en">05</p>
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
