"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6" id="home">
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{
            x: mousePosition.x * 2,
            y: mousePosition.y * 2,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          className="w-[800px] h-[800px] border border-slate-200 rounded-full absolute"
        />
        <motion.div
          animate={{
            x: mousePosition.x * -3,
            y: mousePosition.y * -3,
          }}
          transition={{ type: "spring", stiffness: 40, damping: 20 }}
          className="w-[600px] h-[600px] border border-brand-500/20 rounded-full absolute"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="px-4 py-1.5 rounded-full border border-slate-200 glass mb-8 inline-flex items-center gap-2 shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse" />
          <span className="text-sm font-medium text-slate-600">Available for new opportunities</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight mb-6 text-slate-900"
        >
          Hi, I'm{" "}
          <span className="relative inline-block">
            <span className="text-gradient hover:animate-pulse transition-all">Dhiraj</span>
            <motion.span
              className="absolute -bottom-2 left-0 w-full h-[6px] bg-gradient-to-r from-brand-500 to-accent-500 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-2xl text-slate-500 mb-10 max-w-2xl font-light"
        >
          A passionate <strong className="text-slate-900 font-semibold">Full-Stack Developer</strong> transforming ideas into beautifully crafted, scalable web applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <Link href="#projects" className="group relative px-8 py-4 bg-slate-900 text-white font-semibold rounded-xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl hover:bg-slate-800">
            <span className="relative z-10 flex items-center gap-2">
              View Work
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-700 to-slate-900 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>

          <Link href="#contact" className="group relative px-8 py-4 glass text-slate-800 font-semibold rounded-xl transition-all hover:bg-slate-100 hover:border-slate-300 hover:scale-105 active:scale-95">
            <span className="relative z-10">Contact Me</span>
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-slate-400 uppercase tracking-widest font-medium">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-slate-400 to-transparent" />
      </motion.div>
    </section>
  );
}
