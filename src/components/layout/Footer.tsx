import Link from "next/link"
import { CONTACT_INFO } from "@/constants/contact"
import { FaInstagram } from "react-icons/fa"
import { IoMailOutline, IoCallOutline } from "react-icons/io5"
import { FiFacebook } from "react-icons/fi"

const SOCIAL_LINKS = {
  instagram: {
    url: "https://www.instagram.com/purepilates.in/",
    icon: FaInstagram,
    label: "Instagram"
  },
  // facebook: {
  //   url: "#",
  //   icon: FiFacebook,
  //   label: "Facebook"
  // },
  email: {
    url: `mailto:${CONTACT_INFO.email}`,
    icon: IoMailOutline,
    label: "Email"
  },
  phone: {
    url: `tel:${CONTACT_INFO.phone}`,
    icon: IoCallOutline,
    label: "Phone"
  }
} as const

export function Footer() {
  return (
    <footer className="bg-forest-700 text-cream-50">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl font-bold font-montserrat leading-relaxed mb-4">pure <br /> pilates.</h3>
          </div>
          <div>
            <h3 className="text-lg font-montserrat mb-4 font-medium">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-white hover:underline hover:text-cream-50 text-sm transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/classes" className="text-white hover:underline hover:text-cream-50 text-sm transition-colors">
                  Classes
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="text-white hover:underline hover:text-cream-50 text-sm transition-colors">
                  Schedule
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white hover:underline hover:text-cream-50 text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-montserrat mb-4 font-medium">Address</h3>
            <ul className="space-y-3 text-sm text-white">
              <li className="md:max-w-[200px] leading-relaxed">{CONTACT_INFO.address}</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-montserrat mb-4 font-medium">Connect with us</h3>
            <div className="flex flex-col space-y-4">
              {Object.entries(SOCIAL_LINKS).map(([key, { url, icon: Icon, label }]) => (
                <a
                  key={key}
                  href={url}
                  target={key === "email" || key === "phone" ? undefined : "_blank"}
                  rel={key === "email" || key === "phone" ? undefined : "noopener noreferrer"}
                  className="flex items-center gap-2 space-x-2 text-white hover:text-cream-50 text-sm transition-colors"
                >
                  <Icon className="text-lg" />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-sand-400/20 text-center text-sm text-white">
          <p>&copy; {new Date().getFullYear()} pure pilates. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 