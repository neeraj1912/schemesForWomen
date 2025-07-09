"use client"

import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  ExternalLink
} from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">WE</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Women Empowerment</h3>
                <p className="text-sm text-gray-400">Government Portal</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Official government portal providing comprehensive information about schemes and initiatives for women's empowerment and development.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white flex items-center">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white flex items-center">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white flex items-center">Government Schemes</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white flex items-center">Apply Online</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white flex items-center">Track Application</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white flex items-center">FAQs</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Scheme Categories</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white">Financial Support</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Education & Training</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Healthcare</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Employment</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Entrepreneurship</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Safety & Security</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact Information</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300">Ministry of Women & Child Development, New Delhi</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300">1800-XXX-XXXX (Toll Free)</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300">support@womenempowerment.gov.in</span>
              </div>
            </div>
            <div className="pt-4">
              <h5 className="font-medium mb-2">Important Links</h5>
              <ul className="space-y-1 text-sm">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white flex items-center">
                    India.gov.in
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white flex items-center">
                    Ministry of WCD
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Government of India. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white">Accessibility</a>
              <a href="#" className="text-gray-400 hover:text-white">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}