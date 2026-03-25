"use client"
import React from "react"
import { Phone, Mail, Sparkles } from "lucide-react"

interface Advisor {
  name: string
  experience: string
  phone: string
  email: string
  specialities: string
}
const advisors: Advisor[] = [
  {
    name: "Aarav Mehta",
    experience: "15 years in equity and portfolio advisory",
    phone: "+911234567890",
    email: "aarav.mehta@tblfincorp.com",
    specialities: "Retirement planning, wealth creation",
  },
  {
    name: "Priya Gupta",
    experience: "12 years in fixed-income and risk management",
    phone: "+919876543210",
    email: "priya.gupta@tblfincorp.com",
    specialities: "Tax-efficient investing, insurance overlay",
  },
  {
    name: "Rahul Sharma",
    experience: "10 years in tech startup investment advisory",
    phone: "+918765432100",
    email: "rahul.sharma@tblfincorp.com",
    specialities: "Seed stage, early growth, exit planning",
  },
  {
    name: "Neha Reddy",
    experience: "9 years in international asset allocation",
    phone: "+917654321000",
    email: "neha.reddy@tblfincorp.com",
    specialities: "Global ETFs, FX-hedging strategies",
  },
]
function AdvisorCard({ advisor }: { advisor: Advisor }) {
  const callNow = () => {
    if (typeof window !== "undefined") {
      window.location.href = `tel:${advisor.phone}`
    }
  }
  const connectNow = () => {
    if (typeof window !== "undefined") {
      window.open(
        `mailto:${advisor.email}?subject=Investment%20advisor%20call%20request&body=Hi%20${encodeURIComponent(
          advisor.name
        )}%2C%0A%0AI%20would%20like%20to%20book%20a%20call%20for%20investment%20advice%20.%20Please%20share%20your%20next%20available%20slots.%0A%0AThanks%2C`,
        "_blank"
      )
    }
  }
  return (
    <div className="group inline-block w-[300px] overflow-hidden rounded-3xl bg-gradient-to-br from-slate-50 to-white border border-slate-200/80 p-6 shadow-lg shadow-slate-300/20 text-slate-800 transition-all duration-300 hover:shadow-xl hover:shadow-slate-400/30 hover:-translate-y-1">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-slate-900 tracking-tight">{advisor.name}</h3>
        </div>
        <div className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Sparkles className="w-5 h-5 text-indigo-500" />
        </div>
      </div>
      <p className="mt-2 text-sm font-semibold text-indigo-600 uppercase tracking-wide">{advisor.specialities}</p>
      <p className="mt-3 text-sm text-slate-600 leading-relaxed">{advisor.experience}</p>
      <div className="mt-6 flex gap-3">
        <button
          onClick={callNow}
          className="flex items-center justify-center flex-1 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:from-indigo-700 hover:to-blue-700 hover:shadow-lg hover:shadow-indigo-300/50 active:scale-95"
        >
          <Phone className="w-4 h-4 mr-1.5" />
          Call
        </button>
        <button
          onClick={connectNow}
          className="flex items-center justify-center flex-1 rounded-xl bg-slate-100 px-4 py-2.5 text-sm font-semibold text-slate-700 transition-all duration-300 hover:bg-slate-200 hover:shadow-lg hover:shadow-slate-300/30 active:scale-95"
        >
          <Mail className="w-4 h-4 mr-1.5" />
          Email
        </button>
      </div>
    </div>
  )
}
export default function InvestmentPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50/50 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-100 to-transparent rounded-full blur-3xl opacity-40" />
        <div className="absolute top-1/3 -left-40 w-80 h-80 bg-gradient-to-br from-blue-100 to-transparent rounded-full blur-3xl opacity-30" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 py-12 sm:py-20">
        <header className="mb-12 sm:mb-16 space-y-5 text-center">
          <div className="inline-block">
            <p className="text-5xl font-bold text-indigo-600">Investment Advisory</p>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight tracking-tight py-6">
            Your Journey to <span className="bg-gradient-to-r from-indigo-600 to-blue-600 text-transparent bg-clip-text">Financial Growth</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
            Meet our team of expert advisors with decades of proven results. Connect directly with specialists who understand your financial goals.
          </p>
        </header>

        <section className="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-white shadow-2xl shadow-slate-200/30">
          {/* Top gradient accent */}
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-b from-indigo-50 to-transparent rounded-full blur-3xl opacity-60 pointer-events-none" />
          
          <div className="relative z-10 px-4 sm:px-6 py-8 ">
            <div className="flex h-auto  sm:h-[280px] min-w-full items-center overflow-hidden">
              <div className="flex animate-marquee whitespace-nowrap gap-6 px-3 py-4">
                {advisors.map((advisor) => (
                  <AdvisorCard key={advisor.email} advisor={advisor} />
                ))}
                {advisors.map((advisor) => (
                  <AdvisorCard key={advisor.email + "-dup"} advisor={advisor} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Info section below cards */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl border border-slate-200/60 p-6 sm:p-8 shadow-lg shadow-slate-200/20 hover:shadow-xl hover:shadow-slate-300/30 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">📈</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Expert Guidance</h3>
            <p className="text-slate-600 text-sm leading-relaxed">Access personalized investment strategies from seasoned professionals.</p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200/60 p-6 sm:p-8 shadow-lg shadow-slate-200/20 hover:shadow-xl hover:shadow-slate-300/30 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Quick Connection</h3>
            <p className="text-slate-600 text-sm leading-relaxed">Book calls or send emails directly from advisor cards instantly.</p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200/60 p-6 sm:p-8 shadow-lg shadow-slate-200/20 hover:shadow-xl hover:shadow-slate-300/30 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Proven Results</h3>
            <p className="text-slate-600 text-sm leading-relaxed">Trusted by thousands of clients for comprehensive financial planning.</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </main>
  )
}
