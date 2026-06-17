"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="glass-card p-8 md:p-12 relative overflow-hidden group border border-slate-200"
        >
          {/* Subtle gradient background for the card */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
            {/* Developer Avatar */}
            <div className="w-48 h-48 md:w-64 md:h-64 shrink-0 rounded-2xl overflow-hidden relative shadow-md border border-slate-200">
              <div className="absolute inset-0 bg-slate-100 animate-pulse" />
              <Image
                src="/images/avatar.png"
                alt="Dhiraj - Full Stack Developer"
                fill
                className="object-cover object-center w-full h-full relative z-10"
                priority
              />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 flex items-center gap-3 text-slate-900">
                About Me
                <span className="h-[2px] w-12 bg-gradient-to-r from-brand-500 to-transparent block rounded-full" />
              </h2>

              <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                <p>
                  Hello! I'm a dedicated Full-Stack Developer with a deep passion for building scalable, interactive, and visually stunning web applications.
                </p>
                <p>
                  My journey in web development started with a curiosity about how things work under the hood. Today, I specialize in crafting seamless user experiences on the frontend while designing robust, efficient architectures on the backend.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, solving complex algorithmic challenges, or contributing to the developer community.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
