"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { Menu, X, Sparkles, Shield, TrendingUp } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-linear-to-r from-slate-900 via-purple-900 to-slate-900 backdrop-blur-lg border-b border-white/10 sticky top-0 z-50 shadow-2xl">
      <div className="absolute inset-0 bg-linear-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8 py-3 sm:py-4 md:py-5 flex items-center justify-between gap-3">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="h-12 w-12 rounded-2xl bg-linear-to-br from-blue-500 to-purple-600 text-white flex items-center justify-center font-bold text-xl shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                <Sparkles className="h-6 w-6" />
              </div>
              <div className="absolute -top-1 -right-1 h-4 w-4 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl bg-linear-to-r from-white to-blue-200 bg-clip-text text-transparent">
                TBL Fincorp
              </span>
              <span className="text-xs text-blue-300 font-medium">Financial Solutions</span>
            </div>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden lg:flex items-center gap-8"
        >
          {[
            { href: "/", label: "Home", icon: Sparkles },
            { href: "/services", label: "Services", icon: Shield },
            { href: "/partners", label: "Partners", icon: TrendingUp },
            { href: "/about", label: "About", icon: null },
          ].map((item, index) => (
            <motion.div
              key={item.href}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={item.href}
                className="relative flex items-center gap-2 px-4 py-2 text-white/90 hover:text-white font-medium transition-all duration-300 group"
              >
                {item.icon && <item.icon className="h-4 w-4" />}
                {item.label}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></div>
              </Link>
            </motion.div>
          ))}
        </motion.nav>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center gap-2 sm:gap-3 md:gap-4"
        >
          <Button
            variant="ghost"
            className="hidden sm:inline-flex text-white/90 hover:text-white hover:bg-white/10 border border-white/20 rounded-lg sm:rounded-xl text-sm sm:text-base px-3 py-1.5 sm:px-4 sm:py-2"
          >
            Login
          </Button>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-linear-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg sm:rounded-xl shadow-lg shadow-blue-500/25 border-0 font-semibold text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-2.5">
              Get Started
              <Sparkles className="ml-1 sm:ml-2 h-4 w-4" />
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Avatar className="h-8 w-8 sm:h-9 sm:w-9 ring-2 ring-white/20">
              <AvatarFallback className="bg-linear-to-br from-blue-400 to-purple-500 text-white font-semibold text-xs sm:text-base">
                TS
              </AvatarFallback>
            </Avatar>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-slate-900/95 backdrop-blur-lg border-t border-white/10"
        >
          <div className="px-4 py-6 space-y-4">
            {[
              { href: "/", label: "Home" },
              { href: "/services", label: "Services" },
              { href: "/partners", label: "Partners" },
              { href: "/about", label: "About" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-3 px-4 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}

      {/* Animated Bottom Border */}
      <motion.div
        className="h-0.75 bg-linear-to-r from-blue-400 via-purple-500 to-pink-400"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
    </header>
  );
};
