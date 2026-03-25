"use client"
import React from "react"
import Link from "next/link"
import { CreditCard, PiggyBank, Shield, TrendingUp, DollarSign, ArrowRight } from "lucide-react"

const services = [
  {
    id: "credit",
    title: "Credit Services",
    description: "Comprehensive credit solutions tailored to your financial needs. From personal loans to business financing, we provide flexible credit options with competitive rates.",
    icon: CreditCard,
    features: ["Personal Loans", "Business Credit", "Credit Cards", "Debt Consolidation"],
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50",
  },
  {
    id: "finance",
    title: "Financial Planning",
    description: "Expert financial planning services to help you achieve your financial goals. Our certified planners create personalized strategies for wealth building and protection.",
    icon: PiggyBank,
    features: ["Wealth Management", "Retirement Planning", "Tax Planning", "Estate Planning"],
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-50 to-emerald-50",
  },
  {
    id: "insurance",
    title: "Insurance Solutions",
    description: "Complete insurance coverage for individuals and businesses. Protect what matters most with our comprehensive insurance products and expert guidance.",
    icon: Shield,
    features: ["Life Insurance", "Health Insurance", "Property Insurance", "Business Insurance"],
    gradient: "from-purple-500 to-indigo-500",
    bgGradient: "from-purple-50 to-indigo-50",
  },
  {
    id: "investment",
    title: "Investment Advisory",
    description: "Professional investment advice and portfolio management. Our experienced advisors help you make informed investment decisions for long-term growth.",
    icon: TrendingUp,
    features: ["Portfolio Management", "Stock Trading", "Mutual Funds", "Retirement Accounts"],
    gradient: "from-orange-500 to-red-500",
    bgGradient: "from-orange-50 to-red-50",
  },
  {
    id: "loan",
    title: "Loan Services",
    description: "Diverse loan options to meet your borrowing needs. From home loans to education financing, we offer competitive rates and flexible terms.",
    icon: DollarSign,
    features: ["Home Loans", "Education Loans", "Car Loans", "Personal Loans"],
    gradient: "from-teal-500 to-blue-500",
    bgGradient: "from-teal-50 to-blue-50",
  },
]

function ServiceCard({ service }: { service: typeof services[0] }) {
  const Icon = service.icon

  return (
    <Link href={`/services/${service.id}`} className="group block">
      <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${service.bgGradient} border border-slate-200/60 p-8 shadow-lg shadow-slate-200/20 transition-all duration-300 hover:shadow-xl hover:shadow-slate-300/30 hover:-translate-y-2`}>
        {/* Background decoration */}
        <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${service.gradient} rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />

        <div className="relative z-10">
          {/* Icon */}
          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} text-white mb-6 shadow-lg`}>
            <Icon className="w-8 h-8" />
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-slate-800 transition-colors">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-slate-600 leading-relaxed mb-6 text-base">
            {service.description}
          </p>

          {/* Features */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-slate-700 uppercase tracking-wide mb-3">Key Services</h4>
            <div className="grid grid-cols-2 gap-2">
              {service.features.map((feature, index) => (
                <div key={index} className="flex items-center text-sm text-slate-600">
                  <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient} mr-2`} />
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex items-center text-slate-700 font-semibold group-hover:text-slate-900 transition-colors">
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  )
}

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50/50 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-100 to-transparent rounded-full blur-3xl opacity-40" />
        <div className="absolute top-1/3 -left-40 w-80 h-80 bg-gradient-to-br from-blue-100 to-transparent rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-gradient-to-br from-purple-100 to-transparent rounded-full blur-3xl opacity-25" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        {/* Header Section */}
        <header className="mb-16 sm:mb-20 space-y-8 text-center">
          <div className="inline-block">
            <h2 className="text-5xl sm:text-6xl py-4 lg:text-7xl font-black text-indigo-600 uppercase tracking-wider relative">
              Our Services
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-48 h-2 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full shadow-lg"></div>
            </h2>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight tracking-tight">
            Comprehensive <span className="bg-gradient-to-r from-indigo-600 to-blue-600 text-transparent bg-clip-text">Financial Solutions</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
            Discover our complete range of financial services designed to meet all your banking, investment, and protection needs. From credit solutions to wealth management, we're here to support your financial journey.
          </p>
        </header>

        {/* Services Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </section>

        {/* Bottom CTA Section */}
        <section className="mt-16 sm:mt-20 text-center">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl shadow-slate-900/20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Connect with our financial experts today and take the first step towards achieving your financial goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-indigo-300/50"
              >
                Contact Us Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}