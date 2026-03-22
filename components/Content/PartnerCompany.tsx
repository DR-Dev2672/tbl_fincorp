"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import img from "./logos/hdfc.png"
const partners = [
  {
    name: "Kotak Mahindra Bank",
    logo: "/kotak.png",
  },
  {
    name: "ICICI Bank",
    logo: "/icici.png",
  },
  {
    name: "HDFC Bank",
    logo: "/hdfc.png",
  },
];

export const PartnerCompany=()=> {
  return (
    <section className="w-full py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Trusted by Leading Banks
        </h2>
        <p className="mt-3 text-muted-foreground">
          Seamless integrations with India’s most reliable financial institutions
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative mt-12 w-full overflow-hidden">
        <motion.div
          className="flex gap-12 w-max"
          animate={{ x: [0, -1200] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
            repeatType: "loop",
          }}
        >
          {[...partners, ...partners, ...partners].map((partner, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center min-w-[200px] h-24 bg-background border rounded-2xl shadow-sm px-6"
              whileHover={{ 
                scale: 1.08,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
              transition={{ 
                duration: 0.3,
              }}
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={40}
                className="object-contain object-fit"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Gradient Fade */}
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
