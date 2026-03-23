"use client"

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { CreditCard, Search } from "lucide-react";

const CreditScorePage = () => {
  const [pan, setPan] = useState("");
  const [error, setError] = useState("");
  const [score, setScore] = useState<number | null>(null);

  const validatePan = (value: string) => {
    const normalized = value.toUpperCase().replace(/\s+/g, "");
    return /^[A-Z]{5}[0-9]{4}[A-Z]$/.test(normalized);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPan(e.target.value.toUpperCase());
    setError("");
  };

  const handleCheckScore = () => {
    const trimmed = pan.trim().toUpperCase();
    if (!validatePan(trimmed)) {
      setError("Enter a valid PAN in format AAAAA9999A");
      setScore(null);
      return;
    }

    const randomScore = Math.floor(550 + Math.random() * 350);
    setScore(randomScore);
    setError("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 via-indigo-50 to-white flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-lg"
      >
        <Card className="rounded-3xl shadow-2xl overflow-hidden border border-indigo-100 bg-white/90">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 flex items-center justify-center text-white">
                <CreditCard className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-2xl font-black text-slate-900">Check Credit Score</h1>
                <p className="text-sm text-slate-500">Enter PAN to unlock your instant score estimate</p>
              </div>
            </div>

            <label className="block text-sm font-medium text-slate-600 mb-2">PAN Number</label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                type="text"
                value={pan}
                onChange={handleChange}
                placeholder="AAAAA9999A"
                className="pl-9 py-3 border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 text-lg tracking-widest"
                maxLength={10}
              />
            </div>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

            <Button
              onClick={handleCheckScore}
              className="mt-5 w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 rounded-xl transition-all"
            >
              Get Credit Score
            </Button>

            {score !== null && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="mt-6 p-5 rounded-2xl border border-indigo-100 bg-indigo-50"
              >
                <p className="text-sm text-indigo-700 font-medium">Estimated Score for PAN {pan.toUpperCase()}</p>
                <p className="text-5xl font-extrabold text-indigo-900 mt-1">{score}</p>
                <p className="text-sm text-slate-600 mt-2">
                  {score >= 750
                    ? 'Excellent credit health'
                    : score >= 700
                    ? 'Very good credit health'
                    : score >= 650
                    ? 'Good credit health'
                    : 'Needs improvement, a few remedial actions recommended'}
                </p>
              </motion.div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default CreditScorePage;
