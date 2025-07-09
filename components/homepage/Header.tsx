"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Bell, 
  Globe, 
  Menu, 
  X, 
  User, 
  Home, 
  DollarSign, 
  Briefcase, 
  FileText, 
  HelpCircle,
  LogIn
} from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [notifications] = useState(3)

  const navigationItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Finance', href: '/finance', icon: DollarSign },
    { name: 'Business', href: '/business', icon: Briefcase },
    { name: 'Schemes', href: '/schemes', icon: FileText },
    { name: 'Support', href: '/support', icon: HelpCircle },
  ]

  return (
    <header className="bg-white shadow-md border-b border-gray-200">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-4">
              <span>🇮🇳 Government of India</span>
              <span>Women Empowerment Portal</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-1 hover:text-blue-200">
                <Globe className="h-4 w-4" />
                <span>English</span>
              </button>
              <div className="flex items-center space-x-1">
                <Bell className="h-4 w-4" />
                {notifications > 0 && (
                  <Badge className="bg-red-500 text-white text-xs px-1 py-0">
                    {notifications}
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">WE</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Women Empowerment</h1>
                <p className="text-sm text-gray-600">Government Schemes Portal</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <item.icon className="h-4 w-4" />
                <span className="font-medium">{item.name}</span>
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <LogIn className="h-4 w-4 mr-2" />
              Login
            </Button>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
              <User className="h-4 w-4 mr-2" />
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-3 pt-4">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors py-2"
                >
                  <item.icon className="h-4 w-4" />
                  <span className="font-medium">{item.name}</span>
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                <Button variant="outline" size="sm">
                  <LogIn className="h-4 w-4 mr-2" />
                  Login
                </Button>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  <User className="h-4 w-4 mr-2" />
                  Sign Up
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}