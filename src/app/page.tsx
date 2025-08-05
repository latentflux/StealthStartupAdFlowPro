import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, Target, Users, BarChart3, Shield, Zap, Eye, CheckCircle2, TrendingUp, Activity } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 dark:from-gray-900 dark:via-blue-900 dark:to-gray-800 overflow-hidden">
      {/* Static Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400/10 rounded-full blur-xl"></div>
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-purple-400/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-3/4 w-24 h-24 bg-indigo-400/10 rounded-full blur-xl"></div>
      </div>

      {/* Hero Section */}
      <div className="relative container mx-auto px-4 pt-16 pb-24">
        <div className="text-center max-w-4xl mx-auto">
          {/* Animated Logo */}
          <div className="mx-auto mb-8 h-20 w-20 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center relative group transform transition-all duration-500 hover:scale-110 hover:shadow-2xl">
            <span className="text-white font-bold text-3xl transition-all duration-300 group-hover:scale-110">A</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-75 animate-ping"></div>
          </div>
          
          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            AdFlow Pro
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Automated pre-launch auditing and real-time monitoring for Google and Meta campaigns
          </p>
          
          {/* Animated CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8 transform transition-all duration-300 hover:scale-105 hover:shadow-lg relative overflow-hidden group" asChild>
              <Link href="#features">
                <span className="relative z-10">Explore Features</span>
                <ArrowRight className="ml-2 h-5 w-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-white/10 backdrop-blur-sm" asChild>
              <Link href="#demo">
                Watch Demo
              </Link>
            </Button>
          </div>
          
          {/* Animated Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
            <div className="text-center group cursor-pointer transform transition-all duration-300 hover:scale-110">
              <div className="text-3xl font-bold text-blue-600 mb-1 transition-all duration-500 group-hover:text-blue-700">
                <span className="inline-block transition-transform duration-300 group-hover:scale-125">23</span>
              </div>
              <div className="text-sm text-muted-foreground group-hover:text-blue-600 transition-colors duration-300">Audit Rules</div>
              <div className="mt-2 h-1 w-0 group-hover:w-full bg-blue-600 mx-auto transition-all duration-500"></div>
            </div>
            <div className="text-center group cursor-pointer transform transition-all duration-300 hover:scale-110 delay-100">
              <div className="text-3xl font-bold text-green-600 mb-1 transition-all duration-500 group-hover:text-green-700">
                <span className="inline-block transition-transform duration-300 group-hover:scale-125">2</span>
              </div>
              <div className="text-sm text-muted-foreground group-hover:text-green-600 transition-colors duration-300">Platforms</div>
              <div className="mt-2 h-1 w-0 group-hover:w-full bg-green-600 mx-auto transition-all duration-500"></div>
            </div>
            <div className="text-center group cursor-pointer transform transition-all duration-300 hover:scale-110 delay-200">
              <div className="text-3xl font-bold text-purple-600 mb-1 transition-all duration-500 group-hover:text-purple-700">
                <span className="inline-block transition-transform duration-300 group-hover:scale-125">∞</span>
              </div>
              <div className="text-sm text-muted-foreground group-hover:text-purple-600 transition-colors duration-300">Campaigns</div>
              <div className="mt-2 h-1 w-0 group-hover:w-full bg-purple-600 mx-auto transition-all duration-500"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="relative container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Why Choose AdFlow Pro?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive campaign auditing with real-time insights and automated optimization recommendations
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Audit Rules Card */}
          <Card className="border-0 shadow-lg group hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-white/90 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardHeader className="relative z-10">
              <div className="relative">
                <Target className="h-12 w-12 text-blue-600 mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
                <div className="absolute inset-0 h-12 w-12 bg-blue-400/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              </div>
              <CardTitle className="group-hover:text-blue-700 transition-colors duration-300">23 Audit Rules</CardTitle>
              <CardDescription className="group-hover:text-blue-600 transition-colors duration-300">
                Comprehensive analysis covering budget validation, targeting conflicts, and creative compliance
              </CardDescription>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-blue-600 group-hover:w-full transition-all duration-500"></div>
            </CardHeader>
          </Card>
          
          {/* Multi-Platform Card */}
          <Card className="border-0 shadow-lg group hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-white/90 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-green-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardHeader className="relative z-10">
              <div className="relative">
                <Users className="h-12 w-12 text-green-600 mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
                <div className="absolute inset-0 h-12 w-12 bg-green-400/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              </div>
              <CardTitle className="group-hover:text-green-700 transition-colors duration-300">Multi-Platform Support</CardTitle>
              <CardDescription className="group-hover:text-green-600 transition-colors duration-300">
                Google Ads and Meta Ads integration with unified campaign management
              </CardDescription>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-green-600 group-hover:w-full transition-all duration-500"></div>
            </CardHeader>
          </Card>
          
          {/* Real-time Monitoring Card */}
          <Card className="border-0 shadow-lg group hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-white/90 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardHeader className="relative z-10">
              <div className="relative">
                <Activity className="h-12 w-12 text-purple-600 mb-4 transition-all duration-300 group-hover:scale-110 animate-pulse" />
                <div className="absolute inset-0 h-12 w-12 bg-purple-400/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              </div>
              <CardTitle className="group-hover:text-purple-700 transition-colors duration-300">Real-time Monitoring</CardTitle>
              <CardDescription className="group-hover:text-purple-600 transition-colors duration-300">
                Continuous campaign monitoring with instant issue detection and alerts
              </CardDescription>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-purple-600 group-hover:w-full transition-all duration-500"></div>
            </CardHeader>
          </Card>
          
          {/* Security Card */}
          <Card className="border-0 shadow-lg group hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-white/90 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-red-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardHeader className="relative z-10">
              <div className="relative">
                <Shield className="h-12 w-12 text-red-600 mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
                <div className="absolute inset-0 h-12 w-12 bg-red-400/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              </div>
              <CardTitle className="group-hover:text-red-700 transition-colors duration-300">Secure & Private</CardTitle>
              <CardDescription className="group-hover:text-red-600 transition-colors duration-300">
                Read-only access to your campaigns. We never modify your ads or settings
              </CardDescription>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-red-600 group-hover:w-full transition-all duration-500"></div>
            </CardHeader>
          </Card>
          
          {/* AI Recommendations Card */}
          <Card className="border-0 shadow-lg group hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-white/90 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-yellow-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardHeader className="relative z-10">
              <div className="relative">
                <Zap className="h-12 w-12 text-yellow-600 mb-4 transition-all duration-300 group-hover:scale-110 animate-bounce" />
                <div className="absolute inset-0 h-12 w-12 bg-yellow-400/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              </div>
              <CardTitle className="group-hover:text-yellow-700 transition-colors duration-300">Instant Recommendations</CardTitle>
              <CardDescription className="group-hover:text-yellow-600 transition-colors duration-300">
                AI-powered recommendations for immediate campaign optimization
              </CardDescription>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-yellow-600 group-hover:w-full transition-all duration-500"></div>
            </CardHeader>
          </Card>
          
          {/* Pre-launch Audits Card */}
          <Card className="border-0 shadow-lg group hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-white/90 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-indigo-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardHeader className="relative z-10">
              <div className="relative">
                <Eye className="h-12 w-12 text-indigo-600 mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
                <div className="absolute inset-0 h-12 w-12 bg-indigo-400/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              </div>
              <CardTitle className="group-hover:text-indigo-700 transition-colors duration-300">Pre-launch Audits</CardTitle>
              <CardDescription className="group-hover:text-indigo-600 transition-colors duration-300">
                Catch issues before campaigns go live and avoid costly mistakes
              </CardDescription>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-indigo-600 group-hover:w-full transition-all duration-500"></div>
            </CardHeader>
          </Card>
        </div>
      </div>

      {/* Live Campaign Performance Demo */}
      <div id="demo" className="relative container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Live Campaign Insights
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-time campaign performance monitoring and optimization suggestions
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Campaign Health */}
          <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm relative overflow-hidden group">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 relative">
                <div className="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center relative">
                  <CheckCircle2 className="h-10 w-10 text-green-600 animate-pulse" />
                  <div className="absolute inset-0 rounded-full border-4 border-green-400 animate-ping opacity-30"></div>
                </div>
              </div>
              <CardTitle className="text-green-700">Campaign Health</CardTitle>
              <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
              <CardDescription>All systems operational</CardDescription>
            </CardHeader>
          </Card>
          
          {/* Performance Trending */}
          <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm relative overflow-hidden group">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 relative">
                <div className="h-20 w-20 rounded-full bg-blue-100 flex items-center justify-center relative">
                  <TrendingUp className="h-10 w-10 text-blue-600 animate-bounce" />
                  <div className="absolute inset-0 rounded-full border-4 border-blue-400 animate-ping opacity-30"></div>
                </div>
              </div>
              <CardTitle className="text-blue-700">Performance</CardTitle>
              <div className="text-3xl font-bold text-blue-600 mb-2">
                <span className="inline-block transition-transform duration-300 hover:scale-110">↗ 23%</span>
              </div>
              <CardDescription>CTR improvement this month</CardDescription>
            </CardHeader>
          </Card>
          
          {/* Active Monitoring */}
          <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm relative overflow-hidden group">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 relative">
                <div className="h-20 w-20 rounded-full bg-purple-100 flex items-center justify-center relative">
                  <Activity className="h-10 w-10 text-purple-600 animate-pulse" />
                  <div className="absolute inset-0 rounded-full border-4 border-purple-400 animate-ping opacity-30"></div>
                </div>
              </div>
              <CardTitle className="text-purple-700">Live Monitoring</CardTitle>
              <div className="text-3xl font-bold text-purple-600 mb-2">
                <span className="inline-block animate-pulse text-green-500">●</span> Live
              </div>
              <CardDescription>24/7 campaign surveillance</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <Card className="max-w-4xl mx-auto text-center shadow-xl border-0 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <CardContent className="p-16 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Ready to Optimize Your Campaigns?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto opacity-90">
              Join thousands of marketers who trust AdFlow Pro to audit and optimize their campaigns automatically.
            </p>
            <Button size="lg" className="text-lg px-12 bg-white text-blue-600 hover:bg-blue-50 transform transition-all duration-300 hover:scale-105 hover:shadow-xl relative overflow-hidden group" asChild>
              <Link href="#features">
                <span className="relative z-10">Explore Platform</span>
                <ArrowRight className="ml-2 h-5 w-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Link>
            </Button>
            <p className="text-sm text-blue-200 mt-4 opacity-80">
              Experience the future of campaign optimization
            </p>
          </CardContent>
          {/* Floating animation elements */}
          <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full animate-ping"></div>
          <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/30 rounded-full animate-bounce delay-300"></div>
        </Card>
      </div>

      {/* Footer */}
      <footer className="relative border-t bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        <div className="relative container mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-muted-foreground opacity-80 transition-opacity duration-300 hover:opacity-100">
              © 2024 AdFlow Pro. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
} 