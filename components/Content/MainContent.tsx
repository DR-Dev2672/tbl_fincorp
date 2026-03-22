"use client";

import { motion } from "framer-motion";
import {
  TrendingDown,
  AlertCircle,
  CheckCircle2,
  CreditCard,
  Zap,
  Shield,
  ArrowDown,
} from "lucide-react";

export const MainContent = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <main className="w-full min-h-screen bg-gradient-to-b from-slate-50 to-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Smart Debt Management Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take control of your finances and eliminate high-interest debt with our intelligent EMI conversion plans
          </p>
        </motion.div>

        {/* Main Problem & Solution Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-8 lg:grid-cols-2 mb-16"
        >
          {/* Problems Section */}
          <motion.div
            variants={itemVariants}
            className="relative p-8 rounded-2xl border-2 border-red-200 bg-gradient-to-br from-red-50 to-pink-50 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
              <AlertCircle className="h-6 w-6 text-white" />
            </div>

            <h2 className="text-2xl font-bold text-red-700 mb-6 mt-2">
              Common Debt Traps
            </h2>

            <ul className="space-y-4">
              <li className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-2 w-2 bg-red-500 rounded-full mt-2"></div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">
                    High Interest Rates (30–50% on Credit Cards)
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Credit card interest rates can be devastating. On a ₹1,00,000 balance at 40% APR, you're paying ₹3,333+ monthly in interest alone!
                  </p>
                </div>
              </li>

              <li className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-2 w-2 bg-red-500 rounded-full mt-2"></div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">
                    Only Paying Minimum Due (Very Costly)
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Paying just the minimum due means you're mostly covering interest, not principal. It keeps you trapped in debt for years.
                  </p>
                </div>
              </li>

              <li className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-2 w-2 bg-red-500 rounded-full mt-2"></div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">
                    Growing Debt Spiral
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Without intervention, compound interest creates an ever-growing burden that becomes harder to escape.
                  </p>
                </div>
              </li>
            </ul>

            <div className="mt-8 p-4 bg-red-100 rounded-lg border-l-4 border-red-500">
              <p className="text-red-800 font-semibold text-sm">
                ⚠️ Fact: The average credit card debt takes 5+ years to pay off with minimum payments alone.
              </p>
            </div>
          </motion.div>

          {/* Solutions Section */}
          <motion.div
            variants={itemVariants}
            className="relative p-8 rounded-2xl border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
              <CheckCircle2 className="h-6 w-6 text-white" />
            </div>

            <h2 className="text-2xl font-bold text-green-700 mb-6 mt-2">
              Our Smart Solutions
            </h2>

            <ul className="space-y-4">
              <li className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <Zap className="h-5 w-5 text-green-600 flex-shrink-0" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">
                    Reduce Credit Card & Loan Interest
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    We help you negotiate lower rates or consolidate debt, reducing your overall interest burden significantly.
                  </p>
                </div>
              </li>

              <li className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <TrendingDown className="h-5 w-5 text-green-600 flex-shrink-0" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">
                    Convert High-Interest Debt into Lower EMI Plans
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Transform your credit card debt into affordable monthly EMIs (3–5 years), making repayment manageable and predictable.
                  </p>
                </div>
              </li>

              <li className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <Shield className="h-5 w-5 text-green-600 flex-shrink-0" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">
                    Manage Your Overall Credit Health
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Track, consolidate, and optimize all your debts in one place. Improve your credit score while reducing interest.
                  </p>
                </div>
              </li>
            </ul>

            <div className="mt-8 p-4 bg-green-100 rounded-lg border-l-4 border-green-500">
              <p className="text-green-800 font-semibold text-sm">
                ✓ Save up to 60% on interest and get debt-free 2-3 years earlier!
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Benefits Comparison */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">The Impact</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: CreditCard,
                title: "Interest Saved",
                value: "Up to 60%",
                description: "Reduce your total interest burden significantly",
              },
              {
                icon: TrendingDown,
                title: "Faster Payoff",
                value: "2-3 Years",
                description: "Get debt-free sooner with optimized EMI plans",
              },
              {
                icon: Shield,
                title: "Credit Score",
                value: "+ 100 pts",
                description: "Improve your creditworthiness and financial health",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200 text-center shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-500 rounded-lg">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-2xl font-bold text-blue-600 mb-2">
                  {benefit.value}
                </p>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 p-12 text-center shadow-2xl"
        >
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-300 rounded-full blur-3xl mix-blend-multiply animate-blob"></div>
            <div className="absolute top-0 right-1/4 w-72 h-72 bg-purple-300 rounded-full blur-3xl mix-blend-multiply animate-blob animation-delay-2000"></div>
          </div>

          <motion.div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Eliminate Your Debt?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Start your journey to financial freedom with TBL Fincorp's smart debt solutions today
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 mx-auto"
            >
              Get Your Free Debt Analysis
              <ArrowDown className="h-5 w-5" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
};
