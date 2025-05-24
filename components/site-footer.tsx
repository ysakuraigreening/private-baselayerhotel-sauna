"use client"

import Link from "next/link"

export default function SiteFooter() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="wrap">
        <div className="inner container mx-auto px-4">
          <div className="logo mb-8">
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
          </div>

          <div className="info grid grid-cols-1 md:grid-cols-2 gap-8">
            <ul className="desc space-y-4">
              <li>
                <p className="head text-sm font-light mb-2">ADDRESS</p>
                <p className="detail text-sm text-gray-400">2-6-30 NISHIKI, NAKA-KU, NAGOYA, AICHI 460-0003</p>
              </li>
              <li>
                <p className="head text-sm font-light mb-2">ACCESS</p>
                <p className="detail text-sm text-gray-400 mb-2">
                  2 MINUTES WALK FROM EXIT
                  <br />5 OF MARUNOUCHI STATION ON THE SUBWAY
                </p>
                <p className="detail text-sm text-gray-400">
                  4 MINUTES WALK FROM EXIT
                  <br />1 OF FUSHIMI STATION,
                  <br />5 MINUTES BY TAXI FROM NAGOYA STATION
                </p>
              </li>
            </ul>

            <ul className="link grid grid-cols-2 gap-2">
              <li>
                <Link href="#sauna" className="text-sm text-gray-400 hover:text-white transition-colors">
                  SAUNA
                </Link>
              </li>
              <li>
                <Link href="#enjoy" className="text-sm text-gray-400 hover:text-white transition-colors">
                  ENJOY
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="text-sm text-gray-400 hover:text-white transition-colors">
                  AMENITY
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-sm text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-sm text-gray-400 hover:text-white transition-colors">
                  TERMS OF SERVICE
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-sm text-gray-400 hover:text-white transition-colors">
                  PRIVACY POLICY
                </Link>
              </li>
            </ul>
          </div>

          <div className="copy mt-8 pt-8 border-t border-gray-800">
            <p className="text-xs text-gray-500">ALL RIGHTS RESERVED ©BASE LAYER HOTEL</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
