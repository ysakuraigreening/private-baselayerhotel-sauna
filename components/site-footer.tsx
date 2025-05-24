"use client"

import Link from "next/link"

export default function SiteFooter() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="wrap">
        <div className="inner container mx-auto px-4">
          <div className="logo mb-8">
            <div className="text-white font-light text-lg tracking-wider">※BLH</div>
          </div>

          <div className="info grid grid-cols-1 md:grid-cols-2 gap-8">
            <ul className="desc space-y-4">
              <li>
                <p className="head text-xs font-light mb-2 tracking-wider uppercase text-gray-300">ADDRESS</p>
                <p className="detail text-xs text-gray-400 font-light tracking-wide">
                  2-6-30 NISHIKI, NAKA-KU, NAGOYA, AICHI 460-0003
                </p>
              </li>
              <li>
                <p className="head text-xs font-light mb-2 tracking-wider uppercase text-gray-300">ACCESS</p>
                <p className="detail text-xs text-gray-400 mb-2 font-light tracking-wide">
                  2 MINUTES WALK FROM EXIT
                  <br />5 OF MARUNOUCHI STATION ON THE SUBWAY
                </p>
                <p className="detail text-xs text-gray-400 font-light tracking-wide">
                  4 MINUTES WALK FROM EXIT
                  <br />1 OF FUSHIMI STATION,
                  <br />5 MINUTES BY TAXI FROM NAGOYA STATION
                </p>
              </li>
            </ul>

            <ul className="link grid grid-cols-2 gap-2">
              <li>
                <Link
                  href="#sauna"
                  className="text-xs text-gray-400 hover:text-white transition-colors font-light tracking-wider uppercase"
                >
                  SAUNA
                </Link>
              </li>
              <li>
                <Link
                  href="#reservation"
                  className="text-xs text-gray-400 hover:text-white transition-colors font-light tracking-wider uppercase"
                >
                  RESERVATION
                </Link>
              </li>
              <li>
                <Link
                  href="#enjoy"
                  className="text-xs text-gray-400 hover:text-white transition-colors font-light tracking-wider uppercase"
                >
                  ENJOY
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="text-xs text-gray-400 hover:text-white transition-colors font-light tracking-wider uppercase"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-xs text-gray-400 hover:text-white transition-colors font-light tracking-wider uppercase"
                >
                  TERMS OF SERVICE
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-xs text-gray-400 hover:text-white transition-colors font-light tracking-wider uppercase"
                >
                  PRIVACY POLICY
                </Link>
              </li>
            </ul>
          </div>

          <div className="copy mt-8 pt-8 border-t border-gray-800">
            <p className="text-xs text-gray-500 font-light tracking-wider uppercase">
              ALL RIGHTS RESERVED ©BASE LAYER HOTEL
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
