"use client";

import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import {
  Twitter,
  Linkedin,
  Github,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  Shield,
  TrendingUp,
  Heart,
  ArrowRight
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative w-full bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 mt-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(156,146,172,0.15)_1px,transparent_0)] bg-size-[20px_20px]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-pink-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-16">
        {/* Main Content Grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 group">
              <div className="relative">
                <div className="h-14 w-14 rounded-2xl bg-linear-to-br from-blue-500 to-purple-600 text-white flex items-center justify-center font-bold text-2xl shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                  <Sparkles className="h-7 w-7" />
                </div>
                <div className="absolute -top-1 -right-1 h-5 w-5 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-2xl bg-linear-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  TBL Fincorp
                </span>
                <span className="text-sm text-blue-300 font-medium">Financial Solutions</span>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed">
              Secure, fast, and reliable financial solutions powered by trusted banking partners across India.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-white/70">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+91 1800-XXX-XXXX</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">Mumbai, India</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-bold text-xl text-white mb-6 flex items-center gap-2">
              <Shield className="h-5 w-5 text-blue-400" />
              Company
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Our Services" },
                { href: "/partners", label: "Banking Partners" },
                { href: "/careers", label: "Careers" },
                { href: "/contact", label: "Contact Us" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/70 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            
            <h3 className="font-bold text-xl text-white mb-6 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-purple-400" />
              Services
            </h3>
            
            <ul className="space-y-3">
              {[
                { label: "Loan Processing",key:"/services/loan" },
                { label: "Credit Assessment",key:"/services/credit" },
                { label: "Financial Planning",key:"/services/finance" },
                { label: "Investment Advisory",key:"/services/investment" },
                { label: "Insurance Solutions",key:"/services/insurance" },
              ].map((item) => (
                <li key={item.label}>
                  <span className="text-white/70 hover:text-white transition-colors duration-200 cursor-pointer flex items-center gap-2">
                    <div className="h-1.5 w-1.5 bg-blue-400 rounded-full"></div>
                    <Link href={item.key}>
                    {item.label}
                    </Link>
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div>
              <h3 className="font-bold text-xl text-white mb-4">Stay Connected</h3>
              <p className="text-white/70 text-sm mb-4">
                Get the latest financial insights and product updates delivered to your inbox.
              </p>
              <div className="flex gap-2">
                <Input
                  placeholder="Enter your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-xl focus:border-blue-400"
                />
                <Button className="bg-linear-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-xl shadow-lg">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-white mb-3">Follow Us</h4>
              <div className="flex gap-3">
                {[
                  { icon: Twitter, href: "#", color: "hover:text-blue-400" },
                  { icon: Linkedin, href: "#", color: "hover:text-blue-500" },
                  { icon: Github, href: "#", color: "hover:text-gray-300" },
                ].map((social) => (
                  <motion.a
                    key={social.href}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-2 bg-white/10 rounded-lg text-white/70 ${social.color} transition-colors duration-200`}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <Separator className="bg-white/10" />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-2 text-white/60 text-sm">
            <span>© {new Date().getFullYear()} TBL Fincorp. All rights reserved.</span>
            <Heart className="h-4 w-4 text-red-400 animate-pulse" />
          </div>

          <div className="flex items-center gap-6 text-sm">
            <Link href="/privacy" className="text-white/60 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/60 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/security" className="text-white/60 hover:text-white transition-colors">
              Security
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
