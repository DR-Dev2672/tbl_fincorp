"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Business Owner",
    company: "Tech Solutions Ltd",
    feedback:
      "TBL Fincorp helped me consolidate my credit card debt into manageable EMIs. I saved ₹2,50,000 in interest and became debt-free in just 3 years!",
    rating: 5,
    avatar: "RK",
    bgColor: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Financial Analyst",
    company: "Investment Corp",
    feedback:
      "The interest rates they offered were incredible. My monthly EMI reduced from ₹45,000 to ₹28,000, freeing up cash flow for my business expansion.",
    rating: 5,
    avatar: "PS",
    bgColor: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Entrepreneur",
    company: "Digital Marketing Agency",
    feedback:
      "Outstanding service! The entire process was smooth and transparent. My credit score improved by 120 points within 6 months. Highly recommended!",
    rating: 5,
    avatar: "AP",
    bgColor: "from-green-500 to-emerald-500",
  },
  {
    id: 4,
    name: "Deepa Nair",
    role: "Senior Manager",
    company: "Global Consulting",
    feedback:
      "I was drowning in multiple loans with different interest rates. TBL Fincorp consolidated everything into one simple EMI. Perfect solution!",
    rating: 5,
    avatar: "DN",
    bgColor: "from-orange-500 to-red-500",
  },
  {
    id: 5,
    name: "Vikram Singh",
    role: "Director",
    company: "Manufacturing Co.",
    feedback:
      "The customer support team was exceptional. They guided me through every step and ensured I got the best possible deal. Truly impressed!",
    rating: 5,
    avatar: "VS",
    bgColor: "from-indigo-500 to-blue-500",
  },
  {
    id: 6,
    name: "Neha Gupta",
    role: "HR Professional",
    company: "IT Services",
    feedback:
      "TBL Fincorp's solution was exactly what I needed. Simple, transparent, and effective. My family's financial stress reduced significantly.",
    rating: 5,
    avatar: "NG",
    bgColor: "from-pink-500 to-rose-500",
  },
];

export const Testimonials = () => {
  return (
    <section className="w-full py-20 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-4 text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied customers who transformed their financial lives with TBL Fincorp
          </p>
        </motion.div>
      </div>

      {/* Testimonials Marquee */}
      <div className="relative mt-12 w-full overflow-hidden">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white via-white/50 to-transparent pointer-events-none z-10"></div>
        <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white via-white/50 to-transparent pointer-events-none z-10"></div>

        <motion.div
          className="flex gap-8 w-max"
          animate={{ x: [0, -1500] }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
            repeatType: "loop",
          }}
        >
          {[...testimonials, ...testimonials, ...testimonials].map(
            (testimonial, index) => (
              <motion.div
                key={`${testimonial.id}-${index}`}
                whileHover={{ y: -10 }}
                className="flex-shrink-0 w-96 group"
              >
                <div className="relative h-full p-8 rounded-2xl bg-white border-2 border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  {/* Gradient Background Accent */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-300"></div>

                  <div className="relative z-10">
                    {/* Quote Icon */}
                    <div className="mb-4 flex items-center gap-4">
                      <div className="p-2 bg-blue-50 rounded-lg">
                        <Quote className="h-5 w-5 text-blue-500" />
                      </div>
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Feedback */}
                    <p className="text-gray-700 leading-relaxed mb-6 font-medium">
                      "{testimonial.feedback}"
                    </p>

                    {/* Divider */}
                    <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6"></div>

                    {/* User Info */}
                    <div className="flex items-center gap-4">
                      <div
                        className={`h-14 w-14 rounded-full bg-gradient-to-br ${testimonial.bgColor} text-white flex items-center justify-center font-bold text-lg shadow-md`}
                      >
                        {testimonial.avatar}
                      </div>
                      <div className="flex-1 text-left">
                        <h4 className="font-bold text-gray-900 text-sm">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-600 text-xs">{testimonial.role}</p>
                        <p className="text-blue-600 font-semibold text-xs">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>

                    {/* Verification Badge */}
                    <div className="mt-4 flex items-center gap-2 text-xs text-green-600 font-semibold">
                      <svg
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.267 3.455a3.066 3.066 0 1 1 4.466 0 3.066 3.066 0 0 1-4.466 0zm12.935 11.52a6 6 0 0 0-9.725-5.529c.359.147.68.381.972.667a4 4 0 1 1 6.02 4.847h.997a5 5 0 0 0-1.264-8.984z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Verified Customer
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          )}
        </motion.div>
      </div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-20 grid gap-8 md:grid-cols-3"
      >
        {[
          { label: "Happy Customers", value: "5000+", icon: "👥" },
          { label: "Total EMIs Offered", value: "₹500Cr+", icon: "💰" },
          { label: "Interest Saved", value: "₹150Cr+", icon: "✨" },
        ].map((stat, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 text-center shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <p className="text-4xl mb-3">{stat.icon}</p>
            <p className="text-3xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              {stat.value}
            </p>
            <p className="text-gray-600 font-semibold">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-16 text-center"
      >
        <p className="text-gray-600 mb-6 text-lg">
          Join thousands of customers and start your debt-free journey today!
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Share Your Success Story
        </motion.button>
      </motion.div>
    </section>
  );
};
