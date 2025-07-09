"use client"

import { Card, CardContent } from '@/components/ui/card'

export default function GovernmentLogos() {
  const logos = [
    {
      name: "Ministry of Women & Child Development",
      logo: "🏛️",
      description: "Government of India"
    },
    {
      name: "Digital India",
      logo: "💻",
      description: "Transforming India Digitally"
    },
    {
      name: "Make in India",
      logo: "🇮🇳",
      description: "Manufacturing Initiative"
    },
    {
      name: "Startup India",
      logo: "🚀",
      description: "Innovation & Entrepreneurship"
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Official Government Initiatives
          </h2>
          <p className="text-lg text-gray-600">
            Backed by trusted government organizations and ministries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {logos.map((org, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="text-6xl mb-4">{org.logo}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{org.name}</h3>
                <p className="text-sm text-gray-600">{org.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-green-800 font-medium">
              Verified & Authentic Government Portal
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}