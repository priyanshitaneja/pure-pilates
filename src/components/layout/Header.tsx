"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link";

import { Logo } from "./Logo"
import { BOOKING_LINK } from "@/utils/constants";

interface HeaderProps {
  onMenuClick: () => void
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full bg-terracotta">
      <div className="container mx-auto px-6">
        <div className="flex h-20 items-center">
          {/* Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="text-cream-50 hover:bg-terracotta/50"
            aria-label="Open menu"
            onClick={onMenuClick}
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
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </Button>
          <div className="hidden lg:block w-[107px]">

          {/* Logo */}
          <Logo />

          {/* Placeholder for balance */}
          <div className="w-9 lg:hidden" />
          <div className="hidden lg:block">
            <Button asChild size="lg" variant="outline" >
              <Link href={BOOKING_LINK} target="_blank" rel="noopener noreferrer" className="text-white !bg-forest-700">Book a Class</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
} 