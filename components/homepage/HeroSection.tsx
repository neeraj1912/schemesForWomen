"use client"

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { 
  ArrowRight, 
  Users, 
  Award, 
  Target, 
  TrendingUp,
  Search
} from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Empowering Women Through
                <span className="text-blue-600"> Government Schemes</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Access comprehensive information about government schemes designed specifically for women's empowerment, financial independence, and social development.
              </p>
            </div>

            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search for schemes, benefits, or eligibility criteria..."
                className="w-full px-6 py-4 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none text-lg"
              />
              <Button 
                size="lg" 
                className="absolute right-2 top-2 bg-blue-600 hover:bg-blue-700"
              >
                <Search className="h-5 w-5 mr-2" />
                Search
              </Button>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                Explore Schemes
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50"
              >
                Check Eligibility
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="text-center">
                <CardContent className="p-4">
                  <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">50L+</div>
                  <div className="text-sm text-gray-600">Women Benefited</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-4">
                  <Award className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">200+</div>
                  <div className="text-sm text-gray-600">Active Schemes</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-4">
                  <Target className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">95%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-4">
                  <TrendingUp className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">₹5000Cr+</div>
                  <div className="text-sm text-gray-600">Benefits Distributed</div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Content - Illustration */}
          <div className="relative">
            <div className="bg-gradient-to-r from-blue-100 to-green-100 rounded-3xl p-8 h-96 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mx-auto flex items-center justify-center">
                  <Users className="h-16 w-16 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Join Millions of Empowered Women
                </h3>
                <p className="text-gray-600">
                  Access your rights, benefits, and opportunities through government schemes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}