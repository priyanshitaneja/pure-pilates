"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface SideDrawerProps {
  isOpen: boolean
  onClose: () => void
}

export function SideDrawer({ isOpen, onClose }: SideDrawerProps) {
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-cream-50 transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6">
          <div className="flex justify-end">
            <Button
              variant="ghost"
              size="icon"
              className="text-black hover:bg-black/5"
              onClick={onClose}
              aria-label="Close menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </Button>
          </div>

          <nav className="mt-8">
            <ul className="space-y-6">
              <li>
                <Link
                  href="/about"
                  className="text-black hover:text-terracotta-500 text-lg font-montserrat tracking-wide block"
                  onClick={onClose}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/classes"
                  className="text-black hover:text-terracotta-500 text-lg font-montserrat tracking-wide block"
                  onClick={onClose}
                >
                  Classes
                </Link>
              </li>
              <li>
                <Link
                  href="/schedule"
                  className="text-black hover:text-terracotta-500 text-lg font-montserrat tracking-wide block"
                  onClick={onClose}
                >
                  Schedule
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-black hover:text-terracotta-500 text-lg font-montserrat tracking-wide block"
                  onClick={onClose}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
} 