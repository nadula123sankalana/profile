'use client'

import Image from 'next/image'
import { 
  BarChart3, 
  Code2, 
  Lightbulb, 
  Globe, 
  Users, 
  UserCheck, 
  Palette, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft,
  Star,
  Phone,
  Mail,
  Shield,
  TrendingUp,
  Rocket,
  Clock,
  Headphones,
  FileText,
  Settings,
  ThumbsUp,
  Search,
  Info
} from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Slider functionality
  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev: number) => (prev + 1) % 4)
  }

  const previousSlide = () => {
    setCurrentSlide((prev: number) => prev === 0 ? 3 : prev - 1)
  }

  // Auto-advance slider every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white">
      {/* Enhanced Professional Navbar with Design Consistency */}
      <header className="relative backdrop-blur-xl bg-gradient-to-r from-white/95 via-blue-50/40 to-indigo-50/40 border-b border-white/70 sticky top-0 z-50 px-6 py-4 shadow-xl shadow-[#3b82f6]/10">
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #1e3a8a 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}></div>
        </div>
        
        {/* Floating Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-2 left-1/4 w-1 h-1 bg-[#3b82f6] rounded-full animate-pulse" style={{animationDelay: '0s'}}></div>
          <div className="absolute top-3 right-1/3 w-1.5 h-1.5 bg-[#8b5cf6] rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
          <div className="absolute top-1 right-1/4 w-1 h-1 bg-[#f59e0b] rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto flex items-center justify-between relative z-10">
          {/* Enhanced Logo Section */}
          <div className="flex items-center space-x-4 group">
            <div className="relative">
              <div className="w-14 h-14 bg-gradient-to-br from-white via-blue-50/60 to-indigo-50/60 rounded-2xl flex items-center justify-center shadow-xl shadow-[#3b82f6]/20 border border-white/70 group-hover:scale-105 transition-all duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#3b82f6]/8 to-[#8b5cf6]/8 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <Image
                  src="/1.png"
                  alt="VGS Logo"
                  width={32}
                  height={32}
                  className="object-contain relative z-10"
                />
                {/* Enhanced Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6]/20 to-[#1e3a8a]/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
              </div>
              {/* Floating Accent */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#3b82f6] rounded-full animate-pulse shadow-lg shadow-[#3b82f6]/50">
                <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
              </div>
            </div>
            
            {/* Company Name */}
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] bg-clip-text text-transparent group-hover:from-[#3b82f6] group-hover:to-[#8b5cf6] transition-all duration-500">
                VGS Solutions
              </h1>
              <p className="text-xs text-[#1e3a8a]/70 font-medium group-hover:text-[#3b82f6] transition-colors duration-500">
                Enterprise Solutions
              </p>
            </div>
          </div>
          
          {/* Enhanced Navigation */}
          <nav className="hidden lg:flex space-x-1">
            <a href="#services" className="relative group px-6 py-3 rounded-xl bg-gradient-to-r from-white/80 to-blue-50/40 backdrop-blur-sm border border-white/60 hover:from-white/95 hover:to-blue-50/60 transition-all duration-500 transform hover:-translate-y-1 hover:scale-105 shadow-lg shadow-[#3b82f6]/10 hover:shadow-xl hover:shadow-[#3b82f6]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#3b82f6]/5 to-[#8b5cf6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-xl"></div>
              <div className="flex items-center space-x-2 relative z-10">
                <Settings className="w-4 h-4 text-[#1e3a8a] group-hover:text-[#3b82f6] transition-colors duration-300" />
                <span className="font-medium text-[#1e3a8a] group-hover:text-[#3b82f6] transition-colors duration-300">Services</span>
              </div>
              {/* Enhanced Underline Animation */}
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] group-hover:w-full transition-all duration-500 origin-center rounded-full"></div>
            </a>
            
            <a href="#about" className="relative group px-6 py-3 rounded-xl bg-gradient-to-r from-white/80 to-blue-50/40 backdrop-blur-sm border border-white/60 hover:from-white/95 hover:to-blue-50/60 transition-all duration-500 transform hover:-translate-y-1 hover:scale-105 shadow-lg shadow-[#3b82f6]/10 hover:shadow-xl hover:shadow-[#3b82f6]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#3b82f6]/5 to-[#8b5cf6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-xl"></div>
              <div className="flex items-center space-x-2 relative z-10">
                <Info className="w-4 h-4 text-[#1e3a8a] group-hover:text-[#3b82f6] transition-colors duration-300" />
                <span className="font-medium text-[#1e3a8a] group-hover:text-[#3b82f6] transition-colors duration-300">About</span>
              </div>
              {/* Enhanced Underline Animation */}
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] group-hover:w-full transition-all duration-500 origin-center rounded-full"></div>
            </a>
            
            <a href="#contact" className="relative group px-6 py-3 rounded-xl bg-gradient-to-r from-white/80 to-blue-50/40 backdrop-blur-sm border border-white/60 hover:from-white/95 hover:to-blue-50/60 transition-all duration-500 transform hover:-translate-y-1 hover:scale-105 shadow-lg shadow-[#3b82f6]/10 hover:shadow-xl hover:shadow-[#3b82f6]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#3b82f6]/5 to-[#8b5cf6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-xl"></div>
              <div className="flex items-center space-x-2 relative z-10">
                <Mail className="w-4 h-4 text-[#1e3a8a] group-hover:text-[#3b82f6] transition-colors duration-300" />
                <span className="font-medium text-[#1e3a8a] group-hover:text-[#3b82f6] transition-colors duration-300">Contact</span>
              </div>
              {/* Enhanced Underline Animation */}
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] group-hover:w-full transition-all duration-500 origin-center rounded-full"></div>
            </a>
          </nav>
          
          {/* Enhanced CTA Button */}
          <div className="hidden md:flex">
            <button className="relative group px-6 py-3 bg-gradient-to-r from-[#3b82f6] to-[#1e3a8a] text-white font-medium rounded-xl shadow-xl shadow-[#3b82f6]/30 hover:shadow-2xl hover:shadow-[#3b82f6]/40 transition-all duration-500 transform hover:-translate-y-1 hover:scale-105 border border-[#3b82f6]/20 hover:border-[#3b82f6]/40 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex items-center space-x-2 relative z-10">
                <Phone className="w-4 h-4" />
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
              {/* Enhanced Border Animation */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-white/20 transition-all duration-500"></div>
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button className="lg:hidden relative group p-3 rounded-xl bg-gradient-to-r from-white/80 to-blue-50/40 backdrop-blur-sm border border-white/60 hover:from-white/95 hover:to-blue-50/60 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-[#3b82f6]/5 to-[#8b5cf6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-xl"></div>
            <div className="flex flex-col space-y-1 relative z-10">
              <div className="w-5 h-0.5 bg-[#1e3a8a] group-hover:bg-[#3b82f6] transition-colors duration-300"></div>
              <div className="w-5 h-0.5 bg-[#1e3a8a] group-hover:bg-[#3b82f6] transition-colors duration-300"></div>
              <div className="w-5 h-0.5 bg-[#3b82f6] group-hover:bg-[#3b82f6] transition-colors duration-300"></div>
            </div>
          </button>
        </div>
        
        {/* Enhanced Border Animation */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#3b82f6]/30 to-transparent"></div>
      </header>

      {/* Modern Hero Section */}
      <section className="relative overflow-hidden py-16 lg:py-24">
        {/* Enhanced Modern Animated Background */}
        <div className="absolute inset-0">
          {/* Subtle Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-purple-50/15 to-indigo-50/20"></div>
          
          {/* Multi-layered Floating Geometric Shapes */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[#3b82f6]/8 to-[#8b5cf6]/8 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-[#8b5cf6]/8 to-[#3b82f6]/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-[#3b82f6]/6 to-[#1e3a8a]/6 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
          
          {/* Additional Floating Elements */}
          <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-gradient-to-br from-[#8b5cf6]/6 to-[#f59e0b]/6 rounded-full blur-2xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-1/3 left-1/3 w-28 h-28 bg-gradient-to-br from-[#3b82f6]/5 to-[#10b981]/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
          
          {/* Enhanced Animated Grid Pattern */}
          <div className="absolute inset-0 opacity-8">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.08) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}></div>
          </div>
          
          {/* Diagonal Grid Lines */}
          <div className="absolute inset-0 opacity-6">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(45deg, rgba(139, 92, 246, 0.06) 1px, transparent 1px), linear-gradient(-45deg, rgba(59, 130, 246, 0.06) 1px, transparent 1px)`,
              backgroundSize: '80px 80px'
            }}></div>
          </div>
          
          {/* Floating Particles */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-[#3b82f6]/20 rounded-full"></div>
            <div className="absolute top-3/4 right-1/6 w-1.5 h-1.5 bg-[#8b5cf6]/20 rounded-full"></div>
            <div className="absolute bottom-1/4 left-2/3 w-2.5 h-2.5 bg-[#f59e0b]/20 rounded-full"></div>
            <div className="absolute top-2/3 left-1/2 w-1 h-1 bg-[#10b981]/20 rounded-full"></div>
          </div>
          
          {/* Subtle Moving Lines */}
          <div className="absolute inset-0">
            <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3b82f6]/10 to-transparent animate-pulse"></div>
            <div className="absolute bottom-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8b5cf6]/10 to-transparent animate-pulse" style={{animationDelay: '0.7s'}}></div>
            <div className="absolute left-1/3 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#3b82f6]/10 to-transparent animate-pulse" style={{animationDelay: '1.2s'}}></div>
            <div className="absolute right-1/3 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#8b5cf6]/10 to-transparent animate-pulse" style={{animationDelay: '0.9s'}}></div>
          </div>
          
          {/* Rotating Border Elements */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-[#3b82f6]/5 rounded-full animate-spin" style={{animationDuration: '60s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-[#8b5cf6]/5 rounded-full animate-spin" style={{animationDuration: '45s', animationDirection: 'reverse'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-[#f59e0b]/5 rounded-full animate-spin" style={{animationDuration: '30s'}}></div>
          
          {/* Hexagonal Pattern Overlay */}
          <div className="absolute inset-0 opacity-4">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.04) 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}></div>
          </div>

          {/* Enhanced Floating Geometric Shapes */}
          <div className="absolute top-16 left-1/6 w-16 h-16 bg-gradient-to-br from-[#10b981]/8 to-[#3b82f6]/6 rounded-full blur-2xl animate-pulse" style={{animationDelay: '0.3s'}}></div>
          <div className="absolute bottom-16 right-1/6 w-20 h-20 bg-gradient-to-br from-[#f59e0b]/8 to-[#8b5cf6]/6 rounded-full blur-2xl animate-pulse" style={{animationDelay: '0.8s'}}></div>
          <div className="absolute top-1/4 right-1/6 w-12 h-12 bg-gradient-to-br from-[#3b82f6]/7 to-[#10b981]/5 rounded-full blur-xl animate-pulse" style={{animationDelay: '1.3s'}}></div>
          
          {/* Animated Wave Patterns */}
          <div className="absolute inset-0 opacity-3">
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#3b82f6]/5 to-transparent transform -skew-y-6 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#8b5cf6]/5 to-transparent transform skew-y-6 animate-pulse" style={{animationDelay: '0.5s'}}></div>
          </div>

          {/* Enhanced Particle System */}
          <div className="absolute inset-0">
            <div className="absolute top-1/5 left-1/5 w-1.5 h-1.5 bg-[#3b82f6]/30 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
            <div className="absolute top-2/5 right-1/5 w-1 h-1 bg-[#8b5cf6]/30 rounded-full animate-bounce" style={{animationDelay: '0.7s'}}></div>
            <div className="absolute bottom-1/5 left-2/5 w-2 h-2 bg-[#f59e0b]/30 rounded-full animate-bounce" style={{animationDelay: '1.1s'}}></div>
            <div className="absolute bottom-2/5 right-2/5 w-1.5 h-1.5 bg-[#10b981]/30 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
          </div>

          {/* Professional Business Elements */}
          <div className="absolute inset-0">
            {/* Abstract Business Charts */}
            <div className="absolute top-1/6 right-1/4 w-16 h-8 bg-gradient-to-r from-[#3b82f6]/20 to-[#8b5cf6]/20 rounded-lg transform rotate-12 animate-pulse" style={{animationDelay: '0.3s'}}></div>
            <div className="absolute top-1/6 right-1/4 w-12 h-6 bg-gradient-to-r from-[#8b5cf6]/20 to-[#f59e0b]/20 rounded-lg transform rotate-12 animate-pulse" style={{animationDelay: '0.6s'}}></div>
            
            {/* Professional Icons */}
            <div className="absolute bottom-1/6 left-1/4 w-12 h-12 bg-gradient-to-br from-[#10b981]/20 to-[#3b82f6]/20 rounded-full animate-pulse" style={{animationDelay: '0.9s'}}></div>
            <div className="absolute bottom-1/6 left-1/4 w-8 h-8 bg-gradient-to-br from-[#3b82f6]/20 to-[#8b5cf6]/20 rounded-full animate-pulse" style={{animationDelay: '1.2s'}}></div>
            
            {/* Creative Business Network Nodes */}
            <div className="absolute top-1/3 left-1/6 w-3 h-3 bg-[#3b82f6]/30 rounded-full animate-pulse"></div>
            <div className="absolute top-1/3 left-1/6 w-6 h-6 border border-[#3b82f6]/20 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
            
            <div className="absolute bottom-1/3 right-1/6 w-3 h-3 bg-[#8b5cf6]/30 rounded-full animate-pulse" style={{animationDelay: '0.7s'}}></div>
            <div className="absolute bottom-1/3 right-1/6 w-6 h-6 border border-[#8b5cf6]/20 rounded-full animate-ping" style={{animationDelay: '1.2s'}}></div>
            
            {/* Floating Business Documents */}
            <div className="absolute top-1/4 right-1/6 w-8 h-10 bg-gradient-to-br from-white/20 to-[#3b82f6]/10 rounded-lg transform rotate-6 animate-business-float shadow-lg shadow-[#3b82f6]/20"></div>
            <div className="absolute bottom-1/4 left-1/6 w-6 h-8 bg-gradient-to-br from-white/20 to-[#8b5cf6]/10 rounded-lg transform -rotate-6 animate-business-float shadow-lg shadow-[#8b5cf6]/20" style={{animationDelay: '0.8s'}}></div>
            
            {/* Creative Connection Lines */}
            <div className="absolute top-1/4 left-1/4 w-20 h-px bg-gradient-to-r from-transparent via-[#3b82f6]/20 to-transparent transform rotate-45 animate-pulse" style={{animationDelay: '0.4s'}}></div>
            <div className="absolute bottom-1/4 right-1/4 w-20 h-px bg-gradient-to-r from-transparent via-[#8b5cf6]/20 to-transparent transform -rotate-45 animate-pulse" style={{animationDelay: '0.9s'}}></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Content - Professional Typography & Enhanced Animations */}
            <div className="space-y-12">
              {/* Professional Company Badge */}
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-white/95 to-blue-50/60 backdrop-blur-xl rounded-full border border-white/70 shadow-xl shadow-[#3b82f6]/15 group hover:scale-105 transition-all duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#3b82f6]/8 to-[#8b5cf6]/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Professional Status Indicator */}
                <div className="relative z-10 w-5 h-5 bg-gradient-to-br from-[#10b981] to-[#3b82f6] rounded-full mr-3 animate-pulse flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <div className="absolute inset-0 bg-white/30 rounded-full animate-ping"></div>
                </div>
                
                <span className="text-[#1e3a8a] font-medium text-sm tracking-wide relative z-10">Enterprise-Grade Solutions • Trusted by 500+ Companies</span>
                
                <div className="relative z-10 w-2 h-2 bg-[#3b82f6] rounded-full ml-3">
                  <div className="absolute inset-0 bg-[#3b82f6]/50 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                </div>
              </div>

              {/* Professional Main Headline */}
              <div className="space-y-8">
                <h1 className="text-7xl lg:text-8xl font-light text-[#1e3a8a] leading-tight tracking-tight relative group">
                  <span className="relative inline-block">
                    We build
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#3b82f6]/30 to-[#8b5cf6]/30 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                  </span>
                  {' '}
                  <span className="bg-gradient-to-r from-[#3b82f6] via-[#8b5cf6] to-[#1e3a8a] bg-clip-text text-transparent relative inline-block">
                    better
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" style={{animationDelay: '0.2s'}}></div>
                  </span>
                  {' '}
                  <span className="relative inline-block">
                    for less
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#3b82f6]/30 to-[#8b5cf6]/30 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" style={{animationDelay: '0.4s'}}></div>
                  </span>
                </h1>
                
                {/* Professional Subtitle */}
                <p className="text-lg text-[#1e3a8a]/60 font-medium tracking-wide uppercase group">
                  <span className="inline-block group-hover:text-[#3b82f6] transition-colors duration-500">Strategic Growth</span>
                  {' '}•{' '}
                  <span className="inline-block group-hover:text-[#8b5cf6] transition-colors duration-500">Technical Excellence</span>
                  {' '}•{' '}
                  <span className="inline-block group-hover:text-[#f59e0b] transition-colors duration-500">Measurable Results</span>
                </p>
              </div>
              
              {/* Enhanced Professional Subtitle */}
              <div className="space-y-8">
                <p className="text-2xl text-[#1e3a8a]/80 leading-relaxed font-light group hover:text-[#1e3a8a] transition-colors duration-500">
                  World-class marketing, tech, and growth support at
                </p>
                <div className="flex items-center space-x-6 group">
                  <div className="relative group-hover:scale-110 transition-transform duration-500">
                    <span className="text-6xl font-light bg-gradient-to-r from-[#3b82f6] via-[#8b5cf6] to-[#1e3a8a] bg-clip-text text-transparent relative">
                      50%
                      <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    </span>
                    
                    {/* Professional Achievement Badge */}
                    <div className="absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] rounded-full animate-pulse shadow-lg shadow-[#3b82f6]/50 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
                    </div>
                    
                    <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-gradient-to-br from-[#8b5cf6] to-[#3b82f6] rounded-full shadow-lg shadow-[#8b5cf6]/50 flex items-center justify-center">
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <div className="absolute inset-0 bg-white/20 rounded-full animate-ping" style={{animationDelay: '0.3s'}}></div>
                    </div>
                  </div>
                  <span className="text-2xl text-[#1e3a8a]/80 leading-relaxed font-light group-hover:text-[#1e3a8a] transition-colors duration-500">
                    faster turnaround. Not the cheapest. Just the smartest way to grow.
                  </span>
                </div>
              </div>

              {/* Professional CTA Section */}
              <div className="space-y-8">
                {/* Primary CTA Button */}
                <button className="group relative overflow-hidden bg-gradient-to-r from-[#3b82f6] via-[#8b5cf6] to-[#1e3a8a] text-white px-12 py-6 rounded-3xl font-medium text-xl shadow-2xl shadow-[#3b82f6]/30 hover:shadow-3xl hover:shadow-[#3b82f6]/50 transition-all duration-700 transform hover:scale-105 hover:-translate-y-2 flex items-center space-x-4">
                  {/* Enhanced Background Animation */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a8a] via-[#8b5cf6] to-[#3b82f6] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  {/* Professional Icon Container */}
                  <div className="relative z-10 w-6 h-6 bg-white/20 rounded-full animate-pulse flex items-center justify-center">
                    <div className="w-3 h-3 bg-white/40 rounded-full animate-ping"></div>
                  </div>
                  
                  <Phone className="w-6 h-6 relative z-10" />
                  <span className="relative z-10 font-semibold">Schedule Your Free Consultation</span>
                  
                  {/* Professional Hover Effects */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a8a] via-[#8b5cf6] to-[#3b82f6] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  {/* Professional Border Animation */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-white/30 transition-all duration-700"></div>
                </button>
                
                {/* Secondary CTA */}
                <div className="text-center group">
                  <span className="text-[#1e3a8a]/70 font-light">Or explore our</span>{' '}
                  <a href="#work" className="text-[#3b82f6] hover:text-[#8b5cf6] transition-all duration-500 font-medium underline decoration-2 underline-offset-4 hover:decoration-[#8b5cf6] flex items-center justify-center space-x-3 group-hover:scale-105 relative mx-auto w-fit">
                    <span>Portfolio & Case Studies</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    
                    {/* Professional Underline Animation */}
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </a>
                </div>

                {/* Professional Trust Indicators */}
                <div className="flex items-center justify-center space-x-8 pt-4">
                  <div className="flex items-center space-x-2 text-[#1e3a8a]/60 group hover:text-[#1e3a8a] transition-colors duration-300">
                    <div className="relative">
                      <CheckCircle2 className="w-4 h-4 text-[#10b981] group-hover:scale-110 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-[#10b981]/20 rounded-full animate-ping"></div>
                    </div>
                    <span className="text-sm font-medium">ISO Certified</span>
                  </div>
                  <div className="flex items-center space-x-2 text-[#1e3a8a]/60 group hover:text-[#1e3a8a] transition-colors duration-300">
                    <div className="relative">
                      <Shield className="w-4 h-4 text-[#3b82f6] group-hover:scale-110 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-[#3b82f6]/20 rounded-full animate-ping" style={{animationDelay: '0.3s'}}></div>
                    </div>
                    <span className="text-sm font-medium">GDPR Compliant</span>
                  </div>
                  <div className="flex items-center space-x-2 text-[#1e3a8a]/60 group hover:text-[#1e3a8a] transition-colors duration-300">
                    <div className="relative">
                      <Star className="w-4 h-4 text-[#f59e0b] group-hover:scale-110 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-[#f59e0b]/20 rounded-full animate-ping" style={{animationDelay: '0.6s'}}></div>
                    </div>
                    <span className="text-sm font-medium">4.9/5 Rating</span>
                  </div>
                </div>

                {/* Professional Achievement Metrics */}
                <div className="grid grid-cols-3 gap-6 pt-6">
                  <div className="text-center group">
                    <div className="text-3xl font-bold text-[#1e3a8a] group-hover:text-[#3b82f6] transition-colors duration-300">15+</div>
                    <div className="text-xs text-[#1e3a8a]/70 font-medium uppercase tracking-wide">Years Experience</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-3xl font-bold text-[#1e3a8a] group-hover:text-[#8b5cf6] transition-colors duration-300">24/7</div>
                    <div className="text-xs text-[#1e3a8a]/70 font-medium uppercase tracking-wide">Support Available</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-3xl font-bold text-[#1e3a8a] group-hover:text-[#f59e0b] transition-colors duration-300">99.9%</div>
                    <div className="text-xs text-[#1e3a8a]/70 font-medium uppercase tracking-wide">Uptime Guarantee</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Right Content - Professional Globe with Business Elements */}
            <div className="relative group">
              <div className="relative w-[500px] h-[500px] mx-auto">
                {/* Professional Multi-layered Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6]/30 via-[#8b5cf6]/20 to-[#1e3a8a]/30 rounded-full blur-3xl animate-pulse group-hover:scale-110 transition-transform duration-1000"></div>
                <div className="absolute inset-4 bg-gradient-to-br from-[#8b5cf6]/20 via-[#3b82f6]/15 to-[#1e3a8a]/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute inset-8 bg-gradient-to-br from-[#f59e0b]/15 via-[#10b981]/10 to-[#3b82f6]/15 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
                
                {/* Professional Main Globe */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a] via-[#3b82f6] via-[#8b5cf6] to-[#1e3a8a] rounded-full shadow-2xl animate-pulse relative overflow-hidden group-hover:shadow-3xl group-hover:shadow-[#3b82f6]/40 transition-all duration-1000">
                  {/* Professional Inner Glow Effect */}
                  <div className="absolute inset-4 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-xl"></div>
                  <div className="absolute inset-8 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-lg"></div>
                  
                  {/* Professional Grid Pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.3) 1px, transparent 1px)`,
                      backgroundSize: '20px 20px'
                    }}></div>
                  </div>
                  
                  {/* Professional Moving Light Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                </div>
                
                {/* Professional Rotating Rings */}
                <div className="absolute inset-0 rounded-full border-2 border-[#3b82f6]/40 animate-spin group-hover:border-[#3b82f6]/60 transition-all duration-1000" style={{animationDuration: '25s'}}></div>
                <div className="absolute inset-4 rounded-full border border-[#8b5cf6]/30 animate-spin group-hover:border-[#8b5cf6]/50 transition-all duration-1000" style={{animationDuration: '20s', animationDirection: 'reverse'}}></div>
                <div className="absolute inset-8 rounded-full border border-white/20 animate-spin group-hover:border-white/40 transition-all duration-1000" style={{animationDuration: '15s'}}></div>
                <div className="absolute inset-12 rounded-full border border-[#f59e0b]/25 animate-spin group-hover:border-[#f59e0b]/45 transition-all duration-1000" style={{animationDuration: '40s', animationDirection: 'reverse'}}></div>
                
                {/* Professional Grid System */}
                <div className="absolute inset-0 rounded-full">
                  {/* Professional Grid Lines */}
                  <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent animate-pulse"></div>
                  <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
                  
                  <div className="absolute left-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/50 to-transparent animate-pulse"></div>
                  <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/60 to-transparent animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <div className="absolute left-3/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/50 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
                  
                  {/* Professional Diagonal Grid */}
                  <div className="absolute inset-0 rounded-full border border-white/30 transform rotate-45 animate-pulse" style={{animationDelay: '0.3s'}}></div>
                  <div className="absolute inset-0 rounded-full border border-white/20 transform -rotate-45 animate-pulse" style={{animationDelay: '0.7s'}}></div>
                  <div className="absolute inset-0 rounded-full border border-white/15 transform rotate-22.5 animate-pulse" style={{animationDelay: '1.1s'}}></div>
                </div>

                {/* Professional Concentric Circles */}
                <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border border-white/40 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 border border-white/30 rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
                <div className="absolute top-2/5 left-2/5 w-1/5 h-1/5 border border-white/25 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                
                {/* Professional Data Points */}
                <div className="absolute top-8 left-1/2 w-3 h-3 bg-[#3b82f6] rounded-full shadow-lg shadow-[#3b82f6]/50 group-hover:scale-125 transition-transform duration-500">
                  <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
                </div>
                <div className="absolute bottom-8 left-1/2 w-3 h-3 bg-[#8b5cf6] rounded-full shadow-lg shadow-[#8b5cf6]/50 group-hover:scale-125 transition-transform duration-500">
                  <div className="absolute inset-0 bg-white/20 rounded-full animate-ping" style={{animationDelay: '0.3s'}}></div>
                </div>
                <div className="absolute top-1/2 left-8 w-3 h-3 bg-[#3b82f6] rounded-full shadow-lg shadow-[#3b82f6]/50 group-hover:scale-125 transition-transform duration-500">
                  <div className="absolute inset-0 bg-white/20 rounded-full animate-ping" style={{animationDelay: '0.6s'}}></div>
                </div>
                <div className="absolute top-1/2 right-8 w-3 h-3 bg-[#8b5cf6] rounded-full shadow-lg shadow-[#8b5cf6]/50 group-hover:scale-125 transition-transform duration-500">
                  <div className="absolute inset-0 bg-white/20 rounded-full animate-ping" style={{animationDelay: '0.9s'}}></div>
                </div>

                {/* Professional Company Logo Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
                  <span className="text-8xl font-light drop-shadow-2xl animate-pulse group-hover:scale-110 transition-transform duration-500">V</span>
                  <div className="text-center space-y-2">
                    <span className="text-4xl font-light tracking-wider group-hover:text-[#8b5cf6] transition-colors duration-500">ARE</span>
                    <br />
                    <span className="text-4xl font-light tracking-wider group-hover:text-[#3b82f6] transition-colors duration-500">THE</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-8xl font-light group-hover:scale-110 transition-transform duration-500">G</span>
                    <span className="text-8xl font-light group-hover:scale-110 transition-transform duration-500">s</span>
                    <span className="text-4xl text-[#8b5cf6] animate-bounce shadow-lg shadow-[#8b5cf6]/50 group-hover:scale-125 transition-transform duration-500">★</span>
                  </div>
                </div>

                {/* Professional Floating Elements */}
                <div className="absolute top-6 right-10 w-4 h-4 bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] rounded-full animate-pulse shadow-lg shadow-[#3b82f6]/50 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="absolute bottom-10 left-16 w-3 h-3 bg-gradient-to-br from-[#8b5cf6] to-white rounded-full shadow-lg shadow-[#8b5cf6]/50 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="absolute top-1/2 right-6 w-5 h-5 bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] rounded-full opacity-70 animate-pulse shadow-lg shadow-[#3b82f6]/50 group-hover:scale-150 transition-transform duration-500"></div>
                
                {/* Professional Circuit Connections */}
                <div className="absolute top-1/4 right-1/4 w-24 h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent transform rotate-45 animate-pulse group-hover:bg-gradient-to-r group-hover:from-transparent group-hover:via-white/80 group-hover:to-transparent transition-all duration-500"></div>
                <div className="absolute bottom-1/4 left-1/4 w-24 h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent transform -rotate-45 animate-pulse group-hover:bg-gradient-to-r group-hover:from-transparent group-hover:via-white/80 group-hover:to-transparent transition-all duration-500" style={{animationDelay: '0.5s'}}></div>
                
                {/* Professional Glowing Orbs */}
                <div className="absolute top-1/3 left-1/3 w-4 h-4 bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] rounded-full shadow-lg shadow-[#3b82f6]/50 animate-pulse group-hover:scale-150 transition-transform duration-500">
                  <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
                </div>
                <div className="absolute bottom-1/3 right-1/3 w-4 h-4 bg-gradient-to-br from-[#8b5cf6] to-white rounded-full shadow-lg shadow-[#8b5cf6]/50 animate-pulse group-hover:scale-150 transition-transform duration-500" style={{animationDelay: '1s'}}>
                  <div className="absolute inset-0 bg-white/20 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                </div>
                
                {/* Professional Data Stream Lines */}
                <div className="absolute top-0 left-1/2 w-1 h-12 bg-gradient-to-b from-transparent via-[#3b82f6] to-transparent animate-pulse group-hover:h-16 transition-all duration-500"></div>
                <div className="absolute bottom-0 left-1/2 w-1 h-12 bg-gradient-to-b from-transparent via-[#8b5cf6] to-transparent animate-pulse group-hover:h-16 transition-all duration-500" style={{animationDelay: '0.5s'}}></div>
                
                {/* Professional Satellite Rings */}
                <div className="absolute -top-12 -left-12 w-48 h-48 border border-[#3b82f6]/20 animate-spin group-hover:border-[#3b82f6]/40 transition-all duration-1000" style={{animationDuration: '35s'}}></div>
                <div className="absolute -bottom-12 -right-12 w-48 h-48 border border-[#8b5cf6]/20 animate-spin group-hover:border-[#8b5cf6]/40 transition-all duration-1000" style={{animationDuration: '28s', animationDirection: 'reverse'}}></div>
                <div className="absolute -top-8 -right-8 w-32 h-32 border border-white/15 animate-spin group-hover:border-white/35 transition-all duration-1000" style={{animationDuration: '22s'}}></div>
                
                {/* Professional Particle System */}
                <div className="absolute inset-0">
                  <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full shadow-lg shadow-white/50 group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="absolute top-3/4 right-1/4 w-1.5 h-1.5 bg-[#3b82f6] rounded-full shadow-lg shadow-[#3b82f6]/50 group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="absolute bottom-1/4 left-3/4 w-2.5 h-2.5 bg-[#8b5cf6] rounded-full shadow-lg shadow-[#8b5cf6]/50 group-hover:scale-150 transition-transform duration-500"></div>
                </div>

                {/* Professional Floating Accent Elements */}
                <div className="absolute -top-6 -right-6 w-8 h-8 bg-gradient-to-br from-[#f59e0b] to-[#10b981] rounded-full shadow-lg shadow-[#f59e0b]/50 animate-pulse group-hover:scale-125 transition-transform duration-500"></div>
                <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-gradient-to-br from-[#10b981] to-[#3b82f6] rounded-full shadow-lg shadow-[#10b981]/50 animate-pulse group-hover:scale-125 transition-transform duration-500"></div>
                <div className="absolute top-1/2 -left-8 w-4 h-4 bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] rounded-full shadow-lg shadow-[#3b82f6]/50 animate-pulse group-hover:scale-125 transition-transform duration-500"></div>
                <div className="absolute top-1/2 -right-8 w-4 h-4 bg-gradient-to-br from-[#8b5cf6] to-[#f59e0b] rounded-full shadow-lg shadow-[#8b5cf6]/50 animate-pulse group-hover:scale-125 transition-transform duration-500"></div>

                {/* Professional Business Metrics */}
                <div className="absolute -top-16 -right-16 bg-white/90 backdrop-blur-xl rounded-2xl p-4 border border-white/60 shadow-xl shadow-[#3b82f6]/20 group hover:scale-110 transition-transform duration-500">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#1e3a8a] group-hover:text-[#3b82f6] transition-colors duration-300">500+</div>
                    <div className="text-xs text-[#1e3a8a]/70 font-medium">Happy Clients</div>
                  </div>
                  {/* Floating accent */}
                  <div className="absolute -top-2 -right-2 w-3 h-3 bg-[#3b82f6] rounded-full animate-pulse"></div>
                </div>

                <div className="absolute -bottom-16 -left-16 bg-white/90 backdrop-blur-xl rounded-2xl p-4 border border-white/60 shadow-xl shadow-[#8b5cf6]/20 group hover:scale-110 transition-transform duration-500">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#1e3a8a] group-hover:text-[#8b5cf6] transition-colors duration-300">98%</div>
                    <div className="text-xs text-[#1e3a8a]/70 font-medium">Success Rate</div>
                  </div>
                  {/* Floating accent */}
                  <div className="absolute -top-2 -right-2 w-3 h-3 bg-[#8b5cf6] rounded-full animate-pulse"></div>
                </div>

                {/* Additional Creative Business Metrics */}
                <div className="absolute top-1/2 -right-20 bg-white/90 backdrop-blur-xl rounded-2xl p-4 border border-white/60 shadow-xl shadow-[#f59e0b]/20 group hover:scale-110 transition-transform duration-500">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#1e3a8a] group-hover:text-[#f59e0b] transition-colors duration-300">24/7</div>
                    <div className="text-xs text-[#1e3a8a]/70 font-medium">Support</div>
                  </div>
                  {/* Floating accent */}
                  <div className="absolute -top-2 -right-2 w-3 h-3 bg-[#f59e0b] rounded-full animate-pulse"></div>
                </div>

                <div className="absolute top-1/2 -left-20 bg-white/90 backdrop-blur-xl rounded-2xl p-4 border border-white/60 shadow-xl shadow-[#10b981]/20 group hover:scale-110 transition-transform duration-500">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#1e3a8a] group-hover:text-[#10b981] transition-colors duration-300">15+</div>
                    <div className="text-xs text-[#1e3a8a]/70 font-medium">Years</div>
                  </div>
                  {/* Floating accent */}
                  <div className="absolute -top-2 -right-2 w-3 h-3 bg-[#10b981] rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Enhanced Professional Background */}
        <div className="absolute inset-0">
          {/* Multi-layered Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-indigo-50/30"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/20 via-blue-50/15 to-purple-50/25"></div>
          
          {/* Professional Floating Geometric Elements */}
          <div className="absolute top-20 left-1/4 w-32 h-32 bg-gradient-to-br from-[#3b82f6]/8 to-[#8b5cf6]/6 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-gradient-to-br from-[#8b5cf6]/8 to-[#3b82f6]/6 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/3 w-28 h-28 bg-gradient-to-br from-[#f59e0b]/6 to-[#10b981]/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
          
          {/* Additional Professional Elements */}
          <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-gradient-to-br from-[#10b981]/6 to-[#3b82f6]/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-1/3 left-1/4 w-36 h-36 bg-gradient-to-br from-[#3b82f6]/5 to-[#8b5cf6]/4 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
          
          {/* Professional Grid Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px)`,
              backgroundSize: '80px 80px'
            }}></div>
          </div>
          
          {/* Professional Diagonal Grid Lines */}
          <div className="absolute inset-0 opacity-3">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(45deg, rgba(139, 92, 246, 0.03) 1px, transparent 1px), linear-gradient(-45deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px)`,
              backgroundSize: '100px 100px'
            }}></div>
          </div>

          {/* Creative Business Network Elements */}
          <div className="absolute inset-0">
            {/* Floating Business Nodes */}
            <div className="absolute top-1/6 left-1/6 w-3 h-3 bg-[#3b82f6]/30 rounded-full animate-pulse"></div>
            <div className="absolute top-1/6 left-1/6 w-6 h-6 border border-[#3b82f6]/20 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
            
            <div className="absolute bottom-1/6 right-1/6 w-3 h-3 bg-[#8b5cf6]/30 rounded-full animate-pulse" style={{animationDelay: '0.7s'}}></div>
            <div className="absolute bottom-1/6 right-1/6 w-6 h-6 border border-[#8b5cf6]/20 rounded-full animate-ping" style={{animationDelay: '1.2s'}}></div>
            
            {/* Professional Connection Lines */}
            <div className="absolute top-1/4 left-1/4 w-20 h-px bg-gradient-to-r from-transparent via-[#3b82f6]/20 to-transparent transform rotate-45 animate-pulse" style={{animationDelay: '0.4s'}}></div>
            <div className="absolute bottom-1/4 right-1/4 w-20 h-px bg-gradient-to-r from-transparent via-[#8b5cf6]/20 to-transparent transform -rotate-45 animate-pulse" style={{animationDelay: '0.9s'}}></div>
            
            {/* Floating Business Documents */}
            <div className="absolute top-1/4 right-1/6 w-8 h-10 bg-gradient-to-br from-white/20 to-[#3b82f6]/10 rounded-lg transform rotate-6 animate-business-float shadow-lg shadow-[#3b82f6]/20"></div>
            <div className="absolute bottom-1/4 left-1/6 w-6 h-8 bg-gradient-to-br from-white/20 to-[#8b5cf6]/10 rounded-lg transform -rotate-6 animate-business-float shadow-lg shadow-[#8b5cf6]/20" style={{animationDelay: '0.8s'}}></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Enhanced Section Header */}
          <div className="text-center mb-24">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-white/95 to-blue-50/60 backdrop-blur-xl rounded-full border border-white/70 shadow-xl shadow-[#3b82f6]/15 group hover:scale-105 transition-all duration-500 relative overflow-hidden mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-[#3b82f6]/8 to-[#8b5cf6]/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Professional Status Indicator */}
              <div className="relative z-10 w-5 h-5 bg-gradient-to-br from-[#10b981] to-[#3b82f6] rounded-full mr-3 animate-pulse flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <div className="absolute inset-0 bg-white/30 rounded-full animate-ping"></div>
              </div>
              
              <Settings className="w-5 h-5 text-[#1e3a8a] mr-3 relative z-10" />
              <span className="text-[#1e3a8a] font-medium text-sm tracking-wide relative z-10">Enterprise Solutions</span>
              
              <div className="relative z-10 w-2 h-2 bg-[#3b82f6] rounded-full ml-3">
                <div className="absolute inset-0 bg-[#3b82f6]/50 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
              </div>
            </div>
            
            <h2 className="text-7xl font-light text-[#1e3a8a] mb-8 tracking-tight relative group">
              <span className="relative inline-block">
                We Offer You All The
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#3b82f6]/30 to-[#8b5cf6]/30 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
              </span>
              {' '}
              <span className="bg-gradient-to-r from-[#3b82f6] via-[#8b5cf6] to-[#1e3a8a] bg-clip-text text-transparent relative inline-block">
                Features
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" style={{animationDelay: '0.2s'}}></div>
              </span>
              {' '}
              <span className="relative inline-block">
                Your Business Needs
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#3b82f6]/30 to-[#8b5cf6]/30 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" style={{animationDelay: '0.4s'}}></div>
              </span>
            </h2>
            
            <p className="text-xl text-[#1e3a8a]/70 leading-relaxed max-w-3xl mx-auto font-light group hover:text-[#1e3a8a] transition-colors duration-500">
              Comprehensive solutions designed to accelerate your business growth with precision and innovation.
            </p>
            
            {/* Professional Subtitle */}
            <p className="text-lg text-[#1e3a8a]/50 font-medium tracking-wide uppercase mt-6 group">
              <span className="inline-block group-hover:text-[#3b82f6] transition-colors duration-500">Strategic Planning</span>
              {' '}•{' '}
              <span className="inline-block group-hover:text-[#8b5cf6] transition-colors duration-500">Technical Excellence</span>
              {' '}•{' '}
              <span className="inline-block group-hover:text-[#f59e0b] transition-colors duration-500">Global Reach</span>
            </p>
          </div>

          {/* Enhanced Professional Services Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Enhanced Marketing Support */}
              <div className="group relative">
                <div className="flex items-start space-x-6 p-8 rounded-3xl bg-gradient-to-r from-white/95 to-blue-50/30 backdrop-blur-xl border border-white/70 hover:from-white/98 hover:to-blue-50/50 transition-all duration-700 transform hover:-translate-y-3 hover:scale-[1.02] shadow-lg shadow-[#3b82f6]/10 hover:shadow-2xl hover:shadow-[#3b82f6]/20 relative overflow-hidden">
                  {/* Enhanced Background Animation */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#3b82f6]/5 to-[#8b5cf6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  {/* Enhanced Icon Container */}
                  <div className="relative flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#3b82f6] to-[#1e3a8a] rounded-2xl flex items-center justify-center shadow-2xl shadow-[#3b82f6]/30 group-hover:scale-110 transition-transform duration-500 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                      <BarChart3 className="w-10 h-10 text-white relative z-10" />
                      
                      {/* Enhanced Floating accent */}
                      <div className="absolute -top-3 -right-3 w-5 h-5 bg-[#3b82f6] rounded-full animate-pulse shadow-lg shadow-[#3b82f6]/50">
                        <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
                      </div>
                    </div>
                    
                    {/* Additional Floating Elements */}
                    <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-[#8b5cf6] rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  </div>
                  
                  {/* Enhanced Content */}
                  <div className="flex-1 relative z-10">
                    <h3 className="text-2xl font-medium text-[#1e3a8a] mb-4 group-hover:text-[#3b82f6] transition-colors duration-500 relative">
                      Marketing Support
                      <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] group-hover:w-full transition-all duration-500 origin-left"></div>
                    </h3>
                    <p className="text-[#1e3a8a]/80 text-lg leading-relaxed font-light group-hover:text-[#1e3a8a] transition-colors duration-500">
                      We help you connect with the right customers, with strategy, automation, and content that actually works.
                    </p>
                    
                    {/* Professional Feature Points */}
                    <div className="flex items-center space-x-4 mt-4">
                      <div className="flex items-center space-x-2 text-[#3b82f6]">
                        <CheckCircle2 className="w-4 h-4" />
                        <span className="text-sm font-medium">Strategy</span>
                      </div>
                      <div className="flex items-center space-x-2 text-[#8b5cf6]">
                        <CheckCircle2 className="w-4 h-4" />
                        <span className="text-sm font-medium">Automation</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Enhanced Border Animation */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#3b82f6]/20 transition-all duration-700"></div>
                </div>
              </div>

              {/* Enhanced Custom Tech & Development */}
              <div className="group relative">
                <div className="flex items-start space-x-6 p-8 rounded-3xl bg-gradient-to-r from-white/95 to-indigo-50/30 backdrop-blur-xl border border-white/70 hover:from-white/98 hover:to-indigo-50/50 transition-all duration-700 transform hover:-translate-y-3 hover:scale-[1.02] shadow-lg shadow-[#1e3a8a]/10 hover:shadow-2xl hover:shadow-[#1e3a8a]/20 relative overflow-hidden">
                  {/* Enhanced Background Animation */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a8a]/5 to-[#3b82f6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  {/* Enhanced Icon Container */}
                  <div className="relative flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] rounded-2xl flex items-center justify-center shadow-2xl shadow-[#1e3a8a]/30 group-hover:scale-110 transition-transform duration-500 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                      <Code2 className="w-10 h-10 text-white relative z-10" />
                      
                      {/* Enhanced Floating accent */}
                      <div className="absolute -top-3 -right-3 w-5 h-5 bg-[#1e3a8a] rounded-full animate-pulse shadow-lg shadow-[#1e3a8a]/50">
                        <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
                      </div>
                    </div>
                    
                    {/* Additional Floating Elements */}
                    <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-[#3b82f6] rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  </div>
                  
                  {/* Enhanced Content */}
                  <div className="flex-1 relative z-10">
                    <h3 className="text-2xl font-medium text-[#1e3a8a] mb-4 group-hover:text-[#3b82f6] transition-colors duration-500 relative">
                      Custom Tech & Development
                      <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] group-hover:w-full transition-all duration-500 origin-left"></div>
                    </h3>
                    <p className="text-[#1e3a8a]/80 text-lg leading-relaxed font-light group-hover:text-[#1e3a8a] transition-colors duration-500">
                      Whether you need an MVP or a custom app, we build it clean, fast, and made to scale.
                    </p>
                    
                    {/* Professional Feature Points */}
                    <div className="flex items-center space-x-4 mt-4">
                      <div className="flex items-center space-x-2 text-[#1e3a8a]">
                        <CheckCircle2 className="w-4 h-4" />
                        <span className="text-sm font-medium">MVP</span>
                      </div>
                      <div className="flex items-center space-x-2 text-[#3b82f6]">
                        <CheckCircle2 className="w-4 h-4" />
                        <span className="text-sm font-medium">Scalable</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Enhanced Border Animation */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#1e3a8a]/20 transition-all duration-700"></div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Enhanced Strategic Consulting */}
              <div className="group relative">
                <div className="flex items-start space-x-6 p-8 rounded-3xl bg-gradient-to-r from-white/95 to-purple-50/30 backdrop-blur-xl border border-white/70 hover:from-white/98 hover:to-purple-50/50 transition-all duration-700 transform hover:-translate-y-3 hover:scale-[1.02] shadow-lg shadow-[#8b5cf6]/10 hover:shadow-2xl hover:shadow-[#8b5cf6]/20 relative overflow-hidden">
                  {/* Enhanced Background Animation */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#8b5cf6]/5 to-[#3b82f6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  {/* Enhanced Icon Container */}
                  <div className="relative flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#8b5cf6] to-[#3b82f6] rounded-2xl flex items-center justify-center shadow-2xl shadow-[#8b5cf6]/30 group-hover:scale-110 transition-transform duration-500 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                      <Lightbulb className="w-10 h-10 text-white relative z-10" />
                      
                      {/* Enhanced Floating accent */}
                      <div className="absolute -top-3 -right-3 w-5 h-5 bg-[#8b5cf6] rounded-full animate-pulse shadow-lg shadow-[#8b5cf6]/50">
                        <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
                      </div>
                    </div>
                    
                    {/* Additional Floating Elements */}
                    <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-[#3b82f6] rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  </div>
                  
                  {/* Enhanced Content */}
                  <div className="flex-1 relative z-10">
                    <h3 className="text-2xl font-medium text-[#1e3a8a] mb-4 group-hover:text-[#8b5cf6] transition-colors duration-500 relative">
                      Strategic Consulting
                      <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] group-hover:w-full transition-all duration-500 origin-left"></div>
                    </h3>
                    <p className="text-[#1e3a8a]/80 text-lg leading-relaxed font-light group-hover:text-[#1e3a8a] transition-colors duration-500">
                      Growth feels hard when you don&apos;t know where to start. We help you spot the leaks, fix the funnels, and move faster.
                    </p>
                    
                    {/* Professional Feature Points */}
                    <div className="flex items-center space-x-4 mt-4">
                      <div className="flex items-center space-x-2 text-[#8b5cf6]">
                        <CheckCircle2 className="w-4 h-4" />
                        <span className="text-sm font-medium">Analysis</span>
                      </div>
                      <div className="flex items-center space-x-2 text-[#3b82f6]">
                        <CheckCircle2 className="w-4 h-4" />
                        <span className="text-sm font-medium">Strategy</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Enhanced Border Animation */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#8b5cf6]/20 transition-all duration-700"></div>
                </div>
              </div>

              {/* Enhanced Global Resourcing */}
              <div className="group relative">
                <div className="flex items-start space-x-6 p-8 rounded-3xl bg-gradient-to-r from-white/95 to-amber-50/30 backdrop-blur-xl border border-white/70 hover:from-white/98 hover:to-amber-50/50 transition-all duration-700 transform hover:-translate-y-3 hover:scale-[1.02] shadow-lg shadow-[#f59e0b]/10 hover:shadow-2xl hover:shadow-[#f59e0b]/20 relative overflow-hidden">
                  {/* Enhanced Background Animation */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#f59e0b]/5 to-[#3b82f6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  {/* Enhanced Icon Container */}
                  <div className="relative flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#f59e0b] to-[#3b82f6] rounded-2xl flex items-center justify-center shadow-2xl shadow-[#f59e0b]/30 group-hover:scale-110 transition-transform duration-500 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                      <Globe className="w-10 h-10 text-white relative z-10" />
                      
                      {/* Enhanced Floating accent */}
                      <div className="absolute -top-3 -right-3 w-5 h-5 bg-[#f59e0b] rounded-full animate-pulse shadow-lg shadow-[#f59e0b]/50">
                        <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
                      </div>
                    </div>
                    
                    {/* Additional Floating Elements */}
                    <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-[#3b82f6] rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  </div>
                  
                  {/* Enhanced Content */}
                  <div className="flex-1 relative z-10">
                    <h3 className="text-2xl font-medium text-[#1e3a8a] mb-4 group-hover:text-[#f59e0b] transition-colors duration-500 relative">
                      Global Resourcing
                      <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#f59e0b] to-[#3b82f6] group-hover:w-full transition-all duration-500 origin-left"></div>
                    </h3>
                    <p className="text-[#1e3a8a]/80 text-lg leading-relaxed font-light group-hover:text-[#1e3a8a] transition-colors duration-500">
                      Need an extra pair of hands? Our vetted global talent plugs into your team, at half the cost of hiring locally.
                    </p>
                    
                    {/* Professional Feature Points */}
                    <div className="flex items-center space-x-4 mt-4">
                      <div className="flex items-center space-x-2 text-[#f59e0b]">
                        <CheckCircle2 className="w-4 h-4" />
                        <span className="text-sm font-medium">Vetted</span>
                      </div>
                      <div className="flex items-center space-x-2 text-[#3b82f6]">
                        <CheckCircle2 className="w-4 h-4" />
                        <span className="text-sm font-medium">Cost-Effective</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Enhanced Border Animation */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#f59e0b]/20 transition-all duration-700"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Services Summary */}
          <div className="mt-24 text-center">
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-12 border border-white/60 shadow-2xl shadow-[#3b82f6]/20 relative overflow-hidden group">
              {/* Enhanced Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#3b82f6]/5 via-[#8b5cf6]/5 to-[#f59e0b]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="relative z-10">
                <h3 className="text-4xl font-light text-[#1e3a8a] mb-6">
                  Ready to Transform Your{' '}
                  <span className="bg-gradient-to-r from-[#3b82f6] via-[#8b5cf6] to-[#f59e0b] bg-clip-text text-transparent">Business?</span>
                </h3>
                <p className="text-xl text-[#1e3a8a]/70 leading-relaxed font-light mb-8 max-w-3xl mx-auto">
                  Our comprehensive suite of services is designed to address every aspect of your business growth journey.
                </p>
                
                {/* Professional Metrics Row */}
                <div className="grid grid-cols-3 gap-8 mb-8">
                  <div className="text-center group">
                    <div className="text-3xl font-bold text-[#1e3a8a] group-hover:text-[#3b82f6] transition-colors duration-300">4</div>
                    <div className="text-sm text-[#1e3a8a]/70 font-medium uppercase tracking-wide">Core Services</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-3xl font-bold text-[#1e3a8a] group-hover:text-[#8b5cf6] transition-colors duration-300">100%</div>
                    <div className="text-sm text-[#1e3a8a]/70 font-medium uppercase tracking-wide">Custom Solutions</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-3xl font-bold text-[#1e3a8a] group-hover:text-[#f59e0b] transition-colors duration-300">24/7</div>
                    <div className="text-sm text-[#1e3a8a]/70 font-medium uppercase tracking-wide">Support Available</div>
                  </div>
                </div>
                
                {/* Professional CTA */}
                <button className="group relative overflow-hidden bg-gradient-to-r from-[#3b82f6] via-[#8b5cf6] to-[#1e3a8a] text-white px-8 py-4 rounded-2xl font-medium text-lg shadow-xl shadow-[#3b82f6]/30 hover:shadow-2xl hover:shadow-[#3b82f6]/50 transition-all duration-700 transform hover:scale-105 hover:-translate-y-1 flex items-center space-x-3 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a8a] via-[#8b5cf6] to-[#3b82f6] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  <Phone className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">Get Started Today</span>
                  
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/20 transition-all duration-700"></div>
                </button>
              </div>
              
              {/* Floating Accent Elements */}
              <div className="absolute top-8 right-8 w-4 h-4 bg-[#3b82f6] rounded-full animate-pulse"></div>
              <div className="absolute bottom-8 left-8 w-3 h-3 bg-[#8b5cf6] rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Team Structure Section */}
      <section className="py-32 relative overflow-hidden">
        {/* Enhanced Professional Background */}
        <div className="absolute inset-0">
          {/* Multi-layered Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-purple-50/25 to-indigo-50/40"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/25 via-blue-50/20 to-purple-50/30"></div>
          
          {/* Professional Floating Geometric Elements */}
          <div className="absolute top-20 left-1/4 w-32 h-32 bg-gradient-to-br from-[#3b82f6]/8 to-[#8b5cf6]/6 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-gradient-to-br from-[#8b5cf6]/8 to-[#3b82f6]/6 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/3 w-28 h-28 bg-gradient-to-br from-[#f59e0b]/6 to-[#10b981]/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
          
          {/* Additional Professional Elements */}
          <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-gradient-to-br from-[#10b981]/6 to-[#3b82f6]/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-1/3 left-1/4 w-36 h-36 bg-gradient-to-br from-[#3b82f6]/5 to-[#8b5cf6]/4 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
          
          {/* Professional Grid Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px)`,
              backgroundSize: '80px 80px'
            }}></div>
          </div>
          
          {/* Professional Diagonal Grid Lines */}
          <div className="absolute inset-0 opacity-3">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(45deg, rgba(139, 92, 246, 0.03) 1px, transparent 1px), linear-gradient(-45deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px)`,
              backgroundSize: '100px 100px'
            }}></div>
          </div>

          {/* Creative Team Network Elements */}
          <div className="absolute inset-0">
            {/* Floating Team Nodes */}
            <div className="absolute top-1/6 left-1/6 w-3 h-3 bg-[#3b82f6]/30 rounded-full animate-pulse"></div>
            <div className="absolute top-1/6 left-1/6 w-6 h-6 border border-[#3b82f6]/20 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
            
            <div className="absolute bottom-1/6 right-1/6 w-3 h-3 bg-[#8b5cf6]/30 rounded-full animate-pulse" style={{animationDelay: '0.7s'}}></div>
            <div className="absolute bottom-1/6 right-1/6 w-6 h-6 border border-[#8b5cf6]/20 rounded-full animate-ping" style={{animationDelay: '1.2s'}}></div>
            
            {/* Professional Connection Lines */}
            <div className="absolute top-1/4 left-1/4 w-20 h-px bg-gradient-to-r from-transparent via-[#3b82f6]/20 to-transparent transform rotate-45 animate-pulse" style={{animationDelay: '0.4s'}}></div>
            <div className="absolute bottom-1/4 right-1/4 w-20 h-px bg-gradient-to-r from-transparent via-[#8b5cf6]/20 to-transparent transform -rotate-45 animate-pulse" style={{animationDelay: '0.9s'}}></div>
            
            {/* Floating Team Documents */}
            <div className="absolute top-1/4 right-1/6 w-8 h-10 bg-gradient-to-br from-white/20 to-[#3b82f6]/10 rounded-lg transform rotate-6 animate-business-float shadow-lg shadow-[#3b82f6]/20"></div>
            <div className="absolute bottom-1/4 left-1/6 w-6 h-8 bg-gradient-to-br from-white/20 to-[#8b5cf6]/10 rounded-lg transform -rotate-6 animate-business-float shadow-lg shadow-[#8b5cf6]/20" style={{animationDelay: '0.8s'}}></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-white/95 to-blue-50/60 backdrop-blur-xl rounded-full border border-white/70 shadow-xl shadow-[#3b82f6]/15 group hover:scale-105 transition-all duration-500 relative overflow-hidden mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-[#3b82f6]/8 to-[#8b5cf6]/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Professional Status Indicator */}
              <div className="relative z-10 w-5 h-5 bg-gradient-to-br from-[#10b981] to-[#3b82f6] rounded-full mr-3 animate-pulse flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <div className="absolute inset-0 bg-white/30 rounded-full animate-ping"></div>
              </div>
              
              <Users className="w-5 h-5 text-[#1e3a8a] mr-3 relative z-10" />
              <span className="text-[#1e3a8a] font-medium text-sm tracking-wide relative z-10">Dedicated Team</span>
              
              <div className="relative z-10 w-2 h-2 bg-[#3b82f6] rounded-full ml-3">
                <div className="absolute inset-0 bg-[#3b82f6]/50 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
              </div>
            </div>
            
            <h2 className="text-7xl font-light text-[#1e3a8a] mb-8 tracking-tight relative group">
              <span className="relative inline-block">
                You Get Your Own
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#3b82f6]/30 to-[#8b5cf6]/30 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
              </span>
              {' '}
              <span className="bg-gradient-to-r from-[#3b82f6] via-[#8b5cf6] to-[#1e3a8a] bg-clip-text text-transparent relative inline-block">
                Team
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" style={{animationDelay: '0.2s'}}></div>
              </span>
            </h2>
            
            <p className="text-xl text-[#1e3a8a]/70 leading-relaxed max-w-3xl mx-auto font-light group hover:text-[#1e3a8a] transition-colors duration-500">
              Each team will carry the best individuals who are taking care of your project with dedication and expertise.
            </p>
            
            {/* Professional Subtitle */}
            <p className="text-lg text-[#1e3a8a]/50 font-medium tracking-wide uppercase mt-6 group">
              <span className="inline-block group-hover:text-[#3b82f6] transition-colors duration-500">Expert Collaboration</span>
              {' '}•{' '}
              <span className="inline-block group-hover:text-[#8b5cf6] transition-colors duration-500">Dedicated Support</span>
              {' '}•{' '}
              <span className="inline-block group-hover:text-[#f59e0b] transition-colors duration-500">Seamless Communication</span>
            </p>
          </div>

          {/* Enhanced Central Team Concept */}
          <div className="relative mb-20">
            <div className="flex justify-center">
              <div className="relative group">
                {/* Enhanced Main Circle */}
                <div className="w-80 h-80 bg-gradient-to-br from-white/95 via-blue-50/40 to-indigo-50/40 rounded-full border-4 border-[#3b82f6]/40 shadow-2xl shadow-[#1e3a8a]/30 flex items-center justify-center relative overflow-hidden group-hover:shadow-3xl group-hover:shadow-[#1e3a8a]/40 transition-all duration-1000">
                  {/* Enhanced Inner Glow */}
                  <div className="absolute inset-4 bg-gradient-to-br from-[#3b82f6]/25 to-[#1e3a8a]/25 rounded-full blur-xl"></div>
                  <div className="absolute inset-8 bg-gradient-to-br from-[#8b5cf6]/20 to-[#3b82f6]/20 rounded-full blur-lg"></div>
                  
                  {/* Enhanced Content */}
                  <div className="text-center relative z-10">
                    <div className="text-2xl font-bold text-[#1e3a8a]/80 mb-2 group-hover:text-[#1e3a8a] transition-colors duration-500">Pay For Just</div>
                    <div className="text-8xl font-black text-[#1e3a8a] mb-2 group-hover:scale-110 transition-transform duration-500">1</div>
                    <div className="text-2xl font-bold text-[#1e3a8a]/80 group-hover:text-[#1e3a8a] transition-colors duration-500">Good Team</div>
                  </div>
                  
                  {/* Enhanced Floating Elements Inside */}
                  <div className="absolute top-8 left-8 w-6 h-6 bg-[#3b82f6] rounded-full shadow-lg shadow-[#3b82f6]/50 group-hover:scale-125 transition-transform duration-500">
                    <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
                  </div>
                  <div className="absolute top-8 right-8 w-4 h-4 bg-[#1e3a8a] rounded-full shadow-lg shadow-[#1e3a8a]/50 group-hover:scale-125 transition-transform duration-500">
                    <div className="absolute inset-0 bg-white/20 rounded-full animate-ping" style={{animationDelay: '0.3s'}}></div>
                  </div>
                  <div className="absolute bottom-8 left-8 w-5 h-5 bg-[#3b82f6] rounded-full shadow-lg shadow-[#3b82f6]/50 group-hover:scale-125 transition-transform duration-500">
                    <div className="absolute inset-0 bg-white/20 rounded-full animate-ping" style={{animationDelay: '0.6s'}}></div>
                  </div>
                  <div className="absolute bottom-8 right-8 w-3 h-3 bg-[#1e3a8a] rounded-full shadow-lg shadow-[#1e3a8a]/50 group-hover:scale-125 transition-transform duration-500">
                    <div className="absolute inset-0 bg-white/20 rounded-full animate-ping" style={{animationDelay: '0.9s'}}></div>
                  </div>
                  
                  {/* Additional Floating Elements */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#8b5cf6] rounded-full animate-pulse group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 border border-[#8b5cf6]/30 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                </div>
                
                {/* Enhanced Orbiting Elements */}
                <div className="absolute inset-0 rounded-full border border-[#3b82f6]/30 animate-spin group-hover:border-[#3b82f6]/50 transition-all duration-1000" style={{animationDuration: '30s'}}>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#3b82f6] rounded-full shadow-lg shadow-[#3b82f6]/50 group-hover:scale-125 transition-transform duration-500"></div>
                </div>
                <div className="absolute inset-0 rounded-full border border-[#1e3a8a]/25 animate-spin group-hover:border-[#1e3a8a]/45 transition-all duration-1000" style={{animationDuration: '25s', animationDirection: 'reverse'}}>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#1e3a8a] rounded-full shadow-lg shadow-[#1e3a8a]/50 group-hover:scale-125 transition-transform duration-500"></div>
                </div>
                <div className="absolute inset-0 rounded-full border border-[#8b5cf6]/20 animate-spin group-hover:border-[#8b5cf6]/40 transition-all duration-1000" style={{animationDuration: '35s'}}>
                  <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#8b5cf6] rounded-full shadow-lg shadow-[#8b5cf6]/50 group-hover:scale-125 transition-transform duration-500"></div>
                </div>
                
                {/* Enhanced Background Glow */}
                <div className="absolute -inset-8 bg-gradient-to-br from-[#3b82f6]/20 to-[#8b5cf6]/15 rounded-full blur-3xl animate-pulse group-hover:scale-110 transition-transform duration-1000"></div>
              </div>
            </div>
          </div>

          {/* New Team Structure Design */}
          <div className="relative">
            {/* Main Team Structure Container */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Side - Team Roles */}
              <div className="space-y-12">
                {/* Enhanced Account Manager */}
                <div className="group relative">
                  <div className="flex items-start space-x-6 p-8 rounded-3xl bg-gradient-to-r from-white/95 to-blue-50/40 backdrop-blur-xl border border-white/70 hover:from-white/98 hover:to-blue-50/60 transition-all duration-700 transform hover:-translate-y-3 hover:scale-[1.02] shadow-lg shadow-[#3b82f6]/10 hover:shadow-2xl hover:shadow-[#3b82f6]/20 relative overflow-hidden">
                    {/* Enhanced Background Animation */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#3b82f6]/5 to-[#8b5cf6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    
                    {/* Enhanced Icon Container */}
                    <div className="relative flex-shrink-0">
                      <div className="w-20 h-20 bg-gradient-to-br from-[#3b82f6] to-[#1e3a8a] rounded-2xl flex items-center justify-center shadow-2xl shadow-[#1e3a8a]/30 group-hover:scale-110 transition-transform duration-500 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                        <UserCheck className="w-10 h-10 text-white relative z-10" />
                        
                        {/* Enhanced Floating accent */}
                        <div className="absolute -top-3 -right-3 w-5 h-5 bg-[#3b82f6] rounded-full animate-pulse shadow-lg shadow-[#3b82f6]/50">
                          <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
                        </div>
                      </div>
                      
                      {/* Additional Floating Elements */}
                      <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-[#8b5cf6] rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    </div>
                    
                    {/* Enhanced Content */}
                    <div className="flex-1 relative z-10">
                      <h3 className="text-2xl font-medium text-[#1e3a8a] mb-3 group-hover:text-[#3b82f6] transition-colors duration-500 relative">
                        Account Manager
                        <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] group-hover:w-full transition-all duration-500 origin-left"></div>
                      </h3>
                      <p className="text-[#1e3a8a]/80 text-lg leading-relaxed font-light group-hover:text-[#1e3a8a] transition-colors duration-500">
                        Your dedicated point of contact who ensures smooth communication and project coordination.
                      </p>
                      
                      {/* Professional Feature Points */}
                      <div className="flex items-center space-x-4 mt-4">
                        <div className="flex items-center space-x-2 text-[#3b82f6]">
                          <CheckCircle2 className="w-4 h-4" />
                          <span className="text-sm font-medium">Communication</span>
                        </div>
                        <div className="flex items-center space-x-2 text-[#8b5cf6]">
                          <CheckCircle2 className="w-4 h-4" />
                          <span className="text-sm font-medium">Coordination</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Enhanced Border Animation */}
                    <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#3b82f6]/20 transition-all duration-700"></div>
                  </div>
                </div>

                {/* Enhanced Development Member */}
                <div className="group relative">
                  <div className="flex items-start space-x-6 p-8 rounded-3xl bg-gradient-to-r from-white/95 to-indigo-50/40 backdrop-blur-xl border border-white/70 hover:from-white/98 hover:to-indigo-50/60 transition-all duration-700 transform hover:-translate-y-3 hover:scale-[1.02] shadow-lg shadow-[#1e3a8a]/10 hover:shadow-2xl hover:shadow-[#1e3a8a]/20 relative overflow-hidden">
                    {/* Enhanced Background Animation */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a8a]/5 to-[#3b82f6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    
                    {/* Enhanced Icon Container */}
                    <div className="relative flex-shrink-0">
                      <div className="w-20 h-20 bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] rounded-2xl flex items-center justify-center shadow-2xl shadow-[#1e3a8a]/30 group-hover:scale-110 transition-transform duration-500 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                        <Code2 className="w-10 h-10 text-white relative z-10" />
                        
                        {/* Enhanced Floating accent */}
                        <div className="absolute -top-3 -right-3 w-5 h-5 bg-[#1e3a8a] rounded-full animate-pulse shadow-lg shadow-[#1e3a8a]/50">
                          <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
                        </div>
                      </div>
                      
                      {/* Additional Floating Elements */}
                      <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-[#3b82f6] rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    </div>
                    
                    {/* Enhanced Content */}
                    <div className="flex-1 relative z-10">
                      <h3 className="text-2xl font-medium text-[#1e3a8a] mb-3 group-hover:text-[#3b82f6] transition-colors duration-500 relative">
                        Development Member
                        <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] group-hover:w-full transition-all duration-500 origin-left"></div>
                      </h3>
                      <p className="text-[#1e3a8a]/80 text-lg leading-relaxed font-light group-hover:text-[#1e3a8a] transition-colors duration-500">
                        Skilled developers who bring your ideas to life with clean, scalable code and modern technologies.
                      </p>
                      
                      {/* Professional Feature Points */}
                      <div className="flex items-center space-x-4 mt-4">
                        <div className="flex items-center space-x-2 text-[#1e3a8a]">
                          <CheckCircle2 className="w-4 h-4" />
                          <span className="text-sm font-medium">Clean Code</span>
                        </div>
                        <div className="flex items-center space-x-4 text-[#3b82f6]">
                          <CheckCircle2 className="w-4 h-4" />
                          <span className="text-sm font-medium">Scalable</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Enhanced Border Animation */}
                    <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#1e3a8a]/20 transition-all duration-700"></div>
                  </div>
                </div>

                {/* Enhanced Designer */}
                <div className="group relative">
                  <div className="flex items-start space-x-6 p-8 rounded-3xl bg-gradient-to-r from-white/95 to-purple-50/40 backdrop-blur-xl border border-white/70 hover:from-white/98 hover:to-purple-50/60 transition-all duration-700 transform hover:-translate-y-3 hover:scale-[1.02] shadow-lg shadow-[#8b5cf6]/10 hover:shadow-2xl hover:shadow-[#8b5cf6]/20 relative overflow-hidden">
                    {/* Enhanced Background Animation */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#8b5cf6]/5 to-[#3b82f6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    
                    {/* Enhanced Icon Container */}
                    <div className="relative flex-shrink-0">
                      <div className="w-20 h-20 bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] rounded-2xl flex items-center justify-center shadow-2xl shadow-[#8b5cf6]/30 group-hover:scale-110 transition-transform duration-500 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                        <Palette className="w-10 h-10 text-white relative z-10" />
                        
                        {/* Enhanced Floating accent */}
                        <div className="absolute -top-3 -right-3 w-5 h-5 bg-[#8b5cf6] rounded-full animate-pulse shadow-lg shadow-[#8b5cf6]/50">
                          <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
                        </div>
                      </div>
                      
                      {/* Additional Floating Elements */}
                      <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-[#3b82f6] rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    </div>
                    
                    {/* Enhanced Content */}
                    <div className="flex-1 relative z-10">
                      <h3 className="text-2xl font-medium text-[#1e3a8a] mb-3 group-hover:text-[#8b5cf6] transition-colors duration-500 relative">
                        Designer
                        <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] group-hover:w-full transition-all duration-500 origin-left"></div>
                      </h3>
                      <p className="text-[#1e3a8a]/80 text-lg leading-relaxed font-light group-hover:text-[#1e3a8a] transition-colors duration-500">
                        Creative designers who craft beautiful, user-friendly interfaces that engage and convert your audience.
                      </p>
                      
                      {/* Professional Feature Points */}
                      <div className="flex items-center space-x-4 mt-4">
                        <div className="flex items-center space-x-2 text-[#8b5cf6]">
                          <CheckCircle2 className="w-4 h-4" />
                          <span className="text-sm font-medium">Beautiful</span>
                        </div>
                        <div className="flex items-center space-x-2 text-[#3b82f6]">
                          <CheckCircle2 className="w-4 h-4" />
                          <span className="text-sm font-medium">User-Friendly</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Enhanced Border Animation */}
                    <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#8b5cf6]/20 transition-all duration-700"></div>
                  </div>
                </div>

                {/* Enhanced Project Strategist */}
                <div className="group relative">
                  <div className="flex items-start space-x-6 p-8 rounded-3xl bg-gradient-to-r from-white/95 to-amber-50/40 backdrop-blur-xl border border-white/70 hover:from-white/98 hover:to-amber-50/60 transition-all duration-700 transform hover:-translate-y-3 hover:scale-[1.02] shadow-lg shadow-[#f59e0b]/10 hover:shadow-2xl hover:shadow-[#f59e0b]/20 relative overflow-hidden">
                    {/* Enhanced Background Animation */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#f59e0b]/5 to-[#3b82f6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    
                    {/* Enhanced Icon Container */}
                    <div className="relative flex-shrink-0">
                      <div className="w-20 h-20 bg-gradient-to-br from-[#f59e0b] to-[#3b82f6] rounded-2xl flex items-center justify-center shadow-2xl shadow-[#f59e0b]/30 group-hover:scale-110 transition-transform duration-500 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                        <Lightbulb className="w-10 h-10 text-white relative z-10" />
                        
                        {/* Enhanced Floating accent */}
                        <div className="absolute -top-3 -right-3 w-5 h-5 bg-[#f59e0b] rounded-full animate-pulse shadow-lg shadow-[#f59e0b]/50">
                          <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
                        </div>
                      </div>
                      
                      {/* Additional Floating Elements */}
                      <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-[#3b82f6] rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    </div>
                    
                    {/* Enhanced Content */}
                    <div className="flex-1 relative z-10">
                      <h3 className="text-2xl font-medium text-[#1e3a8a] mb-3 group-hover:text-[#f59e0b] transition-colors duration-500 relative">
                        Project Strategist
                        <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#f59e0b] to-[#3b82f6] group-hover:w-full transition-all duration-500 origin-left"></div>
                      </h3>
                      <p className="text-[#1e3a8a]/80 text-lg leading-relaxed font-light group-hover:text-[#1e3a8a] transition-colors duration-500">
                        Strategic thinkers who plan the roadmap and ensure your project achieves maximum impact and ROI.
                      </p>
                      
                      {/* Professional Feature Points */}
                      <div className="flex items-center space-x-4 mt-4">
                        <div className="flex items-center space-x-2 text-[#f59e0b]">
                          <CheckCircle2 className="w-4 h-4" />
                          <span className="text-sm font-medium">Strategy</span>
                        </div>
                        <div className="flex items-center space-x-2 text-[#3b82f6]">
                          <CheckCircle2 className="w-4 h-4" />
                          <span className="text-sm font-medium">ROI Focus</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Enhanced Border Animation */}
                    <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#f59e0b]/20 transition-all duration-700"></div>
                  </div>
                </div>
              </div>

              {/* Enhanced Right Side - Interactive Team Flow with Technical Globe Design */}
              <div className="relative group">
                <div className="w-[28rem] h-[28rem] mx-auto bg-gradient-to-br from-white/95 via-blue-50/40 to-purple-50/40 rounded-full border border-white/70 backdrop-blur-xl p-10 relative overflow-hidden shadow-xl shadow-[#3b82f6]/20 hover:shadow-2xl hover:shadow-[#3b82f6]/30 transition-all duration-700">
                  {/* Enhanced Background Pattern */}
                  <div className="absolute inset-0 opacity-15">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `radial-gradient(circle at 25% 25%, #1e3a8a 1px, transparent 1px)`,
                      backgroundSize: '30px 30px'
                    }}></div>
                  </div>
                  
                  {/* Creative Background Grid */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `linear-gradient(45deg, #3b82f6 1px, transparent 1px), linear-gradient(-45deg, #8b5cf6 1px, transparent 1px)`,
                      backgroundSize: '20px 20px'
                    }}></div>
                  </div>
                  
                  {/* Enhanced Background Animation */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#3b82f6]/5 via-[#8b5cf6]/5 to-[#f59e0b]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  {/* Creative Technical Globe Background Elements */}
                  <div className="absolute inset-0 overflow-hidden">
                    {/* Enhanced Globe Meridians and Parallels with Creative Effects */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-2 border-[#3b82f6] rounded-full animate-pulse" style={{animationDelay: '0s'}}></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border-2 border-[#3b82f6] rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-[#3b82f6] rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
                    
                    {/* Creative Vertical Meridian Lines with Glow */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-96 bg-gradient-to-b from-[#3b82f6] via-[#8b5cf6] to-[#3b82f6] animate-pulse" style={{animationDelay: '0.2s'}}></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-80 bg-gradient-to-b from-[#8b5cf6] via-[#3b82f6] to-[#8b5cf6] animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    
                    {/* Creative Horizontal Parallel Lines with Glow */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-1 bg-gradient-to-r from-[#3b82f6] via-[#8b5cf6] to-[#3b82f6] animate-pulse" style={{animationDelay: '0.4s'}}></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-1 bg-gradient-to-r from-[#8b5cf6] via-[#3b82f6] to-[#8b5cf6] animate-pulse" style={{animationDelay: '0.7s'}}></div>
                    
                    {/* Creative Diagonal Grid Lines with Rotation */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-2 border-[#3b82f6] rounded-full animate-spin" style={{animationDuration: '25s'}}></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-2 border-[#8b5cf6] rounded-full animate-spin" style={{animationDuration: '30s', animationDirection: 'reverse'}}></div>
                    
                    {/* Creative Floating Data Particles with Enhanced Effects */}
                    <div className="absolute top-10 left-10 w-2 h-2 bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] rounded-full animate-bounce shadow-lg shadow-[#3b82f6]/50" style={{animationDelay: '0s'}}>
                      <div className="absolute inset-0 bg-white/30 rounded-full animate-ping"></div>
                    </div>
                    <div className="absolute top-16 right-16 w-2.5 h-2.5 bg-gradient-to-br from-[#8b5cf6] to-[#f59e0b] rounded-full animate-bounce shadow-lg shadow-[#8b5cf6]/50" style={{animationDelay: '0.3s'}}>
                      <div className="absolute inset-0 bg-white/30 rounded-full animate-ping"></div>
                    </div>
                    <div className="absolute top-24 left-1/3 w-2 h-2 bg-gradient-to-br from-[#f59e0b] to-[#10b981] rounded-full animate-bounce shadow-lg shadow-[#8b5cf6]/50" style={{animationDelay: '0.6s'}}>
                      <div className="absolute inset-0 bg-white/30 rounded-full animate-ping"></div>
                    </div>
                    <div className="absolute top-32 right-1/4 w-2.5 h-2.5 bg-gradient-to-br from-[#10b981] to-[#3b82f6] rounded-full animate-bounce shadow-lg shadow-[#10b981]/50" style={{animationDelay: '0.9s'}}>
                      <div className="absolute inset-0 bg-white/30 rounded-full animate-ping"></div>
                    </div>
                    
                    {/* Creative Animated Connection Lines with Enhanced Effects */}
                    <div className="absolute top-20 left-1/4 w-12 h-px bg-gradient-to-r from-transparent via-[#3b82f6] to-transparent transform rotate-45 animate-pulse shadow-lg shadow-[#3b82f6]/30" style={{animationDelay: '0.2s'}}></div>
                    <div className="absolute top-24 right-1/3 w-10 h-px bg-gradient-to-r from-transparent via-[#8b5cf6] to-transparent transform -rotate-45 animate-pulse shadow-lg shadow-[#8b5cf6]/30" style={{animationDelay: '0.5s'}}></div>
                    <div className="absolute top-32 left-1/2 w-14 h-px bg-gradient-to-r from-transparent via-[#f59e0b] to-transparent animate-pulse shadow-lg shadow-[#f59e0b]/30" style={{animationDelay: '0.8s'}}></div>
                    
                    {/* Creative Rotating Geometric Shapes with Enhanced Effects */}
                    <div className="absolute top-1/4 left-6 w-5 h-5 border-2 border-[#3b82f6] rounded-full animate-spin shadow-lg shadow-[#3b82f6]/30" style={{animationDuration: '8s'}}>
                      <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6]/20 to-transparent rounded-full"></div>
                    </div>
                    <div className="absolute top-1/3 right-6 w-4 h-4 border-2 border-[#8b5cf6] rounded-full animate-spin shadow-lg shadow-[#8b5cf6]/30" style={{animationDuration: '6s', animationDirection: 'reverse'}}>
                      <div className="absolute inset-0 bg-gradient-to-br from-[#8b5cf6]/20 to-transparent rounded-full"></div>
                    </div>
                    <div className="absolute bottom-1/4 left-1/4 w-4 h-4 border-2 border-[#f59e0b] rounded-full animate-spin shadow-lg shadow-[#f59e0b]/30" style={{animationDuration: '10s'}}>
                      <div className="absolute inset-0 bg-gradient-to-br from-[#f59e0b]/20 to-transparent rounded-full"></div>
                    </div>
                    
                    {/* Creative Pulsing Rings with Enhanced Effects */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-2 border-[#3b82f6]/20 rounded-full animate-ping shadow-lg shadow-[#3b82f6]/20" style={{animationDuration: '3s'}}></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-2 border-[#8b5cf6]/15 rounded-full animate-ping shadow-lg shadow-[#8b5cf6]/15" style={{animationDuration: '4s', animationDelay: '1s'}}></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 border-2 border-[#f59e0b]/10 rounded-full animate-ping shadow-lg shadow-[#f59e0b]/10" style={{animationDuration: '5s', animationDelay: '2s'}}></div>
                    
                    {/* Creative Orbiting Elements */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 border border-[#3b82f6]/15 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-[#8b5cf6]/10 rounded-full animate-spin" style={{animationDuration: '25s', animationDirection: 'reverse'}}></div>
                    
                    {/* Creative Data Flow Streams */}
                    <div className="absolute top-1/4 left-0 w-6 h-px bg-gradient-to-r from-[#3b82f6] to-transparent transform rotate-45 animate-pulse" style={{animationDelay: '0.1s'}}></div>
                    <div className="absolute top-1/3 right-0 w-6 h-px bg-gradient-to-l from-[#8b5cf6] to-transparent transform -rotate-45 animate-pulse" style={{animationDelay: '0.4s'}}></div>
                    <div className="absolute bottom-1/3 left-0 w-6 h-px bg-gradient-to-r from-[#f59e0b] to-transparent transform rotate-45 animate-pulse" style={{animationDelay: '0.7s'}}></div>
                    <div className="absolute bottom-1/4 right-0 w-6 h-px bg-gradient-to-l from-[#10b981] to-transparent transform -rotate-45 animate-pulse" style={{animationDelay: '1s'}}></div>
                    
                    {/* Creative Floating Icons */}
                    <div className="absolute top-8 left-1/4 w-3 h-3 bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] rounded-full animate-bounce shadow-lg shadow-[#3b82f6]/50">
                      <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
                    </div>
                    <div className="absolute bottom-8 right-1/4 w-3 h-3 bg-gradient-to-br from-[#8b5cf6] to-[#f59e0b] rounded-full animate-bounce shadow-lg shadow-[#8b5cf6]/50">
                      <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
                    </div>
                    
                    {/* Creative Corner Accents */}
                    <div className="absolute top-4 left-4 w-2 h-2 bg-[#3b82f6] rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                    <div className="absolute top-4 right-4 w-2 h-2 bg-[#8b5cf6] rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    <div className="absolute bottom-4 left-4 w-2 h-2 bg-[#f59e0b] rounded-full animate-pulse" style={{animationDelay: '0.8s'}}></div>
                    <div className="absolute bottom-4 right-4 w-2 h-2 bg-[#10b981] rounded-full animate-pulse" style={{animationDelay: '1.1s'}}></div>
                    
                    {/* Creative Energy Waves */}
                    <div className="absolute top-1/2 left-0 w-8 h-px bg-gradient-to-r from-[#3b82f6] via-[#8b5cf6] to-transparent transform -translate-y-1/2 animate-pulse" style={{animationDelay: '0.3s'}}></div>
                    <div className="absolute top-1/2 right-0 w-8 h-px bg-gradient-to-l from-[#f59e0b] via-[#10b981] to-transparent transform -translate-y-1/2 animate-pulse" style={{animationDelay: '0.7s'}}></div>
                    <div className="absolute top-0 left-1/2 w-px h-8 bg-gradient-to-b from-[#3b82f6] via-[#8b5cf6] to-transparent transform -translate-x-1/2 animate-pulse" style={{animationDelay: '0.1s'}}></div>
                    <div className="absolute bottom-0 left-1/2 w-px h-8 bg-gradient-to-t from-[#f59e0b] via-[#10b981] to-transparent transform -translate-x-1/2 animate-pulse" style={{animationDelay: '0.9s'}}></div>
                    
                    {/* Creative Spiral Elements */}
                    <div className="absolute top-1/4 left-1/4 w-6 h-6 border border-[#3b82f6]/30 rounded-full animate-spin" style={{animationDuration: '12s'}}>
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#3b82f6] rounded-full"></div>
                    </div>
                    <div className="absolute bottom-1/4 right-1/4 w-6 h-6 border border-[#8b5cf6]/30 rounded-full animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}>
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#8b5cf6] rounded-full"></div>
                    </div>
                    
                    {/* Creative Pulse Centers */}
                    <div className="absolute top-1/3 left-1/3 w-3 h-3 bg-gradient-to-br from-[#f59e0b] to-[#10b981] rounded-full animate-ping shadow-lg shadow-[#f59e0b]/50">
                      <div className="absolute inset-0 bg-white/40 rounded-full"></div>
                    </div>
                    <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-gradient-to-br from-[#10b981] to-[#3b82f6] rounded-full animate-ping shadow-lg shadow-[#10b981]/50" style={{animationDelay: '0.5s'}}>
                      <div className="absolute inset-0 bg-white/40 rounded-full"></div>
                    </div>
                    
                    {/* Creative Floating Triangles */}
                    <div className="absolute top-12 left-12 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-[#3b82f6] animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    <div className="absolute bottom-12 right-12 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[10px] border-t-[#8b5cf6] animate-bounce" style={{animationDelay: '0.6s'}}></div>
                    
                    {/* Creative Hexagon Elements */}
                    <div className="absolute top-1/2 left-8 w-4 h-4 bg-gradient-to-br from-[#f59e0b] to-[#10b981] transform rotate-45 animate-pulse" style={{animationDelay: '0.4s'}}>
                      <div className="absolute inset-0 bg-white/20 transform rotate-45"></div>
                    </div>
                    <div className="absolute top-1/2 right-8 w-4 h-4 bg-gradient-to-br from-[#10b981] to-[#3b82f6] transform rotate-45 animate-pulse" style={{animationDelay: '0.8s'}}>
                      <div className="absolute inset-0 bg-white/20 transform rotate-45"></div>
                    </div>
                    
                                      {/* Creative Starburst Effects */}
                  <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-[#3b82f6] rounded-full animate-ping" style={{animationDelay: '0.1s'}}>
                    <div className="absolute inset-0 w-4 h-4 border border-[#3b82f6]/20 rounded-full"></div>
                  </div>
                  <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-[#8b5cf6] rounded-full animate-ping" style={{animationDelay: '0.6s'}}>
                    <div className="absolute inset-0 w-4 h-4 border border-[#8b5cf6]/20 rounded-full"></div>
                  </div>
                  
                  {/* Creative Floating Orbs */}
                  <div className="absolute top-1/6 left-1/6 w-3 h-3 bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] rounded-full animate-bounce shadow-lg shadow-[#3b82f6]/50" style={{animationDelay: '0.2s'}}>
                    <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
                  </div>
                  <div className="absolute bottom-1/6 right-1/6 w-3 h-3 bg-gradient-to-br from-[#f59e0b] to-[#10b981] rounded-full animate-bounce shadow-lg shadow-[#f59e0b]/50" style={{animationDelay: '0.7s'}}>
                    <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
                  </div>
                  
                  {/* Creative Energy Sparks */}
                  <div className="absolute top-1/3 left-0 w-2 h-2 bg-[#3b82f6] rounded-full animate-ping" style={{animationDelay: '0.3s'}}>
                    <div className="absolute inset-0 w-3 h-3 border border-[#3b82f6]/30 rounded-full"></div>
                  </div>
                  <div className="absolute bottom-1/3 right-0 w-2 h-2 bg-[#8b5cf6] rounded-full animate-ping" style={{animationDelay: '0.8s'}}>
                    <div className="absolute inset-0 w-3 h-3 border border-[#8b5cf6]/30 rounded-full"></div>
                  </div>
                  
                  {/* Creative Floating Diamonds */}
                  <div className="absolute top-1/2 left-4 w-2 h-2 bg-gradient-to-br from-[#f59e0b] to-[#10b981] transform rotate-45 animate-pulse" style={{animationDelay: '0.4s'}}>
                    <div className="absolute inset-0 bg-white/20 transform rotate-45"></div>
                  </div>
                  <div className="absolute top-1/2 right-4 w-2 h-2 bg-gradient-to-br from-[#10b981] to-[#3b82f6] transform rotate-45 animate-pulse" style={{animationDelay: '0.9s'}}>
                    <div className="absolute inset-0 bg-white/20 transform rotate-45"></div>
                  </div>
                </div>
                  
                  {/* Team Flow Visualization */}
                  <div className="relative z-10 h-full flex flex-col justify-center">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-light text-[#1e3a8a] mb-3 group-hover:text-[#3b82f6] transition-colors duration-500 relative">
                        Team Synergy
                        {/* Creative Underline Animation */}
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#3b82f6] via-[#8b5cf6] to-[#f59e0b] group-hover:w-full transition-all duration-700 origin-center rounded-full"></div>
                      </h3>
                      <p className="text-[#1e3a8a]/70 text-base font-light group-hover:text-[#1e3a8a] transition-colors duration-500">How we work together</p>
                    </div>
                    
                    {/* Enhanced Flow Diagram with Creative Animations */}
                    <div className="relative">
                      {/* Enhanced Central Hub with Creative Effects */}
                      <div className="w-16 h-16 bg-gradient-to-br from-[#3b82f6] to-[#1e3a8a] rounded-full mx-auto flex items-center justify-center shadow-2xl shadow-[#1e3a8a]/30 mb-6 group-hover:scale-110 transition-transform duration-500 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
                        <Users className="w-8 h-8 text-white relative z-10" />
                        
                        {/* Enhanced Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6]/20 to-[#1e3a8a]/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-500"></div>
                        
                        {/* Creative Rotating Elements Inside */}
                        <div className="absolute inset-1 border border-white/20 rounded-full animate-spin" style={{animationDuration: '4s'}}></div>
                        <div className="absolute inset-2 border border-white/10 rounded-full animate-spin" style={{animationDuration: '6s', animationDirection: 'reverse'}}></div>
                        
                        {/* Floating Dots Around Center */}
                        <div className="absolute -top-0.5 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-[#8b5cf6] rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
                        <div className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-[#f59e0b] rounded-full animate-bounce" style={{animationDelay: '0.3s'}}></div>
                        <div className="absolute top-1/2 -left-0.5 transform -translate-y-1/2 w-1.5 h-1.5 bg-[#10b981] rounded-full animate-bounce" style={{animationDelay: '0.6s'}}></div>
                        <div className="absolute top-1/2 -right-0.5 transform -translate-y-1/2 w-1.5 h-1.5 bg-[#3b82f6] rounded-full animate-bounce" style={{animationDelay: '0.9s'}}></div>
                      </div>
                      
                      {/* Enhanced Connecting Lines with Creative Animations */}
                      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-px h-12 bg-gradient-to-b from-[#3b82f6] to-transparent group-hover:from-[#3b82f6] group-hover:to-[#8b5cf6] transition-all duration-500">
                        {/* Animated Dots Moving Down */}
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#3b82f6] rounded-full animate-bounce" style={{animationDuration: '2s', animationDelay: '0s'}}></div>
                        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#8b5cf6] rounded-full animate-bounce" style={{animationDuration: '2s', animationDelay: '0.5s'}}></div>
                        <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#f59e0b] rounded-full animate-bounce" style={{animationDuration: '2s', animationDelay: '1s'}}></div>
                      </div>
                      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-px h-12 bg-gradient-to-b from-transparent to-[#1e3a8a] group-hover:from-[#8b5cf6] group-hover:to-[#1e3a8a] transition-all duration-500"></div>
                      
                      {/* Enhanced Role Indicators with Creative Animations */}
                      <div className="flex justify-between items-center px-4">
                        <div className="text-center group">
                          <div className="relative">
                            <div className="w-2.5 h-2.5 bg-[#3b82f6] rounded-full mb-1.5 animate-pulse group-hover:scale-125 transition-transform duration-300">
                              <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
                            </div>
                            {/* Creative Orbiting Elements */}
                            <div className="absolute inset-0 w-5 h-5 border border-[#3b82f6]/20 rounded-full animate-spin" style={{animationDuration: '3s'}}></div>
                            <div className="absolute inset-0 w-7 h-7 border border-[#3b82f6]/10 rounded-full animate-spin" style={{animationDuration: '5s', animationDirection: 'reverse'}}></div>
                            {/* Creative Pulse Rings */}
                            <div className="absolute inset-0 w-9 h-9 border border-[#3b82f6]/5 rounded-full animate-ping" style={{animationDuration: '2s'}}></div>
                          </div>
                          <span className="text-xs font-light text-[#1e3a8a]/70 group-hover:text-[#3b82f6] transition-colors duration-300">Strategy</span>
                        </div>
                        <div className="text-center group">
                          <div className="relative">
                            <div className="w-2.5 h-2.5 bg-[#1e3a8a] rounded-full mb-1.5 animate-pulse group-hover:scale-125 transition-transform duration-300" style={{animationDelay: '0.5s'}}>
                              <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
                            </div>
                            {/* Creative Orbiting Elements */}
                            <div className="absolute inset-0 w-5 h-5 border border-[#1e3a8a]/20 rounded-full animate-spin" style={{animationDuration: '4s'}}></div>
                            <div className="absolute inset-0 w-7 h-7 border border-[#1e3a8a]/10 rounded-full animate-spin" style={{animationDuration: '6s', animationDirection: 'reverse'}}></div>
                            {/* Creative Pulse Rings */}
                            <div className="absolute inset-0 w-9 h-9 border border-[#1e3a8a]/5 rounded-full animate-ping" style={{animationDuration: '2.5s'}}></div>
                          </div>
                          <span className="text-xs font-light text-[#1e3a8a]/70 group-hover:text-[#1e3a8a] transition-colors duration-300">Design</span>
                        </div>
                        <div className="text-center group">
                          <div className="relative">
                            <div className="w-2.5 h-2.5 bg-[#8b5cf6] rounded-full mb-1.5 animate-pulse group-hover:scale-125 transition-transform duration-300" style={{animationDelay: '1s'}}>
                              <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
                            </div>
                            {/* Creative Orbiting Elements */}
                            <div className="absolute inset-0 w-5 h-5 border border-[#8b5cf6]/20 rounded-full animate-spin" style={{animationDuration: '3.5s'}}></div>
                            <div className="absolute inset-0 w-7 h-7 border border-[#8b5cf6]/10 rounded-full animate-spin" style={{animationDuration: '5.5s', animationDirection: 'reverse'}}></div>
                            {/* Creative Pulse Rings */}
                            <div className="absolute inset-0 w-9 h-9 border border-[#8b5cf6]/5 rounded-full animate-ping" style={{animationDuration: '3s'}}></div>
                          </div>
                          <span className="text-xs font-light text-[#1e3a8a]/70 group-hover:text-[#8b5cf6] transition-colors duration-300">Build</span>
                        </div>
                        <div className="text-center group">
                          <div className="relative">
                            <div className="w-2.5 h-2.5 bg-[#f59e0b] rounded-full mb-1.5 animate-pulse group-hover:scale-125 transition-transform duration-300" style={{animationDelay: '1.5s'}}>
                              <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
                            </div>
                            {/* Creative Orbiting Elements */}
                            <div className="absolute inset-0 w-5 h-5 border border-[#f59e0b]/20 rounded-full animate-spin" style={{animationDuration: '4.5s'}}></div>
                            <div className="absolute inset-0 w-7 h-7 border border-[#f59e0b]/10 rounded-full animate-spin" style={{animationDuration: '6.5s', animationDirection: 'reverse'}}></div>
                            {/* Creative Pulse Rings */}
                            <div className="absolute inset-0 w-9 h-9 border border-[#f59e0b]/5 rounded-full animate-ping" style={{animationDuration: '3.5s'}}></div>
                          </div>
                          <span className="text-xs font-light text-[#1e3a8a]/70 group-hover:text-[#f59e0b] transition-colors duration-300">Launch</span>
                        </div>
                      </div>
                      
                      {/* Creative Connection Arcs */}
                      <div className="absolute top-1/2 left-1/4 w-12 h-6 border-t-2 border-l-2 border-r-2 border-[#3b82f6]/20 rounded-t-full transform rotate-45 animate-pulse" style={{animationDelay: '0.2s'}}></div>
                      <div className="absolute top-1/2 right-1/4 w-12 h-6 border-t-2 border-l-2 border-r-2 border-[#f59e0b]/20 rounded-t-full transform -rotate-45 animate-pulse" style={{animationDelay: '0.7s'}}></div>
                    </div>
                  </div>
                  
                  {/* Enhanced Floating Elements with Creative Animations */}
                  <div className="absolute top-8 right-8 w-3 h-3 bg-[#3b82f6] rounded-full shadow-lg shadow-[#3b82f6]/50 group-hover:scale-125 transition-transform duration-300">
                    <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
                    {/* Creative Orbiting Ring */}
                    <div className="absolute inset-0 w-6 h-6 border border-[#3b82f6]/20 rounded-full animate-spin" style={{animationDuration: '3s'}}></div>
                  </div>
                  <div className="absolute bottom-8 left-8 w-2.5 h-2.5 bg-[#1e3a8a] rounded-full animate-pulse shadow-lg shadow-[#1e3a8a]/50 group-hover:scale-125 transition-transform duration-300">
                    <div className="absolute inset-0 bg-white/20 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                    {/* Creative Orbiting Ring */}
                    <div className="absolute inset-0 w-5 h-5 border border-[#1e3a8a]/20 rounded-full animate-spin" style={{animationDuration: '4s', animationDirection: 'reverse'}}></div>
                  </div>
                  
                  {/* Additional Creative Floating Elements */}
                  <div className="absolute top-1/4 left-8 w-1.5 h-1.5 bg-[#8b5cf6] rounded-full animate-pulse" style={{animationDelay: '0.7s'}}></div>
                  <div className="absolute bottom-1/4 right-8 w-1.5 h-1.5 bg-[#f59e0b] rounded-full animate-pulse" style={{animationDelay: '1s'}}>
                    <div className="absolute inset-0 w-3 h-3 border border-[#f59e0b]/20 rounded-full animate-ping"></div>
                  </div>
                  
                  {/* Creative Floating Stars */}
                  <div className="absolute top-1/6 right-1/6 w-2 h-2 bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] transform rotate-45 animate-pulse" style={{animationDelay: '0.4s'}}>
                    <div className="absolute inset-0 bg-white/20 transform rotate-45"></div>
                  </div>
                  <div className="absolute bottom-1/6 left-1/6 w-2 h-2 bg-gradient-to-br from-[#f59e0b] to-[#10b981] transform rotate-45 animate-pulse" style={{animationDelay: '0.9s'}}>
                    <div className="absolute inset-0 bg-white/20 transform rotate-45"></div>
                  </div>
                  
                  {/* Creative Energy Lines */}
                  <div className="absolute top-1/3 left-0 w-4 h-px bg-gradient-to-r from-[#3b82f6] to-transparent transform rotate-45 animate-pulse" style={{animationDelay: '0.2s'}}></div>
                  <div className="absolute bottom-1/3 right-0 w-4 h-px bg-gradient-to-l from-[#8b5cf6] to-transparent transform -rotate-45 animate-pulse" style={{animationDelay: '0.7s'}}></div>
                  
                  {/* Creative Corner Glows */}
                  <div className="absolute top-2 left-2 w-1 h-1 bg-[#3b82f6] rounded-full animate-pulse" style={{animationDelay: '0.1s'}}></div>
                  <div className="absolute top-2 right-2 w-1 h-1 bg-[#8b5cf6] rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
                  <div className="absolute bottom-2 left-2 w-1 h-1 bg-[#f59e0b] rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
                  <div className="absolute bottom-2 right-2 w-1 h-1 bg-[#10b981] rounded-full animate-pulse" style={{animationDelay: '0.8s'}}></div>
                  
                  {/* Creative Data Flow Lines */}
                  <div className="absolute top-1/3 left-0 w-8 h-px bg-gradient-to-r from-[#3b82f6]/30 to-transparent transform rotate-45 animate-pulse" style={{animationDelay: '0.4s'}}></div>
                  <div className="absolute bottom-1/3 right-0 w-8 h-px bg-gradient-to-l from-[#f59e0b]/30 to-transparent transform -rotate-45 animate-pulse" style={{animationDelay: '0.9s'}}></div>
                  
                  {/* Enhanced Border Animation with Creative Effects */}
                  <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-[#3b82f6]/20 transition-all duration-700"></div>
                  
                  {/* Creative Corner Accents - Removed for circular design */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New 4th Section - "All It Takes Is Just 4 Steps" */}
      <section className="py-32 relative overflow-hidden">
        {/* Enhanced Animated Background */}
        <div className="absolute inset-0">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-purple-50/15 to-indigo-50/20"></div>
          
          {/* Floating Geometric Elements */}
          <div className="absolute top-20 left-1/4 w-40 h-40 bg-gradient-to-br from-[#3b82f6]/6 to-[#8b5cf6]/6 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-1/4 w-32 h-32 bg-gradient-to-br from-[#8b5cf6]/6 to-[#f59e0b]/6 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/3 w-28 h-28 bg-gradient-to-br from-[#f59e0b]/5 to-[#10b981]/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
          
          {/* Additional Floating Elements */}
          <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-gradient-to-br from-[#10b981]/5 to-[#3b82f6]/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-1/3 left-1/4 w-36 h-36 bg-gradient-to-br from-[#3b82f6]/4 to-[#8b5cf6]/4 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
          
          {/* Animated Grid Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px)`,
              backgroundSize: '80px 80px'
            }}></div>
          </div>
          
          {/* Diagonal Grid Lines */}
          <div className="absolute inset-0 opacity-3">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(45deg, rgba(139, 92, 246, 0.03) 1px, transparent 1px), linear-gradient(-45deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px)`,
              backgroundSize: '100px 100px'
            }}></div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-24">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-white/90 to-blue-50/50 backdrop-blur-xl rounded-full border border-white/60 shadow-lg shadow-[#3b82f6]/10 group hover:scale-105 transition-all duration-500 mb-8">
              <div className="w-2 h-2 bg-[#3b82f6] rounded-full mr-3"></div>
              <span className="text-[#1e3a8a] font-light text-sm tracking-wide">Simple Process</span>
            </div>
            <h2 className="text-7xl font-light text-[#1e3a8a] mb-8 tracking-tight">
              All It Takes Is Just{' '}
              <span className="bg-gradient-to-r from-[#3b82f6] via-[#8b5cf6] to-[#1e3a8a] bg-clip-text text-transparent">4 Steps</span>
            </h2>
            <p className="text-xl text-[#1e3a8a]/70 leading-relaxed max-w-3xl mx-auto font-light">
              We&apos;ve simplified the journey to success.
            </p>
          </div>

          {/* Modern 4-Step Process Flow */}
          <div className="relative">
            {/* Central Timeline Container */}
            <div className="relative max-w-4xl mx-auto">
              {/* Central Timeline Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#3b82f6] via-[#8b5cf6] via-[#f59e0b] to-[#10b981] transform -translate-x-1/2">
                {/* Enhanced Timeline Effect */}
                <div className="absolute inset-0" style={{
                  background: 'linear-gradient(180deg, #3b82f6 0%, #8b5cf6 25%, #f59e0b 50%, #10b981 75%, #3b82f6 100%)',
                  filter: 'blur(1px)',
                  transform: 'scaleY(1.2)',
                  borderRadius: '50%'
                }}></div>
              </div>
              
              {/* Step 1: We Understand First, Always */}
              <div className="relative mb-32">
                <div className="flex items-center">
                  {/* Left Side - Content */}
                  <div className="w-1/2 pr-16 text-right space-y-6">
                    <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#3b82f6]/10 to-[#8b5cf6]/10 rounded-full border border-[#3b82f6]/20">
                      <span className="text-[#3b82f6] text-sm font-medium">Step 1</span>
                    </div>
                    <h3 className="text-4xl font-light text-[#1e3a8a] leading-tight">
                      We Understand First,{' '}
                      <span className="bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] bg-clip-text text-transparent">Always.</span>
                    </h3>
                    <p className="text-lg text-[#1e3a8a]/70 leading-relaxed font-light">
                      We start by getting to know your business, your goals, and what actually matters to you.
                    </p>
                    <p className="text-sm text-[#3b82f6] font-light italic">
                      All it takes is a good conversation (and maybe a few strong coffees)
                    </p>
                  </div>
                  
                  {/* Center - Step Number Circle */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-24 h-24 bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] rounded-full flex items-center justify-center shadow-2xl shadow-[#3b82f6]/40 group-hover:scale-110 transition-transform duration-700 border-4 border-white">
                      <span className="text-4xl font-light text-white">1</span>
                    </div>
                    {/* Floating Accent Elements */}
                    <div className="absolute -top-2 -left-2 w-4 h-4 bg-gradient-to-br from-[#f59e0b] to-[#3b82f6] rounded-full animate-pulse shadow-lg shadow-[#f59e0b]/50"></div>
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-gradient-to-br from-[#10b981] to-[#8b5cf6] rounded-full animate-pulse shadow-lg shadow-[#10b981]/50"></div>
                  </div>
                  
                  {/* Right Side - Visual */}
                  <div className="w-1/2 pl-16">
                    <div className="relative w-64 h-64 mx-auto">
                      {/* Background Glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6]/20 to-[#8b5cf6]/20 rounded-full blur-3xl animate-pulse"></div>
                      
                      {/* Orbiting Elements */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="absolute w-32 h-32 border border-[#3b82f6]/25 rounded-full animate-spin" style={{animationDuration: '20s'}}>
                          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#3b82f6] rounded-full shadow-lg shadow-[#3b82f6]/50"></div>
                        </div>
                        <div className="absolute w-48 h-48 border border-[#8b5cf6]/20 rounded-full animate-spin" style={{animationDuration: '30s', animationDirection: 'reverse'}}>
                          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#8b5cf6] rounded-full shadow-lg shadow-[#8b5cf6]/50"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2: Strategy Time! */}
              <div className="relative mb-32">
                <div className="flex items-center">
                  {/* Left Side - Visual */}
                  <div className="w-1/2 pr-16">
                    <div className="relative w-64 h-64 mx-auto">
                      {/* Background Glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#8b5cf6]/20 to-[#f59e0b]/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
                      
                      {/* Creative Network Pattern */}
                      <div className="absolute inset-0">
                        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-[#8b5cf6] rounded-full animate-pulse"></div>
                        <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-[#f59e0b] rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
                        <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-[#3b82f6] rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
                        <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-[#10b981] rounded-full animate-pulse" style={{animationDelay: '0.9s'}}></div>
                        
                        {/* Connection Lines */}
                        <div className="absolute top-1/4 left-1/4 w-12 h-0.5 bg-gradient-to-r from-[#8b5cf6] to-[#f59e0b] transform rotate-45 origin-left"></div>
                        <div className="absolute top-1/4 right-1/4 w-12 h-0.5 bg-gradient-to-r from-[#f59e0b] to-[#3b82f6] transform -rotate-45 origin-right"></div>
                        <div className="absolute bottom-1/4 left-1/4 w-12 h-0.5 bg-gradient-to-r from-[#3b82f6] to-[#10b981] transform rotate-12 origin-left"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Center - Step Number Circle */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-24 h-24 bg-gradient-to-br from-[#8b5cf6] to-[#f59e0b] rounded-full flex items-center justify-center shadow-2xl shadow-[#8b5cf6]/40 group-hover:scale-110 transition-transform duration-700 border-4 border-white">
                      <span className="text-4xl font-light text-white">2</span>
                    </div>
                    {/* Floating Accent Elements */}
                    <div className="absolute -top-2 -left-2 w-4 h-4 bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] rounded-full animate-pulse shadow-lg shadow-[#3b82f6]/50"></div>
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-gradient-to-br from-[#10b981] to-[#f59e0b] rounded-full animate-pulse shadow-lg shadow-[#10b981]/50"></div>
                  </div>
                  
                  {/* Right Side - Content */}
                  <div className="w-1/2 pl-16 space-y-6">
                    <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#8b5cf6]/10 to-[#f59e0b]/10 rounded-full border border-[#8b5cf6]/20">
                      <span className="text-[#8b5cf6] text-sm font-medium">Step 2</span>
                    </div>
                    <h3 className="text-4xl font-light text-[#1e3a8a] leading-tight">
                      Strategy Time!{' '}
                      <span className="bg-gradient-to-r from-[#8b5cf6] to-[#f59e0b] bg-clip-text text-transparent">(This is where the magic starts)</span>
                    </h3>
                    <p className="text-lg text-[#1e3a8a]/70 leading-relaxed font-light">
                      We build a smart, tailored growth strategy. Then walk you through it.
                    </p>
                    <p className="text-lg text-[#1e3a8a]/70 leading-relaxed font-light">
                      You&apos;ll share your thoughts, we&apos;ll refine the plan.
                    </p>
                    <p className="text-sm text-[#8b5cf6] font-light italic">
                      Because, you probably know your business better than we do... for now ;)
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3: Deployment */}
              <div className="relative mb-32">
                <div className="flex items-center">
                  {/* Left Side - Content */}
                  <div className="w-1/2 pr-16 text-right space-y-6">
                    <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#f59e0b]/10 to-[#10b981]/10 rounded-full border border-[#f59e0b]/20">
                      <span className="text-[#f59e0b] text-sm font-medium">Step 3</span>
                    </div>
                    <h3 className="text-4xl font-light text-[#1e3a8a] leading-tight">
                      <span className="bg-gradient-to-r from-[#f59e0b] to-[#10b981] bg-clip-text text-transparent">Deployment</span>
                    </h3>
                    <p className="text-lg text-[#1e3a8a]/70 leading-relaxed font-light">
                      Here you will be happy with the work done, team collaborated, the project will go alive in this phase!
                    </p>
                    <p className="text-lg text-[#1e3a8a]/70 leading-relaxed font-light">
                      And nope. We don&apos;t stop here, we monitor the performance and enhance it where necessary.
                    </p>
                    <p className="text-sm text-[#f59e0b] font-light italic">
                      We take your growth very seriously. Count on Us!
                    </p>
                  </div>
                  
                  {/* Center - Step Number Circle */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-24 h-24 bg-gradient-to-br from-[#f59e0b] to-[#10b981] rounded-full flex items-center justify-center shadow-2xl shadow-[#f59e0b]/40 group-hover:scale-110 transition-transform duration-700 border-4 border-white">
                      <span className="text-4xl font-light text-white">3</span>
                    </div>
                    {/* Floating Accent Elements */}
                    <div className="absolute -top-2 -left-2 w-4 h-4 bg-gradient-to-br from-[#8b5cf6] to-[#f59e0b] rounded-full animate-pulse shadow-lg shadow-[#8b5cf6]/50"></div>
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-gradient-to-br from-[#3b82f6] to-[#10b981] rounded-full animate-pulse shadow-lg shadow-[#3b82f6]/50"></div>
                  </div>
                  
                  {/* Right Side - Visual */}
                  <div className="w-1/2 pl-16">
                    <div className="relative w-64 h-64 mx-auto">
                      {/* Background Glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#f59e0b]/20 to-[#10b981]/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
                      
                      {/* Animated Code Blocks */}
                      <div className="absolute inset-0">
                        <div className="absolute top-8 left-8 w-16 h-8 bg-gradient-to-r from-[#3b82f6]/20 to-[#8b5cf6]/20 rounded-lg border border-[#3b82f6]/30 animate-pulse"></div>
                        <div className="absolute top-20 left-8 w-20 h-6 bg-gradient-to-r from-[#8b5cf6]/20 to-[#f59e0b]/20 rounded-lg border border-[#8b5cf6]/30 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                        <div className="absolute top-32 left-8 w-14 h-6 bg-gradient-to-r from-[#f59e0b]/20 to-[#10b981]/20 rounded-lg border border-[#f59e0b]/30 animate-pulse" style={{animationDelay: '1s'}}></div>
                        
                        <div className="absolute bottom-8 right-8 w-18 h-8 bg-gradient-to-r from-[#10b981]/20 to-[#3b82f6]/20 rounded-lg border border-[#10b981]/30 animate-pulse" style={{animationDelay: '0.3s'}}></div>
                        <div className="absolute bottom-20 right-8 w-16 h-6 bg-gradient-to-r from-[#3b82f6]/20 to-[#8b5cf6]/20 rounded-lg border border-[#3b82f6]/30 animate-pulse" style={{animationDelay: '0.8s'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4: Then We Build, Design, And Execute */}
              <div className="relative mb-32">
                <div className="flex items-center">
                  {/* Left Side - Visual */}
                  <div className="w-1/2 pr-16">
                    <div className="relative w-64 h-64 mx-auto">
                      {/* Background Glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#10b981]/20 to-[#3b82f6]/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
                      
                      {/* Growth Chart Elements */}
                      <div className="absolute inset-0">
                        <div className="absolute bottom-8 left-8 w-16 h-20 bg-gradient-to-t from-[#10b981]/30 to-transparent rounded-t-lg border border-[#10b981]/30"></div>
                        <div className="absolute bottom-8 left-32 w-16 h-28 bg-gradient-to-t from-[#3b82f6]/30 to-transparent rounded-t-lg border border-[#3b82f6]/30"></div>
                        <div className="absolute bottom-8 left-56 w-16 h-32 bg-gradient-to-t from-[#8b5cf6]/30 to-transparent rounded-t-lg border border-[#8b5cf6]/30"></div>
                        <div className="absolute bottom-8 left-80 w-16 h-36 bg-gradient-to-t from-[#f59e0b]/30 to-transparent rounded-t-lg border border-[#f59e0b]/30"></div>
                        
                        {/* Growth Line */}
                        <div className="absolute bottom-8 left-8 w-80 h-1 bg-gradient-to-r from-[#10b981] via-[#3b82f6] via-[#8b5cf6] to-[#f59e0b] rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Center - Step Number Circle */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-24 h-24 bg-gradient-to-br from-[#10b981] to-[#3b82f6] rounded-full flex items-center justify-center shadow-2xl shadow-[#10b981]/40 group-hover:scale-110 transition-transform duration-700 border-4 border-white">
                      <span className="text-4xl font-light text-white">4</span>
                    </div>
                    {/* Floating Accent Elements */}
                    <div className="absolute -top-2 -left-2 w-4 h-4 bg-gradient-to-br from-[#f59e0b] to-[#10b981] rounded-full animate-pulse shadow-lg shadow-[#f59e0b]/50"></div>
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-gradient-to-br from-[#8b5cf6] to-[#3b82f6] rounded-full animate-pulse shadow-lg shadow-[#8b5cf6]/50"></div>
                  </div>
                  
                  {/* Right Side - Content */}
                  <div className="w-1/2 pl-16 space-y-6">
                    <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#10b981]/10 to-[#3b82f6]/10 rounded-full border border-[#10b981]/20">
                      <span className="text-[#10b981] text-sm font-medium">Step 4</span>
                    </div>
                    <h3 className="text-4xl font-light text-[#1e3a8a] leading-tight">
                      Then We Build, Design, And{' '}
                      <span className="bg-gradient-to-r from-[#10b981] to-[#3b82f6] bg-clip-text text-transparent">Execute.</span>
                    </h3>
                    <p className="text-lg text-[#1e3a8a]/70 leading-relaxed font-light">
                      Our team starts to work fast and each task goes to the right expert.
                    </p>
                    <p className="text-lg text-[#1e3a8a]/70 leading-relaxed font-light">
                      We track every step to make sure what we promised is exactly what gets delivered.
                    </p>
                    <p className="text-sm text-[#10b981] font-light italic">
                      No fluff. No delays. Just focused execution.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Concluding Statement - Speech Bubble */}
            <div className="text-center relative">
              <div className="relative inline-block">
                {/* Speech Bubble Background */}
                <div className="relative bg-white rounded-3xl border-2 border-[#3b82f6] px-12 py-8 shadow-2xl shadow-[#3b82f6]/20">
                  <h3 className="text-5xl font-light text-[#1e3a8a] mb-4">
                    Of Course, We Are{' '}
                    <span className="bg-gradient-to-r from-[#3b82f6] via-[#8b5cf6] to-[#1e3a8a] bg-clip-text text-transparent">Different.</span>
                  </h3>
                  <p className="text-xl text-[#1e3a8a]/70 font-light">
                    Because exceptional results require an exceptional approach.
                  </p>
                  
                  {/* Speech Bubble Tail */}
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-[#3b82f6]"></div>
                </div>
                
                {/* Floating Accent Elements Around Speech Bubble */}
                <div className="absolute -top-4 -left-4 w-3 h-3 bg-[#3b82f6] rounded-full animate-pulse"></div>
                <div className="absolute -top-4 -right-4 w-3 h-3 bg-[#8b5cf6] rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute -bottom-4 -left-4 w-3 h-3 bg-[#f59e0b] rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute -bottom-4 -right-4 w-3 h-3 bg-[#10b981] rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Business Benefits Section */}
      <section className="py-32 relative overflow-hidden">
        {/* Enhanced Animated Background */}
        <div className="absolute inset-0">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-indigo-50/25 to-purple-50/30"></div>
          
          {/* Floating Geometric Elements */}
          <div className="absolute top-20 left-1/4 w-40 h-40 bg-gradient-to-br from-[#3b82f6]/8 to-[#8b5cf6]/6 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-1/4 w-32 h-32 bg-gradient-to-br from-[#8b5cf6]/8 to-[#f59e0b]/6 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/3 w-28 h-28 bg-gradient-to-br from-[#f59e0b]/6 to-[#10b981]/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
          
          {/* Additional Floating Elements */}
          <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-gradient-to-br from-[#10b981]/6 to-[#3b82f6]/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-1/3 left-1/4 w-36 h-36 bg-gradient-to-br from-[#3b82f6]/5 to-[#8b5cf6]/4 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
          
          {/* Animated Grid Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px)`,
              backgroundSize: '80px 80px'
            }}></div>
          </div>
          
          {/* Diagonal Grid Lines */}
          <div className="absolute inset-0 opacity-3">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(45deg, rgba(139, 92, 246, 0.03) 1px, transparent 1px), linear-gradient(-45deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px)`,
              backgroundSize: '100px 100px'
            }}></div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-24">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-white/90 to-blue-50/50 backdrop-blur-xl rounded-full border border-white/60 shadow-lg shadow-[#3b82f6]/10 group hover:scale-105 transition-all duration-500 mb-8">
              <div className="w-2 h-2 bg-[#3b82f6] rounded-full mr-3"></div>
              <span className="text-[#1e3a8a] font-light text-sm tracking-wide">Why Choose Us</span>
            </div>
            <h2 className="text-7xl font-light text-[#1e3a8a] mb-8 tracking-tight">
              The{' '}
              <span className="bg-gradient-to-r from-[#3b82f6] via-[#8b5cf6] to-[#1e3a8a] bg-clip-text text-transparent">VGS Difference</span>
            </h2>
            <p className="text-xl text-[#1e3a8a]/70 leading-relaxed max-w-3xl mx-auto font-light">
              Experience business transformation with our unique approach to global talent and transparent solutions.
            </p>
          </div>

          {/* Creative Capsule Design with Benefits */}
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Side - Creative Capsule Design */}
            <div className="relative">
              <div className="relative w-96 h-96 mx-auto">
                {/* Animated Background Rings */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6]/20 to-[#8b5cf6]/15 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute inset-4 bg-gradient-to-br from-[#8b5cf6]/15 to-[#f59e0b]/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
                
                {/* Main Capsule Container */}
                <div className="relative w-full h-full">
                  {/* Capsule Shape */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-48 bg-gradient-to-br from-white/90 to-blue-50/80 backdrop-blur-xl rounded-full border border-white/60 shadow-2xl shadow-[#3b82f6]/20">
                    {/* Left Transparent Half */}
                    <div className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-r from-transparent to-blue-50/30 rounded-l-full flex items-center justify-center relative overflow-hidden">
                      {/* Floating Digital Icons */}
                      <div className="relative w-full h-full">
                        {/* Clock/Stopwatch Icon */}
                        <div className="absolute top-8 left-8 w-12 h-12 bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] rounded-full flex items-center justify-center shadow-lg shadow-[#3b82f6]/50 animate-float">
                          <Clock className="w-6 h-6 text-white" />
                        </div>
                        
                        {/* Bar Chart Icon */}
                        <div className="absolute top-20 right-6 w-10 h-10 bg-gradient-to-br from-[#8b5cf6] to-[#f59e0b] rounded-full flex items-center justify-center shadow-lg shadow-[#8b5cf6]/50 animate-float" style={{animationDelay: '0.5s'}}>
                          <BarChart3 className="w-5 h-5 text-white" />
                        </div>
                        
                        {/* Document Icon */}
                        <div className="absolute bottom-16 left-12 w-8 h-8 bg-gradient-to-br from-[#f59e0b] to-[#10b981] rounded-full flex items-center justify-center shadow-lg shadow-[#f59e0b]/50 animate-float" style={{animationDelay: '1s'}}>
                          <FileText className="w-4 h-4 text-white" />
                        </div>
                        
                        {/* Connecting Gears */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 border border-[#3b82f6]/30 rounded-full animate-spin" style={{animationDuration: '20s'}}>
                          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#3b82f6] rounded-full"></div>
                        </div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-[#8b5cf6]/25 rounded-full animate-spin" style={{animationDuration: '30s', animationDirection: 'reverse'}}>
                          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#8b5cf6] rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Right Opaque Half */}
                    <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-r from-blue-50/30 to-[#3b82f6]/40 rounded-r-full"></div>
                  </div>
                  
                  {/* Floating Accent Elements */}
                  <div className="absolute -top-4 -right-4 w-6 h-6 bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] rounded-full shadow-lg shadow-[#3b82f6]/50 animate-pulse"></div>
                  <div className="absolute -bottom-4 -left-4 w-4 h-4 bg-gradient-to-br from-[#8b5cf6] to-[#f59e0b] rounded-full shadow-lg shadow-[#8b5cf6]/50 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <div className="absolute top-1/2 -left-6 w-3 h-3 bg-gradient-to-br from-[#f59e0b] to-[#10b981] rounded-full shadow-lg shadow-[#f59e0b]/50 animate-pulse" style={{animationDelay: '1s'}}></div>
                  <div className="absolute top-1/2 -right-6 w-3 h-3 bg-gradient-to-br from-[#10b981] to-[#3b82f6] rounded-full shadow-lg shadow-[#3b82f6]/50 animate-pulse" style={{animationDelay: '1.5s'}}></div>
                </div>
              </div>
            </div>

            {/* Right Side - Benefits List */}
            <div className="space-y-8">
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-white/60 shadow-lg shadow-[#3b82f6]/10 hover:scale-105 transition-all duration-500">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-2xl font-light text-[#1e3a8a] mb-2">Simple, transparent pricing</h3>
                    <p className="text-[#1e3a8a]/70 font-light leading-relaxed">No hidden fees, no surprises. Know exactly what you&apos;re paying for with our clear, upfront pricing structure.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-white/60 shadow-lg shadow-[#3b82f6]/10 hover:scale-105 transition-all duration-500">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-gradient-to-br from-[#8b5cf6] to-[#f59e0b] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-2xl font-light text-[#1e3a8a] mb-2">Global talent that costs less and delivers more</h3>
                    <p className="text-[#1e3a8a]/70 font-light leading-relaxed">Access world-class professionals at competitive rates without compromising on quality or expertise.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-white/60 shadow-lg shadow-[#3b82f6]/10 hover:scale-105 transition-all duration-500">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-gradient-to-br from-[#f59e0b] to-[#10b981] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-2xl font-light text-[#1e3a8a] mb-2">Flexible team structure</h3>
                    <p className="text-[#1e3a8a]/70 font-light leading-relaxed">Scale your team up or down as needed. We adapt to your business requirements, not the other way around.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-white/60 shadow-lg shadow-[#3b82f6]/10 hover:scale-105 transition-all duration-500">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-gradient-to-br from-[#10b981] to-[#3b82f6] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-2xl font-light text-[#1e3a8a] mb-2">We work like owners, not outsourcers</h3>
                    <p className="text-[#1e3a8a]/70 font-light leading-relaxed">Your success is our success. We&apos;re invested in your growth and treat your business as if it were our own.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Creative Bottom Accent */}
          <div className="text-center mt-20">
            <div className="inline-flex items-center space-x-4 bg-white/80 backdrop-blur-xl rounded-full px-8 py-4 border border-white/60 shadow-lg shadow-[#3b82f6]/10">
              <div className="w-3 h-3 bg-[#3b82f6] rounded-full animate-pulse"></div>
              <span className="text-[#1e3a8a] font-light text-lg">Transforming businesses through transparent partnerships</span>
              <div className="w-3 h-3 bg-[#8b5cf6] rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Testimonial Section */}
      <section className="py-32 relative overflow-hidden">
        {/* Enhanced Creative Animated Background */}
        <div className="absolute inset-0">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/25 via-purple-50/20 to-indigo-50/25"></div>
          
          {/* Creative Floating Geometric Elements */}
          <div className="absolute top-20 left-1/4 w-40 h-40 bg-gradient-to-br from-[#3b82f6]/8 to-[#8b5cf6]/6 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-1/4 w-32 h-32 bg-gradient-to-br from-[#8b5cf6]/8 to-[#f59e0b]/6 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/3 w-28 h-28 bg-gradient-to-br from-[#f59e0b]/6 to-[#10b981]/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
          
          {/* Additional Creative Elements */}
          <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-gradient-to-br from-[#10b981]/6 to-[#3b82f6]/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-1/3 left-1/4 w-36 h-36 bg-gradient-to-br from-[#3b82f6]/5 to-[#8b5cf6]/4 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
          
          {/* Creative Animated Grid Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px)`,
              backgroundSize: '80px 80px'
            }}></div>
          </div>
          
          {/* Creative Diagonal Grid Lines */}
          <div className="absolute inset-0 opacity-3">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(45deg, rgba(139, 92, 246, 0.03) 1px, transparent 1px), linear-gradient(-45deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px)`,
              backgroundSize: '100px 100px'
            }}></div>
          </div>

          {/* Creative Floating Triangles */}
          <div className="absolute top-16 left-16 w-8 h-8 bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] transform rotate-45 animate-float shadow-lg shadow-[#3b82f6]/30"></div>
          <div className="absolute top-32 right-20 w-6 h-6 bg-gradient-to-br from-[#8b5cf6] to-[#f59e0b] transform rotate-45 animate-float" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-24 left-24 w-10 h-10 bg-gradient-to-br from-[#f59e0b] to-[#3b82f6] transform rotate-45 animate-float" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-24">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-white/90 to-blue-50/50 backdrop-blur-xl rounded-full border border-white/60 shadow-lg shadow-[#3b82f6]/10 group hover:scale-105 transition-all duration-500 mb-8">
              <div className="w-2 h-2 bg-[#3b82f6] rounded-full mr-3"></div>
              <span className="text-[#1e3a8a] font-light text-sm tracking-wide">Founder&apos;s Story</span>
            </div>
            <h2 className="text-7xl font-light text-[#1e3a8a] mb-8 tracking-tight">
              Why We&apos;re{' '}
              <span className="bg-gradient-to-r from-[#3b82f6] via-[#8b5cf6] to-[#1e3a8a] bg-clip-text text-transparent">Different</span>
            </h2>
            <p className="text-xl text-[#1e3a8a]/70 leading-relaxed max-w-3xl mx-auto font-light">
              A personal story that drives everything we do at VGS.
            </p>
          </div>

          {/* Creative Testimonial Content */}
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Side - Creative Quote Design */}
            <div className="relative">
              {/* Creative Quote Container */}
              <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-12 border border-white/60 shadow-2xl shadow-[#3b82f6]/20">
                {/* Creative Opening Quote Mark */}
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] rounded-full flex items-center justify-center shadow-2xl shadow-[#3b82f6]/40">
                  <span className="text-white text-3xl font-light">&quot;</span>
                </div>
                
                {/* Creative Quote Content */}
                <div className="relative z-10 space-y-8">
                  <blockquote className="text-2xl text-[#1e3a8a] leading-relaxed font-light">
                    I&apos;ve been the frustrated client, overcharged and let down.
                    <br /><br />
                    That&apos;s why I started VGS, to connect great talent with real trust.
                    <br /><br />
                    Now, we help businesses grow smarter and spend wisely.
                  </blockquote>
                  
                  {/* Creative Attribution */}
                  <div className="flex items-center space-x-4">
                    <div className="w-1 h-8 bg-gradient-to-b from-[#3b82f6] to-[#8b5cf6] rounded-full"></div>
                    <div>
                      <h4 className="text-xl font-light text-[#1e3a8a]">Shanwadeeshan</h4>
                      <p className="text-[#1e3a8a]/70 font-light">Founder & CEO, VGS</p>
                    </div>
                  </div>
                </div>

                {/* Creative Closing Quote Mark */}
                <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-gradient-to-br from-[#8b5cf6] to-[#f59e0b] rounded-full flex items-center justify-center shadow-2xl shadow-[#8b5cf6]/40">
                  <span className="text-white text-3xl font-light">&quot;</span>
                </div>

                {/* Creative Floating Elements Around Quote */}
                <div className="absolute -top-4 -right-4 w-3 h-3 bg-[#3b82f6]/30 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-2 h-2 bg-[#8b5cf6]/30 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute top-1/2 -left-2 w-1 h-1 bg-[#f59e0b]/30 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute top-1/2 -right-2 w-1.5 h-1.5 bg-[#10b981]/30 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
              </div>

              {/* Creative Background Elements */}
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-[#3b82f6]/10 to-[#8b5cf6]/8 rounded-full blur-2xl animate-pulse" style={{animationDelay: '0.3s'}}></div>
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br from-[#8b5cf6]/10 to-[#f59e0b]/8 rounded-full blur-2xl animate-pulse" style={{animationDelay: '0.8s'}}></div>
            </div>

            {/* Right Side - Creative Profile Design */}
            <div className="relative">
              <div className="relative w-96 h-96 mx-auto">
                {/* Creative Multi-layered Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6]/20 to-[#8b5cf6]/15 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute inset-4 bg-gradient-to-br from-[#8b5cf6]/15 to-[#f59e0b]/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute inset-8 bg-gradient-to-br from-[#f59e0b]/10 to-[#10b981]/8 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
                
                {/* Creative Profile Frame */}
                <div className="relative w-full h-full">
                  {/* Outer Ring */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] rounded-full p-3 shadow-2xl shadow-[#1e3a8a]/30">
                    {/* Inner Ring */}
                    <div className="w-full h-full bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] rounded-full p-3">
                      {/* Profile Photo Container */}
                      <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center relative overflow-hidden">
                        {/* Creative Profile Placeholder */}
                        <div className="text-center relative z-10">
                          <div className="w-32 h-32 bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl shadow-[#1e3a8a]/40">
                            <UserCheck className="w-32 h-32 text-white" />
                          </div>
                          <p className="text-[#1e3a8a] font-light text-lg">Professional Photo</p>
                        </div>
                        
                        {/* Creative Background Pattern */}
                        <div className="absolute inset-0 opacity-10">
                          <div className="absolute inset-0" style={{
                            backgroundImage: `radial-gradient(circle at 25% 25%, #1e3a8a 1px, transparent 1px)`,
                            backgroundSize: '30px 30px'
                          }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Creative Orbiting Elements */}
                  <div className="absolute inset-0 rounded-full border border-[#3b82f6]/20 animate-spin" style={{animationDuration: '30s'}}>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#3b82f6] rounded-full shadow-lg shadow-[#3b82f6]/50"></div>
                  </div>
                  <div className="absolute inset-0 rounded-full border border-[#8b5cf6]/15 animate-spin" style={{animationDuration: '25s', animationDirection: 'reverse'}}>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#8b5cf6] rounded-full shadow-lg shadow-[#8b5cf6]/50"></div>
                  </div>
                  <div className="absolute inset-0 rounded-full border border-[#f59e0b]/10 animate-spin" style={{animationDuration: '35s'}}>
                    <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#f59e0b] rounded-full shadow-lg shadow-[#f59e0b]/50"></div>
                  </div>
                </div>

                {/* Creative Floating Accent Elements */}
                <div className="absolute -top-4 -right-4 w-6 h-6 bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] rounded-full shadow-lg shadow-[#3b82f6]/50 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-4 h-4 bg-gradient-to-br from-[#8b5cf6] to-[#f59e0b] rounded-full shadow-lg shadow-[#8b5cf6]/50 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute top-1/2 -left-6 w-3 h-3 bg-gradient-to-br from-[#f59e0b] to-[#10b981] rounded-full shadow-lg shadow-[#f59e0b]/50 animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute top-1/2 -right-6 w-3 h-3 bg-gradient-to-br from-[#10b981] to-[#3b82f6] rounded-full shadow-lg shadow-[#3b82f6]/50 animate-pulse" style={{animationDelay: '1.5s'}}></div>
              </div>

              {/* Creative Connection Lines */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-96 h-96 border border-[#3b82f6]/10 rounded-full animate-spin" style={{animationDuration: '40s'}}></div>
                <div className="w-80 h-80 border border-[#8b5cf6]/8 rounded-full animate-spin" style={{animationDuration: '30s', animationDirection: 'reverse'}}></div>
                <div className="w-64 h-64 border border-[#f59e0b]/6 rounded-full animate-spin" style={{animationDuration: '50s'}}></div>
              </div>
            </div>
          </div>

          {/* Creative Bottom Accent */}
          <div className="text-center mt-20">
            <div className="inline-flex items-center space-x-4 bg-white/80 backdrop-blur-xl rounded-full px-8 py-4 border border-white/60 shadow-lg shadow-[#3b82f6]/10">
              <div className="w-3 h-3 bg-[#3b82f6] rounded-full animate-pulse"></div>
              <span className="text-[#1e3a8a] font-light text-lg">Building trust through transparency</span>
              <div className="w-3 h-3 bg-[#8b5cf6] rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Creative Process Slider Section */}
      <section className="py-32 relative overflow-hidden">
        {/* Enhanced Animated Background */}
        <div className="absolute inset-0">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/30 via-purple-50/20 to-blue-50/30"></div>
          
          {/* Floating Geometric Shapes */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[#3b82f6]/8 to-[#8b5cf6]/8 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-[#8b5cf6]/8 to-[#3b82f6]/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-[#3b82f6]/6 to-[#1e3a8a]/6 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
          
          {/* Additional Floating Elements */}
          <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-gradient-to-br from-[#8b5cf6]/6 to-[#f59e0b]/6 rounded-full blur-2xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-1/3 left-1/3 w-28 h-28 bg-gradient-to-br from-[#3b82f6]/5 to-[#10b981]/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
          
          {/* Animated Grid Pattern */}
          <div className="absolute inset-0 opacity-6">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.06) 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}></div>
          </div>
          
          {/* Diagonal Grid Lines */}
          <div className="absolute inset-0 opacity-4">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(45deg, rgba(139, 92, 246, 0.04) 1px, transparent 1px), linear-gradient(-45deg, rgba(59, 130, 246, 0.04) 1px, transparent 1px)`,
              backgroundSize: '80px 80px'
            }}></div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-24">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-white/90 to-blue-50/50 backdrop-blur-xl rounded-full border border-white/60 shadow-lg shadow-[#3b82f6]/10 group hover:scale-105 transition-all duration-500 mb-8">
              <TrendingUp className="w-5 h-5 text-[#1e3a8a] mr-3" />
              <span className="text-[#1e3a8a] font-light text-sm tracking-wide">Our Approach</span>
            </div>
            <h2 className="text-7xl font-light text-[#1e3a8a] mb-8 tracking-tight">
              Creative{' '}
              <span className="bg-gradient-to-r from-[#3b82f6] via-[#8b5cf6] to-[#1e3a8a] bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-xl text-[#1e3a8a]/70 leading-relaxed max-w-3xl mx-auto font-light">
              We&apos;ve crafted an innovative approach that delivers maximum results with creative excellence.
            </p>
          </div>

          {/* Modern Creative Process Slider */}
          <div className="relative">
            {/* Slider Container */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/80 via-blue-50/30 to-indigo-50/40 backdrop-blur-xl border border-white/60 shadow-2xl shadow-[#3b82f6]/20">
              {/* Slider Track */}
              <div className="flex transition-transform duration-1000 ease-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {/* Card 1: We Listen */}
                <div className="w-full flex-shrink-0 p-12">
                  <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Side - Creative Visual */}
                    <div className="relative group">
                      <div className="relative w-96 h-96 mx-auto">
                        {/* Animated Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6]/20 to-[#1e3a8a]/20 rounded-full blur-3xl animate-pulse"></div>
                        
                        {/* Main Circle with Creative Elements */}
                        <div className="relative w-full h-full">
                          {/* Central Icon Container */}
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] rounded-full flex items-center justify-center shadow-2xl shadow-[#3b82f6]/40 group-hover:scale-110 transition-transform duration-700">
                            <Rocket className="w-16 h-16 text-white" />
                          </div>
                          
                          {/* Orbiting Elements */}
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <div className="absolute w-48 h-48 border border-[#3b82f6]/30 rounded-full animate-spin" style={{animationDuration: '25s'}}>
                              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#3b82f6] rounded-full shadow-lg shadow-[#3b82f6]/50"></div>
                            </div>
                            <div className="absolute w-64 h-64 border border-[#8b5cf6]/25 rounded-full animate-spin" style={{animationDuration: '35s', animationDirection: 'reverse'}}>
                              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-5 h-5 bg-[#8b5cf6] rounded-full shadow-lg shadow-[#8b5cf6]/50"></div>
                            </div>
                          </div>
                          
                          {/* Floating Accent Elements */}
                          <div className="absolute top-8 left-8 w-6 h-6 bg-gradient-to-br from-[#f59e0b] to-[#3b82f6] rounded-full animate-pulse shadow-lg shadow-[#f59e0b]/50"></div>
                          <div className="absolute bottom-8 right-8 w-4 h-4 bg-gradient-to-br from-[#10b981] to-[#8b5cf6] rounded-full animate-pulse shadow-lg shadow-[#10b981]/50"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Right Side - Content */}
                    <div className="space-y-8">
                      <div className="space-y-6">
                        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#3b82f6]/10 to-[#8b5cf6]/10 rounded-full border border-[#3b82f6]/20">
                          <span className="text-[#3b82f6] text-sm font-medium">Step 1</span>
                        </div>
                        <h3 className="text-5xl font-light text-[#1e3a8a] leading-tight">
                          We Listen.{' '}
                          <span className="bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] bg-clip-text text-transparent">Deeply.</span>
                        </h3>
                        <p className="text-xl text-[#1e3a8a]/70 leading-relaxed font-light">
                          We study your business like it&apos;s our own. No templates. No lazy guesses. We dive deep into understanding your unique challenges, goals, and vision to create solutions that truly fit.
                        </p>
                      </div>
                      
                      {/* Feature Points */}
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-[#3b82f6] rounded-full"></div>
                          <span className="text-[#1e3a8a]/80 font-light">Comprehensive business analysis</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-[#8b5cf6] rounded-full"></div>
                          <span className="text-[#1e3a8a]/80 font-light">Custom strategy development</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-[#f59e0b] rounded-full"></div>
                          <span className="text-[#1e3a8a]/80 font-light">Personalized approach</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 2: We Plan */}
                <div className="w-full flex-shrink-0 p-12">
                  <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Side - Creative Visual */}
                    <div className="relative group">
                      <div className="relative w-96 h-96 mx-auto">
                        {/* Animated Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#8b5cf6]/20 to-[#3b82f6]/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
                        
                        {/* Main Circle with Creative Elements */}
                        <div className="relative w-full h-full">
                          {/* Central Icon Container */}
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-[#8b5cf6] to-[#f59e0b] rounded-full flex items-center justify-center shadow-2xl shadow-[#8b5cf6]/40 group-hover:scale-110 transition-transform duration-700">
                            <Lightbulb className="w-16 h-16 text-white" />
                          </div>
                          
                          {/* Creative Network Pattern */}
                          <div className="absolute inset-0">
                            <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-[#8b5cf6] rounded-full animate-pulse"></div>
                            <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-[#f59e0b] rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
                            <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-[#3b82f6] rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
                            <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-[#10b981] rounded-full animate-pulse" style={{animationDelay: '0.9s'}}></div>
                            
                            {/* Connection Lines */}
                            <div className="absolute top-1/4 left-1/4 w-12 h-0.5 bg-gradient-to-r from-[#8b5cf6] to-[#f59e0b] transform rotate-45 origin-left"></div>
                            <div className="absolute top-1/4 right-1/4 w-12 h-0.5 bg-gradient-to-r from-[#f59e0b] to-[#3b82f6] transform -rotate-45 origin-right"></div>
                            <div className="absolute bottom-1/4 left-1/4 w-12 h-0.5 bg-gradient-to-r from-[#3b82f6] to-[#10b981] transform rotate-12 origin-left"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Right Side - Content */}
                    <div className="space-y-8">
                      <div className="space-y-6">
                        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#8b5cf6]/10 to-[#f59e0b]/10 rounded-full border border-[#8b5cf6]/20">
                          <span className="text-[#8b5cf6] text-sm font-medium">Step 2</span>
                        </div>
                        <h3 className="text-5xl font-light text-[#1e3a8a] leading-tight">
                          We Plan.{' '}
                          <span className="bg-gradient-to-r from-[#8b5cf6] to-[#f59e0b] bg-clip-text text-transparent">Precisely.</span>
                        </h3>
                        <p className="text-xl text-[#1e3a8a]/70 leading-relaxed font-light">
                          We build a clear, actionable plan focused on what actually moves the needle. Every strategy is data-driven, measurable, and designed for maximum impact and ROI.
                        </p>
                      </div>
                      
                      {/* Feature Points */}
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-[#8b5cf6] rounded-full"></div>
                          <span className="text-[#1e3a8a]/80 font-light">Data-driven strategy</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-[#f59e0b] rounded-full"></div>
                          <span className="text-[#1e3a8a]/80 font-light">Measurable outcomes</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-[#3b82f6] rounded-full"></div>
                          <span className="text-[#1e3a8a]/80 font-light">ROI-focused approach</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 3: We Execute */}
                <div className="w-full flex-shrink-0 p-12">
                  <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Side - Creative Visual */}
                    <div className="relative group">
                      <div className="relative w-96 h-96 mx-auto">
                        {/* Animated Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#f59e0b]/20 to-[#3b82f6]/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
                        
                        {/* Main Circle with Creative Elements */}
                        <div className="relative w-full h-full">
                          {/* Central Icon Container */}
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-[#f59e0b] to-[#10b981] rounded-full flex items-center justify-center shadow-2xl shadow-[#f59e0b]/40 group-hover:scale-110 transition-transform duration-700">
                            <Code2 className="w-16 h-16 text-white" />
                          </div>
                          
                          {/* Animated Code Blocks */}
                          <div className="absolute inset-0">
                            <div className="absolute top-8 left-8 w-16 h-8 bg-gradient-to-r from-[#3b82f6]/20 to-[#8b5cf6]/20 rounded-lg border border-[#3b82f6]/30 animate-pulse"></div>
                            <div className="absolute top-20 left-8 w-20 h-6 bg-gradient-to-r from-[#8b5cf6]/20 to-[#f59e0b]/20 rounded-lg border border-[#8b5cf6]/30 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                            <div className="absolute top-32 left-8 w-14 h-6 bg-gradient-to-r from-[#f59e0b]/20 to-[#10b981]/20 rounded-lg border border-[#f59e0b]/30 animate-pulse" style={{animationDelay: '1s'}}></div>
                            
                            <div className="absolute bottom-8 right-8 w-18 h-8 bg-gradient-to-r from-[#10b981]/20 to-[#3b82f6]/20 rounded-lg border border-[#10b981]/30 animate-pulse" style={{animationDelay: '0.3s'}}></div>
                            <div className="absolute bottom-20 right-8 w-16 h-6 bg-gradient-to-r from-[#3b82f6]/20 to-[#8b5cf6]/20 rounded-lg border border-[#3b82f6]/30 animate-pulse" style={{animationDelay: '0.8s'}}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Right Side - Content */}
                    <div className="space-y-8">
                      <div className="space-y-6">
                        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#f59e0b]/10 to-[#10b981]/10 rounded-full border border-[#f59e0b]/20">
                          <span className="text-[#f59e0b] text-sm font-medium">Step 3</span>
                        </div>
                        <h3 className="text-5xl font-light text-[#1e3a8a] leading-tight">
                          We Execute.{' '}
                          <span className="bg-gradient-to-r from-[#f59e0b] to-[#10b981] bg-clip-text text-transparent">Relentlessly.</span>
                        </h3>
                        <p className="text-xl text-[#1e3a8a]/70 leading-relaxed font-light">
                          We get to work with speed, precision, and transparency. Our team communicates clearly, delivers on time, and keeps you informed every step of the way.
                        </p>
                      </div>
                      
                      {/* Feature Points */}
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-[#f59e0b] rounded-full"></div>
                          <span className="text-[#1e3a8a]/80 font-light">Fast execution</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-[#10b981] rounded-full"></div>
                          <span className="text-[#1e3a8a]/80 font-light">Clear communication</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-[#3b82f6] rounded-full"></div>
                          <span className="text-[#1e3a8a]/80 font-light">Transparent progress</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 4: We Scale */}
                <div className="w-full flex-shrink-0 p-12">
                  <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Side - Creative Visual */}
                    <div className="relative group">
                      <div className="relative w-96 h-96 mx-auto">
                        {/* Animated Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#10b981]/20 to-[#3b82f6]/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
                        
                        {/* Main Circle with Creative Elements */}
                        <div className="relative w-full h-full">
                          {/* Central Icon Container */}
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-[#10b981] to-[#3b82f6] rounded-full flex items-center justify-center shadow-2xl shadow-[#10b981]/40 group-hover:scale-110 transition-transform duration-700">
                            <TrendingUp className="w-16 h-16 text-white" />
                          </div>
                          
                          {/* Growth Chart Elements */}
                          <div className="absolute inset-0">
                            <div className="absolute bottom-8 left-8 w-16 h-20 bg-gradient-to-t from-[#10b981]/30 to-transparent rounded-t-lg border border-[#10b981]/30"></div>
                            <div className="absolute bottom-8 left-32 w-16 h-28 bg-gradient-to-t from-[#3b82f6]/30 to-transparent rounded-t-lg border border-[#3b82f6]/30"></div>
                            <div className="absolute bottom-8 left-56 w-16 h-32 bg-gradient-to-t from-[#8b5cf6]/30 to-transparent rounded-t-lg border border-[#8b5cf6]/30"></div>
                            <div className="absolute bottom-8 left-80 w-16 h-36 bg-gradient-to-t from-[#f59e0b]/30 to-transparent rounded-t-lg border border-[#f59e0b]/30"></div>
                            
                            {/* Growth Line */}
                            <div className="absolute bottom-8 left-8 w-80 h-1 bg-gradient-to-r from-[#10b981] via-[#3b82f6] via-[#8b5cf6] to-[#f59e0b] rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Right Side - Content */}
                    <div className="space-y-8">
                      <div className="space-y-6">
                        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#10b981]/10 to-[#3b82f6]/10 rounded-full border border-[#10b981]/20">
                          <span className="text-[#10b981] text-sm font-medium">Step 4</span>
                        </div>
                        <h3 className="text-5xl font-light text-[#1e3a8a] leading-tight">
                          We Scale.{' '}
                          <span className="bg-gradient-to-r from-[#10b981] to-[#3b82f6] bg-clip-text text-transparent">With You.</span>
                        </h3>
                        <p className="text-xl text-[#1e3a8a]/70 leading-relaxed font-light">
                          We build dedicated partnerships that grow with your business. Our flexible approach ensures you always have the right team size and expertise for your evolving needs.
                        </p>
                      </div>
                      
                      {/* Feature Points */}
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-[#10b981] rounded-full"></div>
                          <span className="text-[#1e3a8a]/80 font-light">Flexible partnerships</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-[#3b82f6] rounded-full"></div>
                          <span className="text-[#1e3a8a]/80 font-light">Scalable solutions</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-[#8b5cf6] rounded-full"></div>
                          <span className="text-[#1e3a8a]/80 font-light">Long-term growth</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Navigation Dots */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
                <button className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === 0 ? 'bg-[#3b82f6]' : 'bg-[#3b82f6]/30'}`} onClick={() => goToSlide(0)}></button>
                <button className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === 1 ? 'bg-[#3b82f6]' : 'bg-[#3b82f6]/30'}`} onClick={() => goToSlide(1)}></button>
                <button className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === 2 ? 'bg-[#3b82f6]' : 'bg-[#3b82f6]/30'}`} onClick={() => goToSlide(2)}></button>
                <button className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === 3 ? 'bg-[#3b82f6]' : 'bg-[#3b82f6]/30'}`} onClick={() => goToSlide(3)}></button>
              </div>
              
              {/* Navigation Arrows */}
              <button className="absolute left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300 group" onClick={() => previousSlide()}>
                <ArrowLeft className="w-6 h-6 text-[#1e3a8a] group-hover:scale-110 transition-transform duration-300" />
              </button>
              <button className="absolute right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300 group" onClick={() => nextSlide()}>
                <ArrowRight className="w-6 h-6 text-[#1e3a8a] group-hover:scale-110 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Concluding Statement */}
          <div className="text-center mt-20">
            <h2 className="text-6xl font-light text-[#1e3a8a] mb-6">
              It&apos;s{' '}
              <span className="bg-gradient-to-r from-[#3b82f6] via-[#8b5cf6] to-[#1e3a8a] bg-clip-text text-transparent">Creative.</span>
            </h2>
            <p className="text-2xl text-[#1e3a8a]/70 font-light">
              We Listen, Plan, Execute, and{' '}
              <span className="text-[#3b82f6]">Scale Together.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Indicator */}
      <div className="text-center mt-16">
        <div className="w-8 h-8 bg-gradient-to-br from-[#3b82f6] to-[#1e3a8a] rounded-full flex items-center justify-center mx-auto animate-bounce">
          <span className="text-white text-lg">↓</span>
        </div>
      </div>

      {/* Testimonials Section */}
      <section className="py-32 relative overflow-hidden">
        {/* Enhanced Animated Background */}
        <div className="absolute inset-0">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a]/95 via-[#1e40af]/90 to-[#1e3a8a]/95"></div>
          
          {/* Floating Geometric Elements */}
          <div className="absolute top-20 left-1/4 w-40 h-40 bg-gradient-to-br from-[#3b82f6]/8 to-[#8b5cf6]/8 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-1/4 w-32 h-32 bg-gradient-to-br from-[#8b5cf6]/8 to-[#f59e0b]/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/3 w-28 h-28 bg-gradient-to-br from-[#f59e0b]/6 to-[#10b981]/6 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
          
          {/* Additional Floating Elements */}
          <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-gradient-to-br from-[#10b981]/6 to-[#3b82f6]/6 rounded-full blur-2xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-1/3 left-1/4 w-36 h-36 bg-gradient-to-br from-[#3b82f6]/5 to-[#8b5cf6]/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
          
          {/* Animated Grid Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
              backgroundSize: '80px 80px'
            }}></div>
          </div>
          
          {/* Diagonal Grid Lines */}
          <div className="absolute inset-0 opacity-3">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(45deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(-45deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
              backgroundSize: '100px 100px'
            }}></div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-24">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-white/20 to-blue-50/20 backdrop-blur-xl rounded-full border border-white/30 shadow-lg shadow-white/10 group hover:scale-105 transition-all duration-500 mb-8">
              <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
              <span className="text-white font-light text-sm tracking-wide">Client Success</span>
            </div>
            <h2 className="text-7xl font-light text-white mb-8 tracking-tight">
              Here&apos;s What Our{' '}
              <span className="bg-gradient-to-r from-[#3b82f6] via-[#8b5cf6] to-[#f59e0b] bg-clip-text text-transparent">Clients Say</span>
            </h2>
            <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto font-light">
              Real results from real businesses. See how we&apos;ve helped companies like yours achieve their growth goals.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Main Large Testimonial */}
            <div className="lg:col-span-1">
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl shadow-white/10 h-full">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl font-light">S</span>
                  </div>
                  <div>
                    <h4 className="text-white font-light text-lg">Sarah Chen</h4>
                    <p className="text-white/70 font-light text-sm">CEO, TechFlow Solutions</p>
                  </div>
                </div>
                <blockquote className="text-white/90 font-light text-lg leading-relaxed italic">
                  &quot;VGS transformed our marketing strategy completely. We saw a 300% increase in qualified leads within 6 months. Their team is incredibly responsive and truly understands our business.&quot;
                </blockquote>
                <div className="flex items-center mt-6">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-[#f59e0b] fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Two Stacked Testimonials */}
            <div className="lg:col-span-2 space-y-8">
              {/* Top Row */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-2xl shadow-white/10">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#8b5cf6] to-[#f59e0b] rounded-full flex items-center justify-center">
                      <span className="text-white text-lg font-light">M</span>
                    </div>
                    <div>
                      <h4 className="text-white font-light text-base">Mike Rodriguez</h4>
                      <p className="text-white/70 font-light text-xs">Founder, GrowthLab</p>
                    </div>
                  </div>
                  <blockquote className="text-white/80 font-light text-sm leading-relaxed">
                    &quot;The team at VGS delivered our MVP in record time. Their development skills are top-notch and they really understand startup needs.&quot;
                  </blockquote>
                  <div className="flex items-center mt-4">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-[#f59e0b] fill-current" />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-2xl shadow-white/10">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#f59e0b] to-[#10b981] rounded-full flex items-center justify-center">
                      <span className="text-white text-lg font-light">A</span>
                    </div>
                    <div>
                      <h4 className="text-white font-light text-base">Alex Thompson</h4>
                      <p className="text-white/70 font-light text-xs">Marketing Director, InnovateCorp</p>
                    </div>
                  </div>
                  <blockquote className="text-white/80 font-light text-sm leading-relaxed">
                    &quot;Working with VGS was a game-changer. They helped us optimize our conversion funnel and we saw immediate improvements in our ROI.&quot;
                  </blockquote>
                  <div className="flex items-center mt-4">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-[#f59e0b] fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Row */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-2xl shadow-white/10">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#10b981] to-[#3b82f6] rounded-full flex items-center justify-center">
                      <span className="text-white text-lg font-light">J</span>
                    </div>
                    <div>
                      <h4 className="text-white font-light text-base">Jennifer Park</h4>
                      <p className="text-white/70 font-light text-xs">CTO, DataSync Inc</p>
                    </div>
                  </div>
                  <blockquote className="text-white/80 font-light text-sm leading-relaxed">
                    &quot;VGS built our entire tech infrastructure from scratch. Their expertise in modern technologies and scalable architecture is exceptional.&quot;
                  </blockquote>
                  <div className="flex items-center mt-4">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-[#f59e0b] fill-current" />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-2xl shadow-white/10">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#3b82f6] to-[#1e3a8a] rounded-full flex items-center justify-center">
                      <span className="text-white text-lg font-light">D</span>
                    </div>
                    <div>
                      <h4 className="text-white font-light text-base">David Kim</h4>
                      <p className="text-white/70 font-light text-xs">CEO, ScaleUp Ventures</p>
                    </div>
                  </div>
                  <blockquote className="text-white/80 font-light text-sm leading-relaxed">
                    &quot;The strategic consulting from VGS helped us identify growth opportunities we never knew existed. Their insights were invaluable.&quot;
                  </blockquote>
                  <div className="flex items-center mt-4">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-[#f59e0b] fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl shadow-white/10 max-w-4xl mx-auto">
              <p className="text-white/90 font-light text-xl leading-relaxed mb-6">
                Whether you&apos;re building from scratch or fixing what&apos;s broken, or just tired of wasting time, drop us a line.
              </p>
              <a href="#contact" className="inline-block text-[#3b82f6] hover:text-[#8b5cf6] transition-all duration-500 font-light text-lg underline decoration-2 underline-offset-4 hover:decoration-[#8b5cf6]">
                We&apos;re easy to talk to.
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg">
                  <Settings className="w-10 h-10 text-white" />
                </div>
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg">
                  <Globe className="w-10 h-10 text-white" />
                </div>
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg">
                  <Users className="w-10 h-10 text-white" />
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Building better businesses through smart growth strategies.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-lg">Services</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="hover:text-white transition-colors cursor-pointer">Marketing Strategy</li>
                <li className="hover:text-white transition-colors cursor-pointer">Technology Solutions</li>
                <li className="hover:text-white transition-colors cursor-pointer">Growth Consulting</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-lg">Company</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="hover:text-white transition-colors cursor-pointer">About Us</li>
                <li className="hover:text-white transition-colors cursor-pointer">Our Process</li>
                <li className="hover:text-white transition-colors cursor-pointer">Case Studies</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-lg">Contact</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="hover:text-white transition-colors cursor-pointer">hello@vgs.com</li>
                <li className="hover:text-white transition-colors cursor-pointer">+1 (555) 123-4567</li>
                <li className="hover:text-white transition-colors cursor-pointer">Book a Call</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-12 pt-8 text-center text-gray-300">
            <p>&copy; 2024 VGS. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Creative Testimonial Section */}
      <section className="py-32 relative overflow-hidden">
        {/* Enhanced Creative Animated Background */}
        <div className="absolute inset-0">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/25 via-purple-50/20 to-indigo-50/25"></div>
          
          {/* Creative Floating Geometric Elements */}
          <div className="absolute top-20 left-1/4 w-40 h-40 bg-gradient-to-br from-[#3b82f6]/8 to-[#8b5cf6]/6 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-1/4 w-32 h-32 bg-gradient-to-br from-[#8b5cf6]/8 to-[#f59e0b]/6 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/3 w-28 h-28 bg-gradient-to-br from-[#f59e0b]/6 to-[#10b981]/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
          
          {/* Additional Creative Elements */}
          <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-gradient-to-br from-[#10b981]/6 to-[#3b82f6]/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-1/3 left-1/4 w-36 h-36 bg-gradient-to-br from-[#3b82f6]/5 to-[#8b5cf6]/4 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
          
          {/* Creative Animated Grid Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px)`,
              backgroundSize: '80px 80px'
            }}></div>
          </div>
          
          {/* Creative Diagonal Grid Lines */}
          <div className="absolute inset-0 opacity-3">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(45deg, rgba(139, 92, 246, 0.03) 1px, transparent 1px), linear-gradient(-45deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px)`,
              backgroundSize: '100px 100px'
            }}></div>
          </div>

          {/* Creative Floating Triangles */}
          <div className="absolute top-16 left-16 w-8 h-8 bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] transform rotate-45 animate-float shadow-lg shadow-[#3b82f6]/30"></div>
          <div className="absolute top-32 right-20 w-6 h-6 bg-gradient-to-br from-[#8b5cf6] to-[#f59e0b] transform rotate-45 animate-float" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-24 left-24 w-10 h-10 bg-gradient-to-br from-[#f59e0b] to-[#3b82f6] transform rotate-45 animate-float" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-24">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-white/90 to-blue-50/50 backdrop-blur-xl rounded-full border border-white/60 shadow-lg shadow-[#3b82f6]/10 group hover:scale-105 transition-all duration-500 mb-8">
              <div className="w-2 h-2 bg-[#3b82f6] rounded-full mr-3"></div>
              <span className="text-[#1e3a8a] font-light text-sm tracking-wide">Founder&apos;s Story</span>
            </div>
            <h2 className="text-7xl font-light text-[#1e3a8a] mb-8 tracking-tight">
              Why We&apos;re{' '}
              <span className="bg-gradient-to-r from-[#3b82f6] via-[#8b5cf6] to-[#1e3a8a] bg-clip-text text-transparent">Different</span>
            </h2>
            <p className="text-xl text-[#1e3a8a]/70 leading-relaxed max-w-3xl mx-auto font-light">
              A personal story that drives everything we do at VGS.
            </p>
          </div>

          {/* Creative Testimonial Content */}
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Side - Creative Quote Design */}
            <div className="relative">
              {/* Creative Quote Container */}
              <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-12 border border-white/60 shadow-2xl shadow-[#3b82f6]/20">
                {/* Creative Opening Quote Mark */}
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] rounded-full flex items-center justify-center shadow-2xl shadow-[#3b82f6]/40">
                  <span className="text-white text-3xl font-light">&quot;</span>
                </div>
                
                {/* Creative Quote Content */}
                <div className="relative z-10 space-y-8">
                  <blockquote className="text-2xl text-[#1e3a8a] leading-relaxed font-light">
                    I&apos;ve been the frustrated client, overcharged and let down.
                    <br /><br />
                    That&apos;s why I started VGS, to connect great talent with real trust.
                    <br /><br />
                    Now, we help businesses grow smarter and spend wisely.
                  </blockquote>
                  
                  {/* Creative Attribution */}
                  <div className="flex items-center space-x-4">
                    <div className="w-1 h-8 bg-gradient-to-b from-[#3b82f6] to-[#8b5cf6] rounded-full"></div>
                    <div>
                      <h4 className="text-xl font-light text-[#1e3a8a]">Shanwadeeshan</h4>
                      <p className="text-[#1e3a8a]/70 font-light">Founder & CEO, VGS</p>
                    </div>
                  </div>
                </div>

                {/* Creative Closing Quote Mark */}
                <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-gradient-to-br from-[#8b5cf6] to-[#f59e0b] rounded-full flex items-center justify-center shadow-2xl shadow-[#8b5cf6]/40">
                  <span className="text-white text-3xl font-light">&quot;</span>
                </div>

                {/* Creative Floating Elements Around Quote */}
                <div className="absolute -top-4 -right-4 w-3 h-3 bg-[#3b82f6]/30 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-2 h-2 bg-[#8b5cf6]/30 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute top-1/2 -left-2 w-1 h-1 bg-[#f59e0b]/30 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute top-1/2 -right-2 w-1.5 h-1.5 bg-[#10b981]/30 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
              </div>

              {/* Creative Background Elements */}
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-[#3b82f6]/10 to-[#8b5cf6]/8 rounded-full blur-2xl animate-pulse" style={{animationDelay: '0.3s'}}></div>
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br from-[#8b5cf6]/10 to-[#f59e0b]/8 rounded-full blur-2xl animate-pulse" style={{animationDelay: '0.8s'}}></div>
            </div>

            {/* Right Side - Creative Profile Design */}
            <div className="relative">
              <div className="relative w-96 h-96 mx-auto">
                {/* Creative Multi-layered Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6]/20 to-[#8b5cf6]/15 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute inset-4 bg-gradient-to-br from-[#8b5cf6]/15 to-[#f59e0b]/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute inset-8 bg-gradient-to-br from-[#f59e0b]/10 to-[#10b981]/8 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
                
                {/* Creative Profile Frame */}
                <div className="relative w-full h-full">
                  {/* Outer Ring */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] rounded-full p-3 shadow-2xl shadow-[#1e3a8a]/30">
                    {/* Inner Ring */}
                    <div className="w-full h-full bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] rounded-full p-3">
                      {/* Profile Photo Container */}
                      <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center relative overflow-hidden">
                        {/* Creative Profile Placeholder */}
                        <div className="text-center relative z-10">
                          <div className="w-32 h-32 bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl shadow-[#1e3a8a]/40">
                            <UserCheck className="w-32 h-32 text-white" />
                          </div>
                          <p className="text-[#1e3a8a] font-light text-lg">Professional Photo</p>
                        </div>
                        
                        {/* Creative Background Pattern */}
                        <div className="absolute inset-0 opacity-10">
                          <div className="absolute inset-0" style={{
                            backgroundImage: `radial-gradient(circle at 25% 25%, #1e3a8a 1px, transparent 1px)`,
                            backgroundSize: '30px 30px'
                          }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Creative Orbiting Elements */}
                  <div className="absolute inset-0 rounded-full border border-[#3b82f6]/20 animate-spin" style={{animationDuration: '30s'}}>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#3b82f6] rounded-full shadow-lg shadow-[#3b82f6]/50"></div>
                  </div>
                  <div className="absolute inset-0 rounded-full border border-[#8b5cf6]/15 animate-spin" style={{animationDuration: '25s', animationDirection: 'reverse'}}>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#8b5cf6] rounded-full shadow-lg shadow-[#8b5cf6]/50"></div>
                  </div>
                  <div className="absolute inset-0 rounded-full border border-[#f59e0b]/10 animate-spin" style={{animationDuration: '35s'}}>
                    <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#f59e0b] rounded-full shadow-lg shadow-[#f59e0b]/50"></div>
                  </div>
                </div>

                {/* Creative Floating Accent Elements */}
                <div className="absolute -top-4 -right-4 w-6 h-6 bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] rounded-full shadow-lg shadow-[#3b82f6]/50 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-4 h-4 bg-gradient-to-br from-[#8b5cf6] to-[#f59e0b] rounded-full shadow-lg shadow-[#8b5cf6]/50 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute top-1/2 -left-6 w-3 h-3 bg-gradient-to-br from-[#f59e0b] to-[#10b981] rounded-full shadow-lg shadow-[#f59e0b]/50 animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute top-1/2 -right-6 w-3 h-3 bg-gradient-to-br from-[#10b981] to-[#3b82f6] rounded-full shadow-lg shadow-[#3b82f6]/50 animate-pulse" style={{animationDelay: '1.5s'}}></div>
              </div>

              {/* Creative Connection Lines */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-96 h-96 border border-[#3b82f6]/10 rounded-full animate-spin" style={{animationDuration: '40s'}}></div>
                <div className="w-80 h-80 border border-[#8b5cf6]/8 rounded-full animate-spin" style={{animationDuration: '30s', animationDirection: 'reverse'}}></div>
                <div className="w-64 h-64 border border-[#f59e0b]/6 rounded-full animate-spin" style={{animationDuration: '50s'}}></div>
              </div>
            </div>
          </div>

          {/* Creative Bottom Accent */}
          <div className="text-center mt-20">
            <div className="inline-flex items-center space-x-4 bg-white/80 backdrop-blur-xl rounded-full px-8 py-4 border border-white/60 shadow-lg shadow-[#3b82f6]/10">
              <div className="w-3 h-3 bg-[#3b82f6] rounded-full animate-pulse"></div>
              <span className="text-[#1e3a8a] font-light text-lg">Building trust through transparency</span>
              <div className="w-3 h-3 bg-[#8b5cf6] rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}