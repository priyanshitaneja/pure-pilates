"use client"

import { useState } from "react"
import { SideDrawer } from "./SideDrawer"
import { Header } from "./Header"
import { Footer } from "./Footer"

export function Layout({ children }: { children: React.ReactNode }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col bg-cream-50">
      <Header onMenuClick={() => setIsDrawerOpen(true)} />

      <SideDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />

      <main className="flex-1">
        {children}
      </main>

      <Footer />
    </div>
  )
} 