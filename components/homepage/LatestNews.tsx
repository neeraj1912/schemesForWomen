"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, ArrowRight, TrendingUp } from 'lucide-react'

export default function LatestNews() {
  const news = [
    {
      id: 1,
      title: "New Women Entrepreneurship Scheme Launched with ₹1000 Crore Fund",
      excerpt: "Government announces comprehensive support for women entrepreneurs with easy loan access and mentorship programs.",
      date: "2024-01-15",
      category: "Business",
      readTime: "3 min read",
      trending: true
    },
    {
      id: 2,
      title: "Digital Literacy Program for Rural Women Expanded to 500 Districts",
      excerpt: "Initiative to provide digital skills training to 5 million rural women across India by 2025.",
      date: "2024-01-12",
      category: "Technology",
      readTime: "4 min read",
      trending: false
    },
    {
      id: 3,
      title: "Maternity Benefits Enhanced Under New Policy Framework",
      excerpt: "Extended maternity leave and financial support announced for working mothers in organized and unorganized sectors.",
      date: "2024-01-10",
      category: "Policy",
      readTime: "5 min read",
      trending: true
    },
    {
      id: 4,
      title: "Women's Self-Help Groups Receive ₹500 Crore Credit Support",
      excerpt: "Government initiative to strengthen women's collectives and promote financial inclusion in rural areas.",
      date: "2024-01-08",
      category: "Finance",
      readTime: "3 min read",
      trending: false
    },
    {
      id: 5,
      title: "New Safety App for Women Launched with Emergency Features",
      excerpt: "Advanced safety application with GPS tracking, emergency contacts, and direct police connectivity.",
      date: "2024-01-05",
      category: "Safety",
      readTime: "2 min read",
      trending: false
    },
    {
      id: 6,
      title: "Skill Development Centers for Women Opened in 100 Cities",
      excerpt: "New training centers focus on emerging technologies and traditional crafts to enhance employability.",
      date: "2024-01-03",
      category: "Education",
      readTime: "4 min read",
      trending: false
    }
  ]

  const categories = ["All", "Business", "Technology", "Policy", "Finance", "Safety", "Education"]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Latest News & Updates
          </h2>
          <p className="text-lg text-gray-600">
            Stay informed about the latest government initiatives and policy updates
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              size="sm"
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((article) => (
            <Card key={article.id} className="hover:shadow-lg transition-shadow duration-300 cursor-pointer">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="text-xs">
                    {article.category}
                  </Badge>
                  {article.trending && (
                    <div className="flex items-center text-orange-600">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      <span className="text-xs font-medium">Trending</span>
                    </div>
                  )}
                </div>
                <CardTitle className="text-lg leading-tight hover:text-blue-600 transition-colors">
                  {article.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{new Date(article.date).toLocaleDateString('en-GB')}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="group p-0 h-auto">
                  <span className="mr-2">Read More</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
            Load More Articles
          </Button>
        </div>
      </div>
    </section>
  )
}