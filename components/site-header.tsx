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
              <Link href="/">
                <svg width="51" height="14" viewBox="0 0 51 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="white"
                    d="M26.418 9.59894C26.418 11.6852 25.0502 13.087 22.1777 13.087H16.4841V0.913086H21.99C24.7941 0.913086 25.9228 2.40025 25.9228 4.05914C25.9228 5.25626 25.3073 6.16234 24.2984 6.67553C25.7346 7.2057 26.4185 8.38534 26.4185 9.59894H26.418ZM18.792 2.8111V5.9916H21.8182C23.0154 5.9916 23.6309 5.3591 23.6309 4.35018C23.6309 3.44411 23.0154 2.8116 21.8182 2.8116H18.792V2.8111ZM24.0582 9.4966C24.0582 8.3509 23.3059 7.80376 22.0579 7.80376H18.792V11.1725H22.0579C23.3573 11.1725 24.0582 10.5569 24.0582 9.4966Z"
                  />
                  <path
                    fill="white"
                    d="M50.534 0.913086V13.087H48.2257V7.88912H42.5661V13.087H40.2577V0.913086H42.5661V5.8034H48.2257V0.913086H50.534Z"
                  />
                  <path fill="white" d="M37.7746 11.0182V13.087H28.7992V0.913086H31.1076V11.0182H37.7746Z" />
                  <path
                    fill="white"
                    d="M14 6.22222H9.18057L9.09171 6.00806L12.4999 2.60041L11.4001 1.50064L7.99194 4.90879L7.77778 4.81993V0H6.22222V4.81943L6.00806 4.90829L2.60041 1.50014L1.50064 2.59991L4.90829 6.00806L4.81943 6.22222H0V7.77778H4.81943L4.90829 7.99194L1.50014 11.4001L2.59991 12.4999L6.00806 9.09171L6.22222 9.18057V14H7.77778V9.18057L7.99194 9.09171L11.4001 12.4999L12.4999 11.4001L9.09171 7.99194L9.18057 7.77778H14V6.22222Z"
                  />
                </svg>
              </Link>
            </div>

            <nav className="nav hidden md:flex">
              <ul className="link flex space-x-8">
                <li>
                  <Link href="#sauna" className="text-white text-sm hover:opacity-80 transition-opacity">
                    SAUNA
                  </Link>
                </li>
                <li>
                  <Link href="#enjoy" className="text-white text-sm hover:opacity-80 transition-opacity">
                    ENJOY
                  </Link>
                </li>
                <li>
                  <Link href="#gallery" className="text-white text-sm hover:opacity-80 transition-opacity">
                    AMENITY
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className="text-white text-sm hover:opacity-80 transition-opacity">
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
                    className={`text-xs ${activeLanguage === "en" ? "text-white" : "text-gray-400"} hover:text-white transition-colors`}
                  >
                    EN
                  </button>
                  <span className="text-gray-400">|</span>
                  <button
                    onClick={() => setActiveLanguage("jp")}
                    className={`text-xs ${activeLanguage === "jp" ? "text-white" : "text-gray-400"} hover:text-white transition-colors`}
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
                  <Link href="#sauna" className="text-white text-lg" onClick={() => setIsMenuOpen(false)}>
                    SAUNA
                  </Link>
                </li>
                <li>
                  <Link href="#enjoy" className="text-white text-lg" onClick={() => setIsMenuOpen(false)}>
                    ENJOY
                  </Link>
                </li>
                <li>
                  <Link href="#gallery" className="text-white text-lg" onClick={() => setIsMenuOpen(false)}>
                    AMENITY
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className="text-white text-lg" onClick={() => setIsMenuOpen(false)}>
                    FAQ
                  </Link>
                </li>
              </ul>

              <ul className="lang mt-8">
                <li className="flex items-center space-x-4">
                  <button
                    onClick={() => setActiveLanguage("en")}
                    className={`text-sm ${activeLanguage === "en" ? "text-white" : "text-gray-400"}`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => setActiveLanguage("jp")}
                    className={`text-sm ${activeLanguage === "jp" ? "text-white" : "text-gray-400"}`}
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
