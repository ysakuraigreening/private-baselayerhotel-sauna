"use client"

import Link from "next/link"
import { useState } from "react"

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeLanguage, setActiveLanguage] = useState<"en" | "jp">("jp")

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-black">
        <div className="wrap">
          <div className="inner flex justify-between items-center py-5 px-5">
            <div className="logo">
              <Link href="/" className="text-white font-light text-lg tracking-wider">
                ※BLH
              </Link>
            </div>

            <nav className="nav hidden md:flex">
              <ul className="link flex space-x-8">
                <li>
                  <Link
                    href="#sauna"
                    className="text-white text-xs font-light tracking-wider hover:opacity-80 transition-opacity uppercase"
                  >
                    SAUNA
                  </Link>
                </li>
                <li>
                  <Link
                    href="#reservation"
                    className="text-white text-xs font-light tracking-wider hover:opacity-80 transition-opacity uppercase"
                  >
                    RESERVATION
                  </Link>
                </li>
                <li>
                  <Link
                    href="#enjoy"
                    className="text-white text-xs font-light tracking-wider hover:opacity-80 transition-opacity uppercase"
                  >
                    ENJOY
                  </Link>
                </li>
                <li>
                  <Link
                    href="#faq"
                    className="text-white text-xs font-light tracking-wider hover:opacity-80 transition-opacity uppercase"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="flex items-center space-x-4">
              <ul className="lang hidden md:flex">
                <li className="flex items-center space-x-2">
                  <button
                    onClick={() => setActiveLanguage("en")}
                    className={`text-xs font-light tracking-wider ${activeLanguage === "en" ? "text-white" : "text-gray-400"} hover:text-white transition-colors uppercase`}
                  >
                    EN
                  </button>
                  <span className="text-gray-400 text-xs">|</span>
                  <button
                    onClick={() => setActiveLanguage("jp")}
                    className={`text-xs font-light tracking-wider ${activeLanguage === "jp" ? "text-white" : "text-gray-400"} hover:text-white transition-colors uppercase`}
                  >
                    JP
                  </button>
                </li>
              </ul>

              <div className="menu md:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="humb flex flex-col space-y-1">
                  <span className="block w-6 h-0.5 bg-white"></span>
                  <span className="block w-6 h-0.5 bg-white"></span>
                  <span className="block w-6 h-0.5 bg-white"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <section className="fixed inset-0 z-40 bg-black md:hidden">
          <div className="wrap over-wrap-menu">
            <div className="inner p-5">
              <div className="head flex justify-end mb-8">
                <button onClick={() => setIsMenuOpen(false)} className="menu_close_btn">
                  <span className="block w-6 h-0.5 bg-white transform rotate-45 translate-y-0.5"></span>
                  <span className="block w-6 h-0.5 bg-white transform -rotate-45 -translate-y-0.5"></span>
                </button>
              </div>

              <ul className="link space-y-6">
                <li>
                  <Link
                    href="#sauna"
                    className="text-white text-lg font-light tracking-wider uppercase"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    SAUNA
                  </Link>
                </li>
                <li>
                  <Link
                    href="#reservation"
                    className="text-white text-lg font-light tracking-wider uppercase"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    RESERVATION
                  </Link>
                </li>
                <li>
                  <Link
                    href="#enjoy"
                    className="text-white text-lg font-light tracking-wider uppercase"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    ENJOY
                  </Link>
                </li>
                <li>
                  <Link
                    href="#faq"
                    className="text-white text-lg font-light tracking-wider uppercase"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    FAQ
                  </Link>
                </li>
              </ul>

              <ul className="lang mt-8">
                <li className="flex items-center space-x-4">
                  <button
                    onClick={() => setActiveLanguage("en")}
                    className={`text-sm font-light tracking-wider ${activeLanguage === "en" ? "text-white" : "text-gray-400"} uppercase`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => setActiveLanguage("jp")}
                    className={`text-sm font-light tracking-wider ${activeLanguage === "jp" ? "text-white" : "text-gray-400"} uppercase`}
                  >
                    JP
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </section>
      )}
    </>
  )
}
