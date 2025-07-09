"use client"

import Header from '@/components/homepage/Header'
import HeroSection from '@/components/homepage/HeroSection'
import GovernmentLogos from '@/components/homepage/GovernmentLogos'
import LatestNews from '@/components/homepage/LatestNews'
import ChatBot from '@/components/homepage/ChatBot'
import Footer from '@/components/homepage/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <GovernmentLogos />
      <LatestNews />
      <ChatBot />
      <Footer />
    </div>
  )
}